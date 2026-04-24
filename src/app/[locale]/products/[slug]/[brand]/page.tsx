import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, categories } from '@/data/categories'
import { getBrandProductData, brandProducts } from '@/data/products'

interface Props {
  params: { slug: string; brand: string; locale: string }
}

function CountryFlag({ code, className }: { code: string; className?: string }) {
  if (code === 'DE') {
    return (
      <svg viewBox="0 0 5 3" className={className} aria-hidden="true" focusable="false">
        <rect width="5" height="1" y="0" fill="#000000" />
        <rect width="5" height="1" y="1" fill="#DD0000" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
      </svg>
    )
  }
  if (code === 'US') {
    // Simplified field-and-canton rendering — 13 stripes, blue canton (stars omitted for this small icon size)
    return (
      <svg viewBox="0 0 19 10" className={className} aria-hidden="true" focusable="false">
        <rect width="19" height="10" fill="#B22234" />
        {[1, 3, 5, 7, 9].map((y) => (
          <rect key={y} x="0" y={y} width="19" height="1" fill="#FFFFFF" />
        ))}
        <rect width="7.6" height="5.38" fill="#3C3B6E" />
      </svg>
    )
  }
  if (code === 'IT') {
    return (
      <svg viewBox="0 0 3 2" className={className} aria-hidden="true" focusable="false">
        <rect width="1" height="2" x="0" fill="#009246" />
        <rect width="1" height="2" x="1" fill="#FFFFFF" />
        <rect width="1" height="2" x="2" fill="#CE2B37" />
      </svg>
    )
  }
  if (code === 'HK') {
    // Red field with a simplified 5-petal bauhinia — full bauhinia detail is unreadable at this size
    return (
      <svg viewBox="0 0 5 3" className={className} aria-hidden="true" focusable="false">
        <rect width="5" height="3" fill="#DE2910" />
        <g fill="#FFFFFF">
          <circle cx="2.5" cy="0.95" r="0.3" />
          <circle cx="3.02" cy="1.33" r="0.3" />
          <circle cx="2.82" cy="1.95" r="0.3" />
          <circle cx="2.18" cy="1.95" r="0.3" />
          <circle cx="1.98" cy="1.33" r="0.3" />
        </g>
      </svg>
    )
  }
  if (code === 'SM') {
    // Two horizontal bands — white (top) and light blue (bottom). Central coat of arms omitted at this pill size.
    return (
      <svg viewBox="0 0 4 3" className={className} aria-hidden="true" focusable="false">
        <rect width="4" height="1.5" y="0" fill="#FFFFFF" />
        <rect width="4" height="1.5" y="1.5" fill="#5EB6E4" />
      </svg>
    )
  }
  return null
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

      {/* Brand Story — only rendered for brands with story content */}
      {brandInfo?.quote && (
        <section className="relative bg-eb-black text-white overflow-hidden">
          {brandInfo.heroImage && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brandInfo.heroImage}
                alt={`${brandInfo.name} — ${brandInfo.origin ?? ''}`}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-eb-black via-eb-black/80 to-transparent" />
            </>
          )}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-6">
                Heritage
              </p>
              <blockquote className="font-aspire text-white text-3xl lg:text-5xl uppercase leading-tight tracking-tight mb-8">
                &ldquo;{brandInfo.quote}&rdquo;
              </blockquote>
              {(brandInfo.foundedYear || brandInfo.origin) && (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8">
                  {brandInfo.foundedYear && (
                    <span className="font-aspire text-xs tracking-widest uppercase text-white border border-white/30 px-4 py-2">
                      Est. {brandInfo.foundedYear}
                    </span>
                  )}
                  {brandInfo.origin && (
                    <span className="font-aspire text-xs tracking-widest uppercase text-white border border-white/30 px-4 py-2 inline-flex items-center gap-2.5">
                      {brandInfo.countryCode && (
                        <CountryFlag
                          code={brandInfo.countryCode}
                          className="h-3 w-5 flex-shrink-0 shadow-sm"
                        />
                      )}
                      {brandInfo.origin}
                    </span>
                  )}
                </div>
              )}
              {brandInfo.story && (
                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl">
                  {brandInfo.story}
                </p>
              )}
              {brandInfo.heritage && brandInfo.heritage.length > 0 && (
                <ul className="space-y-2">
                  {brandInfo.heritage.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-2 w-1.5 h-1.5 bg-eb-red rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials — quotes sourced from the manufacturer, shown between heritage and applications */}
      {brandInfo?.testimonials && brandInfo.testimonials.length > 0 && (
        <section className="bg-eb-black/95 border-t border-white/10 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <p className="font-aspire text-eb-red text-xs tracking-[0.3em] uppercase mb-10">
              Testimonials
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {brandInfo.testimonials.map((t) => (
                <figure key={t.quote} className="border-l-2 border-eb-red pl-6">
                  <blockquote className="font-aspire text-white text-lg lg:text-xl leading-snug mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="font-aspire text-xs tracking-[0.2em] uppercase text-gray-400">
                    <span className="text-white">{t.author}</span>
                    {t.role && <span className="text-gray-500"> — {t.role}</span>}
                    {t.location && <span className="text-gray-500"> · {t.location}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Application Showcase — vehicle-range strip, only for brands with showcase content */}
      {brandInfo?.showcase && brandInfo.showcase.length > 0 && (
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="mb-10">
              <p className="font-aspire text-xs tracking-[0.3em] uppercase text-eb-red mb-2">
                Applications
              </p>
              <h2 className="font-aspire text-eb-black text-2xl lg:text-3xl uppercase tracking-wide mb-3">
                Every Vehicle. Every Workshop.
              </h2>
              <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
                From passenger vans to rail vehicles, {brandInfo.name} builds lifting systems for the full spectrum of commercial and specialty workshops.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {brandInfo.showcase.map((item) => (
                <figure
                  key={item.image}
                  className="group relative bg-gray-50 border border-gray-200 overflow-hidden aspect-[4/3]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={`${brandInfo.name} — ${item.label}`}
                    className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-eb-black/90 via-eb-black/60 to-transparent px-4 py-3">
                    <p className="font-aspire text-white text-xs md:text-sm uppercase tracking-[0.2em]">
                      {item.label}
                    </p>
                  </figcaption>
                  {item.description && (
                    <div className="absolute inset-0 bg-eb-black/95 flex flex-col justify-end p-5 lg:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <p className="font-aspire text-eb-red text-[10px] tracking-[0.35em] uppercase mb-3">
                        Heritage
                      </p>
                      <p className="font-aspire text-white text-sm lg:text-base uppercase tracking-[0.18em] leading-tight mb-3">
                        {item.label}
                      </p>
                      <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
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
