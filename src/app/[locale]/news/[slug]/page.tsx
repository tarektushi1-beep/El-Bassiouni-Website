// src/app/[locale]/news/[slug]/page.tsx
import { cache } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { NEWS_ARTICLE_QUERY, NEWS_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { SanityNewsArticle } from '@/sanity/lib/types'

export const revalidate = 3600

interface Props { params: { slug: string; locale: string } }

const getArticle = cache((slug: string) =>
  client.fetch<SanityNewsArticle | null>(NEWS_ARTICLE_QUERY, { slug })
)

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(NEWS_SLUGS_QUERY)
  return ['en', 'ar'].flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function NewsArticlePage({ params }: Props) {
  const [article, t] = await Promise.all([
    getArticle(params.slug),
    getTranslations('news'),
  ])
  if (!article) notFound()

  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="news" className="font-aspire text-eb-red text-xs tracking-widest uppercase hover:underline mb-8 block">
            {t('backToNews')}
          </Link>
          <p className="font-aspire text-eb-red text-xs tracking-widest uppercase mb-4">
            {new Date(article.date).toLocaleDateString(params.locale, { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <h1 className="font-aspire text-white text-4xl lg:text-5xl uppercase tracking-tight">{article.title}</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-lg leading-relaxed mb-8">{article.excerpt}</p>
          {article.content && article.content.length > 0 ? (
            <div className="prose prose-gray max-w-none">
              <PortableText value={article.content as Parameters<typeof PortableText>[0]['value']} />
            </div>
          ) : (
            <p className="text-gray-400">{t('noContent')}</p>
          )}
        </div>
      </section>
    </>
  )
}
