import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/sectors/FAQAccordion'

export const metadata: Metadata = {
  title: 'Accountant for Landlords UK | Property Tax & Bookkeeping | Cledger',
  description: 'Specialist accounting for UK landlords from £175/month. Self Assessment, rental income bookkeeping, Section 24 planning, capital gains tax and Making Tax Digital for property.',
  alternates: {
    canonical: 'https://www.cledger.co.uk/accountant-for-landlords-uk',
  },
}

const FAQS = [
  {
    q: 'Do landlords need to file a Self Assessment tax return?',
    a: 'Yes. If you receive rental income of any amount, you must report it to HMRC via a Self Assessment tax return each year. The deadline for online filing is 31 January. You report your gross rental income, deduct allowable expenses, and pay income tax on the profit. We handle this in full as part of your monthly plan.',
  },
  {
    q: 'What expenses can I deduct against my rental income?',
    a: 'Allowable expenses include letting agent fees, property management costs, repairs and maintenance (not improvements), buildings and contents insurance, mortgage arrangement fees, accountancy fees, and ground rent or service charges. Since April 2020, mortgage interest is no longer a direct deduction — it is replaced by a 20% tax credit under Section 24. We review your expenses annually to ensure you claim every penny you are entitled to.',
  },
  {
    q: 'What is Section 24 and how does it affect me?',
    a: 'Section 24 restricts the amount of mortgage interest residential landlords can deduct from rental income. Instead of deducting the full interest as an expense, you now receive a basic rate (20%) tax credit. For higher-rate taxpayers, this means you pay tax on income you have already used to pay your mortgage — effectively increasing your tax bill. Some landlords mitigate this by transferring properties into a limited company, though this triggers stamp duty and capital gains tax, so it requires careful modelling. We assess your specific situation and advise on the most appropriate approach.',
  },
  {
    q: 'When does Making Tax Digital apply to landlords?',
    a: 'MTD for Income Tax Self Assessment applies to landlords with property income (or self-employment income) above £50,000 from April 2026, and above £30,000 from April 2027. Under MTD, you will need to submit quarterly updates to HMRC using compatible software, plus a final declaration at year-end. We operate on fully MTD-compliant systems and will have you set up well ahead of the deadline.',
  },
  {
    q: 'Should I hold my properties personally or in a limited company?',
    a: 'This depends on your income level, the size of your portfolio, your mortgage situation, and your long-term plans. For higher-rate taxpayers building a significant portfolio, a limited company (often a Special Purpose Vehicle) can be more tax-efficient because companies can still deduct mortgage interest and pay corporation tax rather than income tax. However, the transfer of existing personally-held properties into a company triggers SDLT and potentially CGT, so the decision requires careful modelling. We run the numbers for every client before making a recommendation.',
  },
]

const SERVICES = [
  {
    name: 'Rental income bookkeeping',
    desc: 'Monthly reconciliation of all rental income and allowable expenses across every property, clearly categorised and always up to date.',
  },
  {
    name: 'Self Assessment tax return',
    desc: 'Annual personal tax return covering all rental income, expenses, mortgage interest credits, and any other income sources.',
  },
  {
    name: 'Section 24 planning',
    desc: 'We calculate your mortgage interest restriction accurately, advise on restructuring where beneficial, and ensure your Self Assessment reflects your correct position.',
  },
  {
    name: 'Making Tax Digital (MTD) compliance',
    desc: 'Quarterly digital submissions to HMRC via MTD-compliant software. We set up your system and handle all submissions from day one.',
  },
  {
    name: 'Capital gains tax',
    desc: 'When you sell a property, we calculate your CGT liability, identify all available reliefs, and advise on timing to minimise the charge.',
  },
  {
    name: 'SPV and limited company structuring',
    desc: 'For landlords building a portfolio, we assess whether holding properties in a Special Purpose Vehicle offers a tax advantage and guide you through the setup.',
  },
  {
    name: 'Allowable expense review',
    desc: 'We review every expense category — repairs, management fees, insurance, professional fees — to ensure you claim everything HMRC allows.',
  },
  {
    name: 'HMRC correspondence',
    desc: 'All enquiries, notices and compliance checks from HMRC handled on your behalf.',
  },
  {
    name: 'Dedicated accountant',
    desc: 'A named qualified accountant who knows your portfolio, available via Slack during UK business hours.',
  },
]

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function LandlordsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0B1222' }}>

        {/* ── HERO ── */}
        <section style={{
          background: 'linear-gradient(180deg, #0B1222 0%, #111827 100%)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          padding: '8rem 0 5rem',
        }}>
          <div className="wrap">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '1.5rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', display: 'block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.04em' }}>
                  Specialist Accountants for Landlords
                </span>
              </div>
              <h1 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#F8F5EE',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                Property Accounting That Works as Hard as Your Portfolio
              </h1>
              <p style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.05rem',
                color: '#8a94a8',
                lineHeight: 1.75,
                maxWidth: '560px',
                margin: '0 auto 2rem',
              }}>
                Rental income, allowable expenses, Section 24, capital gains and Making Tax Digital — all handled by qualified accountants who understand property.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <Link href="/pricing" style={{
                  background: '#C9A84C', color: '#0B1222',
                  fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                  padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none',
                }}>
                  Get a Free Quote
                </Link>
                <a href="https://calendly.com/cledger-info/30min" target="_blank" rel="noopener noreferrer" style={{
                  background: 'transparent', color: '#C9A84C',
                  fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                  padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none',
                  border: '1px solid #C9A84C',
                }}>
                  Book a Free Consultation
                </a>
              </div>
              <div style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem 2.5rem',
                borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '2rem',
              }}>
                {['From £175/month', 'MTD ready', 'Section 24 expertise'].map(s => (
                  <span key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#F8F5EE' }}>
                    <span style={{ color: '#C9A84C', fontSize: '1rem', lineHeight: 1 }}>✓</span>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section style={{ background: '#111827', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', display: 'block', marginBottom: '0.75rem' }}>
                We Understand Your Challenges
              </span>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2, maxWidth: '580px', margin: '0 auto' }}>
                Property Income Has More Tax Complexity Than Most Landlords Realise.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  ),
                  title: 'Section 24 mortgage interest restriction',
                  body: 'Since April 2020, residential landlords can no longer deduct mortgage interest as an expense. Instead, you receive a 20% tax credit. For higher-rate taxpayers, this change significantly increases the effective tax rate on rental profits. We ensure your position is structured correctly.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ),
                  title: 'Making Tax Digital for landlords',
                  body: 'From April 2026, landlords with property income over £50,000 must use MTD-compliant software and submit quarterly updates to HMRC. We already operate on MTD-ready systems and will have you fully prepared well before the deadline.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                    </svg>
                  ),
                  title: 'Capital gains tax when you sell',
                  body: 'Selling a rental property triggers capital gains tax on the gain. The rate is 18% for basic rate taxpayers and 24% for higher rate taxpayers. With careful planning — principal private residence relief, annual exempt amounts, timing of disposals — the liability can often be reduced significantly.',
                },
              ].map((card, i) => (
                <div key={i} style={{ background: '#131d31', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '12px', padding: '1.75rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.2rem', color: '#F8F5EE', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.875rem', color: '#8a94a8', lineHeight: 1.75, margin: 0 }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section style={{ background: '#0B1222', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2, marginBottom: '0.875rem' }}>
                Landlord Accounting, Covered End to End
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                Whether you have one property or a growing portfolio, your fixed monthly fee covers everything below.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', background: 'rgba(201,168,76,0.08)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.15)' }}>
              {SERVICES.map((svc, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '0.875rem', padding: '1.25rem 1.5rem',
                  background: '#0d1524',
                  borderBottom: '1px solid rgba(201,168,76,0.1)',
                  borderRight: i % 2 === 0 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                }}>
                  <Check />
                  <div>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#F8F5EE', margin: '0 0 0.25rem' }}>{svc.name}</p>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.825rem', color: '#8a94a8', lineHeight: 1.7, margin: 0 }}>{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CLEDGER ── */}
        <section style={{ background: '#111827', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2 }}>
                Why Landlords Choose Cledger
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'We understand property tax in depth',
                  body: 'Section 24, capital gains relief, SPV structuring, furnished holiday lettings rules — property tax is its own specialism. We work with residential and commercial landlords across the UK and understand the rules that apply to your specific situation.',
                },
                {
                  num: '02',
                  title: 'MTD ready before the deadline',
                  body: 'Making Tax Digital for Income Tax is coming for landlords. If your property income exceeds £50,000, you need to be on a compliant system by April 2026. We already operate entirely on MTD-ready software and will have you set up with time to spare.',
                },
                {
                  num: '03',
                  title: 'Fixed fees that scale with your portfolio',
                  body: 'We charge a fixed monthly fee based on your portfolio size and services required — not by the hour. You know exactly what you pay each month, and as your portfolio grows, your pricing adjusts transparently with no surprises.',
                },
              ].map((usp) => (
                <div key={usp.num} style={{ background: '#131d31', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '12px', padding: '1.75rem' }}>
                  <span style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.5rem', color: 'rgba(201,168,76,0.3)', display: 'block', marginBottom: '1rem' }}>{usp.num}</span>
                  <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.2rem', color: '#F8F5EE', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {usp.title}
                  </h3>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.875rem', color: '#8a94a8', lineHeight: 1.75, margin: 0 }}>
                    {usp.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section style={{ background: '#0B1222', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ background: '#131d31', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '16px', padding: '3rem 2.5rem' }}>
                <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', display: 'block', marginBottom: '0.75rem' }}>Pricing</span>
                <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#F8F5EE', lineHeight: 1.2, marginBottom: '1rem' }}>
                  Fixed-Fee Landlord Accounting
                </h2>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Landlord accounting starts from £175 per month for a single property with rental income under £100,000. Pricing scales with portfolio size, turnover and the services you require. Use our calculator for an instant estimate.
                </p>
                <Link href="/pricing" style={{ display: 'inline-block', background: '#C9A84C', color: '#0B1222', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem', padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none' }}>
                  Calculate My Price
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: '#111827', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2 }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ maxWidth: '760px', margin: '0 auto' }}>
              <FAQAccordion items={FAQS} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: '#0B1222', borderTop: '1px solid rgba(201,168,76,0.15)', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2, marginBottom: '1rem' }}>
                Get Your Property Finances in Order
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                Book a free 30-minute consultation. We will review your portfolio, explain your obligations and give you a fixed-fee quote with no commitment required.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                <a href="https://calendly.com/cledger-info/30min" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#C9A84C', color: '#0B1222', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem', padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none' }}>
                  Book a Free Consultation
                </a>
                <Link href="/pricing" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#C9A84C', textDecoration: 'none' }}>
                  Or get an instant quote →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
