import { NextRequest, NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()
const CH_BASE = 'https://api.company-information.service.gov.uk'

function chAuth(): string {
  const key = process.env.COMPANIES_HOUSE_API_KEY ?? ''
  return 'Basic ' + Buffer.from(`${key}:`).toString('base64')
}

async function withRateLimit(ip: string): Promise<boolean> {
  const key = `ch_rl:${ip}`
  const count = await redis.incr(key)
  if (count === 1) await redis.expire(key, 60)
  return count <= 10
}

function ipFromRequest(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

export async function GET(req: NextRequest) {
  const ip = ipFromRequest(req)
  const allowed = await withRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      { status: 429 }
    )
  }

  const q = req.nextUrl.searchParams.get('q')?.trim() ?? ''
  if (!q) {
    return NextResponse.json({ error: 'Missing search query.' }, { status: 400 })
  }

  const isCompanyNumber = /^[0-9A-Z]{8}$/i.test(q)
  const headers = { Authorization: chAuth() }

  if (isCompanyNumber) {
    const cacheKey = `ch_co:${q.toUpperCase()}`
    const cached = await redis.get<object>(cacheKey)
    if (cached) {
      return NextResponse.json({ type: 'company', data: cached })
    }

    const res = await fetch(`${CH_BASE}/company/${encodeURIComponent(q.toUpperCase())}`, { headers })
    if (res.status === 404) {
      return NextResponse.json({ error: 'Company not found. Check the number and try again.' }, { status: 404 })
    }
    if (!res.ok) {
      return NextResponse.json({ error: 'Companies House is unavailable. Please try again shortly.' }, { status: 502 })
    }

    const data = await res.json()
    await redis.set(cacheKey, data, { ex: 86400 })
    return NextResponse.json({ type: 'company', data })
  }

  // Name search
  const res = await fetch(
    `${CH_BASE}/search/companies?q=${encodeURIComponent(q)}&items_per_page=5`,
    { headers }
  )
  if (!res.ok) {
    return NextResponse.json({ error: 'Companies House is unavailable. Please try again shortly.' }, { status: 502 })
  }

  const data = await res.json()
  const items = (data.items ?? []).map((c: Record<string, unknown>) => ({
    name: c.title,
    number: c.company_number,
    status: c.company_status,
  }))
  return NextResponse.json({ type: 'search', results: items })
}
