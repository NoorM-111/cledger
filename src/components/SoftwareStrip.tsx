type Logo =
  | { name: string; src: string; text?: never }
  | { name: string; text: true; src?: never }

const LOGOS: Logo[] = [
  { name: 'Xero',            src: 'https://cdn.simpleicons.org/xero' },
  { name: 'QuickBooks',      src: 'https://cdn.simpleicons.org/quickbooks' },
  { name: 'Sage',            src: 'https://cdn.simpleicons.org/sage' },
  { name: 'FreeAgent',       src: 'https://cdn.simpleicons.org/freeagent' },
  { name: 'FreshBooks',      src: 'https://cdn.simpleicons.org/freshbooks' },
  { name: 'Slack',           src: 'https://cdn.simpleicons.org/slack' },
  { name: 'Stripe',          src: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Microsoft Excel', src: 'https://cdn.simpleicons.org/microsoftexcel' },
  { name: 'Google Sheets',   src: 'https://cdn.simpleicons.org/googlesheets' },
  { name: 'IRIS',            text: true },
  { name: 'CCH',             text: true },
  { name: 'Dext',            text: true },
  { name: 'AutoEntry',       text: true },
  { name: 'Hubdoc',          text: true },
  { name: 'Apron',           text: true },
  { name: 'DataMolino',      text: true },
  { name: 'Capium',          text: true },
  { name: 'A2X',             text: true },
  { name: 'Companies House', text: true },
  { name: 'HMRC MTD',        text: true },
]

function LogoItem({ logo }: { logo: Logo }) {
  if (logo.text) {
    return (
      <div className="sw-item sw-item--text">
        <span className="sw-badge">{logo.name}</span>
      </div>
    )
  }
  return (
    <div className="sw-item sw-item--img">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo.src} alt={logo.name} style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
      <span>{logo.name}</span>
    </div>
  )
}

export function SoftwareStrip() {
  return (
    <div style={{ background: '#0B1222', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)', padding: '2.5rem 0' }}>
      <style>{`
        @keyframes sw-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .sw-wrapper {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .sw-wrapper:hover .sw-track {
          animation-play-state: paused;
        }
        .sw-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: sw-marquee 35s linear infinite;
          will-change: transform;
        }
        .sw-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0 1.25rem;
          flex-shrink: 0;
          cursor: default;
        }
        @media (min-width: 768px) {
          .sw-item { padding: 0 2rem; }
        }

        /* ── Image items ── */
        .sw-item--img span {
          font-family: Sora, sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          color: #8a94a8;
          white-space: nowrap;
          line-height: 1;
        }

        /* ── Text badge items ── */
        .sw-item--text {
          flex-direction: row;
        }
        .sw-badge {
          font-family: Sora, sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          color: #8a94a8;
          white-space: nowrap;
          background: rgba(201, 168, 76, 0.05);
          border: 1px solid rgba(201, 168, 76, 0.2);
          border-radius: 6px;
          padding: 0.375rem 0.75rem;
          display: inline-block;
          transition: all 0.25s ease;
        }
        .sw-item--text:hover .sw-badge {
          border-color: rgba(201, 168, 76, 0.5);
          color: #F8F5EE;
        }
      `}</style>

      <p style={{
        fontFamily: 'Sora, sans-serif',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#8a94a8',
        textAlign: 'center',
        marginBottom: '2rem',
      }}>
        Tools &amp; Platforms We Work With
      </p>

      <div className="sw-wrapper">
        <div className="sw-track">
          {LOGOS.map((logo) => <LogoItem key={`a-${logo.name}`} logo={logo} />)}
          {LOGOS.map((logo) => <LogoItem key={`b-${logo.name}`} logo={logo} />)}
        </div>
      </div>
    </div>
  )
}

export default SoftwareStrip
