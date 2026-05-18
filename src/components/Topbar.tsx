import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className="wrap">
        <div className={styles.inner}>
          <div className={styles.links}>
            <a href="tel:+447774002712">📞 +44 7774 002712</a>
            <a href="mailto:info@cledger.co.uk">✉ info@cledger.co.uk</a>
          </div>
          <span className={styles.right}>Trusted Financial Services for UK Businesses</span>
        </div>
      </div>
    </div>
  )
}
