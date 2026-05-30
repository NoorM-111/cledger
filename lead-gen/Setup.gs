// One-time setup — run setupAll() once after pasting all .gs files

function setupAll() {
  Logger.log('=== Cledger Lead Gen Setup Starting ===');
  createSheets();
  setupTriggers();
  Logger.log('=== Setup Complete ===');
  Logger.log('Next step: Deploy Tracking.gs as a Web App and paste the URL into CONFIG.TRACKING_WEBAPP_URL');
}

// ─── Create all required sheets ───────────────────────────────────────────────

function createSheets() {
  const ss = getSpreadsheet();

  ensureSheet(ss, CONFIG.SHEETS.LEADS,          HEADERS,           'A1:AE1');
  ensureSheet(ss, CONFIG.SHEETS.LINKEDIN_QUEUE, LINKEDIN_HEADERS,  'A1:I1');
  ensureSheet(ss, CONFIG.SHEETS.DAILY_STATS,    STATS_HEADERS,     'A1:I1');
  ensureSheet(ss, CONFIG.SHEETS.EMAIL_LOG,      EMAIL_LOG_HEADERS, 'A1:I1');
  ensureImportQueue(ss);

  Logger.log('Sheets created/verified');
}

function ensureSheet(ss, name, headers, headerRange) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    Logger.log(`Created sheet: ${name}`);
  }

  // Only write headers if row 1 is empty
  if (!sheet.getRange('A1').getValue()) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(headerRange)
      .setFontWeight('bold')
      .setBackground('#1a1a2e')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }

  formatLeadsSheet(sheet, name);
  return sheet;
}

function formatLeadsSheet(sheet, name) {
  if (name !== CONFIG.SHEETS.LEADS) return;

  // Auto-resize columns
  sheet.autoResizeColumns(1, TOTAL_COLS);

  // Color-code status columns with conditional formatting
  const statusRange = sheet.getRange('Q2:Q1000'); // Email 1 Status
  const rules = [
    makeRule(statusRange, 'Sent',    '#e8f5e9', '#2e7d32'),
    makeRule(statusRange, 'Opened',  '#e3f2fd', '#1565c0'),
    makeRule(statusRange, 'Replied', '#f3e5f5', '#6a1b9a'),
  ];
  sheet.setConditionalFormatRules(rules);
}

function makeRule(range, text, bg, fg) {
  return SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo(text)
    .setBackground(bg)
    .setFontColor(fg)
    .setRanges([range])
    .build();
}

function ensureImportQueue(ss) {
  let sheet = ss.getSheetByName('Import Queue');
  if (!sheet) {
    sheet = ss.insertSheet('Import Queue');
    const importHeaders = [
      'Company', 'First Name', 'Last Name', 'Email', 'Phone',
      'Industry', 'Country', 'City', 'Website', 'LinkedIn URL',
    ];
    sheet.getRange(1, 1, 1, importHeaders.length).setValues([importHeaders]);
    sheet.getRange('A1:J1')
      .setFontWeight('bold')
      .setBackground('#fff3e0')
      .setFontColor('#e65100');
    Logger.log('Created Import Queue sheet — paste leads here and run importFromQueue()');
  }
}

// ─── Time-based triggers ──────────────────────────────────────────────────────

function setupTriggers() {
  // Delete all existing triggers first (prevent duplicates)
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));

  // Daily lead generation — 8:00 AM London time
  ScriptApp.newTrigger('runDailyLeadGeneration')
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .inTimezone('Europe/London')
    .create();

  // Send emails — 9:00 AM London time
  ScriptApp.newTrigger('runDailyEmailOutreach')
    .timeBased()
    .everyDays(1)
    .atHour(9)
    .inTimezone('Europe/London')
    .create();

  // Follow-ups — 10:00 AM London time
  ScriptApp.newTrigger('runFollowUpCycle')
    .timeBased()
    .everyDays(1)
    .atHour(10)
    .inTimezone('Europe/London')
    .create();

  // Weekly archive of dead leads — Sunday 11 PM
  ScriptApp.newTrigger('archiveDeadLeads')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.SUNDAY)
    .atHour(23)
    .inTimezone('Europe/London')
    .create();

  Logger.log('Triggers set: Lead gen 8am | Emails 9am | Follow-ups 10am | Archive Sundays');
}

function deleteTriggers() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  Logger.log('All triggers deleted');
}

// ─── Diagnostics ──────────────────────────────────────────────────────────────

function runHealthCheck() {
  Logger.log('--- Cledger Lead Gen Health Check ---');
  Logger.log(`Today's leads: ${getTodayLeadCount()}`);
  Logger.log(`Remaining email quota: ${getRemainingEmailQuota()}`);

  const fu1 = getLeadsForFollowUp(1);
  const fu2 = getLeadsForFollowUp(2);
  Logger.log(`Follow-up 1 due: ${fu1.length}`);
  Logger.log(`Follow-up 2 due: ${fu2.length}`);

  const outreach = getLeadsForInitialOutreach();
  Logger.log(`Queued for initial outreach: ${outreach.length}`);
  Logger.log('--- Health Check Done ---');
}
