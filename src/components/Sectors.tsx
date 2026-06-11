import { Stethoscope, ScanFace, HardHat, Home, Palette, Scale, ShoppingCart, Rocket } from 'lucide-react'
import styles from './Sectors.module.css'

const ICON_STYLE = { color: '#C9A84C', strokeWidth: 1.5 }

const sectors = [
  { icon: <Stethoscope size={28} {...ICON_STYLE} />, label: 'Healthcare Professionals' },
  { icon: <ScanFace    size={28} {...ICON_STYLE} />, label: 'Dental Practices'         },
  { icon: <HardHat     size={28} {...ICON_STYLE} />, label: 'Construction & Trades'    },
  { icon: <Home        size={28} {...ICON_STYLE} />, label: 'Property & Landlords'     },
  { icon: <Palette     size={28} {...ICON_STYLE} />, label: 'Creative & Media'         },
  { icon: <Scale       size={28} {...ICON_STYLE} />, label: 'Legal Services'           },
  { icon: <ShoppingCart size={28} {...ICON_STYLE} />, label: 'Retail & eCommerce'     },
  { icon: <Rocket      size={28} {...ICON_STYLE} />, label: 'Startups & SMEs'          },
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
              <div className="sec-e">{s.icon}</div>
              <h4>{s.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
