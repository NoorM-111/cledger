'use client'

const logos = [
  { name: 'Xero',       alt: 'Xero accounting software',       src: '/logos/xero.svg',       h: 40 },
  { name: 'QuickBooks', alt: 'QuickBooks accounting software', src: '/logos/quickbooks.svg', h: 30 },
  { name: 'Sage',       alt: 'Sage accounting software',       src: '/logos/sage.svg',       h: 26 },
  { name: 'FreeAgent',  alt: 'FreeAgent accounting software',  src: '/logos/freeagent.svg',  h: 24 },
  { name: 'Dext',       alt: 'Dext receipt capture software',  src: '/logos/dext.svg',       h: 30 },
  { name: 'HMRC MTD',   alt: 'HMRC Making Tax Digital',        src: '/logos/hmrc-mtd.svg',   h: 30 },
  { name: 'Slack',      alt: 'Slack',                          src: '/logos/slack.svg',      h: 27 },
]

export default function SoftwareStrip() {
  const doubled = [...logos, ...logos]

  return (
    <section
      style={{
        background: '#F7F4EC',
        borderTop: '1px solid #E7E0D2',
        borderBottom: '1px solid #E7E0D2',
        padding: 'clamp(34px, 5vw, 50px) 0',
        overflow: 'hidden',
      }}
    >
      <p
        style={{
          textAlign: 'center',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '11px',
          letterSpacing: '1.6px',
          color: '#9A8A62',
          textTransform: 'uppercase',
          marginBottom: '24px',
          fontWeight: 500,
        }}
      >
        Tools &amp; platforms we work with
      </p>

      <div
        style={{
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'nowrap',
            width: 'max-content',
            animation: 'softwareScroll 30s linear infinite',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {doubled.map((logo, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 clamp(28px, 3.8vw, 54px)',
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={i < logos.length ? logo.alt : ''}
                aria-hidden={i >= logos.length}
                style={{ height: `${logo.h}px`, width: 'auto', display: 'block' }}
              />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes softwareScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
