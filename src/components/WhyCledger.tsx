import styles from './WhyCledger.module.css'

const reasons = [
  { n: '01', title: 'Precision You Can Rely On', desc: 'Every piece of work that leaves Cledger is reviewed to the highest standard. Accuracy is not an aspiration, it is our baseline, and we never compromise on it.' },
  { n: '02', title: 'Deep Sector Understanding', desc: 'We work across a wide range of UK industries, bringing specialist knowledge and a genuine understanding of the financial pressures your sector faces.' },
  { n: '03', title: 'Always Ahead of Deadlines', desc: 'We manage your obligations proactively, keeping you ahead of upcoming deadlines and submissions so nothing is left to chance.' },
  { n: '04', title: 'A Long-Term Financial Partner', desc: 'Our clients come to us for clarity, guidance and a firm they can trust to grow alongside them, not just someone to process numbers once a year.' },
]

const steps = [
  { n: '01', title: 'Initial consultation',  desc: 'We take the time to understand your business, your goals and what you need from an accountant.' },
  { n: '02', title: 'A clear proposal',      desc: 'A straightforward, fixed-fee proposal with no hidden costs or unexpected extras.' },
  { n: '03', title: 'Seamless transition',   desc: 'We handle the handover from your previous accountant, managing every detail for you.' },
  { n: '04', title: 'Ongoing partnership',   desc: 'Monthly reporting, proactive communication and a named contact, always available when you need them.' },
]

const mockupRows = [
  { label: 'Revenue (Oct)',  val: '£24,310', positive: true  },
  { label: 'Gross margin',   val: '62.4%',   positive: true  },
  { label: 'CT600 deadline', val: 'On track', positive: true },
]

const statusItems = [
  { color: '#7EC986', label: 'CL-0142 · Payroll — October · Complete' },
  { color: '#7EC986', label: 'VAT return Q3 · Filed'                  },
  { color: '#C9A84C', label: 'CT600 deadline · On track · 14 wks'     },
]

export default function WhyCledger() {
  return (
    <>
      <section id="why" className={styles.darkSection}>
        <div className="wrap">
          <div className={styles.twoCol}>
            <div>
              <span className={styles.eyebrow}>Why Cledger</span>
              <h2 className={styles.heading}>
                A Financial Partner You Can <em>Genuinely Rely On</em>
              </h2>
              <p className={styles.intro}>
                We believe that great accounting goes far beyond compliance. It is about understanding your business,
                anticipating your needs and giving you the financial clarity to make better decisions, every single month.
              </p>
              <div className={styles.pts}>
                {reasons.map(r => (
                  <div key={r.n} className={styles.pt}>
                    <span className={styles.num}>{r.n}</span>
                    <div>
                      <h4>{r.title}</h4>
                      <p>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.mockup}>
              <div className={styles.mockupHeader}>
                <span className={styles.mockupTitle}>Monthly Overview · Oct 2025</span>
                <span className={styles.mockupDot} />
              </div>
              <div className={styles.mockupRows}>
                {mockupRows.map(r => (
                  <div key={r.label} className={styles.mockupRow}>
                    <span className={styles.mockupLabel}>{r.label}</span>
                    <span className={`${styles.mockupVal} ${r.positive ? styles.positive : ''}`}>{r.val}</span>
                  </div>
                ))}
              </div>
              <div className={styles.mockupStatusRow}>
                {statusItems.map(s => (
                  <div key={s.label} className={styles.mockupStatus}>
                    <span className={styles.statusDot} style={{ background: s.color }} />
                    <span className={styles.mockupStatusLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.procSection}>
        <div className="wrap">
          <div className={styles.procInner}>
            <span className={styles.procEyebrow}>The Process</span>
            <h2 className={styles.procHeading}>Up and running in days, not weeks</h2>
            <div className={styles.steps}>
              {steps.map(s => (
                <div key={s.n} className={styles.procStep}>
                  <span className={styles.procDot}>{s.n}</span>
                  <div>
                    <h5>{s.title}</h5>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
