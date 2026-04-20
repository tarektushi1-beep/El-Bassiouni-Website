// src/components/products/BrandCard.tsx
import Link from 'next/link'
import type { Brand } from '@/data/categories'

interface BrandCardProps {
  brand: Brand
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="border border-gray-200 bg-white hover:border-eb-red transition-colors">
      <div className="bg-eb-black px-8 py-6">
        <h2 className="font-aspire text-white text-2xl uppercase tracking-wide">{brand.name}</h2>
      </div>
      <div className="p-8">
        <p className="text-gray-600 text-sm leading-relaxed mb-8">{brand.description}</p>
        <div className="mb-8">
          <h3 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">Key Products</h3>
          <ul className="space-y-2">
            {brand.products.map((product) => (
              <li key={product} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-eb-red rounded-full flex-shrink-0" />
                {product}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center font-aspire text-xs tracking-widest uppercase text-white bg-eb-red px-6 py-3 hover:bg-red-800 transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  )
}
