'use client'

import { useState, useEffect } from 'react'

const CONSENT_KEY = 'cledger-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    window.dispatchEvent(new Event(CONSENT_KEY))
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    window.dispatchEvent(new Event(CONSENT_KEY))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 32px)',
      maxWidth: 680,
      zIndex: 9100,
    }}>
      <div style={{
        background: '#1A1A17',
        border: '1px solid rgba(201,168,76,0.34)',
        borderRadius: 14,
        padding: '20px 22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 18,
        flexWrap: 'wrap',
        boxShadow: '0 24px 60px -24px rgba(0,0,0,0.55)',
      }}>
        <p style={{
          fontFamily: "'Hanken Grotesk', 'Inter', sans-serif",
          fontSize: 13.5,
          lineHeight: 1.6,
          color: '#C7C1B2',
          margin: 0,
          flex: 1,
          minWidth: 240,
        }}>
          We use cookies to improve your experience and analyse site traffic. See our{' '}
          <a href="/privacy" style={{ color: '#C9A84C', textDecoration: 'underline', textUnderlineOffset: 2 }}>
            Privacy Policy
          </a>{' '}
          for details.
        </p>
        <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              fontFamily: "'Hanken Grotesk', 'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 13,
              padding: '9px 16px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'transparent',
              color: '#9E988A',
              cursor: 'pointer',
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              fontFamily: "'Hanken Grotesk', 'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              padding: '9px 20px',
              borderRadius: 8,
              border: 'none',
              background: '#C9A84C',
              color: '#1A1A17',
              cursor: 'pointer',
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
