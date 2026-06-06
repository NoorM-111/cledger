'use client'
import styles from './Hero.module.css'
import CalendlyButton from './CalendlyButton'
import LedgerAnimation from '@/components/animations/LedgerAnimation'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const stats = [
  { n: '100+', label: 'Client Accounts' },
  { n: '100%', label: 'HMRC Compliant' },
  { n: '5★',   label: 'Client Rating'  },
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
              Online Accountants for UK Small Businesses
            </div>
            <h1 className={`${styles.h1} fade-in`} style={{ animationDelay: '80ms' }}>
              Clear Books.<br />Clear Numbers.<br /><em>Clear Future.</em>
            </h1>
            <p className={`${styles.sub} fade-in`} style={{ animationDelay: '160ms' }}>
              Qualified UK accountants. Remote delivery from <strong>£175/month</strong>, bookkeeping, VAT, payroll and full finance outsourcing at 40% below traditional firm rates.
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LedgerAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
