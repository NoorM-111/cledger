import Topbar      from '@/components/Topbar'
import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import TrustBar    from '@/components/TrustBar'
import SoftwareStrip from '@/components/SoftwareStrip'
import Services    from '@/components/Services'
import WhyCledger  from '@/components/WhyCledger'
import Credentials from '@/components/Credentials'
import SlackAccess from '@/components/SlackAccess'
import CledgerStatus from '@/components/CledgerStatus'
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
      <SoftwareStrip />
      <Services />
      <WhyCledger />
      <Credentials />
      <SlackAccess />
      <div style={{ display: "flex", justifyContent: "center", padding: "80px 24px", background: "#0B1222" }}>
        <CledgerStatus live={true} maxItems={5} />
      </div>
      <Sectors />
      <Team />
      <ContactSection />
      <CTA />
      <Footer />
    </>
  )
}