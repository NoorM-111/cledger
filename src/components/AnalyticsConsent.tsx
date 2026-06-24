'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const CONSENT_KEY = 'cledger-cookie-consent'

export default function AnalyticsConsent() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const check = () => setConsented(localStorage.getItem(CONSENT_KEY) === 'accepted')
    check()
    window.addEventListener(CONSENT_KEY, check)
    window.addEventListener('storage', (e: StorageEvent) => { if (e.key === CONSENT_KEY) check() })
    return () => {
      window.removeEventListener(CONSENT_KEY, check)
    }
  }, [])

  if (!consented) return null

  return (
    <>
      <Script
        id="gtag-js"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18199125035"
        strategy="afterInteractive"
      />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18199125035');
        `}
      </Script>
    </>
  )
}
