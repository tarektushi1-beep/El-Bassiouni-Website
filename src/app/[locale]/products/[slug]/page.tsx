// src/app/products/[slug]/page.tsx
import { cache } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { CATEGORY_QUERY, CATEGORY_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory } from '@/sanity/lib/types'
import CategoryHero from '@/components/products/CategoryHero'
import BrandCard from '@/components/products/BrandCard'
import Button from '@/components/ui/Button'

export const revalidate = 3600

interface Props {
  params: { slug: string; locale: string }
}

const getCategory = cache((slug: string) =>
  client.fetch<SanityCategory | null>(CATEGORY_QUERY, { slug })
)

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(CATEGORY_SLUGS_QUERY)
  return ['en', 'ar'].flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategory(params.slug)
  if (!category) return {}
  return { title: category.name, description: category.description }
}

export default async function CategoryPage({ params }: Props) {
  const category = await getCategory(params.slug)
  if (!category) notFound()

  return (
    <>
      <CategoryHero name={category.name} tagline={category.tagline} description={category.description} />
      <section className="py-24 bg-eb-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {category.brands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-eb-black text-center">
        <p className="text-gray-400 mb-4 text-sm">Need help choosing the right equipment?</p>
        <Button href="/contact" variant="primary" size="lg">Request a Quote</Button>
      </section>
    </>
  )
}
