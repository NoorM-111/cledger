import Navbar from '@/components/Navbar'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Pricing | Cledger',
  description: 'Transparent, turnover-based pricing for bookkeeping, VAT, payroll and full finance outsourcing. Build your custom package instantly.',
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
