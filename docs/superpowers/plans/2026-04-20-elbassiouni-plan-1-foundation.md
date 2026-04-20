# Elbassiouni.com — Plan 1: Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully working, visually complete Elbassiouni.com website in English with all pages, brand identity, and contact form — runnable locally and ready for CMS integration in Plan 2.

**Architecture:** Next.js 14 App Router with TypeScript and Tailwind CSS. All content is hardcoded in a `src/data/` layer (replaced by Sanity in Plan 2). The contact form submits via a Next.js API route using Resend for email delivery. No i18n yet (added in Plan 3).

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, React Testing Library, Jest, Resend (free tier)

---

## File Map

```
elbassiouni-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx                        # Root HTML shell, fonts, metadata
│   │   ├── page.tsx                          # Home page
│   │   ├── about/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx                      # Products landing
│   │   │   ├── vehicle-lifts/page.tsx
│   │   │   ├── wheel-service/page.tsx
│   │   │   ├── vehicle-inspection/page.tsx
│   │   │   ├── ac-service/page.tsx
│   │   │   ├── body-paint/page.tsx
│   │   │   └── hand-tools/page.tsx
│   │   ├── services/page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   └── api/contact/route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   ├── CategoryCards.tsx
│   │   │   ├── BrandLogosMarquee.tsx
│   │   │   ├── WhyElbassiouni.tsx
│   │   │   └── ContactCTABanner.tsx
│   │   ├── products/
│   │   │   ├── CategoryHero.tsx
│   │   │   └── BrandCard.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── SectionTitle.tsx
│   ├── data/
│   │   ├── categories.ts
│   │   ├── services.ts
│   │   └── news.ts
│   └── styles/globals.css
├── public/
│   ├── fonts/aspire-regular.woff2            # User provides from brand guidelines
│   └── logos/
│       ├── elbassiouni-white.svg
│       └── elbassiouni-black.svg
├── __tests__/
│   ├── components/Navbar.test.tsx
│   ├── components/CategoryCards.test.tsx
│   └── api/contact.test.ts
├── next.config.ts
├── tailwind.config.ts
├── jest.config.ts
├── jest.setup.ts
└── package.json
```

---

## Prerequisites

Before starting, ensure the following are installed on the machine:
- **Node.js LTS** — download from https://nodejs.org (click "LTS" button, run installer, accept all defaults)
- **Git** — already installed (confirmed)
- **VS Code** — already installed

Verify Node.js installed correctly by running in a terminal: `node --version` — should print `v20.x.x` or higher.

---

## Task 1: Create Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `src/app/layout.tsx`, `src/app/page.tsx`

- [ ] **Step 1: Open terminal in VS Code**

In VS Code: press `` Ctrl+` `` to open the terminal. Confirm you are in `C:\Users\Lenovo\elbassiouni-website` (the path shown in the prompt). If not, run:
```bash
cd C:/Users/Lenovo/elbassiouni-website
```

- [ ] **Step 2: Scaffold the Next.js project**

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

When prompted:
- "Would you like to use Turbopack?" → **No**
- Any other prompts → accept defaults

Wait for it to finish (takes 1–2 minutes).

- [ ] **Step 3: Verify it works**

```bash
npm run dev
```

Open browser at **http://localhost:3000** — you should see the default Next.js welcome page.

Press `Ctrl+C` in the terminal to stop the server.

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: scaffold Next.js 14 project with TypeScript and Tailwind"
```

---

## Task 2: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install runtime dependencies**

```bash
npm install resend @sanity/client next-sanity
```

- [ ] **Step 2: Install dev/test dependencies**

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install Resend, Sanity client, and test dependencies"
```

---

## Task 3: Configure Tailwind with Brand Tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Replace tailwind.config.ts**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'eb-black': '#000000',
        'eb-red': '#B0302D',
        'eb-white': '#FFFFFF',
        'eb-gray': '#1a1a1a',
        'eb-light': '#f5f5f5',
      },
      fontFamily: {
        aspire: ['Aspire', 'Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Replace src/styles/globals.css**

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Aspire';
  src: url('/fonts/aspire-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Fallback: if Aspire font file not yet available, Orbitron is loaded via Google Fonts */

@layer base {
  body {
    @apply font-body text-eb-black bg-eb-white;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-aspire;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

- [ ] **Step 3: Add Orbitron fallback font to layout.tsx (temporary until Aspire .woff2 is provided)**

Open `src/app/layout.tsx` and replace the entire file with:

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'Elbassiouni Automotive Equipment',
  description: "Egypt's leading distributor of premium automotive workshop equipment. 45+ years of expertise, 14 international brands.",
  keywords: ['automotive equipment', 'Egypt', 'workshop', 'vehicle lifts', 'wheel alignment'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify Tailwind compiles**

```bash
npm run dev
```

Check http://localhost:3000 — page should still load. Press `Ctrl+C`.

- [ ] **Step 5: Copy Aspire font file (if available)**

If you have the `aspire-regular.woff2` font file, copy it to:
```
public/fonts/aspire-regular.woff2
```

If not available yet, Orbitron will be used as fallback — the site will still look great.

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: configure Tailwind with Elbassiouni brand tokens and fonts"
```

---

## Task 4: Configure Jest

**Files:**
- Create: `jest.config.ts`
- Create: `jest.setup.ts`

- [ ] **Step 1: Create jest.config.ts**

```typescript
// jest.config.ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default createJestConfig(config)
```

- [ ] **Step 2: Create jest.setup.ts**

```typescript
// jest.setup.ts
import '@testing-library/jest-dom'
```

- [ ] **Step 3: Add test script to package.json**

Open `package.json` and add `"test": "jest"` and `"test:watch": "jest --watch"` to the `"scripts"` section:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "jest",
  "test:watch": "jest --watch"
}
```

- [ ] **Step 4: Verify Jest runs**

```bash
npm test -- --passWithNoTests
```

Expected output: `Test Suites: 0 skipped` with exit code 0.

- [ ] **Step 5: Commit**

```bash
git add jest.config.ts jest.setup.ts package.json
git commit -m "feat: configure Jest and React Testing Library"
```

---

## Task 5: Create Data Files

**Files:**
- Create: `src/data/categories.ts`
- Create: `src/data/services.ts`
- Create: `src/data/news.ts`

These files are the single source of truth for all content in Plan 1. In Plan 2 they will be replaced by Sanity queries.

- [ ] **Step 1: Fetch brand descriptions from supplier websites**

Visit each brand's official website and copy a 2-3 sentence product description. Sources:
- Rotary Lifts → rotarylift.com
- Real → real-lifts.com
- Finkbeiner → finkbeiner.de/en
- Hunter Engineering → hunter.com
- HPA Faip → hpafaip.com
- Maha Haldenwang → maha.de/en
- Ecotechnics → ecotechnics.eu
- Weaco by Dometic → dometic.com/weaco
- SaicoZero → saicozero.it/en
- Deca Welding → decastudio.it/en
- Wedgeclamp → wedgeclamp.com
- Chief USA → chiefautomotive.com
- Polar Hand Tools → polar-tools.com (verify URL)
- Romess Tools → romess.de/en

- [ ] **Step 2: Create src/data/categories.ts**

```typescript
// src/data/categories.ts

export interface Brand {
  name: string
  slug: string
  logoPlaceholder: string   // replaced with actual logo path in later task
  description: string
  products: string[]
  website: string
}

export interface Category {
  slug: string
  name: string
  tagline: string
  description: string
  imagePlaceholder: string  // replaced with actual hero image
  brands: Brand[]
}

export const categories: Category[] = [
  {
    slug: 'vehicle-lifts',
    name: 'Vehicle Lifts',
    tagline: 'Precision Lifting for Every Workshop',
    description:
      'From compact two-post lifts for passenger vehicles to heavy-duty column lifts for commercial fleets, our lifting solutions cover the full spectrum of professional workshop needs.',
    imagePlaceholder: '/images/categories/vehicle-lifts.jpg',
    brands: [
      {
        name: 'Rotary Lift',
        slug: 'rotary-lift',
        logoPlaceholder: '/logos/brands/rotary-lift.png',
        description:
          'The world\'s largest manufacturer of vehicle lifts, Rotary Lift has been the trusted choice of professional technicians since 1925. Their range covers two-post, four-post, scissor, and mobile column lifts engineered for reliability and safety.',
        products: [
          'Two-Post Lifts',
          'Four-Post Lifts',
          'Scissor Lifts',
          'Mobile Column Lifts',
          'Motorcycle Lifts',
        ],
        website: 'https://www.rotarylift.com',
      },
      {
        name: 'Real (Rotary Engineering Asia Limited)',
        slug: 'real',
        logoPlaceholder: '/logos/brands/real.png',
        description:
          'REAL delivers high-quality lifting equipment engineered for Asian and Middle-Eastern workshop environments. Built with robust steel construction and safety-first design, REAL lifts meet international standards at competitive value.',
        products: [
          'Two-Post Lifts',
          'Four-Post Lifts',
          'Parallelogram Lifts',
        ],
        website: 'https://www.real-lifts.com',
      },
      {
        name: 'Finkbeiner',
        slug: 'finkbeiner',
        logoPlaceholder: '/logos/brands/finkbeiner.png',
        description:
          'German-engineered lifting systems from Finkbeiner are the benchmark for heavy-duty and commercial vehicle workshops. Specializing in bus, truck, and specialty vehicle lifts, Finkbeiner combines Teutonic precision with long-term durability.',
        products: [
          'Heavy-Duty Column Lifts',
          'Commercial Vehicle Lifts',
          'Axle Play Detectors',
          'Wheel-Free Lifting Systems',
        ],
        website: 'https://www.finkbeiner.de/en',
      },
    ],
  },
  {
    slug: 'wheel-service',
    name: 'Wheel Service',
    tagline: 'Accuracy You Can Measure',
    description:
      'Precise wheel alignment, balancing, and tire service equipment from the brands that set the global standard for wheel service technology.',
    imagePlaceholder: '/images/categories/wheel-service.jpg',
    brands: [
      {
        name: 'Hunter Engineering',
        slug: 'hunter-engineering',
        logoPlaceholder: '/logos/brands/hunter.png',
        description:
          'Hunter Engineering is the world leader in wheel alignment, tire changers, wheel balancers, and inspection systems. Trusted by OEM dealerships and independent workshops globally, Hunter equipment combines camera-guided accuracy with intuitive software.',
        products: [
          'Wheel Alignment Systems',
          'Tire Changers',
          'Wheel Balancers',
          'ADAS Calibration',
          'Quick Check Drive Inspection',
        ],
        website: 'https://www.hunter.com',
      },
      {
        name: 'HPA Faip',
        slug: 'hpa-faip',
        logoPlaceholder: '/logos/brands/hpa-faip.png',
        description:
          'HPA Faip is an Italian manufacturer of professional tire inflation and service equipment. Their product line covers workshop compressors, digital tire inflators, and fluid handling systems designed for demanding professional environments.',
        products: [
          'Digital Tire Inflators',
          'Workshop Compressors',
          'Tire Pressure Gauges',
          'Fluid Dispensing Equipment',
        ],
        website: 'https://www.hpafaip.com',
      },
    ],
  },
  {
    slug: 'vehicle-inspection',
    name: 'Vehicle Inspection & Testing',
    tagline: 'Certified Accuracy, Trusted Results',
    description:
      'Professional vehicle inspection and diagnostic equipment that meets international regulatory standards, trusted by government inspection lanes and authorized service centers.',
    imagePlaceholder: '/images/categories/vehicle-inspection.jpg',
    brands: [
      {
        name: 'Maha Haldenwang',
        slug: 'maha-haldenwang',
        logoPlaceholder: '/logos/brands/maha.png',
        description:
          'Maha is Germany\'s leading manufacturer of vehicle testing and inspection equipment. Their systems are certified for official roadworthiness testing worldwide, covering brake testers, emissions analyzers, suspension testers, and complete inspection lane solutions.',
        products: [
          'Brake Testing Systems',
          'Emissions Analyzers',
          'Suspension & Shock Absorber Testers',
          'Headlight Testers',
          'Complete Inspection Lane Systems',
          'OBD Diagnostic Systems',
        ],
        website: 'https://www.maha.de/en',
      },
    ],
  },
  {
    slug: 'ac-service',
    name: 'A/C Service',
    tagline: 'Complete Climate Control Solutions',
    description:
      'Professional automotive air conditioning service equipment — from refrigerant recovery and recycling to complete A/C system diagnostics.',
    imagePlaceholder: '/images/categories/ac-service.jpg',
    brands: [
      {
        name: 'Ecotechnics Italy',
        slug: 'ecotechnics',
        logoPlaceholder: '/logos/brands/ecotechnics.png',
        description:
          'Ecotechnics is an Italian specialist in automotive air conditioning service equipment. Their recovery, recycling, and recharging (RRR) machines comply with European and international environmental standards and handle all current and emerging refrigerant types.',
        products: [
          'A/C Recovery & Recharging Machines',
          'Refrigerant Identifiers',
          'Leak Detection Equipment',
          'Flushing Machines',
        ],
        website: 'https://www.ecotechnics.eu',
      },
      {
        name: 'Weaco by Dometic',
        slug: 'weaco-dometic',
        logoPlaceholder: '/logos/brands/weaco.png',
        description:
          'Weaco, part of the Dometic Group, provides professional automotive A/C service solutions trusted by workshops and OEM service centers worldwide. Their product range covers service stations, refrigerant analyzers, and complete A/C diagnostic systems.',
        products: [
          'A/C Service Stations',
          'Refrigerant Analyzers',
          'Compressor Oil Injectors',
          'A/C System Flushers',
        ],
        website: 'https://www.dometic.com/weaco',
      },
    ],
  },
  {
    slug: 'body-paint',
    name: 'Body & Paint',
    tagline: 'Restore. Protect. Perfect.',
    description:
      'Complete body shop solutions covering vehicle frame straightening, spray booths, welding, and structural repair systems from world-class manufacturers.',
    imagePlaceholder: '/images/categories/body-paint.jpg',
    brands: [
      {
        name: 'SaicoZero Italy',
        slug: 'saicozero',
        logoPlaceholder: '/logos/brands/saicozero.png',
        description:
          'SaicoZero is an Italian specialist in automotive spray booths and paint finishing systems. Their booths deliver controlled temperature, airflow, and filtration environments for flawless paint results, meeting international environmental and safety standards.',
        products: [
          'Automotive Spray Booths',
          'Preparation Stations',
          'Paint Mixing Rooms',
          'Infrared Curing Systems',
        ],
        website: 'https://www.saicozero.it/en',
      },
      {
        name: 'Deca Welding',
        slug: 'deca-welding',
        logoPlaceholder: '/logos/brands/deca.png',
        description:
          'Deca is a leading Italian manufacturer of professional welding equipment for automotive and industrial applications. Their MIG, TIG, and resistance welders are engineered for precision work on modern vehicle body panels and structural components.',
        products: [
          'MIG/MAG Welders',
          'TIG Welders',
          'Spot Welders',
          'Plasma Cutters',
          'Battery Chargers',
        ],
        website: 'https://www.decastudio.it/en',
      },
      {
        name: 'Wedgeclamp',
        slug: 'wedgeclamp',
        logoPlaceholder: '/logos/brands/wedgeclamp.png',
        description:
          'Wedgeclamp systems deliver professional vehicle body and frame straightening solutions. Their modular bench systems and clamping technology allow precise multi-directional pulling for accurate structural repair on all vehicle types.',
        products: [
          'Body & Frame Straightening Benches',
          'Pulling Towers',
          'Universal Clamping Systems',
          'Measuring Systems',
        ],
        website: 'https://www.wedgeclamp.com',
      },
      {
        name: 'Chief Automotive (USA)',
        slug: 'chief-usa',
        logoPlaceholder: '/logos/brands/chief.png',
        description:
          'Chief Automotive Technologies is North America\'s leading brand of vehicle measuring and straightening equipment. Their Genesis and Goliath systems provide the accuracy and repeatability demanded by certified collision repair centers.',
        products: [
          'Frame Straightening Systems',
          'Measuring Systems',
          'Structural Anchoring',
          'Pulling Attachments',
        ],
        website: 'https://www.chiefautomotive.com',
      },
    ],
  },
  {
    slug: 'hand-tools',
    name: 'Hand Tools & Workshop Equipment',
    tagline: 'Built for Professionals, Built to Last',
    description:
      'Professional-grade hand tools and workshop equipment trusted by technicians who demand precision, durability, and ergonomic performance every day.',
    imagePlaceholder: '/images/categories/hand-tools.jpg',
    brands: [
      {
        name: 'Polar Hand Tools',
        slug: 'polar-tools',
        logoPlaceholder: '/logos/brands/polar.png',
        description:
          'Polar delivers a comprehensive range of professional-grade hand tools and tool storage solutions. Manufactured to exceed international quality standards, Polar tools are the choice of demanding automotive technicians who rely on their tools daily.',
        products: [
          'Socket Sets',
          'Wrench Sets',
          'Torque Wrenches',
          'Screwdrivers',
          'Tool Cabinets & Storage',
          'Specialty Automotive Tools',
        ],
        website: 'https://www.polar-tools.com',
      },
      {
        name: 'Romess Tools',
        slug: 'romess',
        logoPlaceholder: '/logos/brands/romess.png',
        description:
          'Romess is a German specialist in professional workshop tools and specialty measuring instruments. Their product range focuses on precision torque tools, specialty automotive tools, and workshop equipment built to DIN standards.',
        products: [
          'Torque Wrenches',
          'Specialty Automotive Tools',
          'Measuring Instruments',
          'Workshop Equipment',
        ],
        website: 'https://www.romess.de/en',
      },
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
```

- [ ] **Step 3: Create src/data/services.ts**

```typescript
// src/data/services.ts

export interface Service {
  id: string
  title: string
  icon: string          // SVG path data or emoji placeholder
  description: string
  details: string[]
}

export const services: Service[] = [
  {
    id: 'after-sales',
    title: 'After-Sales Support & Spare Parts',
    icon: '🔧',
    description:
      'We stock genuine spare parts for all brands we represent and provide rapid technical support to keep your equipment running at peak performance.',
    details: [
      'Genuine manufacturer spare parts',
      'Fast parts availability from local stock',
      'Remote and on-site technical support',
      'Equipment diagnostics and troubleshooting',
    ],
  },
  {
    id: 'installation',
    title: 'Equipment Installation & Commissioning',
    icon: '⚙️',
    description:
      'Our certified technicians handle full installation and commissioning of all equipment, ensuring everything is set up correctly and calibrated from day one.',
    details: [
      'Site survey and preparation guidance',
      'Professional installation by certified technicians',
      'Factory-standard commissioning and calibration',
      'Operator handover and basic training',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance Contracts',
    icon: '📋',
    description:
      'Protect your investment with a planned maintenance contract. We offer flexible annual and multi-year contracts tailored to your workshop size and equipment portfolio.',
    details: [
      'Scheduled preventive maintenance visits',
      'Priority response for breakdowns',
      'Discounted parts pricing',
      'Equipment performance reports',
    ],
  },
  {
    id: 'training',
    title: 'Training for Technicians',
    icon: '🎓',
    description:
      'Get the most from your equipment with professional training programs delivered by our certified trainers, at your premises or at our training facility.',
    details: [
      'Equipment operation and safety training',
      'Advanced diagnostic and calibration training',
      'Hunter Engineering certified programs',
      'Certificate of completion issued',
    ],
  },
  {
    id: 'calibration',
    title: 'Calibration & Inspection Services',
    icon: '📐',
    description:
      'Keep your workshop equipment certified and accurate with our professional calibration services, compliant with Egyptian and international standards.',
    details: [
      'Periodic calibration of measuring equipment',
      'Compliance with ILAC/ISO standards',
      'Calibration certificates issued',
      'Wheel alignment and brake tester calibration',
    ],
  },
  {
    id: 'inspection-lane',
    title: 'Inspection Lane Operation',
    icon: '🏁',
    description:
      'We design, supply, install, and operate complete vehicle inspection lane systems for government and private inspection centers across Egypt.',
    details: [
      'Full inspection lane design and layout',
      'Supply and installation of all testing equipment',
      'Staff training for inspection procedures',
      'Ongoing technical management and support',
      'Compliance with Egyptian traffic regulations',
    ],
  },
]
```

- [ ] **Step 4: Create src/data/news.ts**

```typescript
// src/data/news.ts

export interface NewsArticle {
  slug: string
  title: string
  date: string          // ISO date string
  category: 'Company News' | 'Product Launch' | 'Industry Update'
  excerpt: string
  content: string       // Full article body (HTML string or markdown)
  image: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'elbassiouni-launches-new-website-2026',
    title: 'Elbassiouni Automotive Equipment Launches New Digital Presence',
    date: '2026-04-20',
    category: 'Company News',
    excerpt:
      'As we enter our 46th year of serving Egypt\'s automotive industry, Elbassiouni Automotive Equipment is proud to launch our new website — a digital showcase of our 14 world-class brands and expanded service offering.',
    content: `
      <p>As we enter our 46th year of serving Egypt's automotive industry, Elbassiouni Automotive Equipment is proud to launch our new website — a digital showcase of our 14 world-class brands and expanded service offering.</p>
      <p>Our new online presence reflects our commitment to making it easier for workshops, dealerships, and fleet operators across Egypt to discover, explore, and enquire about the premium automotive equipment we represent.</p>
      <p>From wheel alignment and vehicle lifts to spray booths and inspection lane systems, Elbassiouni remains your single trusted partner for equipping the modern automotive workshop.</p>
    `,
    image: '/images/news/website-launch.jpg',
  },
  {
    slug: 'hunter-alignment-system-update',
    title: 'Hunter Engineering Introduces Next-Generation Alignment Technology',
    date: '2026-03-15',
    category: 'Product Launch',
    excerpt:
      'Hunter Engineering\'s latest alignment systems bring camera-guided, touchless wheel measurement to a new level of speed and accuracy — now available through Elbassiouni in Egypt.',
    content: `
      <p>Hunter Engineering's latest generation of wheel alignment systems represents a significant leap forward in workshop productivity. The new systems use advanced camera arrays and AI-assisted vehicle recognition to reduce alignment setup time by up to 60%.</p>
      <p>As Hunter's authorized distributor in Egypt, Elbassiouni Automotive Equipment is now taking orders for the new lineup. Contact us for a demonstration at your workshop.</p>
    `,
    image: '/images/news/hunter-alignment.jpg',
  },
  {
    slug: 'inspection-lane-certification',
    title: 'Elbassiouni Completes Inspection Lane Certification Program',
    date: '2026-02-01',
    category: 'Company News',
    excerpt:
      'Our technical team has completed the latest round of international certifications for inspection lane design and operation, reinforcing our position as Egypt\'s leading inspection lane provider.',
    content: `
      <p>Elbassiouni's technical team recently completed an intensive international certification program covering the design, installation, and management of vehicle inspection lanes.</p>
      <p>This certification, recognized by international vehicle inspection authorities, enables us to deliver fully compliant inspection lane solutions for both government and private inspection centers across Egypt.</p>
    `,
    image: '/images/news/inspection-cert.jpg',
  },
]

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug)
}
```

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add hardcoded content data files for categories, services, and news"
```

---

## Task 6: Create UI Primitive Components

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/SectionTitle.tsx`

- [ ] **Step 1: Create src/components/ui/Button.tsx**

```typescript
// src/components/ui/Button.tsx
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'outline-dark' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-aspire tracking-widest uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-eb-red focus:ring-offset-2'

  const variants = {
    primary: 'bg-eb-red text-white hover:bg-red-800',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-eb-black',
    'outline-dark': 'border-2 border-eb-black text-eb-black hover:bg-eb-black hover:text-white',
    white: 'bg-white text-eb-black hover:bg-eb-light',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Create src/components/ui/SectionTitle.tsx**

```typescript
// src/components/ui/SectionTitle.tsx

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean       // true = white text (for dark backgrounds)
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-aspire text-3xl md:text-4xl uppercase tracking-wider mb-3 ${
          light ? 'text-white' : 'text-eb-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-eb-red ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add Button and SectionTitle UI primitives"
```

---

## Task 7: Create Navbar

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `__tests__/components/Navbar.test.tsx`

- [ ] **Step 1: Write the failing test**

```typescript
// __tests__/components/Navbar.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '@/components/layout/Navbar'

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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- Navbar
```

Expected: FAIL — `Cannot find module '@/components/layout/Navbar'`

- [ ] **Step 3: Create src/components/layout/Navbar.tsx**

```typescript
// src/components/layout/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/categories'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-eb-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/elbassiouni-white.svg"
              alt="Elbassiouni Automotive Equipment"
              width={200}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors"
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors flex items-center gap-1"
              >
                Products
                <span className="text-xs">▾</span>
              </button>
              {productsOpen && (
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-eb-black border border-gray-800 shadow-xl"
                >
                  <Link
                    href="/products"
                    className="block px-4 py-3 text-white font-aspire text-xs tracking-wider uppercase hover:bg-eb-red transition-colors border-b border-gray-800"
                  >
                    All Categories
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="block px-4 py-3 text-gray-300 text-sm hover:bg-eb-red hover:text-white transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors"
            >
              Services
            </Link>
            <Link
              href="/news"
              className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="bg-eb-red text-white font-aspire text-sm tracking-wider uppercase px-5 py-2 hover:bg-red-800 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-800">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Products</p>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 pl-3 text-gray-300 text-sm hover:text-eb-red transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- Navbar
```

Expected: PASS (3 tests passing)

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Navbar.tsx __tests__/components/Navbar.test.tsx
git commit -m "feat: add Navbar with desktop dropdown and mobile menu"
```

---

## Task 8: Create Footer and WhatsApp Button

**Files:**
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/WhatsAppButton.tsx`

- [ ] **Step 1: Create src/components/layout/Footer.tsx**

```typescript
// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/categories'

export default function Footer() {
  return (
    <footer className="bg-eb-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Image
              src="/logos/elbassiouni-white.svg"
              alt="Elbassiouni Automotive Equipment"
              width={180}
              height={45}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Egypt's premier distributor of premium automotive workshop equipment. 45+ years of expertise, 14 international brands.
            </p>
          </div>

          {/* Products column */}
          <div>
            <h4 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'News', href: '/news' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">
              Contact
            </h4>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>Cairo, Egypt</p>
              <p>
                <a href="tel:+20XXXXXXXXXX" className="hover:text-white transition-colors">
                  +20 XX XXXX XXXX
                </a>
              </p>
              <p>
                <a href="mailto:info@elbassiouni.com" className="hover:text-white transition-colors">
                  info@elbassiouni.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Elbassiouni Automotive Equipment. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Est. ~1980 · Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Create src/components/layout/WhatsAppButton.tsx**

```typescript
// src/components/layout/WhatsAppButton.tsx

// Replace WHATSAPP_NUMBER with the actual number (digits only, with country code, no + sign)
// e.g. '201001234567' for Egyptian number +20 100 123 4567
const WHATSAPP_NUMBER = 'REPLACE_WITH_ACTUAL_NUMBER'
const WHATSAPP_MESSAGE = encodeURIComponent('Hello, I would like to inquire about your automotive equipment.')

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all hover:scale-110"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.561 4.133 1.534 5.868L0 24l6.336-1.51A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-5.015-1.375l-.36-.214-3.727.888.934-3.613-.234-.372A9.775 9.775 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182 17.43 2.182 21.818 6.57 21.818 12c0 5.43-4.388 9.818-9.818 9.818z" />
      </svg>
    </a>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx src/components/layout/WhatsAppButton.tsx
git commit -m "feat: add Footer and sticky WhatsApp button"
```

---

## Task 9: Update Root Layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update layout.tsx to include Navbar, Footer, and WhatsAppButton**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: {
    default: 'Elbassiouni Automotive Equipment',
    template: '%s | Elbassiouni',
  },
  description:
    "Egypt's leading distributor of premium automotive workshop equipment. 45+ years of expertise, 14 international brands.",
  keywords: ['automotive equipment Egypt', 'vehicle lifts', 'wheel alignment', 'Hunter Engineering Egypt', 'Rotary Lift Egypt'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-body`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify layout renders**

```bash
npm run dev
```

Open http://localhost:3000 — you should see the black Navbar at the top and Footer at the bottom. Press `Ctrl+C`.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: wire Navbar, Footer, and WhatsApp button into root layout"
```

---

## Task 10: Home Page — Hero Section

**Files:**
- Create: `src/components/home/Hero.tsx`

- [ ] **Step 1: Create src/components/home/Hero.tsx**

```typescript
// src/components/home/Hero.tsx
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-eb-black flex items-center overflow-hidden">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-eb-red/20 to-transparent" />
      </div>

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-eb-red" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-6">
            Est. 1980 · Cairo, Egypt
          </p>

          {/* Headline */}
          <h1 className="font-aspire text-white text-5xl sm:text-6xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Egypt's Premier
            <br />
            <span className="text-eb-red">Automotive</span>
            <br />
            Equipment Partner
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 text-xl max-w-2xl mb-10 leading-relaxed">
            45+ years equipping Egypt's workshops, dealerships, and fleet operators with the world's most trusted automotive equipment brands.
          </p>

          {/* CTAs */}
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

- [ ] **Step 2: Commit**

```bash
git add src/components/home/Hero.tsx
git commit -m "feat: add Hero section component"
```

---

## Task 11: Home Page — Remaining Sections

**Files:**
- Create: `src/components/home/TrustStrip.tsx`
- Create: `src/components/home/CategoryCards.tsx`
- Create: `src/components/home/BrandLogosMarquee.tsx`
- Create: `src/components/home/WhyElbassiouni.tsx`
- Create: `src/components/home/ContactCTABanner.tsx`

- [ ] **Step 1: Create TrustStrip.tsx**

```typescript
// src/components/home/TrustStrip.tsx
const stats = [
  { value: '45+', label: 'Years of Experience' },
  { value: '14', label: 'International Brands' },
  { value: '6', label: 'Equipment Categories' },
  { value: '1000+', label: 'Workshops Equipped' },
]

export default function TrustStrip() {
  return (
    <section className="bg-eb-red py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-aspire text-white text-4xl md:text-5xl mb-2">
                {stat.value}
              </div>
              <div className="text-red-200 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create CategoryCards.tsx**

```typescript
// src/components/home/CategoryCards.tsx
import Link from 'next/link'
import { categories } from '@/data/categories'
import SectionTitle from '@/components/ui/SectionTitle'

export default function CategoryCards() {
  return (
    <section className="py-24 bg-eb-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Equipment Categories"
          subtitle="Six specialized categories covering every corner of the professional automotive workshop."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group block border border-gray-200 hover:border-eb-red transition-all duration-300 p-8 hover:shadow-lg"
            >
              <h3 className="font-aspire text-xl uppercase tracking-wide text-eb-black group-hover:text-eb-red transition-colors mb-3">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {cat.tagline}
              </p>
              <span className="font-aspire text-xs tracking-widest uppercase text-eb-red flex items-center gap-2">
                View Brands
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create BrandLogosMarquee.tsx**

```typescript
// src/components/home/BrandLogosMarquee.tsx
import { categories } from '@/data/categories'

// Flatten all brands from all categories
const allBrands = categories.flatMap((cat) => cat.brands)

export default function BrandLogosMarquee() {
  return (
    <section className="bg-eb-gray py-12 overflow-hidden">
      <p className="text-center font-aspire text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
        Our Brand Portfolio
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Doubled for seamless loop */}
        {[...allBrands, ...allBrands].map((brand, i) => (
          <div
            key={`${brand.slug}-${i}`}
            className="inline-flex items-center mx-12 text-gray-400 hover:text-white transition-colors"
          >
            <span className="font-aspire text-sm tracking-wider uppercase">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create WhyElbassiouni.tsx**

```typescript
// src/components/home/WhyElbassiouni.tsx
import SectionTitle from '@/components/ui/SectionTitle'

const reasons = [
  {
    title: '45+ Years of Expertise',
    description:
      'Since 1980, Elbassiouni has been the trusted name in automotive equipment across Egypt. Our deep market knowledge means we recommend the right solution for your specific needs.',
  },
  {
    title: 'World-Class Brands',
    description:
      'We represent only the most respected international manufacturers — Hunter Engineering, Rotary Lift, Maha Haldenwang, and 11 more — giving you access to the best equipment available.',
  },
  {
    title: 'Full After-Sales Support',
    description:
      'From installation and training to maintenance contracts and spare parts, our support team ensures your equipment performs at its best throughout its lifetime.',
  },
  {
    title: 'Certified & Compliant',
    description:
      'All equipment we supply meets Egyptian regulatory requirements. Our inspection lane systems are fully compliant with traffic authority standards.',
  },
]

export default function WhyElbassiouni() {
  return (
    <section className="py-24 bg-eb-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Elbassiouni"
          subtitle="Four decades of trust, built one workshop at a time."
          centered
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="border border-gray-800 p-8 hover:border-eb-red transition-colors"
            >
              <div className="w-8 h-1 bg-eb-red mb-6" />
              <h3 className="font-aspire text-white text-lg uppercase tracking-wide mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Create ContactCTABanner.tsx**

```typescript
// src/components/home/ContactCTABanner.tsx
import Button from '@/components/ui/Button'

export default function ContactCTABanner() {
  return (
    <section className="bg-eb-red py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-aspire text-white text-4xl md:text-5xl uppercase tracking-wide mb-4">
          Ready to Equip Your Workshop?
        </h2>
        <p className="text-red-200 text-lg mb-10 max-w-2xl mx-auto">
          Contact our team today for product demonstrations, pricing, and expert advice tailored to your operation.
        </p>
        <Button href="/contact" variant="white" size="lg">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/home/
git commit -m "feat: add all home page section components"
```

---

## Task 12: Assemble Home Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace src/app/page.tsx**

```typescript
// src/app/page.tsx
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import CategoryCards from '@/components/home/CategoryCards'
import BrandLogosMarquee from '@/components/home/BrandLogosMarquee'
import WhyElbassiouni from '@/components/home/WhyElbassiouni'
import ContactCTABanner from '@/components/home/ContactCTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryCards />
      <BrandLogosMarquee />
      <WhyElbassiouni />
      <ContactCTABanner />
    </>
  )
}
```

- [ ] **Step 2: Verify home page renders**

```bash
npm run dev
```

Open http://localhost:3000. You should see the full homepage with Hero, red stats strip, category cards, brand marquee, why section, and red CTA banner. Press `Ctrl+C`.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble home page with all sections"
```

---

## Task 13: About Us Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create src/app/about/page.tsx**

```typescript
// src/app/about/page.tsx
import type { Metadata } from 'next'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Elbassiouni Automotive Equipment has served Egypt\'s automotive industry for 45+ years, representing 14 world-class brands.',
}

const milestones = [
  { year: '1980', event: 'Elbassiouni founded in Cairo, Egypt' },
  { year: '1985', event: 'First exclusive agency for a European automotive equipment brand' },
  { year: '1995', event: 'Expanded to represent 5 international brands' },
  { year: '2005', event: 'Launched inspection lane division, supplying government centers' },
  { year: '2015', event: 'Portfolio grows to 10 premium international brands' },
  { year: '2024', event: 'Representing 14 world-class brands across 6 equipment categories' },
  { year: '2026', event: 'Continued commitment to equipping Egypt\'s automotive future' },
]

const values = [
  {
    title: 'Quality',
    description: 'We represent only manufacturers with proven track records and international certifications.',
  },
  {
    title: 'Partnership',
    description: 'We build long-term relationships with our clients, not just one-time transactions.',
  },
  {
    title: 'Expertise',
    description: 'Our team brings decades of hands-on knowledge in automotive workshop equipment.',
  },
  {
    title: 'Support',
    description: 'We stand behind every product with comprehensive after-sales service and spare parts.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-eb-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            About Elbassiouni
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
            For over 45 years, Elbassiouni Automotive Equipment has been the trusted partner of workshops, dealerships, and fleet operators across Egypt — bringing the world's best automotive equipment to the Egyptian market.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle title="Our History" subtitle="Four decades of building Egypt's automotive service industry." />
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  Founded in Cairo in 1980, Elbassiouni Automotive Equipment began as a specialist importer of professional workshop equipment, serving a market that was rapidly professionalizing its automotive service infrastructure.
                </p>
                <p>
                  Over the decades, we established exclusive agency agreements with the world's leading automotive equipment manufacturers — brands like Hunter Engineering, Rotary Lift, and Maha Haldenwang — becoming their dedicated representative in the Egyptian market.
                </p>
                <p>
                  Today, our portfolio spans 14 international brands across 6 equipment categories, covering everything from vehicle lifts and wheel alignment to spray booths and inspection lane systems. We serve workshops of every size, from independent garages to OEM dealership networks and government inspection centers.
                </p>
                <p>
                  Our after-sales division — covering installation, training, maintenance contracts, and spare parts — ensures that every piece of equipment we sell continues to perform at its best throughout its operational life.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="font-aspire text-xl uppercase tracking-wide text-eb-black mb-8">
                Key Milestones
              </h3>
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6">
                    <div className="flex-shrink-0 w-16 font-aspire text-eb-red text-sm tracking-wider">
                      {m.year}
                    </div>
                    <div className="flex-1 pb-6 border-b border-gray-100 text-gray-600 text-sm">
                      {m.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-eb-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Values" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border-t-4 border-eb-red">
                <h3 className="font-aspire text-lg uppercase tracking-wide text-eb-black mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-eb-black text-center">
        <h2 className="font-aspire text-white text-3xl uppercase tracking-wide mb-6">
          Let's Work Together
        </h2>
        <Button href="/contact" variant="primary" size="lg">
          Contact Our Team
        </Button>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify About page**

```bash
npm run dev
```

Open http://localhost:3000/about. Press `Ctrl+C`.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/
git commit -m "feat: add About Us page with history, timeline, and values"
```

---

## Task 14: Products Category Components + Pages

**Files:**
- Create: `src/components/products/CategoryHero.tsx`
- Create: `src/components/products/BrandCard.tsx`
- Create: `src/app/products/page.tsx`
- Create: `src/app/products/[slug]/page.tsx`

- [ ] **Step 1: Create CategoryHero.tsx**

```typescript
// src/components/products/CategoryHero.tsx
interface CategoryHeroProps {
  name: string
  tagline: string
  description: string
}

export default function CategoryHero({ name, tagline, description }: CategoryHeroProps) {
  return (
    <section className="bg-eb-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">
          Equipment Category
        </p>
        <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-4">
          {name}
        </h1>
        <p className="font-aspire text-eb-red text-lg tracking-wide mb-6">{tagline}</p>
        <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Write failing test for BrandCard**

```typescript
// __tests__/components/BrandCard.test.tsx  (create this file)
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
```

- [ ] **Step 3: Run test to verify it fails**

```bash
npm test -- BrandCard
```

Expected: FAIL — `Cannot find module '@/components/products/BrandCard'`

- [ ] **Step 4: Create BrandCard.tsx**

```typescript
// src/components/products/BrandCard.tsx
import Link from 'next/link'
import type { Brand } from '@/data/categories'

interface BrandCardProps {
  brand: Brand
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="border border-gray-200 bg-white hover:border-eb-red transition-colors">
      {/* Brand name header */}
      <div className="bg-eb-black px-8 py-6">
        <h2 className="font-aspire text-white text-2xl uppercase tracking-wide">
          {brand.name}
        </h2>
      </div>

      <div className="p-8">
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          {brand.description}
        </p>

        {/* Products list */}
        <div className="mb-8">
          <h3 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">
            Key Products
          </h3>
          <ul className="space-y-2">
            {brand.products.map((product) => (
              <li key={product} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-eb-red rounded-full flex-shrink-0" />
                {product}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
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
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npm test -- BrandCard
```

Expected: PASS (4 tests)

- [ ] **Step 6: Create Products landing page (src/app/products/page.tsx)**

```typescript
// src/app/products/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/data/categories'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse 14 premium automotive equipment brands across 6 categories — all available through Elbassiouni in Egypt.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">
            Our Portfolio
          </p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            Equipment & Brands
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            14 world-class international brands, 6 equipment categories. Everything your automotive workshop needs, from one trusted partner.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Equipment Categories" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group border border-gray-200 hover:border-eb-red transition-all p-8"
              >
                <h2 className="font-aspire text-xl uppercase tracking-wide text-eb-black group-hover:text-eb-red transition-colors mb-2">
                  {cat.name}
                </h2>
                <p className="text-eb-red font-aspire text-xs tracking-wider mb-4">
                  {cat.tagline}
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  {cat.brands.length} brand{cat.brands.length > 1 ? 's' : ''}
                </p>
                <span className="font-aspire text-xs tracking-widest uppercase text-eb-red flex items-center gap-2">
                  View Brands
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 7: Create dynamic category page (src/app/products/[slug]/page.tsx)**

```typescript
// src/app/products/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { categories, getCategoryBySlug } from '@/data/categories'
import CategoryHero from '@/components/products/CategoryHero'
import BrandCard from '@/components/products/BrandCard'
import Button from '@/components/ui/Button'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug)
  if (!category) return {}
  return {
    title: category.name,
    description: category.description,
  }
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  if (!category) notFound()

  return (
    <>
      <CategoryHero
        name={category.name}
        tagline={category.tagline}
        description={category.description}
      />

      <section className="py-24 bg-eb-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {category.brands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-eb-black text-center">
        <p className="text-gray-400 mb-4 text-sm">
          Need help choosing the right equipment?
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Request a Quote
        </Button>
      </section>
    </>
  )
}
```

- [ ] **Step 8: Verify all category pages**

```bash
npm run dev
```

Open and verify all 6 category URLs:
- http://localhost:3000/products/vehicle-lifts
- http://localhost:3000/products/wheel-service
- http://localhost:3000/products/vehicle-inspection
- http://localhost:3000/products/ac-service
- http://localhost:3000/products/body-paint
- http://localhost:3000/products/hand-tools

Press `Ctrl+C`.

- [ ] **Step 9: Commit**

```bash
git add src/app/products/ src/components/products/ __tests__/components/BrandCard.test.tsx
git commit -m "feat: add Products landing page and all category pages with brand cards"
```

---

## Task 15: Services Page

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Create src/app/services/page.tsx**

```typescript
// src/app/services/page.tsx
import type { Metadata } from 'next'
import { services } from '@/data/services'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Professional after-sales support, installation, maintenance, training, calibration, and inspection lane services from Elbassiouni.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-eb-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">
            After-Sales & Support
          </p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
            We don't just supply equipment — we support it. Our after-sales team is with you from installation to end-of-life, ensuring peak performance every step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What We Offer"
            subtitle="Six core service disciplines, delivered by our certified technical team."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="border border-gray-200 p-8 hover:border-eb-red transition-colors">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h2 className="font-aspire text-lg uppercase tracking-wide text-eb-black mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 bg-eb-red rounded-full flex-shrink-0 mt-1.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-eb-red text-center">
        <h2 className="font-aspire text-white text-3xl uppercase tracking-wide mb-4">
          Need a Service Quote?
        </h2>
        <p className="text-red-200 mb-8">
          Our team will respond within one business day.
        </p>
        <Button href="/contact" variant="white" size="lg">
          Contact Our Service Team
        </Button>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/services/
git commit -m "feat: add Services page with all 6 service cards"
```

---

## Task 16: News Pages

**Files:**
- Create: `src/app/news/page.tsx`
- Create: `src/app/news/[slug]/page.tsx`

- [ ] **Step 1: Create news listing page (src/app/news/page.tsx)**

```typescript
// src/app/news/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { newsArticles } from '@/data/news'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news, product launches, and industry updates from Elbassiouni Automotive Equipment.',
}

export default function NewsPage() {
  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-4">
            News & Updates
          </h1>
          <p className="text-gray-300 text-xl">
            Company news, product launches, and industry updates.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group block border border-gray-200 hover:border-eb-red transition-colors"
              >
                {/* Image placeholder */}
                <div className="bg-eb-gray h-48 flex items-center justify-center">
                  <span className="font-aspire text-gray-600 text-xs tracking-wider uppercase">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-aspire text-eb-red text-xs tracking-widest uppercase mb-3">
                    {new Date(article.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <h2 className="font-aspire text-lg uppercase tracking-wide text-eb-black group-hover:text-eb-red transition-colors mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Create news article page (src/app/news/[slug]/page.tsx)**

```typescript
// src/app/news/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { newsArticles, getArticleBySlug } from '@/data/news'
import Button from '@/components/ui/Button'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default function NewsArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-xs tracking-widest uppercase mb-4">
            {article.category} ·{' '}
            {new Date(article.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <h1 className="font-aspire text-white text-4xl lg:text-5xl uppercase tracking-tight">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article body — HTML from data file */}
          <div
            className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button href="/news" variant="outline-dark" size="md">
              ← Back to News
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/news/
git commit -m "feat: add News listing and article pages"
```

---

## Task 17: Contact Page + Form API

**Files:**
- Create: `src/app/contact/page.tsx`
- Create: `src/app/api/contact/route.ts`
- Create: `__tests__/api/contact.test.ts`

- [ ] **Step 1: Write failing test for contact API**

```typescript
// __tests__/api/contact.test.ts
import { POST } from '@/app/api/contact/route'
import { NextRequest } from 'next/server'

describe('POST /api/contact', () => {
  it('returns 400 when required fields are missing', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test' }), // missing email, message
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toBeTruthy()
  })

  it('returns 200 when all required fields are provided (mocked Resend)', async () => {
    // Mock Resend to avoid real API calls in tests
    jest.mock('resend', () => ({
      Resend: jest.fn().mockImplementation(() => ({
        emails: {
          send: jest.fn().mockResolvedValue({ id: 'test-id', error: null }),
        },
      })),
    }))

    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Ahmed Hassan',
        company: 'Cairo Garage',
        email: 'ahmed@example.com',
        phone: '+201001234567',
        subject: 'Sales Inquiry',
        message: 'I am interested in vehicle lifts.',
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(200)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- contact
```

Expected: FAIL — `Cannot find module '@/app/api/contact/route'`

- [ ] **Step 3: Create API route (src/app/api/contact/route.ts)**

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Replace with your actual destination email
const DESTINATION_EMAIL = process.env.CONTACT_DESTINATION_EMAIL ?? 'info@elbassiouni.com'

interface ContactFormData {
  name: string
  company?: string
  email: string
  phone?: string
  subject: string
  message: string
}

function validateForm(data: Partial<ContactFormData>): string | null {
  if (!data.name || data.name.trim().length < 2) return 'Name is required'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Valid email is required'
  if (!data.message || data.message.trim().length < 10) return 'Message must be at least 10 characters'
  if (!data.subject) return 'Subject is required'
  return null
}

export async function POST(req: NextRequest) {
  try {
    const data: Partial<ContactFormData> = await req.json()
    const validationError = validateForm(data)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const { name, company, email, phone, subject, message } = data as ContactFormData

    const { error } = await resend.emails.send({
      from: 'Elbassiouni Website <noreply@elbassiouni.com>',
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `[${subject}] New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          ${company ? `<tr><td><strong>Company:</strong></td><td>${company}</td></tr>` : ''}
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          ${phone ? `<tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>` : ''}
          <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
        </table>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- contact
```

Expected: PASS (2 tests)

- [ ] **Step 5: Create Contact page (src/app/contact/page.tsx)**

```typescript
// src/app/contact/page.tsx
// Note: 'use client' required for form state — metadata lives in parent layout
'use client'

import { useState } from 'react'

const subjects = [
  'Sales Inquiry',
  'After-Sales Support',
  'Inspection Lane',
  'Training',
  'Maintenance Contract',
  'General Enquiry',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      const body = await res.json()
      setErrorMsg(body.error ?? 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-eb-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-xl">
            Our team typically responds within one business day.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-aspire text-2xl uppercase tracking-wide text-eb-black mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6 text-gray-600 text-sm">
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">Phone</p>
                  <a href="tel:+20XXXXXXXXXX" className="hover:text-eb-red transition-colors">
                    +20 XX XXXX XXXX
                  </a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">Email</p>
                  <a href="mailto:info@elbassiouni.com" className="hover:text-eb-red transition-colors">
                    info@elbassiouni.com
                  </a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">WhatsApp</p>
                  <a
                    href="https://wa.me/REPLACE_WITH_ACTUAL_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-eb-red transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">Address</p>
                  <p>Cairo, Egypt</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="border border-green-200 bg-green-50 p-8 text-center">
                  <h3 className="font-aspire text-xl uppercase tracking-wide text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700 text-sm">
                    Thank you for reaching out. Our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">
                        Company
                      </label>
                      <input
                        name="company"
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red"
                        placeholder="+20 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red bg-white"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="font-aspire text-sm tracking-widest uppercase bg-eb-red text-white px-8 py-4 hover:bg-red-800 transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 6: Run all tests**

```bash
npm test
```

Expected: All tests pass.

- [ ] **Step 7: Commit**

```bash
git add src/app/contact/ src/app/api/ __tests__/api/
git commit -m "feat: add Contact page with form and API route using Resend"
```

---

## Task 18: Environment Variables Setup

**Files:**
- Create: `.env.local`
- Create: `.env.example`

- [ ] **Step 1: Create .env.local**

```bash
# .env.local  (never commit this file)
RESEND_API_KEY=your_resend_api_key_here
CONTACT_DESTINATION_EMAIL=info@elbassiouni.com
```

To get a free Resend API key:
1. Go to resend.com and create a free account
2. Go to API Keys → Create API Key
3. Copy the key into `RESEND_API_KEY` above

- [ ] **Step 2: Create .env.example (safe to commit)**

```bash
# .env.example — copy to .env.local and fill in values
RESEND_API_KEY=
CONTACT_DESTINATION_EMAIL=
```

- [ ] **Step 3: Add .env.local to .gitignore**

Open `.gitignore` and verify `.env.local` is listed. If not, add it:
```
.env.local
```

- [ ] **Step 4: Commit .env.example only**

```bash
git add .env.example .gitignore
git commit -m "chore: add environment variable template and verify .gitignore"
```

---

## Task 19: Final Build Verification

- [ ] **Step 1: Run all tests one final time**

```bash
npm test
```

Expected: All tests PASS.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no errors. All routes listed as static/dynamic pages.

- [ ] **Step 3: Run production preview**

```bash
npm start
```

Open http://localhost:3000 and manually verify:
- Home page loads with all sections
- http://localhost:3000/about — loads correctly
- http://localhost:3000/products — shows 6 categories
- http://localhost:3000/products/vehicle-lifts — shows 3 brands
- http://localhost:3000/products/body-paint — shows 4 brands
- http://localhost:3000/services — shows 6 service cards
- http://localhost:3000/news — shows 3 articles
- http://localhost:3000/contact — form is visible and interactive
- Navbar dropdown opens on hover
- WhatsApp button visible bottom-right on all pages
- Footer visible on all pages

Press `Ctrl+C`.

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "chore: Plan 1 complete — all pages built and verified"
```

---

## Owner Action Items (before Plan 2)

After Plan 1 is complete, gather the following for Plan 2 (Sanity CMS) and Plan 3 (deployment):

1. **Logo files** — Export `elbassiouni-white.svg` and `elbassiouni-black.svg` from your brand PDF
2. **Aspire font file** — Obtain `aspire-regular.woff2` from whoever designed the brand
3. **WhatsApp number** — The number visitors will message (with country code)
4. **Phone numbers** — Office phone(s) to display on Contact page and Footer
5. **Physical address** — Full address for Contact page
6. **Email address** — Where contact form submissions should land
7. **Product photos** — Images for the category heroes and news articles
8. **Resend account** — Free account at resend.com for the contact form to send email
