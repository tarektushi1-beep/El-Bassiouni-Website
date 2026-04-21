// src/components/layout/SiteChrome.tsx
'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

interface SiteChromeProps {
  children: React.ReactNode
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()
  const isStudio = pathname?.includes('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
