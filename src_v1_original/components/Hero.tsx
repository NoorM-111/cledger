'use client'
import styles from './Hero.module.css'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const points = [
  'Every client receives a dedicated contact who knows their business, answers their questions and keeps them informed at every stage.',
  'We manage the full spectrum of your financial obligations — from day-to-day accounting through to complex tax compliance and strategic planning.',
  'All work is delivered to the highest professional standards, reviewed carefully before submission and always on time — without exception.',
]

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={`${styles.badge} fade-in`} style={{ animationDelay: '0ms' }}>
              UK Financial Services Firm
            </div>
            <h1 className={`${styles.h1} fade-in`} style={{ animationDelay: '80ms' }}>
              Clear Books.<br />Clear Numbers.<br /><em>Clear Future.</em>
            </h1>
            <p className={`${styles.sub} fade-in`} style={{ animationDelay: '160ms' }}>
              Cledger is a UK financial services firm built on one principle — that every business, regardless of size,
              deserves the same quality of financial expertise, attention and care. We handle your numbers with precision
              so you can focus entirely on what you do best.
            </p>
            <div className={`${styles.btns} fade-in`} style={{ animationDelay: '240ms' }}>
              <button className="btn btn-gold" onClick={() => scrollTo('contact')}>Book a Free Consultation</button>
              <button className="btn btn-ghost" onClick={() => scrollTo('services')}>Our Services</button>
            </div>
          </div>

          <div className={`${styles.card} fade-in`} style={{ animationDelay: '320ms' }}>
            <div className={styles.pts}>
              {points.map((p, i) => (
                <div key={i} className={styles.pt}>
                  <div className={styles.dot} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <p className={styles.commitLabel}>Our Commitment</p>
            <p className={styles.commitText}>
              We are committed to delivering the highest professional, technical and ethical standards in everything we do
              — so our clients can trust that their financial affairs are always in the best possible hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
