// ============================================================
// CLEDGER LEAD GENERATION SYSTEM — Configuration
// Fill ALL values marked "YOUR_..." before running Setup
// ============================================================

const CONFIG = {

  // ─── Google Sheets ─────────────────────────────────────────────────────────
  // Get from your sheet URL: docs.google.com/spreadsheets/d/{THIS_ID}/edit
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID',

  SHEETS: {
    LEADS:          'Leads',
    LINKEDIN_QUEUE: 'LinkedIn Queue',
    DAILY_STATS:    'Daily Stats',
    EMAIL_LOG:      'Email Log',
  },

  // ─── APIs ──────────────────────────────────────────────────────────────────
  // https://developer.company-information.service.gov.uk  (100% free)
  COMPANIES_HOUSE_API_KEY: 'YOUR_COMPANIES_HOUSE_KEY',

  // https://www.apollo.io → Settings → Integrations → API
  // Free tier: 50 credits/month. Basic plan ($49/mo) gives 10,000/mo
  APOLLO_API_KEY: 'YOUR_APOLLO_KEY',

  // https://hunter.io → Dashboard → API  (free: 25 requests/mo)
  HUNTER_API_KEY: 'YOUR_HUNTER_KEY',

  // ─── Tracking ──────────────────────────────────────────────────────────────
  // Set this after deploying Tracking.gs as a Web App (Step 4 in README.md)
  TRACKING_WEBAPP_URL: 'YOUR_WEBAPP_URL',

  // ─── Sender identity ───────────────────────────────────────────────────────
  FROM_NAME:    'Noor at Cledger',
  REPLY_TO:     'info@cledger.co.uk',
  WEBSITE:      'https://www.cledger.co.uk',
  PHONE:        '+44 XXXX XXXXXX',
  CALENDLY_URL: 'https://calendly.com/YOUR_LINK',

  // ─── Automation rules ──────────────────────────────────────────────────────
  DAILY_LEAD_TARGET: 20,  // minimum fresh leads per day
  FOLLOW_UP_DAYS:    10,  // days after first email before follow-up is sent
  MAX_FOLLOW_UPS:    2,   // maximum follow-up rounds per lead
  DAILY_EMAIL_BATCH: 25,  // emails sent per daily run (Gmail limit safety)

  // ─── Target industries ─────────────────────────────────────────────────────
  UK_INDUSTRIES: [
    'retail', 'hospitality', 'construction', 'professional services',
    'technology', 'healthcare', 'manufacturing', 'real estate',
    'education', 'media', 'food beverage', 'beauty', 'fitness',
    'consulting', 'legal', 'recruitment', 'logistics', 'ecommerce',
    'property', 'trades', 'automotive', 'events', 'charity', 'care',
  ],

  US_INDUSTRIES: [
    'technology', 'consulting', 'media', 'marketing', 'ecommerce',
    'software', 'saas', 'retail', 'manufacturing', 'logistics',
    'events', 'agency', 'startup', 'design', 'creative',
  ],

  // ─── Services per region ───────────────────────────────────────────────────
  UK_SERVICES: [
    'Bookkeeping & Management Accounts',
    'Self-Assessment Tax Returns',
    'Corporation Tax Filing',
    'VAT Returns & Making Tax Digital (MTD)',
    'Payroll & Auto-Enrolment',
    'Company Formation & Secretarial',
    'Statutory Annual Accounts',
    'Cash Flow Forecasting',
    'HMRC Investigation Support',
    'Financial Advisory & Growth Planning',
  ],

  US_SERVICES: [
    'UK Market Entry & Incorporation Advisory',
    'International Business Structure Consulting',
    'Management Reporting & KPI Dashboards',
    'Financial Modelling & Forecasting',
    'Business Process Optimisation',
    'Cross-border Compliance Advisory',
  ],

  // Minimum score to pursue a lead (0–100)
  MIN_LEAD_SCORE: 40,

  // Companies House search terms for UK lead discovery
  UK_SEARCH_TERMS: [
    'ltd restaurant', 'ltd construction', 'ltd retail', 'ltd consulting',
    'ltd technology', 'ltd logistics', 'ltd healthcare', 'ltd property',
    'ltd recruitment', 'ltd marketing', 'ltd events', 'ltd beauty',
    'ltd fitness', 'ltd engineering', 'ltd legal services',
  ],
};
