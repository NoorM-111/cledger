import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CalculatorsClient from './CalculatorsClient'

export const metadata: Metadata = {
  title: 'Free UK Tax Calculators 2026/27 — VAT, Corporation Tax & Salary | Cledger',
  description: "Calculate your VAT return, corporation tax liability, and PAYE take-home pay for 2026/27. Free tools from Cledger's qualified UK accountants.",
  alternates: {
    canonical: 'https://www.cledger.co.uk/calculators',
  },
}

export default function CalculatorsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0B1222', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(180deg, #0B1222 0%, #111827 100%)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          padding: '7rem 0 3.5rem',
          textAlign: 'center',
        }}>
          <div className="wrap">
            <p style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '1rem',
            }}>
              Free tools · Updated for 2026/27
            </p>
            <h1 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              color: '#F8F5EE',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}>
              Free UK Tax Calculators
            </h1>
            <p style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '1rem',
              color: '#8a94a8',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              2026/27 — updated for the current tax year. All calculations are estimates — confirm with a qualified accountant before filing.
            </p>
          </div>
        </section>

        <CalculatorsClient />
      </main>
      <Footer />
    </>
  )
}
