// LinkedIn message generation
// Note: LinkedIn automation is prohibited by LinkedIn ToS.
// This module generates ready-to-copy messages and stores them in a
// "LinkedIn Queue" sheet. Send them manually or via a tool like
// Expandi / Dripify that complies with LinkedIn's terms.

function getLinkedInMessage(lead) {
  if (lead.country === 'US') return getUSLinkedInMessage(lead);
  return getUKLinkedInMessage(lead);
}

function getUKLinkedInMessage(lead) {
  const name    = lead.firstName ? titleCase(lead.firstName) : 'there';
  const company = lead.company || 'your business';
  const industry = titleCase(lead.industry || 'your industry');

  return `Hi ${name},

I came across ${company} and wanted to connect.

We're Cledger — an accounting practice that works with ${industry} businesses to simplify their bookkeeping, tax, and compliance while saving them money.

Would love to connect and share how we've helped similar businesses. Happy to have a no-obligation chat if you're open to it.

Best,
${CONFIG.FROM_NAME}`.trim();
}

function getUSLinkedInMessage(lead) {
  const name    = lead.firstName ? titleCase(lead.firstName) : 'there';
  const company = lead.company || 'your business';

  return `Hi ${name},

I noticed ${company} and wanted to reach out.

We're Cledger, a UK advisory practice helping US businesses navigate UK market entry, international compliance, and cross-border business structuring.

If expanding into the UK is on your radar, I'd love to connect and share some insights.

Best,
${CONFIG.FROM_NAME}`.trim();
}

// Returns all queued LinkedIn messages not yet sent
function getLinkedInQueueForReview() {
  const sheet = getSheet(CONFIG.SHEETS.LINKEDIN_QUEUE);
  const data  = sheet.getDataRange().getValues();
  return data.slice(1).filter(row => row[5] === 'Queued');
}

// Mark a LinkedIn message as sent (call manually or via webhook)
function markLinkedInSent(leadId) {
  const sheet = getSheet(CONFIG.SHEETS.LINKEDIN_QUEUE);
  const data  = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === leadId) {
      sheet.getRange(i + 1, 6).setValue('Sent');
      sheet.getRange(i + 1, 8).setValue(today());
      break;
    }
  }
  updateLeadField(leadId, COL.LINKEDIN_STATUS,    'Sent');
  updateLeadField(leadId, COL.LINKEDIN_SENT_DATE, today());
}
