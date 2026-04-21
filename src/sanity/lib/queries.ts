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
