import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'How Much Does a Bookkeeper Cost in the UK? (2026 Guide) | Cledger',
  description: 'UK bookkeeping costs range from £150–£800/month depending on transaction volume and services. See the full 2026 pricing breakdown and compare options.',
  openGraph: {
    title: 'How Much Does a Bookkeeper Cost in the UK? (2026 Guide)',
    description: 'UK bookkeeping costs range from £150–£800/month. Full breakdown of hourly rates, monthly packages and how to get the best value.',
    url: 'https://www.cledger.co.uk/blog/how-much-does-a-bookkeeper-cost-uk',
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
}

export default function Article1() {
  return (
    <>
      <Navbar />
      <main style={s.main}>
        <div style={s.wrap}>
          <span style={s.eyebrow}>Pricing guide</span>
          <h1 style={s.h1}>How much does a bookkeeper cost in the UK? (2026 guide)</h1>
          <div style={s.meta}>
            <span>June 1, 2026</span>
            <span>· 5 min read</span>
            <span>· By Cledger</span>
          </div>

          <div style={s.intro}>
            UK bookkeeping costs range from <strong style={{color:C.white}}>£150 to £800 per month</strong> for most small businesses — but the right price depends entirely on your transaction volume, the services you need, and whether you hire locally or remotely. This guide breaks it all down.
          </div>

          <h2 style={s.h2}>Why bookkeeping costs vary so much</h2>
          <p style={s.p}>No two businesses are the same. A sole trader with 30 bank transactions per month has very different needs to a VAT-registered Ltd company with 300 transactions, multiple employees, and quarterly returns to file. The price reflects the complexity — not just the time.</p>
          <p style={s.p}>The three biggest factors that affect your bookkeeping cost are: transaction volume (how many transactions go through your accounts each month), the services included (basic bookkeeping only vs. bookkeeping plus VAT, payroll, and management accounts), and the type of provider you use (traditional local firm, online firm, or remote specialist).</p>

          <h2 style={s.h2}>UK bookkeeping costs by service type</h2>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Service</th>
                <th style={s.th}>Market rate</th>
                <th style={s.th}>Cledger price</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Bookkeeping only (up to 150 txns)','£200–£400/mo','From £175/mo'],
                ['Bookkeeping + VAT returns','£350–£600/mo','From £274/mo'],
                ['Bookkeeping + VAT + Payroll','£450–£800/mo','From £303/mo'],
                ['Full finance outsourcing','£800–£2,000/mo','From £449/mo'],
                ['VAT return only (one-off)','£150–£400/qtr','£99/mo'],
                ['Self Assessment (one-off)','£150–£400/yr','£65/mo'],
                ['CT600 Corporation Tax','£300–£600/yr','£65/mo'],
              ].map(([svc,market,cledger])=>(
                <tr key={svc}>
                  <td style={s.td}>{svc}</td>
                  <td style={{...s.td,color:C.muted}}>{market}</td>
                  <td style={{...s.td,color:C.gold2,fontWeight:500}}>{cledger}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={s.h2}>Hourly rates vs monthly packages — which is better?</h2>
          <p style={s.p}>Most professional bookkeepers charge either a fixed monthly retainer or an hourly rate. Hourly rates in the UK typically range from £20–£50/hour for a self-employed bookkeeper, and £40–£80/hour for a firm. The problem with hourly billing is unpredictability — your bill varies every month and you never quite know what you are paying for.</p>
          <p style={s.p}>Fixed monthly packages are almost always better for small businesses. You know exactly what you are paying, what is included, and there are no surprises at the end of the month. Every reputable online bookkeeping firm — including Cledger — operates on fixed monthly fees.</p>

          <div style={s.highlight}>
            <p style={{...s.p,marginBottom:0,color:C.white}}><strong>The real cost of doing it yourself:</strong> Many business owners try to handle their own bookkeeping. At an average hourly rate of £25 for a business owner's time, spending just 4 hours per month on bookkeeping costs you £100/month in lost productivity — before accounting for errors, missed deductions, and HMRC penalties.</p>
          </div>

          <h2 style={s.h2}>What affects the price most?</h2>
          <p style={s.p}><strong style={{color:C.white}}>Transaction volume</strong> is the single biggest driver. Bookkeepers price based on how many bank transactions, invoices, receipts, and payments flow through your accounts each month. A business with 50 transactions/month is significantly cheaper to service than one with 500.</p>
          <p style={s.p}><strong style={{color:C.white}}>VAT registration</strong> adds meaningful cost. If you are VAT-registered, your bookkeeper needs to process input and output VAT on every transaction and file quarterly returns. This typically adds £80–£200/month to the base bookkeeping cost at traditional firms.</p>
          <p style={s.p}><strong style={{color:C.white}}>Number of entities</strong> matters too. If you run multiple companies or have a holding structure, you will need bookkeeping across all entities — which multiplies the work, though most firms offer a bulk discount.</p>

          <h2 style={s.h2}>Traditional firm vs online bookkeeper — what is the difference?</h2>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Factor</th>
                <th style={s.th}>Traditional firm</th>
                <th style={s.th}>Online bookkeeper</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Price','£300–£1,000/mo','£150–£500/mo'],
                ['Transparent pricing','Rarely','Always'],
                ['Dedicated contact','Sometimes','Usually'],
                ['MTD compliant','Varies','Yes'],
                ['Software','Often IRIS/Sage','Xero/QuickBooks'],
                ['Speed of communication','Slow (days)','Fast (hours)'],
              ].map(([f,t,o])=>(
                <tr key={f}>
                  <td style={s.td}>{f}</td>
                  <td style={{...s.td,color:C.muted}}>{t}</td>
                  <td style={{...s.td,color:C.green}}>{o}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={s.callout}>
            <p style={{...s.p,marginBottom:0,color:C.white}}><strong>💡 Key takeaway:</strong> Online bookkeepers consistently offer the same quality of service as traditional firms at 30–50% lower cost — because they have lower overheads. The switch to cloud accounting (Xero, QuickBooks) has made remote bookkeeping just as effective as face-to-face.</p>
          </div>

          <h2 style={s.h2}>How much should you pay? A simple guide</h2>
          <p style={s.p}>As a rough guide: sole traders and freelancers with simple finances should expect to pay <strong style={{color:C.white}}>£100–£200/month</strong>. Small Ltd companies with VAT and 1–5 employees should budget <strong style={{color:C.white}}>£200–£400/month</strong>. Growing businesses with payroll, VAT, and management accounts should plan for <strong style={{color:C.white}}>£400–£700/month</strong>. Anything above £800/month for a small business is almost certainly overpaying.</p>

          <h2 style={s.h2}>What Cledger charges — and why</h2>
          <p style={s.p}>Cledger is a UK-registered accountancy firm with ACCA-trained accountants delivering bookkeeping, VAT, payroll and management accounts remotely. Our pricing is turnover-based — which means a £5M business pays more than a £100k business for the same service, because the work is genuinely more complex. Our prices are 40% below traditional UK firm rates because we operate remotely with lower overhead — and we pass that saving directly to you.</p>
          <p style={s.p}>Unlike firms that hide prices and force you to book a call before you know what anything costs, our full pricing calculator is live on our website. You select your services, see your exact monthly price, and can request a quote instantly.</p>

          <Link href="/pricing" style={s.cta}>See Cledger pricing — build your package →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
