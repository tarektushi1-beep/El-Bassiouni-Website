// src/app/contact/page.tsx
'use client'

import { useState } from 'react'

const subjects = [
  'Sales Inquiry',
  'After-Sales Support',
  'Inspection Lane',
  'Training',
  'Maintenance Contract',
  'General Enquiry',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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
      setErrorMsg(body.error ?? 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-eb-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-aspire text-white text-5xl lg:text-6xl uppercase tracking-tight mb-4">Contact Us</h1>
          <p className="text-gray-300 text-xl">Our team typically responds within one business day.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h2 className="font-aspire text-2xl uppercase tracking-wide text-eb-black mb-8">Get in Touch</h2>
              <div className="space-y-6 text-gray-600 text-sm">
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">Phone</p>
                  <a href="tel:+20XXXXXXXXXX" className="hover:text-eb-red transition-colors">+20 XX XXXX XXXX</a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">Email</p>
                  <a href="mailto:info@elbassiouni.com" className="hover:text-eb-red transition-colors">info@elbassiouni.com</a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">WhatsApp</p>
                  <a href="https://wa.me/REPLACE_WITH_ACTUAL_NUMBER" target="_blank" rel="noopener noreferrer" className="hover:text-eb-red transition-colors">
                    Message us on WhatsApp
                  </a>
                </div>
                <div>
                  <p className="font-aspire text-xs tracking-widest uppercase text-eb-red mb-2">Address</p>
                  <p>Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="border border-green-200 bg-green-50 p-8 text-center">
                  <h3 className="font-aspire text-xl uppercase tracking-wide text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 text-sm">Thank you for reaching out. Our team will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">Full Name *</label>
                      <input name="name" required className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">Company</label>
                      <input name="company" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red" placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">Email *</label>
                      <input name="email" type="email" required className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">Phone</label>
                      <input name="phone" type="tel" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red" placeholder="+20 XXX XXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">Subject *</label>
                    <select name="subject" required className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red bg-white">
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-aspire text-xs tracking-widest uppercase text-gray-600 mb-2">Message *</label>
                    <textarea name="message" required rows={5} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-eb-red resize-none" placeholder="Tell us about your requirements..." />
                  </div>
                  {status === 'error' && <p className="text-red-600 text-sm">{errorMsg}</p>}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="font-aspire text-sm tracking-widest uppercase bg-eb-red text-white px-8 py-4 hover:bg-red-800 transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending\u2026' : 'Send Message'}
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
