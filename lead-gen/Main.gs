// Main orchestration — these are the functions called by time-based triggers

// ─── Trigger: 8:00 AM — Find and save new leads ───────────────────────────────

function runDailyLeadGeneration() {
  logInfo('=== Daily Lead Generation Started ===');

  const existing = getTodayLeadCount();
  const needed   = Math.max(0, CONFIG.DAILY_LEAD_TARGET - existing);

  if (needed === 0) {
    logInfo(`Already have ${existing} leads today — skipping generation`);
    return;
  }

  // Try manual import queue first
  const imported = importFromQueue();
  const stillNeeded = Math.max(0, needed - imported);

  // Auto-discover leads via APIs
  let apiLeads = 0;
  if (stillNeeded > 0) {
    const rawLeads = findLeads(stillNeeded + 5); // buffer for disqualified
    rawLeads.forEach(lead => {
      if (!lead.email)                    return;
      if (emailExists(lead.email))         return;
      if (companyExists(lead.company))     return;

      const scored = qualifyLead(lead);
      if (!isQualified(scored))           return;

      appendLead(scored);
      apiLeads++;
    });
  }

  const total = imported + apiLeads;
  logInfo(`Lead generation complete — imported: ${imported}, API: ${apiLeads}, total today: ${total + existing}`);

  // Log to stats sheet
  logDailyStats({
    leadsGenerated: total,
    emailsSent:     0,
    emailsOpened:   0,
    followUpsSent:  0,
    linkedInQueued: 0,
  });
}

// ─── Trigger: 9:00 AM — Send initial outreach emails ─────────────────────────

function runDailyEmailOutreach() {
  logInfo('=== Daily Email Outreach Started ===');

  const quota = getRemainingEmailQuota();
  if (quota < 10) {
    logWarn(`Email quota critically low (${quota} remaining) — skipping`);
    return;
  }

  const result = sendInitialOutreachBatch();
  logInfo(`Outreach done — sent: ${result.sent}, failed: ${result.failed}`);
}

// ─── Trigger: 10:00 AM — Send due follow-ups ─────────────────────────────────

function runFollowUpCycle() {
  logInfo('=== Follow-up Cycle Started ===');
  const sent = sendFollowUpEmails();
  logInfo(`Follow-up cycle done — ${sent} follow-ups sent`);
}

// ─── Manual: run everything in sequence (for testing) ────────────────────────

function runFullCycleNow() {
  Logger.log('Running full cycle manually...');
  runDailyLeadGeneration();
  Utilities.sleep(2000);
  runDailyEmailOutreach();
  Utilities.sleep(2000);
  runFollowUpCycle();
  Logger.log('Full cycle complete');
}

// ─── Manual: test with a single lead ─────────────────────────────────────────

function testWithSingleLead() {
  const testLead = {
    id:           generateLeadId(),
    company:      'Test Company Ltd',
    firstName:    'John',
    lastName:     'Smith',
    email:        'YOUR_TEST_EMAIL@gmail.com', // <-- change this
    phone:        '+44 7700 900000',
    businessType: 'Limited Company',
    industry:     'Technology',
    country:      'UK',
    city:         'London',
    companySize:  '11-50',
    website:      'https://example.com',
    linkedinUrl:  'https://linkedin.com/in/test',
    source:       'Test',
  };

  const scored = qualifyLead(testLead);
  Logger.log(`Test lead score: ${scored.score}`);
  Logger.log(`Services: ${scored.services.join(', ')}`);

  // Uncomment to actually send the test email:
  // appendLead(scored);
  // sendInitialEmail(scored);
}
