import styles from './Team.module.css'

const quals = [
  'Financial Reporting & Compliance',
  'Tax Planning & Advisory',
  'Management Accounting',
  'Cashflow & Financial Planning',
  'Multi-Sector Client Portfolio',
  'HMRC & Regulatory Affairs',
]

const skills = [
  { icon: '📊', title: 'Financial Reporting', desc: 'Clear, structured reports that give directors genuine insight into performance' },
  { icon: '📁', title: 'Statutory Accounts',  desc: 'Accurate preparation and submission for all business types' },
  { icon: '🧾', title: 'Tax Compliance',      desc: 'Full management of all tax obligations, handled proactively year-round' },
  { icon: '📈', title: 'Financial Planning',  desc: 'Forward-looking analysis to support confident business decisions' },
  { icon: '📒', title: 'Day-to-Day Accounting',  desc: 'Ongoing support so your books are always current and accurate' },
  { icon: '🏛️', title: 'Government & Regulatory', desc: 'All dealings with HMRC and Companies House handled professionally' },
]

export default function Team() {
  return (
    <section id="team" style={{ padding: '96px 0' }}>
      <div className="wrap">
        <div className={styles.twoCol}>
          {/* Profile card */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.avatar}>NM</div>
              <div className={styles.name}>Noor Muhammad</div>
              <div className={styles.role}>Founder &amp; Principal</div>
            </div>
            <div className={styles.cardBody}>
              {quals.map(q => (
                <div key={q} className={styles.qual}>
                  <div className={styles.dot} />
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <span className="s-label">Meet the Founder</span>
            <h2 className="s-h">The Person Behind<br />Every Number</h2>
            <p className={styles.bio}>
              Noor is the founder of Cledger and leads client delivery across the firm&apos;s full range of financial
              services. He brings a rigorous, hands-on approach to every engagement — ensuring that each client receives
              work that is not only technically accurate but genuinely useful to their business.
            </p>
            <p className={styles.bio}>
              He specialises in multi-client financial management, working across a diverse portfolio of UK businesses to
              deliver clear monthly reporting, comprehensive tax compliance and forward-looking financial planning. His
              particular strength lies in translating complex financial information into straightforward insight that
              business owners and directors can act on immediately.
            </p>
            <p className={styles.bio}>
              Noor&apos;s philosophy is simple: every client, regardless of their size or complexity, deserves the same level
              of care, precision and professional commitment. It is this standard — applied consistently and without
              compromise — that defines the way Cledger works.
            </p>
            <div className={styles.skGrid}>
              {skills.map(s => (
                <div key={s.title} className={styles.sk}>
                  <span className={styles.skIcon}>{s.icon}</span>
                  <div>
                    <h5>{s.title}</h5>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
