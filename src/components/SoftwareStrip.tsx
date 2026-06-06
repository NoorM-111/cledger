'use client'

const logos = [
  {
    name: 'Xero',
    svg: `<svg viewBox="0 0 80 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#13B5EA"/>
      <path fill="white" d="M8 9.5l3.5 4.5-3.5 4.5h2.2l2.3-3 2.3 3H19l-3.5-4.5L19 9.5h-2.2l-2.3 3-2.3-3z"/>
      <text x="32" y="19" font-size="16" font-weight="700" font-family="Arial,sans-serif" fill="#13B5EA">xero</text>
    </svg>`
  },
  {
    name: 'QuickBooks',
    svg: `<svg viewBox="0 0 140 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#2CA01C"/>
      <text x="4" y="18" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="white">QB</text>
      <text x="32" y="11" font-size="7" font-weight="400" font-family="Arial,sans-serif" fill="#6B7280">intuit</text>
      <text x="32" y="21" font-size="13" font-weight="800" font-family="Arial,sans-serif" fill="#1a1a1a">QuickBooks</text>
    </svg>`
  },
  {
    name: 'Sage',
    svg: `<svg viewBox="0 0 70 28" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" font-size="26" font-weight="900" font-family="Arial,sans-serif" fill="#00D639">sage</text>
    </svg>`
  },
  {
    name: 'FreeAgent',
    svg: `<svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="21" font-size="19" font-weight="900" font-family="Arial,sans-serif" fill="#E8452C">free</text>
      <text x="54" y="21" font-size="19" font-weight="900" font-family="Arial,sans-serif" fill="#222222">agent</text>
    </svg>`
  },
  {
    name: 'FreshBooks',
    svg: `<svg viewBox="0 0 140 28" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="21" font-size="19" font-weight="900" font-family="Arial,sans-serif" fill="#1DBF73">Fresh</text>
      <text x="72" y="21" font-size="19" font-weight="900" font-family="Arial,sans-serif" fill="#333333">Books</text>
    </svg>`
  },
  {
    name: 'IRIS',
    svg: `<svg viewBox="0 0 70 28" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" font-size="26" font-weight="900" font-family="Arial,sans-serif" fill="#003087">IRIS</text>
    </svg>`
  },
  {
    name: 'CCH',
    svg: `<svg viewBox="0 0 60 28" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" font-size="26" font-weight="900" font-family="Arial,sans-serif" fill="#CC0000">CCH</text>
    </svg>`
  },
  {
    name: 'Dext',
    svg: `<svg viewBox="0 0 70 28" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" font-size="24" font-weight="900" font-family="Arial,sans-serif" fill="#FF4F00">dext</text>
    </svg>`
  },
  {
    name: 'Slack',
    svg: `<svg viewBox="0 0 100 28" xmlns="http://www.w3.org/2000/svg">
      <path fill="#E01E5A" d="M4 10.5a2 2 0 110 4H2a2 2 0 110-4zm1 2a1 1 0 100-2 1 1 0 000 2z"/>
      <path fill="#36C5F0" d="M10.5 4a2 2 0 114 0v2a2 2 0 11-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z"/>
      <path fill="#2EB67D" d="M20 10.5a2 2 0 110 4h-2a2 2 0 110-4zm-1 2a1 1 0 100-2 1 1 0 000 2z"/>
      <path fill="#ECB22E" d="M10.5 20a2 2 0 114 0v2a2 2 0 11-4 0zm2 1a1 1 0 100 2 1 1 0 000-2z"/>
      <text x="28" y="21" font-size="19" font-weight="700" font-family="Arial,sans-serif" fill="#1a1a1a">slack</text>
    </svg>`
  },
  {
    name: 'Microsoft Excel',
    svg: `<svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="2" width="24" height="24" rx="3" fill="#217346"/>
      <text x="4" y="19" font-size="13" font-weight="900" font-family="Arial,sans-serif" fill="white">XL</text>
      <text x="30" y="21" font-size="14" font-weight="400" font-family="Arial,sans-serif" fill="#666666">Microsoft</text>
      <text x="30" y="21" font-size="0" fill="none"/>
      <text x="98" y="21" font-size="14" font-weight="700" font-family="Arial,sans-serif" fill="#217346">Excel</text>
    </svg>`
  },
]

function LogoItem({ logo }: { logo: { name: string; svg: string } }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px',
        flexShrink: 0,
        height: '60px',
      }}
      dangerouslySetInnerHTML={{ __html: `<svg style="height:28px;width:auto;" viewBox="${logo.svg.match(/viewBox="([^"]+)"/)?.[1] || '0 0 100 28'}" xmlns="http://www.w3.org/2000/svg">${logo.svg.replace(/<svg[^>]*>/, '').replace('</svg>', '')}</svg>` }}
    />
  )
}

export default function SoftwareStrip() {
  const allLogos = [...logos, ...logos]
  return (
    <section style={{
      borderTop: '1px solid rgba(201,168,76,0.15)',
      borderBottom: '1px solid rgba(201,168,76,0.15)',
      background: '#0B1222',
      padding: '2rem 0',
    }}>
      <p style={{
        textAlign: 'center',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: '#8a94a8',
        textTransform: 'uppercase',
        marginBottom: '1.5rem',
        fontFamily: 'Sora, sans-serif',
      }}>
        Tools &amp; Platforms We Work With
      </p>
      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'nowrap',
            width: 'max-content',
            animation: 'marquee 35s linear infinite',
          }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {allLogos.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
