import React from 'react'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #E7E0D2', background: '#FBF8F1', fontFamily: "'Hanken Grotesk',system-ui,sans-serif" }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,64px) clamp(22px,5vw,56px) clamp(28px,3vw,36px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 'clamp(32px,4vw,48px)', marginBottom: 'clamp(36px,4vw,44px)' }}>

          {/* Brand */}
          <div style={{ gridColumn: '1 / -1', maxWidth: 340 }}>
            <div style={{ font: "600 21px/1 'Newsreader',serif", color: '#1A1A16', marginBottom: 12 }}>
              Cledger<span style={{ color: '#9A7B39' }}>.</span>
            </div>
            <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, lineHeight: 1.65, color: '#6B675C', margin: '0 0 16px' }}>
              Clear books. Clear numbers. Clear future. Accounting built on expertise, integrity and genuine client partnership.
            </p>
            <p style={{ font: "400 11.5px/1.8 'IBM Plex Mono',monospace", color: '#8A8478', margin: '0 0 14px' }}>
              info@cledger.co.uk · +44 7774 002712
            </p>
            <p style={{ font: "400 11px/1.7 'IBM Plex Mono',monospace", color: '#9A958A', margin: 0 }}>
              Cledger Ltd · Registered in England &amp; Wales<br />
              Office: 27 Jeremy Lane, Heckmondwike, WF16 9LT<br />
              Companies House No: 16208645<br />
              HMRC AML Supervised
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ font: "600 12.5px 'Hanken Grotesk'", letterSpacing: '0.4px', color: '#1A1A16', margin: '0 0 16px', textTransform: 'uppercase' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {['Bookkeeping', 'VAT & Tax', 'Management Accounts', 'Annual Accounts', 'Calculators'].map(item => (
                <li key={item}>
                  <a href={item === 'Calculators' ? '/calculators' : '/#services'} style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, color: '#6B675C', textDecoration: 'none' }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ font: "600 12.5px 'Hanken Grotesk'", letterSpacing: '0.4px', color: '#1A1A16', margin: '0 0 16px', textTransform: 'uppercase' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[{ label: 'Our Team', href: '/team' }, { label: 'Pricing', href: '/pricing' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/#contact' }].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, color: '#6B675C', textDecoration: 'none' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ font: "600 12.5px 'Hanken Grotesk'", letterSpacing: '0.4px', color: '#1A1A16', margin: '0 0 16px', textTransform: 'uppercase' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, color: '#6B675C', textDecoration: 'none' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #E7E0D2', paddingTop: 22, display: 'flex', flexWrap: 'wrap', gap: '8px 20px', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Hanken Grotesk'", fontSize: 12, color: '#8A8478' }}>© 2026 Cledger Ltd · Registered in England &amp; Wales</span>
          <span style={{ fontFamily: "'Hanken Grotesk'", fontSize: 12, color: '#8A8478' }}>Accounting · Tax · Advisory services</span>
        </div>
      </div>
    </footer>
  )
}
