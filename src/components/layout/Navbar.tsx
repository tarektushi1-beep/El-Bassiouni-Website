// src/components/layout/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { categories } from '@/data/categories'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const prefix = locale === 'ar' ? '/ar' : ''
  const pathname = usePathname()
  const switchHref = locale === 'ar'
    ? pathname.replace(/^\/ar/, '') || '/'
    : `/ar${pathname}`

  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const navLinks = [
    { label: t('home'), href: `${prefix}/` },
    { label: t('about'), href: `${prefix}/about` },
    { label: t('services'), href: `${prefix}/services` },
    { label: t('news'), href: `${prefix}/news` },
    { label: t('contact'), href: `${prefix}/contact` },
  ]

  const flagSrc = locale === 'ar' ? '/flags/en.png' : '/flags/ar.png'
  const flagAlt = locale === 'ar' ? 'Switch to English' : 'Switch to Arabic'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-eb-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex-shrink-0">
            <Image
              src="/logos/elbassiouni-white.png"
              alt="Elbassiouni Automotive Equipment"
              width={240}
              height={70}
              priority
              className="w-auto h-[62px]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href={`${prefix}/`} className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors">
              {t('home')}
            </Link>
            <Link href={`${prefix}/about`} className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors">
              {t('about')}
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors flex items-center gap-1"
              >
                {t('products')}
                <span className="text-xs">▾</span>
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-eb-black border border-gray-800 shadow-xl">
                  <Link
                    href={`${prefix}/products`}
                    onClick={() => setProductsOpen(false)}
                    className="block px-4 py-3 text-white font-aspire text-xs tracking-wider uppercase hover:bg-eb-red transition-colors border-b border-gray-800"
                  >
                    {t('allCategories')}
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`${prefix}/products/${cat.slug}`}
                      onClick={() => setProductsOpen(false)}
                      className="block px-4 py-3 text-gray-300 text-sm hover:bg-eb-red hover:text-white transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={`${prefix}/services`} className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors">
              {t('services')}
            </Link>
            <Link href={`${prefix}/news`} className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors">
              {t('news')}
            </Link>
            <Link href={`${prefix}/contact`} className="bg-eb-red text-white font-aspire text-sm tracking-wider uppercase px-5 py-2 hover:bg-red-800 transition-colors">
              {t('contact')}
            </Link>

            {/* Language switcher — flag icon */}
            <Link href={switchHref} className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src={flagSrc}
                alt={flagAlt}
                width={32}
                height={32}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Mobile: flag + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <Link href={switchHref} className="opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src={flagSrc}
                alt={flagAlt}
                width={28}
                height={28}
                className="rounded-full"
              />
            </Link>
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-800">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{t('products')}</p>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`${prefix}/products/${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 pl-3 text-gray-300 text-sm hover:text-eb-red transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
