'use client'
import styles from './Hero.module.css'
import CalendlyButton from './CalendlyButton'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const stats = [
  { n: '100+', label: 'Client Accounts' },
  { n: '100%', label: 'HMRC Compliant' },
  { n: '5★',   label: 'Client Rating'  },
]

const points = [
  'A dedicated named contact who knows your business inside out and is always available when you need them.',
  'Full-spectrum coverage — bookkeeping, tax compliance, planning and every obligation in between.',
  'Every piece of work reviewed to the highest standard, submitted on time, without exception.',
]

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.glow1} aria-hidden />
      <div className={styles.glow2} aria-hidden />
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={`${styles.badge} fade-in`} style={{ animationDelay: '0ms' }}>
              <span className={styles.badgeDot} />
              UK Financial Services Firm
            </div>
            <h1 className={`${styles.h1} fade-in`} style={{ animationDelay: '80ms' }}>
              Clear Books.<br />Clear Numbers.<br /><em>Clear Future.</em>
            </h1>
            <p className={`${styles.sub} fade-in`} style={{ animationDelay: '160ms' }}>
              ACCA-trained UK accountants. Remote delivery from <strong>£175/month</strong> — bookkeeping, VAT, payroll and full finance outsourcing at 40% below traditional firm rates.
            </p>
            <div className={`${styles.btns} fade-in`} style={{ animationDelay: '240ms' }}>
              <CalendlyButton className="btn btn-gold">Book a Free Consultation</CalendlyButton>
              <button className="btn btn-ghost" onClick={() => scrollTo('services')}>Our Services</button>
            </div>
            <div className={`${styles.stats} fade-in`} style={{ animationDelay: '320ms' }}>
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
          <div className={`${styles.card} fade-in`} style={{ animationDelay: '400ms' }}>
            <div className={styles.cardHeader}>
              <span className={styles.cardPill}>Our Commitment</span>
            </div>
            <div className={styles.pts}>
              {points.map((p, i) => (
                <div key={i} className={styles.pt}>
                  <div className={styles.check}>✓</div>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className={styles.divider} />
            <p className={styles.commitText}>
              We operate to the highest professional, technical and ethical standards — so you can trust
              your financial affairs are always in the best possible hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
