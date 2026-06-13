'use client'
import Image from 'next/image'
import styles from './Hero.module.css'
import CalendlyButton from './CalendlyButton'
import DeadlineChecker from './DeadlineChecker'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const stats = [
  { n: '100+', label: 'UK client accounts delivered' },
  { n: '100%', label: 'HMRC Compliant'                    },
]

const points = [
  'A dedicated named contact who knows your business inside out and is always available when you need them.',
  'Full-spectrum coverage: bookkeeping, tax compliance, planning, and every obligation in between.',
  'Every piece of work reviewed to the highest standard, submitted on time, without exception.',
]

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <Image
        src="/images/hero-background.svg"
        alt="Online accounting services for UK small businesses — Cledger"
        fill
        priority
        className={styles.bgImage}
      />
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
              Clear Books. <br />Clear Numbers. <br /><em>Clear Future.</em>
            </h1>
            <p className={`${styles.sub} fade-in`} style={{ animationDelay: '160ms' }}>
              Bookkeeping, VAT, payroll, and full finance outsourcing for UK small businesses. Delivered remotely by qualified accountants from <strong>£175/month</strong>.
            </p>
            <div className={`${styles.btns} fade-in`} style={{ animationDelay: '240ms' }}>
              <CalendlyButton className="btn btn-gold">Book a Free Consultation</CalendlyButton>
              <button className="btn btn-ghost" onClick={() => scrollTo('services')}>Our Services</button>
            </div>
            <DeadlineChecker />
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
              We operate to the highest professional, technical, and ethical standards, so you can trust
              your financial affairs are always in the best possible hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
