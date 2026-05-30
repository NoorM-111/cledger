// Email sending via Gmail with open-tracking pixel

// ─── Initial outreach batch ───────────────────────────────────────────────────

function sendInitialOutreachBatch() {
  const leads = getLeadsForInitialOutreach();
  const limit = CONFIG.DAILY_EMAIL_BATCH;
  let sent    = 0;
  let failed  = 0;

  logInfo(`Sending initial outreach to ${Math.min(leads.length, limit)} leads`);

  for (let i = 0; i < leads.length && sent < limit; i++) {
    const lead   = leads[i];
    const result = sendInitialEmail(lead);
    if (result) {
      sent++;
    } else {
      failed++;
    }
    Utilities.sleep(800); // throttle to respect Gmail rate limits
  }

  logInfo(`Initial outreach done — sent: ${sent}, failed: ${failed}`);
  return { sent, failed };
}

function sendInitialEmail(lead) {
  try {
    const subject  = getSubjectLine(lead, Math.floor(Math.random() * 4));
    const pixel    = buildTrackingPixel(lead.id, 'initial');
    const body     = getInitialEmailBody(lead);
    const htmlBody = wrapInHtml(body, pixel);

    GmailApp.sendEmail(lead.email, subject, body, {
      htmlBody:    htmlBody,
      name:        CONFIG.FROM_NAME,
      replyTo:     CONFIG.REPLY_TO,
      noReply:     false,
    });

    markEmailSent(lead.id, 'initial');
    logEmail(lead, 'Initial', subject, 'Sent');

    // Queue LinkedIn message if URL available
    if (lead.linkedinUrl) {
      const liMsg = getLinkedInMessage(lead);
      addToLinkedInQueue(lead, liMsg);
      updateLeadField(lead.id, COL.LINKEDIN_STATUS, 'Queued');
    }

    logInfo(`Email sent to ${lead.email} (${lead.company})`);
    return true;
  } catch (e) {
    logError(`Failed to email ${lead.email}: ${e.message}`);
    logEmail(lead, 'Initial', '', 'Failed');
    return false;
  }
}

// ─── Follow-up sending ────────────────────────────────────────────────────────

function sendFollowUpEmails() {
  let totalSent = 0;

  // Follow-up 1
  const fu1Leads = getLeadsForFollowUp(1);
  logInfo(`Follow-up 1 due: ${fu1Leads.length} leads`);
  fu1Leads.forEach(lead => {
    if (sendFollowUp(lead, 1)) totalSent++;
    Utilities.sleep(800);
  });

  // Follow-up 2
  const fu2Leads = getLeadsForFollowUp(2);
  logInfo(`Follow-up 2 due: ${fu2Leads.length} leads`);
  fu2Leads.forEach(lead => {
    if (sendFollowUp(lead, 2)) totalSent++;
    Utilities.sleep(800);
  });

  return totalSent;
}

function sendFollowUp(lead, followUpNumber) {
  try {
    const emailType = `fu${followUpNumber}`;
    const subject   = getFollowUpSubject(lead, followUpNumber);
    const pixel     = buildTrackingPixel(lead.id, emailType);
    const body      = followUpNumber === 1 ? getFollowUp1Body(lead) : getFollowUp2Body(lead);
    const htmlBody  = wrapInHtml(body, pixel);

    GmailApp.sendEmail(lead.email, subject, body, {
      htmlBody: htmlBody,
      name:     CONFIG.FROM_NAME,
      replyTo:  CONFIG.REPLY_TO,
    });

    markEmailSent(lead.id, emailType);
    logEmail(lead, `Follow-up ${followUpNumber}`, subject, 'Sent');
    logInfo(`Follow-up ${followUpNumber} sent to ${lead.email} (${lead.company})`);
    return true;
  } catch (e) {
    logError(`Failed follow-up ${followUpNumber} to ${lead.email}: ${e.message}`);
    return false;
  }
}

// ─── Daily email quota check ─────────────────────────────────────────────────

function getRemainingEmailQuota() {
  try {
    return MailApp.getRemainingDailyQuota();
  } catch (e) {
    return 500; // assume default
  }
}
