import styles from './TrustBar.module.css'

const items = [
  '✅ HMRC Compliant',
  '⏱ Deadline Guaranteed',
  '👤 Dedicated Contact',
  '📋 Highest Professional Standards',
  '🔒 Fully Confidential',
]

export default function TrustBar() {
  return (
    <div className={styles.trust}>
      <div className="wrap">
        <div className={styles.inner}>
          {items.map(item => (
            <span key={item} className={styles.item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
