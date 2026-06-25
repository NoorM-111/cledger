import React from 'react'

const services = [
  {
    num: '01',
    title: 'Bookkeeping',
    desc: 'Monthly reconciliation and clean records on Xero or QuickBooks, ready for tax time or investor review.',
    bullets: ['Bank reconciliation', 'Transaction categorisation', 'Monthly management reports', 'Xero & QuickBooks setup'],
  },
  {
    num: '02',
    title: 'VAT & Tax Compliance',
    desc: 'We prepare, review and submit on time — helping you avoid unexpected penalties.',
    bullets: ['Quarterly VAT returns', 'MTD-compliant filing', 'VAT registration & advice', 'Partial exemption support'],
  },
  {
    num: '03',
    title: 'Payroll',
    desc: 'RTI-compliant payroll run each month. Your team gets paid correctly; HMRC gets filed on time.',
    bullets: ['Monthly payroll processing', 'RTI submissions to HMRC', 'Payslips & P60s', 'Pension auto-enrolment'],
  },
  {
    num: '04',
    title: 'Management Accounts',
    desc: 'Monthly P&L, balance sheet, and cash flow — the numbers your bank and investors actually want to see.',
    bullets: ['Monthly P&L statements', 'Cash flow forecasting', 'KPI dashboards', 'Board-ready reporting packs'],
  },
  {
    num: '05',
    title: 'Year-End & Corporation Tax',
    desc: 'Statutory accounts and CT600 prepared with care and filed to Companies House standard. No surprises.',
    bullets: ['Statutory accounts preparation', 'Corporation Tax (CT600)', 'Companies House filing', 'Director self-assessment'],
  },
  {
    num: '06',
    title: 'Cashflow & Advisory',
    desc: 'Detailed projections and financial plans that help you anticipate challenges and make confident decisions.',
    bullets: ['Business financial review', 'Budgeting & forecasting', 'Xero migration support', 'HMRC & Companies House liaison'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(76px,10vw,128px) clamp(22px,5vw,56px)' }}>
      <div>
        <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#9A7B39', marginBottom: 18 }}>What we do</div>
        <h2 style={{ font: "400 clamp(28px,4.4vw,46px)/1.1 'Newsreader',serif", letterSpacing: -1, color: '#1A1A16', margin: '0 0 16px', maxWidth: '18ch', textWrap: 'balance' as any }}>
          Everything your business needs to <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>stay compliant</em>
        </h2>
        <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 16, lineHeight: 1.7, color: '#5F5A50', maxWidth: 560, margin: 0 }}>
          We handle the numbers — accurately, on time, and with the context of a firm that knows UK compliance inside out.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(14px,1.5vw,20px)', marginTop: 'clamp(44px,6vw,64px)' }}>
        {services.map(({ num, title, desc, bullets }) => (
          <div
            key={num}
            style={{ background: '#FFFFFF', border: '1px solid #E9E2D4', borderRadius: 8, padding: 'clamp(26px,3vw,34px)', transition: 'border-color .25s, transform .25s, box-shadow .25s' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = '#D7C79A'
              el.style.transform = 'translateY(-3px)'
              el.style.boxShadow = '0 22px 40px -28px rgba(26,26,22,0.45)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = '#E9E2D4'
              el.style.transform = 'none'
              el.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ font: "500 32px/1 'Newsreader',serif", color: '#9A7B39' }}>{num}</span>
              <span style={{ font: "500 10px 'IBM Plex Mono',monospace", letterSpacing: '1.5px', color: '#B6AF9E', textTransform: 'uppercase' }}>Svc</span>
            </div>
            <h3 style={{ font: "500 21px/1.2 'Newsreader',serif", color: '#1A1A16', margin: '0 0 9px', letterSpacing: -0.3 }}>{title}</h3>
            <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 14, lineHeight: 1.65, color: '#5F5A50', margin: '0 0 18px' }}>{desc}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9, borderTop: '1px solid #EFE8DA', paddingTop: 16 }}>
              {bullets.map(b => (
                <li key={b} style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, color: '#6B675C', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ width: 14, height: 1, background: '#C9A84C', flex: 'none' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
