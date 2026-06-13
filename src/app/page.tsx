import Topbar      from '@/components/Topbar'
import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import TrustBar    from '@/components/TrustBar'
import SoftwareStrip from '@/components/SoftwareStrip'
import Services    from '@/components/Services'
import WhyCledger  from '@/components/WhyCledger'
import Credentials from '@/components/Credentials'
import SlackAccess from '@/components/SlackAccess'
import Sectors     from '@/components/Sectors'
import LatestPosts from '@/components/LatestPosts'
import Team        from '@/components/Team'
import ContactSection from '@/components/ContactSection'
import CTA         from '@/components/CTA'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <TrustBar />
      <SoftwareStrip />
      <Services />
      <WhyCledger />
      <Credentials />
      <SlackAccess />
      <Sectors />
      <LatestPosts />
      <Team />
      <ContactSection />
      <CTA />
      <section aria-label="About Cledger bookkeeping services" style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          Online bookkeeping services built for UK small businesses
        </h2>
        <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '1rem' }}>
          Running a small business in the UK means keeping HMRC happy, staying on top of VAT deadlines,
          and actually understanding whether your business is profitable. Most business owners do not have
          time for that — and that is exactly what Cledger is for.
        </p>
        <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '2rem' }}>
          Cledger is a UK-registered accounting firm offering fixed monthly bookkeeping, VAT returns (MTD-compliant),
          payroll, management accounts, and Corporation Tax (CT600) filing. We work with sole traders,
          limited companies, e-commerce sellers, dental practices, and professional service businesses across the UK.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          Making Tax Digital (MTD) compliant bookkeeping
        </h2>
        <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '1rem' }}>
          If your business is VAT-registered, you are already required to keep digital records and submit
          VAT returns through HMRC-approved software. Cledger handles preparation, reconciliation, and
          HMRC submission on your behalf — so you never miss a deadline or face an unexpected penalty.
        </p>
        <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '2rem' }}>
          MTD for Income Tax Self Assessment (ITSA) is being phased in from April 2026 for sole traders
          and landlords earning over £50,000 per year. Cledger can set up your digital record-keeping now
          so you are fully prepared before the deadline.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          Specialist bookkeeping for dental practices and healthcare professionals
        </h2>
        <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '0' }}>
          We have hands-on experience working with dental practices, including associate pay calculations,
          NHS versus private income splits, and multi-entity setups. If you run a dental or healthcare
          business and need reliable monthly bookkeeping from a team that understands your sector, we can help.
        </p>
      </section>
      <Footer />
    </>
  )
}