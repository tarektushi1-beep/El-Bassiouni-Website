// src/app/[locale]/products/page.tsx
import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory } from '@/sanity/lib/types'
import Link from 'next/link'

export const revalidate = 3600

export default async function ProductsPage() {
  const categories: SanityCategory[] = await client.fetch(CATEGORIES_QUERY)

  return (
    <>
      <section className="bg-eb-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            Our Products
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
            Six specialized equipment categories, 14 world-class international brands.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`products/${cat.slug}`}
                className="group block border border-gray-200 hover:border-eb-red transition-all duration-300 p-8 hover:shadow-lg"
              >
                <h2 className="font-aspire text-xl uppercase tracking-wide text-eb-black group-hover:text-eb-red transition-colors mb-3">
                  {cat.name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
