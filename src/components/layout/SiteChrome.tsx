// src/components/layout/SiteChrome.tsx
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

interface SiteChromeProps {
  children: React.ReactNode
}

export default function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
      <LanguageSwitcher />
    </>
  )
}
