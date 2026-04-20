// src/components/home/BrandLogosMarquee.tsx
import { categories } from '@/data/categories'

const allBrands = categories.flatMap((cat) => cat.brands)

export default function BrandLogosMarquee() {
  return (
    <section className="bg-eb-gray py-12 overflow-hidden">
      <p className="text-center font-aspire text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
        Our Brand Portfolio
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...allBrands, ...allBrands].map((brand, i) => (
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
