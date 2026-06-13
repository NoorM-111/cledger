import Link from 'next/link'
import styles from './Footer.module.css'

const serviceLinks = [
  { label: 'Bookkeeping',             href: '/#services' },
  { label: 'VAT & Tax',               href: '/#services' },
  { label: 'Management Accounts',     href: '/#services' },
  { label: 'Annual Accounts',         href: '/#services' },
  { label: 'Personal Tax',            href: '/#services' },
  { label: 'Cashflow Planning',       href: '/#services' },
]
const moreLinks = [
  { label: 'Budgeting',               href: '/#services' },
  { label: 'Forecasting',             href: '/#services' },
  { label: 'Compliance',              href: '/#services' },
  { label: 'HMRC Liaison',            href: '/#services' },
  { label: 'Company Registration',    href: '/#services' },
  { label: 'Financial Statements',    href: '/#services' },
]
const companyLinks = [
  { label: 'About Cledger', href: '/#why'     },
  { label: 'Meet the Team', href: '/team'     },
  { label: 'Sectors',       href: '/#sectors' },
  { label: 'Why Cledger',   href: '/#why'     },
  { label: 'Pricing',       href: '/pricing'  },
  { label: 'Contact Us',    href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={styles.logoRow}>
              <div className={styles.logoMark}><span>C</span></div>
              <span className={styles.logoText}>Cledger<em>.</em></span>
            </div>
            <p className={styles.tag}>Accounting services built on expertise, integrity and genuine client partnership.</p>
            <div className={styles.soc}>
              <a href="https://www.linkedin.com/company/cledger-uk" target="_blank" rel="noopener noreferrer" className={styles.s} aria-label="LinkedIn">in</a>
              <a href="mailto:info@cledger.co.uk" className={styles.s} aria-label="Email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className={styles.colTitle}>Services</h5>
            <ul className={styles.links}>
              {serviceLinks.map(l => <li key={l.label}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h5 className={styles.colTitle}>More Services</h5>
            <ul className={styles.links}>
              {moreLinks.map(l => <li key={l.label}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h5 className={styles.colTitle}>Company</h5>
            <ul className={styles.links}>
              {companyLinks.map(l => <li key={l.label}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className={styles.bot}>
          <div>
            <span>© 2026 Cledger Ltd. All rights reserved.</span>
            <p className={styles.legal}>
              Cledger Ltd is registered in England &amp; Wales, company no. 16208645.
              Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.
              Supervised by HMRC for anti-money laundering purposes.
            </p>
          </div>
          <div className={styles.botLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
