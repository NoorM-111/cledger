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
const legalLinks = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={styles.logoRow}>
              <span className={styles.logoText}>Cledger<em>.</em></span>
            </div>
            <p className={styles.tag}>Accounting services built on expertise, integrity and genuine client partnership.</p>
            <div className={styles.soc}>
              <a href="https://www.linkedin.com/company/cledger-uk" target="_blank" rel="noopener noreferrer" className={styles.s} aria-label="LinkedIn">in</a>
              <a href="mailto:info@cledger.co.uk" className={styles.s} aria-label="Email">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
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

          <div>
            <h5 className={styles.colTitle}>Legal</h5>
            <ul className={styles.links}>
              {legalLinks.map(l => <li key={l.label}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className={styles.bot}>
          <div>
            <span>© 2026 Cledger Ltd. All rights reserved.</span>
            <p className={styles.legal}>
              Cledger Ltd · Registered in England &amp; Wales, Companies House No. 16208645.
              Registered office: 27 Jeremy Lane, Heckmondwike, WF16 9LT.
              HMRC AML Supervised.
            </p>
          </div>
          <div>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              color: '#B0A892',
              letterSpacing: '0.5px',
            }}>
              Accounting · Tax · Advisory services
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
