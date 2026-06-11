import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Our Team | Cledger',
  description:
    'Meet the qualified finance professionals behind Cledger, delivering expert accounting, tax compliance and financial advisory for UK businesses.',
}

const Ico = ({ d, extra }: { d: string; extra?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
    {extra && <path d={extra} />}
  </svg>
)

const members = [
  {
    photo: null,
    initials: 'NM',
    name: 'Noor Muhammad',
    role: 'Founder & Principal',
    tags: ['Financial Reporting', 'Tax Planning', 'Management Accounting', 'HMRC Affairs'],
    bio: 'Noor leads client delivery across the full range of Cledger\'s accounting services. He specialises in multi-client portfolio management, tax compliance and forward-looking financial planning, bringing a rigorous, hands-on approach to every engagement and translating complex financial data into clear, actionable insight.',
    skills: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
        title: 'Financial Reporting',
        desc: 'Clear, structured reports giving directors genuine performance insight',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
        title: 'Statutory Accounts',
        desc: 'Accurate preparation and filing for all UK business types',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        title: 'Tax Compliance',
        desc: 'Full management of all tax obligations, handled proactively year-round',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
        title: 'Financial Planning',
        desc: 'Forward-looking analysis to support confident business decisions',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
        title: 'Day-to-Day Accounting',
        desc: 'Ongoing support keeping your books current and accurate',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>,
        title: 'HMRC & Regulatory',
        desc: 'All dealings with HMRC and Companies House handled professionally',
      },
    ],
  },
  {
    photo: null,
    initials: 'AS',
    name: 'Ali Sajjad',
    role: 'Co-Founder',
    tags: ['ACMA', 'MAAT', 'MSc Business Analytics'],
    bio: 'Ali co-leads Cledger\'s financial strategy, modelling and analytics practice. With international corporate exposure across telecommunications, startups and UK accounting environments, he brings deep expertise in large-scale revenue operations, financial modelling and data-driven business analytics.',
    skills: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
        title: 'Revenue Management',
        desc: 'Large-scale operations exceeding USD 50M monthly',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
        title: 'Financial Modelling',
        desc: 'Complex models driving strategic and operational decisions',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 118 2.83"/><path d="M22 12A10 10 0 0012 2v10z"/></svg>,
        title: 'Business Analytics',
        desc: 'Data-driven insight for improved financial visibility',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
        title: 'IFRS Reporting',
        desc: 'International financial reporting to the highest standards',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
        title: 'VAT & Payroll',
        desc: 'Reconciliation, compliance and payroll management',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
        title: 'Process Automation',
        desc: 'Streamlining financial operations for efficiency and scale',
      },
    ],
  },
  {
    photo: '/images/muhammad_ammar.jpg',
    initials: 'MA',
    name: 'Muhammad Ammar',
    role: 'Senior Advisor, Financial Strategy & Analytics',
    tags: ['Financial Advisory', 'Analytics', 'Automation', 'Governance'],
    bio: 'Muhammad leads Cledger\'s financial advisory and analytics division, combining deep expertise in FP&A, business intelligence and AI-driven automation. With a strong foundation in governance, audit and executive reporting, he helps clients transform raw financial data into strategic insight, empowering leadership teams to make faster, more confident decisions.',
    skills: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
        title: 'FP&A',
        desc: 'Budgeting, forecasting and variance analysis for leadership teams',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
        title: 'Business Analytics',
        desc: 'KPI frameworks and data models for improved financial visibility',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
        title: 'AI & Automation',
        desc: 'Streamlining financial workflows using intelligent automation',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
        title: 'Governance & Audit',
        desc: 'Internal controls and audit-readiness for regulated environments',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
        title: 'Financial Modelling',
        desc: 'Dynamic models for scenario planning and investment decisions',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
        title: 'Executive Reporting',
        desc: 'Board-ready dashboards and management reports that drive decisions',
      },
    ],
  },
  {
    photo: '/images/dawood.jpg',
    initials: 'MD',
    name: 'Muhammad Dawood',
    role: 'UK Statutory Accounts & Corporation Tax Specialist',
    tags: ['Statutory Accounts', 'CT600 / Corp Tax', 'Companies House', 'Self Assessment', 'VAT Returns', 'CIS Compliance'],
    bio: 'Muhammad specialises in statutory accounts under FRS 102 & FRS 105, Corporation Tax (CT600) filings to HMRC, and Companies House submissions. He handles year-end compliance for sole traders, partnerships and limited companies, ensuring every filing is accurate, on time and fully HMRC-compliant.',
    skills: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
        title: 'Statutory Accounts',
        desc: 'FRS 102 & FRS 105 preparation for all UK business types',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
        title: 'Corporation Tax (CT600)',
        desc: 'Accurate CT600 filings and HMRC submissions, on time',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>,
        title: 'Companies House',
        desc: 'Full compliance submissions and confirmation statements',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><circle cx="12" cy="12" r="1"/></svg>,
        title: 'Self Assessment',
        desc: 'Personal tax returns for directors, sole traders and landlords',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        title: 'VAT & CIS',
        desc: 'VAT returns and CIS compliance managed end-to-end',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
        title: 'Xero & QuickBooks',
        desc: 'Cloud bookkeeping and software-led compliance workflows',
      },
    ],
  },
  {
    photo: '/images/ameer.png',
    initials: 'AH',
    name: 'Ameer Hamza',
    role: 'Senior Financial Consultant, Audit & Compliance',
    tags: ['CA Finalist (ICAP)', 'ADPA', 'M.Com', 'Audit & Compliance'],
    bio: 'Ameer leads Cledger\'s audit, compliance and financial reporting practice. He brings over a decade of hands-on experience across external audit, accounts management and financial advisory, working across property, manufacturing and trading sectors in both Pakistan and the UAE. He specialises in statutory accounts preparation, audit engagements, financial statement review and IFRS compliance, and has delivered MIS and management reporting directly to CFO and director level.',
    skills: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
        title: 'Audit & Assurance',
        desc: 'End-to-end audit engagements to IFRS and ISA standards',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
        title: 'Financial Reporting',
        desc: 'Statutory accounts, MIS packs and variance analysis',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        title: 'Regulatory Compliance',
        desc: 'VAT, tax audits, statutory filings and internal controls',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
        title: 'Property & Project Finance',
        desc: 'CAPEX, OPEX, fixed assets and project cost controls',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
        title: 'Budgeting & Forecasting',
        desc: 'Cash flow projections and working capital planning',
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
        title: 'ERP & Systems',
        desc: 'Oracle ERP, SAP, QuickBooks, Tally and Power BI',
      },
    ],
  },
]

export default function TeamPage() {
  return (
    <main className={styles.page}>
      <div className={styles.heroBar}>
        <div className="wrap">
          <Link href="/" className={styles.back}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Home
          </Link>
          <div className={styles.heroContent}>
            <span className="s-label">Leadership</span>
            <h1 className={styles.h1}>The People Behind Cledger</h1>
            <p className={styles.sub}>
              A team of qualified finance professionals committed to delivering the highest standards
              of financial expertise, precision and strategic insight for every client.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className="wrap">
          <div className={styles.grid}>
            {members.map(m => (
              <div key={m.name} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.glow} aria-hidden />
                  {m.photo ? (
                    <div className={styles.avatarPhoto}>
                      <Image src={m.photo} alt={m.name} fill sizes="76px" style={{ objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div className={styles.avatar}>{m.initials}</div>
                  )}
                  <div className={styles.name}>{m.name}</div>
                  <div className={styles.role}>{m.role}</div>
                  <div className={styles.tags}>
                    {m.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.bio}>{m.bio}</p>
                  <div className={styles.skGrid}>
                    {m.skills.map(s => (
                      <div key={s.title} className={styles.sk}>
                        <span className={styles.skIcon}>{s.icon}</span>
                        <div>
                          <h5>{s.title}</h5>
                          <p>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
