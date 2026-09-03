/**
 * GET /api/track/click?id=EMAIL_ID&e=EMAIL&c=CAMPAIGN&s=STEP&url=DESTINATION
 * Logs the click then redirects to the destination URL.
 * Replaces direct links in emails so clicks are tracked.
 */

import { NextRequest, NextResponse } from 'next/server'
import { logClick } from '@/lib/kv'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const emailId  = searchParams.get('id')  ?? 'unknown'
  const email    = searchParams.get('e')   ?? ''
  const campaign = searchParams.get('c')   ?? 'unknown'
  const step     = parseInt(searchParams.get('s') ?? '1', 10)
  const url      = searchParams.get('url') ?? 'https://cledger.co.uk'

  // Validate destination — only allow http/https to prevent open redirect abuse
  let destination = 'https://cledger.co.uk'
  try {
    const parsed = new URL(url)
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      destination = url
    }
  } catch {}

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? ''

  logClick({
    emailId,
    email,
    campaign,
    step,
    url: destination,
    clickedAt: new Date().toISOString(),
    ip,
  }).catch(() => {})

  return NextResponse.redirect(destination, { status: 302 })
}
