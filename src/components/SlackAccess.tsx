"use client";

import { Zap, Lock, Paperclip, CalendarClock, Clock, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: <Zap size={22} strokeWidth={1.5} color="#9A7B39" />,
    title: "Response within the hour",
    desc: "Message us during UK business hours and get a real answer, not an automated reply, within 60 minutes.",
  },
  {
    icon: <Lock size={22} strokeWidth={1.5} color="#9A7B39" />,
    title: "Your own private channel",
    desc: "A dedicated #client-[your-business] Slack channel. Only you and your Cledger accountant. Completely private.",
  },
  {
    icon: <Paperclip size={22} strokeWidth={1.5} color="#9A7B39" />,
    title: "Share files instantly",
    desc: "Drop bank statements, invoices, or payroll files directly in Slack. No more emailing attachments back and forth.",
  },
  {
    icon: <CalendarClock size={22} strokeWidth={1.5} color="#9A7B39" />,
    title: "Deadline reminders built in",
    desc: "VAT deadlines, payroll dates, CT600 filings — we message you before anything is due.",
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} color="#9A7B39" />,
    title: "UK hours. Always.",
    desc: "We work to UK business hours (9am–5pm GMT/BST). Your messages are read by a real person, not a chatbot.",
  },
  {
    icon: <MessageSquare size={22} strokeWidth={1.5} color="#9A7B39" />,
    title: "Direct, not ticketed",
    desc: "Most online accountants route every question through a ticket queue. At Cledger you message your accountant directly.",
  },
]

const messages = [
  {
    sender: "You",
    avatar: "Y",
    avatarBg: "#5F5A50",
    time: "9:14 AM",
    message: "Hi Noor, quick one — a new customer isn't VAT registered and is asking if we still add VAT to their invoice. Do we?",
  },
  {
    sender: "Noor · Cledger",
    avatar: "N",
    avatarBg: "#9A7B39",
    time: "9:31 AM",
    message: "Yes. You charge VAT based on your registration, not theirs. Add 20% and issue a VAT invoice with your VAT number on it. I'll make sure it's coded correctly in Xero when it comes through.",
  },
  {
    sender: "You",
    avatar: "Y",
    avatarBg: "#5F5A50",
    time: "9:32 AM",
    message: "Perfect, thank you. That's exactly what I needed.",
  },
]

export default function SlackAccess() {
  return (
    <section style={{ background: '#FBF8F1', padding: '96px 0', borderTop: '1px solid #E4DDCF' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px' }}>

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase' as const,
            color: '#9A7B39',
            display: 'block',
            marginBottom: '16px',
          }}>
            Exclusive to Cledger clients
          </span>
          <h2 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(28px,4.4vw,46px)',
            fontWeight: 400,
            color: '#1A1A16',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            marginBottom: '16px',
          }}>
            Your accountant is <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>one message away.</em>
          </h2>
          <p style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '16px',
            color: '#5F5A50',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: '1.75',
          }}>
            Every Cledger client gets a private Slack channel shared directly with your dedicated accountant.
            No tickets. No waiting 3 days for an email reply. Just instant access.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          marginBottom: '64px',
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: '#FFFFFF',
              border: '1px solid #E9E2D4',
              borderRadius: '10px',
              padding: '28px',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#C9A84C' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E9E2D4' }}
            >
              <div style={{ marginBottom: '14px' }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "'Newsreader', serif",
                fontSize: '17px',
                fontWeight: 500,
                color: '#1A1A16',
                marginBottom: '8px',
                letterSpacing: '-0.2px',
              }}>{f.title}</h3>
              <p style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '14px',
                color: '#5F5A50',
                lineHeight: '1.7',
                margin: 0,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: '640px',
          margin: '0 auto 56px',
          background: '#1A1A17',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #2D2D28',
        }}>
          <div style={{
            background: '#22221D',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid #2D2D28',
          }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: '#9E988A',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}>
              # client-your-business · Cledger Workspace
            </span>
          </div>

          <div style={{ padding: '20px 20px 8px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '32px', height: '32px',
                  borderRadius: '6px',
                  background: msg.avatarBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#F7F2E6', fontWeight: 600, fontSize: '13px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  flexShrink: 0,
                }}>
                  {msg.avatar}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                    <span style={{
                      fontFamily: "'Hanken Grotesk', sans-serif",
                      color: '#F7F2E6', fontWeight: 600, fontSize: '13px',
                    }}>{msg.sender}</span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: '#6B6860', fontSize: '10px',
                    }}>{msg.time}</span>
                  </div>
                  <p style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    color: '#9E988A', fontSize: '13px', lineHeight: '1.6', margin: 0,
                  }}>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            margin: '0 16px 16px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid #2D2D28',
            borderRadius: '6px',
            padding: '10px 14px',
            fontFamily: "'Hanken Grotesk', sans-serif",
            color: '#6B6860',
            fontSize: '13px',
          }}>
            Message #client-your-business
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            color: '#9A958A', fontSize: '14px', marginBottom: '24px',
          }}>
            Slack access is included in every Cledger plan. No extra charge.
          </p>
          <a href="/pricing" className="btn btn-navy">See plans &amp; pricing →</a>
        </div>

      </div>
    </section>
  )
}
