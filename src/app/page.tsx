import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import SoftwareStrip from '@/components/SoftwareStrip'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import PricingTeaser from '@/components/PricingTeaser'
import WhyCledger from '@/components/WhyCledger'
import SlackAccess from '@/components/SlackAccess'
import Sectors from '@/components/Sectors'
import Team from '@/components/Team'
import LatestPosts from '@/components/LatestPosts'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <SoftwareStrip />
      <Services />
      <Approach />
      <PricingTeaser />
      <WhyCledger />
      <SlackAccess />
      <Sectors />
      <Team />
      <LatestPosts />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
