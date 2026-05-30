import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Accounting & Bookkeeping Guides | Cledger Blog',
  description: 'Expert guides on bookkeeping, VAT, payroll, management accounts and UK tax compliance — written by ACCA-trained accountants at Cledger.',
}

const posts = [
  {
    slug: 'how-much-does-a-bookkeeper-cost-uk',
    title: 'How much does a bookkeeper cost in the UK? (2026 guide)',
    description: 'A complete breakdown of UK bookkeeping costs — hourly rates, monthly packages, and how to get the best value for your business.',
    date: 'June 1, 2026',
    readTime: '5 min read',
    category: 'Pricing',
  },
  {
    slug: 'what-is-making-tax-digital-mtd',
    title: 'What is Making Tax Digital (MTD)? Complete guide for UK businesses',
    description: 'MTD is now mandatory for VAT-registered businesses. Here is everything you need to know — deadlines, software, and how to stay compliant.',
    date: 'June 8, 2026',
    readTime: '6 min read',
    category: 'Tax',
  },
  {
    slug: 'bookkeeping-for-dental-practices-uk',
    title: 'Bookkeeping for dental practices UK — what you need to know',
    description: 'Dental practices have unique accounting needs. From mixed NHS/private income to associate payments — here is how to get your books right.',
    date: 'June 15, 2026',
    readTime: '7 min read',
    category: 'Dental',
  },
]

const C = {
  navy:'#0B1222',card:'#111827',gold:'#C9A84C',gold2:'#e8c96a',
  white:'#F8F5EE',muted:'#8a94a8',faint:'rgba(255,255,255,0.07)',
}

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main style={{ background: C.navy, minHeight: '100vh', fontFamily: "'Sora','Inter',sans-serif" }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '6rem 1.5rem 5rem' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>Resources</p>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 400, color: C.white, marginBottom: '0.8rem' }}>
            Accounting guides & insights
          </h1>
          <p style={{ fontSize: 15, color: C.muted, marginBottom: '3rem', lineHeight: 1.7, maxWidth: 520 }}>
            Practical guides on bookkeeping, VAT, tax and financial management — written by our ACCA-trained team for UK business owners.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: C.card, border: `0.5px solid ${C.faint}`, borderRadius: 14, padding: '1.6rem 1.8rem', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', gap: 10, marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: 'rgba(201,168,76,0.10)', color: C.gold2 }}>{post.category}</span>
                    <span style={{ fontSize: 11, color: C.muted }}>{post.date}</span>
                    <span style={{ fontSize: 11, color: C.muted }}>· {post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.3rem', fontWeight: 400, color: C.white, marginBottom: '0.5rem', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{post.description}</p>
                  <div style={{ fontSize: 12, color: C.gold, marginTop: '1rem', fontWeight: 500 }}>Read article →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
