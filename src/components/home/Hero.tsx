// src/components/home/Hero.tsx
import { getTranslations } from 'next-intl/server'
import Button from '@/components/ui/Button'
import HeroSlideshow from './HeroSlideshow'

export default async function Hero() {
  const t = await getTranslations('hero')

  return (
    <section className="relative min-h-screen bg-eb-black flex items-center overflow-hidden">
      <HeroSlideshow />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-eb-red" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-6">
            {t('eyebrow')}
          </p>
          <h1 className="font-aspire text-white text-5xl sm:text-6xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            {t('line1')}
            <br />
            <span className="text-eb-red">{t('line2')}</span>
            <br />
            {t('line3')}
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mb-10 leading-relaxed">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="products" variant="primary" size="lg">
              {t('cta1')}
            </Button>
            <Button href="contact" variant="outline" size="lg">
              {t('cta2')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
