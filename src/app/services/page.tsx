// src/app/services/page.tsx
import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { SERVICES_QUERY } from '@/sanity/lib/queries'
import type { SanityService } from '@/sanity/lib/types'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional after-sales support, installation, maintenance, training, calibration, and inspection lane services from Elbassiouni.',
}

export default async function ServicesPage() {
  const services: SanityService[] = await client.fetch(SERVICES_QUERY)

  return (
    <>
      <section className="bg-eb-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">After-Sales & Support</p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">Our Services</h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
            We don&apos;t just supply equipment — we support it. Our after-sales team is with you from installation to end-of-life, ensuring peak performance every step of the way.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What We Offer" subtitle="Six core service disciplines, delivered by our certified technical team." centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service._id} className="border border-gray-200 p-8 hover:border-eb-red transition-colors">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h2 className="font-aspire text-lg uppercase tracking-wide text-eb-black mb-4">{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 bg-eb-red rounded-full flex-shrink-0 mt-1.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-eb-red text-center">
        <h2 className="font-aspire text-white text-3xl uppercase tracking-wide mb-4">Need a Service Quote?</h2>
        <p className="text-red-200 mb-8">Our team will respond within one business day.</p>
        <Button href="/contact" variant="white" size="lg">Contact Our Service Team</Button>
      </section>
    </>
  )
}
