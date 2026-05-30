'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import CalendlyButton from './CalendlyButton'

const links = [
  { label: 'Services',    id: 'services',  href: null       },
  { label: 'Why Cledger', id: 'why',       href: null       },
  { label: 'Sectors',     id: 'sectors',   href: null       },
  { label: 'Our Team',    id: 'team',      href: null       },
  { label: 'Pricing',     id: 'pricing',   href: '/pricing' },
  { label: 'Contact',     id: 'contact',   href: null       },
]

function scrollTo(id: string) {
  if (window.location.pathname !== '/') {
    window.location.href = `/#${id}`
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen]         = useState(false)
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
                {l.href ? (
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                ) : (
                  <button onClick={() => scrollTo(l.id)}>{l.label}</button>
                )}
              </li>
            ))}
          </ul>
          <CalendlyButton className="btn btn-navy" style={{ fontFamily: 'inherit' }}>
            Free Consultation
          </CalendlyButton>
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
            l.href
              ? <Link key={l.id} href={l.href} className={styles.mobLink} onClick={() => setOpen(false)}>{l.label}</Link>
              : <button key={l.id} onClick={() => { scrollTo(l.id); setOpen(false) }}>{l.label}</button>
          ))}
          <CalendlyButton className={`${styles.mobCta} btn btn-gold`}>
            Free Consultation
          </CalendlyButton>
        </div>
      )}
    </nav>
  )
}
