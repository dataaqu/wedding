'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function LandingPage() {
  const [isOpening, setIsOpening] = useState(false)
  const router = useRouter()
  const { t, lang } = useLanguage()

  const handleEnvelopeClick = () => {
    if (isOpening) return
    setIsOpening(true)
    setTimeout(() => {
      router.push('/invite')
    }, 2000)
  }

  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-4 md:px-6 py-12 text-center text-black relative">
      {/* Fade overlay */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="fixed inset-0 bg-[#e5e3d9] z-50"
          />
        )}
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={isOpening ? { opacity: 0, y: -30 } : { opacity: 1, y: 0 }}
        transition={{ duration: isOpening ? 0.6 : 1, ease: 'easeOut' }}
        className="text-[10px] md:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 md:mb-5 max-w-[90vw]"
        style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: lang === 'ka' ? 300 : 500 }}
      >
        {t('landing.subtitle')}
      </motion.p>

      <div className="flex flex-col items-center gap-1 md:gap-2 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isOpening ? { opacity: 0, y: -20 } : { opacity: 1 }}
          transition={{ duration: isOpening ? 0.5 : 0.8, delay: isOpening ? 0 : 0.8, ease: 'easeOut' }}
          className="text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase"
          style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: lang === 'ka' ? 300 : 500 }}
        >
          {t('landing.mailFrom')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isOpening ? { opacity: 0, y: -20 } : { opacity: 1, scale: 1 }}
          transition={{ duration: isOpening ? 0.5 : 1, delay: isOpening ? 0.1 : 1.4, ease: 'easeOut' }}
          className="pt-4 overflow-visible whitespace-nowrap pl-[5px] md:pl-0"
          style={{ fontFamily: lang === 'ka' ? 'Elguja, cursive' : 'SymphonyPro, cursive', fontSize: lang === 'ka' ? 'clamp(36px, 9vw, 90px)' : 'clamp(48px, 12vw, 120px)' }}
        >
          {t('landing.names')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isOpening
            ? { opacity: 1, y: 0, scale: 1.1 }
            : { opacity: 1, y: 0 }
          }
          transition={{ duration: isOpening ? 0.8 : 1.2, delay: isOpening ? 0 : 2.2, ease: 'easeOut' }}
          className="relative w-[80vw] max-w-[600px] z-10"
        >
          <motion.div
            whileHover={!isOpening ? { scale: 1.03, y: -5 } : {}}
            whileTap={!isOpening ? { scale: 0.97 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="cursor-pointer relative"
            onClick={handleEnvelopeClick}
          >
            <Image
              src="/assets/images/first.png"
              alt="Envelope"
              width={600}
              height={600}
              priority
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isOpening ? { opacity: 0, y: 20 } : { opacity: 1 }}
          transition={{ duration: isOpening ? 0.4 : 0.8, delay: isOpening ? 0 : 3.2, ease: 'easeOut' }}
          className="text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase"
          style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: lang === 'ka' ? 300 : 500 }}
        >
          {t('landing.clickEnvelope')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isOpening ? { opacity: 0, y: 20 } : { opacity: 1 }}
          transition={{ duration: isOpening ? 0.4 : 0.8, delay: isOpening ? 0.1 : 3.8, ease: 'easeOut' }}
          className={lang === 'ka' ? 'text-xs md:text-base' : 'text-lg md:text-2xl'}
          style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'SymphonyPro, cursive', fontWeight: lang === 'ka' ? 300 : undefined }}
        >
          {t('landing.hopeJoin')}
        </motion.p>
      </div>
    </main>
  )
}
