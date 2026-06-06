'use client'

const svgLogos: Record<string, string> = {
  xero: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#13B5EA"/><path fill="white" d="M6.5 8.5L9.5 12l-3 3.5h2l2-2.5 2 2.5h2L11.5 12l3-3.5h-2l-2 2.5-2-2.5zm8.5 0a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 1.5a2 2 0 110 4 2 2 0 010-4z"/></svg>`,

  quickbooks: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#2CA01C"/><path fill="white" d="M12 4a8 8 0 100 16A8 8 0 0012 4zm0 2a6 6 0 110 12A6 6 0 0112 6zm-2 3v6l5-3-5-3z"/></svg>`,

  sage: `<svg viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg"><text y="16" font-size="16" font-weight="800" font-family="Arial" fill="#00D639">sage</text></svg>`,

  slack: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z"/><path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.527 2.527 0 012.521 2.522v2.52H8.834zm0 1.271a2.527 2.527 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z"/><path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.527 2.527 0 01-2.522 2.521h-2.522V8.834zm-1.268 0a2.527 2.527 0 01-2.523 2.521 2.526 2.526 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312z"/><path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z"/></svg>`,

  stripe: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#635BFF" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/></svg>`,

  freeagent: `<svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg"><text y="22" font-size="20" font-weight="900" font-family="Arial,sans-serif" fill="#E8452C">free</text><text x="52" y="22" font-size="20" font-weight="900" font-family="Arial,sans-serif" fill="#333333">agent</text></svg>`,

  freshbooks: `<svg viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg"><text y="22" font-size="18" font-weight="900" font-family="Arial,sans-serif" fill="#1DBF73">Fresh</text><text x="65" y="22" font-size="18" font-weight="900" font-family="Arial,sans-serif" fill="#404040">Books</text></svg>`,

  excel: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#185C37" d="M21.17 1.5H8.83C7.82 1.5 7 2.32 7 3.33V6l7 2 7-2V3.33c0-1.01-.82-1.83-1.83-1.83z"/><path fill="#21A366" d="M7 6v12l7 2 7-2V6l-7 2-7-2z"/><path fill="#107C41" d="M7 6H2.83C1.82 6 1 6.32 1 7.33v8.34C1 17.18 1.82 18 2.83 18H7V6z"/><path fill="white" d="M5.5 9.5l1.5 2.5-1.5 2.5h1.2l.9-1.7.9 1.7h1.2L7.7 12l1.5-2.5H8l-.9 1.6-.9-1.6z"/></svg>`,

  googlesheets: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#23A566" d="M14 0H4C2.9 0 2 .9 2 2v20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8l-8-8z"/><path fill="#1C8B57" d="M14 0l8 8h-8V0z"/><path fill="white" d="M6 12h12v1.5H6zm0 3h12v1.5H6zm0 3h8v1.5H6zm0-9h12v1.5H6z"/></svg>`,

  iris: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#003087"/><text x="50%" y="58%" font-size="14" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">IRIS</text></svg>`,

  cch: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#CC0000"/><text x="50%" y="58%" font-size="16" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">CCH</text></svg>`,

  dext: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#FF4F00"/><text x="50%" y="58%" font-size="22" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">D</text></svg>`,

  autoentry: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#1E3A8A"/><text x="50%" y="58%" font-size="16" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">AE</text></svg>`,

  hubdoc: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#00B4D8"/><text x="50%" y="58%" font-size="22" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">H</text></svg>`,

  apron: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#6C47FF"/><text x="50%" y="58%" font-size="16" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">AP</text></svg>`,

  datamolino: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#E63946"/><text x="50%" y="58%" font-size="16" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">DM</text></svg>`,

  capium: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#0057B8"/><text x="50%" y="58%" font-size="22" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">C</text></svg>`,

  a2x: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#FF6B35"/><text x="50%" y="58%" font-size="15" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">A2X</text></svg>`,

  companieshouse: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#005EA5"/><text x="50%" y="58%" font-size="16" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">CH</text></svg>`,

  hmrc: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="10" fill="#005EA5"/><text x="50%" y="40%" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">HMRC</text><text x="50%" y="68%" font-size="10" font-weight="700" font-family="Arial,sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">MTD</text></svg>`,
}

const logos = [
  { name: 'Xero', svgKey: 'xero' },
  { name: 'QuickBooks', svgKey: 'quickbooks' },
  { name: 'Sage', svgKey: 'sage' },
  { name: 'FreeAgent', svgKey: 'freeagent' },
  { name: 'FreshBooks', svgKey: 'freshbooks' },
  { name: 'Slack', svgKey: 'slack' },
  { name: 'Stripe', svgKey: 'stripe' },
  { name: 'Microsoft Excel', svgKey: 'excel' },
  { name: 'Google Sheets', svgKey: 'googlesheets' },
  { name: 'IRIS', svgKey: 'iris' },
  { name: 'CCH', svgKey: 'cch' },
  { name: 'Dext', svgKey: 'dext' },
  { name: 'AutoEntry', svgKey: 'autoentry' },
  { name: 'Hubdoc', svgKey: 'hubdoc' },
  { name: 'Apron', svgKey: 'apron' },
  { name: 'DataMolino', svgKey: 'datamolino' },
  { name: 'Capium', svgKey: 'capium' },
  { name: 'A2X', svgKey: 'a2x' },
  { name: 'Companies House', svgKey: 'companieshouse' },
  { name: 'HMRC MTD', svgKey: 'hmrc' },
]

type Logo = { name: string; svgKey: string }

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="flex flex-col items-center gap-2 px-6">
      <div
        style={{ width: '36px', height: '36px' }}
        dangerouslySetInnerHTML={{ __html: svgLogos[logo.svgKey] }}
      />
      <span style={{
        fontSize: '11px',
        color: '#8a94a8',
        whiteSpace: 'nowrap',
        fontFamily: 'Sora, sans-serif',
      }}>
        {logo.name}
      </span>
    </div>
  )
}

export default function SoftwareStrip() {
  const allLogos = [...logos, ...logos]

  return (
    <section style={{
      borderTop: '1px solid rgba(201,168,76,0.15)',
      borderBottom: '1px solid rgba(201,168,76,0.15)',
      background: '#0B1222',
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
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}>
        <div
          className="flex items-center"
          style={{ animation: 'marquee 40s linear infinite', width: 'max-content' }}
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
