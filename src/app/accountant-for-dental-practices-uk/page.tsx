import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/sectors/FAQAccordion'

export const metadata: Metadata = {
  title: 'Accountant for Dental Practices UK | Specialist Dental Bookkeeping | Cledger',
  description: 'Specialist accounting and bookkeeping for UK dental practices from £175/month. NHS and private income, associate payroll, VAT exemptions and Making Tax Digital from qualified accountants.',
  alternates: {
    canonical: 'https://www.cledger.co.uk/accountant-for-dental-practices-uk',
  },
}

const FAQS = [
  {
    q: 'Are dental services VAT exempt in the UK?',
    a: 'Most dental services provided by registered dental professionals are VAT exempt under HMRC\'s healthcare exemption. This includes NHS and private treatments. However, purely cosmetic procedures with no therapeutic purpose — such as tooth whitening in some contexts — may be standard rated at 20%. The distinction is not always straightforward, and misclassifying income creates both overpayment and underpayment risk. We apply the correct treatment to every income line in your practice.',
  },
  {
    q: 'How should associate dentists be paid and recorded?',
    a: 'Associates working in a dental practice are typically engaged as self-employed contractors rather than employees. They receive a percentage of the fees they generate, and the practice is responsible for accurate payment records but not for deducting PAYE or NI. HMRC pays close attention to the employed versus self-employed boundary in dentistry. We structure and document associate arrangements correctly to satisfy HMRC requirements and protect the practice.',
  },
  {
    q: 'What is the difference between NHS and private income accounting?',
    a: 'NHS income is contract-based — the practice receives monthly payments against an agreed UDA target, with clawback risk if targets are not met. Private income is transaction-based — earned per appointment and recognised when the treatment is provided. Dental plan income sits between the two — received monthly but earned incrementally over a care period. Each requires a different accounting treatment. We handle all three correctly so your management accounts reflect the true financial position of the practice.',
  },
  {
    q: 'Do I need to register for VAT as a dental practice?',
    a: 'If your turnover is predominantly from VAT-exempt dental services, you are unlikely to need or be able to register for VAT — because exempt supplies do not count toward the £90,000 registration threshold. However, if you provide a meaningful proportion of standard-rated services (such as cosmetic treatments), you may reach the threshold and need to register. We assess your position and advise accordingly.',
  },
  {
    q: 'Can Cledger handle accounts for both the practice and the principal dentist personally?',
    a: 'Yes. We provide a combined service covering the practice entity (bookkeeping, VAT, payroll, CT600, annual accounts) and the principal dentist personally (Self Assessment, dividend planning, pension contributions). Having both handled by the same accountant ensures your personal and practice positions are planned together, which is where the most significant tax savings typically come from.',
  },
]

const SERVICES = [
  {
    name: 'NHS and private income bookkeeping',
    desc: 'Monthly reconciliation of all income streams. NHS contract payments, private fees and plan subscriptions categorised separately and accurately every month.',
  },
  {
    name: 'Associate payments and self-employed records',
    desc: 'Correct treatment of associate income, payment records, and self-employed status documentation to satisfy HMRC requirements.',
  },
  {
    name: 'VAT return (exempt and standard rated)',
    desc: 'Correct VAT classification of all dental services, quarterly MTD-compliant VAT returns, and management of the partial exemption calculation where relevant.',
  },
  {
    name: 'Payroll for practice staff',
    desc: 'RTI-compliant payroll for nurses, receptionists and support staff including PAYE submissions, payslips and pension auto-enrolment.',
  },
  {
    name: 'Corporation tax and annual accounts',
    desc: 'Full CT600 preparation and statutory accounts for incorporated practices, filed with HMRC and Companies House on time.',
  },
  {
    name: 'Self Assessment for principal dentists',
    desc: 'Personal tax returns covering practice income, dividends, associate earnings and any other income sources.',
  },
  {
    name: 'Management accounts',
    desc: 'Monthly profit and loss reports giving you a clear view of practice performance, cost per surgery, and cash position.',
  },
  {
    name: 'Making Tax Digital compliance',
    desc: 'Quarterly digital submissions via MTD-compliant software. We set up your system and handle all submissions.',
  },
  {
    name: 'HMRC correspondence',
    desc: 'All letters, enquiries and compliance checks handled on your behalf.',
  },
  {
    name: 'Dedicated accountant',
    desc: 'A named qualified accountant who knows your practice, available via Slack during UK business hours.',
  },
]

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function DentalPracticesPage() {
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
                  Specialist Accountants for Dental Practices
                </span>
              </div>
              <h1 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#F8F5EE',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                Accounting Built for UK Dental Practices
              </h1>
              <p style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.05rem',
                color: '#8a94a8',
                lineHeight: 1.75,
                maxWidth: '560px',
                margin: '0 auto 2rem',
              }}>
                NHS contracts, private fee income, associate payroll and VAT exemptions — handled by qualified accountants who understand how dental practice finances actually work.
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
                {['From £175/month', 'NHS & Private', 'MTD compliant'].map(s => (
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
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2, maxWidth: '600px', margin: '0 auto' }}>
                Dental Practice Finances Are More Complex Than Most Accountants Realise.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  title: 'Multiple income streams, one set of books',
                  body: 'NHS contract payments, private fee income, and dental plan subscriptions each arrive differently, are earned differently, and need different accounting treatment. A generalist accountant applying standard commercial frameworks to dental income produces records that reconcile on paper but mislead in practice. We account for each stream correctly from day one.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: 'Associate pay and self-employed status',
                  body: 'Associates working in your practice are typically self-employed, not employees — but HMRC scrutinises this distinction closely. Getting the employment status wrong creates significant PAYE and NI exposure. We structure associate arrangements correctly and handle all related payroll and payment administration.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  ),
                  title: 'VAT exemptions specific to dentistry',
                  body: 'Most dental services are VAT exempt under HMRC\'s healthcare exemption rules. However, some services — cosmetic treatments, for example — are standard rated. Misclassifying your income creates both overpayment and underpayment risk. We apply the correct VAT treatment to every income line in your practice.',
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
                Complete Dental Practice Accounting, Covered
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                One fixed monthly fee covers everything your practice needs to stay compliant and financially clear.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '0', background: 'rgba(201,168,76,0.08)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.15)' }}>
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
                Why Dental Practices Choose Cledger
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'We know dental practice income',
                  body: 'NHS contract payments, UDA targets, private fee structures, capitation plans — we understand how dental income works and account for it correctly. You will not be explaining your business model to your accountant every month.',
                },
                {
                  num: '02',
                  title: 'Fixed fees, no year-end surprises',
                  body: 'Dental practices have enough financial unpredictability from NHS contract negotiations and private patient fluctuations. Your accounting fee is not one of them. One fixed monthly fee covers everything — no add-ons, no quarterly invoices for extras.',
                },
                {
                  num: '03',
                  title: 'MTD ready for dental practices now',
                  body: 'Making Tax Digital for Income Tax applies to practices and principal dentists with income above £50,000 from April 2026. We already operate on fully MTD-compliant software and will have your practice set up well ahead of the deadline.',
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
                  Fixed-Fee Dental Practice Accounting
                </h2>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Dental practice accounting starts from £175 per month for a single-surgery practice. Pricing scales with turnover, number of associates, and the services required. Use our calculator for an instant estimate.
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
                Let&apos;s Take the Numbers Off Your Plate
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                Book a free 30-minute consultation. We will review your practice&apos;s current accounting setup and give you a fixed-fee proposal — no obligation.
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
