'use client'
import Link from 'next/link'

const posts = [
  {
    slug: 'xero-vs-quickbooks-uk',
    title: 'Xero vs QuickBooks UK — Which Is Better for Your Business?',
    description: 'Honest comparison of Xero and QuickBooks for UK small businesses — features, pricing, pros and cons.',
    category: 'Software Guide',
  },
  {
    slug: 'what-is-making-tax-digital-mtd',
    title: 'What Is Making Tax Digital (MTD)?',
    description: 'A plain-English guide to Making Tax Digital — what it is, which taxes it covers and what UK businesses need to do.',
    category: 'MTD Guide',
  },
  {
    slug: 'mtd-for-income-tax-self-employed',
    title: 'MTD for Income Tax: What Self-Employed People Need to Know',
    description: 'Making Tax Digital for Income Tax explained for sole traders and landlords — who is affected, when, and what you need to do.',
    category: 'MTD Guide',
  },
]

export default function LatestPosts() {
  return (
    <section style={{ background: '#F7F4EC', padding: '96px 0', borderTop: '1px solid #E4DDCF' }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: '48px' }}>
          <span className="s-label">Resources</span>
          <h2 className="s-h">Latest Accounting Insights</h2>
          <p className="s-p">
            Free guides and practical advice from our qualified accountants.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '48px',
        }}>
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E9E2D4',
                borderRadius: '10px',
                padding: '28px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C9A84C'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(26,26,22,0.07)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#E9E2D4'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
              }}
            >
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase' as const,
                color: '#9A7B39',
                background: '#F4ECD7',
                padding: '4px 10px',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '18px',
                alignSelf: 'flex-start',
              }}>
                {post.category}
              </span>
              <h3 style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: '20px',
                fontWeight: 500,
                color: '#1A1A16',
                lineHeight: 1.3,
                marginBottom: '12px',
                flex: 1,
                letterSpacing: '-0.3px',
              }}>
                {post.title}
              </h3>
              <p style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '14px',
                color: '#5F5A50',
                lineHeight: 1.65,
                marginBottom: '20px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical' as const,
                overflow: 'hidden',
              }}>
                {post.description}
              </p>
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: '13px',
                color: '#9A7B39',
                fontWeight: 500,
              }}>
                Read article →
              </span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/blog" className="btn btn-ghost">
            View all articles →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .posts-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .posts-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
