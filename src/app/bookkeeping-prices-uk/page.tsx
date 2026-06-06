import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/sectors/FAQAccordion'

export const metadata: Metadata = {
  title: 'Bookkeeping Prices UK 2026 | How Much Does a Bookkeeper Cost? | Cledger',
  description: 'Honest guide to UK bookkeeping prices in 2026. How much does a bookkeeper cost? Hourly rates vs fixed fees explained. See Cledger\'s transparent pricing from £175/month.',
  alternates: {
    canonical: 'https://www.cledger.co.uk/bookkeeping-prices-uk',
  },
}

const FAQS = [
  {
    q: 'How much does a bookkeeper cost per month in the UK?',
    a: 'A freelance bookkeeper in the UK typically charges £15-£35 per hour. For a small business with 100-200 transactions per month, this usually works out to £150-£400 per month depending on complexity. Fixed-fee online bookkeeping services like Cledger start from £175 per month and include VAT returns, bank reconciliation and monthly reporting — making the effective cost significantly lower than a comparable hourly arrangement.',
  },
  {
    q: 'Is it cheaper to do my own bookkeeping?',
    a: 'In terms of direct cost, yes. In terms of total cost, usually not. Most business owners who do their own bookkeeping either miss deductions they were entitled to claim, make categorisation errors that cause problems at year-end, or spend 5-10 hours per month on admin that could be spent on billable work. At typical UK consulting or trade rates, that time is worth considerably more than a bookkeeping fee.',
  },
  {
    q: 'What is the difference between a bookkeeper and an accountant?',
    a: 'A bookkeeper records and categorises your financial transactions — income, expenses, bank reconciliation. An accountant uses those records to prepare financial statements, calculate tax liabilities, file returns with HMRC and Companies House, and provide advisory input on tax planning and business structure. Cledger provides both services under one fixed monthly fee, with qualified accountants overseeing all bookkeeping work.',
  },
  {
    q: 'Do I need VAT bookkeeping if I am not VAT registered?',
    a: 'If you are not VAT registered, you do not need to track VAT on transactions. However, you should still track your total taxable turnover carefully — once you exceed £90,000 in a rolling 12-month period, you must register for VAT within 30 days. We monitor your turnover as part of our bookkeeping service and notify you in advance of reaching the threshold.',
  },
  {
    q: 'Can I switch bookkeeper mid-year?',
    a: 'Yes, and it is straightforward. We request your records from your previous bookkeeper or accountant, reconcile your opening balances, and take over from the point of handover. If your records are incomplete or contain errors, we identify and correct them as part of onboarding. Most transitions complete within two weeks.',
  },
]

const SERVICES = [
  {
    name: 'Transaction processing',
    desc: 'Every income and expense transaction coded, categorised and reconciled against your bank statement every month.',
  },
  {
    name: 'Bank reconciliation',
    desc: 'Your accounts reconcile to your bank balance at the end of every month, catching errors and discrepancies before they become problems.',
  },
  {
    name: 'VAT returns',
    desc: 'MTD-compliant quarterly VAT preparation and submission to HMRC. We advise on the right scheme for your business.',
  },
  {
    name: 'Accounts payable and receivable',
    desc: 'Outstanding invoices tracked, supplier payments recorded, and aged debtor reports available on request.',
  },
  {
    name: 'Expense categorisation',
    desc: 'All business expenses coded to the correct nominal code for tax purposes, maximising your allowable deductions.',
  },
  {
    name: 'Monthly reporting',
    desc: 'A simple profit and loss summary every month so you know exactly where you stand financially.',
  },
  {
    name: 'Cloud software management',
    desc: 'We manage your Xero or QuickBooks subscription and keep your chart of accounts clean and correctly structured.',
  },
  {
    name: 'Year-end pack',
    desc: 'A clean, organised set of year-end records ready to pass to your accountant or for us to use for your annual accounts and CT600.',
  },
  {
    name: 'HMRC correspondence',
    desc: 'Any bookkeeping-related queries from HMRC handled on your behalf.',
  },
  {
    name: 'Dedicated bookkeeper via Slack',
    desc: 'A named qualified bookkeeper available during UK business hours.',
  },
]

const COMPARISON = [
  {
    type: 'Freelance bookkeeper',
    price: '£15–£35/hour',
    included: 'Data entry, basic reconciliation',
    fixed: 'No',
    isCledger: false,
  },
  {
    type: 'Local accounting firm',
    price: '£150–£400/month',
    included: 'Bookkeeping + accounts',
    fixed: 'Yes (usually)',
    isCledger: false,
  },
  {
    type: 'Online bookkeeping software only',
    price: '£12–£35/month',
    included: 'Software only, no human',
    fixed: 'N/A',
    isCledger: false,
  },
  {
    type: 'Cledger',
    price: 'From £175/month',
    included: 'Full bookkeeping, VAT, management accounts, dedicated accountant',
    fixed: 'Yes',
    isCledger: true,
  },
]

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function BookkeepingPricesPage() {
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
                  UK Bookkeeping Pricing Guide 2026
                </span>
              </div>
              <h1 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#F8F5EE',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                How Much Does Bookkeeping Cost in the UK?
              </h1>
              <p style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.05rem',
                color: '#8a94a8',
                lineHeight: 1.75,
                maxWidth: '560px',
                margin: '0 auto 2rem',
              }}>
                Honest, up-to-date pricing information for UK small businesses — plus Cledger&apos;s fixed-fee options from £175 per month.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <Link href="/pricing" style={{
                  background: '#C9A84C', color: '#0B1222',
                  fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                  padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none',
                }}>
                  See Cledger&apos;s Prices
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
                {['From £175/month', 'Fixed monthly fee', 'No hidden charges'].map(s => (
                  <span key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#F8F5EE' }}>
                    <span style={{ color: '#C9A84C', fontSize: '1rem', lineHeight: 1 }}>✓</span>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT AFFECTS BOOKKEEPING COSTS ── */}
        <section style={{ background: '#111827', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', display: 'block', marginBottom: '0.75rem' }}>
                What Affects Bookkeeping Costs
              </span>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2, maxWidth: '560px', margin: '0 auto' }}>
                Three Factors That Determine What You Will Pay
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Your transaction volume',
                  body: 'A business with 50 transactions per month is fundamentally different to one with 500. Bookkeeping is priced on time, and time scales with volume. Most pricing guides quote a starting price — make sure you understand what transaction volume that covers before committing.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  ),
                  title: 'Hourly rate vs fixed monthly fee',
                  body: 'Freelance bookkeepers typically charge £15-£35 per hour. At the end of a busy month, you may not know what the bill will be. Fixed-fee bookkeeping services charge one price regardless of volume, which makes cash flow planning simpler. Cledger operates on fixed monthly fees only.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  ),
                  title: 'What is actually included',
                  body: 'Some bookkeeping quotes cover data entry only. Others include bank reconciliation, VAT returns, payroll and management accounts. Always compare on scope, not headline price. A £100/month quote that excludes VAT and payroll is not cheaper than a £175/month quote that includes both.',
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
                What You Get for Your Fixed Monthly Fee
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
                Every Cledger bookkeeping client receives the following as standard. No add-ons, no extras at year-end.
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

        {/* ── WHY CLEDGER OVER A FREELANCE BOOKKEEPER ── */}
        <section style={{ background: '#111827', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2 }}>
                Freelance Bookkeeper vs Cledger — What Is the Difference?
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'Qualified accountants, not just bookkeepers',
                  body: 'Cledger\'s team are qualified accountants — not just bookkeepers. This means your books are maintained to accountancy standards from the start, which reduces your year-end accountancy bill and means you receive advice, not just data entry.',
                },
                {
                  num: '02',
                  title: 'Fixed fee, no monthly surprises',
                  body: 'Freelance bookkeepers charge by the hour. A busy trading month can produce an unexpectedly large invoice. Cledger charges one fixed fee per month, agreed in advance, regardless of transaction volume within your tier. You always know what you pay.',
                },
                {
                  num: '03',
                  title: 'Continuity and cover',
                  body: 'A sole freelance bookkeeper takes holidays, gets ill, and sometimes disappears. When that happens, your books stop. Cledger is a firm — your records are held centrally, your Slack channel stays active, and your deadlines are never missed because one person is unavailable.',
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

        {/* ── PRICING COMPARISON TABLE ── */}
        <section style={{ background: '#0B1222', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', display: 'block', marginBottom: '0.75rem' }}>Pricing</span>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2 }}>
                UK Bookkeeping Prices Compared — 2026
              </h2>
            </div>

            {/* Table wrapper with horizontal scroll on small screens */}
            <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
              <table style={{
                width: '100%',
                minWidth: '600px',
                borderCollapse: 'collapse',
                background: '#131d31',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '14px',
                overflow: 'hidden',
                fontFamily: 'Sora, sans-serif',
              }}>
                <thead>
                  <tr style={{ background: 'rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                    {['Service Type', 'Typical Price', 'What\'s Included', 'Fixed Fee?'].map(h => (
                      <th key={h} style={{
                        padding: '1rem 1.25rem',
                        textAlign: 'left',
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#C9A84C',
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                        borderLeft: row.isCledger ? '3px solid #C9A84C' : '3px solid transparent',
                        background: row.isCledger ? 'rgba(201,168,76,0.05)' : 'transparent',
                      }}
                    >
                      <td style={{
                        padding: '1.1rem 1.25rem',
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: row.isCledger ? 700 : 500,
                        color: row.isCledger ? '#C9A84C' : '#F8F5EE',
                      }}>
                        {row.type}
                      </td>
                      <td style={{
                        padding: '1.1rem 1.25rem',
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: row.isCledger ? 600 : 400,
                        color: row.isCledger ? '#F8F5EE' : '#8a94a8',
                        whiteSpace: 'nowrap',
                      }}>
                        {row.price}
                      </td>
                      <td style={{
                        padding: '1.1rem 1.25rem',
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '0.875rem',
                        color: row.isCledger ? '#F8F5EE' : '#8a94a8',
                        lineHeight: 1.6,
                      }}>
                        {row.included}
                      </td>
                      <td style={{
                        padding: '1.1rem 1.25rem',
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: row.isCledger ? 600 : 400,
                        color: row.isCledger ? '#C9A84C' : '#8a94a8',
                        whiteSpace: 'nowrap',
                      }}>
                        {row.fixed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                Cledger&apos;s pricing is fixed and transparent. Your exact monthly fee depends on your turnover band and the services included. Use our calculator below for an instant personalised estimate.
              </p>
              <Link href="/pricing" style={{ display: 'inline-block', background: '#C9A84C', color: '#0B1222', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem', padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none' }}>
                Calculate My Price
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: '#111827', padding: '5rem 0' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2 }}>
                Frequently Asked Questions About Bookkeeping Prices
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
                Get a Fixed-Fee Bookkeeping Quote
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                Tell us about your business and we will give you a fixed monthly price in minutes — no call required.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                <Link href="/pricing" style={{ display: 'inline-block', background: '#C9A84C', color: '#0B1222', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem', padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none' }}>
                  Get an Instant Quote
                </Link>
                <a href="https://calendly.com/cledger-info/30min" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#C9A84C', textDecoration: 'none' }}>
                  Or book a free consultation →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
