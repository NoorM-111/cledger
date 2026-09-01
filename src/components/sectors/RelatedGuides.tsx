import Link from 'next/link'

export interface RelatedLink {
  href: string
  label: string
}

interface RelatedGuidesProps {
  links: RelatedLink[]
  heading?: string
  /** 'dark' matches the navy sector pages (default). 'light' for cream pages. */
  variant?: 'dark' | 'light'
}

/**
 * Internal-linking block used to build topical clusters and distribute
 * authority to related guides and money pages. Rendered as real crawlable
 * <a> links (via next/link).
 */
export default function RelatedGuides({
  links,
  heading = 'Related guides',
  variant = 'dark',
}: RelatedGuidesProps) {
  const dark = variant === 'dark'
  const bg = dark ? '#111827' : '#F7F4EC'
  const cardBg = dark ? '#131d31' : '#FFFFFF'
  const border = dark ? 'rgba(201,168,76,0.15)' : '#E9E2D4'
  const titleColor = dark ? '#F8F5EE' : '#1A1A16'
  const linkColor = dark ? '#F8F5EE' : '#1A1A16'
  const accent = dark ? '#C9A84C' : '#9A7B39'

  return (
    <section style={{ background: bg, padding: '4rem 0', borderTop: `1px solid ${border}` }}>
      <div className="wrap">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <span
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: accent,
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            {heading}
          </span>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.75rem' }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: cardBg,
                    border: `1px solid ${border}`,
                    borderRadius: '10px',
                    padding: '1rem 1.25rem',
                    textDecoration: 'none',
                    color: linkColor,
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  <span>{l.label}</span>
                  <span style={{ color: accent, flexShrink: 0 }} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
