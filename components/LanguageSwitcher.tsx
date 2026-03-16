'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-4 right-4 z-[100] flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ${
        scrolled ? 'bg-white/30 backdrop-blur-md shadow-sm' : ''
      }`}
      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
    >
      <button
        onClick={() => setLang('en')}
        className={`text-xs md:text-sm tracking-wider transition-all cursor-pointer ${
          lang === 'en' ? 'text-black' : 'text-black/40 hover:text-black/70'
        }`}
      >
        ENG
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/images/lang.png"
        alt=""
        style={{ width: '24px', height: 'auto' }}
      />
      <button
        onClick={() => setLang('ka')}
        className={`text-xs md:text-sm tracking-wider transition-all cursor-pointer ${
          lang === 'ka' ? 'text-black' : 'text-black/40 hover:text-black/70'
        }`}
      >
        GEO
      </button>
    </div>
  )
}
