import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, categories } from '@/data/categories'
import { getBrandProductData, brandProducts } from '@/data/products'

interface Props {
  params: { slug: string; brand: string; locale: string }
}

export function generateStaticParams() {
  return ['en', 'ar'].flatMap((locale) =>
    brandProducts.map((bp) => ({
      locale,
      slug: bp.categorySlug,
      brand: bp.brandSlug,
    }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = getBrandProductData(params.slug, params.brand)
  if (!data) return {}
  return {
    title: `${data.brandName} Products`,
    description: `Full ${data.brandName} product range available through Elbassiouni Automotive Equipment.`,
  }
}

export default function BrandProductsPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  const data = getBrandProductData(params.slug, params.brand)

  if (!category || !data) notFound()

  const prefix = params.locale === 'ar' ? '/ar' : ''
  const brandInfo = category.brands.find((b) => b.slug === params.brand)

  return (
    <>
      {/* Hero */}
      <section className="bg-eb-black pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-aspire text-xs tracking-widest uppercase text-gray-600 mb-10">
            <Link href={`${prefix}/products`} className="hover:text-eb-red transition-colors">Products</Link>
            <span>/</span>
            <Link href={`${prefix}/products/${params.slug}`} className="hover:text-eb-red transition-colors">{category.name}</Link>
            <span>/</span>
            <span className="text-gray-400">{data.brandName}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="font-aspire text-white text-4xl lg:text-5xl uppercase tracking-tight mb-3">
                {data.brandName}
              </h1>
              {brandInfo && (
                <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
                  {brandInfo.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link
                href={`${prefix}/contact`}
                className="font-aspire text-xs tracking-widest uppercase text-white bg-eb-red px-6 py-3 hover:bg-red-800 transition-colors"
              >
                Request a Quote
              </Link>
              {brandInfo?.website && (
                <a
                  href={brandInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-aspire text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors"
                >
                  Brand Website →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Brand logo strip — white background, full brand colors */}
      {data.logoPlaceholder && (
        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.logoPlaceholder}
              alt={data.brandName}
              className="h-16 w-auto max-w-[280px] object-contain"
            />
            <div className="w-px h-10 bg-gray-200" />
            <p className="font-aspire text-xs tracking-[0.3em] uppercase text-gray-400">
              Official Partner — Egypt
            </p>
          </div>
        </div>
      )}

      {/* Product Lines */}
      {data.productLines.map((line) => (
        <section key={line.slug} className="bg-[#f5f5f5] border-t border-gray-200">
          {/* Line Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-10">
              <p className="font-aspire text-xs tracking-[0.3em] uppercase text-eb-red mb-2">
                Product Line
              </p>
              <h2 className="font-aspire text-eb-black text-2xl lg:text-3xl uppercase tracking-wide mb-3">
                {line.name}
              </h2>
              <p className="text-gray-500 text-sm max-w-3xl leading-relaxed">
                {line.description}
              </p>
            </div>

            {/* Model Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {line.models.map((model) => (
                <Link
                  key={model.slug}
                  href={`${prefix}/products/${params.slug}/${params.brand}/${model.slug}`}
                  className="group relative bg-white border border-gray-200 hover:border-eb-red transition-colors duration-300 flex flex-col overflow-hidden"
                >
                  {/* Hover product image — fades in on hover, disappears on mouse-out */}
                  {model.images?.[0] && (
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={model.images[0]}
                        alt={model.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay — dark at bottom so model name is readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                      {/* Model info overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="font-aspire text-white text-lg uppercase tracking-wide leading-tight mb-1">
                          {model.name}
                        </p>
                        <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                          {model.tagline}
                        </p>
                        <p className="font-aspire text-eb-red text-xs tracking-widest uppercase mt-3">
                          View Full Specs →
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Card header */}
                  <div className="bg-eb-black px-6 py-5 flex items-center justify-between">
                    <h3 className="font-aspire text-white text-base uppercase tracking-wide group-hover:text-eb-red transition-colors">
                      {model.name}
                    </h3>
                    <span className="text-gray-600 group-hover:text-eb-red transition-colors text-sm">→</span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                      {model.tagline}
                    </p>

                    {/* Top 3 specs preview */}
                    <div className="border-t border-gray-100 pt-4 space-y-2">
                      {model.specs.slice(0, 3).map((spec) => (
                        <div key={spec.label} className="flex justify-between gap-3 text-xs">
                          <span className="text-gray-400 uppercase tracking-wide font-aspire">{spec.label}</span>
                          <span className="text-gray-700 font-medium text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5">
                      <span className="font-aspire text-xs tracking-widest uppercase text-eb-red group-hover:underline">
                        View Full Specs →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

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
