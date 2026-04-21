// __tests__/components/Navbar.test.tsx
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/layout/Navbar'

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'en',
}))

describe('Navbar', () => {
  it('renders the Elbassiouni logo', () => {
    render(<Navbar />)
    expect(screen.getByAltText('Elbassiouni Automotive Equipment')).toBeInTheDocument()
  })

  it('renders all top-level nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /news/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('shows Products dropdown trigger', () => {
    render(<Navbar />)
    expect(screen.getByText(/products/i)).toBeInTheDocument()
  })
})
