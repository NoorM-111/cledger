'use client'

import { useEffect, useState } from 'react'

interface CampaignRow {
  campaign: string
  sent: number
  opens: number
  clicks: number
  openRate: string
}

interface Stats {
  totalSent: number
  totalOpens: number
  totalClicks: number
  openRate: string
  clickRate: string
  byCampaign: CampaignRow[]
  byStep: { step: string; opens: number }[]
}

interface OpenEvent {
  emailId: string
  email: string
  campaign: string
  step: number
  openedAt: string
}

const SECRET = process.env.NEXT_PUBLIC_TRACK_SECRET ?? ''

export default function TrackingDashboard() {
  const [stats, setStats]   = useState<Stats | null>(null)
  const [opens, setOpens]   = useState<OpenEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState('')

  useEffect(() => {
    const secret = new URLSearchParams(window.location.search).get('secret') ?? SECRET
    fetch(`/api/track/stats?secret=${secret}`)
      .then(r => r.json())
      .then(data => {
        if (data.error) { setError(data.error); return }
        setStats(data.stats)
        setOpens(data.recentOpens ?? [])
      })
      .catch(() => setError('Failed to load stats'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div style={s.page}>
      <div style={s.center}>Loading…</div>
    </div>
  )

  if (error) return (
    <div style={s.page}>
      <div style={s.center}>⚠️ {error} — add ?secret=YOUR_SECRET to the URL</div>
    </div>
  )

  if (!stats) return null

  return (
    <div style={s.page}>
      <div style={s.wrap}>

        {/* Header */}
        <div style={s.header}>
          <span style={s.logo}>Cledger</span>
          <span style={s.subtitle}>Email Tracking Dashboard</span>
        </div>

        {/* KPI row */}
        <div style={s.kpiRow}>
          <KPI label="Emails Sent"  value={stats.totalSent.toLocaleString()} />
          <KPI label="Unique Opens" value={stats.totalOpens.toLocaleString()} color="#c9a84c" />
          <KPI label="Open Rate"    value={`${stats.openRate}%`}  color="#c9a84c" />
          <KPI label="Clicks"       value={stats.totalClicks.toLocaleString()} color="#4caf82" />
          <KPI label="Click Rate"   value={`${stats.clickRate}%`} color="#4caf82" />
        </div>

        {/* Campaign table */}
        <div style={s.card}>
          <h3 style={s.cardTitle}>By Campaign</h3>
          <table style={s.table}>
            <thead>
              <tr>
                {['Campaign', 'Sent', 'Opens', 'Open Rate', 'Clicks'].map(h => (
                  <th key={h} style={s.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.byCampaign.map(row => (
                <tr key={row.campaign}>
                  <td style={s.td}>{row.campaign.replace(/_/g, ' ')}</td>
                  <td style={s.td}>{row.sent.toLocaleString()}</td>
                  <td style={s.td}>{row.opens.toLocaleString()}</td>
                  <td style={{ ...s.td, color: '#c9a84c', fontWeight: 600 }}>{row.openRate}%</td>
                  <td style={s.td}>{row.clicks.toLocaleString()}</td>
                </tr>
              ))}
              {stats.byCampaign.length === 0 && (
                <tr><td colSpan={5} style={{ ...s.td, color: '#64748b' }}>No data yet — send some emails first.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Recent opens */}
        <div style={s.card}>
          <h3 style={s.cardTitle}>Recent Opens</h3>
          <table style={s.table}>
            <thead>
              <tr>
                {['Email', 'Campaign', 'Step', 'Opened At'].map(h => (
                  <th key={h} style={s.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {opens.map((o, i) => (
                <tr key={i}>
                  <td style={s.td}>{o.email || '—'}</td>
                  <td style={s.td}>{o.campaign.replace(/_/g, ' ')}</td>
                  <td style={s.td}>Step {o.step}</td>
                  <td style={{ ...s.td, color: '#94a3b8', fontSize: 12 }}>
                    {new Date(o.openedAt).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })}
                  </td>
                </tr>
              ))}
              {opens.length === 0 && (
                <tr><td colSpan={4} style={{ ...s.td, color: '#64748b' }}>No opens tracked yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={s.footer}>
          Cledger Email Tracking · Auto-refreshes on reload · Data stored in Vercel KV
        </div>
      </div>
    </div>
  )
}

function KPI({ label, value, color = '#e2e8f0' }: { label: string; value: string; color?: string }) {
  return (
    <div style={s.kpi}>
      <div style={{ ...s.kpiVal, color }}>{value}</div>
      <div style={s.kpiLabel}>{label}</div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page:      { background: '#0f1923', minHeight: '100vh', padding: '24px 16px', color: '#e2e8f0', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
  wrap:      { maxWidth: 900, margin: '0 auto' },
  center:    { textAlign: 'center', marginTop: 80, color: '#64748b' },
  header:    { marginBottom: 28 },
  logo:      { fontSize: 22, fontWeight: 700, letterSpacing: 2, color: '#c9a84c', marginRight: 12 },
  subtitle:  { fontSize: 14, color: '#64748b' },
  kpiRow:    { display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' },
  kpi:       { background: '#1a2535', border: '1px solid #2d3748', borderRadius: 10, padding: '16px 20px', flex: 1, minWidth: 120 },
  kpiVal:    { fontSize: 26, fontWeight: 700, marginBottom: 4 },
  kpiLabel:  { fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1 },
  card:      { background: '#1a2535', border: '1px solid #2d3748', borderRadius: 10, padding: '20px 24px', marginBottom: 16 },
  cardTitle: { margin: '0 0 14px', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#64748b' },
  table:     { width: '100%', borderCollapse: 'collapse', fontSize: 14 },
  th:        { textAlign: 'left', padding: '6px 10px', borderBottom: '1px solid #2d3748', fontSize: 12, color: '#64748b', fontWeight: 600 },
  td:        { padding: '8px 10px', borderBottom: '1px solid #1e2d3d' },
  footer:    { textAlign: 'center', fontSize: 11, color: '#374151', marginTop: 24 },
}
