// src/components/home/Hero.tsx
import Button from '@/components/ui/Button'
import HeroSlideshow from './HeroSlideshow'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-eb-black flex items-center overflow-hidden">
      <HeroSlideshow />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-eb-red" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-6">
            Est. 1980 · Cairo, Egypt
          </p>
          <h1 className="font-aspire text-white text-5xl sm:text-6xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Egypt&apos;s Premier
            <br />
            <span className="text-eb-red">Automotive</span>
            <br />
            Equipment Partner
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mb-10 leading-relaxed">
            45+ years equipping Egypt&apos;s workshops, dealerships, and fleet operators with the world&apos;s most trusted automotive equipment brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/products" variant="primary" size="lg">
              Explore Our Brands
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
