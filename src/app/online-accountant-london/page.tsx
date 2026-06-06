import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/sectors/FAQAccordion'

export const metadata: Metadata = {
  title: 'Online Accountant London | Fixed-Fee Accounting for London Businesses | Cledger',
  description: 'Online accountant for London small businesses and freelancers from £175/month. Bookkeeping, VAT, corporation tax and payroll from qualified accountants. Fully remote, fixed fees.',
  alternates: {
    canonical: 'https://www.cledger.co.uk/online-accountant-london',
  },
}

const FAQS = [
  {
    q: 'Do I need a local accountant based in London?',
    a: 'No. Since the shift to cloud accounting and digital communication, geography is irrelevant to the quality of accounting you receive. Your books live in Xero or QuickBooks — accessible from anywhere. Your accountant communicates via Slack, email and video call. Every piece of compliance work is submitted digitally to HMRC and Companies House. A London-based accountant has no practical advantage over a remote one — they simply charge more.',
  },
  {
    q: 'How does the onboarding process work?',
    a: 'Once you sign your engagement letter, we contact your previous accountant (if you have one), request all records, and manage the full handover. We set up your cloud accounting software, connect your bank feeds, and reconcile your opening balances. Most clients are fully onboarded within two weeks. You do not need to do anything except provide access to your accounts.',
  },
  {
    q: 'What cloud accounting software do you use?',
    a: 'We work with Xero and QuickBooks — the two leading cloud accounting platforms in the UK. Both are fully MTD-compliant. If you do not have a subscription, we can set one up as part of onboarding. If you are already on one, we connect to your existing account and take it from there.',
  },
  {
    q: 'Can you handle accounting for a London business with employees?',
    a: 'Yes. We provide full RTI-compliant payroll for businesses of any size, including auto-enrolment pension management, P60s, P11Ds and all PAYE obligations. Payroll is included in our Complete tier or available as a standalone add-on.',
  },
  {
    q: 'How quickly can you take over from my current accountant?',
    a: 'In most cases, within two weeks. We contact your previous accountant directly, request professional clearance and the transfer of all records, and manage the entire transition. If there are outstanding filings or backlogs, we handle those as part of the handover. You do not need to be involved in the process.',
  },
]

const SERVICES = [
  {
    name: 'Bookkeeping',
    desc: 'Monthly reconciliation of all transactions, bank feeds, and balances. Your records are accurate, up to date, and ready for any HMRC enquiry.',
  },
  {
    name: 'VAT returns',
    desc: 'MTD-compliant quarterly VAT preparation and submission. We advise on the most appropriate VAT scheme for your business type and turnover.',
  },
  {
    name: 'Corporation tax (CT600)',
    desc: 'Full preparation and submission of your corporation tax return. We identify every allowable deduction and plan your liability throughout the year.',
  },
  {
    name: 'Annual accounts',
    desc: 'Statutory accounts prepared to UK GAAP and filed with HMRC and Companies House on time, every year.',
  },
  {
    name: 'Payroll',
    desc: 'RTI-compliant payroll for all employees and directors, including PAYE submissions, payslips and auto-enrolment pension management.',
  },
  {
    name: 'Director Self Assessment',
    desc: 'Personal tax return covering salary, dividends, benefits in kind and any other income. Included for all director-shareholder clients.',
  },
  {
    name: 'Management accounts',
    desc: 'Monthly or quarterly financial reports giving you a clear view of profit, cash position and performance. Essential for any London business making growth decisions.',
  },
  {
    name: 'Companies House compliance',
    desc: 'Confirmation statements and all statutory filings handled on time. No penalties, no missed deadlines.',
  },
  {
    name: 'HMRC correspondence',
    desc: 'All letters and enquiries from HMRC handled on your behalf.',
  },
  {
    name: 'Dedicated accountant via Slack',
    desc: 'A named qualified accountant who knows your business, reachable during UK business hours.',
  },
]

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function LondonPage() {
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
            <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '1.5rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', display: 'block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.04em' }}>
                  Online Accountants for London Businesses
                </span>
              </div>
              <h1 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#F8F5EE',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                Your London Business Deserves Better Than an Overpriced Local Accountant
              </h1>
              <p style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.05rem',
                color: '#8a94a8',
                lineHeight: 1.75,
                maxWidth: '580px',
                margin: '0 auto 2rem',
              }}>
                Qualified accountants, fully remote, fixed monthly fees from £175. Everything a London business needs — bookkeeping, VAT, payroll, corporation tax — without the London premium.
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
                {['From £175/month', 'Fully remote', 'London businesses served'].map(s => (
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
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2, maxWidth: '620px', margin: '0 auto' }}>
                Running a London Business Is Expensive Enough Without Overpaying for Accounting.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  ),
                  title: 'London accountants charge London prices',
                  body: 'A traditional accounting firm in central London charges £300-£600 per month for limited company accounts. You are paying for their Mayfair office, their reception staff, and their partners\' time — not all of which is spent on your books. Cledger delivers the same quality of work at 40% less, fully remote.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  ),
                  title: 'Your accountant is hard to reach',
                  body: 'Most small London businesses deal with overworked accountants who are managing hundreds of clients. Emails go unanswered for days. Calls go to voicemail. Questions pile up until year-end. At Cledger, every client has a dedicated accountant reachable via Slack — typically within the hour during business hours.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  ),
                  title: 'Year-end surprises that could have been avoided',
                  body: 'An accountant who only looks at your books once a year cannot give you proactive advice. By the time they file your accounts, the opportunities to reduce your tax bill have already passed. We review your position monthly and flag planning opportunities before deadlines, not after.',
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
                Full-Service Accounting for London Businesses
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                One fixed monthly fee. Everything your London business needs to stay compliant and run cleanly.
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
                Why London Businesses Choose Cledger
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'All the expertise, none of the London premium',
                  body: 'You are not paying for a W1 postcode. Cledger operates fully remotely, which means our overheads are lower and we pass that saving directly to you. You get qualified accountants and a premium service at 40% below what a comparable London firm would charge.',
                },
                {
                  num: '02',
                  title: 'Same-day responses via Slack',
                  body: 'London businesses move fast. When you have a question about a client invoice, a VAT liability, or a payroll query, you need an answer today — not next week. Every Cledger client gets a private Slack channel with their dedicated accountant. Ask in the morning, get an answer before lunch.',
                },
                {
                  num: '03',
                  title: 'Proactive, not just reactive',
                  body: 'We do not wait for year-end to look at your numbers. We review your position every month, flag any issues early, and make tax planning recommendations throughout the year. Most of our clients save more in their first year with Cledger than they pay in fees.',
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
                  Transparent Pricing for London Businesses
                </h2>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Our accounting starts from £175 per month for a single entity with turnover under £100,000 — significantly below the London market rate for the same service. Use our calculator for an instant fixed-fee estimate.
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
                Switch to a Better Accountant Today
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                Book a free 30-minute consultation. We will review your current setup, explain exactly what we will do differently, and give you a fixed-fee quote — no obligation.
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
