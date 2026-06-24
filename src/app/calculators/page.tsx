import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CalculatorsClient from './CalculatorsClient'

export const metadata: Metadata = {
  title: 'Free UK Tax Calculators 2025/26 — VAT, Corporation Tax & Take-Home Pay | Cledger',
  description: "Calculate your VAT return, corporation tax liability, and PAYE take-home pay for 2025/26. Free tools from Cledger's qualified UK accountants.",
  alternates: {
    canonical: 'https://www.cledger.co.uk/calculators',
  },
}

export default function CalculatorsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#F7F4EC', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{
          borderBottom: '1px solid #E9E2D4',
          padding: '7rem 0 3.5rem',
          textAlign: 'center',
        }}>
          <div className="wrap">
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#9A7B39',
              marginBottom: '16px',
            }}>
              Free tools
            </p>
            <h1 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 400,
              color: '#1A1A16',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}>
              UK tax calculators
            </h1>
            <p style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: '1rem',
              color: '#5F5A50',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Quick estimates using current 2025/26 UK rates. For an exact figure tailored to your situation, book a free call.
            </p>
          </div>
        </section>

        <CalculatorsClient />
      </main>
      <Footer />
    </>
  )
}
