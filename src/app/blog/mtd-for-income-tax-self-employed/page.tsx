import type { Metadata } from 'next'
import Link from 'next/link'

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
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="text-sm text-gray-500">HMRC compliance</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Making Tax Digital for income tax: what self-employed need to know (2026)
      </h1>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
        <span>June 1, 2026</span>
        <span>·</span>
        <span>6 min read</span>
        <span>·</span>
        <span>By Cledger</span>
      </div>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Making Tax Digital for Income Tax Self Assessment (MTD for ITSA) is now live for the first wave of self-employed individuals and landlords. If your qualifying income exceeds £50,000, <strong>you are already required to comply from April 2026</strong>. This guide explains exactly what has changed, what you must do, and what happens if you do not.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is MTD for Income Tax?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        MTD for Income Tax replaces the annual Self Assessment tax return for qualifying individuals with a system of <strong>quarterly digital updates</strong> submitted directly to HMRC through compatible software. Instead of filing one return by 31 January each year, you will submit four quarterly updates during the tax year, plus a final declaration at the end.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        The underlying principle is the same as MTD for VAT: HMRC wants your accounting records kept digitally, with submissions made directly from software, not typed manually into a government portal.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who must comply and when</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Start date</th>
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Who is affected</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-3 font-medium">April 2026</td>
              <td className="border border-gray-200 px-4 py-3">Self-employed and landlords with qualifying income over £50,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-3 font-medium">April 2027</td>
              <td className="border border-gray-200 px-4 py-3">Self-employed and landlords with qualifying income over £30,000</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-3 font-medium">April 2028</td>
              <td className="border border-gray-200 px-4 py-3">Self-employed and landlords with qualifying income over £20,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>Qualifying income</strong> means gross income from self-employment and/or UK property, before expenses. If you have multiple sources, they are added together. A sole trader turning over £35,000 who also receives £18,000 in rental income has qualifying income of £53,000 and must comply from April 2026.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Partnerships, limited companies, and trusts are <strong>not in scope</strong> for MTD for ITSA, this applies to individuals only.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What the quarterly reporting involves</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Each quarter you must submit a summary of your income and expenses to HMRC through MTD-compatible software. The quarterly update periods follow the tax year:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
        <li>Quarter 1: 6 April – 5 July (deadline: 7 August)</li>
        <li>Quarter 2: 6 July – 5 October (deadline: 7 November)</li>
        <li>Quarter 3: 6 October – 5 January (deadline: 7 February)</li>
        <li>Quarter 4: 6 January – 5 April (deadline: 7 May)</li>
      </ul>
      <p className="text-gray-700 mb-4 leading-relaxed">
        After the fourth quarter, you submit a <strong>final declaration</strong> (replacing the traditional Self Assessment return) by 31 January the following year. This is where you add any other income sources, claim reliefs, and confirm your tax position.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What software do you need?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        You must use HMRC-recognised MTD for ITSA compatible software. The main options currently available include:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
        <li><strong>Xero</strong>, full MTD for ITSA compliance built in</li>
        <li><strong>QuickBooks Self-Employed / QuickBooks Online</strong></li>
        <li><strong>FreeAgent</strong>, popular with freelancers</li>
        <li><strong>Sage Accounting</strong></li>
        <li>Several smaller specialist apps (check HMRC&apos;s approved software list)</li>
      </ul>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Spreadsheets alone do not qualify, you need either dedicated software or bridging software that connects your spreadsheet to HMRC&apos;s MTD system.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Penalties for non-compliance</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        HMRC is applying a points-based penalty system to MTD for ITSA late submissions, similar to the VAT penalty regime. Each late quarterly update earns a penalty point. Once you reach the threshold (4 points for quarterly filers), a <strong>£200 fixed penalty</strong> is charged, with further £200 penalties for each subsequent late submission.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Penalty points expire after 24 months of full compliance, meaning if you are late once, the point sits on your record for two years.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What actually changes day-to-day?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        For most self-employed people, the practical change is this: instead of gathering 12 months of receipts and invoices once a year in January, you keep your records up to date every quarter. The software does the heavy lifting, you review a summary and click submit.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        The quarterly updates do <strong>not</strong> require you to pay tax quarterly. Your tax liability is still calculated at the end of the year and paid by 31 January. The quarterly submissions are information-gathering exercises, not payment demands.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exemptions, who does not need to comply?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        HMRC has confirmed exemptions for: individuals who are digitally excluded (cannot use a computer due to age, disability, or location), those whose qualifying income is below the threshold, and those for whom HMRC determines it would be unreasonable to comply. Applying for an exemption requires contacting HMRC directly.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-10">
        <p className="text-gray-800 font-medium mb-2">Not sure if MTD applies to you, or need help getting compliant?</p>
        <p className="text-gray-700 mb-4">
          Cledger handles MTD for ITSA setup and quarterly submissions for sole traders and landlords. We use Xero or QuickBooks, keep your records current, and submit every quarter on time.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          Get MTD compliant with Cledger →
        </Link>
      </div>
    </article>
  )
}
