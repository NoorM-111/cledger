const taskItems = [
  { label: 'Bookkeeping',        status: 'Done',     color: '#7EC986' },
  { label: 'VAT return (Q3)',    status: 'Filed',    color: '#7EC986' },
  { label: 'Payroll — June',     status: 'Done',     color: '#7EC986' },
  { label: 'Management accounts', status: 'Due 5 Jul', color: '#C9A84C' },
]

const deadlines = [
  'VAT return',
  'Payroll RTI',
  'Confirmation statement',
  'Year-end accounts',
]

export default function RemoteFirst() {
  return (
    <section style={{
      background: '#1A1A17',
      padding: '96px 0',
      borderTop: '1px solid #2A2A25',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px' }}>

        {/* Badge */}
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#C9A84C',
          }}>
            <span style={{ fontSize: 7, color: '#C9A84C' }}>●</span>
            Online · Working with clients UK-wide
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* Left: heading + task mockup */}
          <div>
            <h2 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(28px, 3.5vw, 46px)',
              fontWeight: 400,
              color: '#F7F2E6',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              marginBottom: 40,
            }}>
              A remote-first practice, run with the rigour of a traditional firm.
            </h2>

            {/* QuickBooks-style task panel */}
            <div style={{
              background: '#22221D',
              border: '1px solid #2D2D28',
              borderRadius: 12,
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid #2D2D28',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 4,
                    background: '#2CA01C',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>Q</span>
                  </div>
                  <span style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 12, fontWeight: 600, color: '#F7F2E6',
                  }}>QuickBooks</span>
                </div>
                <div style={{ display: 'flex', gap: 4 }}>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10, color: '#7EC986',
                    background: 'rgba(126,201,134,0.12)',
                    padding: '2px 8px', borderRadius: 4,
                  }}>Live overview</span>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10, color: '#6B6860',
                    padding: '2px 8px',
                  }}>Updated today</span>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                {taskItems.map(t => (
                  <div key={t.label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 16px',
                    borderBottom: '1px solid #242420',
                  }}>
                    <span style={{
                      fontFamily: "'Hanken Grotesk', sans-serif",
                      fontSize: 13, color: '#C8C2B4',
                    }}>{t.label}</span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10, color: t.color,
                    }}>{t.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Slack chat + deadline tracker */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Slack chat */}
            <div style={{
              background: '#22221D',
              border: '1px solid #2D2D28',
              borderRadius: 12,
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '10px 16px',
                borderBottom: '1px solid #2D2D28',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11, color: '#6B6860',
                }}># client-your-business</span>
              </div>
              <div style={{ padding: '16px' }}>
                {/* Client message */}
                <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 6,
                    background: '#5F5A50',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#F7F2E6', fontSize: 11, fontWeight: 600,
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    flexShrink: 0,
                  }}>Y</div>
                  <div>
                    <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", color: '#F7F2E6', fontSize: 12, fontWeight: 600 }}>You </span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#4A4740', fontSize: 10 }}>9:14 AM</span>
                    <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", color: '#9E988A', fontSize: 12, lineHeight: 1.6, margin: '4px 0 0' }}>
                      Quick one — can I expense a client lunch?
                    </p>
                  </div>
                </div>
                {/* Accountant reply */}
                <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 6,
                    background: '#9A7B39',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#F7F2E6', fontSize: 11, fontWeight: 600,
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    flexShrink: 0,
                  }}>N</div>
                  <div>
                    <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", color: '#F7F2E6', fontSize: 12, fontWeight: 600 }}>Noor · Cledger </span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#4A4740', fontSize: 10 }}>9:31 AM</span>
                    <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", color: '#9E988A', fontSize: 12, lineHeight: 1.6, margin: '4px 0 0' }}>
                      Yes — 50% deductible if it's client entertainment. I'll log it.
                    </p>
                  </div>
                </div>
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10, color: '#7EC986',
                  marginLeft: 38,
                }}>Replied in under an hour</div>
              </div>
            </div>

            {/* Deadline tracker */}
            <div style={{
              background: '#22221D',
              border: '1px solid #2D2D28',
              borderRadius: 12,
              padding: '16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10, fontWeight: 500, letterSpacing: '1.5px',
                  textTransform: 'uppercase', color: '#6B6860',
                }}>Deadlines, handled</span>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10, color: '#7EC986',
                }}>Tracked for you</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {deadlines.map(d => (
                  <span key={d} style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 12, color: '#C8C2B4',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid #2D2D28',
                    borderRadius: 6,
                    padding: '5px 10px',
                  }}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
