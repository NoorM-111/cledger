import styles from './Credentials.module.css'

const creds = [
  { icon: '🎯', title: 'Technical Excellence', desc: 'Every engagement is handled with rigour, precision and a thorough understanding of current UK financial regulations and requirements.' },
  { icon: '🤝', title: 'Ethical Standards',    desc: 'We operate with complete integrity and transparency — always acting in our clients\' best interests and never cutting corners on quality.' },
  { icon: '📅', title: 'Regulatory Compliance',desc: 'All work is fully compliant with HMRC requirements, Companies House obligations and current UK accounting standards.' },
  { icon: '🔒', title: 'Confidentiality',      desc: 'Your financial information is treated with the highest level of discretion, handled under strict data protection principles at all times.' },
]

export default function Credentials() {
  return (
    <section className="bg-navy" style={{ padding: '80px 0' }}>
      <div className="wrap">
        <div className={styles.twoCol}>
          <div>
            <span className="s-label" style={{ color: 'var(--gold-light)' }}>Our Credentials</span>
            <h2 className="s-h" style={{ color: 'var(--white)' }}>Our Commitment to<br />Professional Excellence</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.78, marginBottom: 20 }}>
              We are proud to operate to the highest professional, technical and ethical standards in the UK financial
              services industry. Our commitment to excellence is not a marketing statement — it is the foundation on
              which every client relationship is built.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.78 }}>
              We believe that a firm&apos;s credentials are best demonstrated not through certificates on a wall, but through
              the quality of the work it delivers and the trust its clients place in it — year after year.
            </p>
          </div>
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
      </div>
    </section>
  )
}
