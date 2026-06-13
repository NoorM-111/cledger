'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2rem)',
        maxWidth: '720px',
        background: '#0B1222',
        border: '1px solid rgba(201,168,76,0.3)',
        borderRadius: '12px',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        zIndex: 9999,
        flexWrap: 'wrap',
      }}
    >
      <p style={{ color: '#CBD5E1', fontSize: '14px', margin: 0, flex: 1, minWidth: '240px' }}>
        We use cookies to improve your experience and analyse site traffic. See our{' '}
        <a
          href="/privacy"
          style={{ color: '#C9A84C', textDecoration: 'underline' }}
        >
          Privacy Policy
        </a>{' '}
        for details.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'transparent',
            color: '#94A3B8',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '8px',
            border: 'none',
            background: '#C9A84C',
            color: '#0B1222',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
