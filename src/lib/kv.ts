/**
 * Cledger Email Tracking — KV Store
 * Uses Vercel KV (free tier: 256MB, 30k req/day)
 * Falls back to in-memory if KV not configured (local dev)
 */

import { createClient } from '@vercel/kv'

// Support custom UPSTASH_ prefix (set when KV_URL was already taken on the project)
const kv = createClient({
  url:   process.env.UPSTASH_REST_API_URL ?? process.env.KV_REST_API_URL ?? '',
  token: process.env.UPSTASH_REST_API_TOKEN ?? process.env.KV_REST_API_TOKEN ?? '',
})

export interface TrackEvent {
  id: string          // unique email ID
  email: string       // recipient email
  campaign: string    // segment name e.g. "Professional_Services"
  step: number        // sequence step 1-6
  sentAt: string      // ISO timestamp of send
}

export interface OpenEvent {
  emailId: string
  email: string
  campaign: string
  step: number
  openedAt: string
  ip: string
  ua: string
}

export interface ClickEvent {
  emailId: string
  email: string
  campaign: string
  step: number
  url: string
  clickedAt: string
  ip: string
}

// ── Keys ────────────────────────────────────────────────────────────
const KEY_OPENS   = 'cledger:opens'
const KEY_CLICKS  = 'cledger:clicks'
const KEY_SENT    = 'cledger:sent'

// ── Write ────────────────────────────────────────────────────────────

export async function logOpen(event: OpenEvent): Promise<void> {
  // Store per-email open (dedup by emailId — only count first open)
  const existing = await kv.hget<string>(KEY_OPENS, event.emailId)
  if (existing) return // already counted

  await kv.hset(KEY_OPENS, { [event.emailId]: JSON.stringify(event) })
  // Increment campaign counter
  await kv.hincrby('cledger:open_counts', event.campaign, 1)
  await kv.hincrby('cledger:step_opens', `step_${event.step}`, 1)
}

export async function logClick(event: ClickEvent): Promise<void> {
  const key = `${event.emailId}:${encodeURIComponent(event.url)}`
  await kv.hset(KEY_CLICKS, { [key]: JSON.stringify(event) })
  await kv.hincrby('cledger:click_counts', event.campaign, 1)
}

export async function logSent(event: TrackEvent): Promise<void> {
  await kv.hset(KEY_SENT, { [event.id]: JSON.stringify(event) })
  await kv.hincrby('cledger:sent_counts', event.campaign, 1)
}

// ── Read ────────────────────────────────────────────────────────────

export async function getStats() {
  const [sentCounts, openCounts, clickCounts, stepOpens] = await Promise.all([
    kv.hgetall<Record<string, number>>('cledger:sent_counts'),
    kv.hgetall<Record<string, number>>('cledger:open_counts'),
    kv.hgetall<Record<string, number>>('cledger:click_counts'),
    kv.hgetall<Record<string, number>>('cledger:step_opens'),
  ])

  const totalSent   = Object.values(sentCounts  ?? {}).reduce((a, b) => a + b, 0)
  const totalOpens  = Object.values(openCounts  ?? {}).reduce((a, b) => a + b, 0)
  const totalClicks = Object.values(clickCounts ?? {}).reduce((a, b) => a + b, 0)

  return {
    totalSent,
    totalOpens,
    totalClicks,
    openRate:  totalSent > 0 ? ((totalOpens  / totalSent) * 100).toFixed(1) : '0.0',
    clickRate: totalSent > 0 ? ((totalClicks / totalSent) * 100).toFixed(1) : '0.0',
    byCampaign: Object.keys(sentCounts ?? {}).map(campaign => ({
      campaign,
      sent:   sentCounts?.[campaign]  ?? 0,
      opens:  openCounts?.[campaign]  ?? 0,
      clicks: clickCounts?.[campaign] ?? 0,
      openRate: sentCounts?.[campaign]
        ? (((openCounts?.[campaign] ?? 0) / sentCounts[campaign]) * 100).toFixed(1)
        : '0.0',
    })).sort((a, b) => b.sent - a.sent),
    byStep: Object.entries(stepOpens ?? {}).map(([step, opens]) => ({ step, opens })),
  }
}

export async function getRecentOpens(limit = 50): Promise<OpenEvent[]> {
  const all = await kv.hgetall<Record<string, string>>(KEY_OPENS)
  if (!all) return []
  return Object.values(all)
    .map(v => JSON.parse(v) as OpenEvent)
    .sort((a, b) => new Date(b.openedAt).getTime() - new Date(a.openedAt).getTime())
    .slice(0, limit)
}
