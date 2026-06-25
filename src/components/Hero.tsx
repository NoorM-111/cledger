'use client'
import styles from './Hero.module.css'
import CalendlyButton from './CalendlyButton'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const stats = [
  { n: '100+', label: 'Client accounts delivered' },
  { n: '100%', label: 'HMRC compliant'             },
  { n: '£0',   label: 'Setup fees'                 },
  { n: '1hr',  label: 'Slack response, UK hours'   },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="wrap">
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot}>●</span>
            Online accountants for UK small businesses
          </span>
          <h1 className={styles.h1}>
            Clear books.<br />
            Clear numbers.<br />
            <em>Clear future.</em>
          </h1>
          <p className={styles.sub}>
            Bookkeeping, VAT, payroll and full finance outsourcing for UK small businesses — delivered remotely by qualified accountants from <strong>£175/month</strong>.
          </p>
          <div className={styles.btns}>
            <CalendlyButton className="btn btn-navy">Book a free consultation →</CalendlyButton>
            <button className="btn btn-ghost" onClick={() => scrollTo('pricing')}>See pricing</button>
          </div>
          <div className={styles.stats}>
            {stats.map((s, i) => (
              <div key={s.n} className={styles.statItem}>
                {i > 0 && <div className={styles.statDiv} />}
                <div className={styles.stat}>
                  <span className={styles.statN}>{s.n}</span>
                  <span className={styles.statL}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
