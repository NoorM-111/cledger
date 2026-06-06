'use client'

export default function SoftwareStrip() {

  const items = [
    {
      name: 'Xero',
      logo: (
        <svg height="36" viewBox="0 0 110 36" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="18" fill="#1FC0E7"/>
          <path fill="white" d="M10 12.5l5.5 5.5-5.5 5.5h3.2l3.8-3.8 3.8 3.8H24l-5.5-5.5 5.5-5.5h-3.2l-3.8 3.8-3.8-3.8z"/>
          <circle cx="22" cy="18" r="4.5" fill="none" stroke="white" strokeWidth="2"/>
          <text x="44" y="24" fontSize="22" fontWeight="700" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#1FC0E7">xero</text>
        </svg>
      )
    },
    {
      name: 'QuickBooks',
      logo: (
        <svg height="36" viewBox="0 0 190 36" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="18" fill="#2CA01C"/>
          <circle cx="18" cy="18" r="11" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="18" cy="18" r="4" fill="white"/>
          <circle cx="25" cy="18" r="2.5" fill="white"/>
          <text x="44" y="13" fontSize="9" fontWeight="400" fontFamily="Arial,sans-serif" fill="#9CA3AF">intuit</text>
          <text x="44" y="27" fontSize="17" fontWeight="800" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">QuickBooks</text>
        </svg>
      )
    },
    {
      name: 'Sage',
      logo: (
        <svg height="36" viewBox="0 0 90 36" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="30" fontSize="32" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#00D639">sage</text>
        </svg>
      )
    },
    {
      name: 'FreeAgent',
      logo: (
        <svg height="36" viewBox="0 0 160 36" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="28" fontSize="24" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#E8452C">free</text>
          <text x="68" y="28" fontSize="24" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">agent</text>
        </svg>
      )
    },
    {
      name: 'Dext',
      logo: (
        <svg height="36" viewBox="0 0 110 36" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="2" width="32" height="32" rx="7" fill="#FF4F00"/>
          <text x="8" y="25" fontSize="18" fontWeight="900" fontFamily="Arial,sans-serif" fill="white">D</text>
          <text x="42" y="28" fontSize="24" fontWeight="800" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">dext</text>
        </svg>
      )
    },
    {
      name: 'HMRC MTD',
      logo: (
        <svg height="36" viewBox="0 0 130 36" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="2" width="32" height="32" rx="4" fill="#005EA5"/>
          <text x="4" y="16" fontSize="8" fontWeight="700" fontFamily="Arial,sans-serif" fill="white">GOV</text>
          <text x="4" y="27" fontSize="8" fontWeight="700" fontFamily="Arial,sans-serif" fill="white">.UK</text>
          <text x="42" y="16" fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif" fill="#9CA3AF">HMRC</text>
          <text x="42" y="30" fontSize="14" fontWeight="800" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">Making Tax Digital</text>
        </svg>
      )
    },
  ]

  const doubled = [...items, ...items]

  return (
    <section style={{
      background: '#0B1222',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      borderBottom: '1px solid rgba(201,168,76,0.15)',
      padding: '2.5rem 0',
    }}>
      <p style={{
        textAlign: 'center',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: '#8a94a8',
        textTransform: 'uppercase',
        marginBottom: '2rem',
        fontFamily: 'Sora, sans-serif',
      }}>
        Tools &amp; Platforms We Work With
      </p>

      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'nowrap',
            width: 'max-content',
            animation: 'softwareScroll 30s linear infinite',
          }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 56px',
                flexShrink: 0,
                height: '60px',
                opacity: 0.85,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes softwareScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
