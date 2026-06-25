import React from 'react'

const team = [
  {
    initials: 'NM',
    name: 'Noor Muhammad',
    role: 'Founder & Principal',
    desc: 'Leads client delivery across financial reporting, tax compliance and forward-looking planning.',
  },
  {
    initials: 'AS',
    name: 'Ali Sajjad',
    role: 'Co-Founder',
    desc: 'Co-leads financial strategy, modelling and analytics, with ACMA, MAAT and an MSc in Business Analytics.',
  },
]

export default function TeamSection() {
  return (
    <div style={{ borderTop: '1px solid #E7E0D2', background: '#FBF8F1' }}>
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(76px,10vw,120px) clamp(22px,5vw,56px)' }}>
        <div>
          <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#9A7B39', marginBottom: 18 }}>Leadership</div>
          <h2 style={{ font: "400 clamp(28px,4.4vw,46px)/1.1 'Newsreader',serif", letterSpacing: -1, color: '#1A1A16', margin: '0 0 16px', textWrap: 'balance' as any }}>
            The people behind <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>Cledger</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(16px,2vw,22px)', marginTop: 'clamp(36px,5vw,48px)' }}>
          {team.map(({ initials, name, role, desc }) => (
            <div key={name} style={{ background: '#FFFFFF', border: '1px solid #E9E2D4', borderRadius: 12, padding: 'clamp(26px,3vw,34px)', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ flex: 'none', width: 56, height: 56, borderRadius: '50%', background: '#1A1A17', display: 'flex', alignItems: 'center', justifyContent: 'center', font: "500 19px 'Newsreader',serif", color: '#C9A84C' }}>
                {initials}
              </div>
              <div>
                <div style={{ font: "500 20px/1.15 'Newsreader',serif", color: '#1A1A16', marginBottom: 3 }}>{name}</div>
                <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: '0.8px', textTransform: 'uppercase', color: '#9A7B39', marginBottom: 12 }}>{role}</div>
                <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, lineHeight: 1.6, color: '#6B675C', margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <a href="/team" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: "600 14.5px 'Hanken Grotesk'", color: '#1A1A16', textDecoration: 'none', border: '1px solid #D8CFBC', padding: '13px 24px', borderRadius: 8 }}>
            View full team →
          </a>
        </div>
      </section>
    </div>
  )
}
