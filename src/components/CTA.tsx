import { Mail, Phone, MapPin } from 'lucide-react'
import styles from './CTA.module.css'
import CalendlyButton from './CalendlyButton'

const ICON = { size: 18, strokeWidth: 1.5, color: '#C9A84C' }

export default function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className="wrap">
        <div className={styles.inner}>
          <span className="s-label" style={{ color: 'var(--gold-light)' }}>Get in Touch</span>
          <h2 className={styles.h2}>Ready to Get Your<br />Finances in Clear Order?</h2>
          <p className={styles.sub}>
            Book a free, no-obligation consultation. We will take the time to understand your business and show you
            exactly how Cledger can bring clarity, confidence and real value to your finances.
          </p>
          <div className={styles.btns}>
            <CalendlyButton className="btn btn-gold">Book a Free Consultation</CalendlyButton>
            <a href="tel:+447774002712" className="btn btn-ghost">Call Us Today</a>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <div className={styles.cIcon}><Mail {...ICON} /></div>
              <div>
                <div className={styles.cLabel}>Email us</div>
                <div className={styles.cVal}>info@cledger.co.uk</div>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.cIcon}><Phone {...ICON} /></div>
              <div>
                <div className={styles.cLabel}>Call us</div>
                <div className={styles.cVal}>+44 7774 002712</div>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.cIcon}><MapPin {...ICON} /></div>
              <div>
                <div className={styles.cLabel}>Registered</div>
                <div className={styles.cVal}>United Kingdom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
