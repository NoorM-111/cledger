'use client'

import Image from 'next/image'

const logos = [
  { name: 'Xero', src: '/logos/xero.svg' },
  { name: 'QuickBooks', src: '/logos/quickbooks.svg' },
  { name: 'Sage', src: '/logos/sage.svg' },
  { name: 'FreeAgent', src: '/logos/freeagent.svg' },
  { name: 'Dext', src: '/logos/dext.svg' },
  { name: 'HMRC MTD', src: '/logos/hmrc-mtd.svg' },
]

export default function SoftwareStrip() {
  const doubled = [...logos, ...logos]

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
            animation: 'softwareScroll 30s linear infinite',
          }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="sw-item"
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0 56px',
                flexShrink: 0,
                height: '80px',
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={50}
                className="sw-img"
                style={{
                  width: '140px',
                  height: '50px',
                  objectFit: 'contain',
                }}
              />
              <span style={{
                fontSize: '12px',
                color: '#F8F5EE',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                fontFamily: 'Sora, sans-serif',
              }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes softwareScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .sw-item { padding: 0 24px !important; height: 64px !important; }
          .sw-img  { width: 100px !important; height: 36px !important; }
        }
      `}</style>
    </section>
  )
}
