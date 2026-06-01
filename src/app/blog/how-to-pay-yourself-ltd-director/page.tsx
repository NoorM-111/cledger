import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Pay Yourself as a Limited Company Director UK (2026) | Cledger',
  description: 'Most Ltd directors overpay tax by taking the wrong salary/dividend split. Here is the optimal 2026/27 structure to maximise take-home pay legally.',
  keywords: 'pay yourself limited company director UK, salary dividend split UK, director salary 2026, limited company take home pay, optimal director salary UK',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/how-to-pay-yourself-ltd-director',
  },
  openGraph: {
    title: 'How to Pay Yourself as a Limited Company Director UK (2026)',
    description: 'Most Ltd directors overpay tax by taking the wrong salary/dividend split. The optimal 2026/27 structure explained.',
    url: 'https://www.cledger.co.uk/blog/how-to-pay-yourself-ltd-director',
    siteName: 'Cledger',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Pay Yourself as a Limited Company Director UK (2026) | Cledger',
    description: 'Most Ltd directors overpay tax by taking the wrong salary/dividend split. The optimal 2026/27 structure explained.',
  },
}

export default function HowToPayYourselfLtdDirector() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="text-sm text-gray-500">Tax guide</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
        How to pay yourself as a limited company director UK (2026)
      </h1>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
        <span>June 1, 2026</span>
        <span>·</span>
        <span>7 min read</span>
        <span>·</span>
        <span>By Cledger</span>
      </div>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Most limited company directors pay more tax than they need to, simply because nobody has told them the optimal salary and dividend split. This guide explains the most tax-efficient way to pay yourself in 2026/27, what the numbers look like, and the compliance requirements to do it correctly.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Salary vs dividends, why the split matters</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        As a limited company director, your company is a separate legal entity. It pays Corporation Tax on its profits. You then extract money from the company either as a <strong>salary</strong> (processed through payroll, subject to Income Tax and National Insurance) or as <strong>dividends</strong> (distributions of post-tax profit, taxed at lower dividend rates).
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        The key insight: <strong>National Insurance does not apply to dividends</strong>. A sole trader earning £50,000 pays Class 4 NIC on most of that. A director taking the same £50,000 via an optimal salary/dividend split pays significantly less, because the dividend portion avoids NIC entirely.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The optimal director salary for 2026/27</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        For 2026/27, most accountants recommend setting your director salary at <strong>£12,570</strong>, exactly equal to the Personal Allowance. Here is why:
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        A salary of £12,570 is below the National Insurance Secondary threshold of £5,000 (employer NIC) but above the Primary threshold of £12,570 (employee NIC), meaning <strong>no Income Tax and no employee National Insurance</strong> on the salary itself. At this level, the salary is also a deductible expense for your company, reducing its Corporation Tax liability.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        If you are the only director-employee, the salary does need to go through payroll, you must operate a PAYE scheme, even if there is nothing to pay. HMRC requires this.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How much can you take in dividends?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        After paying yourself a £12,570 salary, you have used your Personal Allowance. Any additional income, in this case dividends, is taxable. The <strong>dividend allowance for 2026/27 is £500</strong> (reduced from £2,000 in 2022/23 following successive cuts).
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Above the £500 dividend allowance, dividend tax rates apply:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Tax band</th>
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Total income</th>
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Dividend tax rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-3">Basic rate</td>
              <td className="border border-gray-200 px-4 py-3">£12,571 – £50,270</td>
              <td className="border border-gray-200 px-4 py-3">8.75%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-3">Higher rate</td>
              <td className="border border-gray-200 px-4 py-3">£50,271 – £125,140</td>
              <td className="border border-gray-200 px-4 py-3">33.75%</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-3">Additional rate</td>
              <td className="border border-gray-200 px-4 py-3">Over £125,140</td>
              <td className="border border-gray-200 px-4 py-3">39.35%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Compare these to Income Tax rates (20%, 40%, 45%) and the saving is clear, especially in the basic rate band where 8.75% dividend tax vs 20% Income Tax is a meaningful difference once NIC is factored in.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A worked example: extracting £50,000 in 2026/27</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Suppose your company has made sufficient profit to pay you £50,000 total this year.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Structure: <strong>£12,570 salary + £37,430 dividends</strong>.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Salary: no Income Tax (within Personal Allowance), no employee NIC (at threshold), no employer NIC (below secondary threshold). Corporation Tax saving on the salary expense: approximately £2,388 at 19% CT rate.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Dividends: first £500 tax-free (dividend allowance). Remaining £36,930 taxed at 8.75% basic rate = approximately <strong>£3,231 dividend tax</strong>.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>Total personal tax: approximately £3,231</strong>. A sole trader earning the same £50,000 would typically pay around £11,000–£13,000 in Income Tax and NIC combined. The Ltd company structure saves roughly £7,000–£10,000 per year at this income level.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The compliance requirements you cannot skip</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>Payroll:</strong> You must register as an employer with HMRC and run a PAYE scheme for the director salary. This means filing Real Time Information (RTI) submissions to HMRC every time you pay yourself, even if the payment is below the tax and NIC thresholds.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>Dividend vouchers:</strong> Every dividend payment must be supported by a formal dividend voucher and a board minute declaring the dividend. These are legal documents, not optional. Without them, HMRC can reclassify dividends as salary and apply PAYE retrospectively.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>Sufficient distributable reserves:</strong> You can only pay dividends out of post-tax profits. Paying a dividend when there are insufficient retained profits is an illegal distribution under the Companies Act 2006.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>Self Assessment:</strong> As a director receiving dividends, you must file a Self Assessment tax return each year, even if you owe little or no additional tax. The deadline is 31 January following the end of the tax year.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What about pension contributions?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Employer pension contributions made by your company are a <strong>fully deductible Corporation Tax expense</strong> and do not count as a benefit in kind. They are one of the most tax-efficient ways to extract additional value from your company beyond the salary/dividend split, particularly if you are approaching the higher rate threshold.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-10">
        <p className="text-gray-800 font-medium mb-2">Getting the salary/dividend split right is worth thousands per year.</p>
        <p className="text-gray-700 mb-4">
          Cledger sets up director payroll, processes dividend vouchers, and files your Self Assessment, all included in the full finance outsourcing package. ACCA-trained accountants, from £449/month.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          See full pricing →
        </Link>
      </div>
    </article>
  )
}
