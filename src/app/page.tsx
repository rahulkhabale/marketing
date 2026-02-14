import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Features from '@/components/Features'
import WhyMailblew from '@/components/WhyMailblew'
import CodeExample from '@/components/CodeExample'
import FullFeatures from '@/components/FullFeatures'
import PricingPreview from '@/components/PricingPreview'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <WhyMailblew />
      <CodeExample />
      <FullFeatures />
      <PricingPreview />
      <CTA />
      <Footer />
    </main>
  )
}
