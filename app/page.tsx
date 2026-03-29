import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhatIsGlassio from '@/components/WhatIsGlassio'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import BusinessBenefits from '@/components/BusinessBenefits'
import HowItHelps from '@/components/HowItHelps'
import WhyChoose from '@/components/WhyChoose'
import AppPreview from '@/components/AppPreview'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080B14]">
      <Navigation />
      <Hero />
      <WhatIsGlassio />
      <HowItWorks />
      <Features />
      <BusinessBenefits />
      <HowItHelps />
      <WhyChoose />
      <AppPreview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
