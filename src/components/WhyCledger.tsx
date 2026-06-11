import Image from 'next/image'
import styles from './WhyCledger.module.css'

const reasons = [
  { n: '01', title: 'Precision You Can Rely On', desc: 'Every piece of work that leaves Cledger is reviewed to the highest standard. Accuracy is not an aspiration, it is our baseline, and we never compromise on it.' },
  { n: '02', title: 'Deep Sector Understanding', desc: 'We work across a wide range of UK industries, bringing specialist knowledge and a genuine understanding of the financial pressures your sector faces.' },
  { n: '03', title: 'Always Ahead of Deadlines', desc: 'We manage your obligations proactively, you will never be chasing us for updates or worrying about a missed submission or regulatory deadline.' },
  { n: '04', title: 'A Long-Term Financial Partner', desc: 'Our clients come to us for clarity, guidance and a firm they can trust to grow alongside them, not just someone to process numbers once a year.' },
]

const steps = [
  { n: 1, title: 'Initial Consultation',   desc: 'We take the time to understand your business, your goals and what you need from an accountant.' },
  { n: 2, title: 'A Clear Proposal',       desc: 'You receive a straightforward, fixed-fee proposal with no hidden costs or unexpected extras.' },
  { n: 3, title: 'Seamless Transition',    desc: 'We handle the handover from your previous accountant, managing every detail so the process is effortless for you.' },
  { n: 4, title: 'Ongoing Partnership',    desc: 'Monthly reporting, proactive communication and a named contact, always available when you need them.' },
  { n: 5, title: 'Regular Reviews',        desc: 'We meet regularly to review performance, plan ahead and ensure your financial position is always optimised.' },
]

export default function WhyCledger() {
  return (
    <section id="why" style={{ padding: '96px 0', background: 'var(--surface)' }}>
      <div className="wrap">
        <div className={styles.twoCol}>

          {/* LEFT: illustration */}
          <div className={styles.illustration}>
            <Image
              src="/images/why-cledger-illustration.svg"
              alt="Accountant's workspace with laptop, reports and charts"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* RIGHT: existing content */}
          <div>
            <span className="s-label">Why Cledger</span>
            <h2 className="s-h">A Financial Partner You Can Genuinely Rely On</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'var(--text)', lineHeight: 1.82, marginBottom: 8 }}>
              We believe that great accounting goes far beyond compliance. It is about understanding your business,
              anticipating your needs and giving you the financial clarity to make better decisions, every single month.
            </p>
            <div className={styles.pts}>
              {reasons.map(r => (
                <div key={r.n} className={styles.pt}>
                  <div className={styles.num}>{r.n}</div>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.procCard} style={{ marginTop: '40px' }}>
              <h3>How we work with a new client</h3>
              {steps.map((s, i) => (
                <div key={s.n}>
                  <div className={styles.procStep}>
                    <div className={styles.procDot}>{s.n}</div>
                    <div>
                      <h5>{s.title}</h5>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                  {i < steps.length - 1 && <div className={styles.procLine} />}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
