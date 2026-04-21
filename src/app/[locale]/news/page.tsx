// src/app/[locale]/news/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import { NEWS_ARTICLES_QUERY } from '@/sanity/lib/queries'
import type { SanityNewsArticle } from '@/sanity/lib/types'

export const revalidate = 3600
export const metadata: Metadata = { title: 'News' }

export default async function NewsPage() {
  const [articles, t] = await Promise.all([
    client.fetch<SanityNewsArticle[]>(NEWS_ARTICLES_QUERY),
    getTranslations('news'),
  ])

  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-4">{t('heading')}</h1>
          <p className="text-gray-300 text-xl">{t('subheading')}</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`news/${article.slug}`} className="group block border border-gray-200 hover:border-eb-red transition-colors">
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
