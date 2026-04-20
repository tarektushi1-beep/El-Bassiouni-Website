// src/components/layout/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/categories'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-eb-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/elbassiouni-white.svg"
              alt="Elbassiouni Automotive Equipment"
              width={200}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors">
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors flex items-center gap-1"
              >
                Products
                <span className="text-xs">▾</span>
              </button>
              {productsOpen && (
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-eb-black border border-gray-800 shadow-xl"
                >
                  <Link
                    href="/products"
                    className="block px-4 py-3 text-white font-aspire text-xs tracking-wider uppercase hover:bg-eb-red transition-colors border-b border-gray-800"
                  >
                    All Categories
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="block px-4 py-3 text-gray-300 text-sm hover:bg-eb-red hover:text-white transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/services" className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors">
              Services
            </Link>
            <Link href="/news" className="text-white font-aspire text-sm tracking-wider uppercase hover:text-eb-red transition-colors">
              News
            </Link>
            <Link href="/contact" className="bg-eb-red text-white font-aspire text-sm tracking-wider uppercase px-5 py-2 hover:bg-red-800 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
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
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Products</p>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
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
