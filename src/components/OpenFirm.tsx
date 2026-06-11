import { firmStats } from '@/lib/firm-stats'

export default function OpenFirm() {
  const stats = [
    { value: String(firmStats.filingsThisQuarter), label: 'Filings this quarter' },
    { value: firmStats.onTimeRate,                  label: 'On-time rate, all time' },
    { value: firmStats.foundingSlotsRemaining,       label: 'Founding slots remaining' },
  ]

  return (
    <section style={{ background: '#0B1222', padding: '80px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(160deg, #111827 0%, #131d31 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderLeft: '4px solid #C9A84C',
          borderRadius: '16px',
          padding: '48px 48px 40px',
          fontFamily: "'Sora', 'Inter', sans-serif",
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '16px',
          }}>
            Open firm
          </span>

          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 400,
            color: '#F8F5EE',
            lineHeight: 1.2,
            marginBottom: '12px',
          }}>
            An open firm
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: '#8a94a8',
            lineHeight: 1.7,
            maxWidth: 520,
            marginBottom: '40px',
          }}>
            We publish our real numbers. No invented reviews, no fake activity.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
            marginBottom: '28px',
          }}>
            {stats.map(stat => (
              <div key={stat.label} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                padding: '20px 20px 18px',
              }}>
                <div style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: '#e8c96a',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: '#8a94a8',
                  lineHeight: 1.5,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: 'rgba(255,255,255,0.22)',
            letterSpacing: '0.04em',
          }}>
            Updated {firmStats.updatedMonth}
          </p>
        </div>
      </div>
    </section>
  )
}
