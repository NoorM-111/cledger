import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'What is Making Tax Digital (MTD)? Complete Guide for UK Businesses | Cledger',
  description: 'MTD is mandatory for all VAT-registered UK businesses. Learn what Making Tax Digital means, the deadlines, compatible software, and how to stay compliant.',
  openGraph: {
    title: 'What is Making Tax Digital (MTD)? Complete Guide for UK Businesses',
    description: 'MTD is mandatory for VAT-registered UK businesses. Deadlines, software requirements and how to stay compliant, explained clearly.',
    url: 'https://www.cledger.co.uk/blog/what-is-making-tax-digital-mtd',
    type: 'article',
  },
}

const C = {
  navy:'#F7F4EC',card:'#FFFFFF',card2:'#F4ECD7',gold:'#9A7B39',gold2:'#C9A84C',
  white:'#1A1A16',muted:'#5F5A50',border:'#E9E2D4',faint:'rgba(26,26,22,0.08)',
  green:'#16A34A',red:'#DC2626',amber:'#B45309',
}

const s: Record<string,React.CSSProperties> = {
  main:{background:C.navy,minHeight:'100vh',fontFamily:"'Hanken Grotesk','Inter',sans-serif"},
  wrap:{maxWidth:720,margin:'0 auto',padding:'6rem 1.5rem 5rem'},
  eyebrow:{fontFamily:"'IBM Plex Mono',monospace",fontSize:11,fontWeight:500,letterSpacing:'0.14em',textTransform:'uppercase' as const,color:C.gold,display:'block',marginBottom:'1rem'},
  h1:{fontFamily:"'Newsreader',serif",fontSize:'clamp(1.9rem,4vw,2.6rem)',fontWeight:400,color:C.white,marginBottom:'1rem',lineHeight:1.15},
  meta:{fontSize:12,color:C.muted,marginBottom:'2.5rem',display:'flex',gap:16,flexWrap:'wrap' as const},
  intro:{fontSize:16,color:C.muted,lineHeight:1.8,marginBottom:'2.5rem',padding:'1.2rem 1.5rem',background:'#FBF8F1',borderRadius:12,borderLeft:`3px solid ${C.gold}`},
  h2:{fontFamily:"'Newsreader',serif",fontSize:'1.4rem',fontWeight:400,color:C.white,marginBottom:'0.8rem',marginTop:'2.5rem'},
  p:{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:'1.2rem'},
  table:{width:'100%',borderCollapse:'collapse' as const,marginBottom:'1.5rem',fontSize:13},
  th:{textAlign:'left' as const,padding:'10px 12px',fontSize:10,fontWeight:600,textTransform:'uppercase' as const,letterSpacing:'0.08em',color:C.muted,borderBottom:`1px solid ${C.faint}`},
  td:{padding:'10px 12px',borderBottom:`1px solid ${C.faint}`,color:C.white,verticalAlign:'top' as const},
  highlight:{background:C.card2,borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem',border:`1px solid ${C.border}`},
  warning:{background:'rgba(220,38,38,0.04)',border:'1px solid rgba(220,38,38,0.15)',borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem'},
  callout:{background:'rgba(22,163,74,0.04)',border:'1px solid rgba(22,163,74,0.15)',borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem'},
  cta:{display:'block',background:'#1A1A16',color:'#F7F4EC',fontSize:14,fontWeight:600,padding:'14px 28px',borderRadius:10,textDecoration:'none',textAlign:'center' as const,marginTop:'2.5rem'},
}

export default function Article2() {
  return (
    <>
      <Navbar />
      <main style={s.main}>
        <div style={s.wrap}>
          <span style={s.eyebrow}>Tax & compliance</span>
          <h1 style={s.h1}>What is Making Tax Digital (MTD)? Complete guide for UK businesses</h1>
          <div style={s.meta}>
            <span>June 8, 2026</span>
            <span>· 6 min read</span>
            <span>· By Cledger</span>
          </div>

          <div style={s.intro}>
            Making Tax Digital (MTD) is the UK government's initiative to move tax administration fully online. <strong style={{color:C.white}}>It is already mandatory for VAT-registered businesses</strong> and will expand to Income Tax from April 2026. Here is everything you need to know.
          </div>

          <h2 style={s.h2}>What is Making Tax Digital?</h2>
          <p style={s.p}>Making Tax Digital (MTD) is an HMRC initiative that requires businesses and landlords to keep digital records and submit tax returns using compatible software. The goal is to reduce errors, make the tax system more efficient, and give businesses a clearer real-time picture of their tax position.</p>
          <p style={s.p}>Under MTD, you can no longer submit VAT returns manually through HMRC's online portal or on paper. Every submission must come directly from MTD-compatible software, which means your bookkeeping and accounting records must be kept digitally in an approved system.</p>

          <h2 style={s.h2}>MTD deadlines, what applies to you</h2>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Who</th>
                <th style={s.th}>What</th>
                <th style={s.th}>Deadline</th>
                <th style={s.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['VAT-registered businesses (turnover above £85k)','MTD for VAT','April 2019','Mandatory now'],
                ['All VAT-registered businesses','MTD for VAT','April 2022','Mandatory now'],
                ['Self-employed & landlords (income above £50k)','MTD for Income Tax','April 2026','Mandatory now'],
                ['Self-employed & landlords (income £30k–£50k)','MTD for Income Tax','April 2027','Coming soon'],
                ['All remaining sole traders & landlords','MTD for Income Tax','April 2028','Future'],
                ['Limited companies','MTD for Corporation Tax','TBC','Future'],
              ].map(([who,what,deadline,status])=>(
                <tr key={who}>
                  <td style={s.td}>{who}</td>
                  <td style={{...s.td,color:C.muted}}>{what}</td>
                  <td style={{...s.td,color:C.muted}}>{deadline}</td>
                  <td style={{...s.td,color:status.includes('now')?C.red:status.includes('soon')?C.amber:C.muted,fontWeight:500}}>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={s.warning}>
            <p style={{...s.p,marginBottom:0,color:C.white}}><strong>⚠️ Important:</strong> If you are VAT-registered and still submitting returns manually through HMRC's portal, you are already non-compliant. HMRC can issue penalties for failure to use MTD-compatible software. Contact us immediately if you are not sure whether your current setup is compliant.</p>
          </div>

          <h2 style={s.h2}>What does MTD compliance actually mean in practice?</h2>
          <p style={s.p}>MTD compliance means three things. First, you must keep your financial records digitally, not in spreadsheets alone, but in MTD-compatible software. Second, there must be a digital link between your records and your VAT return, meaning you cannot retype figures from one system to another. Third, your VAT return must be submitted directly from MTD-compatible software to HMRC.</p>
          <p style={s.p}>The most practical way to comply is to use cloud accounting software like Xero or QuickBooks, which are both fully MTD-compatible and submit directly to HMRC at the click of a button.</p>

          <h2 style={s.h2}>MTD-compatible software</h2>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Software</th>
                <th style={s.th}>MTD for VAT</th>
                <th style={s.th}>MTD for Income Tax</th>
                <th style={s.th}>Price from</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Xero','✓ Fully compliant','✓ Ready','£15/mo'],
                ['QuickBooks Online','✓ Fully compliant','✓ Ready','£12/mo'],
                ['Sage Accounting','✓ Fully compliant','✓ Ready','£12/mo'],
                ['FreeAgent','✓ Fully compliant','✓ Ready','£19/mo'],
                ['Excel + Bridging software','✓ With bridging tool','Limited','Varies'],
                ['Manual / paper records','✗ Not compliant','✗ Not compliant','N/A'],
              ].map(([sw,vat,it,price])=>(
                <tr key={sw}>
                  <td style={s.td}>{sw}</td>
                  <td style={{...s.td,color:vat.includes('✓')?C.green:C.red}}>{vat}</td>
                  <td style={{...s.td,color:it.includes('✓')?C.green:it.includes('Limited')?C.amber:C.red}}>{it}</td>
                  <td style={{...s.td,color:C.muted}}>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={s.h2}>What are the penalties for not complying with MTD?</h2>
          <p style={s.p}>HMRC operates a points-based penalty system for MTD non-compliance. Every late or non-compliant submission earns a penalty point. Once you accumulate enough points, you receive a £200 fine. Further failures result in additional £200 penalties each time. For businesses with quarterly obligations (most VAT-registered businesses), the threshold is 4 penalty points before the first £200 fine applies.</p>
          <p style={s.p}>Beyond the financial penalties, HMRC can also charge interest on any VAT paid late, currently 8.5% above the Bank of England base rate.</p>

          <h2 style={s.h2}>How Cledger handles MTD compliance for you</h2>
          <p style={s.p}>Every Cledger client on a package that includes VAT is fully MTD-compliant by default. We manage your records in Xero or QuickBooks, maintain the digital links required by HMRC, and submit your VAT returns directly through MTD-approved software before every deadline. You never need to think about it, we handle everything.</p>

          <div style={s.callout}>
            <p style={{...s.p,marginBottom:0,color:C.white}}><strong>✓ Already on Xero or QuickBooks?</strong> Great, the software side is sorted. What you need is someone to manage it correctly, reconcile your accounts, and submit on time every quarter. That is exactly what Cledger does, from £175/month.</p>
          </div>

          <Link href="/pricing" style={s.cta}>Get MTD-compliant bookkeeping from £175/month →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
