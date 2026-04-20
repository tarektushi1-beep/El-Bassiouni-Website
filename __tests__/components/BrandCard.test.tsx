import { render, screen } from '@testing-library/react'
import BrandCard from '@/components/products/BrandCard'

const mockBrand = {
  name: 'Rotary Lift',
  slug: 'rotary-lift',
  logoPlaceholder: '/logos/brands/rotary-lift.png',
  description: 'The world leader in vehicle lifting equipment.',
  products: ['Two-Post Lifts', 'Four-Post Lifts'],
  website: 'https://www.rotarylift.com',
}

describe('BrandCard', () => {
  it('renders brand name', () => {
    render(<BrandCard brand={mockBrand} />)
    expect(screen.getByText('Rotary Lift')).toBeInTheDocument()
  })

  it('renders brand description', () => {
    render(<BrandCard brand={mockBrand} />)
    expect(screen.getByText('The world leader in vehicle lifting equipment.')).toBeInTheDocument()
  })

  it('renders all products', () => {
    render(<BrandCard brand={mockBrand} />)
    expect(screen.getByText('Two-Post Lifts')).toBeInTheDocument()
    expect(screen.getByText('Four-Post Lifts')).toBeInTheDocument()
  })

  it('renders contact CTA link', () => {
    render(<BrandCard brand={mockBrand} />)
    expect(screen.getByRole('link', { name: /request a quote/i })).toBeInTheDocument()
  })
})
