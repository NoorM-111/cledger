import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata = {
  title: 'What is Making Tax Digital (MTD)? Complete Guide for UK Businesses',
  description: 'MTD is mandatory for all VAT-registered UK businesses. Learn what Making Tax Digital means, the deadlines, compatible software, and how to stay compliant.',
  openGraph: {
    title: 'What is Making Tax Digital (MTD)? Complete Guide for UK Businesses',
    description: 'MTD is mandatory for VAT-registered UK businesses. Deadlines, software requirements and how to stay compliant, explained clearly.',
    url: 'https://www.cledger.co.uk/blog/what-is-making-tax-digital-mtd',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/what-is-making-tax-digital-mtd',
  },
}

export default function Article2() {
  return (
    <BlogLayout
      eyebrow="Tax & compliance"
      title="What is Making Tax Digital (MTD)? Complete guide for UK businesses"
      date="June 8, 2026"
      readTime="6 min read"
      intro={<><strong style={s.strong}>Making Tax Digital (MTD) is HMRC&apos;s requirement for businesses to keep digital records and submit tax returns through compatible software.</strong> It is already mandatory for all VAT-registered businesses, and from April 2026 it applies to self-employed people and landlords earning over £50,000. Here is everything you need to know.</>}
      ctaText="Get MTD-compliant bookkeeping from £175/month →"
      ctaHref="/pricing"
      slug="what-is-making-tax-digital-mtd"
      description="Making Tax Digital (MTD) is HMRC's requirement to keep digital records and file through compatible software. Deadlines, compliant software and penalties explained."
      dateModified="2026-07-10"
      faqs={[
        { q: 'What is Making Tax Digital in simple terms?', a: 'Making Tax Digital (MTD) is an HMRC rule requiring businesses to keep financial records digitally and submit tax returns directly from MTD-compatible software such as Xero or QuickBooks. Manual and paper submissions are no longer accepted for VAT.' },
        { q: 'Who does MTD apply to in 2026?', a: 'All VAT-registered businesses (mandatory since April 2022), plus self-employed people and landlords with income over £50,000, who joined MTD for Income Tax in April 2026. Those earning £30,000–£50,000 follow in April 2027.' },
        { q: 'What does MTD compliant mean?', a: 'MTD compliant means three things: your records are kept digitally in compatible software, there is an unbroken digital link between your records and your return (no retyping figures), and your return is submitted directly from the software to HMRC.' },
        { q: 'What software is MTD compatible?', a: 'Xero, QuickBooks Online, Sage Accounting and FreeAgent are all fully MTD-compatible for VAT and ready for MTD for Income Tax. Spreadsheets alone are not compliant, though Excel with HMRC-recognised bridging software is accepted for VAT.' },
        { q: 'What are the penalties for not complying with MTD?', a: 'HMRC uses a points-based system: each late or non-compliant submission earns a point, and at 4 points (for quarterly filers) you receive a £200 fine, with further £200 fines for each subsequent failure. Late VAT payments also attract interest.' },
      ]}
    >
      <h2 style={s.h2}>What is Making Tax Digital?</h2>
      <p style={s.p}>Making Tax Digital (MTD) is an HMRC initiative that requires businesses and landlords to keep digital records and submit tax returns using compatible software. The goal is to reduce errors, make the tax system more efficient, and give businesses a clearer real-time picture of their tax position.</p>
      <p style={s.p}>Under MTD, you can no longer submit VAT returns manually through HMRC&apos;s online portal or on paper. Every submission must come directly from MTD-compatible software, which means your bookkeeping and accounting records must be kept digitally in an approved system.</p>

      <h2 style={s.h2}>MTD deadlines, what applies to you</h2>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Who</th>
            <th style={s.th}>What</th>
            <th style={s.th}>Deadline</th>
            <th style={s.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['VAT-registered businesses (turnover above £85k)','MTD for VAT','April 2019','Mandatory now'],
            ['All VAT-registered businesses','MTD for VAT','April 2022','Mandatory now'],
            ['Self-employed & landlords (income above £50k)','MTD for Income Tax','April 2026','Mandatory now'],
            ['Self-employed & landlords (income £30k–£50k)','MTD for Income Tax','April 2027','Coming soon'],
            ['All remaining sole traders & landlords','MTD for Income Tax','April 2028','Future'],
            ['Limited companies','MTD for Corporation Tax','TBC','Future'],
          ].map(([who,what,deadline,status])=>(
            <tr key={who}>
              <td style={s.td}>{who}</td>
              <td style={{...s.td,color:C.muted}}>{what}</td>
              <td style={{...s.td,color:C.muted}}>{deadline}</td>
              <td style={{...s.td,color:status.includes('now')?C.red:status.includes('soon')?C.amber:C.muted,fontWeight:500}}>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={s.warning}>
        <p style={{...s.p,marginBottom:0,color:C.white}}><strong>⚠️ Important:</strong> If you are VAT-registered and still submitting returns manually through HMRC&apos;s portal, you are already non-compliant. HMRC can issue penalties for failure to use MTD-compatible software. Contact us immediately if you are not sure whether your current setup is compliant.</p>
      </div>

      <h2 style={s.h2}>What does MTD compliance actually mean in practice?</h2>
      <p style={s.p}>MTD compliance means three things. First, you must keep your financial records digitally, not in spreadsheets alone, but in MTD-compatible software. Second, there must be a digital link between your records and your VAT return, meaning you cannot retype figures from one system to another. Third, your VAT return must be submitted directly from MTD-compatible software to HMRC.</p>
      <p style={s.p}>The most practical way to comply is to use cloud accounting software like Xero or QuickBooks, which are both fully MTD-compatible and submit directly to HMRC at the click of a button.</p>

      <h2 style={s.h2}>Which software is MTD compatible?</h2>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Software</th>
            <th style={s.th}>MTD for VAT</th>
            <th style={s.th}>MTD for Income Tax</th>
            <th style={s.th}>Price from</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Xero','✓ Fully compliant','✓ Ready','£15/mo'],
            ['QuickBooks Online','✓ Fully compliant','✓ Ready','£12/mo'],
            ['Sage Accounting','✓ Fully compliant','✓ Ready','£12/mo'],
            ['FreeAgent','✓ Fully compliant','✓ Ready','£19/mo'],
            ['Excel + Bridging software','✓ With bridging tool','Limited','Varies'],
            ['Manual / paper records','✗ Not compliant','✗ Not compliant','N/A'],
          ].map(([sw,vat,it,price])=>(
            <tr key={sw}>
              <td style={s.td}>{sw}</td>
              <td style={{...s.td,color:vat.includes('✓')?C.green:C.red}}>{vat}</td>
              <td style={{...s.td,color:it.includes('✓')?C.green:it.includes('Limited')?C.amber:C.red}}>{it}</td>
              <td style={{...s.td,color:C.muted}}>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={s.h2}>What are the penalties for not complying with MTD?</h2>
      <p style={s.p}>HMRC operates a points-based penalty system for MTD non-compliance. Every late or non-compliant submission earns a penalty point. Once you accumulate enough points, you receive a £200 fine. Further failures result in additional £200 penalties each time. For businesses with quarterly obligations (most VAT-registered businesses), the threshold is 4 penalty points before the first £200 fine applies.</p>
      <p style={s.p}>Beyond the financial penalties, HMRC can also charge interest on any VAT paid late, currently 8.5% above the Bank of England base rate.</p>

      <h2 style={s.h2}>How Cledger handles MTD compliance for you</h2>
      <p style={s.p}>Every Cledger client on a package that includes VAT is fully MTD-compliant by default. We manage your records in Xero or QuickBooks, maintain the digital links required by HMRC, and submit your VAT returns directly through MTD-approved software before every deadline. You never need to think about it, we handle everything.</p>

      <div style={s.callout}>
        <p style={{...s.p,marginBottom:0,color:C.white}}><strong>✓ Already on Xero or QuickBooks?</strong> Great, the software side is sorted. What you need is someone to manage it correctly, reconcile your accounts, and submit on time every quarter. That is exactly what Cledger does, from £175/month.</p>
      </div>
    </BlogLayout>
  )
}
