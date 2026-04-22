// __tests__/components/HeroSlideshow.test.tsx
import { render, act } from '@testing-library/react'
import HeroSlideshow from '@/components/home/HeroSlideshow'

describe('HeroSlideshow', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders 3 slide elements', () => {
    const { getAllByTestId } = render(<HeroSlideshow />)
    expect(getAllByTestId('hero-slide')).toHaveLength(3)
  })

  it('first slide is visible, others hidden', () => {
    const { getAllByTestId } = render(<HeroSlideshow />)
    const slides = getAllByTestId('hero-slide')
    expect(slides[0]).toHaveClass('opacity-100')
    expect(slides[1]).toHaveClass('opacity-0')
    expect(slides[2]).toHaveClass('opacity-0')
  })

  it('clicking next arrow advances to slide 2', () => {
    const { getAllByTestId, getByLabelText } = render(<HeroSlideshow />)
    const slides = getAllByTestId('hero-slide')
    act(() => { getByLabelText('Next slide').click() })
    expect(slides[0]).toHaveClass('opacity-0')
    expect(slides[1]).toHaveClass('opacity-100')
  })
})
