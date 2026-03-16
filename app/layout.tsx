import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export const metadata: Metadata = {
  title: 'Barbare & Levan ',
  description: 'We are getting married! Join us to celebrate our special day.',
  icons: {
    icon: '/assets/fav.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka">
      <body>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
