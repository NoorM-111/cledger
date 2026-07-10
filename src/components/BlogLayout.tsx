import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

export const C = {
  navy:'#F7F4EC', card:'#FFFFFF', card2:'#F4ECD7',
  gold:'#9A7B39', gold2:'#C9A84C',
  white:'#1A1A16', muted:'#5F5A50', border:'#E9E2D4', faint:'rgba(26,26,22,0.08)',
  green:'#16A34A', red:'#DC2626', amber:'#B45309',
}

export const s: Record<string,React.CSSProperties> = {
  main:{background:C.navy,minHeight:'100vh',fontFamily:"'Hanken Grotesk','Inter',sans-serif"},
  wrap:{maxWidth:720,margin:'0 auto',padding:'6rem 1.5rem 5rem'},
  eyebrow:{fontFamily:"'IBM Plex Mono',monospace",fontSize:11,fontWeight:500,letterSpacing:'0.14em',textTransform:'uppercase' as const,color:C.gold,display:'block',marginBottom:'1rem'},
  h1:{fontFamily:"'Newsreader',serif",fontSize:'clamp(1.9rem,4vw,2.6rem)',fontWeight:400,color:C.white,marginBottom:'1rem',lineHeight:1.15},
  meta:{fontSize:12,color:C.muted,marginBottom:'2.5rem',display:'flex',gap:16,flexWrap:'wrap' as const},
  intro:{fontSize:16,color:C.muted,lineHeight:1.8,marginBottom:'2.5rem',padding:'1.2rem 1.5rem',background:'#FBF8F1',borderRadius:12,borderLeft:`3px solid ${C.gold}`},
  h2:{fontFamily:"'Newsreader',serif",fontSize:'1.4rem',fontWeight:400,color:C.white,marginBottom:'0.8rem',marginTop:'2.5rem'},
  h3:{fontFamily:"'Newsreader',serif",fontSize:'1.1rem',fontWeight:400,color:C.white,marginBottom:'0.6rem',marginTop:'1.8rem'},
  p:{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:'1.2rem'},
  ul:{paddingLeft:'1.4rem',marginBottom:'1.2rem'},
  li:{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:'0.4rem'},
  strong:{color:C.white},
  table:{width:'100%',borderCollapse:'collapse' as const,marginBottom:'1.5rem',fontSize:13},
  th:{textAlign:'left' as const,padding:'10px 12px',fontSize:10,fontWeight:600,textTransform:'uppercase' as const,letterSpacing:'0.08em',color:C.muted,borderBottom:`1px solid ${C.border}`},
  td:{padding:'10px 12px',borderBottom:`1px solid ${C.faint}`,color:C.white,verticalAlign:'top' as const},
  highlight:{background:C.card2,borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem',border:`1px solid ${C.border}`},
  warning:{background:'rgba(220,38,38,0.04)',border:'1px solid rgba(220,38,38,0.15)',borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem'},
  callout:{background:'rgba(22,163,74,0.04)',border:'1px solid rgba(22,163,74,0.15)',borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem'},
  cta:{display:'block',background:'#1A1A16',color:'#F7F4EC',fontSize:14,fontWeight:600,padding:'14px 28px',borderRadius:10,textDecoration:'none',textAlign:'center' as const,marginTop:'2.5rem'},
}

export interface Faq {
  q: string
  a: string
}

interface BlogLayoutProps {
  eyebrow: string
  title: string
  date: string
  readTime: string
  intro: React.ReactNode
  children: React.ReactNode
  ctaText: string
  ctaHref: string
  /** URL slug, e.g. "how-much-does-a-bookkeeper-cost-uk". Enables Article + Breadcrumb schema. */
  slug?: string
  /** Plain-text summary used in Article schema. */
  description?: string
  /** ISO date of last update, e.g. "2026-07-10". */
  dateModified?: string
  /** FAQs rendered on-page and emitted as FAQPage schema. */
  faqs?: Faq[]
}

const SITE = 'https://www.cledger.co.uk'

function toIso(dateStr: string): string {
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? '2026-06-01' : d.toISOString().split('T')[0]
}

function buildSchema({title, date, dateModified, slug, description, faqs}: Pick<BlogLayoutProps,'title'|'date'|'dateModified'|'slug'|'description'|'faqs'>) {
  const url = `${SITE}/blog/${slug}`
  const graph: object[] = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: title,
      description: description,
      datePublished: toIso(date),
      dateModified: dateModified || toIso(date),
      inLanguage: 'en-GB',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@id': `${SITE}/#noor-muhammad` },
      publisher: { '@id': `${SITE}/#organisation` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    },
  ]
  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

function AuthorBox(){
  return (
    <div style={{display:'flex',gap:14,alignItems:'flex-start',background:'#FBF8F1',border:`1px solid ${C.border}`,borderRadius:12,padding:'1.2rem 1.5rem',marginTop:'2.5rem'}}>
      <div style={{width:44,height:44,minWidth:44,borderRadius:'50%',background:'#1A1A16',color:'#F7F4EC',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'IBM Plex Mono',monospace",fontSize:13,fontWeight:600}}>NM</div>
      <div>
        <p style={{...s.p,marginBottom:4,color:C.white,fontWeight:600,fontSize:14}}>Noor Muhammad</p>
        <p style={{...s.p,marginBottom:0,fontSize:13}}>
          Founder &amp; Principal at Cledger. Part-qualified ACCA with 4+ years of UK public practice
          experience across VAT, corporation tax (CT600), payroll, management accounts and final
          accounts, working with Xero, QuickBooks, IRIS and CCH. <Link href="/team" style={{color:C.gold}}>About the team →</Link>
        </p>
      </div>
    </div>
  )
}

export default function BlogLayout({eyebrow,title,date,readTime,intro,children,ctaText,ctaHref,slug,description,dateModified,faqs}:BlogLayoutProps){
  return (
    <>
      <Navbar />
      {slug && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema({title,date,dateModified,slug,description,faqs})) }}
        />
      )}
      <main style={s.main}>
        <div style={s.wrap}>
          <span style={s.eyebrow}>{eyebrow}</span>
          <h1 style={s.h1}>{title}</h1>
          <div style={s.meta}>
            <span>{date}</span>
            {dateModified && <span>· Updated {new Date(dateModified).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</span>}
            <span>· {readTime}</span>
            <span>· By Noor Muhammad</span>
          </div>
          <div style={s.intro}>{intro}</div>
          {children}
          {faqs && faqs.length > 0 && (
            <section>
              <h2 style={s.h2}>Frequently asked questions</h2>
              {faqs.map(f => (
                <div key={f.q}>
                  <h3 style={s.h3}>{f.q}</h3>
                  <p style={s.p}>{f.a}</p>
                </div>
              ))}
            </section>
          )}
          <AuthorBox />
          <Link href={ctaHref} style={s.cta}>{ctaText}</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
