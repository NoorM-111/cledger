import Image from 'next/image'
import styles from './Credentials.module.css'

const creds = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
    ),
    title: 'Technical Excellence',
    desc: 'Every engagement is handled with rigour, precision and a thorough understanding of current UK financial regulations and requirements.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    ),
    title: 'Ethical Standards',
    desc: "We operate with complete integrity and transparency, always acting in our clients' best interests and never cutting corners on quality.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    ),
    title: 'Regulatory Compliance',
    desc: 'All work is fully compliant with HMRC requirements, Companies House obligations and current UK accounting standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    ),
    title: 'Confidentiality',
    desc: 'Your financial information is treated with the highest level of discretion, handled under strict data protection principles at all times.',
  },
]

export default function Credentials() {
  return (
    <section className="bg-dark" style={{ padding: '88px 0' }}>
      <div className="wrap">
        <div className={styles.twoCol}>

          {/* LEFT: existing copy + credential cards */}
          <div>
            <span className="s-label s-label-light">Our Credentials</span>
            <h2 className="s-h" style={{ color: '#fff' }}>Our Commitment to<br />Professional Excellence</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, marginBottom: 20 }}>
              We are proud to operate to the highest professional, technical and ethical standards in the UK accounting industry. Our commitment to excellence is not a marketing statement, it is the foundation on
              which every client relationship is built.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.58)', lineHeight: 1.82 }}>
              We believe that a firm&apos;s credentials are best demonstrated not through certificates on a wall, but through
              the quality of the work it delivers and the trust its clients place in it, year after year.
            </p>
            <div className={styles.cards}>
              {creds.map(c => (
                <div key={c.title} className="cc">
                  <div className="cc-icon">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: illustration */}
          <div className={styles.illustration}>
            <Image
              src="/images/credentials-illustration.svg"
              alt="Reviewed ledger sheet with a gold approval seal and fountain pen"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
