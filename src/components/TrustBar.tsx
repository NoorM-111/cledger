import styles from './TrustBar.module.css'

const items = [
  {
    label: 'HMRC Compliant',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
  },
  {
    label: 'Deadline Guaranteed',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
  },
  {
    label: 'Dedicated Contact',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
  },
  {
    label: 'Highest Professional Standards',
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
    ),
  },
  {
    label: 'Fully Confidential',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <div className={styles.trust}>
      <div className="wrap">
        <div className={styles.inner}>
          {items.map(item => (
            <div key={item.label} className={styles.item}>
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
