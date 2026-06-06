const LOGOS = [
  { name: 'Xero',                  domain: 'xero.com' },
  { name: 'QuickBooks',            domain: 'quickbooks.intuit.com' },
  { name: 'IRIS',                  domain: 'iris.co.uk' },
  { name: 'CCH',                   domain: 'wolterskluwer.com' },
  { name: 'Sage',                  domain: 'sage.com' },
  { name: 'FreeAgent',             domain: 'freeagent.com' },
  { name: 'FreshBooks',            domain: 'freshbooks.com' },
  { name: 'Dext',                  domain: 'dext.com' },
  { name: 'AutoEntry',             domain: 'autoentry.com' },
  { name: 'Hubdoc',                domain: 'hubdoc.com' },
  { name: 'Apron',                 domain: 'useapron.com' },
  { name: 'DataMolino',            domain: 'datamolino.com' },
  { name: 'Capium',                domain: 'capium.com' },
  { name: 'A2X',                   domain: 'a2xaccounting.com' },
  { name: 'Xero Practice Manager', domain: 'xero.com' },
  { name: 'Microsoft Excel',       domain: 'microsoft.com' },
  { name: 'Google Sheets',         domain: 'google.com' },
  { name: 'Slack',                 domain: 'slack.com' },
  { name: 'Companies House',       domain: 'companieshouse.gov.uk' },
  { name: 'HMRC MTD',              domain: 'hmrc.gov.uk' },
  { name: 'Stripe',                domain: 'stripe.com' },
]

function logoUrl(domain: string) {
  return `https://img.logo.dev/${domain}?token=pk_X-1ZO13GSgeOoUrIuJ6BeQ&size=80&format=png`
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
          width: max-content;
          animation: sw-marquee 35s linear infinite;
          will-change: transform;
        }
        .sw-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 0 1.25rem;
          flex-shrink: 0;
          cursor: default;
        }
        @media (min-width: 768px) {
          .sw-item { padding: 0 2rem; }
        }
        .sw-item img {
          height: 1.75rem;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) brightness(160%) opacity(70%);
          transition: filter 0.25s ease;
          display: block;
        }
        .sw-item:hover img {
          filter: grayscale(0%) brightness(100%) opacity(100%);
        }
        .sw-item span {
          font-family: Sora, sans-serif;
          font-size: 0.75rem;
          color: #8a94a8;
          white-space: nowrap;
          transition: color 0.25s ease;
          line-height: 1;
        }
        .sw-item:hover span {
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
          {LOGOS.map((logo, i) => (
            <div key={`a-${i}`} className="sw-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoUrl(logo.domain)} alt={logo.name} />
              <span>{logo.name}</span>
            </div>
          ))}
          {LOGOS.map((logo, i) => (
            <div key={`b-${i}`} className="sw-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoUrl(logo.domain)} alt={logo.name} />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SoftwareStrip
