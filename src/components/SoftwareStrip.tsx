'use client'

export default function SoftwareStrip() {
  const items = [
    {
      name: 'Xero',
      logo: (
        <svg height="32" viewBox="0 0 90 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#13B5EA"/>
          <path fill="white" d="M9 11l4.2 5L9 21h2.8l2.7-3.4L17.2 21H20l-4.2-5 4.2-5h-2.8l-2.7 3.4L11.8 11z"/>
          <circle cx="22.5" cy="16" r="4" fill="none" stroke="white" strokeWidth="1.8"/>
          <text x="38" y="22" fontSize="20" fontWeight="700" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#13B5EA">xero</text>
        </svg>
      )
    },
    {
      name: 'QuickBooks',
      logo: (
        <svg height="36" viewBox="0 0 180 36" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="18" fill="#2CA01C"/>
          <text x="9" y="24" fontSize="16" fontWeight="900" fontFamily="Arial,sans-serif" fill="white">QB</text>
          <text x="44" y="13" fontSize="9" fontWeight="400" fontFamily="Arial,sans-serif" fill="#9CA3AF">intuit</text>
          <text x="44" y="27" fontSize="16" fontWeight="800" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">QuickBooks</text>
        </svg>
      )
    },
    {
      name: 'Sage',
      logo: (
        <svg height="32" viewBox="0 0 90 32" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="26" fontSize="28" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#00D639">sage</text>
        </svg>
      )
    },
    {
      name: 'FreeAgent',
      logo: (
        <svg height="32" viewBox="0 0 150 32" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="25" fontSize="22" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#E8452C">free</text>
          <text x="62" y="25" fontSize="22" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">agent</text>
        </svg>
      )
    },
    {
      name: 'FreshBooks',
      logo: (
        <svg height="32" viewBox="0 0 170 32" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="25" fontSize="22" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#22C55E">Fresh</text>
          <text x="86" y="25" fontSize="22" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">Books</text>
        </svg>
      )
    },
    {
      name: 'IRIS',
      logo: (
        <svg height="32" viewBox="0 0 80 32" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="26" fontSize="28" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#4A90D9">IRIS</text>
        </svg>
      )
    },
    {
      name: 'CCH',
      logo: (
        <svg height="32" viewBox="0 0 70 32" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="26" fontSize="28" fontWeight="900" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#E53E3E">CCH</text>
        </svg>
      )
    },
    {
      name: 'Dext',
      logo: (
        <svg height="32" viewBox="0 0 90 32" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="2" width="28" height="28" rx="6" fill="#FF4F00"/>
          <text x="6" y="22" fontSize="16" fontWeight="900" fontFamily="Arial,sans-serif" fill="white">D</text>
          <text x="36" y="25" fontSize="22" fontWeight="800" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">dext</text>
        </svg>
      )
    },
    {
      name: 'Slack',
      logo: (
        <svg height="32" viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0,4) scale(0.85)">
            <path fill="#E01E5A" d="M6 14.5a2.5 2.5 0 010-5h2.5v2.5a2.5 2.5 0 01-2.5 2.5zm0 2.5a2.5 2.5 0 012.5 2.5v6.25a2.5 2.5 0 01-5 0V19.5A2.5 2.5 0 016 17z"/>
            <path fill="#36C5F0" d="M17.5 6a2.5 2.5 0 015 0v2.5h-2.5A2.5 2.5 0 0117.5 6zm-2.5 0a2.5 2.5 0 01-2.5 2.5H6.25a2.5 2.5 0 010-5H15A2.5 2.5 0 0115 6z"/>
            <path fill="#2EB67D" d="M26 17.5a2.5 2.5 0 010 5h-2.5V20A2.5 2.5 0 0126 17.5zM23.5 15a2.5 2.5 0 012.5-2.5h6.25a2.5 2.5 0 010 5H26A2.5 2.5 0 0123.5 15z"/>
            <path fill="#ECB22E" d="M14.5 26a2.5 2.5 0 01-5 0v-2.5h2.5a2.5 2.5 0 012.5 2.5zm2.5 0a2.5 2.5 0 012.5-2.5H25.75a2.5 2.5 0 010 5H19.5A2.5 2.5 0 0117 26z"/>
          </g>
          <text x="36" y="24" fontSize="22" fontWeight="700" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#F8F5EE">slack</text>
        </svg>
      )
    },
    {
      name: 'Excel',
      logo: (
        <svg height="32" viewBox="0 0 110 32" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="2" width="28" height="28" rx="4" fill="#217346"/>
          <text x="5" y="22" fontSize="14" fontWeight="900" fontFamily="Arial,sans-serif" fill="white">XL</text>
          <text x="36" y="15" fontSize="9" fontWeight="400" fontFamily="Arial,sans-serif" fill="#9CA3AF">Microsoft</text>
          <text x="36" y="27" fontSize="13" fontWeight="700" fontFamily="'Helvetica Neue',Arial,sans-serif" fill="#217346">Excel</text>
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
      overflow: 'hidden',
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
            animation: 'softwareScroll 40s linear infinite',
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
                padding: '0 48px',
                flexShrink: 0,
                height: '56px',
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
