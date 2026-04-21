// src/app/[locale]/contact/page.tsx
'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const subjects = [t('s1'), t('s2'), t('s3'), t('s4'), t('s5'), t('s6')]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      const body = await res.json()
      setErrorMsg(body.error ?? t('errorPrefix'))
      setStatus('error')
    }
  }

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h2 className="font-aspire text-2xl uppercase tracking-wide text-eb-black mb-8">{t('getInTouch')}</h2>
              <div className="space-y-6 text-gray-600 text-sm">
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">{t('phoneLabel')}</p>
                  <a href="tel:+20XXXXXXXXXX" className="hover:text-eb-red transition-colors">+20 XX XXXX XXXX</a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">{t('emailLabel')}</p>
                  <a href="mailto:info@elbassiouni.com" className="hover:text-eb-red transition-colors">info@elbassiouni.com</a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">{t('whatsappLabel')}</p>
                  <a href="https://wa.me/REPLACE" target="_blank" rel="noopener noreferrer" className="hover:text-eb-red transition-colors">
                    {t('whatsappLink')}
                  </a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">{t('addressLabel')}</p>
                  <p>Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="border border-green-200 bg-green-50 p-8 text-center">
                  <h3 className="font-aspire text-xl uppercase tracking-wide text-green-800 mb-2">{t('successHeading')}</h3>
                  <p className="text-green-600 text-sm">{t('successMessage')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-aspire text-2xl uppercase tracking-wide text-eb-black mb-8">{t('formHeading')}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input name="name" required placeholder={t('namePlaceholder')} className="border border-gray-300 px-4 py-3 text-sm w-full focus:outline-none focus:border-eb-red" />
                    <input name="email" type="email" required placeholder={t('emailPlaceholder')} className="border border-gray-300 px-4 py-3 text-sm w-full focus:outline-none focus:border-eb-red" />
                  </div>
                  <input name="company" placeholder={t('companyPlaceholder')} className="border border-gray-300 px-4 py-3 text-sm w-full focus:outline-none focus:border-eb-red" />
                  <select name="subject" required className="border border-gray-300 px-4 py-3 text-sm w-full focus:outline-none focus:border-eb-red text-gray-700">
                    <option value="">{t('subjectLabel')}</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <textarea name="message" required rows={5} placeholder={t('messagePlaceholder')} className="border border-gray-300 px-4 py-3 text-sm w-full focus:outline-none focus:border-eb-red resize-none" />
                  {status === 'error' && <p className="text-red-600 text-sm">{errorMsg}</p>}
                  <button type="submit" disabled={status === 'loading'} className="bg-eb-red text-white font-aspire text-sm tracking-widest uppercase px-8 py-4 hover:bg-red-800 transition-colors disabled:opacity-50">
                    {status === 'loading' ? t('sending') : t('submitButton')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
