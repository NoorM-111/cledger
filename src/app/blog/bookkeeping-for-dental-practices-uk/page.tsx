import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Bookkeeping for Dental Practices UK — What You Need to Know | Cledger',
  description: 'Dental practices have unique accounting needs — mixed NHS/private income, associate payments, CQC compliance. Here is the complete guide to dental bookkeeping in the UK.',
  openGraph: {
    title: 'Bookkeeping for Dental Practices UK — What You Need to Know',
    description: 'Mixed NHS/private income, associate payments and CQC compliance — dental bookkeeping explained by accountants who specialise in it.',
    url: 'https://www.cledger.co.uk/blog/bookkeeping-for-dental-practices-uk',
    type: 'article',
  },
}

const C = {
  navy:'#0B1222',card:'#111827',card2:'#192033',gold:'#C9A84C',gold2:'#e8c96a',
  white:'#F8F5EE',muted:'#8a94a8',border:'rgba(201,168,76,0.18)',faint:'rgba(255,255,255,0.07)',
  green:'#4ade80',
}

const s: Record<string,React.CSSProperties> = {
  main:{background:C.navy,minHeight:'100vh',fontFamily:"'Sora','Inter',sans-serif"},
  wrap:{maxWidth:720,margin:'0 auto',padding:'6rem 1.5rem 5rem'},
  eyebrow:{fontSize:11,fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase' as const,color:C.gold,display:'block',marginBottom:'1rem'},
  h1:{fontFamily:"'DM Serif Display',serif",fontSize:'clamp(1.9rem,4vw,2.6rem)',fontWeight:400,color:C.white,marginBottom:'1rem',lineHeight:1.15},
  meta:{fontSize:12,color:C.muted,marginBottom:'2.5rem',display:'flex',gap:16,flexWrap:'wrap' as const},
  intro:{fontSize:16,color:C.muted,lineHeight:1.8,marginBottom:'2.5rem',padding:'1.2rem 1.5rem',background:C.card,borderRadius:12,borderLeft:`3px solid ${C.gold}`},
  h2:{fontFamily:"'DM Serif Display',serif",fontSize:'1.4rem',fontWeight:400,color:C.white,marginBottom:'0.8rem',marginTop:'2.5rem'},
  p:{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:'1.2rem'},
  table:{width:'100%',borderCollapse:'collapse' as const,marginBottom:'1.5rem',fontSize:13},
  th:{textAlign:'left' as const,padding:'10px 12px',fontSize:10,fontWeight:600,textTransform:'uppercase' as const,letterSpacing:'0.08em',color:C.muted,borderBottom:`1px solid ${C.faint}`},
  td:{padding:'10px 12px',borderBottom:`0.5px solid ${C.faint}`,color:C.white,verticalAlign:'top' as const},
  highlight:{background:C.card2,borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem',border:`0.5px solid ${C.border}`},
  callout:{background:'rgba(74,222,128,0.06)',border:'0.5px solid rgba(74,222,128,0.2)',borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem'},
  cta:{display:'block',background:C.gold,color:C.navy,fontSize:14,fontWeight:600,padding:'14px 28px',borderRadius:10,textDecoration:'none',textAlign:'center' as const,marginTop:'2.5rem'},
  li:{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:'0.6rem',paddingLeft:8},
}

export default function Article3() {
  return (
    <>
      <Navbar />
      <main style={s.main}>
        <div style={s.wrap}>
          <span style={s.eyebrow}>Dental & healthcare</span>
          <h1 style={s.h1}>Bookkeeping for dental practices UK — what you need to know</h1>
          <div style={s.meta}>
            <span>June 15, 2026</span>
            <span>· 7 min read</span>
            <span>· By Cledger</span>
          </div>

          <div style={s.intro}>
            Dental practices have accounting needs that most generalist bookkeepers get wrong. Mixed NHS and private income, associate dentist payments, CQC compliance, and equipment financing all require specific knowledge. This guide covers everything — written by accountants who have managed <strong style={{color:C.white}}>100+ dental and locum client accounts.</strong>
          </div>

          <h2 style={s.h2}>Why dental bookkeeping is different</h2>
          <p style={s.p}>Most bookkeepers can handle a simple Ltd company with a single income stream. Dental practices are different because income comes from multiple sources — NHS contract payments from NHS England, private patient fees, plan membership income (e.g. Denplan, DPAS), and potentially income from associates renting a chair. Each of these needs to be categorised correctly and treated differently for VAT and tax purposes.</p>
          <p style={s.p}>On top of that, dental practices typically have complex expense structures including high-value equipment purchases, clinical supplies, laboratory fees, associate payment calculations, and compliance costs. Getting any of these wrong can mean overpaying tax or triggering an HMRC investigation.</p>

          <h2 style={s.h2}>NHS vs private income — how it affects your bookkeeping</h2>
          <p style={s.p}>NHS dental treatment is VAT-exempt in the UK. Private dental treatment is also generally VAT-exempt under the healthcare exemption — but this gets complicated when your practice also provides cosmetic treatments, which may be subject to VAT at 20%. Getting this distinction wrong is one of the most common and expensive mistakes dental practices make.</p>

          <div style={s.highlight}>
            <p style={{...s.p,marginBottom:0,color:C.white}}><strong>Key point:</strong> NHS contract payments are paid monthly in advance by NHS England based on your contracted UDA (Unit of Dental Activity) value. These need to be recognised correctly in your accounts — not just recorded as they hit your bank account. Clawback provisions for underperformance also need to be accounted for.</p>
          </div>

          <h2 style={s.h2}>Associate dentist payments — the bookkeeping challenge</h2>
          <p style={s.p}>If you employ associate dentists, their payment structure creates a specific bookkeeping challenge. Associates are typically self-employed and paid a percentage of the income they generate — commonly 40–50% of private fees and a set rate per NHS UDA completed.</p>
          <p style={s.p}>You need accurate records of each associate's production to calculate their earnings correctly. This means tracking income by chair, by dentist, and by treatment type — not just recording totals at the practice level. Your bookkeeper needs to understand this structure or they will categorise associate payments incorrectly, creating payroll and tax problems.</p>

          <h2 style={s.h2}>The key accounting areas for dental practices</h2>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Area</th>
                <th style={s.th}>What it involves</th>
                <th style={s.th}>Common mistakes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['NHS contract income','Monthly NHS England payments, UDA tracking, clawback','Recording as cash received rather than earned'],
                ['Private patient income','Daily takings, card payments, plan income','Mixing with NHS income — needs separate categorisation'],
                ['VAT','Exempt for NHS & private medical, may apply to cosmetics','Incorrectly charging VAT on exempt treatments'],
                ['Associate payments','% of income calculations, self-employed payments','Treating as employment — triggers PAYE/NI issues'],
                ['Equipment & assets','Dental chairs, X-ray, CBCT — significant capex','Expensing capital items instead of depreciating'],
                ['Lab fees','Monthly lab invoices — large regular expense','Missing accruals at month end'],
                ['CQC fees','Annual registration and inspection fees','Misclassifying as deductible vs. non-deductible'],
              ].map(([area,what,mistake])=>(
                <tr key={area}>
                  <td style={{...s.td,fontWeight:500}}>{area}</td>
                  <td style={{...s.td,color:C.muted,fontSize:12}}>{what}</td>
                  <td style={{...s.td,color:'#f87171',fontSize:12}}>{mistake}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={s.h2}>Software for dental practice bookkeeping</h2>
          <p style={s.p}>Most dental practices use practice management software (Dentally, Software of Excellence, Exact) for clinical records and appointment management. Your bookkeeping software needs to sit alongside this — not replace it. The most common setup is Xero for bookkeeping, with bank feeds connected from your practice bank account and separate tracking for NHS and private income streams.</p>
          <p style={s.p}>Some practices try to use their practice management software for financial reporting too — but this rarely gives you the level of detail needed for accurate accounts, VAT returns, or management information.</p>

          <h2 style={s.h2}>VAT for dental practices</h2>
          <p style={s.p}>Most dental income is VAT-exempt under the healthcare exemption in Schedule 9 of the VAT Act. However, VAT registration may still be relevant for your practice if you provide taxable supplies alongside exempt ones — for example, selling dental products, providing cosmetic treatments, or renting out surgeries to associates.</p>
          <p style={s.p}>If your taxable turnover exceeds the VAT registration threshold (currently £90,000), you must register for VAT even if most of your income is exempt. A specialist dental accountant can advise on whether partial exemption applies to your practice and how to calculate your recoverable input VAT.</p>

          <h2 style={s.h2}>Why choose a specialist dental bookkeeper</h2>
          <p style={s.p}>A generalist bookkeeper will record your income and expenses — but they will not understand the NHS contract structure, the associate payment model, or the VAT treatment of mixed dental income. This means your accounts may be technically complete but fundamentally wrong in ways that only show up during an HMRC enquiry or when you try to sell the practice.</p>

          <div style={s.callout}>
            <p style={{...s.p,marginBottom:'0.5rem',color:C.white}}><strong>Cledger's dental specialism:</strong></p>
            <p style={{...s.p,marginBottom:0}}>Our founder has personally managed over 100 dental and locum client accounts in UK public practice. We understand NHS contract income, associate structures, CQC compliance, and the full range of dental-specific accounting requirements. We work in Xero and QuickBooks, we are MTD compliant, and our pricing is fully transparent.</p>
          </div>

          <Link href="/pricing" style={s.cta}>Get dental practice bookkeeping from £175/month →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
