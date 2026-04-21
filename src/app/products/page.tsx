// src/app/products/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory } from '@/sanity/lib/types'
import SectionTitle from '@/components/ui/SectionTitle'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse 14 premium automotive equipment brands across 6 categories — all available through Elbassiouni in Egypt.',
}

export default async function ProductsPage() {
  const categories: SanityCategory[] = await client.fetch(CATEGORIES_QUERY)

  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">Our Portfolio</p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">Equipment & Brands</h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            14 world-class international brands, 6 equipment categories. Everything your automotive workshop needs, from one trusted partner.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Equipment Categories" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group border border-gray-200 hover:border-eb-red transition-all p-8"
              >
                <h2 className="font-aspire text-xl uppercase tracking-wide text-eb-black group-hover:text-eb-red transition-colors mb-2">{cat.name}</h2>
                <p className="text-eb-red font-aspire text-xs tracking-wider mb-4">{cat.tagline}</p>
                <p className="text-gray-500 text-sm mb-6">{cat.brands.length} brand{cat.brands.length > 1 ? 's' : ''}</p>
                <span className="font-aspire text-xs tracking-widest uppercase text-eb-red flex items-center gap-2">
                  View Brands <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
