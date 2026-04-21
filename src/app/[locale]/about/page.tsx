// src/app/[locale]/about/page.tsx
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us',
}

export default async function AboutPage() {
  const t = await getTranslations('about')

  const milestones = [
    { year: '1980', event: t('m1980') },
    { year: '1985', event: t('m1985') },
    { year: '1995', event: t('m1995') },
    { year: '2005', event: t('m2005') },
    { year: '2015', event: t('m2015') },
    { year: '2024', event: t('m2024') },
    { year: '2026', event: t('m2026') },
  ]

  const values = [
    { title: t('vQuality'), description: t('vQualityDesc') },
    { title: t('vPartnership'), description: t('vPartnershipDesc') },
    { title: t('vExpertise'), description: t('vExpertiseDesc') },
    { title: t('vSupport'), description: t('vSupportDesc') },
  ]

  return (
    <>
      <section className="bg-eb-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">{t('eyebrow')}</p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">{t('heading')}</h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">{t('intro')}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle title={t('historyTitle')} subtitle={t('historySubtitle')} />
              <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
                <p>{t('p4')}</p>
              </div>
            </div>
            <div>
              <h3 className="font-aspire text-xl uppercase tracking-wide text-eb-black mb-8">{t('milestonesTitle')}</h3>
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6">
                    <div className="flex-shrink-0 w-16 font-aspire text-eb-red text-sm tracking-wider">{m.year}</div>
                    <div className="flex-1 pb-6 border-b border-gray-100 text-gray-600 text-sm">{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-eb-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('valuesTitle')} centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border-t-4 border-eb-red">
                <h3 className="font-aspire text-lg uppercase tracking-wide text-eb-black mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-eb-black text-center">
        <h2 className="font-aspire text-white text-3xl uppercase tracking-wide mb-6">{t('ctaHeading')}</h2>
        <Button href="contact" variant="primary" size="lg">{t('ctaButton')}</Button>
      </section>
    </>
  )
}
