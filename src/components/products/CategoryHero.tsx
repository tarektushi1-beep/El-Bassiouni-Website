// src/components/products/CategoryHero.tsx
interface CategoryHeroProps {
  name: string
  tagline: string
  description: string
}

export default function CategoryHero({ name, tagline, description }: CategoryHeroProps) {
  return (
    <section className="bg-eb-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">Equipment Category</p>
        <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-4">{name}</h1>
        <p className="font-aspire text-eb-red text-lg tracking-wide mb-6">{tagline}</p>
        <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
