'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Services',    id: 'services' },
  { label: 'Why Cledger', id: 'why'      },
  { label: 'Sectors',     id: 'sectors'  },
  { label: 'Our Team',    id: 'team'     },
  { label: 'Contact',     id: 'contact'  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className="wrap">
        <div className={styles.inner}>
          {/* Logo */}
          <button className={styles.logo} onClick={() => scrollTo('hero')}>
            <div className={styles.logoMark}><span>C</span></div>
            <span className={styles.logoText}>Cledger<em>.</em></span>
          </button>

          {/* Desktop menu */}
          <ul className={styles.menu}>
            {links.map(l => (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>

          <button className="btn btn-navy" onClick={() => scrollTo('contact')} style={{ fontFamily: 'inherit' }}>
            Free Consultation
          </button>

          {/* Hamburger */}
          <button
            className={styles.ham}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mob}>
          {links.map(l => (
            <button key={l.id} onClick={() => { scrollTo(l.id); setOpen(false) }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
