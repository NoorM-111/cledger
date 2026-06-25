import React from 'react'

const posts = [
  { tag: 'Software Guide', title: 'Xero vs QuickBooks UK — Which Is Better?', href: '/blog/xero-vs-quickbooks-uk' },
  { tag: 'MTD Guide', title: 'What Is Making Tax Digital (MTD)?', href: '/blog/what-is-making-tax-digital-mtd' },
  { tag: 'Tax Planning', title: 'How to Pay Yourself as a Ltd Company Director', href: '/blog/how-to-pay-yourself-ltd-director' },
]

export default function BlogSection() {
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(76px,10vw,120px) clamp(22px,5vw,56px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ font: "500 11px 'IBM Plex Mono',monospace", letterSpacing: 2, textTransform: 'uppercase', color: '#9A7B39', marginBottom: 18 }}>Resources</div>
          <h2 style={{ font: "400 clamp(28px,4.4vw,46px)/1.1 'Newsreader',serif", letterSpacing: -1, color: '#1A1A16', margin: 0, textWrap: 'balance' as any }}>
            Latest accounting <em style={{ fontStyle: 'italic', color: '#9A7B39' }}>insights</em>
          </h2>
        </div>
        <a href="/blog" style={{ font: "600 14px 'Hanken Grotesk'", color: '#9A7B39', textDecoration: 'none' }}>View all articles →</a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 'clamp(16px,1.8vw,22px)', marginTop: 'clamp(36px,5vw,48px)' }}>
        {posts.map(({ tag, title, href }) => (
          <a key={href} href={href} style={{ background: '#FFFFFF', border: '1px solid #E9E2D4', borderRadius: 12, padding: 26, textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
            <span style={{ font: "600 10px 'Hanken Grotesk'", letterSpacing: '0.5px', textTransform: 'uppercase', color: '#9A7B39', background: '#F4ECD7', borderRadius: 20, padding: '4px 11px', alignSelf: 'flex-start', marginBottom: 16 }}>{tag}</span>
            <h3 style={{ font: "500 18px/1.32 'Newsreader',serif", color: '#1A1A16', margin: '0 0 10px', flex: 1 }}>{title}</h3>
            <span style={{ font: "500 13px 'Hanken Grotesk'", color: '#9A7B39' }}>Read more →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
