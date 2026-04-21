'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(newLocale: 'en' | 'ar') {
    if (newLocale === locale) return
    // Strip current /ar prefix and apply new one
    const pathWithoutLocale = pathname.replace(/^\/ar/, '') || '/'
    const newPath = newLocale === 'ar' ? `/ar${pathWithoutLocale}` : pathWithoutLocale
    router.push(newPath)
  }

  return (
    <div className="fixed bottom-24 left-4 z-50 flex flex-col gap-2">
      <button
        onClick={() => switchLocale('en')}
        title="English"
        className={`w-10 h-10 rounded-full shadow-lg text-xl flex items-center justify-center transition-all border-2 ${
          locale === 'en'
            ? 'border-white opacity-100 scale-110'
            : 'border-transparent opacity-50 hover:opacity-80'
        }`}
      >
        🇬🇧
      </button>
      <button
        onClick={() => switchLocale('ar')}
        title="العربية"
        className={`w-10 h-10 rounded-full shadow-lg text-xl flex items-center justify-center transition-all border-2 ${
          locale === 'ar'
            ? 'border-white opacity-100 scale-110'
            : 'border-transparent opacity-50 hover:opacity-80'
        }`}
      >
        🇪🇬
      </button>
    </div>
  )
}
