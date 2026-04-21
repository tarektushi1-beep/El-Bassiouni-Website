// src/components/home/HeroSlideshow.tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
    alt: '',
  },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
    </div>
  )
}
