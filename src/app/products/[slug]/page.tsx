// src/app/products/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { categories, getCategoryBySlug } from '@/data/categories'
import CategoryHero from '@/components/products/CategoryHero'
import BrandCard from '@/components/products/BrandCard'
import Button from '@/components/ui/Button'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug)
  if (!category) return {}
  return { title: category.name, description: category.description }
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
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
