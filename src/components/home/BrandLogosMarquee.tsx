import { getTranslations } from 'next-intl/server'
import { categories } from '@/data/categories'

export default async function BrandLogosMarquee() {
  const t = await getTranslations('brands')
  const allBrands = categories.flatMap((cat) => cat.brands)

  return (
    <section className="bg-white py-14 overflow-hidden border-t border-b border-gray-100">
      <p className="text-center font-aspire text-xs tracking-[0.3em] uppercase text-gray-400 mb-10">
        {t('heading')}
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...allBrands, ...allBrands].map((brand, i) => (
          <div
            key={`${brand.slug}-${i}`}
            className="inline-flex items-center justify-center mx-12 min-w-[160px] group"
          >
            {brand.logoPlaceholder ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={brand.logoPlaceholder}
                alt={brand.name}
                className="w-[176px] h-[70px] object-contain"
              />
            ) : (
              <span className="font-aspire text-xs tracking-widest uppercase text-gray-400 group-hover:text-eb-black transition-colors">
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
