'use client'
import styles from './Hero.module.css'
import CalendlyButton from './CalendlyButton'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const stats = [
  { n: '100+', label: 'UK client accounts' },
  { n: '100%', label: 'Compliance rate'     },
  { n: '£0',   label: 'Hidden fees'         },
  { n: '1hr',  label: 'Response time'       },
]

const points = [
  'A dedicated named contact who knows your business inside out and is always available when you need them.',
  'Full-spectrum coverage: bookkeeping, tax compliance, planning, and every obligation in between.',
  'Every piece of work reviewed to the highest standard and submitted on time — helping you avoid penalties and compliance issues.',
]

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <span className={styles.eyebrow}>Online Accountants for UK Small Businesses</span>
            <h1 className={styles.h1}>
              Clear Books.<br />
              Clear Numbers.<br />
              <em>Clear future.</em>
            </h1>
            <p className={styles.sub}>
              Bookkeeping, VAT, payroll, and full finance outsourcing for UK small businesses.
              Delivered remotely by qualified accountants from <strong style={{ color: '#1A1A16', fontWeight: 600 }}>£175/month</strong>.
            </p>
            <div className={styles.btns}>
              <CalendlyButton className="btn btn-navy">Book a Free Consultation</CalendlyButton>
              <button className="btn btn-ghost" onClick={() => scrollTo('services')}>Our Services</button>
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
          <div className={styles.card}>
            <span className={styles.cardLabel}>Our Commitment</span>
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
