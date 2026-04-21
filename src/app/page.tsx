// src/app/page.tsx
import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory } from '@/sanity/lib/types'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import CategoryCards from '@/components/home/CategoryCards'
import BrandLogosMarquee from '@/components/home/BrandLogosMarquee'
import WhyElbassiouni from '@/components/home/WhyElbassiouni'
import ContactCTABanner from '@/components/home/ContactCTABanner'

export const revalidate = 3600

export default async function Home() {
  const categories: SanityCategory[] = await client.fetch(CATEGORIES_QUERY)
  const allBrands = categories.flatMap((cat) => cat.brands)

  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryCards categories={categories} />
      <BrandLogosMarquee brands={allBrands} />
      <WhyElbassiouni />
      <ContactCTABanner />
    </>
  )
}
