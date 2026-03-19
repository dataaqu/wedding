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
    'landing.names': 'babis da levanisgan',
    'landing.clickEnvelope': 'გასახსნელად დააჭირეთ კონვერტს',
    'landing.hopeJoin': 'ვიმედოვნებთ, რომ ჩვენს განსაკუთრებულ დღეს შემოგვიერთდებით',
    'invite.joinUs': 'გვეწვიეთ ჩვენს ქორწილში',
    'invite.timeline': 'Cveni saqorwilo ganrigi',
    'invite.church': 'ჯვრისწერის ცერემონია',
    'invite.churchDetails': '15:00 / სვეტიცხოვლის ტაძარი. მცხეთა.',
    'invite.signing': 'ხელმოწერის ცერემონია',
    'invite.signingDetails': '17:00 / Lisi Event Hall',
    'invite.dinner': 'საზეიმო ვახშამი',
    'invite.dinnerDetails': '18:00 / Lisi Event Hall',
    'invite.honored': 'ჩვენთვის დიდი პატივია, თუ შეძლებთ ჩვენს განსაკუთრებულ დღეს ჩვენთან ყოფნას. სიყვარულით',
    'invite.names': 'babi da levani',
  },
  en: {
    'landing.subtitle': 'We warmly invite you to share in our happiness',
    'landing.mailFrom': 'You have mail from',
    'landing.names': 'Babi & Levani',
    'landing.clickEnvelope': 'Click envelope to open',
    'landing.hopeJoin': 'We hope you can join us',
    'invite.joinUs': 'JOIN US FOR THE WEDDING OF',
    'invite.timeline': 'Our wedding timeline',
    'invite.church': 'Church wedding ceremony',
    'invite.churchDetails': '15:00 / SVETITSKHOVELI CATHEDRAL. MTSKHETA.',
    'invite.signing': 'WEDDING SIGNING CEREMONY',
    'invite.signingDetails': '17:00 / LISI EVENT HALL',
    'invite.dinner': 'WEDDING RECEPTION DINNER',
    'invite.dinnerDetails': '18:00 / LISI EVENT HALL',
    'invite.honored': 'We would be honored by your presence on our special day.',
    'invite.names': 'Babi & Levani',
  },
}

const images: Record<Language, Record<string, string>> = {
  ka: {},
  en: {},
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => translations['en'][key] ?? key,
  getImage: (key: string) => images['en'][key] ?? '',
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'en' || saved === 'ka') {
        setLangState(saved)
      }
    } catch {
      // localStorage unavailable (private browsing, etc.)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('lang', newLang)
    } catch {
      // localStorage unavailable
    }
  }

  const t = (key: string): string => {
    return translations[lang][key] ?? key
  }

  const getImage = (key: string): string => {
    return images[lang][key] ?? images['en'][key] ?? ''
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getImage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
