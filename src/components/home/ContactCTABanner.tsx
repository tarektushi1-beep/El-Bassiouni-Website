// src/components/home/ContactCTABanner.tsx
import { getTranslations } from 'next-intl/server'
import Button from '@/components/ui/Button'

export default async function ContactCTABanner() {
  const t = await getTranslations('cta')

  return (
    <section className="bg-eb-red py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-aspire text-white text-4xl md:text-5xl uppercase tracking-wide mb-4">
          {t('heading')}
        </h2>
        <p className="text-red-200 text-lg mb-10 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <Button href="contact" variant="white" size="lg">
          {t('button')}
        </Button>
      </div>
    </section>
  )
}
