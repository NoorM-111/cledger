'use client'

import Image from 'next/image'

const logos = [
  { name: 'Xero',       alt: 'Xero accounting software',        src: '/logos/xero.svg'       },
  { name: 'QuickBooks', alt: 'QuickBooks accounting software',   src: '/logos/quickbooks.svg' },
  { name: 'Sage',       alt: 'Sage accounting software',        src: '/logos/sage.svg'       },
  { name: 'FreeAgent',  alt: 'FreeAgent accounting software',   src: '/logos/freeagent.svg'  },
  { name: 'Dext',       alt: 'Dext receipt capture software',   src: '/logos/dext.svg'       },
  { name: 'HMRC MTD',   alt: 'HMRC Making Tax Digital',         src: '/logos/hmrc-mtd.svg'   },
]

export default function SoftwareStrip() {
  const doubled = [...logos, ...logos]

  return (
    <section style={{
      background: '#FBF8F1',
      borderTop: '1px solid #E4DDCF',
      borderBottom: '1px solid #E4DDCF',
      padding: '2.5rem 0',
      overflow: 'hidden',
    }}>
      <p style={{
        textAlign: 'center',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '10px',
        letterSpacing: '2px',
        color: '#B0A892',
        textTransform: 'uppercase',
        marginBottom: '2rem',
        fontWeight: 500,
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
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 56px',
                flexShrink: 0,
                height: '72px',
                opacity: 0.7,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={42}
                style={{
                  width: '120px',
                  height: '42px',
                  objectFit: 'contain',
                  filter: 'brightness(0) saturate(100%)',
                  opacity: 0.55,
                }}
              />
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
          .sw-item { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
