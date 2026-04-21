// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { getTranslations, getLocale } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import { CATEGORIES_QUERY, SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'
import type { SanityCategory, SiteSettings } from '@/sanity/lib/types'

export default async function Footer() {
  const [categories, settings, t, locale] = await Promise.all([
    client.fetch<SanityCategory[]>(CATEGORIES_QUERY, {}, { next: { revalidate: 3600 } }),
    client.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 3600 } }),
    getTranslations('footer'),
    getLocale(),
  ])
  const p = locale === 'ar' ? '/ar' : ''

  const phone = settings?.phone ?? '+20 XX XXXX XXXX'
  const email = settings?.email ?? 'info@elbassiouni.com'
  const address = settings?.address ?? 'Cairo, Egypt'

  return (
    <footer className="bg-eb-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/logos/elbassiouni-white.png"
              alt="Elbassiouni Automotive Equipment"
              width={180}
              height={45}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">{t('tagline')}</p>
          </div>

          <div>
            <h4 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">{t('productsCol')}</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`${p}/products/${cat.slug}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">{t('companyCol')}</h4>
            <ul className="space-y-2">
              {[
                { label: t('linkAbout'), href: `${p}/about` },
                { label: t('linkServices'), href: `${p}/services` },
                { label: t('linkNews'), href: `${p}/news` },
                { label: t('linkContact'), href: `${p}/contact` },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-4">{t('contactCol')}</h4>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>{address}</p>
              <p><a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{phone}</a></p>
              <p><a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a></p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} {t('copyright')}</p>
          <p className="text-gray-600 text-xs">{t('established')}</p>
        </div>
      </div>
    </footer>
  )
}
