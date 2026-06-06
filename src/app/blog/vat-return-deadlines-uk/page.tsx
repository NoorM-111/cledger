import type { Metadata } from 'next'
import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata: Metadata = {
  title: 'VAT Return Deadlines UK: The Complete 2026 Guide | Cledger',
  description: 'Miss a VAT deadline and HMRC charges a £200 surcharge minimum. Full UK VAT return deadlines, penalties, and how to stay compliant in 2026.',
  keywords: 'VAT return deadlines UK, VAT filing deadline, HMRC VAT deadline, quarterly VAT return, VAT penalty UK',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/vat-return-deadlines-uk',
  },
  openGraph: {
    title: 'VAT Return Deadlines UK: The Complete 2026 Guide',
    description: 'Miss a VAT deadline and HMRC charges a £200 surcharge minimum. Full UK VAT return deadlines and penalties.',
    url: 'https://www.cledger.co.uk/blog/vat-return-deadlines-uk',
    siteName: 'Cledger',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAT Return Deadlines UK: The Complete 2026 Guide | Cledger',
    description: 'Miss a VAT deadline and HMRC charges a £200 surcharge minimum. Full UK VAT return deadlines and penalties.',
  },
}

export default function VatReturnDeadlinesUK() {
  return (
    <BlogLayout
      eyebrow="Pricing guide"
      title="VAT return deadlines UK: the complete 2026 guide"
      date="June 1, 2026"
      readTime="6 min read"
      intro={<>Miss a VAT deadline and HMRC will issue a <strong style={s.strong}>£200 surcharge on the first default alone</strong>, rising with each subsequent late filing. This guide covers every VAT return deadline you need to know in 2026, how the penalty system works, and what to do if you have already missed one.</>}
      ctaText="See VAT return pricing →"
      ctaHref="/pricing"
    >
      <h2 style={s.h2}>When is my VAT return due?</h2>
      <p style={s.p}>
        Your VAT return deadline depends on which VAT period HMRC has assigned you. Most businesses are on <strong style={s.strong}>quarterly returns</strong>, meaning you file four times a year. The deadline is always <strong style={s.strong}>one calendar month and seven days</strong> after the end of your VAT period.
      </p>
      <p style={s.p}>
        So if your quarter ends 31 March, your VAT return and payment are both due by <strong style={s.strong}>7 May</strong>. If your quarter ends 30 June, the deadline is <strong style={s.strong}>7 August</strong>. This applies to both the online return submission and the VAT payment itself, HMRC treats them as a single combined deadline.
      </p>

      <h2 style={s.h2}>The three VAT stagger groups</h2>
      <p style={s.p}>HMRC divides VAT-registered businesses into three stagger groups (1, 2, and 3) to spread the volume of returns across the year. Your stagger group determines which months your quarters end.</p>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Stagger group</th>
            <th style={s.th}>Quarter end months</th>
            <th style={s.th}>Return + payment due</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={s.td}>Group 1</td>
            <td style={s.td}>31 Mar · 30 Jun · 30 Sep · 31 Dec</td>
            <td style={s.td}>7 May · 7 Aug · 7 Nov · 7 Feb</td>
          </tr>
          <tr>
            <td style={s.td}>Group 2</td>
            <td style={s.td}>30 Apr · 31 Jul · 31 Oct · 31 Jan</td>
            <td style={s.td}>7 Jun · 7 Sep · 7 Dec · 7 Mar</td>
          </tr>
          <tr>
            <td style={s.td}>Group 3</td>
            <td style={s.td}>31 May · 31 Aug · 30 Nov · 28 Feb</td>
            <td style={s.td}>7 Jul · 7 Oct · 7 Jan · 7 Apr</td>
          </tr>
        </tbody>
      </table>
      <p style={s.p}>
        You can check which stagger group you are in by logging into your <strong style={s.strong}>HMRC Business Tax Account</strong> or checking your original VAT registration certificate (VAT 4).
      </p>

      <h2 style={s.h2}>What is Making Tax Digital for VAT?</h2>
      <p style={s.p}>
        Since April 2022, <strong style={s.strong}>all VAT-registered businesses</strong>, regardless of turnover, must file VAT returns through MTD-compatible software. You cannot file manually through your HMRC online account any more.
      </p>
      <p style={s.p}>
        MTD-compatible software includes Xero, QuickBooks, Sage, and FreeAgent. If you are still filing VAT returns manually or through a spreadsheet without bridging software, you are non-compliant and at risk of penalties, even if you file on time.
      </p>

      <h2 style={s.h2}>The new VAT penalty system (from January 2023)</h2>
      <p style={s.p}>HMRC replaced the default surcharge regime with a points-based penalty system for VAT periods starting on or after 1 January 2023. Here is how it works.</p>
      <p style={s.p}>
        <strong style={s.strong}>Late submission penalties:</strong> Each late filing earns one penalty point. Reach the threshold (4 points for quarterly filers, 2 for annual) and HMRC issues a <strong style={s.strong}>£200 fixed penalty</strong>. Every further late return after the threshold earns another £200.
      </p>
      <p style={s.p}>
        <strong style={s.strong}>Late payment penalties:</strong> Separate from submission penalties. If your VAT payment is 1–15 days late, no penalty applies provided you contact HMRC. After 16 days, a <strong style={s.strong}>2% penalty</strong> applies on the amount outstanding. After 31 days, this rises to <strong style={s.strong}>4%</strong>. From day 31 onwards, an additional <strong style={s.strong}>4% per annum daily rate</strong> accrues on top.
      </p>
      <p style={s.p}>
        <strong style={s.strong}>Interest:</strong> HMRC also charges late payment interest at the Bank of England base rate plus 2.5% on any unpaid VAT from the first day it is overdue.
      </p>

      <h2 style={s.h2}>Annual Accounting Scheme, different deadlines</h2>
      <p style={s.p}>
        If you are on the Annual Accounting Scheme, you file just <strong style={s.strong}>one VAT return per year</strong> rather than four. Your return is due <strong style={s.strong}>two months after your annual accounting period ends</strong>. During the year, you make nine interim payments (monthly) or three interim payments (quarterly) based on an estimated annual VAT liability.
      </p>
      <p style={s.p}>
        The Annual Accounting Scheme suits businesses with relatively stable VAT liabilities and turnover below £1.35m. It reduces admin but removes the ability to reclaim VAT quickly in months where you have a repayment due.
      </p>

      <h2 style={s.h2}>What to do if you have missed a VAT deadline</h2>
      <p style={s.p}>
        Do not ignore it. File the return as soon as possible, every day of additional delay adds to your exposure under the late payment interest rules.
      </p>
      <p style={s.p}>
        If you have a reasonable excuse (serious illness, death in immediate family, HMRC system failure), you can appeal a penalty. HMRC accepts reasonable excuse appeals online through your Business Tax Account. Financial difficulty alone is not considered a reasonable excuse, but if you cannot pay, contacting HMRC to agree a <strong style={s.strong}>Time to Pay arrangement</strong> before the deadline will stop further late payment penalties accruing.
      </p>

      <h2 style={s.h2}>How to never miss a VAT deadline</h2>
      <p style={s.p}>
        The simplest system: use MTD-compatible software (Xero or QuickBooks) with bank feeds connected. Your transactions post in real time, your VAT return populates automatically, and you simply review and submit. Set a calendar reminder for the 1st of the deadline month, that gives you seven days to review, approve, and pay before the 7th.
      </p>
      <p style={s.p}>
        If you outsource your bookkeeping, your bookkeeper should be flagging the upcoming VAT deadline at least two weeks in advance and presenting the return for your approval before filing.
      </p>

      <div style={s.highlight}>
        <p style={{...s.p,marginBottom:'0.3rem',color:C.white}}><strong style={s.strong}>Rather hand VAT over entirely?</strong></p>
        <p style={{...s.p,marginBottom:0}}>
          Cledger handles VAT returns for UK businesses from £99/month, MTD-compliant, filed on time, every quarter. ACCA-trained accountants, transparent pricing, no surprises.
        </p>
      </div>
    </BlogLayout>
  )
}
