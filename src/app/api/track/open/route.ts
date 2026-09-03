/**
 * GET /api/track/open?id=EMAIL_ID&e=EMAIL&c=CAMPAIGN&s=STEP
 * Returns a 1x1 transparent GIF and logs the open event.
 * Called automatically when the email is rendered in the recipient's client.
 */

import { NextRequest, NextResponse } from 'next/server'
import { logOpen } from '@/lib/kv'

// 1x1 transparent GIF (base64)
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
)

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const emailId  = searchParams.get('id') ?? 'unknown'
  const email    = searchParams.get('e')  ?? ''
  const campaign = searchParams.get('c')  ?? 'unknown'
  const step     = parseInt(searchParams.get('s') ?? '1', 10)

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? ''
  const ua = req.headers.get('user-agent') ?? ''

  // Fire and forget — don't block the pixel response
  logOpen({
    emailId,
    email,
    campaign,
    step,
    openedAt: new Date().toISOString(),
    ip,
    ua,
  }).catch(() => {}) // silent fail — never break email rendering

  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      'Content-Type':  'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma':        'no-cache',
      'Expires':       '0',
    },
  })
}
