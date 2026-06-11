import Navbar from '@/components/Navbar'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Cledger',
  description: 'Transparent, turnover-based pricing for bookkeeping, VAT, payroll and full finance outsourcing. Build your custom package instantly.',
  alternates: { canonical: 'https://www.cledger.co.uk/pricing' },
  openGraph: {
    title: 'Pricing | Cledger',
    description: 'Transparent, turnover-based pricing for bookkeeping, VAT, payroll and full finance outsourcing.',
    url: 'https://www.cledger.co.uk/pricing',
    siteName: 'Cledger', locale: 'en_GB', type: 'website',
    images: [{ url: 'https://www.cledger.co.uk/og-image.png', width: 1200, height: 630 }],
  },
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <PricingSection />
      <Footer />
    </>
  )
}
