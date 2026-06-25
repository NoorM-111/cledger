import React from 'react'

const reasons = [
  {
    title: 'Precision you can rely on',
    desc: 'Every piece of work that leaves Cledger is reviewed to the highest standard. Accuracy is not an aspiration — it is our baseline.',
  },
  {
    title: 'Deep sector understanding',
    desc: 'We work across a wide range of UK industries, bringing specialist knowledge of the financial pressures your sector faces.',
  },
  {
    title: 'Always ahead of deadlines',
    desc: 'We manage your obligations proactively, keeping you ahead of upcoming deadlines and submissions.',
  },
  {
    title: 'A long-term financial partner',
    desc: 'Clients come to us for clarity, guidance and a firm they can trust to grow alongside them — not process numbers once a year.',
  },
]

const overviewRows = [
  { label: 'Bank reconciliation', status: '✓ Complete', type: 'green' },
  { label: 'VAT return (Q3)', status: '✓ Filed', type: 'green' },
  { label: 'Payroll — October', status: '✓ Processed', type: 'green' },
  { label: 'Management accounts', status: '✓ Sent', type: 'green' },
  { label: 'Revenue (Oct)', status: '£24,310.00', type: 'light' },
  { label: 'Gross margin', status: '62.4%', type: 'light' },
  { label: 'CT600 deadline', status: 'On track · 14 wks', type: 'gold' },
]

export default function WhyCledgerSection() {
  return (
    <div id="why" style={{ background: '#1A1A17' }}>
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(80px,11vw,132px) clamp(22px,5vw,56px)' }}>
        <div>
          <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#C9A84C', marginBottom: 18 }}>Why Cledger</div>
          <h2 style={{ font: "400 clamp(28px,4.4vw,46px)/1.1 'Newsreader',serif", letterSpacing: -1, color: '#F7F2E6', margin: 0, maxWidth: '20ch', textWrap: 'balance' as any }}>
            A financial partner you can <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>genuinely rely on</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(40px,5vw,72px)', marginTop: 'clamp(44px,6vw,68px)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px,3vw,34px)' }}>
            {reasons.map(({ title, desc }) => (
              <div key={title} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 22 }}>
                <h3 style={{ font: "500 17px/1.3 'Newsreader',serif", color: '#F2EDE0', margin: '0 0 7px' }}>{title}</h3>
                <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 14, lineHeight: 1.65, color: '#9E988A', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#22221D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 'clamp(24px,2.6vw,30px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ font: "500 10.5px 'IBM Plex Mono',monospace", letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9A84C' }}>Monthly Overview · Oct 2025</span>
              <span style={{ font: "500 10.5px 'IBM Plex Mono',monospace", color: '#7E796D' }}>CL-0142</span>
            </div>
            {overviewRows.map(({ label, status, type }, i) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: i < overviewRows.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <span style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, color: '#9E988A' }}>{label}</span>
                {type === 'gold' ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: "500 11px 'IBM Plex Mono',monospace", color: '#C9A84C', background: 'rgba(201,168,76,0.12)', padding: '3px 9px', borderRadius: 5 }}>{status}</span>
                ) : (
                  <span style={{ font: "500 12.5px 'IBM Plex Mono',monospace", color: type === 'green' ? '#A9C49C' : '#EFEADD' }}>{status}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
