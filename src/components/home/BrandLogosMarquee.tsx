// src/components/home/BrandLogosMarquee.tsx
import { getTranslations } from 'next-intl/server'
import type { SanityBrand } from '@/sanity/lib/types'

interface BrandLogosMarqueeProps {
  brands: SanityBrand[]
}

export default async function BrandLogosMarquee({ brands }: BrandLogosMarqueeProps) {
  const t = await getTranslations('brands')

  return (
    <section className="bg-eb-gray py-12 overflow-hidden">
      <p className="text-center font-aspire text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
        {t('heading')}
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={`${brand.slug}-${i}`}
            className="inline-flex items-center mx-12 text-gray-400 hover:text-white transition-colors"
          >
            <span className="font-aspire text-sm tracking-wider uppercase">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
