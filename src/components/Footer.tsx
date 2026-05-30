import Link from 'next/link'
import styles from './Footer.module.css'

const serviceLinks = ['Bookkeeping','VAT & Tax','Management Accounts','Annual Accounts','Personal Tax','Cashflow Planning']
const moreLinks    = ['Budgeting','Forecasting','Compliance','HMRC Liaison','Company Registration','Financial Statements']
const companyLinks = [
  { label: 'About Cledger', id: 'why'     },
  { label: 'Meet the Team', id: 'team'    },
  { label: 'Sectors',       id: 'sectors' },
  { label: 'Why Cledger',   id: 'why'     },
  { label: 'Contact Us',    id: 'contact' },
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
            <p className={styles.tag}>Clear books. Clear numbers. Clear future. Financial services built on expertise, integrity and genuine client partnership.</p>
            <div className={styles.soc}>
              <a href="https://www.linkedin.com/company/cledger-uk" target="_blank" rel="noopener noreferrer" className={styles.s} aria-label="LinkedIn">in</a>
              <a href="mailto:info@cledger.co.uk" className={styles.s} aria-label="Email">✉</a>
            </div>
          </div>

          <div>
            <h5 className={styles.colTitle}>Services</h5>
            <ul className={styles.links}>
              {serviceLinks.map(l => <li key={l}><a href="#services">{l}</a></li>)}
            </ul>
          </div>

          <div>
            <h5 className={styles.colTitle}>More Services</h5>
            <ul className={styles.links}>
              {moreLinks.map(l => <li key={l}><a href="#services">{l}</a></li>)}
            </ul>
          </div>

          <div>
            <h5 className={styles.colTitle}>Company</h5>
            <ul className={styles.links}>
              {companyLinks.map(l => <li key={l.label}><a href={`#${l.id}`}>{l.label}</a></li>)}
            </ul>
          </div>
        </div>

        <div className={styles.bot}>
          <span>© 2025 Cledger Ltd. All rights reserved. Registered in England &amp; Wales.</span>
          <div className={styles.botLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
