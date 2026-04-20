// src/components/home/TrustStrip.tsx
const stats = [
  { value: '45+', label: 'Years of Experience' },
  { value: '14', label: 'International Brands' },
  { value: '6', label: 'Equipment Categories' },
  { value: '1000+', label: 'Workshops Equipped' },
]

export default function TrustStrip() {
  return (
    <section className="bg-eb-red py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-aspire text-white text-4xl md:text-5xl mb-2">{stat.value}</div>
              <div className="text-red-200 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
