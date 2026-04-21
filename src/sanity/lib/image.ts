// src/sanity/lib/image.ts
import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import type { SanityImageAsset } from './types'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageAsset) {
  return builder.image(source)
}
