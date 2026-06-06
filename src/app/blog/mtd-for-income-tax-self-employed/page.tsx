import type { Metadata } from 'next'
import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata: Metadata = {
  title: 'Making Tax Digital for Income Tax: What Self-Employed Need to Know (2026) | Cledger',
  description: 'MTD for Income Tax starts April 2026 for self-employed with £50k+ turnover. Quarterly digital reporting to HMRC is now mandatory. Here is what changes.',
  keywords: 'Making Tax Digital income tax self employed, MTD ITSA 2026, quarterly reporting HMRC self employed, MTD for income tax sole trader',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/mtd-for-income-tax-self-employed',
  },
  openGraph: {
    title: 'Making Tax Digital for Income Tax: What Self-Employed Need to Know (2026)',
    description: 'MTD for Income Tax starts April 2026 for self-employed with £50k+ turnover. What changes and how to prepare.',
    url: 'https://www.cledger.co.uk/blog/mtd-for-income-tax-self-employed',
    siteName: 'Cledger',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Making Tax Digital for Income Tax: What Self-Employed Need to Know (2026) | Cledger',
    description: 'MTD for Income Tax starts April 2026 for self-employed with £50k+ turnover. What changes and how to prepare.',
  },
}

export default function MtdForIncomeTaxSelfEmployed() {
  return (
    <BlogLayout
      eyebrow="HMRC compliance"
      title="Making Tax Digital for income tax: what self-employed need to know (2026)"
      date="June 1, 2026"
      readTime="6 min read"
      intro={<>Making Tax Digital for Income Tax Self Assessment (MTD for ITSA) is now live for the first wave of self-employed individuals and landlords. If your qualifying income exceeds £50,000, <strong style={s.strong}>you are already required to comply from April 2026</strong>. This guide explains exactly what has changed, what you must do, and what happens if you do not.</>}
      ctaText="Get MTD compliant with Cledger →"
      ctaHref="/pricing"
    >
      <h2 style={s.h2}>What is MTD for Income Tax?</h2>
      <p style={s.p}>
        MTD for Income Tax replaces the annual Self Assessment tax return for qualifying individuals with a system of <strong style={s.strong}>quarterly digital updates</strong> submitted directly to HMRC through compatible software. Instead of filing one return by 31 January each year, you will submit four quarterly updates during the tax year, plus a final declaration at the end.
      </p>
      <p style={s.p}>
        The underlying principle is the same as MTD for VAT: HMRC wants your accounting records kept digitally, with submissions made directly from software, not typed manually into a government portal.
      </p>

      <h2 style={s.h2}>Who must comply and when</h2>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Start date</th>
            <th style={s.th}>Who is affected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={s.td}>April 2026</td>
            <td style={s.td}>Self-employed and landlords with qualifying income over £50,000</td>
          </tr>
          <tr>
            <td style={s.td}>April 2027</td>
            <td style={s.td}>Self-employed and landlords with qualifying income over £30,000</td>
          </tr>
          <tr>
            <td style={s.td}>April 2028</td>
            <td style={s.td}>Self-employed and landlords with qualifying income over £20,000</td>
          </tr>
        </tbody>
      </table>
      <p style={s.p}>
        <strong style={s.strong}>Qualifying income</strong> means gross income from self-employment and/or UK property, before expenses. If you have multiple sources, they are added together. A sole trader turning over £35,000 who also receives £18,000 in rental income has qualifying income of £53,000 and must comply from April 2026.
      </p>
      <p style={s.p}>
        Partnerships, limited companies, and trusts are <strong style={s.strong}>not in scope</strong> for MTD for ITSA, this applies to individuals only.
      </p>

      <h2 style={s.h2}>What the quarterly reporting involves</h2>
      <p style={s.p}>Each quarter you must submit a summary of your income and expenses to HMRC through MTD-compatible software. The quarterly update periods follow the tax year:</p>
      <ul style={s.ul}>
        <li style={s.li}>Quarter 1: 6 April – 5 July (deadline: 7 August)</li>
        <li style={s.li}>Quarter 2: 6 July – 5 October (deadline: 7 November)</li>
        <li style={s.li}>Quarter 3: 6 October – 5 January (deadline: 7 February)</li>
        <li style={s.li}>Quarter 4: 6 January – 5 April (deadline: 7 May)</li>
      </ul>
      <p style={s.p}>
        After the fourth quarter, you submit a <strong style={s.strong}>final declaration</strong> (replacing the traditional Self Assessment return) by 31 January the following year. This is where you add any other income sources, claim reliefs, and confirm your tax position.
      </p>

      <h2 style={s.h2}>What software do you need?</h2>
      <p style={s.p}>You must use HMRC-recognised MTD for ITSA compatible software. The main options currently available include:</p>
      <ul style={s.ul}>
        <li style={s.li}><strong style={s.strong}>Xero</strong>, full MTD for ITSA compliance built in</li>
        <li style={s.li}><strong style={s.strong}>QuickBooks Self-Employed / QuickBooks Online</strong></li>
        <li style={s.li}><strong style={s.strong}>FreeAgent</strong>, popular with freelancers</li>
        <li style={s.li}><strong style={s.strong}>Sage Accounting</strong></li>
        <li style={s.li}>Several smaller specialist apps (check HMRC&apos;s approved software list)</li>
      </ul>
      <p style={s.p}>
        Spreadsheets alone do not qualify, you need either dedicated software or bridging software that connects your spreadsheet to HMRC&apos;s MTD system.
      </p>

      <h2 style={s.h2}>Penalties for non-compliance</h2>
      <p style={s.p}>
        HMRC is applying a points-based penalty system to MTD for ITSA late submissions, similar to the VAT penalty regime. Each late quarterly update earns a penalty point. Once you reach the threshold (4 points for quarterly filers), a <strong style={s.strong}>£200 fixed penalty</strong> is charged, with further £200 penalties for each subsequent late submission.
      </p>
      <p style={s.p}>
        Penalty points expire after 24 months of full compliance, meaning if you are late once, the point sits on your record for two years.
      </p>

      <h2 style={s.h2}>What actually changes day-to-day?</h2>
      <p style={s.p}>
        For most self-employed people, the practical change is this: instead of gathering 12 months of receipts and invoices once a year in January, you keep your records up to date every quarter. The software does the heavy lifting, you review a summary and click submit.
      </p>
      <p style={s.p}>
        The quarterly updates do <strong style={s.strong}>not</strong> require you to pay tax quarterly. Your tax liability is still calculated at the end of the year and paid by 31 January. The quarterly submissions are information-gathering exercises, not payment demands.
      </p>

      <h2 style={s.h2}>Exemptions, who does not need to comply?</h2>
      <p style={s.p}>
        HMRC has confirmed exemptions for: individuals who are digitally excluded (cannot use a computer due to age, disability, or location), those whose qualifying income is below the threshold, and those for whom HMRC determines it would be unreasonable to comply. Applying for an exemption requires contacting HMRC directly.
      </p>

      <div style={s.highlight}>
        <p style={{...s.p,marginBottom:'0.3rem',color:C.white}}><strong style={s.strong}>Not sure if MTD applies to you, or need help getting compliant?</strong></p>
        <p style={{...s.p,marginBottom:0}}>
          Cledger handles MTD for ITSA setup and quarterly submissions for sole traders and landlords. We use Xero or QuickBooks, keep your records current, and submit every quarter on time.
        </p>
      </div>
    </BlogLayout>
  )
}
