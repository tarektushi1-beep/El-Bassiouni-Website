// src/components/home/ContactCTABanner.tsx
import Button from '@/components/ui/Button'

export default function ContactCTABanner() {
  return (
    <section className="bg-eb-red py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-aspire text-white text-4xl md:text-5xl uppercase tracking-wide mb-4">
          Ready to Equip Your Workshop?
        </h2>
        <p className="text-red-200 text-lg mb-10 max-w-2xl mx-auto">
          Contact our team today for product demonstrations, pricing, and expert advice tailored to your operation.
        </p>
        <Button href="/contact" variant="white" size="lg">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
