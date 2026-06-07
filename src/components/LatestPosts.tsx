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
    <section style={{ background: '#0B1222', padding: '96px 0' }}>
      <style>{`
        .latest-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (max-width: 960px) {
          .latest-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .latest-grid { grid-template-columns: 1fr; }
        }
        .latest-card {
          background: #131d31;
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          padding: 24px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .latest-card:hover {
          border-color: rgba(201,168,76,0.4);
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        }
        .latest-desc {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="wrap">
        <div className="center">
          <span style={{
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#C9A84C',
            fontFamily: 'Sora, sans-serif', display: 'block', marginBottom: '14px',
          }}>
            Resources
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 400, color: '#F8F5EE',
            marginBottom: '14px', lineHeight: 1.2,
          }}>
            Latest Accounting Insights
          </h2>
          <p style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: '16px', color: '#8a94a8',
            maxWidth: '480px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Free guides and practical advice from our qualified accountants.
          </p>
        </div>

        <div className="latest-grid">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="latest-card">
              <span style={{
                fontSize: '10px', fontWeight: 600,
                padding: '3px 10px', borderRadius: '20px',
                background: 'rgba(201,168,76,0.1)', color: '#C9A84C',
                fontFamily: 'Sora, sans-serif',
                display: 'inline-block', marginBottom: '14px', alignSelf: 'flex-start',
              }}>
                {post.category}
              </span>
              <h3 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '18px', fontWeight: 400,
                color: '#F8F5EE', lineHeight: 1.35,
                marginBottom: '10px', flex: 1,
              }}>
                {post.title}
              </h3>
              <p className="latest-desc" style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '13px', color: '#8a94a8',
                lineHeight: 1.6, marginBottom: '18px',
              }}>
                {post.description}
              </p>
              <span style={{
                fontSize: '13px', color: '#C9A84C',
                fontFamily: 'Sora, sans-serif', fontWeight: 500,
              }}>
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/blog" style={{
            display: 'inline-block',
            fontFamily: 'Sora, sans-serif',
            fontSize: '14px', fontWeight: 600,
            color: '#C9A84C',
            border: '1px solid rgba(201,168,76,0.5)',
            borderRadius: '8px',
            padding: '12px 32px',
            textDecoration: 'none',
            letterSpacing: '0.03em',
            transition: 'background 0.2s ease, border-color 0.2s ease',
          }}>
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
