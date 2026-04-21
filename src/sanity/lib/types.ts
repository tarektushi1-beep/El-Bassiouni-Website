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
