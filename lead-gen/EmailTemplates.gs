// Email templates — initial outreach + follow-ups

// ─── Helpers ──────────────────────────────────────────────────────────────────

function greeting(lead) {
  const name = lead.firstName ? `Hi ${titleCase(lead.firstName)}` : 'Hi there';
  return name;
}

function servicesBullet(lead) {
  const services = lead.services && lead.services.length
    ? lead.services
    : (lead.country === 'US' ? CONFIG.US_SERVICES : CONFIG.UK_SERVICES).slice(0, 4);
  return services.map(s => `• ${s}`).join('\n');
}

function signature() {
  return `

Best regards,
${CONFIG.FROM_NAME}
Cledger Accounting
📞 ${CONFIG.PHONE}
🌐 ${CONFIG.WEBSITE}
📅 Book a free call: ${CONFIG.CALENDLY_URL}`;
}

// ─── Subject line generators ───────────────────────────────────────────────────

function getSubjectLine(lead, variant) {
  const company = lead.company || 'your business';
  const subjects = {
    UK: [
      `Quick question about ${company}'s accounts`,
      `Saving ${company} time & money on tax — can we help?`,
      `${company} — switching accountants could save you thousands`,
      `Are you getting the most from your accountant, ${lead.firstName || company}?`,
    ],
    US: [
      `Helping ${company} expand into the UK market`,
      `UK market entry for ${company} — let's talk`,
      `${company} — international growth advisory`,
      `Connecting with ${company} on UK expansion`,
    ],
  };

  const region = lead.country === 'US' ? 'US' : 'UK';
  const list   = subjects[region];
  return list[variant % list.length];
}

function getFollowUpSubject(lead, followUpNumber) {
  const company = lead.company || 'your business';
  const lines   = [
    `Following up — ${company} & Cledger`,
    `Re: Cledger — just checking in, ${lead.firstName || company}`,
    `Last follow-up — ${company}`,
  ];
  return lines[Math.min(followUpNumber - 1, lines.length - 1)];
}

// ─── Initial outreach ─────────────────────────────────────────────────────────

function getInitialEmailBody(lead) {
  if (lead.country === 'US') return getUSInitialEmailBody(lead);
  return getUKInitialEmailBody(lead);
}

function getUKInitialEmailBody(lead) {
  const industry = titleCase(lead.industry || 'your sector');
  const city     = lead.city ? ` in ${titleCase(lead.city)}` : '';
  const services = servicesBullet(lead);

  return `
${greeting(lead)},

I came across ${lead.company || 'your business'}${city} and wanted to reach out.

We're Cledger — a UK accounting practice that specialises in helping ${industry} businesses like yours take back control of their finances, stay fully HMRC-compliant, and save on tax without the hassle.

Here's what we typically help businesses in your position with:

${services}

We work with founders and directors who are either growing quickly, feel their current accountant is unresponsive, or simply want more proactive financial support.

**We're currently offering a free 30-minute financial health check** with no obligation — just a quick call to see if we can add value.

Would that be of interest? I've attached our details and a link to book directly:
👉 ${CONFIG.CALENDLY_URL}

${signature()}

P.S. If you're already sorted with your accounting, no worries at all — but feel free to keep our details for future reference.
  `.trim();
}

function getUSInitialEmailBody(lead) {
  const industry = titleCase(lead.industry || 'your sector');
  const services = servicesBullet(lead);

  return `
${greeting(lead)},

I came across ${lead.company || 'your business'} and wanted to introduce Cledger — a UK-based advisory practice helping ${industry} companies looking to grow internationally, particularly into the UK and European markets.

We work with US businesses on:

${services}

Navigating a UK setup, HMRC registrations, and local compliance can be complex — and costly if done wrong. We simplify the process and give you a trusted UK partner from day one.

**We offer a free initial consultation** to understand your goals and see how we can help — no strings attached.

Would a 20-minute call be worth your time this week?
👉 ${CONFIG.CALENDLY_URL}

${signature()}
  `.trim();
}

// ─── Follow-up 1 ──────────────────────────────────────────────────────────────

function getFollowUp1Body(lead) {
  if (lead.country === 'US') return getUSFollowUp1Body(lead);

  return `
${greeting(lead)},

I wanted to follow up on my email from ${CONFIG.FOLLOW_UP_DAYS} days ago about Cledger's accounting services for ${lead.company || 'your business'}.

I completely understand inboxes get busy — just didn't want my note to get lost.

If any of these resonate with you, it might be worth a quick chat:

✅ Feeling like your accountant is reactive rather than proactive?
✅ Spending too much time on admin, VAT, or payroll?
✅ Not sure if you're paying too much tax?
✅ Looking to grow and need better financial visibility?

If now isn't the right time, I'm happy to reconnect whenever suits you. Otherwise, our calendar link is below for a free 30-minute call:
👉 ${CONFIG.CALENDLY_URL}

${signature()}
  `.trim();
}

function getUSFollowUp1Body(lead) {
  return `
${greeting(lead)},

Following up on my previous message about supporting ${lead.company || 'your business'} with UK market entry or international advisory.

I know you're busy, so I'll be brief — if there's any chance you're exploring UK or European expansion in the next 12 months, it's worth a quick conversation to understand what's involved.

Happy to send over a one-pager on what our UK market entry service includes, or we can jump on a call:
👉 ${CONFIG.CALENDLY_URL}

${signature()}
  `.trim();
}

// ─── Follow-up 2 ──────────────────────────────────────────────────────────────

function getFollowUp2Body(lead) {
  return `
${greeting(lead)},

This will be my last message — I don't want to clog up your inbox.

If the timing isn't right for ${lead.company || 'your business'} right now, completely understood. I'll leave our details here in case things change:

🌐 ${CONFIG.WEBSITE}
📅 ${CONFIG.CALENDLY_URL}
📞 ${CONFIG.PHONE}

We work with businesses across the UK and internationally — whenever you're ready to explore a better accounting setup, we're here.

Wishing you continued success,

${signature()}
  `.trim();
}

// ─── HTML wrapper ─────────────────────────────────────────────────────────────

function wrapInHtml(plainText, trackingPixel) {
  const html = plainText
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1">$1</a>');

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#333;max-width:600px;margin:0 auto;padding:20px;">
${html}
${trackingPixel || ''}
</body>
</html>`;
}
