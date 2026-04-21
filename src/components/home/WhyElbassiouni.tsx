// src/components/home/WhyElbassiouni.tsx
import { getTranslations } from 'next-intl/server'
import SectionTitle from '@/components/ui/SectionTitle'

export default async function WhyElbassiouni() {
  const t = await getTranslations('why')

  const reasons = [
    { title: t('r1Title'), description: t('r1Desc') },
    { title: t('r2Title'), description: t('r2Desc') },
    { title: t('r3Title'), description: t('r3Desc') },
    { title: t('r4Title'), description: t('r4Desc') },
  ]

  return (
    <section className="py-24 bg-eb-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('heading')}
          subtitle={t('subheading')}
          centered
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="border border-gray-800 p-8 hover:border-eb-red transition-colors">
              <div className="w-8 h-1 bg-eb-red mb-6" />
              <h3 className="font-aspire text-white text-lg uppercase tracking-wide mb-4">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
