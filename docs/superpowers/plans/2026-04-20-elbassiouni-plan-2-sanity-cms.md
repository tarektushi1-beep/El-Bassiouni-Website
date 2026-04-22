# Elbassiouni Plan 2: Sanity CMS Integration

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all hardcoded `src/data/` content with live Sanity CMS queries, embed Sanity Studio at `/studio`, and provide a seed script that migrates the existing data into Sanity.

**Architecture:** Five Sanity document/object schema types (category, brand, service, newsArticle, siteSettings) are defined and registered with an embedded Sanity Studio. Next.js server components switch from importing `src/data/` files to async GROQ queries via `@sanity/client`. A one-time TypeScript seed script migrates all 14 brands, 6 categories, 6 services, 3 news articles, and placeholder site settings into Sanity. A `SiteChrome` client component wraps the layout so Navbar/Footer are hidden on the `/studio` route.

**Tech Stack:** Sanity (CMS), `@sanity/client` v7 (already installed), `next-sanity` v12 (already installed), `sanity` npm package (Studio), `@portabletext/react` (news content rendering), `@sanity/image-url` (asset URLs), `tsx` + `dotenv` (seed script runner)

---

## PREREQUISITE: Sanity Account Setup (User action — do this before Task 12 and Task 13)

Tasks 1–11 write code only. Before running Task 12 (seed) or Task 13 (build), the user must:

1. Go to https://www.sanity.io and create a free account
2. Click **"New project"** → choose **"Blank"** template → name it "Elbassiouni Website"
3. Copy the **Project ID** from the project dashboard
4. Select dataset name: `production`
5. Go to **API → Tokens → Add API Token** → name it "Seed Script" → **Editor** permissions
6. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=paste_your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_WRITE_TOKEN=paste_your_write_token_here
   ```

---

## File Structure

**New files:**
- `sanity.cli.ts` — Sanity CLI config (projectId, dataset for `npx sanity` commands)
- `sanity.config.ts` — Sanity Studio config (schemas, singleton structure for siteSettings)
- `src/sanity/schemaTypes/brand.ts` — Brand object type (used inline in category)
- `src/sanity/schemaTypes/category.ts` — Category document type
- `src/sanity/schemaTypes/service.ts` — Service document type
- `src/sanity/schemaTypes/newsArticle.ts` — News article document type with Portable Text content
- `src/sanity/schemaTypes/siteSettings.ts` — Site settings singleton document type
- `src/sanity/schemaTypes/index.ts` — Exports all schema types array
- `src/sanity/lib/client.ts` — Sanity client instance (useCdn: true, revalidate: 3600)
- `src/sanity/lib/queries.ts` — All GROQ query constants
- `src/sanity/lib/image.ts` — `urlFor()` helper using `@sanity/image-url`
- `src/sanity/lib/types.ts` — TypeScript interfaces for Sanity-returned data
- `src/app/studio/[[...tool]]/page.tsx` — Embedded Sanity Studio page
- `src/components/layout/SiteChrome.tsx` — Client component: renders Navbar/Footer/WhatsApp only on non-studio routes
- `scripts/seed-sanity.ts` — One-time data migration from `src/data/` into Sanity

**Modified files:**
- `next.config.mjs` — Add `cdn.sanity.io` to allowed image remote patterns
- `.env.example` — Add Sanity env var placeholders
- `src/app/layout.tsx` — Replace direct Navbar/Footer/WhatsApp with `<SiteChrome>`
- `src/components/home/CategoryCards.tsx` — Accept `categories` prop instead of importing data file
- `src/components/home/BrandLogosMarquee.tsx` — Accept `brands` prop instead of importing data file
- `src/components/products/BrandCard.tsx` — Accept `SanityBrand` type, add optional logo display
- `src/app/page.tsx` — Fetch categories from Sanity, pass to CategoryCards and BrandLogosMarquee
- `src/app/products/page.tsx` — Async server component, fetch categories from Sanity
- `src/app/products/[slug]/page.tsx` — Async server component, fetch single category from Sanity
- `src/app/services/page.tsx` — Async server component, fetch services from Sanity
- `src/app/news/page.tsx` — Async server component, fetch articles from Sanity
- `src/app/news/[slug]/page.tsx` — Async server component, render Portable Text content
- `src/components/layout/Footer.tsx` — Async server component, fetch categories + siteSettings
- `src/components/layout/WhatsAppButton.tsx` — Async server component, fetch siteSettings

---

### Task 1: Environment configuration

**Files:**
- Create: `sanity.cli.ts`
- Modify: `next.config.mjs`
- Modify: `.env.example`

- [ ] **Step 1: Create `sanity.cli.ts`**

```typescript
// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  },
})
```

- [ ] **Step 2: Update `next.config.mjs` to allow Sanity CDN images**

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

export default nextConfig
```

- [ ] **Step 3: Update `.env.example`**

Open `.env.example` and replace its contents with:

```
# Resend (contact form)
RESEND_API_KEY=
CONTACT_DESTINATION_EMAIL=

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_WRITE_TOKEN=
```

- [ ] **Step 4: Commit**

```bash
cd /c/Users/Lenovo/elbassiouni-website
git add sanity.cli.ts next.config.mjs .env.example
git commit -m "feat: add Sanity environment configuration"
```

Expected: commit created, 3 files changed

---

### Task 2: Install new dependencies

**Files:** `package.json` (modified by npm)

- [ ] **Step 1: Set Node.js in PATH**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
```

- [ ] **Step 2: Install runtime packages**

```bash
npm install sanity @portabletext/react @sanity/image-url --legacy-peer-deps
```

Expected: 3 packages installed, no errors

- [ ] **Step 3: Install dev packages**

```bash
npm install --save-dev tsx dotenv --legacy-peer-deps
```

Expected: 2 packages installed, no errors

- [ ] **Step 4: Verify install**

```bash
node -e "require('@sanity/image-url'); console.log('OK')"
```

Expected: `OK`

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install sanity, portabletext, image-url, tsx, dotenv"
```

---

### Task 3: Sanity schema types

**Files:**
- Create: `src/sanity/schemaTypes/brand.ts`
- Create: `src/sanity/schemaTypes/category.ts`
- Create: `src/sanity/schemaTypes/service.ts`
- Create: `src/sanity/schemaTypes/newsArticle.ts`
- Create: `src/sanity/schemaTypes/siteSettings.ts`
- Create: `src/sanity/schemaTypes/index.ts`

- [ ] **Step 1: Create `src/sanity/schemaTypes/brand.ts`**

```typescript
// src/sanity/schemaTypes/brand.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const brandType = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: { hotspot: false },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'products',
      title: 'Key Products',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'website',
      title: 'Brand Website',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'name' },
  },
})
```

- [ ] **Step 2: Create `src/sanity/schemaTypes/category.ts`**

```typescript
// src/sanity/schemaTypes/category.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Equipment Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Category Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [defineArrayMember({ type: 'brand' })],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'tagline' },
  },
})
```

- [ ] **Step 3: Create `src/sanity/schemaTypes/service.ts`**

```typescript
// src/sanity/schemaTypes/service.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon (emoji)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'details',
      title: 'Detail Points',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'icon' },
  },
})
```

- [ ] **Step 4: Create `src/sanity/schemaTypes/newsArticle.ts`**

```typescript
// src/sanity/schemaTypes/newsArticle.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const newsArticleType = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Company News', value: 'Company News' },
          { title: 'Product Launch', value: 'Product Launch' },
          { title: 'Industry Update', value: 'Industry Update' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Article Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
})
```

- [ ] **Step 5: Create `src/sanity/schemaTypes/siteSettings.ts`**

```typescript
// src/sanity/schemaTypes/siteSettings.ts
import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, no spaces. Example: 201234567890',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Displayed in footer and contact page. Example: +20 2 1234 5678',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'The full embed URL from Google Maps → Share → Embed a map → Copy HTML, extract the src="" value',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
```

- [ ] **Step 6: Create `src/sanity/schemaTypes/index.ts`**

```typescript
// src/sanity/schemaTypes/index.ts
import { brandType } from './brand'
import { categoryType } from './category'
import { serviceType } from './service'
import { newsArticleType } from './newsArticle'
import { siteSettingsType } from './siteSettings'

export const schemaTypes = [
  brandType,
  categoryType,
  serviceType,
  newsArticleType,
  siteSettingsType,
]
```

- [ ] **Step 7: Verify TypeScript compiles schema types**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npx tsc --noEmit --skipLibCheck 2>&1 | head -20
```

Expected: No errors related to schema files (some unrelated errors from `__tests__/` are OK — those are excluded by tsconfig)

- [ ] **Step 8: Commit**

```bash
git add src/sanity/
git commit -m "feat: add Sanity schema types (category, brand, service, newsArticle, siteSettings)"
```

---

### Task 4: Sanity Studio configuration

**Files:**
- Create: `sanity.config.ts`

- [ ] **Step 1: Create `sanity.config.ts`**

```typescript
// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export default defineConfig({
  name: 'elbassiouni-studio',
  title: 'Elbassiouni Website',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: Site Settings (one document, not a list)
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // All other document types as normal lists
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'siteSettings'
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "__tests__" | grep -v "jest.setup" | head -20
```

Expected: No errors from `sanity.config.ts`

- [ ] **Step 3: Commit**

```bash
git add sanity.config.ts
git commit -m "feat: add Sanity Studio configuration with siteSettings singleton"
```

---

### Task 5: Sanity client library (client, queries, image builder, types)

**Files:**
- Create: `src/sanity/lib/client.ts`
- Create: `src/sanity/lib/queries.ts`
- Create: `src/sanity/lib/image.ts`
- Create: `src/sanity/lib/types.ts`

- [ ] **Step 1: Create `src/sanity/lib/client.ts`**

```typescript
// src/sanity/lib/client.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-04-20',
  useCdn: true,
})
```

- [ ] **Step 2: Create `src/sanity/lib/types.ts`**

```typescript
// src/sanity/lib/types.ts

export interface SanityImageAsset {
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface SanityBrand {
  name: string
  slug: string
  logo?: SanityImageAsset
  description: string
  products: string[]
  website: string
}

export interface SanityCategory {
  _id: string
  name: string
  slug: string
  tagline: string
  description: string
  image?: SanityImageAsset
  brands: SanityBrand[]
}

export interface SanityService {
  _id: string
  title: string
  icon: string
  description: string
  details: string[]
}

export interface SanityNewsArticle {
  _id: string
  title: string
  slug: string
  date: string
  category: 'Company News' | 'Product Launch' | 'Industry Update'
  excerpt: string
  content?: unknown[]
  image?: SanityImageAsset
}

export interface SiteSettings {
  whatsappNumber?: string
  phone?: string
  email?: string
  address?: string
  googleMapsEmbedUrl?: string
}
```

- [ ] **Step 3: Create `src/sanity/lib/queries.ts`**

```typescript
// src/sanity/lib/queries.ts

/** All categories with their brands, ordered by creation date */
export const CATEGORIES_QUERY = `
  *[_type == "category"] | order(_createdAt asc) {
    _id,
    name,
    "slug": slug.current,
    tagline,
    description,
    image,
    brands[] {
      name,
      "slug": slug.current,
      logo,
      description,
      products,
      website
    }
  }
`

/** Single category by slug */
export const CATEGORY_QUERY = `
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    description,
    image,
    brands[] {
      name,
      "slug": slug.current,
      logo,
      description,
      products,
      website
    }
  }
`

/** All category slugs — used by generateStaticParams */
export const CATEGORY_SLUGS_QUERY = `
  *[_type == "category"].slug.current
`

/** All services ordered by display order field */
export const SERVICES_QUERY = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    icon,
    description,
    details
  }
`

/** News article list (no content field — too heavy for list view) */
export const NEWS_ARTICLES_QUERY = `
  *[_type == "newsArticle"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    excerpt,
    image
  }
`

/** Single news article by slug — includes full content */
export const NEWS_ARTICLE_QUERY = `
  *[_type == "newsArticle" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    excerpt,
    content,
    image
  }
`

/** All news article slugs — used by generateStaticParams */
export const NEWS_SLUGS_QUERY = `
  *[_type == "newsArticle"].slug.current
`

/** Site settings singleton */
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    whatsappNumber,
    phone,
    email,
    address,
    googleMapsEmbedUrl
  }
`
```

- [ ] **Step 4: Create `src/sanity/lib/image.ts`**

```typescript
// src/sanity/lib/image.ts
import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import type { SanityImageAsset } from './types'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageAsset) {
  return builder.image(source)
}
```

- [ ] **Step 5: Verify TypeScript compiles**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npx tsc --noEmit --skipLibCheck 2>&1 | grep "src/sanity"
```

Expected: No output (no errors in `src/sanity/`)

- [ ] **Step 6: Commit**

```bash
git add src/sanity/lib/
git commit -m "feat: add Sanity client, GROQ queries, image builder, and TypeScript types"
```

---

### Task 6: Embedded Sanity Studio page and SiteChrome layout wrapper

**Files:**
- Create: `src/app/studio/[[...tool]]/page.tsx`
- Create: `src/components/layout/SiteChrome.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create `src/app/studio/[[...tool]]/page.tsx`**

```tsx
// src/app/studio/[[...tool]]/page.tsx
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

- [ ] **Step 2: Create `src/components/layout/SiteChrome.tsx`**

This client component conditionally renders the Navbar, Footer, and WhatsApp button — hiding them on the `/studio` route so the Studio gets the full viewport.

```tsx
// src/components/layout/SiteChrome.tsx
'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

interface SiteChromeProps {
  children: React.ReactNode
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
```

- [ ] **Step 3: Update `src/app/layout.tsx`**

Replace the direct Navbar/Footer/WhatsApp rendering with `<SiteChrome>`:

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import SiteChrome from '@/components/layout/SiteChrome'
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Run existing tests to ensure layout change didn't break anything**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npm test 2>&1
```

Expected: 9 tests passing, 3 suites

- [ ] **Step 5: Commit**

```bash
git add src/app/studio/ src/components/layout/SiteChrome.tsx src/app/layout.tsx
git commit -m "feat: embed Sanity Studio at /studio, add SiteChrome layout wrapper"
```

---

### Task 7: Update home page components to use Sanity data

**Files:**
- Modify: `src/components/home/CategoryCards.tsx` — accept `categories` prop
- Modify: `src/components/home/BrandLogosMarquee.tsx` — accept `brands` prop
- Modify: `src/app/page.tsx` — fetch categories from Sanity, pass as props

- [ ] **Step 1: Update `src/components/home/CategoryCards.tsx` to accept a prop**

```tsx
// src/components/home/CategoryCards.tsx
import Link from 'next/link'
import type { SanityCategory } from '@/sanity/lib/types'
import SectionTitle from '@/components/ui/SectionTitle'

interface CategoryCardsProps {
  categories: SanityCategory[]
}

export default function CategoryCards({ categories }: CategoryCardsProps) {
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
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{cat.tagline}</p>
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

- [ ] **Step 2: Update `src/components/home/BrandLogosMarquee.tsx` to accept a prop**

```tsx
// src/components/home/BrandLogosMarquee.tsx
import type { SanityBrand } from '@/sanity/lib/types'

interface BrandLogosMarqueeProps {
  brands: SanityBrand[]
}

export default function BrandLogosMarquee({ brands }: BrandLogosMarqueeProps) {
  return (
    <section className="bg-eb-gray py-12 overflow-hidden">
      <p className="text-center font-aspire text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
        Our Brand Portfolio
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={`${brand.slug}-${i}`}
            className="inline-flex items-center mx-12 text-gray-400 hover:text-white transition-colors"
          >
            <span className="font-aspire text-sm tracking-wider uppercase">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Update `src/app/page.tsx` to fetch from Sanity**

```tsx
// src/app/page.tsx
import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory } from '@/sanity/lib/types'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import CategoryCards from '@/components/home/CategoryCards'
import BrandLogosMarquee from '@/components/home/BrandLogosMarquee'
import WhyElbassiouni from '@/components/home/WhyElbassiouni'
import ContactCTABanner from '@/components/home/ContactCTABanner'

export const revalidate = 3600

export default async function Home() {
  const categories: SanityCategory[] = await client.fetch(CATEGORIES_QUERY)
  const allBrands = categories.flatMap((cat) => cat.brands)

  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryCards categories={categories} />
      <BrandLogosMarquee brands={allBrands} />
      <WhyElbassiouni />
      <ContactCTABanner />
    </>
  )
}
```

- [ ] **Step 4: Run existing tests**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npm test 2>&1
```

Expected: 9 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/components/home/CategoryCards.tsx src/components/home/BrandLogosMarquee.tsx src/app/page.tsx
git commit -m "feat: home page fetches categories from Sanity, passes to components as props"
```

---

### Task 8: Update products pages to use Sanity

**Files:**
- Modify: `src/app/products/page.tsx`
- Modify: `src/app/products/[slug]/page.tsx`
- Modify: `src/components/products/BrandCard.tsx`

- [ ] **Step 1: Update `src/components/products/BrandCard.tsx` to use `SanityBrand` type**

```tsx
// src/components/products/BrandCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import type { SanityBrand, SanityImageAsset } from '@/sanity/lib/types'
import { urlFor } from '@/sanity/lib/image'

interface BrandCardProps {
  brand: SanityBrand
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="border border-gray-200 bg-white hover:border-eb-red transition-colors">
      <div className="bg-eb-black px-8 py-6 flex items-center gap-4">
        {brand.logo && (
          <div className="relative w-16 h-10 flex-shrink-0">
            <Image
              src={urlFor(brand.logo as SanityImageAsset).width(128).height(80).url()}
              alt={`${brand.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        )}
        <h2 className="font-aspire text-white text-2xl uppercase tracking-wide">{brand.name}</h2>
      </div>
      <div className="p-8">
        <p className="text-gray-600 text-sm leading-relaxed mb-8">{brand.description}</p>
        <div className="mb-8">
          <h3 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">Key Products</h3>
          <ul className="space-y-2">
            {brand.products.map((product) => (
              <li key={product} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-eb-red rounded-full flex-shrink-0" />
                {product}
              </li>
            ))}
          </ul>
        </div>
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

- [ ] **Step 2: Update `src/app/products/page.tsx`**

```tsx
// src/app/products/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory } from '@/sanity/lib/types'
import SectionTitle from '@/components/ui/SectionTitle'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse 14 premium automotive equipment brands across 6 categories — all available through Elbassiouni in Egypt.',
}

export default async function ProductsPage() {
  const categories: SanityCategory[] = await client.fetch(CATEGORIES_QUERY)

  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">Our Portfolio</p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">Equipment & Brands</h1>
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
                <h2 className="font-aspire text-xl uppercase tracking-wide text-eb-black group-hover:text-eb-red transition-colors mb-2">{cat.name}</h2>
                <p className="text-eb-red font-aspire text-xs tracking-wider mb-4">{cat.tagline}</p>
                <p className="text-gray-500 text-sm mb-6">{cat.brands.length} brand{cat.brands.length > 1 ? 's' : ''}</p>
                <span className="font-aspire text-xs tracking-widest uppercase text-eb-red flex items-center gap-2">
                  View Brands <span className="group-hover:translate-x-1 transition-transform">→</span>
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

- [ ] **Step 3: Update `src/app/products/[slug]/page.tsx`**

```tsx
// src/app/products/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { CATEGORY_QUERY, CATEGORY_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory } from '@/sanity/lib/types'
import CategoryHero from '@/components/products/CategoryHero'
import BrandCard from '@/components/products/BrandCard'
import Button from '@/components/ui/Button'

export const revalidate = 3600

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(CATEGORY_SLUGS_QUERY)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category: SanityCategory | null = await client.fetch(CATEGORY_QUERY, { slug: params.slug })
  if (!category) return {}
  return { title: category.name, description: category.description }
}

export default async function CategoryPage({ params }: Props) {
  const category: SanityCategory | null = await client.fetch(CATEGORY_QUERY, { slug: params.slug })
  if (!category) notFound()

  return (
    <>
      <CategoryHero name={category.name} tagline={category.tagline} description={category.description} />
      <section className="py-24 bg-eb-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {category.brands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-eb-black text-center">
        <p className="text-gray-400 mb-4 text-sm">Need help choosing the right equipment?</p>
        <Button href="/contact" variant="primary" size="lg">Request a Quote</Button>
      </section>
    </>
  )
}
```

- [ ] **Step 4: Update the BrandCard test to use `SanityBrand` type**

Open `__tests__/components/BrandCard.test.tsx` and update the test data (the `logoPlaceholder` field no longer exists; use `logo: undefined` instead):

```tsx
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
```

- [ ] **Step 5: Run tests**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npm test 2>&1
```

Expected: 9 tests passing, 3 suites (BrandCard tests should still pass with updated type)

- [ ] **Step 6: Commit**

```bash
git add src/components/products/BrandCard.tsx src/app/products/ __tests__/components/BrandCard.test.tsx
git commit -m "feat: products pages and BrandCard use Sanity data"
```

---

### Task 9: Update services page to use Sanity

**Files:**
- Modify: `src/app/services/page.tsx`

- [ ] **Step 1: Update `src/app/services/page.tsx`**

```tsx
// src/app/services/page.tsx
import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { SERVICES_QUERY } from '@/sanity/lib/queries'
import type { SanityService } from '@/sanity/lib/types'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional after-sales support, installation, maintenance, training, calibration, and inspection lane services from Elbassiouni.',
}

export default async function ServicesPage() {
  const services: SanityService[] = await client.fetch(SERVICES_QUERY)

  return (
    <>
      <section className="bg-eb-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-sm tracking-[0.3em] uppercase mb-4">After-Sales & Support</p>
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-6">Our Services</h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
            We don&apos;t just supply equipment — we support it. Our after-sales team is with you from installation to end-of-life, ensuring peak performance every step of the way.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What We Offer" subtitle="Six core service disciplines, delivered by our certified technical team." centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service._id} className="border border-gray-200 p-8 hover:border-eb-red transition-colors">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h2 className="font-aspire text-lg uppercase tracking-wide text-eb-black mb-4">{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
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

      <section className="py-16 bg-eb-red text-center">
        <h2 className="font-aspire text-white text-3xl uppercase tracking-wide mb-4">Need a Service Quote?</h2>
        <p className="text-red-200 mb-8">Our team will respond within one business day.</p>
        <Button href="/contact" variant="white" size="lg">Contact Our Service Team</Button>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Run tests**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npm test 2>&1
```

Expected: 9 tests passing

- [ ] **Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "feat: services page fetches data from Sanity"
```

---

### Task 10: Update news pages to use Sanity (with Portable Text)

**Files:**
- Modify: `src/app/news/page.tsx`
- Modify: `src/app/news/[slug]/page.tsx`

- [ ] **Step 1: Update `src/app/news/page.tsx`**

```tsx
// src/app/news/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { NEWS_ARTICLES_QUERY } from '@/sanity/lib/queries'
import type { SanityNewsArticle } from '@/sanity/lib/types'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news, product launches, and industry updates from Elbassiouni Automotive Equipment.',
}

export default async function NewsPage() {
  const articles: SanityNewsArticle[] = await client.fetch(NEWS_ARTICLES_QUERY)

  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-4">News & Updates</h1>
          <p className="text-gray-300 text-xl">Company news, product launches, and industry updates.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group block border border-gray-200 hover:border-eb-red transition-colors">
                <div className="bg-eb-gray h-48 flex items-center justify-center">
                  <span className="font-aspire text-gray-600 text-xs tracking-wider uppercase">{article.category}</span>
                </div>
                <div className="p-6">
                  <p className="font-aspire text-eb-red text-xs tracking-widest uppercase mb-3">
                    {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  <h2 className="font-aspire text-lg uppercase tracking-wide text-eb-black group-hover:text-eb-red transition-colors mb-3">{article.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{article.excerpt}</p>
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

- [ ] **Step 2: Update `src/app/news/[slug]/page.tsx`**

```tsx
// src/app/news/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { NEWS_ARTICLE_QUERY, NEWS_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { SanityNewsArticle } from '@/sanity/lib/types'
import Button from '@/components/ui/Button'

export const revalidate = 3600

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(NEWS_SLUGS_QUERY)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article: SanityNewsArticle | null = await client.fetch(NEWS_ARTICLE_QUERY, { slug: params.slug })
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function NewsArticlePage({ params }: Props) {
  const article: SanityNewsArticle | null = await client.fetch(NEWS_ARTICLE_QUERY, { slug: params.slug })
  if (!article) notFound()

  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-aspire text-eb-red text-xs tracking-widest uppercase mb-4">
            {article.category} · {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <h1 className="font-aspire text-white text-4xl lg:text-5xl uppercase tracking-tight">{article.title}</h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.content && article.content.length > 0 ? (
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
              <PortableText value={article.content as Parameters<typeof PortableText>[0]['value']} />
            </div>
          ) : (
            <p className="text-gray-500 italic">Article content not yet available.</p>
          )}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button href="/news" variant="outline-dark" size="md">← Back to News</Button>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 3: Run tests**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npm test 2>&1
```

Expected: 9 tests passing

- [ ] **Step 4: Commit**

```bash
git add src/app/news/
git commit -m "feat: news pages fetch from Sanity, render Portable Text content"
```

---

### Task 11: Update Footer and WhatsApp button to use Sanity site settings

**Files:**
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/WhatsAppButton.tsx`

- [ ] **Step 1: Update `src/components/layout/Footer.tsx`**

```tsx
// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY, SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory, SiteSettings } from '@/sanity/lib/types'

export default async function Footer() {
  const [categories, settings]: [SanityCategory[], SiteSettings | null] = await Promise.all([
    client.fetch(CATEGORIES_QUERY, {}, { next: { revalidate: 3600 } }),
    client.fetch(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 3600 } }),
  ])

  const phone = settings?.phone ?? '+20 XX XXXX XXXX'
  const email = settings?.email ?? 'info@elbassiouni.com'
  const address = settings?.address ?? 'Cairo, Egypt'

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
              Egypt&apos;s premier distributor of premium automotive workshop equipment. 45+ years of expertise, 14 international brands.
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
                  <Link href={`/products/${cat.slug}`} className="text-gray-400 text-sm hover:text-white transition-colors">
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
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
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
              <p>{address}</p>
              <p>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
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

- [ ] **Step 2: Update `src/components/layout/WhatsAppButton.tsx`**

```tsx
// src/components/layout/WhatsAppButton.tsx
import { client } from '@/sanity/lib/client'
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'
import type { SiteSettings } from '@/sanity/lib/types'

const WHATSAPP_MESSAGE = encodeURIComponent('Hello, I would like to inquire about your automotive equipment.')

export default async function WhatsAppButton() {
  const settings: SiteSettings | null = await client.fetch(
    SITE_SETTINGS_QUERY,
    {},
    { next: { revalidate: 3600 } }
  )
  const number = settings?.whatsappNumber ?? 'REPLACE_WITH_ACTUAL_NUMBER'

  return (
    <a
      href={`https://wa.me/${number}?text=${WHATSAPP_MESSAGE}`}
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

- [ ] **Step 3: Run tests**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npm test 2>&1
```

Expected: 9 tests passing

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Footer.tsx src/components/layout/WhatsAppButton.tsx
git commit -m "feat: Footer and WhatsApp button fetch contact info from Sanity siteSettings"
```

---

### Task 12: Sanity data seed script

This task writes the one-time migration script. It does NOT run it — running happens in Task 13 after the user has set up their Sanity project.

**Files:**
- Create: `scripts/seed-sanity.ts`

- [ ] **Step 1: Create `scripts/seed-sanity.ts`**

```typescript
// scripts/seed-sanity.ts
/**
 * One-time data migration: loads all hardcoded data from src/data/ into Sanity.
 *
 * Run AFTER setting up a Sanity project and adding env vars to .env.local:
 *   npx tsx scripts/seed-sanity.ts
 *
 * Requires:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_WRITE_TOKEN
 */

import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClient } from '@sanity/client'
import { categories } from '../src/data/categories'
import { services } from '../src/data/services'
import { newsArticles } from '../src/data/news'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Missing required env vars: NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_API_WRITE_TOKEN')
  console.error('Add them to .env.local and try again.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-04-20',
  token,
  useCdn: false,
})

// Convert a simple HTML string (only <p> tags) into Sanity Portable Text blocks
function htmlToPortableText(html: string) {
  const paragraphs = html
    .trim()
    .split(/<p>|<\/p>/)
    .map((s) => s.trim())
    .filter(Boolean)

  return paragraphs.map((text, i) => ({
    _type: 'block' as const,
    _key: `block${i}`,
    style: 'normal',
    markDefs: [] as unknown[],
    children: [
      {
        _type: 'span' as const,
        _key: `span${i}`,
        text,
        marks: [] as string[],
      },
    ],
  }))
}

async function seedCategories() {
  console.log('\n=== Seeding categories and brands ===')
  for (const cat of categories) {
    const doc = {
      _type: 'category',
      _id: `category-${cat.slug}`,
      name: cat.name,
      slug: { _type: 'slug', current: cat.slug },
      tagline: cat.tagline,
      description: cat.description,
      brands: cat.brands.map((brand) => ({
        _type: 'brand',
        _key: brand.slug,
        name: brand.name,
        slug: { _type: 'slug', current: brand.slug },
        description: brand.description,
        products: brand.products,
        website: brand.website,
      })),
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ Category: ${cat.name} (${cat.brands.length} brands)`)
  }
}

async function seedServices() {
  console.log('\n=== Seeding services ===')
  for (let i = 0; i < services.length; i++) {
    const svc = services[i]
    const doc = {
      _type: 'service',
      _id: `service-${svc.id}`,
      title: svc.title,
      icon: svc.icon,
      description: svc.description,
      details: svc.details,
      order: i + 1,
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ Service: ${svc.title}`)
  }
}

async function seedNewsArticles() {
  console.log('\n=== Seeding news articles ===')
  for (const article of newsArticles) {
    const doc = {
      _type: 'newsArticle',
      _id: `news-${article.slug}`,
      title: article.title,
      slug: { _type: 'slug', current: article.slug },
      date: article.date,
      category: article.category,
      excerpt: article.excerpt,
      content: htmlToPortableText(article.content),
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ Article: ${article.title}`)
  }
}

async function seedSiteSettings() {
  console.log('\n=== Seeding site settings ===')
  const doc = {
    _type: 'siteSettings',
    _id: 'siteSettings',
    whatsappNumber: 'REPLACE_WITH_ACTUAL_NUMBER',
    phone: '+20 XX XXXX XXXX',
    email: 'info@elbassiouni.com',
    address: 'Cairo, Egypt',
    googleMapsEmbedUrl: '',
  }
  await client.createOrReplace(doc)
  console.log('  ✓ Site settings created (update placeholders in Sanity Studio)')
}

async function main() {
  console.log(`\nConnecting to Sanity project: ${projectId} / ${dataset}`)
  try {
    await seedCategories()
    await seedServices()
    await seedNewsArticles()
    await seedSiteSettings()
    console.log('\n✅ Seed complete! Open your Sanity Studio to review and update the content.')
    console.log('   Studio: https://www.sanity.io/manage\n')
  } catch (err) {
    console.error('\n❌ Seed failed:', err)
    process.exit(1)
  }
}

main()
```

- [ ] **Step 2: Verify the script compiles without errors (dry check)**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npx tsc --noEmit --skipLibCheck scripts/seed-sanity.ts 2>&1 | head -20
```

Expected: No errors (or only tsconfig-related noise that doesn't affect the script)

- [ ] **Step 3: Commit**

```bash
git add scripts/seed-sanity.ts
git commit -m "feat: add Sanity data seed script for initial content migration"
```

---

### Task 13: Run seed and verify build

**Prerequisite:** The user must have completed the Sanity account setup from the PREREQUISITE section at the top of this plan, with valid values in `.env.local` for `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `SANITY_API_WRITE_TOKEN`.

- [ ] **Step 1: Verify env vars are set**

```bash
cd /c/Users/Lenovo/elbassiouni-website
grep "NEXT_PUBLIC_SANITY_PROJECT_ID" .env.local
grep "SANITY_API_WRITE_TOKEN" .env.local
```

Expected: Both lines printed with real values (not empty or placeholder)

If not set: STOP. Ask the user to complete the Sanity setup from the PREREQUISITE section.

- [ ] **Step 2: Set Node.js in PATH and run the seed script**

```bash
export PATH="/c/Program Files/nodejs:$PATH"
cd /c/Users/Lenovo/elbassiouni-website
npx tsx scripts/seed-sanity.ts
```

Expected output:
```
Connecting to Sanity project: <your-project-id> / production

=== Seeding categories and brands ===
  ✓ Category: Vehicle Lifts (3 brands)
  ✓ Category: Wheel Service (2 brands)
  ✓ Category: Vehicle Inspection & Testing (1 brands)
  ✓ Category: A/C Service (2 brands)
  ✓ Category: Body & Paint (4 brands)
  ✓ Category: Hand Tools & Workshop Equipment (2 brands)

=== Seeding services ===
  ✓ Service: After-Sales Support & Spare Parts
  ✓ Service: Equipment Installation & Commissioning
  ✓ Service: Maintenance Contracts
  ✓ Service: Training for Technicians
  ✓ Service: Calibration & Inspection Services
  ✓ Service: Inspection Lane Operation

=== Seeding news articles ===
  ✓ Article: Elbassiouni Automotive Equipment Launches New Digital Presence
  ✓ Article: Hunter Engineering Introduces Next-Generation Alignment Technology
  ✓ Article: Elbassiouni Completes Inspection Lane Certification Program

=== Seeding site settings ===
  ✓ Site settings created (update placeholders in Sanity Studio)

✅ Seed complete! Open your Sanity Studio to review and update the content.
```

If the seed fails: Check that `.env.local` values are correct. The most common error is an invalid `SANITY_API_WRITE_TOKEN` (token must have **Editor** role, not **Viewer**).

- [ ] **Step 3: Run existing tests**

```bash
npm test 2>&1
```

Expected: 9 tests passing, 3 suites — confirm nothing broke

- [ ] **Step 4: Run the production build**

```bash
npm run build 2>&1
```

Expected: Build succeeds. All routes generate:
```
Route (app)                         Size
─────────────────────────────────
○ /                                 (static)
○ /about                            (static)
● /products                         (revalidate: 3600)
● /products/[slug]                  (revalidate: 3600)
● /services                         (revalidate: 3600)
● /news                             (revalidate: 3600)
● /news/[slug]                      (revalidate: 3600)
○ /contact                          (static)
○ /studio/[[...tool]]               (dynamic)
```

Note: If the build fails because Sanity project isn't accessible from the build environment, check that the project is set to **public** or that the API settings allow unauthenticated reads. In Sanity: Settings → API → CORS origins → allow your domain. For the initial build, adding `http://localhost:3000` is sufficient.

- [ ] **Step 5: Test local dev server**

```bash
npm run dev 2>&1 &
sleep 5
curl -s http://localhost:3000 | grep -c "Elbassiouni"
```

Expected: `1` or more (page has "Elbassiouni" in content)

Press Ctrl+C to stop the dev server after verifying.

- [ ] **Step 6: Commit final state**

```bash
git add -A
git status
git commit -m "feat: Plan 2 complete — full Sanity CMS integration with seeded content"
```

---

## Plan Complete

After Task 13, the website is fully connected to Sanity CMS. The owner can:
- Go to https://www.sanity.io/manage → open their project → Content
- Update brand descriptions, product lists, service details, and news articles
- Update site settings (WhatsApp number, phone, email, address)
- Publish new news articles

The embedded studio is also accessible at `http://localhost:3000/studio` during development (and later at the deployed URL).

**Remaining to-do before go-live (owner-provided items):**
- Update siteSettings in Studio: real WhatsApp number, phone, email, address
- Upload logo SVG files to `public/logos/`
- Upload ASPIRE font to `public/fonts/`
- Upload brand logo images via Sanity Studio (in each brand under its category)
- Upload category hero images via Sanity Studio

**Plan 3 (next):** Bilingual EN/AR support + Vercel deployment
