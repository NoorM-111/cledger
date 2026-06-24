import styles from './CTA.module.css'
import CalendlyButton from './CalendlyButton'

export default function CTA() {
  return (
    <section className={styles.section} id="cta">
      <div className="wrap">
        <div className={styles.card}>
          <span className={styles.eyebrow}>Get Started</span>
          <h2 className={styles.heading}>
            Ready to Get Your<br />Finances in <em>Clear Order?</em>
          </h2>
          <p className={styles.sub}>
            Book a free, no-obligation consultation. We will take the time to understand your business and show you
            exactly how Cledger can bring clarity, confidence and real value to your finances.
          </p>
          <div className={styles.btns}>
            <CalendlyButton className="btn btn-navy">Book a Free Consultation</CalendlyButton>
            <a href="tel:+447774002712" className="btn btn-ghost">Call Us Today</a>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:info@cledger.co.uk" className={styles.contactVal}>info@cledger.co.uk</a>
            </div>
            <div className={styles.sep} aria-hidden />
            <div className={styles.contact}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:+447774002712" className={styles.contactVal}>+44 7774 002712</a>
            </div>
            <div className={styles.sep} aria-hidden />
            <div className={styles.contact}>
              <span className={styles.contactLabel}>Response</span>
              <span className={styles.contactVal}>Within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
