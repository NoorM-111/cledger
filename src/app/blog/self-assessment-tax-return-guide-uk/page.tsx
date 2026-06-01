import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Self Assessment Tax Return: Complete UK Guide 2026 | Cledger',
  description: 'Who needs to file a Self Assessment, what to include, key deadlines, and the most common mistakes. Everything you need to know for 2025/26 tax year.',
  keywords: 'self assessment tax return UK, self assessment guide 2026, who needs self assessment UK, self assessment deadline January 2027, SA100 UK',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/self-assessment-tax-return-guide-uk',
  },
  openGraph: {
    title: 'Self Assessment Tax Return: Complete UK Guide 2026',
    description: 'Who needs to file, what to include, key deadlines, and the most common mistakes — 2025/26 tax year.',
    url: 'https://www.cledger.co.uk/blog/self-assessment-tax-return-guide-uk',
    siteName: 'Cledger',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self Assessment Tax Return: Complete UK Guide 2026 | Cledger',
    description: 'Who needs to file, what to include, key deadlines, and the most common mistakes — 2025/26 tax year.',
  },
}

export default function SelfAssessmentGuideUK() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="text-sm text-gray-500">Tax guide</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Self Assessment tax return: complete UK guide 2026
      </h1>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
        <span>June 1, 2026</span>
        <span>·</span>
        <span>7 min read</span>
        <span>·</span>
        <span>By Cledger</span>
      </div>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Over 12 million people in the UK file a Self Assessment tax return each year — and HMRC issues over £300 million in late filing penalties annually. This guide covers who needs to file, what to include, the 2026 deadlines, and the mistakes that cost people the most money.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who needs to file a Self Assessment?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        You must file a Self Assessment tax return if, in the 2025/26 tax year, any of the following apply:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>You were self-employed as a sole trader and earned more than £1,000 (before expenses)</li>
        <li>You are a partner in a business partnership</li>
        <li>You received rental income from property</li>
        <li>You received income from savings, investments, or dividends above the tax-free allowances</li>
        <li>You are a company director (even if you took no salary)</li>
        <li>Your income exceeded £100,000 (HMRC removes the Personal Allowance above this level)</li>
        <li>You claimed Child Benefit and you or your partner earned over £60,000 (High Income Child Benefit charge)</li>
        <li>You received income from abroad</li>
        <li>You need to claim tax reliefs not available through PAYE (e.g. Gift Aid, pension contributions above the basic rate)</li>
      </ul>
      <p className="text-gray-700 mb-4 leading-relaxed">
        If you are unsure, HMRC has a <a href="https://www.gov.uk/check-if-you-need-tax-return" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">check tool on gov.uk</a> that confirms whether you need to register.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Key Self Assessment deadlines for 2025/26</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Deadline</th>
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Date</th>
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">What it is</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-3">Register for Self Assessment</td>
              <td className="border border-gray-200 px-4 py-3 font-medium">5 October 2026</td>
              <td className="border border-gray-200 px-4 py-3">If it is your first time filing</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-3">Paper return deadline</td>
              <td className="border border-gray-200 px-4 py-3 font-medium">31 October 2026</td>
              <td className="border border-gray-200 px-4 py-3">If filing a paper SA100</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-3">Online return + tax payment</td>
              <td className="border border-gray-200 px-4 py-3 font-medium">31 January 2027</td>
              <td className="border border-gray-200 px-4 py-3">The main deadline for most people</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-3">Second payment on account</td>
              <td className="border border-gray-200 px-4 py-3 font-medium">31 July 2027</td>
              <td className="border border-gray-200 px-4 py-3">For those making payments on account</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Penalties for late filing and payment</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Missing the 31 January deadline triggers an <strong>automatic £100 penalty</strong> — even if you owe no tax. The penalties escalate:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
        <li>1 day late: £100 fixed penalty</li>
        <li>3 months late: additional £10 per day (up to 90 days = £900)</li>
        <li>6 months late: further £300 or 5% of tax due (whichever is higher)</li>
        <li>12 months late: another £300 or 5% of tax due (plus potential criminal investigation for deliberate non-filing)</li>
      </ul>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Late payment of tax also attracts interest (Bank of England base rate + 2.5%) from the day after the deadline, plus a 5% surcharge if the tax is still unpaid after 30 days.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What information do you need to complete your return?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Gather the following before you start:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li><strong>UTR number</strong> — your Unique Taxpayer Reference (10 digits, on all HMRC correspondence)</li>
        <li><strong>P60 or P45</strong> — if you were employed at any point during the tax year</li>
        <li><strong>Self-employment income and expenses</strong> — total turnover and categorised expenses</li>
        <li><strong>Bank interest statements</strong></li>
        <li><strong>Dividend vouchers</strong> — if you received dividends from a Ltd company</li>
        <li><strong>Rental income and expenses</strong> — if you have property</li>
        <li><strong>Pension contribution receipts</strong> — for higher/additional rate relief claims</li>
        <li><strong>Gift Aid donations</strong></li>
        <li><strong>Capital gains details</strong> — if you sold shares, property, or other assets</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What expenses can self-employed people claim?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Allowable expenses reduce your taxable profit and therefore your tax bill. For self-employed sole traders, HMRC allows deductions for expenses that are <strong>wholly and exclusively</strong> for the purposes of the business. Common allowable expenses include:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
        <li>Office costs (stationery, software, equipment under £1,000)</li>
        <li>Travel costs — fuel, public transport, parking for business journeys (not commuting)</li>
        <li>Clothing — only uniforms or protective clothing, not regular clothing</li>
        <li>Staff costs — wages, subcontractor payments, employer NIC</li>
        <li>Professional fees — accountant, solicitor, bookkeeper</li>
        <li>Marketing — website hosting, advertising, business cards</li>
        <li>Business premises — rent, utilities (proportional if working from home)</li>
        <li>Training — courses directly related to your current trade</li>
      </ul>
      <p className="text-gray-700 mb-4 leading-relaxed">
        You can use the <strong>simplified expenses</strong> method for vehicles (flat rate per mile) and working from home (flat rate per hour). These are easier to calculate but may give a lower deduction than actual costs for some businesses.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Payments on account — the biggest shock for new filers</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        If your Self Assessment tax bill exceeds £1,000 and less than 80% of your tax was collected at source (via PAYE), HMRC requires you to make <strong>payments on account</strong> — advance payments towards next year&apos;s tax bill.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Each payment on account is 50% of your previous year&apos;s tax bill, due on 31 January and 31 July. This means in your first year of self-employment, your January bill can be 150% of what you expected — your actual tax for the year plus the first payment on account for the following year.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        You can apply to reduce payments on account if you expect your income to be lower next year — but if you reduce them and your income turns out to be higher, HMRC will charge interest on the shortfall.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The most common Self Assessment mistakes</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li><strong>Missing the registration deadline</strong> — you must register by 5 October in the year after the tax year ends, or face a late registration penalty</li>
        <li><strong>Forgetting bank interest and dividends</strong> — HMRC cross-references with financial institutions and will issue a correction notice</li>
        <li><strong>Claiming personal expenses as business expenses</strong> — the most common trigger for an HMRC compliance check</li>
        <li><strong>Not keeping records</strong> — HMRC can request supporting evidence for any return up to 4 years after the filing deadline (7 years for serious errors)</li>
        <li><strong>Missing the payments on account</strong> — many people pay the January bill and forget the July payment on account, then face a surprise penalty</li>
        <li><strong>Using the wrong accounting basis</strong> — most sole traders should use <strong>cash basis</strong> (record income when received, expenses when paid) unless they have good reason to use accruals basis</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-10">
        <p className="text-gray-800 font-medium mb-2">Leave your Self Assessment to us.</p>
        <p className="text-gray-700 mb-4">
          Cledger prepares and files Self Assessment returns for sole traders, landlords, and company directors. ACCA-trained, MTD compliant, from £65/month. No January panic.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          Get your Self Assessment sorted →
        </Link>
      </div>
    </article>
  )
}
