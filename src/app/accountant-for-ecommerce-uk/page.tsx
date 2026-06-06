import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/sectors/FAQAccordion'

export const metadata: Metadata = {
  title: 'Accountant for Ecommerce UK | Amazon, Shopify & eBay Accounting | Cledger',
  description: 'Specialist accounting for UK ecommerce businesses from £175/month. Amazon FBA, Shopify, eBay, multi-channel bookkeeping, VAT, OSS and corporation tax from qualified accountants.',
  alternates: {
    canonical: 'https://www.cledger.co.uk/accountant-for-ecommerce-uk',
  },
}

const FAQS = [
  {
    q: 'Do I need to register for VAT as a UK ecommerce seller?',
    a: 'Yes, once your taxable UK turnover exceeds £90,000 in any rolling 12-month period. For ecommerce sellers, the threshold calculation can be complex — Amazon collects and remits VAT on certain transactions as a marketplace facilitator, but this does not reduce your own turnover for threshold purposes. We monitor your position and advise on timing so you are never caught registering late.',
  },
  {
    q: 'What is the EU One Stop Shop (OSS) and do I need it?',
    a: 'The OSS scheme allows UK sellers to account for EU VAT on sales to EU consumers through a single quarterly return, rather than registering for VAT in each EU country separately. If you sell goods to EU customers with a value above the relevant threshold, OSS is likely the right solution. We assess your EU sales volume, advise on whether OSS registration is required, and handle all filings.',
  },
  {
    q: 'How do you reconcile Amazon payouts?',
    a: 'Amazon deposits a net amount every two weeks after deducting selling fees, FBA storage and fulfilment fees, advertising costs, refunds and VAT collected. We use A2X to pull your Amazon settlement data, categorise every line correctly, and post clean journal entries to your accounting software. This produces an accurate revenue and cost picture rather than treating the deposit as simple income.',
  },
  {
    q: 'How should I account for inventory?',
    a: 'Inventory purchased is a current asset on your balance sheet — it becomes an expense (cost of goods sold) only when the item is sold. We track your opening and closing stock, calculate your COGS for each period, and ensure your profit and loss account reflects actual trading performance. This is essential for accurate tax calculation and for understanding your real margins.',
  },
  {
    q: 'Can you handle accounting for a business selling on multiple platforms?',
    a: 'Yes. We work with sellers across Amazon, Shopify, eBay, Etsy, WooCommerce and TikTok Shop. Each platform has its own settlement format and reporting logic. We reconcile all channels to your bank account and produce a consolidated set of accounts that reflects the total performance of your business across every channel.',
  },
]

const SERVICES = [
  {
    name: 'Multi-channel bookkeeping',
    desc: 'Amazon, Shopify, eBay, Etsy and other platform payouts reconciled against settlement reports and your bank account every month. We use A2X or Link My Books to automate the reconciliation.',
  },
  {
    name: 'Inventory accounting',
    desc: 'Stock tracked as an asset on your balance sheet. Cost of goods sold calculated correctly for each period so your profit figures are accurate.',
  },
  {
    name: 'UK VAT returns',
    desc: 'MTD-compliant quarterly VAT preparation and submission. We monitor your turnover against the £90,000 registration threshold and advise on timing.',
  },
  {
    name: 'EU OSS/IOSS registration and returns',
    desc: 'If you sell to EU customers, we handle your One Stop Shop registration and quarterly OSS returns, or IOSS for low-value goods.',
  },
  {
    name: 'Corporation tax (CT600)',
    desc: 'Full CT600 preparation including correct treatment of inventory, platform fees, FX gains and losses, and advertising costs.',
  },
  {
    name: 'Annual accounts',
    desc: 'Statutory accounts prepared and filed with HMRC and Companies House on time.',
  },
  {
    name: 'Director Self Assessment',
    desc: 'Personal tax return for ecommerce company directors including salary and dividends.',
  },
  {
    name: 'Management accounts',
    desc: 'Monthly profit and loss including gross margin by channel, COGS, and cash position. Essential for any scaling ecommerce business.',
  },
  {
    name: 'HMRC correspondence',
    desc: 'All letters and enquiries handled on your behalf.',
  },
  {
    name: 'Dedicated accountant via Slack',
    desc: 'A named qualified accountant reachable during UK business hours.',
  },
]

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function EcommercePage() {
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
                  Specialist Accountants for Ecommerce Businesses
                </span>
              </div>
              <h1 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#F8F5EE',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                Ecommerce Accounting for Amazon, Shopify and Multi-Channel Sellers
              </h1>
              <p style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.05rem',
                color: '#8a94a8',
                lineHeight: 1.75,
                maxWidth: '600px',
                margin: '0 auto 2rem',
              }}>
                Multi-channel reconciliation, UK VAT, EU OSS, inventory accounting and corporation tax — handled by qualified accountants who understand how ecommerce businesses actually work.
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
                {['From £175/month', 'Amazon & Shopify', 'VAT & OSS included'].map(s => (
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
              <h2 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#F8F5EE', lineHeight: 1.2, maxWidth: '560px', margin: '0 auto' }}>
                Ecommerce Finances Are More Complex Than a Standard Business.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="2" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  ),
                  title: 'Platform payouts are not your revenue',
                  body: 'Amazon, Shopify and eBay deposit net amounts after deducting fees, refunds, advertising costs and FBA charges. A bookkeeper who records the bank deposit as revenue is overstating your income and understating your costs. We reconcile every payout against the platform settlement report so your accounts reflect what you actually earned.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  ),
                  title: 'Inventory is an asset, not an expense',
                  body: 'Stock purchased is not an expense until it is sold. Expensing inventory immediately produces a misleading profit figure and incorrect tax liability. We account for your cost of goods sold correctly — tracking inventory as an asset on your balance sheet and expensing it when the sale occurs.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                  title: 'VAT for cross-border sellers',
                  body: 'Selling into the EU triggers VAT obligations that most generalist accountants are not equipped to handle. EU One Stop Shop (OSS) registration, IOSS for low-value imports, and country-specific thresholds all require specialist knowledge. If you are selling to EU customers and have not addressed your VAT position, you may already have compliance exposure.',
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
                Complete Ecommerce Accounting, Covered
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                One fixed monthly fee covers everything your ecommerce business needs.
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
                Why Ecommerce Businesses Choose Cledger
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'We understand platform accounting',
                  body: 'Amazon settlements, Shopify payouts, eBay managed payments — each platform reports differently and requires different reconciliation logic. We use A2X and Link My Books to connect your sales channels directly to your accounting software, producing clean, accurate records automatically every month.',
                },
                {
                  num: '02',
                  title: 'Inventory and COGS done correctly',
                  body: 'Getting inventory accounting right is the difference between knowing your real margins and guessing. We track your stock correctly as a balance sheet asset and calculate your cost of goods sold accurately — so your management accounts reflect the real profitability of your business, not just your cash flow.',
                },
                {
                  num: '03',
                  title: 'Cross-border VAT handled from day one',
                  body: 'If you sell to EU customers, your VAT position needs to be addressed before it becomes a compliance problem. We assess your exposure, handle OSS or IOSS registration where required, and file your returns — so you can sell internationally without the tax risk.',
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
                  Fixed-Fee Ecommerce Accounting
                </h2>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Ecommerce accounting starts from £175 per month. Pricing scales with your transaction volume, number of channels, and the services required. Use our calculator for an instant estimate.
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
                Get Your Ecommerce Finances Under Control
              </h2>
              <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.75, marginBottom: '2rem' }}>
                Book a free 30-minute consultation. We will review your current setup and give you a fixed-fee quote — no obligation.
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
