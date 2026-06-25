import React from 'react'

const features = [
  { title: 'Response within the hour', desc: 'Message us in UK business hours and get a real answer, not an automated reply, within 60 minutes.' },
  { title: 'Your own private channel', desc: 'A dedicated channel for you and your Cledger accountant only. Completely private.' },
  { title: 'Share files instantly', desc: 'Drop bank statements, invoices or payroll files straight into Slack. No more email attachments.' },
  { title: 'Deadline reminders built in', desc: 'VAT, payroll and CT600 dates — we message you before anything is due. Never miss a deadline again.' },
]

export default function SlackSection() {
  return (
    <div style={{ borderTop: '1px solid #E7E0D2', background: '#FBF8F1' }}>
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(76px,10vw,120px) clamp(22px,5vw,56px)' }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#9A7B39', marginBottom: 18 }}>Exclusive to Cledger clients</div>
          <h2 style={{ font: "400 clamp(28px,4.4vw,46px)/1.1 'Newsreader',serif", letterSpacing: -1, color: '#1A1A16', margin: '0 0 16px', textWrap: 'balance' as any }}>
            Your accountant is <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>one message away</em>
          </h2>
          <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 16, lineHeight: 1.7, color: '#5F5A50', margin: 0 }}>
            Every client gets a private Slack channel shared directly with their dedicated accountant. No tickets, no hurdles, no waiting days for a reply — just instant access to a real person during UK business hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 'clamp(14px,1.6vw,20px)', marginTop: 'clamp(40px,5vw,56px)' }}>
          {features.map(({ title, desc }) => (
            <div key={title} style={{ background: '#FFFFFF', border: '1px solid #E9E2D4', borderRadius: 10, padding: 24 }}>
              <h3 style={{ font: "500 17px/1.25 'Newsreader',serif", color: '#1A1A16', margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontFamily: "'Hanken Grotesk'", fontSize: 13.5, lineHeight: 1.6, color: '#6B675C', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
