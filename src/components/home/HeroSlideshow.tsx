// src/components/home/HeroSlideshow.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  { src: '/images/hero/slide1.jpg', alt: '' },
  { src: '/images/hero/slide2.jpg', alt: '' },
  { src: '/images/hero/slide3.jpg', alt: '' },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  function prev() {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  }

  function next() {
    setCurrent((c) => (c + 1) % SLIDES.length)
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          data-testid="hero-slide"
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/65" />

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-eb-red text-white transition-colors"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-eb-red text-white transition-colors"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-eb-red w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
