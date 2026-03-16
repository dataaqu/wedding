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
    'invite.timeline': 'Cveni saqorwino ganrigi',
    'invite.church': 'ჯვრისწერის ცერემონია',
    'invite.churchDetails': '15:00 / სვეტიცხოვლის ტაძარი. მცხეთა.',
    'invite.signing': 'ხელმოწერის ცერემონია',
    'invite.signingDetails': '17:00 / Lisi Event Hall',
    'invite.dinner': 'საზეიმო ვახშამი',
    'invite.dinnerDetails': '18:00 / Lisi Event Hall',
    'invite.honored': 'ჩვენთვის დიდი პატივია, თუ შეძლებთ ჩვენს განსაკუთრებულ დღეს ჩვენთან ყოფნას. სიყვარულით',

    'invite.names': 'barbare da levani',
  },
  en: {
    'landing.subtitle': 'We warmly invite you to share in our happiness',
    'landing.mailFrom': 'You have mail from',
    'landing.names': 'Barbare & Levan',
    'landing.clickEnvelope': 'Click envelope to open',
    'landing.hopeJoin': 'We hope you can join us',
    'invite.timeline': 'Our wedding timeline',
    'invite.church': 'Church wedding ceremony',
    'invite.churchDetails': '15:00 / Svetitskhoveli Cathedral. Mtskheta.',
    'invite.signing': 'Wedding signing ceremony',
    'invite.signingDetails': '17:00 / Lisi Event Hall',
    'invite.dinner': 'Wedding reception dinner',
    'invite.dinnerDetails': '18:00 / Lisi Event Hall',
    'invite.honored': 'We would be honored by your presence on our special day.',
 
    'invite.names': 'Barbare & Levani',
  },
}

const images: Record<Language, Record<string, string>> = {
  ka: {
    'heart': '/assets/images/heart.png',
    'invite': '/assets/images/qartuli.png',
  },
  en: {
    'heart': '/assets/images/heart.png',
    'invite': '/assets/images/png invite.png',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')
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

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getImage }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
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
