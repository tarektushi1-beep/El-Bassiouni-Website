// src/app/news/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { newsArticles, getArticleBySlug } from '@/data/news'
import Button from '@/components/ui/Button'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default function NewsArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
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
          <div
            className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button href="/news" variant="outline-dark" size="md">← Back to News</Button>
          </div>
        </div>
      </section>
    </>
  )
}
