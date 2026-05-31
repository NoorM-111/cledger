import Topbar      from '@/components/Topbar'
import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import TrustBar    from '@/components/TrustBar'
import Services    from '@/components/Services'
import WhyCledger  from '@/components/WhyCledger'
import Credentials from '@/components/Credentials'
import SlackAccess from '@/components/SlackAccess'
import Sectors     from '@/components/Sectors'
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
      <Services />
      <WhyCledger />
      <Credentials />
      <SlackAccess />
      <Sectors />
      <Team />
      <ContactSection />
      <CTA />
      <Footer />
    </>
  )
}