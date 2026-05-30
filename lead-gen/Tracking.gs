// Email open tracking — deploy this script as a Web App
// Deploy > New deployment > Type: Web App > Execute as: Me > Who has access: Anyone

// This function is called when an email tracking pixel is loaded.
// It marks the email as opened in the Leads sheet and returns a transparent 1×1 GIF.

function doGet(e) {
  try {
    const params    = e.parameter || {};
    const leadId    = params.id   || '';
    const emailType = params.t    || 'initial';
    const token     = params.tk   || '';

    if (leadId && emailType) {
      // Verify token to prevent spoofed opens
      const expectedToken = buildTrackingToken(leadId, emailType);
      if (token === expectedToken) {
        markEmailOpened(leadId, emailType);
        logInfo(`Email opened — Lead: ${leadId}, Type: ${emailType}`);
      } else {
        logWarn(`Invalid tracking token for ${leadId}`);
      }
    }
  } catch (err) {
    logError(`Tracking error: ${err.message}`);
  }

  // Always return a transparent 1×1 GIF regardless of any errors
  return transparentGifResponse();
}

function transparentGifResponse() {
  // Minimal transparent 1×1 GIF (43 bytes)
  const gif = Utilities.newBlob(
    [0x47,0x49,0x46,0x38,0x39,0x61,0x01,0x00,0x01,0x00,0x80,
     0x00,0x00,0xff,0xff,0xff,0x00,0x00,0x00,0x21,0xf9,0x04,
     0x00,0x00,0x00,0x00,0x00,0x2c,0x00,0x00,0x00,0x00,0x01,
     0x00,0x01,0x00,0x00,0x02,0x02,0x44,0x01,0x00,0x3b],
    'image/gif'
  );

  return ContentService
    .createTextOutput()
    .setContent(gif.getDataAsString('ISO_8859_1'))
    .setMimeType(ContentService.MimeType.TEXT);
  // Note: Apps Script doesn't support binary MIME directly in doGet.
  // A workaround is to return a redirect to a hosted pixel, or use
  // the Next.js /api/track endpoint (see src/app/api/track/route.ts).
}

// Alternative: redirect to a 1×1 pixel hosted on your domain
function redirectPixelResponse() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

// ─── Webhook: called by your email client or Zapier when a reply is detected ──

function doPost(e) {
  try {
    const body   = JSON.parse(e.postData.contents);
    const leadId = body.leadId || '';
    const action = body.action || '';

    if (!leadId) return jsonResponse({ ok: false, error: 'Missing leadId' });

    if (action === 'replied') {
      markLeadReplied(leadId, body.notes || '');
      return jsonResponse({ ok: true, action: 'replied' });
    }
    if (action === 'meeting_booked') {
      markMeetingBooked(leadId, body.date || '');
      return jsonResponse({ ok: true, action: 'meeting_booked' });
    }

    return jsonResponse({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
