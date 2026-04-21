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

  it('renders 4 slide elements', () => {
    const { getAllByTestId } = render(<HeroSlideshow />)
    expect(getAllByTestId('hero-slide')).toHaveLength(4)
  })

  it('cleans up the interval on unmount', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval')
    const { unmount } = render(<HeroSlideshow />)
    unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })

  it('advances the slide index after 5 seconds', () => {
    const { getAllByTestId } = render(<HeroSlideshow />)
    const slides = getAllByTestId('hero-slide')

    expect(slides[0]).toHaveClass('opacity-100')
    expect(slides[1]).toHaveClass('opacity-0')

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(slides[0]).toHaveClass('opacity-0')
    expect(slides[1]).toHaveClass('opacity-100')
  })
})
