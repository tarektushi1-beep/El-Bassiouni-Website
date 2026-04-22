'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="bg-eb-black min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-4">
          Something Went Wrong
        </p>
        <h1 className="font-aspire text-white text-5xl uppercase tracking-tight mb-6">
          Unexpected Error
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="font-aspire text-sm tracking-widest uppercase text-white bg-eb-red px-8 py-4 hover:bg-red-800 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="font-aspire text-sm tracking-widest uppercase text-gray-400 border border-gray-700 px-8 py-4 hover:border-white hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
