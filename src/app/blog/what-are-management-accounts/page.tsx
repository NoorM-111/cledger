import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Are Management Accounts, and Does Your Business Need Them? | Cledger',
  description: 'Management accounts give you monthly P&L, balance sheet and cash flow, before your year-end. Here is what they include, who needs them, and what they cost.',
  keywords: 'what are management accounts UK, management accounts small business, monthly management accounts, management accounts vs annual accounts',
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
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="text-sm text-gray-500">Business finance</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
        What are management accounts, and does your business need them?
      </h1>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
        <span>June 1, 2026</span>
        <span>·</span>
        <span>6 min read</span>
        <span>·</span>
        <span>By Cledger</span>
      </div>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Most small business owners only see their financial position once a year, when the accountant files the annual accounts. By then, problems that could have been spotted in March are discovered in December. Management accounts solve this by giving you <strong>a live financial picture every month</strong>. This guide explains exactly what they are, what they include, and whether your business needs them.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What are management accounts?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Management accounts are <strong>internal financial reports</strong> produced monthly or quarterly to help business owners and directors make informed decisions. Unlike statutory annual accounts (which are prepared for Companies House and HMRC), management accounts are not required by law, but they are essential for running a business with clarity.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        A standard set of management accounts typically includes a Profit and Loss statement (P&L), a Balance Sheet, and a Cash Flow statement, all brought up to the current date rather than waiting for year-end.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is included in a management accounts pack?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        The content varies depending on the size of the business, but a good management accounts pack for a UK SME typically contains:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li><strong>Profit and Loss (P&L):</strong> Revenue, cost of sales, gross profit, overhead expenses, and net profit, for the month and year to date, compared against the same period last year or against budget.</li>
        <li><strong>Balance Sheet:</strong> A snapshot of your assets (what you own), liabilities (what you owe), and equity (what is left for shareholders) at the report date.</li>
        <li><strong>Cash Flow Statement or Forecast:</strong> Where cash came from and where it went, helping you distinguish between being profitable on paper and actually having money in the bank.</li>
        <li><strong>Key Performance Indicators (KPIs):</strong> Metrics specific to your business, revenue per client, gross margin %, debtor days, stock turnover, whatever is most relevant to how you manage the business.</li>
        <li><strong>Commentary:</strong> A written narrative explaining variances, why revenue was up or down, what drove a cost increase, what to watch next month.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Management accounts vs annual accounts, what is the difference?</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Factor</th>
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Management accounts</th>
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Annual accounts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-3">Frequency</td>
              <td className="border border-gray-200 px-4 py-3">Monthly or quarterly</td>
              <td className="border border-gray-200 px-4 py-3">Once a year</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-3">Required by law?</td>
              <td className="border border-gray-200 px-4 py-3">No</td>
              <td className="border border-gray-200 px-4 py-3">Yes (Ltd companies)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-3">Filed with HMRC/CH?</td>
              <td className="border border-gray-200 px-4 py-3">No, internal only</td>
              <td className="border border-gray-200 px-4 py-3">Yes</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-3">Prepared to</td>
              <td className="border border-gray-200 px-4 py-3">Current month</td>
              <td className="border border-gray-200 px-4 py-3">Year-end</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-3">Purpose</td>
              <td className="border border-gray-200 px-4 py-3">Decision-making</td>
              <td className="border border-gray-200 px-4 py-3">Compliance and tax</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-3">Format</td>
              <td className="border border-gray-200 px-4 py-3">Flexible, business-specific</td>
              <td className="border border-gray-200 px-4 py-3">Statutory (FRS 102/105)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who needs management accounts?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>You need management accounts if any of these apply:</strong>
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>You are applying for a bank loan or business overdraft, lenders almost always request 12 months of management accounts</li>
        <li>You have investors or are planning to raise investment</li>
        <li>Your turnover is above £200k and growing, at this level, annual accounts leave you flying blind for too long</li>
        <li>You have staff costs, cost of goods sold, or multiple revenue streams where margin matters</li>
        <li>You want to pay an accurate Corporation Tax provision each month rather than being hit with an unexpected bill at year-end</li>
        <li>You are planning to sell the business in the next 2–3 years, buyers require management account history</li>
      </ul>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>You probably do not need monthly management accounts if:</strong> you are a sole trader under £50k turnover with simple finances, no employees, and a single revenue stream. Quarterly accounts may be sufficient at that level.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How much do management accounts cost?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        At traditional UK accountancy firms, monthly management accounts typically cost <strong>£300–£800/month</strong> depending on business size and complexity. This is on top of, not instead of, your bookkeeping and year-end accounts fees.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        At Cledger, management accounts are included within the Full Finance Outsourcing package from <strong>£449/month</strong>, which covers bookkeeping, VAT, payroll, and management accounts as a single integrated service. You get one team handling everything, with a consistent monthly pack delivered within five working days of each month-end.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-10">
        <p className="text-gray-800 font-medium mb-2">Stop running your business in the dark.</p>
        <p className="text-gray-700 mb-4">
          Cledger delivers monthly management accounts within 5 working days of month-end, P&L, balance sheet, cash flow, and commentary. ACCA-trained. MTD compliant. From £449/month.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          Get monthly management accounts →
        </Link>
      </div>
    </article>
  )
}
