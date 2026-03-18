'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function InvitePage() {
  const { lang, t } = useLanguage()

  return (
    <main className="min-h-svh flex items-center justify-center px-4 py-16 text-center text-black">
      <div className="flex flex-col items-center w-full max-w-[700px] mt-8">

        {/* Hero section - floral frame with couple illustration and text */}
        <div className="relative w-[120vw] md:w-[85vw] max-w-[700px]">
          {/* Floral frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src="/assets/images/1.png"
              alt="Floral frame"
              width={800}
              height={800}
              priority
              className="w-full h-auto"
            />
          </motion.div>
          {/* Content overlay centered inside the frame */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-[20%] pb-[8%] mt-5">
            {/* Couple illustration */}
            <motion.div
              className="w-[25%] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
            >
              <Image
                src="/assets/images/2.png"
                alt="Couple"
                width={400}
                height={400}
                priority
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
            >
              <p
                className="text-[2.5vw] md:text-sm tracking-[0.15em] uppercase mb-2"
                style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                {t('invite.joinUs')}
              </p>
              <p
                className="text-[8vw] md:text-5xl mt-4"
                style={{ fontFamily: lang === 'ka' ? 'Elguja, cursive' : 'SymphonyPro, cursive' }}
              >
                {lang === 'ka' ? 'barbare da levani' : 'Barbare & Levan'}
              </p>
              <p
                className="text-[2.8vw] md:text-sm tracking-[0.15em] mt-2"
                style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                26.04.2026
              </p>
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-5xl md:text-6xl text-center mt-32 md:mt-10"
          style={{ fontFamily: lang === 'ka' ? 'Elguja, cursive' : 'SymphonyPro, cursive' }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('invite.timeline')}
        </motion.p>

        <motion.a
          href="https://maps.app.goo.gl/X13TxE2B86TScNXB9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="w-[50vw] md:w-[70vw] max-w-[400px] mt-8 cursor-pointer">
            <Image src="/assets/images/venues_and_churches_PNG-02.webp" alt="Venue" width={600} height={600} className="w-full h-auto" />
          </div>
          <p className="text-sm md:text-lg tracking-[0.15em] uppercase mt-6 text-center cursor-pointer" style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 500 }}>
            {t('invite.church')}
          </p>
          <p className="text-xs md:text-sm tracking-[0.1em] mt-2 text-center cursor-pointer" style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 300 }}>
            {t('invite.churchDetails')}
          </p>
        </motion.a>

        <motion.a
          href="https://maps.app.goo.gl/BmRWXAWvZ2dVHpQW8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="w-[50vw] md:w-[70vw] max-w-[400px] mt-16 cursor-pointer">
            <Image src="/assets/images/dining_element_PNG-58.png" alt="Dining venue" width={600} height={600} className="w-full h-auto" />
          </div>
          <p className="text-sm md:text-lg tracking-[0.15em] uppercase mt-6 text-center cursor-pointer" style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 500 }}>
            {t('invite.signing')}
          </p>
          <p className="text-xs md:text-sm tracking-[0.1em] mt-2 text-center cursor-pointer" style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 300 }}>
            {t('invite.signingDetails')}
          </p>
        </motion.a>

        <motion.a
          href="https://maps.app.goo.gl/BmRWXAWvZ2dVHpQW8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="w-[50vw] md:w-[70vw] max-w-[400px] mt-16 cursor-pointer">
            <Image src="/assets/images/table_setting_PNG-02.webp" alt="Wedding reception" width={600} height={600} className="w-full h-auto" />
          </div>
          <p className="text-sm md:text-lg tracking-[0.15em] uppercase mt-6 text-center cursor-pointer" style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 500 }}>
            {t('invite.dinner')}
          </p>
          <p className="text-xs md:text-sm tracking-[0.1em] mt-2 text-center cursor-pointer" style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 300 }}>
            {t('invite.dinnerDetails')}
          </p>
        </motion.a>

        <motion.div
          className="mt-24 mb-16 flex flex-col items-center gap-3 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-xs md:text-sm tracking-[0.15em] uppercase" style={{ fontFamily: lang === 'ka' ? 'FiraGO, sans-serif' : 'Montserrat, sans-serif', fontWeight: 500 }}>
            {t('invite.honored')}
          </p>
          <p className="text-4xl md:text-6xl" style={{ fontFamily: lang === 'ka' ? 'Elguja, cursive' : 'SymphonyPro, cursive' }}>
            {t('invite.names')}
          </p>
        </motion.div>
      </div>
    </main>
  )
}
