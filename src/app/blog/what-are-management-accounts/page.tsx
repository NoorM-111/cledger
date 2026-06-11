import type { Metadata } from 'next'
import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata: Metadata = {
  title: 'What Are Management Accounts, and Does Your Business Need Them? | Cledger',
  description: 'Management accounts give you monthly P&L, balance sheet and cash flow, before your year-end. Here is what they include, who needs them, and what they cost.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/what-are-management-accounts',
  },
  openGraph: {
    title: 'What Are Management Accounts, and Does Your Business Need Them?',
    description: 'Management accounts give you monthly P&L, balance sheet and cash flow before your year-end. What they include and who needs them.',
    url: 'https://www.cledger.co.uk/blog/what-are-management-accounts',
    siteName: 'Cledger',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Are Management Accounts, and Does Your Business Need Them? | Cledger',
    description: 'Management accounts give you monthly P&L, balance sheet and cash flow before your year-end. What they include and who needs them.',
  },
}

export default function WhatAreManagementAccounts() {
  return (
    <BlogLayout
      eyebrow="Business finance"
      title="What are management accounts, and does your business need them?"
      date="June 1, 2026"
      readTime="6 min read"
      intro={<>Most small business owners only see their financial position once a year, when the accountant files the annual accounts. By then, problems that could have been spotted in March are discovered in December. Management accounts solve this by giving you <strong style={s.strong}>a live financial picture every month</strong>. This guide explains exactly what they are, what they include, and whether your business needs them.</>}
      ctaText="Get monthly management accounts →"
      ctaHref="/pricing"
    >
      <h2 style={s.h2}>What are management accounts?</h2>
      <p style={s.p}>
        Management accounts are <strong style={s.strong}>internal financial reports</strong> produced monthly or quarterly to help business owners and directors make informed decisions. Unlike statutory annual accounts (which are prepared for Companies House and HMRC), management accounts are not required by law, but they are essential for running a business with clarity.
      </p>
      <p style={s.p}>
        A standard set of management accounts typically includes a Profit and Loss statement (P&L), a Balance Sheet, and a Cash Flow statement, all brought up to the current date rather than waiting for year-end.
      </p>

      <h2 style={s.h2}>What is included in a management accounts pack?</h2>
      <p style={s.p}>The content varies depending on the size of the business, but a good management accounts pack for a UK SME typically contains:</p>
      <ul style={s.ul}>
        <li style={s.li}><strong style={s.strong}>Profit and Loss (P&L):</strong> Revenue, cost of sales, gross profit, overhead expenses, and net profit, for the month and year to date, compared against the same period last year or against budget.</li>
        <li style={s.li}><strong style={s.strong}>Balance Sheet:</strong> A snapshot of your assets (what you own), liabilities (what you owe), and equity (what is left for shareholders) at the report date.</li>
        <li style={s.li}><strong style={s.strong}>Cash Flow Statement or Forecast:</strong> Where cash came from and where it went, helping you distinguish between being profitable on paper and actually having money in the bank.</li>
        <li style={s.li}><strong style={s.strong}>Key Performance Indicators (KPIs):</strong> Metrics specific to your business, revenue per client, gross margin %, debtor days, stock turnover, whatever is most relevant to how you manage the business.</li>
        <li style={s.li}><strong style={s.strong}>Commentary:</strong> A written narrative explaining variances, why revenue was up or down, what drove a cost increase, what to watch next month.</li>
      </ul>

      <h2 style={s.h2}>Management accounts vs annual accounts, what is the difference?</h2>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Factor</th>
            <th style={s.th}>Management accounts</th>
            <th style={s.th}>Annual accounts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={s.td}>Frequency</td>
            <td style={s.td}>Monthly or quarterly</td>
            <td style={s.td}>Once a year</td>
          </tr>
          <tr>
            <td style={s.td}>Required by law?</td>
            <td style={s.td}>No</td>
            <td style={s.td}>Yes (Ltd companies)</td>
          </tr>
          <tr>
            <td style={s.td}>Filed with HMRC/CH?</td>
            <td style={s.td}>No, internal only</td>
            <td style={s.td}>Yes</td>
          </tr>
          <tr>
            <td style={s.td}>Prepared to</td>
            <td style={s.td}>Current month</td>
            <td style={s.td}>Year-end</td>
          </tr>
          <tr>
            <td style={s.td}>Purpose</td>
            <td style={s.td}>Decision-making</td>
            <td style={s.td}>Compliance and tax</td>
          </tr>
          <tr>
            <td style={s.td}>Format</td>
            <td style={s.td}>Flexible, business-specific</td>
            <td style={s.td}>Statutory (FRS 102/105)</td>
          </tr>
        </tbody>
      </table>

      <h2 style={s.h2}>Who needs management accounts?</h2>
      <p style={s.p}><strong style={s.strong}>You need management accounts if any of these apply:</strong></p>
      <ul style={s.ul}>
        <li style={s.li}>You are applying for a bank loan or business overdraft, lenders almost always request 12 months of management accounts</li>
        <li style={s.li}>You have investors or are planning to raise investment</li>
        <li style={s.li}>Your turnover is above £200k and growing, at this level, annual accounts leave you flying blind for too long</li>
        <li style={s.li}>You have staff costs, cost of goods sold, or multiple revenue streams where margin matters</li>
        <li style={s.li}>You want to pay an accurate Corporation Tax provision each month rather than being hit with an unexpected bill at year-end</li>
        <li style={s.li}>You are planning to sell the business in the next 2–3 years, buyers require management account history</li>
      </ul>
      <p style={s.p}>
        <strong style={s.strong}>You probably do not need monthly management accounts if:</strong> you are a sole trader under £50k turnover with simple finances, no employees, and a single revenue stream. Quarterly accounts may be sufficient at that level.
      </p>

      <h2 style={s.h2}>How much do management accounts cost?</h2>
      <p style={s.p}>
        At traditional UK accountancy firms, monthly management accounts typically cost <strong style={s.strong}>£300–£800/month</strong> depending on business size and complexity. This is on top of, not instead of, your bookkeeping and year-end accounts fees.
      </p>
      <p style={s.p}>
        At Cledger, management accounts are included within the Full Finance Outsourcing package from <strong style={s.strong}>£449/month</strong>, which covers bookkeeping, VAT, payroll, and management accounts as a single integrated service. You get one team handling everything, with a consistent monthly pack delivered within five working days of each month-end.
      </p>

      <div style={s.highlight}>
        <p style={{...s.p,marginBottom:'0.3rem',color:C.white}}><strong style={s.strong}>Stop running your business in the dark.</strong></p>
        <p style={{...s.p,marginBottom:0}}>
          Cledger delivers monthly management accounts within 5 working days of month-end, P&L, balance sheet, cash flow, and commentary. Qualified accountants. MTD compliant. From £449/month.
        </p>
      </div>
    </BlogLayout>
  )
}
