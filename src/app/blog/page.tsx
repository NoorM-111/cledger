import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accounting Insights & Resources | Cledger Blog',
  description: "Free guides, tax tips and accounting resources for UK small businesses from Cledger's qualified accountants.",
}

const posts = [
  {
    slug: 'bookkeeping-for-dental-practices-uk',
    title: 'Bookkeeping for Dental Practices UK',
    description: 'A complete guide to bookkeeping for UK dental practices — NHS income, associate payments, VAT exemptions and Making Tax Digital.',
    category: 'Sector Guide',
  },
  {
    slug: 'corporation-tax-guide-small-business-uk',
    title: 'Corporation Tax Guide for UK Small Businesses',
    description: 'Everything UK limited company directors need to know about corporation tax — rates, deadlines, allowances and how to reduce your bill.',
    category: 'Tax Guide',
  },
  {
    slug: 'how-much-does-a-bookkeeper-cost-uk',
    title: 'How Much Does a Bookkeeper Cost in the UK?',
    description: 'Honest breakdown of UK bookkeeper costs in 2026 — hourly rates, fixed fees, what affects the price and how to compare quotes.',
    category: 'Pricing Guide',
  },
  {
    slug: 'how-to-pay-yourself-ltd-director',
    title: 'How to Pay Yourself as a Limited Company Director',
    description: 'The most tax-efficient way to pay yourself as a UK limited company director — salary vs dividends explained.',
    category: 'Tax Planning',
  },
  {
    slug: 'mtd-for-income-tax-self-employed',
    title: 'MTD for Income Tax: What Self-Employed People Need to Know',
    description: 'Making Tax Digital for Income Tax explained for sole traders and landlords — who is affected, when, and what you need to do.',
    category: 'MTD Guide',
  },
  {
    slug: 'self-assessment-tax-return-guide-uk',
    title: 'Self Assessment Tax Return: A Complete UK Guide',
    description: 'Everything you need to know about filing your Self Assessment tax return in the UK — deadlines, what to include and how to reduce your bill.',
    category: 'Tax Guide',
  },
  {
    slug: 'vat-return-deadlines-uk',
    title: 'VAT Return Deadlines UK — Everything You Need to Know',
    description: 'Complete guide to UK VAT return deadlines, filing dates, payment dates and what happens if you miss them.',
    category: 'VAT Guide',
  },
  {
    slug: 'what-are-management-accounts',
    title: 'What Are Management Accounts and Why Does Your Business Need Them?',
    description: 'Management accounts explained — what they include, how often you need them, and why they matter for decision-making.',
    category: 'Guides',
  },
  {
    slug: 'what-is-making-tax-digital-mtd',
    title: 'What Is Making Tax Digital (MTD)?',
    description: 'A plain-English guide to Making Tax Digital — what it is, which taxes it covers and what UK businesses need to do.',
    category: 'MTD Guide',
  },
  {
    slug: 'xero-vs-quickbooks-uk',
    title: 'Xero vs QuickBooks UK — Which Is Better for Your Business?',
    description: 'Honest comparison of Xero and QuickBooks for UK small businesses — features, pricing, pros and cons.',
    category: 'Software Guide',
  },
]

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#F7F4EC', minHeight: '100vh' }}>
        <style>{`
          .blog-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          @media (max-width: 960px) {
            .blog-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 580px) {
            .blog-grid { grid-template-columns: 1fr; }
          }
          .blog-card {
            background: #fff;
            border: 1px solid #E9E2D4;
            border-radius: 12px;
            padding: 24px;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          }
          .blog-card:hover {
            border-color: #D7C79A;
            transform: translateY(-3px);
            box-shadow: 0 22px 40px -28px rgba(26,26,22,0.35);
          }
          .blog-desc {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>

        {/* Hero */}
        <section style={{
          padding: '100px 0 56px',
          borderBottom: '1px solid #E9E2D4',
        }}>
          <div className="wrap">
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#9A7B39',
              display: 'block', marginBottom: '16px',
            }}>Resources</span>
            <h1 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#1A1A16',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}>
              Accounting Insights &amp; Resources
            </h1>
            <p style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: '17px',
              color: '#5F5A50',
              maxWidth: '520px',
              lineHeight: 1.7,
              margin: 0,
            }}>
              Free guides, tax tips and practical accounting advice for UK small businesses, from our qualified accountants.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section style={{ padding: '60px 0 96px' }}>
          <div className="wrap">
            <div className="blog-grid">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px', fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '3px 10px', borderRadius: '20px',
                    background: '#F4ECD7', color: '#9A7B39',
                    display: 'inline-block', marginBottom: '14px', alignSelf: 'flex-start',
                  }}>
                    {post.category}
                  </span>
                  <h2 style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '18px', fontWeight: 400,
                    color: '#1A1A16', lineHeight: 1.35,
                    marginBottom: '10px', flex: 1,
                  }}>
                    {post.title}
                  </h2>
                  <p className="blog-desc" style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: '13px', color: '#5F5A50',
                    lineHeight: 1.6, marginBottom: '18px',
                  }}>
                    {post.description}
                  </p>
                  <span style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: '13px', color: '#9A7B39',
                    fontWeight: 500,
                  }}>
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
