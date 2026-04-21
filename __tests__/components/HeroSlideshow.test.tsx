// __tests__/components/HeroSlideshow.test.tsx
import { render, screen, act } from '@testing-library/react'
import HeroSlideshow from '@/components/home/HeroSlideshow'

describe('HeroSlideshow', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders all slide images', () => {
    render(<HeroSlideshow />)
    expect(screen.getByAltText('Automotive workshop with vehicle lift equipment')).toBeInTheDocument()
    expect(screen.getByAltText('Professional auto service technician at work')).toBeInTheDocument()
    expect(screen.getByAltText('Modern automotive service center')).toBeInTheDocument()
    expect(screen.getByAltText('Precision automotive diagnostic equipment')).toBeInTheDocument()
  })

  it('cleans up the interval on unmount', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval')
    const { unmount } = render(<HeroSlideshow />)
    unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })

  it('advances the slide index after 5 seconds', () => {
    render(<HeroSlideshow />)
    // Grab the slide wrapper divs — all 4 are rendered
    const slides = document.querySelectorAll('[data-slide]')
    expect(slides[0].classList.contains('opacity-100')).toBe(true)
    expect(slides[1].classList.contains('opacity-0')).toBe(true)

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(slides[0].classList.contains('opacity-0')).toBe(true)
    expect(slides[1].classList.contains('opacity-100')).toBe(true)
  })
})
