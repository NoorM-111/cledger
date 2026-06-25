import React from 'react'

const steps = [
  {
    num: 'STEP 01',
    title: 'Initial consultation',
    desc: 'We take the time to understand your business, your goals and what you need from an accountant.',
    accent: true,
  },
  {
    num: 'STEP 02',
    title: 'A clear proposal',
    desc: 'A straightforward, fixed-fee proposal with no hidden costs or unexpected extras.',
    accent: false,
  },
  {
    num: 'STEP 03',
    title: 'Seamless transition',
    desc: 'We handle the handover from your previous accountant, managing every detail for you.',
    accent: false,
  },
  {
    num: 'STEP 04',
    title: 'Ongoing partnership',
    desc: 'Monthly reporting, proactive communication and a named contact, always available when you need them.',
    accent: false,
  },
]

export default function ApproachSection() {
  return (
    <div id="approach" style={{ borderTop: '1px solid #E7E0D2', background: '#FBF8F1' }}>
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(76px,10vw,128px) clamp(22px,5vw,56px)' }}>
        <div>
          <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#9A7B39', marginBottom: 18 }}>The process</div>
          <h2 style={{ font: "400 clamp(28px,4.4vw,46px)/1.1 'Newsreader',serif", letterSpacing: -1, color: '#1A1A16', margin: 0, maxWidth: '16ch', textWrap: 'balance' as any }}>
            Up and running <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>in days, not weeks</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(28px,3vw,40px)', marginTop: 'clamp(44px,6vw,64px)' }}>
          {steps.map(({ num, title, desc, accent }) => (
            <div key={num} style={{ paddingTop: 24, borderTop: `2px solid ${accent ? '#1A1A16' : '#E4DDCF'}` }}>
              <div style={{ font: "500 13px 'IBM Plex Mono',monospace", letterSpacing: '1.5px', color: '#9A7B39', marginBottom: 14 }}>{num}</div>
              <h3 style={{ font: "500 19px/1.25 'Newsreader',serif", color: '#1A1A16', margin: '0 0 9px' }}>{title}</h3>
              <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 14, lineHeight: 1.65, color: '#5F5A50', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
