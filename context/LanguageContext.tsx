'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'ka' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
  getImage: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  ka: {
    'landing.subtitle': 'გეპატიჟებით ჩვენი ბედნიერების გასაზიარებლად',
    'landing.mailFrom': 'თქვენთვის განსაკუთრებული წერილია',
    'landing.names': 'barbaresa da levanisgan',
    'landing.clickEnvelope': 'გასახსნელად დააჭირეთ კონვერტს',
    'landing.hopeJoin': 'ვიმედოვნებთ, რომ ჩვენს განსაკუთრებულ დღეს შემოგვიერთდებით',
  },
  en: {
    'landing.subtitle': 'We warmly invite you to share in our happiness',
    'landing.mailFrom': 'You have mail from',
    'landing.names': 'Barbare & Levan',
    'landing.clickEnvelope': 'Click envelope to open',
    'landing.hopeJoin': 'We hope you can join us',
  },
}

const images: Record<Language, Record<string, string>> = {
  ka: {
    'heart': '/assets/images/heart.png',
    'invite': '/assets/images/png invite.png',
  },
  en: {
    'heart': '/assets/images/heart.png',
    'invite': '/assets/images/png invite.png',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('ka')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language | null
    if (saved === 'en' || saved === 'ka') {
      setLangState(saved)
    }
    setMounted(true)
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }

  const t = (key: string): string => {
    return translations[lang][key] ?? key
  }

  const getImage = (key: string): string => {
    return images[lang][key] ?? images['ka'][key] ?? ''
  }

  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getImage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
