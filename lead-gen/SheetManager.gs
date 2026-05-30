// All Google Sheets read/write operations

function getSpreadsheet() {
  return SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
}

function getSheet(name) {
  return getSpreadsheet().getSheetByName(name);
}

// ─── Lead CRUD ────────────────────────────────────────────────────────────────

function emailExists(email) {
  const sheet = getSheet(CONFIG.SHEETS.LEADS);
  const data  = sheet.getDataRange().getValues();
  const norm  = sanitizeEmail(email);
  for (let i = 1; i < data.length; i++) {
    if (sanitizeEmail(String(data[i][COL.EMAIL])) === norm) return true;
  }
  return false;
}

function companyExists(companyName) {
  const sheet = getSheet(CONFIG.SHEETS.LEADS);
  const data  = sheet.getDataRange().getValues();
  const norm  = companyName.toLowerCase().trim();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][COL.COMPANY]).toLowerCase().trim() === norm) return true;
  }
  return false;
}

function appendLead(lead) {
  const sheet = getSheet(CONFIG.SHEETS.LEADS);
  const row   = new Array(TOTAL_COLS).fill('');

  row[COL.ID]             = lead.id;
  row[COL.DATE_ADDED]     = today();
  row[COL.COMPANY]        = lead.company      || '';
  row[COL.FIRST_NAME]     = lead.firstName    || '';
  row[COL.LAST_NAME]      = lead.lastName     || '';
  row[COL.EMAIL]          = lead.email        || '';
  row[COL.PHONE]          = lead.phone        || '';
  row[COL.BUSINESS_TYPE]  = lead.businessType || '';
  row[COL.INDUSTRY]       = lead.industry     || '';
  row[COL.COUNTRY]        = lead.country      || '';
  row[COL.CITY]           = lead.city         || '';
  row[COL.COMPANY_SIZE]   = lead.companySize  || '';
  row[COL.WEBSITE]        = lead.website      || '';
  row[COL.LINKEDIN_URL]   = lead.linkedinUrl  || '';
  row[COL.LEAD_SCORE]     = lead.score        || 0;
  row[COL.SERVICES_MATCH] = (lead.services || []).join(', ');
  row[COL.EMAIL1_STATUS]  = 'Not Sent';
  row[COL.FU1_STATUS]     = 'Pending';
  row[COL.FU2_STATUS]     = 'Pending';
  row[COL.LINKEDIN_STATUS]= lead.linkedinUrl ? 'Queued' : 'No URL';
  row[COL.OVERALL_STATUS] = 'New';
  row[COL.SOURCE]         = lead.source || 'System';

  sheet.appendRow(row);
  return true;
}

function updateLeadField(leadId, col, value) {
  const sheet = getSheet(CONFIG.SHEETS.LEADS);
  const data  = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][COL.ID] === leadId) {
      sheet.getRange(i + 1, col + 1).setValue(value);
      return true;
    }
  }
  return false;
}

function markEmailSent(leadId, emailType) {
  const sentDateCol = emailType === 'initial' ? COL.EMAIL1_SENT_DATE
    : emailType === 'fu1' ? COL.FU1_SENT_DATE : COL.FU2_SENT_DATE;
  const statusCol   = emailType === 'initial' ? COL.EMAIL1_STATUS
    : emailType === 'fu1' ? COL.FU1_STATUS    : COL.FU2_STATUS;

  updateLeadField(leadId, sentDateCol, today());
  updateLeadField(leadId, statusCol,   'Sent');
  if (emailType === 'initial') {
    updateLeadField(leadId, COL.OVERALL_STATUS, 'Contacted');
  }
}

function markEmailOpened(leadId, emailType) {
  const openedCol     = emailType === 'initial' ? COL.EMAIL1_OPENED
    : emailType === 'fu1' ? COL.FU1_OPENED : COL.FU2_OPENED;
  const openedDateCol = emailType === 'initial' ? COL.EMAIL1_OPENED_DATE : -1;
  const statusCol     = emailType === 'initial' ? COL.EMAIL1_STATUS
    : emailType === 'fu1' ? COL.FU1_STATUS : COL.FU2_STATUS;

  updateLeadField(leadId, openedCol, 'Yes');
  updateLeadField(leadId, statusCol, 'Opened');
  if (openedDateCol > -1) updateLeadField(leadId, openedDateCol, now());
}

// ─── Query helpers ────────────────────────────────────────────────────────────

function getLeadsForInitialOutreach() {
  const sheet = getSheet(CONFIG.SHEETS.LEADS);
  const data  = sheet.getDataRange().getValues();
  const leads = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (row[COL.EMAIL1_STATUS] === 'Not Sent' && row[COL.EMAIL]) {
      leads.push(rowToLead(row, i + 1));
    }
  }
  return leads;
}

function getLeadsForFollowUp(followUpNumber) {
  const sheet       = getSheet(CONFIG.SHEETS.LEADS);
  const data        = sheet.getDataRange().getValues();
  const leads       = [];
  const sentDateCol = followUpNumber === 1 ? COL.EMAIL1_SENT_DATE : COL.FU1_SENT_DATE;
  const statusCol   = followUpNumber === 1 ? COL.FU1_STATUS       : COL.FU2_STATUS;

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[COL.EMAIL]) continue;
    const status = String(row[statusCol]);
    if (status !== 'Pending') continue;
    const sentDate = row[sentDateCol];
    if (!sentDate) continue;
    if (daysBetween(sentDate) >= CONFIG.FOLLOW_UP_DAYS) {
      leads.push(rowToLead(row, i + 1));
    }
  }
  return leads;
}

function getTodayLeadCount() {
  const sheet = getSheet(CONFIG.SHEETS.LEADS);
  const data  = sheet.getDataRange().getValues();
  const td    = today();
  let count   = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i][COL.DATE_ADDED] === td) count++;
  }
  return count;
}

function getAllLeads() {
  const sheet = getSheet(CONFIG.SHEETS.LEADS);
  const data  = sheet.getDataRange().getValues();
  return data.slice(1).map((row, i) => rowToLead(row, i + 2));
}

function rowToLead(row, sheetRowNumber) {
  return {
    sheetRow:      sheetRowNumber,
    id:            row[COL.ID],
    dateAdded:     row[COL.DATE_ADDED],
    company:       row[COL.COMPANY],
    firstName:     row[COL.FIRST_NAME],
    lastName:      row[COL.LAST_NAME],
    email:         row[COL.EMAIL],
    phone:         row[COL.PHONE],
    businessType:  row[COL.BUSINESS_TYPE],
    industry:      row[COL.INDUSTRY],
    country:       row[COL.COUNTRY],
    city:          row[COL.CITY],
    companySize:   row[COL.COMPANY_SIZE],
    website:       row[COL.WEBSITE],
    linkedinUrl:   row[COL.LINKEDIN_URL],
    score:         row[COL.LEAD_SCORE],
    services:      row[COL.SERVICES_MATCH] ? row[COL.SERVICES_MATCH].split(', ') : [],
    email1Status:  row[COL.EMAIL1_STATUS],
    fu1Status:     row[COL.FU1_STATUS],
    fu2Status:     row[COL.FU2_STATUS],
    overallStatus: row[COL.OVERALL_STATUS],
    notes:         row[COL.NOTES],
    source:        row[COL.SOURCE],
  };
}

// ─── LinkedIn Queue ───────────────────────────────────────────────────────────

function addToLinkedInQueue(lead, messageDraft) {
  const sheet = getSheet(CONFIG.SHEETS.LINKEDIN_QUEUE);
  sheet.appendRow([
    lead.id,
    lead.company,
    `${lead.firstName} ${lead.lastName}`.trim(),
    lead.linkedinUrl,
    messageDraft,
    'Queued',
    today(),
    '',
    '',
  ]);
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function logDailyStats(stats) {
  const sheet = getSheet(CONFIG.SHEETS.DAILY_STATS);
  sheet.appendRow([
    today(),
    stats.leadsGenerated   || 0,
    stats.emailsSent       || 0,
    stats.emailsOpened     || 0,
    stats.emailsOpened > 0
      ? Math.round((stats.emailsOpened / stats.emailsSent) * 100) + '%'
      : '0%',
    stats.followUpsSent    || 0,
    stats.linkedInQueued   || 0,
    stats.repliesReceived  || 0,
    stats.meetingsBooked   || 0,
  ]);
}

// ─── Email Log ────────────────────────────────────────────────────────────────

function logEmail(lead, emailType, subject, status) {
  const sheet = getSheet(CONFIG.SHEETS.EMAIL_LOG);
  sheet.appendRow([
    now(), lead.id, lead.company, lead.email,
    emailType, subject, status, 'No', '',
  ]);
}
