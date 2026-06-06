import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

export const C = {
  navy:'#0B1222',card:'#111827',card2:'#192033',gold:'#C9A84C',gold2:'#e8c96a',
  white:'#F8F5EE',muted:'#8a94a8',border:'rgba(201,168,76,0.18)',faint:'rgba(255,255,255,0.07)',
  green:'#4ade80',red:'#f87171',amber:'#fbbf24',
}

export const s: Record<string,React.CSSProperties> = {
  main:{background:C.navy,minHeight:'100vh',fontFamily:"'Sora','Inter',sans-serif"},
  wrap:{maxWidth:720,margin:'0 auto',padding:'6rem 1.5rem 5rem'},
  eyebrow:{fontSize:11,fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase' as const,color:C.gold,display:'block',marginBottom:'1rem'},
  h1:{fontFamily:"'DM Serif Display',serif",fontSize:'clamp(1.9rem,4vw,2.6rem)',fontWeight:400,color:C.white,marginBottom:'1rem',lineHeight:1.15},
  meta:{fontSize:12,color:C.muted,marginBottom:'2.5rem',display:'flex',gap:16,flexWrap:'wrap' as const},
  intro:{fontSize:16,color:C.muted,lineHeight:1.8,marginBottom:'2.5rem',padding:'1.2rem 1.5rem',background:C.card,borderRadius:12,borderLeft:`3px solid ${C.gold}`},
  h2:{fontFamily:"'DM Serif Display',serif",fontSize:'1.4rem',fontWeight:400,color:C.white,marginBottom:'0.8rem',marginTop:'2.5rem'},
  h3:{fontFamily:"'DM Serif Display',serif",fontSize:'1.1rem',fontWeight:400,color:C.white,marginBottom:'0.6rem',marginTop:'1.8rem'},
  p:{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:'1.2rem'},
  ul:{paddingLeft:'1.4rem',marginBottom:'1.2rem'},
  li:{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:'0.4rem'},
  strong:{color:C.white},
  table:{width:'100%',borderCollapse:'collapse' as const,marginBottom:'1.5rem',fontSize:13},
  th:{textAlign:'left' as const,padding:'10px 12px',fontSize:10,fontWeight:600,textTransform:'uppercase' as const,letterSpacing:'0.08em',color:C.muted,borderBottom:`1px solid ${C.faint}`},
  td:{padding:'10px 12px',borderBottom:`0.5px solid ${C.faint}`,color:C.white,verticalAlign:'top' as const},
  highlight:{background:C.card2,borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem',border:`0.5px solid ${C.border}`},
  warning:{background:'rgba(248,113,113,0.06)',border:'0.5px solid rgba(248,113,113,0.2)',borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem'},
  callout:{background:'rgba(74,222,128,0.06)',border:'0.5px solid rgba(74,222,128,0.2)',borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem'},
  cta:{display:'block',background:C.gold,color:C.navy,fontSize:14,fontWeight:600,padding:'14px 28px',borderRadius:10,textDecoration:'none',textAlign:'center' as const,marginTop:'2.5rem'},
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
}

export default function BlogLayout({eyebrow,title,date,readTime,intro,children,ctaText,ctaHref}:BlogLayoutProps){
  return (
    <>
      <Navbar />
      <main style={s.main}>
        <div style={s.wrap}>
          <span style={s.eyebrow}>{eyebrow}</span>
          <h1 style={s.h1}>{title}</h1>
          <div style={s.meta}>
            <span>{date}</span>
            <span>· {readTime}</span>
            <span>· By Noor Muhammad</span>
          </div>
          <div style={s.intro}>{intro}</div>
          {children}
          <Link href={ctaHref} style={s.cta}>{ctaText}</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
