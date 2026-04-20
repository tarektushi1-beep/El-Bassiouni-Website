// src/app/about/page.tsx
import type { Metadata } from 'next'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us',
  description: "Elbassiouni Automotive Equipment has served Egypt's automotive industry for 45+ years, representing 14 world-class brands.",
}

const milestones = [
  { year: '1980', event: 'Elbassiouni founded in Cairo, Egypt' },
  { year: '1985', event: 'First exclusive agency for a European automotive equipment brand' },
  { year: '1995', event: 'Expanded to represent 5 international brands' },
  { year: '2005', event: 'Launched inspection lane division, supplying government centers' },
  { year: '2015', event: 'Portfolio grows to 10 premium international brands' },
  { year: '2024', event: 'Representing 14 world-class brands across 6 equipment categories' },
  { year: '2026', event: "Continued commitment to equipping Egypt's automotive future" },
]

const values = [
  { title: 'Quality', description: 'We represent only manufacturers with proven track records and international certifications.' },
  { title: 'Partnership', description: 'We build long-term relationships with our clients, not just one-time transactions.' },
  { title: 'Expertise', description: 'Our team brings decades of hands-on knowledge in automotive workshop equipment.' },
  { title: 'Support', description: 'We stand behind every product with comprehensive after-sales service and spare parts.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-eb-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">About Elbassiouni</h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
            For over 45 years, Elbassiouni Automotive Equipment has been the trusted partner of workshops, dealerships, and fleet operators across Egypt — bringing the world&apos;s best automotive equipment to the Egyptian market.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle title="Our History" subtitle="Four decades of building Egypt's automotive service industry." />
              <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                <p>Founded in Cairo in 1980, Elbassiouni Automotive Equipment began as a specialist importer of professional workshop equipment, serving a market that was rapidly professionalizing its automotive service infrastructure.</p>
                <p>Over the decades, we established exclusive agency agreements with the world&apos;s leading automotive equipment manufacturers — brands like Hunter Engineering, Rotary Lift, and Maha Haldenwang — becoming their dedicated representative in the Egyptian market.</p>
                <p>Today, our portfolio spans 14 international brands across 6 equipment categories, covering everything from vehicle lifts and wheel alignment to spray booths and inspection lane systems.</p>
                <p>Our after-sales division — covering installation, training, maintenance contracts, and spare parts — ensures that every piece of equipment we sell continues to perform at its best throughout its operational life.</p>
              </div>
            </div>
            <div>
              <h3 className="font-aspire text-xl uppercase tracking-wide text-eb-black mb-8">Key Milestones</h3>
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
          <SectionTitle title="Our Values" centered />
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
        <h2 className="font-aspire text-white text-3xl uppercase tracking-wide mb-6">Let&apos;s Work Together</h2>
        <Button href="/contact" variant="primary" size="lg">Contact Our Team</Button>
      </section>
    </>
  )
}
