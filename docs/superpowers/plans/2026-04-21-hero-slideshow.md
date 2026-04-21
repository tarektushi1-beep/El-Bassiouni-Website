# Hero Background Slideshow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static black gradient hero background with a crossfading photo slideshow of 4 automotive workshop images.

**Architecture:** A new `HeroSlideshow` client component manages slide state with `useState`/`useEffect` and renders all 4 `next/image` slides stacked absolutely, toggling opacity via Tailwind transition classes. `Hero.tsx` (server component) mounts `HeroSlideshow` as the first child of its `<section>`, replacing the existing gradient div. A `bg-black/65` overlay inside `HeroSlideshow` keeps the headline readable.

**Tech Stack:** Next.js 14 App Router, React 18, Tailwind CSS, `next/image`, Unsplash placeholder photos

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `next.config.mjs` | Modify | Add `images.unsplash.com` to `images.remotePatterns` |
| `src/components/home/HeroSlideshow.tsx` | Create | Client component — slideshow state + image rendering |
| `src/components/home/Hero.tsx` | Modify | Mount `<HeroSlideshow />`, remove old gradient div |
| `__tests__/components/HeroSlideshow.test.tsx` | Create | Render test + timer advance test |

---

### Task 1: Allow Unsplash images in Next.js config

**Files:**
- Modify: `next.config.mjs`

- [ ] **Step 1: Add `images.unsplash.com` to remotePatterns**

Open `next.config.mjs`. The current `images` block looks like this:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    },
  ],
},
```

Replace it with:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
},
```

- [ ] **Step 2: Verify the config file looks correct**

Full `next.config.mjs` after the change:

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
```

- [ ] **Step 3: Commit**

```bash
git add next.config.mjs
git commit -m "feat: allow Unsplash images for hero slideshow placeholders"
```

---

### Task 2: Create HeroSlideshow component and test

**Files:**
- Create: `src/components/home/HeroSlideshow.tsx`
- Create: `__tests__/components/HeroSlideshow.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/components/HeroSlideshow.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
npx jest __tests__/components/HeroSlideshow.test.tsx --no-coverage
```

Expected: FAIL — `Cannot find module '@/components/home/HeroSlideshow'`

- [ ] **Step 3: Create the HeroSlideshow component**

Create `src/components/home/HeroSlideshow.tsx`:

```tsx
// src/components/home/HeroSlideshow.tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80',
    alt: 'Automotive workshop with vehicle lift equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    alt: 'Professional auto service technician at work',
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80',
    alt: 'Modern automotive service center',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
    alt: 'Precision automotive diagnostic equipment',
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
          data-slide={i}
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
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
npx jest __tests__/components/HeroSlideshow.test.tsx --no-coverage
```

Expected: PASS — 3 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/components/home/HeroSlideshow.tsx __tests__/components/HeroSlideshow.test.tsx
git commit -m "feat: add HeroSlideshow crossfading background component"
```

---

### Task 3: Wire HeroSlideshow into Hero and verify

**Files:**
- Modify: `src/components/home/Hero.tsx`

- [ ] **Step 1: Update Hero.tsx**

Replace the full contents of `src/components/home/Hero.tsx` with:

```tsx
// src/components/home/Hero.tsx
import Button from '@/components/ui/Button'
import HeroSlideshow from './HeroSlideshow'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-eb-black flex items-center overflow-hidden">
      <HeroSlideshow />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-eb-red" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-6">
            Est. 1980 · Cairo, Egypt
          </p>
          <h1 className="font-aspire text-white text-5xl sm:text-6xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Egypt&apos;s Premier
            <br />
            <span className="text-eb-red">Automotive</span>
            <br />
            Equipment Partner
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mb-10 leading-relaxed">
            45+ years equipping Egypt&apos;s workshops, dealerships, and fleet operators with the world&apos;s most trusted automotive equipment brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/products" variant="primary" size="lg">
              Explore Our Brands
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

Note: The old `<div className="absolute inset-0 opacity-10">` gradient div is removed — `HeroSlideshow` provides the background and its own dark overlay.

- [ ] **Step 2: Run the full test suite**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
npx jest --no-coverage
```

Expected: All tests pass (previous suite + 3 new HeroSlideshow tests)

- [ ] **Step 3: Run the production build**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
npm run build
```

Expected: Build completes with no errors. Route `/` remains `○ (Static)`.

- [ ] **Step 4: Verify visually**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
npm run dev
```

Open http://localhost:3000 and confirm:
- The hero shows a full-screen automotive photo behind the text
- The photo crossfades to a new one every 5 seconds
- The headline and buttons remain clearly readable
- The red left stripe is still visible

- [ ] **Step 5: Commit**

```bash
git add src/components/home/Hero.tsx
git commit -m "feat: wire HeroSlideshow into Hero — crossfading background complete"
```
