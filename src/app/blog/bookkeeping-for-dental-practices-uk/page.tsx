import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata = {
  title: 'Bookkeeping for Dental Practices UK (2026): NHS, Private & VAT Explained',
  description: 'The complete 2026 guide to dental practice bookkeeping in the UK — mixed NHS and private income, associate payments, VAT exemptions and CQC compliance, from accountants who manage 100+ dental accounts.',
  openGraph: {
    title: 'Bookkeeping for Dental Practices UK (2026): NHS, Private & VAT Explained',
    description: 'Mixed NHS/private income, associate payments and CQC compliance, dental bookkeeping explained by accountants who specialise in it.',
    url: 'https://www.cledger.co.uk/blog/bookkeeping-for-dental-practices-uk',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/bookkeeping-for-dental-practices-uk',
  },
}

export default function Article3() {
  return (
    <BlogLayout
      eyebrow="Dental & healthcare"
      title="Bookkeeping for dental practices UK, what you need to know"
      date="June 15, 2026"
      readTime="7 min read"
      intro={<>Dental practices have accounting needs that most generalist bookkeepers get wrong. Mixed NHS and private income, associate dentist payments, CQC compliance, and equipment financing all require specific knowledge. This guide covers everything, written by accountants who have managed <strong style={s.strong}>100+ dental and locum client accounts.</strong></>}
      ctaText="See our dental accounting service, from £175/month →"
      ctaHref="/accountant-for-dental-practices-uk"
      slug="bookkeeping-for-dental-practices-uk"
      description="Dental practices have unique accounting needs — mixed NHS/private income, associate payments, CQC compliance. The complete guide to dental bookkeeping in the UK."
      dateModified="2026-07-10"
      faqs={[
        { q: 'Do dental practices need a specialist bookkeeper?', a: 'Yes, in most cases. Dental practices have mixed NHS and private income, VAT-exempt and VAT-standard treatments, associate payment calculations and plan income (Denplan, DPAS) — areas where generalist bookkeepers commonly make errors that cost tax or trigger HMRC enquiries.' },
        { q: 'Is dental treatment VAT-exempt in the UK?', a: 'NHS and most private dental treatment is VAT-exempt under the healthcare exemption. However, purely cosmetic treatments can be standard-rated at 20%. Practices offering both must categorise income correctly, and may need partial exemption calculations.' },
        { q: 'How much does bookkeeping cost for a dental practice?', a: 'Specialist dental bookkeeping typically costs £250–£600 per month depending on practice size and whether payroll and management accounts are included. Cledger provides dental practice bookkeeping from £175/month with dental-specific income categorisation.' },
        { q: 'How should associate dentist payments be recorded?', a: 'Associate dentists are usually self-employed, paid a percentage of the fees they generate less lab costs. Payments should be recorded as a cost of sale, not salaries, and each associate needs a clear monthly reconciliation of gross fees, lab deductions and licence fees.' },
        { q: 'Why is my NHS payment less than my contract value?', a: 'NHS contract payments arrive net of superannuation, levies and any clawback for underperformance against your UDA target. The gross contract value is your turnover; the deductions belong in their own accounts. Recording only the net bank receipt as income understates your turnover and hides your pension contributions.' },
        { q: 'Do dental nurses and hygienists go on payroll?', a: 'Employed nurses, receptionists and practice managers go through PAYE payroll with auto-enrolment pension assessment each pay period. Hygienists may be employed or self-employed depending on the actual working arrangement rather than the contract title. Associate dentists are self-employed and paid outside payroll as a cost of sale.' },
        { q: 'What expenses can a locum dentist claim?', a: 'Typically GDC registration, indemnity cover, professional subscriptions, CPD, loupes and clinical equipment, travel between workplaces, and a proportion of home office costs where admin genuinely happens there. Travel to a single regular place of work is not allowable.' },
      ]}
    >
      <h2 style={s.h2}>Why dental bookkeeping is different</h2>
      <p style={s.p}>Most bookkeepers can handle a simple Ltd company with a single income stream. Dental practices are different because income comes from multiple sources, NHS contract payments from NHS England, private patient fees, plan membership income (e.g. Denplan, DPAS), and potentially income from associates renting a chair. Each of these needs to be categorised correctly and treated differently for VAT and tax purposes.</p>
      <p style={s.p}>On top of that, dental practices typically have complex expense structures including high-value equipment purchases, clinical supplies, laboratory fees, associate payment calculations, and compliance costs. Getting any of these wrong can mean overpaying tax or triggering an HMRC investigation.</p>

      <h2 style={s.h2}>NHS vs private income, how it affects your bookkeeping</h2>
      <p style={s.p}>NHS dental treatment is VAT-exempt in the UK. Private dental treatment is also generally VAT-exempt under the healthcare exemption, but this gets complicated when your practice also provides cosmetic treatments, which may be subject to VAT at 20%. Getting this distinction wrong is one of the most common and expensive mistakes dental practices make.</p>

      <div style={s.highlight}>
        <p style={{...s.p,marginBottom:0,color:C.white}}><strong style={s.strong}>Key point:</strong> NHS contract payments are paid monthly in advance by NHS England based on your contracted UDA (Unit of Dental Activity) value. These need to be recognised correctly in your accounts, not just recorded as they hit your bank account. Clawback provisions for underperformance also need to be accounted for.</p>
      </div>

      <h2 style={s.h2}>Associate dentist payments, the bookkeeping challenge</h2>
      <p style={s.p}>If you employ associate dentists, their payment structure creates a specific bookkeeping challenge. Associates are typically self-employed and paid a percentage of the income they generate, commonly 40–50% of private fees and a set rate per NHS UDA completed.</p>
      <p style={s.p}>You need accurate records of each associate's production to calculate their earnings correctly. This means tracking income by chair, by dentist, and by treatment type, not just recording totals at the practice level. Your bookkeeper needs to understand this structure or they will categorise associate payments incorrectly, creating payroll and tax problems.</p>

      <h2 style={s.h2}>The key accounting areas for dental practices</h2>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Area</th>
            <th style={s.th}>What it involves</th>
            <th style={s.th}>Common mistakes</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['NHS contract income','Monthly NHS England payments, UDA tracking, clawback','Recording as cash received rather than earned'],
            ['Private patient income','Daily takings, card payments, plan income','Mixing with NHS income, needs separate categorisation'],
            ['VAT','Exempt for NHS & private medical, may apply to cosmetics','Incorrectly charging VAT on exempt treatments'],
            ['Associate payments','% of income calculations, self-employed payments','Treating as employment, triggers PAYE/NI issues'],
            ['Equipment & assets','Dental chairs, X-ray, CBCT, significant capex','Expensing capital items instead of depreciating'],
            ['Lab fees','Monthly lab invoices, large regular expense','Missing accruals at month end'],
            ['CQC fees','Annual registration and inspection fees','Misclassifying as deductible vs. non-deductible'],
          ].map(([area,what,mistake])=>(
            <tr key={area}>
              <td style={{...s.td,fontWeight:500}}>{area}</td>
              <td style={{...s.td,color:C.muted,fontSize:12}}>{what}</td>
              <td style={{...s.td,color:C.red,fontSize:12}}>{mistake}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={s.h2}>Software for dental practice bookkeeping</h2>
      <p style={s.p}>Most dental practices use practice management software (Dentally, Software of Excellence, Exact) for clinical records and appointment management. Your bookkeeping software needs to sit alongside this, not replace it. The most common setup is Xero for bookkeeping, with bank feeds connected from your practice bank account and separate tracking for NHS and private income streams.</p>
      <p style={s.p}>Some practices try to use their practice management software for financial reporting too, but this rarely gives you the level of detail needed for accurate accounts, VAT returns, or management information.</p>

      <h2 style={s.h2}>VAT for dental practices</h2>
      <p style={s.p}>Most dental income is VAT-exempt under the healthcare exemption in Schedule 9 of the VAT Act. However, VAT registration may still be relevant for your practice if you provide taxable supplies alongside exempt ones, for example, selling dental products, providing cosmetic treatments, or renting out surgeries to associates.</p>
      <p style={s.p}>If your taxable turnover exceeds the VAT registration threshold (currently £90,000), you must register for VAT even if most of your income is exempt. A specialist dental accountant can advise on whether partial exemption applies to your practice and how to calculate your recoverable input VAT.</p>

      <h2 style={s.h2}>How is NHS superannuation recorded in dental practice accounts?</h2>
      <p style={s.p}><strong style={s.strong}>NHS superannuation is deducted at source by the NHSBSA before your contract payment reaches the bank, so the amount you receive is never your gross income.</strong> The gross contract value must be recorded as turnover, with superannuation shown separately as a deduction. Recording only the net bank receipt understates both your income and your pension contributions, and it is the single most common error we see in dental accounts prepared by generalist bookkeepers.</p>
      <p style={s.p}>The consequences run in both directions. Understated turnover distorts every ratio in your accounts and can misstate your tax position. Hidden superannuation means the contributions you are entitled to claim never appear as an expense, and your annual pension record will not reconcile against your own figures.</p>

      <div style={s.warning}>
        <p style={{...s.p,marginBottom:0}}><strong style={s.strong}>The bank-feed trap:</strong> a monthly NHS payment landing in your account has already had superannuation, and often the levy and any contract clawback, taken off it. If your bookkeeping simply codes that deposit as sales, your turnover is wrong from the first month and stays wrong all year. Every NHS payment needs reconciling back to the schedule, not just categorising in the bank feed.</p>
      </div>

      <h3 style={s.h3}>A worked example</h3>
      <p style={s.p}>A practice with a gross monthly NHS contract value of £20,000 might see this:</p>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Line</th>
            <th style={s.th}>Amount</th>
            <th style={s.th}>How it should be recorded</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={s.td}>Gross NHS contract value</td>
            <td style={s.td}>£20,000</td>
            <td style={s.td}>Turnover — this is the figure that belongs in your P&amp;L</td>
          </tr>
          <tr>
            <td style={s.td}>Less superannuation</td>
            <td style={s.td}>(£1,900)</td>
            <td style={s.td}>Pension contribution — an expense or drawings, depending on structure</td>
          </tr>
          <tr>
            <td style={s.td}>Less levies and adjustments</td>
            <td style={s.td}>(£400)</td>
            <td style={s.td}>Coded to their own expense accounts, not netted off sales</td>
          </tr>
          <tr>
            <td style={s.td}><strong style={s.strong}>Net received in bank</strong></td>
            <td style={s.td}><strong style={s.strong}>£17,700</strong></td>
            <td style={s.td}>The only figure a bank feed can see — and the wrong one to call turnover</td>
          </tr>
        </tbody>
      </table>
      <p style={s.p}>For associates, England and Wales use a convention that treats net pensionable earnings as 43.9% of gross NHS fee income, rather than requiring the actual expense ratio to be calculated. Your annual pension figures should reconcile to that basis, and if they do not, something in the bookkeeping has gone astray during the year.</p>

      <h2 style={s.h2}>How does payroll work in a dental practice?</h2>
      <p style={s.p}><strong style={s.strong}>A dental practice usually runs payroll for employed staff — nurses, receptionists, hygienists and practice managers — while associate dentists are self-employed and paid outside payroll against invoices or self-billing statements.</strong> Mixing the two is the error that causes trouble, because paying an associate through PAYE or treating an employed hygienist as self-employed both create liabilities that surface years later.</p>
      <p style={s.p}>Practical points that catch practices out:</p>
      <ul style={s.ul}>
        <li style={s.li}>Employed staff need auto-enrolment pension assessment every pay period, and dental practices often have variable-hours staff whose eligibility changes month to month.</li>
        <li style={s.li}>Associates are a cost of sale, not a payroll cost. Putting them in wages distorts your staff-cost percentage and makes benchmarking against other practices meaningless.</li>
        <li style={s.li}>Hygienists can be either employed or self-employed depending on the actual working arrangement, not on what the contract is titled. The distinction needs to be defensible on the facts.</li>
        <li style={s.li}>NHS staff in the NHS Pension Scheme need their contributions handled separately from auto-enrolment arrangements.</li>
      </ul>

      <h2 style={s.h2}>How do locum dentists handle their bookkeeping?</h2>
      <p style={s.p}><strong style={s.strong}>Locum dentists are self-employed and invoice each practice they work at, so their bookkeeping is simpler than a practice's but has two specific requirements: tracking income across multiple payers, and claiming the right expenses against it.</strong> Where a locum also does NHS sessions, superannuation may be deducted by the practice or the health board, which brings the same gross-versus-net question as above.</p>
      <p style={s.p}>Allowable costs for a locum typically include GDC registration, indemnity cover, professional subscriptions, CPD, loupes and clinical equipment, travel between workplaces (though not to a single regular place of work), and a proportion of home office costs where record-keeping and admin genuinely happen there. From April 2026, locums earning over £50,000 fall within Making Tax Digital for Income Tax and will need to keep digital records and file quarterly.</p>

      <h2 style={s.h2}>Why choose a specialist dental bookkeeper</h2>
      <p style={s.p}>A generalist bookkeeper will record your income and expenses, but they will not understand the NHS contract structure, the associate payment model, or the VAT treatment of mixed dental income. This means your accounts may be technically complete but fundamentally wrong in ways that only show up during an HMRC enquiry or when you try to sell the practice.</p>

      <p style={s.p}>If you would rather hand this over than manage it in-house, our <a href="/accountant-for-dental-practices-uk" style={{color:C.gold,fontWeight:600}}>dental accountants for UK practices</a> handle NHS contract reconciliation, associate statements, superannuation and payroll as a single monthly service.</p>

      <div style={s.callout}>
        <p style={{...s.p,marginBottom:'0.5rem',color:C.white}}><strong style={s.strong}>Cledger&apos;s dental specialism:</strong></p>
        <p style={{...s.p,marginBottom:0}}>Our founder has personally managed over 100 dental and locum client accounts in UK public practice. We understand NHS contract income, associate structures, CQC compliance, and the full range of dental-specific accounting requirements. We work in Xero and QuickBooks, we are MTD compliant, and our pricing is fully transparent.</p>
      </div>
    </BlogLayout>
  )
}
