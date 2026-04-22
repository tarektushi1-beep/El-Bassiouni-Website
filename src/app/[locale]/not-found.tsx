import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-eb-black min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="font-aspire text-eb-red text-xs tracking-[0.35em] uppercase mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-aspire text-white text-5xl uppercase tracking-tight mb-6">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block font-aspire text-sm tracking-widest uppercase text-white bg-eb-red px-10 py-4 hover:bg-red-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
