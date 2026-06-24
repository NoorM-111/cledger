import styles from './Services.module.css'

const services = [
  {
    n: '01',
    title: 'Bookkeeping',
    desc: 'Monthly reconciliation and clean records on Xero or QuickBooks, ready for tax time or investor review.',
    bullets: ['Bank reconciliation', 'Transaction categorisation', 'Monthly management reports', 'Xero & QuickBooks setup'],
  },
  {
    n: '02',
    title: 'VAT & Tax Compliance',
    desc: 'We prepare, review and submit on time — helping you avoid unexpected penalties.',
    bullets: ['Quarterly VAT returns', 'MTD-compliant filing', 'VAT registration & advice', 'Partial exemption support'],
  },
  {
    n: '03',
    title: 'Payroll',
    desc: 'RTI-compliant payroll run each month. Your team gets paid correctly; HMRC gets filed on time.',
    bullets: ['Monthly payroll processing', 'RTI submissions to HMRC', 'Payslips & P60s', 'Pension auto-enrolment'],
  },
  {
    n: '04',
    title: 'Management Accounts',
    desc: 'Monthly P&L, balance sheet, and cash flow — the numbers your bank and investors actually want to see.',
    bullets: ['Monthly P&L statements', 'Cash flow forecasting', 'KPI dashboards', 'Board-ready reporting packs'],
  },
  {
    n: '05',
    title: 'Year-End & Corporation Tax',
    desc: 'Statutory accounts and CT600 prepared with care and filed to Companies House standard. No surprises.',
    bullets: ['Statutory accounts preparation', 'Corporation Tax (CT600)', 'Companies House filing', 'Director self-assessment'],
  },
  {
    n: '06',
    title: 'Cashflow & Advisory',
    desc: 'Detailed projections and financial plans that help you anticipate challenges and make confident decisions.',
    bullets: ['Business financial review', 'Budgeting & forecasting', 'Xero migration support', 'HMRC & Companies House liaison'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '96px 0', background: '#F7F4EC' }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: '56px' }}>
          <span className="s-label">What We Do</span>
          <h2 className="s-h">Everything Your Business Needs to<br />Stay Compliant</h2>
          <p className="s-p">
            We handle the numbers — accurately, on time, and with the context of a firm that knows UK compliance inside out.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.title} className={styles.card}>
              <div className={styles.num}>{s.n}</div>
              <div className={styles.divider} />
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.bullets}>
                {s.bullets.map(b => (
                  <li key={b} className={styles.bullet}>
                    <span className={styles.dash} aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
