import Link from 'next/link'
import { categories } from '@/data/categories'

interface Props {
  params: { locale: string }
}

export default async function ProductsPage({ params }: Props) {
  const prefix = params.locale === 'ar' ? '/ar' : ''

  return (
    <>
      {/* Hero */}
      <section className="bg-eb-black pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-5">
            Equipment Portfolio
          </p>
          <h1 className="font-aspire text-white text-5xl lg:text-7xl uppercase tracking-tight mb-6">
            Our Products
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Six specialised categories. The world&apos;s leading brands. Built for every professional workshop.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-eb-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
            {categories.map((cat, index) => (
              <Link
                key={cat.slug}
                href={`${prefix}/products/${cat.slug}`}
                className="group relative bg-eb-black p-10 min-h-[340px] flex flex-col justify-between hover:bg-[#111] transition-colors duration-300"
              >
                {/* Top: number + explore */}
                <div className="flex items-start justify-between">
                  <span className="font-aspire text-6xl font-bold text-gray-900 leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-aspire text-xs tracking-widest uppercase text-gray-600 group-hover:text-eb-red transition-colors pt-2">
                    Explore →
                  </span>
                </div>

                {/* Bottom: info + logos */}
                <div>
                  <div className="w-10 h-px bg-eb-red mb-5" />
                  <h2 className="font-aspire text-white text-xl uppercase tracking-wide mb-2 group-hover:text-eb-red transition-colors duration-200">
                    {cat.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {cat.tagline}
                  </p>

                  {/* Brand names */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {cat.brands.slice(0, 4).map((brand) => (
                      <span key={brand.slug} className="font-aspire text-[10px] tracking-widest uppercase text-gray-700 group-hover:text-gray-500 transition-colors">
                        {brand.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
