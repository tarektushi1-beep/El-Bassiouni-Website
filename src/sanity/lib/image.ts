// src/sanity/lib/image.ts
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'
import type { SanityImageAsset } from './types'

// imageUrlBuilder needs a real @sanity/client instance (not our wrapper).
// We create a minimal read-only client just for URL building.
const rawClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-04-20',
  useCdn: true,
})

const builder = imageUrlBuilder(rawClient)

export function urlFor(source: SanityImageAsset) {
  return builder.image(source)
}
