// src/components/home/CategoryCards.tsx
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { SanityCategory } from '@/sanity/lib/types'
import SectionTitle from '@/components/ui/SectionTitle'

interface CategoryCardsProps {
  categories: SanityCategory[]
}

export default async function CategoryCards({ categories }: CategoryCardsProps) {
  const t = await getTranslations('categories')

  return (
    <section className="py-24 bg-eb-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('heading')}
          subtitle={t('subheading')}
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`products/${cat.slug}`}
              className="group block border border-gray-200 hover:border-eb-red transition-all duration-300 p-8 hover:shadow-lg"
            >
              <h3 className="font-aspire text-xl uppercase tracking-wide text-eb-black group-hover:text-eb-red transition-colors mb-3">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{cat.tagline}</p>
              <span className="font-aspire text-xs tracking-widest uppercase text-eb-red flex items-center gap-2">
                {t('viewBrands')}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
