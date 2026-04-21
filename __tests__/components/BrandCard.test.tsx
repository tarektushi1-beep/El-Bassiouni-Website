// __tests__/components/BrandCard.test.tsx
import { render, screen } from '@testing-library/react'
import BrandCard from '@/components/products/BrandCard'
import type { SanityBrand } from '@/sanity/lib/types'

const brand: SanityBrand = {
  name: 'Test Brand',
  slug: 'test-brand',
  description: 'Test description for the brand',
  products: ['Product One', 'Product Two'],
  website: 'https://testbrand.com',
  logo: undefined,
}

describe('BrandCard', () => {
  it('renders brand name', () => {
    render(<BrandCard brand={brand} />)
    expect(screen.getByText('Test Brand')).toBeInTheDocument()
  })

  it('renders brand description', () => {
    render(<BrandCard brand={brand} />)
    expect(screen.getByText('Test description for the brand')).toBeInTheDocument()
  })

  it('renders all products', () => {
    render(<BrandCard brand={brand} />)
    expect(screen.getByText('Product One')).toBeInTheDocument()
    expect(screen.getByText('Product Two')).toBeInTheDocument()
  })

  it('renders Request a Quote link to /contact', () => {
    render(<BrandCard brand={brand} />)
    const link = screen.getByRole('link', { name: /request a quote/i })
    expect(link).toHaveAttribute('href', '/contact')
  })
})
