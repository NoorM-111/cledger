import type { Metadata } from 'next'
import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata: Metadata = {
  title: 'Self Assessment Tax Return: Complete UK Guide 2026 | Cledger',
  description: 'Who needs to file a Self Assessment, what to include, key deadlines, and the most common mistakes. Everything you need to know for 2025/26 tax year.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/self-assessment-tax-return-guide-uk',
  },
  openGraph: {
    title: 'Self Assessment Tax Return: Complete UK Guide 2026',
    description: 'Who needs to file, what to include, key deadlines, and the most common mistakes, 2025/26 tax year.',
    url: 'https://www.cledger.co.uk/blog/self-assessment-tax-return-guide-uk',
    siteName: 'Cledger',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self Assessment Tax Return: Complete UK Guide 2026 | Cledger',
    description: 'Who needs to file, what to include, key deadlines, and the most common mistakes, 2025/26 tax year.',
  },
}

export default function SelfAssessmentGuideUK() {
  return (
    <BlogLayout
      eyebrow="Tax guide"
      title="Self Assessment tax return: complete UK guide 2026"
      date="June 1, 2026"
      readTime="7 min read"
      intro="Over 12 million people in the UK file a Self Assessment tax return each year, and HMRC issues over £300 million in late filing penalties annually. This guide covers who needs to file, what to include, the 2026 deadlines, and the mistakes that cost people the most money."
      ctaText="Get your Self Assessment sorted →"
      ctaHref="/pricing"
    >
      <h2 style={s.h2}>Who needs to file a Self Assessment?</h2>
      <p style={s.p}>You must file a Self Assessment tax return if, in the 2025/26 tax year, any of the following apply:</p>
      <ul style={s.ul}>
        <li style={s.li}>You were self-employed as a sole trader and earned more than £1,000 (before expenses)</li>
        <li style={s.li}>You are a partner in a business partnership</li>
        <li style={s.li}>You received rental income from property</li>
        <li style={s.li}>You received income from savings, investments, or dividends above the tax-free allowances</li>
        <li style={s.li}>You are a company director (even if you took no salary)</li>
        <li style={s.li}>Your income exceeded £100,000 (HMRC removes the Personal Allowance above this level)</li>
        <li style={s.li}>You claimed Child Benefit and you or your partner earned over £60,000 (High Income Child Benefit charge)</li>
        <li style={s.li}>You received income from abroad</li>
        <li style={s.li}>You need to claim tax reliefs not available through PAYE (e.g. Gift Aid, pension contributions above the basic rate)</li>
      </ul>
      <p style={s.p}>
        If you are unsure, HMRC has a check tool on gov.uk that confirms whether you need to register.
      </p>

      <h2 style={s.h2}>Key Self Assessment deadlines for 2025/26</h2>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Deadline</th>
            <th style={s.th}>Date</th>
            <th style={s.th}>What it is</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={s.td}>Register for Self Assessment</td>
            <td style={s.td}>5 October 2026</td>
            <td style={s.td}>If it is your first time filing</td>
          </tr>
          <tr>
            <td style={s.td}>Paper return deadline</td>
            <td style={s.td}>31 October 2026</td>
            <td style={s.td}>If filing a paper SA100</td>
          </tr>
          <tr>
            <td style={s.td}>Online return + tax payment</td>
            <td style={s.td}>31 January 2027</td>
            <td style={s.td}>The main deadline for most people</td>
          </tr>
          <tr>
            <td style={s.td}>Second payment on account</td>
            <td style={s.td}>31 July 2027</td>
            <td style={s.td}>For those making payments on account</td>
          </tr>
        </tbody>
      </table>

      <h2 style={s.h2}>Penalties for late filing and payment</h2>
      <p style={s.p}>Missing the 31 January deadline triggers an <strong style={s.strong}>automatic £100 penalty</strong>, even if you owe no tax. The penalties escalate:</p>
      <ul style={s.ul}>
        <li style={s.li}>1 day late: £100 fixed penalty</li>
        <li style={s.li}>3 months late: additional £10 per day (up to 90 days = £900)</li>
        <li style={s.li}>6 months late: further £300 or 5% of tax due (whichever is higher)</li>
        <li style={s.li}>12 months late: another £300 or 5% of tax due (plus potential criminal investigation for deliberate non-filing)</li>
      </ul>
      <p style={s.p}>
        Late payment of tax also attracts interest (Bank of England base rate + 2.5%) from the day after the deadline, plus a 5% surcharge if the tax is still unpaid after 30 days.
      </p>

      <h2 style={s.h2}>What information do you need to complete your return?</h2>
      <p style={s.p}>Gather the following before you start:</p>
      <ul style={s.ul}>
        <li style={s.li}><strong style={s.strong}>UTR number</strong>, your Unique Taxpayer Reference (10 digits, on all HMRC correspondence)</li>
        <li style={s.li}><strong style={s.strong}>P60 or P45</strong>, if you were employed at any point during the tax year</li>
        <li style={s.li}><strong style={s.strong}>Self-employment income and expenses</strong>, total turnover and categorised expenses</li>
        <li style={s.li}><strong style={s.strong}>Bank interest statements</strong></li>
        <li style={s.li}><strong style={s.strong}>Dividend vouchers</strong>, if you received dividends from a Ltd company</li>
        <li style={s.li}><strong style={s.strong}>Rental income and expenses</strong>, if you have property</li>
        <li style={s.li}><strong style={s.strong}>Pension contribution receipts</strong>, for higher/additional rate relief claims</li>
        <li style={s.li}><strong style={s.strong}>Gift Aid donations</strong></li>
        <li style={s.li}><strong style={s.strong}>Capital gains details</strong>, if you sold shares, property, or other assets</li>
      </ul>

      <h2 style={s.h2}>What expenses can self-employed people claim?</h2>
      <p style={s.p}>
        Allowable expenses reduce your taxable profit and therefore your tax bill. For self-employed sole traders, HMRC allows deductions for expenses that are <strong style={s.strong}>wholly and exclusively</strong> for the purposes of the business. Common allowable expenses include:
      </p>
      <ul style={s.ul}>
        <li style={s.li}>Office costs (stationery, software, equipment under £1,000)</li>
        <li style={s.li}>Travel costs, fuel, public transport, parking for business journeys (not commuting)</li>
        <li style={s.li}>Clothing, only uniforms or protective clothing, not regular clothing</li>
        <li style={s.li}>Staff costs, wages, subcontractor payments, employer NIC</li>
        <li style={s.li}>Professional fees, accountant, solicitor, bookkeeper</li>
        <li style={s.li}>Marketing, website hosting, advertising, business cards</li>
        <li style={s.li}>Business premises, rent, utilities (proportional if working from home)</li>
        <li style={s.li}>Training, courses directly related to your current trade</li>
      </ul>
      <p style={s.p}>
        You can use the <strong style={s.strong}>simplified expenses</strong> method for vehicles (flat rate per mile) and working from home (flat rate per hour). These are easier to calculate but may give a lower deduction than actual costs for some businesses.
      </p>

      <h2 style={s.h2}>Payments on account, the biggest shock for new filers</h2>
      <p style={s.p}>
        If your Self Assessment tax bill exceeds £1,000 and less than 80% of your tax was collected at source (via PAYE), HMRC requires you to make <strong style={s.strong}>payments on account</strong>, advance payments towards next year&apos;s tax bill.
      </p>
      <p style={s.p}>
        Each payment on account is 50% of your previous year&apos;s tax bill, due on 31 January and 31 July. This means in your first year of self-employment, your January bill can be 150% of what you expected, your actual tax for the year plus the first payment on account for the following year.
      </p>
      <p style={s.p}>
        You can apply to reduce payments on account if you expect your income to be lower next year, but if you reduce them and your income turns out to be higher, HMRC will charge interest on the shortfall.
      </p>

      <h2 style={s.h2}>The most common Self Assessment mistakes</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong style={s.strong}>Missing the registration deadline</strong>, you must register by 5 October in the year after the tax year ends, or face a late registration penalty</li>
        <li style={s.li}><strong style={s.strong}>Forgetting bank interest and dividends</strong>, HMRC cross-references with financial institutions and will issue a correction notice</li>
        <li style={s.li}><strong style={s.strong}>Claiming personal expenses as business expenses</strong>, the most common trigger for an HMRC compliance check</li>
        <li style={s.li}><strong style={s.strong}>Not keeping records</strong>, HMRC can request supporting evidence for any return up to 4 years after the filing deadline (7 years for serious errors)</li>
        <li style={s.li}><strong style={s.strong}>Missing the payments on account</strong>, many people pay the January bill and forget the July payment on account, then face a surprise penalty</li>
        <li style={s.li}><strong style={s.strong}>Using the wrong accounting basis</strong>, most sole traders should use <strong style={s.strong}>cash basis</strong> (record income when received, expenses when paid) unless they have good reason to use accruals basis</li>
      </ul>

      <div style={s.highlight}>
        <p style={{...s.p,marginBottom:'0.3rem',color:C.white}}><strong style={s.strong}>Leave your Self Assessment to us.</strong></p>
        <p style={{...s.p,marginBottom:0}}>
          Cledger prepares and files Self Assessment returns for sole traders, landlords, and company directors. Qualified accountants, MTD compliant, from £65/month. No January panic.
        </p>
      </div>
    </BlogLayout>
  )
}
