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
