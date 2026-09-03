/**
 * GET /api/track/stats
 * Returns JSON stats for the dashboard.
 * Protected by a simple secret token (set TRACK_SECRET in Vercel env vars).
 */

import { NextRequest, NextResponse } from 'next/server'
import { getStats, getRecentOpens } from '@/lib/kv'

export async function GET(req: NextRequest) {
  // Simple token auth — add ?secret=YOUR_SECRET to the request
  const secret = process.env.TRACK_SECRET
  if (secret) {
    const provided = req.nextUrl.searchParams.get('secret')
    if (provided !== secret) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }
  }

  const [stats, recentOpens] = await Promise.all([
    getStats(),
    getRecentOpens(50),
  ])

  return NextResponse.json({ stats, recentOpens })
}
