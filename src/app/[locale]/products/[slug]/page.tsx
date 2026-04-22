import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories, getCategoryBySlug } from '@/data/categories'
import { getBrandProductData } from '@/data/products'

interface Props {
  params: { slug: string; locale: string }
}

export function generateStaticParams() {
  return ['en', 'ar'].flatMap((locale) =>
    categories.map((cat) => ({ locale, slug: cat.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug)
  if (!category) return {}
  return { title: category.name, description: category.description }
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  if (!category) notFound()

  const prefix = params.locale === 'ar' ? '/ar' : ''

  return (
    <>
      {/* Hero */}
      <section className="bg-eb-black pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`${prefix}/products`}
            className="inline-flex items-center gap-2 font-aspire text-xs tracking-widest uppercase text-gray-500 hover:text-eb-red transition-colors mb-8"
          >
            ← All Categories
          </Link>
          <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-4">
            Equipment Category
          </p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-4">
            {category.name}
          </h1>
          <p className="font-aspire text-gray-400 text-lg tracking-wide mb-4">
            {category.tagline}
          </p>
          <p className="text-gray-400 text-base max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Brand Cards */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {category.brands.map((brand) => {
              const hasProducts = !!getBrandProductData(params.slug, brand.slug)
              const cardInner = (
                <>
                  {/* Card header — brand name only, no logo on dark bg */}
                  <div className="bg-eb-black px-8 py-6 flex items-center min-h-[80px]">
                    <h2 className="font-aspire text-white text-xl uppercase tracking-wide">{brand.name}</h2>
                  </div>
                  {/* Card body */}
                  <div className="p-8">
                    {/* Logo on white background — full brand colors */}
                    {brand.logoPlaceholder && (
                      <div className="mb-7 pb-7 border-b border-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={brand.logoPlaceholder} alt={brand.name} className="h-16 w-auto max-w-[280px] object-contain" />
                      </div>
                    )}
                    <p className="text-gray-500 text-sm leading-relaxed mb-7">{brand.description}</p>
                    <div className="mb-8">
                      <p className="font-aspire text-xs tracking-[0.25em] uppercase text-eb-red mb-4">Key Products</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {brand.products.map((product) => (
                          <li key={product} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-eb-red rounded-full flex-shrink-0" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      {hasProducts ? (
                        <span className="font-aspire text-xs tracking-widest uppercase text-eb-red group-hover:underline">View All Products →</span>
                      ) : (
                        <span className="font-aspire text-xs tracking-widest uppercase text-white bg-eb-red px-6 py-3">Request a Quote</span>
                      )}
                      {brand.website && (
                        <a href={brand.website} target="_blank" rel="noopener noreferrer" className="font-aspire text-xs tracking-widest uppercase text-gray-500 hover:text-eb-black transition-colors">
                          Brand Website →
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )
              return hasProducts ? (
                <Link key={brand.slug} href={`${prefix}/products/${params.slug}/${brand.slug}`} className="bg-white border border-gray-200 hover:border-eb-red transition-colors duration-300 group block">
                  {cardInner}
                </Link>
              ) : (
                <div key={brand.slug} className="bg-white border border-gray-200 group">
                  {cardInner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-eb-black py-20 text-center">
        <p className="font-aspire text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
          Need expert guidance?
        </p>
        <h2 className="font-aspire text-white text-3xl uppercase tracking-tight mb-8">
          Talk to Our Equipment Specialists
        </h2>
        <Link
          href={`${prefix}/contact`}
          className="inline-block font-aspire text-sm tracking-widest uppercase text-white bg-eb-red px-10 py-4 hover:bg-red-800 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </>
  )
}
