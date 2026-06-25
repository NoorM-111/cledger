import React from 'react'

const items = [
  { label: 'Bookkeeping', price: 'from £175/mo' },
  { label: 'VAT returns', price: 'from £99/mo' },
  { label: 'Management accounts', price: 'from £149/mo' },
  { label: 'Full payroll', price: 'from £99/mo' },
]

export default function PricingTeaser() {
  return (
    <section id="pricing" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(76px,10vw,128px) clamp(22px,5vw,56px)' }}>
      <div style={{ background: '#FBF8F1', border: '1px solid #E9E2D4', borderRadius: 16, padding: 'clamp(32px,5vw,64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }}>
        <div>
          <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#9A7B39', marginBottom: 16 }}>Pricing</div>
          <h2 style={{ font: "400 clamp(28px,4.4vw,46px)/1.1 'Newsreader',serif", letterSpacing: -1, color: '#1A1A16', margin: '0 0 16px', maxWidth: '16ch', textWrap: 'balance' as any }}>
            Pay only for <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>what your business needs</em>
          </h2>
          <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 16, lineHeight: 1.7, color: '#5F5A50', maxWidth: 460, margin: '0 0 28px' }}>
            Build your package by turnover, entities and services — your fixed monthly fee is calculated instantly, from <strong style={{ color: '#1A1A16' }}>£175/month</strong>. No lock-in, no hidden add-ons.
          </p>
          <div style={{ display: 'flex', gap: 13, flexWrap: 'wrap' }}>
            <a href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: "600 15px 'Hanken Grotesk'", color: '#F7F4EC', textDecoration: 'none', background: '#1A1A16', padding: '15px 28px', borderRadius: 8 }}>
              Build your package →
            </a>
            <a href="/calculators" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: "600 15px 'Hanken Grotesk'", color: '#1A1A16', textDecoration: 'none', background: 'transparent', padding: '15px 28px', borderRadius: 8, border: '1px solid #D8CFBC' }}>
              Free tax calculators
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map(({ label, price }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', background: '#FFFFFF', border: '1px solid #E9E2D4', borderRadius: 10, padding: '16px 18px' }}>
              <span style={{ font: "600 14px 'Hanken Grotesk'", color: '#1A1A16' }}>{label}</span>
              <span style={{ font: "500 13px 'IBM Plex Mono',monospace", color: '#9A7B39' }}>{price}</span>
            </div>
          ))}
          <div style={{ fontFamily: "'Hanken Grotesk'", fontSize: 12, color: '#8A8478', textAlign: 'right', marginTop: 4 }}>Founding clients: 15% off for life</div>
        </div>
      </div>
    </section>
  )
}
