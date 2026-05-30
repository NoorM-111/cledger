// Column index map for the Leads sheet (0-based, matching HEADERS array)
const COL = {
  ID:                  0,  // A
  DATE_ADDED:          1,  // B
  COMPANY:             2,  // C
  FIRST_NAME:          3,  // D
  LAST_NAME:           4,  // E
  EMAIL:               5,  // F
  PHONE:               6,  // G
  BUSINESS_TYPE:       7,  // H
  INDUSTRY:            8,  // I
  COUNTRY:             9,  // J
  CITY:                10, // K
  COMPANY_SIZE:        11, // L
  WEBSITE:             12, // M
  LINKEDIN_URL:        13, // N
  LEAD_SCORE:          14, // O
  SERVICES_MATCH:      15, // P
  // Initial outreach
  EMAIL1_STATUS:       16, // Q  → Not Sent | Sent | Opened | Replied
  EMAIL1_SENT_DATE:    17, // R
  EMAIL1_OPENED:       18, // S  → Yes | No
  EMAIL1_OPENED_DATE:  19, // T
  // Follow-up 1
  FU1_STATUS:          20, // U  → Pending | Sent | Opened | Replied
  FU1_SENT_DATE:       21, // V
  FU1_OPENED:          22, // W  → Yes | No
  // Follow-up 2
  FU2_STATUS:          23, // X
  FU2_SENT_DATE:       24, // Y
  FU2_OPENED:          25, // Z
  // LinkedIn
  LINKEDIN_STATUS:     26, // AA → Queued | Sent | Connected | Replied
  LINKEDIN_SENT_DATE:  27, // AB
  // Summary
  OVERALL_STATUS:      28, // AC → New | Contacted | Interested | Meeting Booked | Won | Lost
  NOTES:               29, // AD
  SOURCE:              30, // AE
};

const TOTAL_COLS = 31;

const HEADERS = [
  'Lead ID', 'Date Added', 'Company', 'First Name', 'Last Name', 'Email',
  'Phone', 'Business Type', 'Industry', 'Country', 'City', 'Company Size',
  'Website', 'LinkedIn URL', 'Lead Score', 'Services Match',
  'Email 1 Status', 'Email 1 Sent', 'Email 1 Opened', 'Email 1 Opened Date',
  'Follow-up 1 Status', 'Follow-up 1 Sent', 'Follow-up 1 Opened',
  'Follow-up 2 Status', 'Follow-up 2 Sent', 'Follow-up 2 Opened',
  'LinkedIn Status', 'LinkedIn Sent',
  'Overall Status', 'Notes', 'Source',
];

const LINKEDIN_HEADERS = [
  'Lead ID', 'Company', 'Contact Name', 'LinkedIn URL',
  'Message Draft', 'Status', 'Date Queued', 'Date Sent', 'Notes',
];

const STATS_HEADERS = [
  'Date', 'Leads Generated', 'Emails Sent', 'Emails Opened', 'Open Rate %',
  'Follow-ups Sent', 'LinkedIn Queued', 'Replies Received', 'Meetings Booked',
];

const EMAIL_LOG_HEADERS = [
  'Timestamp', 'Lead ID', 'Company', 'Email', 'Email Type',
  'Subject', 'Status', 'Opened', 'Opened At',
];
