'use client'
import { useState, useEffect } from 'react'
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
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="wrap">
        <div className={styles.inner}>
          <button className={styles.logo} onClick={() => scrollTo('hero')}>
            <div className={styles.logoMark}><span>C</span></div>
            <span className={styles.logoText}>Cledger<em>.</em></span>
          </button>

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

          <button
            className={styles.ham}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span className={open ? styles.hamOpen1 : ''} />
            <span className={open ? styles.hamOpen2 : ''} />
            <span className={open ? styles.hamOpen3 : ''} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mob}>
          {links.map(l => (
            <button key={l.id} onClick={() => { scrollTo(l.id); setOpen(false) }}>
              {l.label}
            </button>
          ))}
          <button
            className={`${styles.mobCta} btn btn-gold`}
            onClick={() => { scrollTo('contact'); setOpen(false) }}
          >
            Free Consultation
          </button>
        </div>
      )}
    </nav>
  )
}
