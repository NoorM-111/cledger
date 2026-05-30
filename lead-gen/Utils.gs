// Shared utility functions

function generateLeadId() {
  const ts   = new Date().getTime().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substr(2, 4).toUpperCase();
  return `CL-${ts}-${rand}`;
}

function today() {
  return Utilities.formatDate(new Date(), 'Europe/London', 'yyyy-MM-dd');
}

function now() {
  return Utilities.formatDate(new Date(), 'Europe/London', 'yyyy-MM-dd HH:mm:ss');
}

function daysBetween(dateStr) {
  if (!dateStr) return 999;
  const d = new Date(dateStr);
  const diff = new Date() - d;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function titleCase(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function sanitizeEmail(email) {
  if (!email) return '';
  return email.toLowerCase().trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function truncate(str, max) {
  if (!str) return '';
  return str.length > max ? str.substr(0, max - 3) + '...' : str;
}

// Make a rate-limited GET request with retry
function fetchWithRetry(url, options, maxRetries) {
  maxRetries = maxRetries || 2;
  for (let i = 0; i <= maxRetries; i++) {
    try {
      const resp = UrlFetchApp.fetch(url, options || {});
      const code = resp.getResponseCode();
      if (code === 200 || code === 201) return resp;
      if (code === 429) {
        Utilities.sleep(2000 * (i + 1));
        continue;
      }
      Logger.log(`HTTP ${code} for ${url}`);
      return null;
    } catch (e) {
      Logger.log(`Fetch error (attempt ${i + 1}): ${e.message}`);
      if (i < maxRetries) Utilities.sleep(1000 * (i + 1));
    }
  }
  return null;
}

function parseJSON(resp) {
  try {
    if (!resp) return null;
    return JSON.parse(resp.getContentText());
  } catch (e) {
    return null;
  }
}

// Build secure token for tracking URL (prevents spoofing)
function buildTrackingToken(leadId, emailType) {
  const raw = `${leadId}|${emailType}|${CONFIG.SPREADSHEET_ID}`;
  return Utilities.base64Encode(raw).replace(/[+/=]/g, c =>
    ({ '+': '-', '/': '_', '=': '' }[c])
  );
}

function buildTrackingUrl(leadId, emailType) {
  const token = buildTrackingToken(leadId, emailType);
  const ts    = new Date().getTime();
  return `${CONFIG.TRACKING_WEBAPP_URL}?id=${leadId}&t=${emailType}&tk=${token}&_=${ts}`;
}

function buildTrackingPixel(leadId, emailType) {
  const url = buildTrackingUrl(leadId, emailType);
  return `<img src="${url}" width="1" height="1" border="0" alt="" style="display:none;width:1px;height:1px;">`;
}

function logInfo(msg)  { Logger.log(`[INFO]  ${now()} — ${msg}`); }
function logWarn(msg)  { Logger.log(`[WARN]  ${now()} — ${msg}`); }
function logError(msg) { Logger.log(`[ERROR] ${now()} — ${msg}`); }
