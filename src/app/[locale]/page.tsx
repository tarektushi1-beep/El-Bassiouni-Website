// src/app/[locale]/page.tsx
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import CategoryCards from '@/components/home/CategoryCards'
import BrandLogosMarquee from '@/components/home/BrandLogosMarquee'
import WhyElbassiouni from '@/components/home/WhyElbassiouni'
import ContactCTABanner from '@/components/home/ContactCTABanner'

export default async function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryCards />
      <BrandLogosMarquee />
      <WhyElbassiouni />
      <ContactCTABanner />
    </>
  )
}
