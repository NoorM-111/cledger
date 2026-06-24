import styles from './Services.module.css'

const services = [
  {
    n: '01',
    title: 'Bookkeeping',
    desc: 'We keep your financial records accurate, organised and always up to date, so you have a clear picture of your business at any point in time, without the administrative burden.',
    bullets: ['Monthly bank reconciliation', 'Real-time P&L reporting', 'Cloud accounting setup (Xero, QuickBooks)'],
  },
  {
    n: '02',
    title: 'VAT & Tax Compliance',
    desc: 'We handle your tax obligations from start to finish, preparing, reviewing and submitting on time — helping you avoid unexpected penalties and compliance issues.',
    bullets: ['MTD-compliant VAT return preparation', 'Quarterly filing and HMRC submission', 'VAT registration and scheme advice'],
  },
  {
    n: '03',
    title: 'Management Accounts',
    desc: 'Monthly financial reports that give you a genuine understanding of how your business is performing, with clear commentary, actionable insight and not just numbers on a page.',
    bullets: ['Monthly P&L and balance sheet', 'KPI tracking with commentary', 'Variance analysis and trend reporting'],
  },
  {
    n: '04',
    title: 'Annual Accounts & Corporation Tax',
    desc: 'We prepare and submit your statutory accounts and corporation tax returns with care and precision, handling every detail so nothing falls through the cracks.',
    bullets: ['Statutory accounts preparation', 'CT600 filing with HMRC', 'Corporation tax planning and scheduling'],
  },
  {
    n: '05',
    title: 'Personal Tax Returns',
    desc: 'Whether you are a company director, self-employed professional or landlord, we file your personal tax return accurately, and identify every legitimate saving along the way.',
    bullets: ['Self-assessment filing (SA100)', 'Director loan account management', 'Rental income and capital gains'],
  },
  {
    n: '06',
    title: 'Cashflow & Financial Planning',
    desc: 'We build detailed projections and financial plans that help you anticipate challenges, seize opportunities and make strategic decisions with genuine confidence.',
    bullets: ['12-month rolling cash forecasts', 'Scenario modelling and stress testing', 'Growth planning and advisory support'],
  },
  {
    n: '07',
    title: 'Budgeting & Forecasting',
    desc: 'From annual budgets to rolling forecasts, we give you the financial visibility to plan ahead, and the agility to adapt when your business needs change.',
    bullets: ['Annual budget setting', 'Departmental cost analysis', 'Board-ready financial reporting'],
  },
  {
    n: '08',
    title: 'Compliance & Company Secretarial',
    desc: 'We manage your statutory obligations, government filings, annual returns and all regulatory requirements, keeping your business fully compliant at all times.',
    bullets: ['Confirmation statements (Companies House)', 'Registered office and statutory registers', 'Director appointment and resignation filings'],
  },
  {
    n: '09',
    title: 'HMRC & Government Liaison',
    desc: 'We handle all correspondence and dealings with HMRC on your behalf, responding to enquiries, managing issues and ensuring your affairs are always in good standing.',
    bullets: ['HMRC enquiry responses', 'VAT and PAYE correspondence', 'Penalty appeal and mitigation support'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '96px 0', background: '#F7F4EC' }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: '56px' }}>
          <span className="s-label">What We Do</span>
          <h2 className="s-h">A Complete Accounting Service,<br />Built Around Your Business</h2>
          <p className="s-p">
            From keeping your day-to-day accounts in order to long-term financial planning, we provide everything your
            business needs to stay compliant, informed and in full control of its finances.
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
