import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'What Is Making Tax Digital (MTD)? Complete UK Guide 2026 | Cledger',
  description: 'Everything UK businesses and sole traders need to know about Making Tax Digital in 2026. MTD for VAT, MTD for Income Tax deadlines, who is affected, and how to comply.',
  alternates: {
    canonical: 'https://www.cledger.co.uk/what-is-making-tax-digital',
  },
}

const TOC = [
  { label: 'What is Making Tax Digital?', id: 'what-is-mtd' },
  { label: 'MTD for VAT', id: 'mtd-for-vat' },
  { label: 'MTD for Income Tax Self Assessment', id: 'mtd-for-itsa' },
  { label: 'Who is affected and when?', id: 'who-is-affected' },
  { label: 'What software do I need?', id: 'software' },
  { label: 'What happens if I don\'t comply?', id: 'penalties' },
  { label: 'How Cledger can help', id: 'cledger-help' },
]

const PHASES = [
  {
    date: 'April 2026',
    threshold: '£50,000',
    description: 'Sole traders and landlords with combined self-employment and property income above £50,000 per year must comply.',
    confirmed: true,
  },
  {
    date: 'April 2027',
    threshold: '£30,000',
    description: 'The income threshold drops to £30,000. All sole traders and landlords above this level must be on MTD-compatible software and submitting quarterly updates.',
    confirmed: true,
  },
  {
    date: 'April 2028',
    threshold: '£20,000',
    description: 'Threshold proposed to drop further to £20,000 — bringing the majority of self-employed individuals into scope. Not yet confirmed in legislation.',
    confirmed: false,
  },
]

export default function MakingTaxDigitalPage() {
  return (
    <>
      <Navbar />

      <style>{`
        .mtd-layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: flex-start;
        }
        .mtd-toc-col {
          width: 100%;
          order: -1;
        }
        .mtd-content-col {
          width: 100%;
          min-width: 0;
        }
        @media (min-width: 1024px) {
          .mtd-layout {
            flex-direction: row;
            gap: 4rem;
          }
          .mtd-toc-col {
            width: 220px;
            flex-shrink: 0;
            order: 0;
          }
          .mtd-toc-sticky {
            position: sticky;
            top: 6rem;
          }
          .mtd-content-col {
            flex: 1;
          }
        }
        .mtd-toc-link {
          display: block;
          font-family: Sora, sans-serif;
          font-size: 0.825rem;
          color: #8a94a8;
          text-decoration: none;
          padding: 0.45rem 0.75rem;
          border-left: 2px solid rgba(201,168,76,0.15);
          line-height: 1.5;
          transition: color 0.15s, border-color 0.15s;
        }
        .mtd-toc-link:hover {
          color: #C9A84C;
          border-left-color: #C9A84C;
        }
      `}</style>

      <main style={{ background: '#0B1222' }}>

        {/* ── HERO ── */}
        <section style={{
          background: 'linear-gradient(180deg, #0B1222 0%, #111827 100%)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          padding: '8rem 0 4rem',
        }}>
          <div className="wrap">
            <div style={{ maxWidth: '720px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '100px', padding: '0.3rem 0.75rem', marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#C9A84C' }}>
                  Last updated: June 2026
                </span>
              </div>
              <h1 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                color: '#F8F5EE',
                lineHeight: 1.12,
                marginBottom: '1rem',
              }}>
                What Is Making Tax Digital?
              </h1>
              <p style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.1rem',
                color: '#8a94a8',
                lineHeight: 1.75,
                maxWidth: '600px',
                margin: 0,
              }}>
                The complete guide for UK businesses and self-employed people — updated for 2026.
              </p>
            </div>
          </div>
        </section>

        {/* ── ARTICLE + TOC ── */}
        <section style={{ background: '#0B1222', padding: '4rem 0 6rem' }}>
          <div className="wrap">
            <div className="mtd-layout">

              {/* ── TABLE OF CONTENTS ── */}
              <div className="mtd-toc-col">
                <div className="mtd-toc-sticky">
                  <p style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    marginBottom: '1rem',
                  }}>
                    Contents
                  </p>
                  <nav>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                      {TOC.map((item) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`} className="mtd-toc-link">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              {/* ── ARTICLE CONTENT ── */}
              <div className="mtd-content-col">

                {/* Section 1 */}
                <section id="what-is-mtd" style={{ marginBottom: '4rem' }}>
                  <h2 style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    color: '#F8F5EE',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    What Is Making Tax Digital?
                  </h2>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1rem' }}>
                    Making Tax Digital (MTD) is HMRC&apos;s programme to move the UK tax system online. Rather than filing an annual return, businesses and individuals within scope must keep digital records and submit updates to HMRC throughout the year using compatible software.
                  </p>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1rem' }}>
                    The programme began with VAT in 2019 and is expanding to cover Income Tax Self Assessment. The goal is to reduce tax errors and make the system more efficient. For businesses and sole traders, it means a fundamental change to how records are kept and how tax is reported.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="mtd-for-vat" style={{ marginBottom: '4rem' }}>
                  <h2 style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    color: '#F8F5EE',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    Making Tax Digital for VAT
                  </h2>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1rem' }}>
                    MTD for VAT has been mandatory for all VAT-registered businesses since April 2022, regardless of turnover. Under MTD for VAT, you must keep digital VAT records and submit your VAT returns using MTD-compatible software. You cannot submit a VAT return manually through your HMRC online account.
                  </p>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1rem' }}>
                    Compatible software includes Xero, QuickBooks, Sage, and a range of bridging tools. If you are VAT registered and not yet using MTD-compatible software, you are non-compliant and at risk of penalties.
                  </p>
                  <div style={{
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderLeft: '3px solid #C9A84C',
                    borderRadius: '8px',
                    padding: '1.1rem 1.25rem',
                    marginTop: '1.5rem',
                  }}>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.875rem', color: '#C9A84C', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                      Cledger operates entirely on MTD-compliant systems and submits all client VAT returns via the MTD API.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="mtd-for-itsa" style={{ marginBottom: '4rem' }}>
                  <h2 style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    color: '#F8F5EE',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    Making Tax Digital for Income Tax Self Assessment (MTD for ITSA)
                  </h2>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1rem' }}>
                    MTD for Income Tax Self Assessment is the next major phase of the MTD programme. It applies to sole traders and landlords — not employed individuals.
                  </p>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1.25rem' }}>
                    Under MTD for ITSA, affected taxpayers must:
                  </p>
                  <ul style={{ padding: '0 0 0 0', margin: '0 0 1.25rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {[
                      'Keep digital records of their income and expenses',
                      'Submit quarterly updates to HMRC (four times per year instead of one annual return)',
                      'Submit a final declaration at the end of the tax year in place of the Self Assessment return',
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                        <span style={{ color: '#C9A84C', fontSize: '1rem', lineHeight: 1.6, flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.7 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: 0 }}>
                    The quarterly updates are summaries of income and expenses — not tax payments. Your actual tax liability is still calculated and paid at the end of the year.
                  </p>
                </section>

                {/* Section 4 — Timeline */}
                <section id="who-is-affected" style={{ marginBottom: '4rem' }}>
                  <h2 style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    color: '#F8F5EE',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    Who Is Affected and When?
                  </h2>

                  {/* Timeline */}
                  <div style={{ position: 'relative', padding: '0.5rem 0', marginBottom: '2rem' }}>
                    {/* Vertical line */}
                    <div style={{
                      position: 'absolute',
                      left: '19px',
                      top: '24px',
                      bottom: '24px',
                      width: '2px',
                      background: 'rgba(201,168,76,0.2)',
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {PHASES.map((phase, i) => (
                        <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                          {/* Dot */}
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: phase.confirmed ? '#C9A84C' : 'rgba(201,168,76,0.15)',
                            border: phase.confirmed ? 'none' : '2px dashed rgba(201,168,76,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            zIndex: 1,
                            position: 'relative',
                          }}>
                            {phase.confirmed ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            ) : (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                              </svg>
                            )}
                          </div>

                          {/* Content */}
                          <div style={{
                            flex: 1,
                            background: '#131d31',
                            border: `1px solid ${phase.confirmed ? 'rgba(201,168,76,0.2)' : 'rgba(201,168,76,0.1)'}`,
                            borderRadius: '10px',
                            padding: '1.25rem',
                            marginTop: '0.125rem',
                          }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '0.625rem' }}>
                              <span style={{
                                fontFamily: '"DM Serif Display", Georgia, serif',
                                fontSize: '1.1rem',
                                color: '#F8F5EE',
                                fontWeight: 400,
                              }}>
                                {phase.date}
                              </span>
                              <span style={{
                                fontFamily: 'Sora, sans-serif',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                color: phase.confirmed ? '#0B1222' : '#C9A84C',
                                background: phase.confirmed ? '#C9A84C' : 'rgba(201,168,76,0.1)',
                                border: phase.confirmed ? 'none' : '1px solid rgba(201,168,76,0.3)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '100px',
                              }}>
                                {phase.threshold} threshold
                              </span>
                              {!phase.confirmed && (
                                <span style={{
                                  fontFamily: 'Sora, sans-serif',
                                  fontSize: '0.72rem',
                                  fontWeight: 500,
                                  color: '#8a94a8',
                                  background: 'rgba(138,148,168,0.1)',
                                  padding: '0.15rem 0.5rem',
                                  borderRadius: '100px',
                                  border: '1px solid rgba(138,148,168,0.2)',
                                }}>
                                  Proposed
                                </span>
                              )}
                            </div>
                            <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.875rem', color: '#8a94a8', lineHeight: 1.7, margin: 0 }}>
                              {phase.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  <div style={{
                    background: 'rgba(138,148,168,0.06)',
                    border: '1px solid rgba(138,148,168,0.15)',
                    borderRadius: '8px',
                    padding: '1.1rem 1.25rem',
                    marginBottom: '1.5rem',
                  }}>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.875rem', color: '#8a94a8', lineHeight: 1.7, margin: 0 }}>
                      <strong style={{ color: '#F8F5EE' }}>Important:</strong> The £50,000 and £30,000 thresholds refer to gross income, not profit. If your total self-employment and rental income exceeds the threshold, you must comply — regardless of what you earn after expenses.
                    </p>
                  </div>

                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: 0 }}>
                    Employed individuals, limited companies, and partnerships are not in scope for MTD for ITSA at this stage.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="software" style={{ marginBottom: '4rem' }}>
                  <h2 style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    color: '#F8F5EE',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    What MTD-Compatible Software Do I Need?
                  </h2>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1rem' }}>
                    You must use software that connects directly to HMRC&apos;s MTD API to submit your quarterly updates. The main options used by UK businesses and sole traders are Xero, QuickBooks, FreeAgent, and Sage.
                  </p>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1.5rem' }}>
                    Spreadsheet users can use HMRC-recognised bridging software to connect their spreadsheets to the MTD system, though this is more cumbersome than purpose-built software.
                  </p>

                  {/* Software badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '1.5rem' }}>
                    {['Xero', 'QuickBooks', 'FreeAgent', 'Sage', 'Bridging software'].map(sw => (
                      <span key={sw} style={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '0.825rem',
                        fontWeight: 500,
                        color: '#F8F5EE',
                        background: '#131d31',
                        border: '1px solid rgba(201,168,76,0.2)',
                        padding: '0.35rem 0.875rem',
                        borderRadius: '100px',
                      }}>
                        {sw}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderLeft: '3px solid #C9A84C',
                    borderRadius: '8px',
                    padding: '1.1rem 1.25rem',
                  }}>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.875rem', color: '#C9A84C', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                      Cledger uses Xero and QuickBooks for all client work. If you are not already on one of these platforms, we set you up as part of onboarding.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="penalties" style={{ marginBottom: '4rem' }}>
                  <h2 style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    color: '#F8F5EE',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    What Are the Penalties for Non-Compliance?
                  </h2>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1rem' }}>
                    HMRC operates a points-based penalty system for MTD for ITSA. Each missed quarterly submission earns one penalty point. Once your points reach a threshold (four points for quarterly filers), a £200 penalty is charged, with further £200 penalties for each subsequent missed submission.
                  </p>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1.5rem' }}>
                    There are also separate late payment penalties for unpaid tax.
                  </p>

                  {/* Penalty points visual */}
                  <div style={{ background: '#131d31', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1.25rem' }}>
                      Points-Based Penalty System
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                      {[
                        { points: '1–3 points', outcome: 'Warning — no financial penalty yet', warn: false },
                        { points: '4 points', outcome: '£200 penalty charged', warn: true },
                        { points: 'Each additional miss', outcome: 'Further £200 penalty per missed submission', warn: true },
                      ].map((row, i) => (
                        <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem', background: row.warn ? 'rgba(239,159,39,0.05)' : 'rgba(201,168,76,0.04)', borderRadius: '8px', border: `1px solid ${row.warn ? 'rgba(239,159,39,0.15)' : 'rgba(201,168,76,0.1)'}` }}>
                          <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: row.warn ? '#EF9F27' : '#C9A84C', whiteSpace: 'nowrap', minWidth: '100px' }}>
                            {row.points}
                          </span>
                          <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.875rem', color: '#8a94a8', lineHeight: 1.5 }}>
                            {row.outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: 0 }}>
                    HMRC has indicated a soft-landing period for MTD for ITSA in the first year of mandation, but relying on this is not a compliance strategy. The safest approach is to be set up and compliant from day one.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="cledger-help" style={{ marginBottom: '4rem' }}>
                  <h2 style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    color: '#F8F5EE',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    How Cledger Handles MTD for Our Clients
                  </h2>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1rem' }}>
                    Every Cledger client is set up on MTD-compliant software from day one. We handle all four quarterly submissions on your behalf — you do not need to log into HMRC or interact with any software directly.
                  </p>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.975rem', color: '#8a94a8', lineHeight: 1.85, margin: '0 0 1.5rem' }}>
                    We also prepare your final declaration at year-end in place of your traditional Self Assessment return. If you are approaching the £50,000 threshold and not yet on a compliant system, contact us now — the earlier you migrate, the smoother the transition.
                  </p>

                  {/* What we do list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      'Set up MTD-compliant software (Xero or QuickBooks) as part of onboarding',
                      'Connect your bank feeds and migrate your existing records',
                      'Submit all four quarterly updates to HMRC on your behalf',
                      'Prepare and file your year-end final declaration',
                      'Monitor your income against MTD thresholds and notify you in advance',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{
                          width: '20px', height: '20px', borderRadius: '50%',
                          background: 'rgba(201,168,76,0.15)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, marginTop: '1px',
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.9rem', color: '#8a94a8', lineHeight: 1.7 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── CTA CARD ── */}
                <div style={{
                  background: '#131d31',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  textAlign: 'center',
                }}>
                  <h2 style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    color: '#F8F5EE',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                  }}>
                    Need Help Getting MTD Ready?
                  </h2>
                  <p style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '0.95rem',
                    color: '#8a94a8',
                    lineHeight: 1.75,
                    marginBottom: '1.75rem',
                    maxWidth: '480px',
                    margin: '0 auto 1.75rem',
                  }}>
                    Book a free 30-minute consultation. We will assess your MTD obligations and set up a compliant system before your deadline.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                    <a href="https://calendly.com/cledger-info/30min" target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      background: '#C9A84C', color: '#0B1222',
                      fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                      padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none',
                    }}>
                      Book a Free Consultation
                    </a>
                    <Link href="/pricing" style={{
                      fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '0.875rem',
                      color: '#C9A84C', textDecoration: 'none',
                    }}>
                      Or get an instant quote →
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
