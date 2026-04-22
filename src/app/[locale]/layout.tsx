// src/app/[locale]/layout.tsx
import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import SiteChrome from '@/components/layout/SiteChrome'
import '@/styles/globals.css'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

const locales = ['en', 'ar']

export const metadata: Metadata = {
  title: {
    default: 'Elbassiouni Automotive Equipment',
    template: '%s | Elbassiouni',
  },
  description:
    "Egypt's leading distributor of premium automotive workshop equipment. 45+ years of expertise, 14 international brands.",
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${orbitron.variable} font-body`}>
        <NextIntlClientProvider messages={messages}>
          <SiteChrome>{children}</SiteChrome>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
