// src/components/home/WhyElbassiouni.tsx
import SectionTitle from '@/components/ui/SectionTitle'

const reasons = [
  {
    title: '45+ Years of Expertise',
    description: 'Since 1980, Elbassiouni has been the trusted name in automotive equipment across Egypt. Our deep market knowledge means we recommend the right solution for your specific needs.',
  },
  {
    title: 'World-Class Brands',
    description: 'We represent only the most respected international manufacturers — Hunter Engineering, Rotary Lift, Maha Haldenwang, and 11 more — giving you access to the best equipment available.',
  },
  {
    title: 'Full After-Sales Support',
    description: "From installation and training to maintenance contracts and spare parts, our support team ensures your equipment performs at its best throughout its lifetime.",
  },
  {
    title: 'Certified & Compliant',
    description: 'All equipment we supply meets Egyptian regulatory requirements. Our inspection lane systems are fully compliant with traffic authority standards.',
  },
]

export default function WhyElbassiouni() {
  return (
    <section className="py-24 bg-eb-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Elbassiouni"
          subtitle="Four decades of trust, built one workshop at a time."
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
