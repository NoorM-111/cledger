import type { Metadata } from 'next'
import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata: Metadata = {
  title: 'Corporation Tax UK: Small Business Guide 2026 | Cledger',
  description: 'UK Corporation Tax is 19%–25% depending on profits. Deadlines, reliefs, and how to reduce your bill legally, complete 2026 guide for Ltd companies.',
  keywords: 'corporation tax UK small business, CT600 guide, corporation tax rate 2026, how to reduce corporation tax UK, CT600 deadline',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/corporation-tax-guide-small-business-uk',
  },
  openGraph: {
    title: 'Corporation Tax UK: Small Business Guide 2026',
    description: 'UK Corporation Tax is 19%–25% depending on profits. Deadlines, reliefs, and how to reduce your bill legally.',
    url: 'https://www.cledger.co.uk/blog/corporation-tax-guide-small-business-uk',
    siteName: 'Cledger',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporation Tax UK: Small Business Guide 2026 | Cledger',
    description: 'UK Corporation Tax is 19%–25% depending on profits. Deadlines, reliefs, and how to reduce your bill legally.',
  },
}

export default function CorporationTaxGuideUK() {
  return (
    <BlogLayout
      eyebrow="Tax guide"
      title="Corporation tax UK: small business guide 2026"
      date="June 1, 2026"
      readTime="7 min read"
      intro="If your limited company makes a profit, it pays Corporation Tax. The rate depends on how much profit you make, and missing the deadline costs you interest and penalties from day one. This guide covers the current rates, deadlines, allowable deductions, and the most effective ways to reduce your CT bill legally in 2026."
      ctaText="See CT600 pricing →"
      ctaHref="/pricing"
    >
      <h2 style={s.h2}>What is Corporation Tax and who pays it?</h2>
      <p style={s.p}>
        Corporation Tax (CT) is a tax on the taxable profits of UK limited companies and some other organisations. If you trade through a limited company, you are liable for Corporation Tax on: trading profits, investment income, and chargeable gains (profit from selling assets).
      </p>
      <p style={s.p}>
        Sole traders and partnerships do not pay Corporation Tax, they pay Income Tax and Class 4 National Insurance through Self Assessment instead. Only incorporated entities (limited companies) are subject to CT.
      </p>

      <h2 style={s.h2}>Corporation Tax rates 2026/27</h2>
      <p style={s.p}>Since April 2023, the UK Corporation Tax system uses a marginal relief structure with two main rates:</p>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Profit level</th>
            <th style={s.th}>CT rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={s.td}>Up to £50,000 (Small Profits Rate)</td>
            <td style={s.td}>19%</td>
          </tr>
          <tr>
            <td style={s.td}>£50,001 – £250,000 (Marginal Relief applies)</td>
            <td style={s.td}>Effective rate between 19%–25%</td>
          </tr>
          <tr>
            <td style={s.td}>Over £250,000 (Main Rate)</td>
            <td style={s.td}>25%</td>
          </tr>
        </tbody>
      </table>
      <p style={s.p}>
        <strong style={s.strong}>Important:</strong> The £50,000 and £250,000 thresholds are divided by the number of associated companies you have. If you own two companies, each threshold is halved (£25,000 and £125,000). This catches many director-shareholders who set up multiple companies expecting each to benefit from the small profits rate independently.
      </p>

      <h2 style={s.h2}>Corporation Tax deadlines, when is CT due?</h2>
      <p style={s.p}>There are two separate CT deadlines to track:</p>
      <p style={s.p}>
        <strong style={s.strong}>CT payment deadline:</strong> 9 months and 1 day after your accounting period ends. So if your company year-end is 31 March 2026, your CT payment is due by 1 January 2027.
      </p>
      <p style={s.p}>
        <strong style={s.strong}>CT600 filing deadline:</strong> 12 months after your accounting period ends. For the 31 March 2026 year-end, the CT600 is due by 31 March 2027. Note: payment is due 3 months earlier than the return filing.
      </p>
      <p style={s.p}>
        <strong style={s.strong}>Large companies</strong> (profits over £1.5m) pay CT quarterly in advance. Most small businesses are not affected by this.
      </p>

      <h2 style={s.h2}>Penalties for late CT payment and filing</h2>
      <p style={s.p}>
        Missing the CT payment deadline triggers HMRC interest charges from day one, currently at the Bank of England base rate plus 2.5%. There is no grace period.
      </p>
      <p style={s.p}>
        Late CT600 filing penalties: <strong style={s.strong}>£100</strong> immediately on the day after the deadline, a further <strong style={s.strong}>£100</strong> after 3 months, and tax-based penalties (10% of unpaid CT) if the return is 6 or 12 months late. These accumulate quickly and HMRC does not waive them without a genuine reasonable excuse.
      </p>

      <h2 style={s.h2}>Allowable deductions, what reduces your CT bill?</h2>
      <p style={s.p}>
        Corporation Tax is charged on profits, which means every legitimate business expense reduces your taxable profit and therefore your CT bill. Common allowable deductions include:
      </p>
      <ul style={s.ul}>
        <li style={s.li}><strong style={s.strong}>Director salary and employee wages</strong>, fully deductible if commercially justified</li>
        <li style={s.li}><strong style={s.strong}>Employer pension contributions</strong>, one of the most tax-efficient ways to extract value from a company</li>
        <li style={s.li}><strong style={s.strong}>Office costs, equipment, subscriptions</strong></li>
        <li style={s.li}><strong style={s.strong}>Accountancy and professional fees</strong></li>
        <li style={s.li}><strong style={s.strong}>Business travel</strong> (not commuting)</li>
        <li style={s.li}><strong style={s.strong}>Marketing and advertising</strong></li>
        <li style={s.li}><strong style={s.strong}>Interest on business loans</strong></li>
        <li style={s.li}><strong style={s.strong}>Capital allowances</strong>, deductions for assets like computers, machinery, and vehicles</li>
      </ul>

      <h2 style={s.h2}>Capital allowances, full expensing</h2>
      <p style={s.p}>
        Since April 2023, the UK has had <strong style={s.strong}>full expensing</strong> for qualifying plant and machinery, meaning you can deduct 100% of the cost of most business assets in the year of purchase rather than spreading the deduction over several years. This is a significant relief for businesses investing in equipment.
      </p>
      <p style={s.p}>
        The <strong style={s.strong}>Annual Investment Allowance (AIA)</strong> of £1,000,000 per year covers most SME capital expenditure. Any qualifying asset purchase up to £1m can be fully deducted in year one.
      </p>

      <h2 style={s.h2}>R&D tax credits, often missed</h2>
      <p style={s.p}>
        If your company is developing new products, processes, or software, even internally, you may qualify for R&D tax credits. For small companies, the SME R&D scheme allows you to deduct an additional percentage of qualifying R&D costs from your taxable profits, or claim a cash repayment from HMRC if the company is loss-making.
      </p>
      <p style={s.p}>
        R&D claims are complex and HMRC scrutiny has increased significantly since 2023. Claims should be prepared by an accountant with R&D experience, poorly prepared claims are a common trigger for CT enquiries.
      </p>

      <h2 style={s.h2}>How to file your CT600</h2>
      <p style={s.p}>
        The CT600 (Corporation Tax return) is filed online through HMRC&apos;s Corporation Tax service or through commercial accounting software such as IRIS or CCH. It must be accompanied by your statutory accounts (in iXBRL format) and a computation showing how you arrived at the taxable profit figure.
      </p>
      <p style={s.p}>
        Most small business owners use an accountant to prepare and file their CT600, the iXBRL tagging requirement alone makes DIY filing impractical for the majority of Ltd companies.
      </p>

      <div style={s.highlight}>
        <p style={{...s.p,marginBottom:'0.3rem',color:C.white}}><strong style={s.strong}>Never miss a CT deadline again.</strong></p>
        <p style={{...s.p,marginBottom:0}}>
          Cledger prepares and files CT600 returns, calculates your Corporation Tax liability, and ensures you claim every allowable deduction. ACCA-trained, from £65/month.
        </p>
      </div>
    </BlogLayout>
  )
}
