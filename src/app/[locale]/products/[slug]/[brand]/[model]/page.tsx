import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug } from '@/data/categories'
import { getProductModel, brandProducts } from '@/data/products'

interface Props {
  params: { slug: string; brand: string; model: string; locale: string }
}

export function generateStaticParams() {
  return ['en', 'ar'].flatMap((locale) =>
    brandProducts.flatMap((bp) =>
      bp.productLines.flatMap((line) =>
        line.models.map((model) => ({
          locale,
          slug: bp.categorySlug,
          brand: bp.brandSlug,
          model: model.slug,
        }))
      )
    )
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = getProductModel(params.slug, params.brand, params.model)
  if (!result) return {}
  return {
    title: result.model.name,
    description: result.model.tagline,
  }
}

export default function ModelSpecPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  const result = getProductModel(params.slug, params.brand, params.model)

  if (!category || !result) notFound()

  const { model, line, brand } = result
  const prefix = params.locale === 'ar' ? '/ar' : ''

  return (
    <>
      {/* Hero */}
      <section className="bg-eb-black pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 font-aspire text-xs tracking-widest uppercase text-gray-600 mb-10">
            <Link href={`${prefix}/products`} className="hover:text-eb-red transition-colors">Products</Link>
            <span>/</span>
            <Link href={`${prefix}/products/${params.slug}`} className="hover:text-eb-red transition-colors">{category.name}</Link>
            <span>/</span>
            <Link href={`${prefix}/products/${params.slug}/${params.brand}`} className="hover:text-eb-red transition-colors">{brand.brandName}</Link>
            <span>/</span>
            <span className="text-gray-400">{line.name}</span>
            <span>/</span>
            <span className="text-gray-400">{model.name}</span>
          </nav>

          <p className="font-aspire text-eb-red text-xs tracking-[0.3em] uppercase mb-3">
            {line.name}
          </p>
          <h1 className="font-aspire text-white text-4xl lg:text-6xl uppercase tracking-tight mb-5">
            {model.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            {model.tagline}
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      {model.images && model.images.length > 0 && (
        <section className="bg-[#f5f5f5] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-aspire text-xs tracking-[0.3em] uppercase text-eb-red mb-6">Product Photos</p>
            <div className={`grid gap-4 ${model.images.length === 1 ? 'grid-cols-1 max-w-2xl' : model.images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
              {model.images.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-white overflow-hidden border border-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${model.name} photo ${i + 1}`} className="w-full h-full object-contain p-4" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Description + Features — left */}
            <div className="lg:col-span-3 space-y-12">
              {/* Brand logo on white background */}
              {brand.logoPlaceholder && (
                <div className="pb-6 border-b border-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.logoPlaceholder}
                    alt={brand.brandName}
                    className="h-14 w-auto max-w-[260px] object-contain"
                  />
                </div>
              )}
              {/* Description */}
              <div>
                <h2 className="font-aspire text-xl uppercase tracking-wide text-eb-black mb-5">Overview</h2>
                <p className="text-gray-600 leading-relaxed text-base">{model.description}</p>
              </div>

              {/* Key Features */}
              {model.features.length > 0 && (
                <div>
                  <h2 className="font-aspire text-xl uppercase tracking-wide text-eb-black mb-5">Key Features</h2>
                  <ul className="space-y-3">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-eb-red rounded-full mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Specs table — right */}
            <div className="lg:col-span-2">
              <div className="bg-[#f5f5f5] p-8 sticky top-28">
                <h2 className="font-aspire text-lg uppercase tracking-wide text-eb-black mb-6">
                  Technical Specifications
                </h2>
                <div className="divide-y divide-gray-200">
                  {model.specs.map((spec) => (
                    <div key={spec.label} className="py-3">
                      <p className="font-aspire text-[10px] tracking-widest uppercase text-gray-400 mb-0.5">
                        {spec.label}
                      </p>
                      <p className="text-sm text-eb-black font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 space-y-3">
                  <Link
                    href={`${prefix}/contact`}
                    className="block text-center font-aspire text-xs tracking-widest uppercase text-white bg-eb-red px-6 py-3.5 hover:bg-red-800 transition-colors"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href={`${prefix}/products/${params.slug}/${params.brand}`}
                    className="block text-center font-aspire text-xs tracking-widest uppercase text-gray-500 border border-gray-300 px-6 py-3.5 hover:border-eb-black hover:text-eb-black transition-colors"
                  >
                    ← Back to {brand.brandName}
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related models in same product line */}
      {line.models.length > 1 && (
        <section className="bg-eb-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-aspire text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
              Also in {line.name}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {line.models
                .filter((m) => m.slug !== model.slug)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`${prefix}/products/${params.slug}/${params.brand}/${related.slug}`}
                    className="group border border-gray-800 hover:border-eb-red p-6 transition-colors"
                  >
                    <h3 className="font-aspire text-white text-sm uppercase tracking-wide mb-2 group-hover:text-eb-red transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{related.tagline}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
