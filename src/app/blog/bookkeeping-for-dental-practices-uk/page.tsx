import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata = {
  title: 'Bookkeeping for Dental Practices UK, What You Need to Know | Cledger',
  description: 'Dental practices have unique accounting needs, mixed NHS/private income, associate payments, CQC compliance. Here is the complete guide to dental bookkeeping in the UK.',
  openGraph: {
    title: 'Bookkeeping for Dental Practices UK, What You Need to Know',
    description: 'Mixed NHS/private income, associate payments and CQC compliance, dental bookkeeping explained by accountants who specialise in it.',
    url: 'https://www.cledger.co.uk/blog/bookkeeping-for-dental-practices-uk',
    type: 'article',
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
      ctaText="Get dental practice bookkeeping from £175/month →"
      ctaHref="/pricing"
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

      <h2 style={s.h2}>Why choose a specialist dental bookkeeper</h2>
      <p style={s.p}>A generalist bookkeeper will record your income and expenses, but they will not understand the NHS contract structure, the associate payment model, or the VAT treatment of mixed dental income. This means your accounts may be technically complete but fundamentally wrong in ways that only show up during an HMRC enquiry or when you try to sell the practice.</p>

      <div style={s.callout}>
        <p style={{...s.p,marginBottom:'0.5rem',color:C.white}}><strong style={s.strong}>Cledger&apos;s dental specialism:</strong></p>
        <p style={{...s.p,marginBottom:0}}>Our founder has personally managed over 100 dental and locum client accounts in UK public practice. We understand NHS contract income, associate structures, CQC compliance, and the full range of dental-specific accounting requirements. We work in Xero and QuickBooks, we are MTD compliant, and our pricing is fully transparent.</p>
      </div>
    </BlogLayout>
  )
}
