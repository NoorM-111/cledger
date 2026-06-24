const items = [
  'Companies House Registered',
  'HMRC AML Supervised',
  'ICO Registered · GDPR',
  'Fixed Monthly Fees',
]

export default function TrustBar() {
  return (
    <div style={{
      borderTop: '1px solid #E7E0D2',
      borderBottom: '1px solid #E7E0D2',
      background: '#FBF8F1',
    }}>
      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '20px clamp(22px, 5vw, 56px)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px clamp(20px, 3vw, 34px)',
      }}>
        {items.map((label, i) => (
          <>
            <span key={label} style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 500,
              fontSize: '11.5px',
              letterSpacing: '0.8px',
              textTransform: 'uppercase' as const,
              color: '#736E62',
            }}>
              {label}
            </span>
            {i < items.length - 1 && (
              <span key={`dot-${i}`} style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: '#C9A84C',
                flexShrink: 0,
                display: 'inline-block',
              }} />
            )}
          </>
        ))}
      </div>
    </div>
  )
}
