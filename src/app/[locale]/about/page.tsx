// src/app/[locale]/about/page.tsx
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us',
}

export default async function AboutPage() {
  const t = await getTranslations('about')

  const disciplines = [
    { title: t('dSupply'), desc: t('dSupplyDesc'), meta: t('dSupplyMeta') },
    { title: t('dInstall'), desc: t('dInstallDesc'), meta: t('dInstallMeta') },
    { title: t('dAfter'), desc: t('dAfterDesc'), meta: t('dAfterMeta') },
    { title: t('dTraining'), desc: t('dTrainingDesc'), meta: t('dTrainingMeta') },
  ]

  const refusals = [
    { num: t('r1Num'), head: t('r1Head'), p: t('r1P') },
    { num: t('r2Num'), head: t('r2Head'), p: t('r2P') },
    { num: t('r3Num'), head: t('r3Head'), p: t('r3P') },
  ]

  const principles = [
    { title: t('vPrecision'), desc: t('vPrecisionDesc') },
    { title: t('vLongevity'), desc: t('vLongevityDesc') },
    { title: t('vDepth'), desc: t('vDepthDesc') },
    { title: t('vPartnership'), desc: t('vPartnershipDesc') },
  ]

  const stats = [
    { value: t('statYears'), label: t('statYearsLabel') },
    { value: t('statBrands'), label: t('statBrandsLabel') },
    { value: t('statGenerations'), label: t('statGenerationsLabel') },
    { value: t('statTests'), label: t('statTestsLabel') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative bg-eb-black text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/workshop-1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eb-black via-eb-black/85 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-6">
            {t('eyebrow')}
          </p>
          <h1 className="font-aspire text-white text-5xl lg:text-7xl uppercase tracking-tight leading-[1.05] mb-8 max-w-3xl">
            {t('heading')}
          </h1>
          <p className="text-gray-200 text-xl lg:text-2xl max-w-3xl leading-relaxed">
            {t('subheading')}
          </p>
        </div>
      </section>

      {/* A note to the reader */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-6">
            {t('noteEyebrow')}
          </p>
          <h2 className="font-aspire text-eb-black text-3xl lg:text-4xl uppercase tracking-tight mb-10 max-w-2xl">
            {t('noteHeading')}
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>{t('noteP1')}</p>
            <p>{t('noteP2')}</p>
            <p>{t('noteP3')}</p>
          </div>
        </div>
      </section>

      {/* Two dates. One lineage. */}
      <section className="bg-eb-light py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-3">
              {t('historyTitle')}
            </p>
            <h2 className="font-aspire text-eb-black text-4xl lg:text-5xl uppercase tracking-tight">
              {t('historySubtitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-white p-10 lg:p-12 border-t-4 border-eb-red">
              <p className="font-aspire text-eb-red text-6xl lg:text-7xl tracking-tight mb-4">
                {t('y1978Year')}
              </p>
              <h3 className="font-aspire text-eb-black text-xl uppercase tracking-wide mb-5">
                {t('y1978Chapter')}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('y1978P')}</p>
            </div>
            <div className="bg-white p-10 lg:p-12 border-t-4 border-eb-red">
              <p className="font-aspire text-eb-red text-6xl lg:text-7xl tracking-tight mb-4">
                {t('y1997Year')}
              </p>
              <h3 className="font-aspire text-eb-black text-xl uppercase tracking-wide mb-5">
                {t('y1997Chapter')}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('y1997P')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-eb-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="font-aspire text-white text-5xl lg:text-6xl tracking-tight mb-2">
                  {s.value}
                </p>
                <p className="font-aspire text-gray-400 text-xs tracking-[0.2em] uppercase leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four disciplines */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-3">
              {t('disciplinesEyebrow')}
            </p>
            <h2 className="font-aspire text-eb-black text-4xl lg:text-5xl uppercase tracking-tight mb-5">
              {t('disciplinesTitle')}
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {t('disciplinesLead')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {disciplines.map((d, i) => (
              <div
                key={d.title}
                className="bg-eb-light p-8 lg:p-10 border-l-2 border-eb-red"
              >
                <p className="font-aspire text-eb-red text-xs tracking-[0.3em] uppercase mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-aspire text-eb-black text-2xl uppercase tracking-wide mb-4">
                  {d.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-5">{d.desc}</p>
                <p className="font-aspire text-gray-500 text-xs tracking-[0.2em] uppercase">
                  {d.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maha truck lane feature */}
      <section className="relative bg-eb-black text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/truck-lane.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-eb-black via-eb-black/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-2xl ml-auto text-right lg:text-left lg:ml-0 lg:max-w-xl">
            <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-6">
              {t('truckLaneEyebrow')}
            </p>
            <h2 className="font-aspire text-white text-3xl lg:text-5xl uppercase tracking-tight leading-[1.1] mb-8">
              {t('truckLaneHeading')}
            </h2>
            <p className="font-aspire text-gray-400 text-sm tracking-[0.25em] uppercase mb-10">
              {t('truckLaneSub')}
            </p>
            <div className="border-l-2 border-eb-red pl-6">
              <p className="font-aspire text-eb-red text-6xl lg:text-7xl tracking-tight mb-2">
                {t('truckLaneStat')}
              </p>
              <p className="font-aspire text-white text-xs tracking-[0.25em] uppercase">
                {t('truckLaneStatLabel')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three refusals */}
      <section className="bg-eb-black text-white py-24 lg:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-3">
              {t('refusalsEyebrow')}
            </p>
            <h2 className="font-aspire text-white text-4xl lg:text-5xl uppercase tracking-tight mb-5">
              {t('refusalsTitle')}
            </h2>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
              {t('refusalsLead')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {refusals.map((r) => (
              <div key={r.num} className="border-t border-eb-red pt-8">
                <p className="font-aspire text-eb-red text-xs tracking-[0.3em] uppercase mb-5">
                  {r.num}
                </p>
                <h3 className="font-aspire text-white text-xl uppercase tracking-wide leading-snug mb-5">
                  {r.head}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four principles */}
      <section className="bg-eb-light py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-3">
              {t('principlesEyebrow')}
            </p>
            <h2 className="font-aspire text-eb-black text-4xl lg:text-5xl uppercase tracking-tight">
              {t('principlesTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {principles.map((v) => (
              <div key={v.title} className="bg-white p-8 border-t-4 border-eb-red">
                <h3 className="font-aspire text-lg uppercase tracking-wide text-eb-black mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-eb-black text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/workshop-2.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-eb-black/80 via-eb-black/70 to-eb-black" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 text-center">
          <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-6">
            {t('ctaEyebrow')}
          </p>
          <h2 className="font-aspire text-white text-4xl lg:text-6xl uppercase tracking-tight leading-[1.05] mb-4">
            {t('ctaLine1')}
          </h2>
          <h2 className="font-aspire text-white text-4xl lg:text-6xl uppercase tracking-tight leading-[1.05] mb-4">
            {t('ctaLine2')}
          </h2>
          <h2 className="font-aspire text-white text-4xl lg:text-6xl uppercase tracking-tight leading-[1.05] mb-10">
            {t('ctaLine3')}
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl mb-10">{t('ctaLead')}</p>
          <Button href="contact" variant="primary" size="lg">
            {t('ctaButton')}
          </Button>
        </div>
      </section>
    </>
  )
}
