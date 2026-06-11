import { Phone, Mail } from 'lucide-react'
import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className="wrap">
        <div className={styles.inner}>
          <div className={styles.links}>
            <a href="tel:+447774002712"><Phone size={13} strokeWidth={1.5} style={{ color: '#C9A84C', flexShrink: 0 }} /> +44 7774 002712</a>
            <a href="mailto:info@cledger.co.uk"><Mail size={13} strokeWidth={1.5} style={{ color: '#C9A84C', flexShrink: 0 }} /> info@cledger.co.uk</a>
          </div>
          <span className={styles.right}>Trusted Accounting Services for UK Businesses</span>
        </div>
      </div>
    </div>
  )
}
