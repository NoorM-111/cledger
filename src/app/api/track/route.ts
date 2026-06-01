import { NextRequest, NextResponse } from 'next/server';

// 1×1 transparent GIF (43 bytes)
const TRANSPARENT_GIF = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const leadId    = searchParams.get('id')  ?? '';
  const emailType = searchParams.get('t')   ?? 'initial';
  const token     = searchParams.get('tk')  ?? '';

  if (leadId && emailType && token) {
    // Fire-and-forget: update Google Sheets asynchronously
    notifyGoogleSheets(leadId, emailType, token).catch(() => {});
  }

  return new NextResponse(TRANSPARENT_GIF, {
    status: 200,
    headers: {
      'Content-Type':  'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma':        'no-cache',
      'Expires':       '0',
    },
  });
}

async function notifyGoogleSheets(leadId: string, emailType: string, token: string) {
  const webAppUrl = process.env.TRACKING_WEBAPP_URL;
  if (!webAppUrl) return;

  const url = `${webAppUrl}?id=${encodeURIComponent(leadId)}&t=${encodeURIComponent(emailType)}&tk=${encodeURIComponent(token)}`;

  await fetch(url, {
    method: 'GET',
    signal: AbortSignal.timeout(5000),
  }).catch(() => {}); // silent, never break the pixel response
}
