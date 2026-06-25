import React from 'react'

export default function CTASection() {
  return (
    <section id="contact" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(22px,5vw,56px) clamp(76px,10vw,128px)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', border: '1px solid #E4DDCF', borderRadius: 14, background: '#FBF8F1', padding: 'clamp(44px,7vw,84px) clamp(26px,6vw,72px)', textAlign: 'center' }}>
        <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#9A7B39', marginBottom: 18 }}>Ready to start?</div>
        <h2 style={{ font: "400 clamp(30px,4.6vw,50px)/1.08 'Newsreader',serif", letterSpacing: -1, color: '#1A1A16', margin: '0 0 16px', textWrap: 'balance' as any }}>
          Book a free, no-obligation consultation
        </h2>
        <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 'clamp(15px,1.7vw,18px)', lineHeight: 1.62, color: '#5F5A50', maxWidth: 520, margin: '0 auto 34px' }}>
          Tell us about your business. We&apos;ll show you exactly how Cledger can bring clarity and real value to your finances.
        </p>
        <div style={{ display: 'flex', gap: 13, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/cledger-info/30min" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: "600 15px 'Hanken Grotesk'", color: '#F7F4EC', textDecoration: 'none', background: '#1A1A16', padding: '15px 30px', borderRadius: 8 }}>
            Book a call →
          </a>
          <a href="mailto:info@cledger.co.uk" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: "600 15px 'Hanken Grotesk'", color: '#1A1A16', textDecoration: 'none', background: 'transparent', border: '1px solid #D8CFBC', padding: '15px 30px', borderRadius: 8 }}>
            info@cledger.co.uk
          </a>
        </div>
      </div>
    </section>
  )
}
