# Cledger Lead Generation System

Fully automated: 20+ qualified leads per day → personalised email outreach + LinkedIn queue → 10-day follow-ups → record keeping in Google Sheets → email open tracking.

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                Google Apps Script (free)                 │
│                                                         │
│  8 AM  → runDailyLeadGeneration()                       │
│          ├─ importFromQueue()  (Import Queue sheet)     │
│          ├─ findLeadsViaApollo()  (Apollo.io API)       │
│          └─ findUKLeadsViaCompaniesHouse()  (CH API)    │
│                                                         │
│  9 AM  → runDailyEmailOutreach()                        │
│          ├─ sendInitialEmail()  (Gmail)                  │
│          └─ addToLinkedInQueue()  (LinkedIn Queue sheet)│
│                                                         │
│  10 AM → runFollowUpCycle()                             │
│          ├─ Follow-up 1 (day 10)                        │
│          └─ Follow-up 2 (day 20)                        │
│                                                         │
│  Anytime → Email tracking pixel → markEmailOpened()     │
└─────────────────────────────────────────────────────────┘
         ↕
┌─────────────────────────┐   ┌──────────────────────────┐
│     Google Sheets       │   │  Next.js /api/track      │
│  (CRM + all records)    │   │  (Vercel tracking relay) │
└─────────────────────────┘   └──────────────────────────┘
```

---

## One-Time Setup (30–45 minutes)

### Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) → create a new blank spreadsheet
2. Name it **"Cledger Lead Generation"**
3. Copy the Sheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/**{THIS_IS_YOUR_ID}**/edit`
4. Paste it into `Config.gs` → `SPREADSHEET_ID`

---

### Step 2 — Create the Google Apps Script project

1. In your Google Sheet: **Extensions → Apps Script**
2. Delete the default `Code.gs` file
3. Create one new file for each `.gs` file in this folder:
   - `Config.gs`
   - `Columns.gs`
   - `Utils.gs`
   - `SheetManager.gs`
   - `LeadFinder.gs`
   - `LeadQualifier.gs`
   - `EmailTemplates.gs`
   - `EmailSender.gs`
   - `LinkedInQueue.gs`
   - `FollowUpManager.gs`
   - `Tracking.gs`
   - `Setup.gs`
   - `Main.gs`
4. Paste the matching code into each file
5. Save the project (Ctrl+S)

---

### Step 3 — Get your API keys

#### Companies House (free — UK company data)
1. Go to [developer.company-information.service.gov.uk](https://developer.company-information.service.gov.uk)
2. Register → create an application → copy your API key
3. Paste into `Config.gs` → `COMPANIES_HOUSE_API_KEY`

#### Apollo.io (lead database — has a free tier)
1. Go to [apollo.io](https://app.apollo.io) → sign up
2. **Settings → Integrations → API** → copy your API key
3. Paste into `Config.gs` → `APOLLO_API_KEY`
4. **Recommended plan**: Basic ($49/mo) for 10,000 credits/month
   *(Free tier gives 50 credits — enough for testing but not 20/day production)*

#### Hunter.io (email finder — free tier: 25/month)
1. Go to [hunter.io](https://hunter.io) → sign up → Dashboard → API
2. Copy your API key → paste into `Config.gs` → `HUNTER_API_KEY`

---

### Step 4 — Deploy the tracking endpoint

1. In Apps Script: **Deploy → New deployment**
2. Type: **Web App**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy** → copy the Web App URL
6. Paste the URL into `Config.gs` → `TRACKING_WEBAPP_URL`

*This URL is your tracking pixel endpoint. It records when a recipient opens your email.*

---

### Step 5 — Fill in your sender details (Config.gs)

```javascript
FROM_NAME:    'Noor at Cledger',
REPLY_TO:     'info@cledger.co.uk',
WEBSITE:      'https://www.cledger.co.uk',
PHONE:        '+44 XXXX XXXXXX',
CALENDLY_URL: 'https://calendly.com/YOUR_LINK',
```

---

### Step 6 — Run setup

1. In Apps Script, select function `setupAll` from the dropdown
2. Click **Run**
3. Grant all requested permissions (Gmail, Sheets, external URLs)
4. All sheets and triggers will be created automatically

---

### Step 7 — Run a test

1. Open `Main.gs`
2. Change `YOUR_TEST_EMAIL@gmail.com` to your own email in `testWithSingleLead()`
3. Run `testWithSingleLead()`
4. Check that you receive the email + the lead appears in the Leads sheet

---

## Daily Operation (Automatic)

| Time | What happens |
|------|-------------|
| 8:00 AM | System finds 20+ new qualified leads via APIs |
| 9:00 AM | Personalised emails sent to all new leads |
| 10:00 AM | Any leads 10 days old without a reply get a follow-up |
| Sunday 11 PM | Leads with no response after 2 follow-ups are marked "Lost" |

---

## Google Sheets Tabs

| Sheet | Purpose |
|-------|---------|
| **Leads** | Master CRM — every lead with full status history |
| **LinkedIn Queue** | Ready-to-copy LinkedIn messages (send manually) |
| **Daily Stats** | Leads generated, emails sent, open rates, per day |
| **Email Log** | Every email sent with subject and status |
| **Import Queue** | Paste Apollo/LinkedIn CSV exports here to bulk import |

---

## Lead Record Fields (Leads Sheet)

| Column | Field | Values |
|--------|-------|--------|
| A | Lead ID | CL-XXXX-XXXX |
| B | Date Added | YYYY-MM-DD |
| C | Company | Company name |
| D–E | First/Last Name | Contact name |
| F | Email | Email address |
| G | Phone | Phone number |
| H | Business Type | Limited Company / Sole Trader |
| I | Industry | Technology / Retail / etc. |
| J | Country | UK / US |
| K | City | City name |
| L | Company Size | 1-10 / 11-50 / 51-200 |
| M | Website | URL |
| N | LinkedIn URL | Profile URL |
| O | Lead Score | 0–100 |
| P | Services Match | Matched Cledger services |
| Q | Email 1 Status | Not Sent → Sent → Opened → Replied |
| R | Email 1 Sent | Date sent |
| S | Email 1 Opened | Yes / No |
| T | Email 1 Opened Date | Date/time opened |
| U | Follow-up 1 Status | Pending → Sent → Opened → Replied |
| V | Follow-up 1 Sent | Date sent |
| W | Follow-up 1 Opened | Yes / No |
| X–Z | Follow-up 2 | Same as above |
| AA | LinkedIn Status | Queued → Sent → Connected → Replied |
| AB | LinkedIn Sent | Date sent |
| AC | Overall Status | New → Contacted → Interested → Meeting Booked → Won / Lost |
| AD | Notes | Manual notes |
| AE | Source | Apollo.io / Companies House / Manual Import |

---

## Manual Lead Import (Apollo or LinkedIn export)

1. Export contacts from Apollo.io or LinkedIn Sales Navigator as CSV
2. Open the **Import Queue** sheet in your Google Sheet
3. Paste data in columns: `Company | First Name | Last Name | Email | Phone | Industry | Country | City | Website | LinkedIn URL`
4. In Apps Script, run `importFromQueue()`
5. Leads are scored, deduplicated, and added to the Leads sheet automatically

---

## LinkedIn Outreach

LinkedIn automation is prohibited by LinkedIn's Terms of Service. The system:
1. **Generates** a personalised LinkedIn message for every lead with a LinkedIn URL
2. **Stores** it in the LinkedIn Queue sheet ready to copy-paste
3. **You send** it manually in LinkedIn (or via a ToS-compliant tool like [Expandi](https://expandi.io) or [Dripify](https://dripify.io))
4. Once sent, mark it as sent by running `markLinkedInSent('CL-XXXX-XXXX')` in Apps Script

---

## Email Open Tracking

Each outreach email contains a 1×1 invisible tracking pixel. When the recipient opens the email, their email client loads the pixel from your tracking Web App, which:
- Records the open in the Leads sheet (Email 1 Opened = "Yes")
- Logs the date/time
- Updates the status to "Opened"

> **Note**: Gmail and some corporate email clients pre-load images (caching). This means the "opened" signal fires when the image is first loaded, which may be slightly different from the actual read time. This is an industry-standard limitation — still very useful for identifying warm leads.

---

## Marking Leads Manually

When a lead replies or books a meeting, update their status in Apps Script:

```javascript
// Lead replied
markLeadReplied('CL-XXXX-XXXX', 'Interested in bookkeeping service');

// Meeting booked
markMeetingBooked('CL-XXXX-XXXX', '2026-05-28 14:00');
```

Or simply edit the "Overall Status" column in the Leads sheet directly.

---

## Cost Summary

| Tool | Plan | Cost |
|------|------|------|
| Google Apps Script | Free | £0/mo |
| Google Sheets | Free | £0/mo |
| Gmail | Free (500 emails/day) | £0/mo |
| Companies House API | Free | £0/mo |
| Hunter.io | Free tier (25 lookups/mo) | £0/mo |
| Apollo.io | Basic (for 20/day production) | ~£40/mo |
| **Total** | | **~£40/mo** |

---

## Troubleshooting

**"Authorisation required" error when running setup**
→ Click "Review permissions" → select your Google account → click "Advanced" → "Go to project (unsafe)" → Allow

**No leads being found**
→ Check your Apollo.io API key is correct and has credits remaining
→ Run `runHealthCheck()` to see diagnostics

**Emails not sending**
→ Check Gmail daily quota with `getRemainingEmailQuota()`
→ Ensure your Google account matches `CONFIG.REPLY_TO`

**Tracking pixel not recording opens**
→ Verify `CONFIG.TRACKING_WEBAPP_URL` is set to your deployed Web App URL
→ Test the URL directly in a browser — you should see a blank response (not an error)
