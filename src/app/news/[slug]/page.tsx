// src/app/news/[slug]/page.tsx
import { cache } from 'react'
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

const getArticle = cache((slug: string) =>
  client.fetch<SanityNewsArticle | null>(NEWS_ARTICLE_QUERY, { slug })
)

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(NEWS_SLUGS_QUERY)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function NewsArticlePage({ params }: Props) {
  const article = await getArticle(params.slug)
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
