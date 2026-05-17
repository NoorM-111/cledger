import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    ),
    title: 'Bookkeeping',
    desc: 'We keep your financial records accurate, organised and always up to date — so you have a clear picture of your business at any point in time, without the administrative burden.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
    ),
    title: 'VAT & Tax Compliance',
    desc: 'We handle your tax obligations from start to finish — preparing, reviewing and submitting on time, every time, so you never face an unexpected penalty or compliance issue.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    ),
    title: 'Management Accounts',
    desc: 'Monthly financial reports that give you a genuine understanding of how your business is performing — with clear commentary, actionable insight and not just numbers on a page.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
    ),
    title: 'Annual Accounts & Corporation Tax',
    desc: 'We prepare and submit your statutory accounts and corporation tax returns with care and precision — handling every detail so nothing falls through the cracks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    title: 'Personal Tax Returns',
    desc: 'Whether you are a company director, self-employed professional or landlord, we file your personal tax return accurately — and identify every legitimate saving along the way.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    ),
    title: 'Cashflow & Financial Planning',
    desc: 'We build detailed projections and financial plans that help you anticipate challenges, seize opportunities and make strategic decisions with genuine confidence.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
    ),
    title: 'Budgeting & Forecasting',
    desc: 'From annual budgets to rolling forecasts, we give you the financial visibility to plan ahead — and the agility to adapt when your business needs change.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Compliance & Company Secretarial',
    desc: 'We manage your statutory obligations — government filings, annual returns and all regulatory requirements — keeping your business fully compliant at all times.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
    ),
    title: 'HMRC & Government Liaison',
    desc: 'We handle all correspondence and dealings with HMRC on your behalf — responding to enquiries, managing issues and ensuring your affairs are always in good standing.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream" style={{ padding: '96px 0' }}>
      <div className="wrap">
        <div className="center">
          <span className="s-label">What We Do</span>
          <h2 className="s-h">A Complete Financial Service,<br />Built Around Your Business</h2>
          <p className="s-p">
            From keeping your day-to-day accounts in order to long-term financial planning — we provide everything your
            business needs to stay compliant, informed and in full control of its finances.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.title} className="sc">
              <div className="sc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
