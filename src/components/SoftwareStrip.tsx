type Logo =
  | { name: string; img: string; text?: never }
  | { name: string; text: true; img?: never }

const LOGOS: Logo[] = [
  { name: 'Xero',             img: 'https://cdn.simpleicons.org/xero/8a94a8' },
  { name: 'QuickBooks',       img: 'https://cdn.simpleicons.org/quickbooks/8a94a8' },
  { name: 'Sage',             img: 'https://cdn.simpleicons.org/sage/8a94a8' },
  { name: 'FreeAgent',        img: 'https://cdn.simpleicons.org/freeagent/8a94a8' },
  { name: 'FreshBooks',       img: 'https://cdn.simpleicons.org/freshbooks/8a94a8' },
  { name: 'Slack',            img: 'https://cdn.simpleicons.org/slack/8a94a8' },
  { name: 'Stripe',           img: 'https://cdn.simpleicons.org/stripe/8a94a8' },
  { name: 'Shopify',          img: 'https://cdn.simpleicons.org/shopify/8a94a8' },
  { name: 'Microsoft Excel',  img: 'https://cdn.simpleicons.org/microsoftexcel/8a94a8' },
  { name: 'Google Sheets',    img: 'https://cdn.simpleicons.org/googlesheets/8a94a8' },
  { name: 'Notion',           img: 'https://cdn.simpleicons.org/notion/8a94a8' },
  { name: 'IRIS',             text: true },
  { name: 'CCH',              text: true },
  { name: 'Dext',             text: true },
  { name: 'AutoEntry',        text: true },
  { name: 'Hubdoc',           text: true },
  { name: 'Apron',            text: true },
  { name: 'DataMolino',       text: true },
  { name: 'Capium',           text: true },
  { name: 'A2X',              text: true },
  { name: 'Companies House',  text: true },
  { name: 'HMRC MTD',         text: true },
]

function LogoItem({ logo, prefix }: { logo: Logo; prefix: string }) {
  if (logo.text) {
    return (
      <div key={`${prefix}-${logo.name}`} className="sw-item sw-item--text">
        <span className="sw-badge">{logo.name}</span>
      </div>
    )
  }
  return (
    <div key={`${prefix}-${logo.name}`} className="sw-item sw-item--img">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo.img} alt={logo.name} />
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
        .sw-item--img img {
          height: 1.5rem;
          width: auto;
          object-fit: contain;
          display: block;
          filter: brightness(200%) opacity(50%);
          transition: all 0.25s ease;
        }
        .sw-item--img:hover img {
          filter: brightness(200%) opacity(90%);
        }
        .sw-item--img span {
          font-family: Sora, sans-serif;
          font-size: 0.75rem;
          color: #8a94a8;
          white-space: nowrap;
          transition: color 0.25s ease;
          line-height: 1;
        }
        .sw-item--img:hover span {
          color: #F8F5EE;
        }

        /* ── Text badge items ── */
        .sw-badge {
          font-family: Sora, sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          color: #8a94a8;
          white-space: nowrap;
          background: rgba(201, 168, 76, 0.08);
          border: 1px solid rgba(201, 168, 76, 0.2);
          border-radius: 6px;
          padding: 0.25rem 0.75rem;
          transition: all 0.25s ease;
          line-height: 1.4;
          display: inline-block;
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
          {LOGOS.map((logo) => <LogoItem key={`a-${logo.name}`} logo={logo} prefix="a" />)}
          {LOGOS.map((logo) => <LogoItem key={`b-${logo.name}`} logo={logo} prefix="b" />)}
        </div>
      </div>
    </div>
  )
}

export default SoftwareStrip
