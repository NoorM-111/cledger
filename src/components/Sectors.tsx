import { Stethoscope, ScanFace, HardHat, Home, Palette, Scale, ShoppingCart, Rocket } from 'lucide-react'
import styles from './Sectors.module.css'

const sectors = [
  { n: '01', icon: <Stethoscope size={20} strokeWidth={1.5} />, label: 'Healthcare Professionals' },
  { n: '02', icon: <ScanFace    size={20} strokeWidth={1.5} />, label: 'Dental Practices'         },
  { n: '03', icon: <HardHat     size={20} strokeWidth={1.5} />, label: 'Construction & Trades'    },
  { n: '04', icon: <Home        size={20} strokeWidth={1.5} />, label: 'Property & Landlords'     },
  { n: '05', icon: <Palette     size={20} strokeWidth={1.5} />, label: 'Creative & Media'         },
  { n: '06', icon: <Scale       size={20} strokeWidth={1.5} />, label: 'Legal Services'           },
  { n: '07', icon: <ShoppingCart size={20} strokeWidth={1.5} />, label: 'Retail & eCommerce'     },
  { n: '08', icon: <Rocket      size={20} strokeWidth={1.5} />, label: 'Startups & SMEs'          },
]

export default function Sectors() {
  return (
    <section id="sectors" style={{ padding: '96px 0', background: '#F7F4EC' }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: '56px' }}>
          <span className="s-label">Industries We Serve</span>
          <h2 className="s-h">Sector Knowledge That<br />Makes a Real Difference</h2>
          <p className="s-p">
            We bring deep, practical experience across a wide range of UK industries, understanding the unique
            compliance requirements and financial pressures each sector faces.
          </p>
        </div>
        <div className={styles.grid}>
          {sectors.map(s => (
            <div key={s.label} className={styles.item}>
              <span className={styles.num}>{s.n}</span>
              <span className={styles.icon}>{s.icon}</span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
