'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Navbar.module.css'
import CalendlyButton from './CalendlyButton'

const links = [
  { label: 'Services',     id: 'services',     page: null            },
  { label: 'Why Cledger',  id: 'why',          page: null            },
  { label: 'Sectors',      id: 'sectors',      page: null            },
  { label: 'Our Team',     id: 'team',         page: null            },
  { label: 'Pricing',      id: 'pricing',      page: '/pricing'      },
  { label: 'Calculators',  id: 'calculators',  page: '/calculators'  },
  { label: 'Contact',      id: 'contact',      page: null            },
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
  const router = useRouter()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  function handleClick(l: typeof links[0]) {
    if (l.page) {
      router.push(l.page)
    } else {
      scrollTo(l.id)
    }
  }

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
                <button onClick={() => handleClick(l)}>{l.label}</button>
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
            <button key={l.id} onClick={() => { handleClick(l); setOpen(false) }}>
              {l.label}
            </button>
          ))}
          <CalendlyButton className={`${styles.mobCta} btn btn-gold`}>
            Free Consultation
          </CalendlyButton>
        </div>
      )}
    </nav>
  )
}
