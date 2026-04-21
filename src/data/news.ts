// src/data/news.ts

export interface NewsArticle {
  slug: string
  title: string
  date: string
  category: 'Company News' | 'Product Launch' | 'Industry Update'
  excerpt: string
  content: string
  image: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'elbassiouni-launches-new-website-2026',
    title: 'Elbassiouni Automotive Equipment Launches New Digital Presence',
    date: '2026-04-20',
    category: 'Company News',
    excerpt:
      "As we enter our 46th year of serving Egypt's automotive industry, Elbassiouni Automotive Equipment is proud to launch our new website — a digital showcase of our 14 world-class brands and expanded service offering.",
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
      "Hunter Engineering's latest alignment systems bring camera-guided, touchless wheel measurement to a new level of speed and accuracy — now available through Elbassiouni in Egypt.",
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
      "Our technical team has completed the latest round of international certifications for inspection lane design and operation, reinforcing our position as Egypt's leading inspection lane provider.",
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
