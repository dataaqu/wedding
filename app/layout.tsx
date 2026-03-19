import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export const metadata: Metadata = {
  title: 'Babi & Levan ',
  description: 'We are getting married! Join us to celebrate our special day.',
  icons: {
    icon: '/assets/fav.png',
  },
  openGraph: {
    title: 'Babi & Levan',
    description: 'We are getting married! Join us to celebrate our special day.',
    images: [
      {
        url: '/assets/images/first.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Babi & Levan',
    description: 'We are getting married! Join us to celebrate our special day.',
    images: ['/assets/images/first.png'],
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
