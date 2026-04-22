import Link from 'next/link'
import { getTranslations, getLocale } from 'next-intl/server'
import { categories } from '@/data/categories'
import SectionTitle from '@/components/ui/SectionTitle'

export default async function CategoryCards() {
  const t = await getTranslations('categories')
  const locale = await getLocale()
  const prefix = locale === 'ar' ? '/ar' : ''

  return (
    <section className="bg-eb-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('heading')}
          subtitle={t('subheading')}
          centered
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
          {categories.map((cat, index) => (
            <Link
              key={cat.slug}
              href={`${prefix}/products/${cat.slug}`}
              className="group relative bg-eb-black p-8 min-h-[280px] flex flex-col justify-between hover:bg-[#111] transition-colors duration-300"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className="font-aspire text-5xl font-bold text-gray-900 leading-none select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-aspire text-xs tracking-widest uppercase text-gray-600 group-hover:text-eb-red transition-colors pt-1">
                  {t('viewBrands')} →
                </span>
              </div>

              {/* Bottom */}
              <div>
                <div className="w-8 h-px bg-eb-red mb-4" />
                <h3 className="font-aspire text-white text-lg uppercase tracking-wide mb-2 group-hover:text-eb-red transition-colors duration-200">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
