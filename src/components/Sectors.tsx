import styles from './Sectors.module.css'

const sectors = [
  { e: '🏥', label: 'Healthcare Professionals' },
  { e: '🦷', label: 'Dental Practices'         },
  { e: '🏗️', label: 'Construction & Trades'    },
  { e: '🏠', label: 'Property & Landlords'     },
  { e: '🎨', label: 'Creative & Media'         },
  { e: '⚖️', label: 'Legal Services'           },
  { e: '🛒', label: 'Retail & eCommerce'       },
  { e: '🚀', label: 'Startups & SMEs'          },
]

export default function Sectors() {
  return (
    <section id="sectors" style={{ padding: '96px 0', background: '#fff' }}>
      <div className="wrap">
        <div className="center">
          <span className="s-label">Industries We Serve</span>
          <h2 className="s-h">Sector Knowledge That<br />Makes a Real Difference</h2>
          <p className="s-p">
            We bring deep, practical experience across a wide range of UK industries, understanding the unique
            compliance requirements and financial pressures each sector faces.
          </p>
        </div>
        <div className={styles.grid}>
          {sectors.map(s => (
            <div key={s.label} className="sec">
              <div className="sec-e">{s.e}</div>
              <h4>{s.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
