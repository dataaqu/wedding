'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function InvitePage() {
  const { getImage } = useLanguage()

  return (
    <main className="min-h-svh flex items-center justify-center px-4 py-8 text-center text-black">
      <div className="flex flex-col items-center w-full max-w-[700px] mt-8">
        {/* Envelope with invite on top */}
        <div className="relative w-[70vw] max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
            className="absolute left-[69%] -translate-x-1/2 -top-[35%] w-[100%] z-10 will-change-transform"
          >
            <Image
              src={getImage('invite')}
              alt="Invite"
              width={800}
              height={800}
              priority
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0, ease: 'easeOut' }}
            className="relative left-[-10%] will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5, ease: 'easeOut' }}
              className="absolute left-[20%] top-[14%] -translate-y-1/2 w-[35%] z-10 pointer-events-none will-change-transform"
            >
              <Image
                src="/assets/images/cupid_1.webp"
                alt="Cupid"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>
            <Image
              src="/assets/images/open.png"
              alt="Open envelope"
              width={800}
              height={800}
              priority
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Row 2 - scattered elements */}
        <div className="relative w-full -mt-44 md:-mt-72" style={{ height: '90vw', maxHeight: '600px' }}>
          {/* 1. decoration_2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3, ease: 'easeOut' }}
            className="absolute left-[5%] top-[20%] w-[28%] md:w-[20%] z-30 will-change-transform"
          >
            <Image
              src="/assets/images/decoration_2.png"
              alt="Decoration"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </motion.div>

          {/* 2. heart (Details) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.5, ease: 'easeOut' }}
            className="absolute left-[-20%] top-[5%] w-[95%] md:w-[85%] z-40 will-change-transform"
          >
            <Image
              src={getImage('heart')}
              alt="Details heart"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          {/* 3. cupid_2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4, ease: 'easeOut' }}
            className="absolute right-[25%] md:right-[20%] top-[14%] md:top-[10%] w-[28%] md:w-[22%] z-20 will-change-transform"
          >
            <Image
              src="/assets/images/cupid_2.webp"
              alt="Cupid"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </motion.div>

          {/* 4. dining_element_2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.5, ease: 'easeOut' }}
            className="absolute right-[12%] top-[38%] w-[18%] md:w-[12%] z-30 rotate-[10deg] will-change-transform"
          >
            <Image
              src="/assets/images/dining_element_2.png"
              alt="Dining element"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>

          {/* 5. decoration_1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5, ease: 'easeOut' }}
            className="absolute left-[48%] top-[50%] w-[16%] md:w-[10%] z-30 will-change-transform"
          >
            <Image
              src="/assets/images/decoration_1.png"
              alt="Decoration"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </motion.div>

          {/* 6. dining_1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5.5, ease: 'easeOut' }}
            className="absolute right-[8%] top-[75%] w-[22%] md:w-[15%] z-30 will-change-transform"
          >
            <Image
              src="/assets/images/dining_1.webp"
              alt="Dining"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 6, ease: 'easeOut' }}
          className="text-5xl md:text-6xl text-center mt-20"
          style={{ fontFamily: 'SymphonyPro, cursive' }}
        >
          Our wedding timeline
        </motion.p>

        <a href="https://maps.app.goo.gl/X13TxE2B86TScNXB9" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 6.5, ease: 'easeOut' }}
            className="w-[50vw] md:w-[70vw] max-w-[400px] mt-8 cursor-pointer"
          >
            <Image
              src="/assets/images/venues_and_churches_PNG-02.webp"
              alt="Venue"
              width={600}
              height={600}
              className="w-full h-auto ml-5"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 7, ease: 'easeOut' }}
            className="text-sm md:text-lg tracking-[0.15em] uppercase mt-6 text-center cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Church wedding ceremony
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 7.3, ease: 'easeOut' }}
            className="text-xs md:text-sm tracking-[0.1em] mt-2 text-center cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            15:00 / Svetitskhoveli Cathedral. Mtskheta.
          </motion.p>
        </a>

        <a href="https://maps.app.goo.gl/BmRWXAWvZ2dVHpQW8" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 7.8, ease: 'easeOut' }}
            className="w-[50vw] md:w-[70vw] max-w-[400px] mt-16 cursor-pointer"
          >
            <Image
              src="/assets/images/dining_element_PNG-58.png"
              alt="Dining venue"
              width={600}
              height={600}
              className="w-full h-auto ml-5"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 8.3, ease: 'easeOut' }}
            className="text-sm md:text-lg tracking-[0.15em] uppercase mt-6 text-center cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Wedding signing ceremony
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 8.6, ease: 'easeOut' }}
            className="text-xs md:text-sm tracking-[0.1em] mt-2 text-center cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            17:00 / Lisi Event Hall
          </motion.p>
        </a>

        <a href="https://maps.app.goo.gl/BmRWXAWvZ2dVHpQW8" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 9.1, ease: 'easeOut' }}
            className="w-[50vw] md:w-[70vw] max-w-[400px] mt-16 cursor-pointer"
          >
            <Image
              src="/assets/images/table_setting_PNG-02.webp"
              alt="Wedding reception"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 9.6, ease: 'easeOut' }}
            className="text-sm md:text-lg tracking-[0.15em] uppercase mt-6 text-center cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Wedding reception dinner
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 9.9, ease: 'easeOut' }}
            className="text-xs md:text-sm tracking-[0.1em] mt-2 text-center cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            18:00 / Lisi Event Hall
          </motion.p>
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 10.5, ease: 'easeOut' }}
          className="mt-24 mb-16 flex flex-col items-center gap-3 text-center"
        >
          <p
            className="text-xs md:text-sm tracking-[0.15em] uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            We would be honored by your presence on our special day.
          </p>
          <p
            className="text-xs md:text-sm tracking-[0.15em] uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            With love,
          </p>
          <p
            className="text-4xl md:text-6xl"
            style={{ fontFamily: 'SymphonyPro, cursive' }}
          >
            Barbare & Levani
          </p>
        </motion.div>
      </div>
    </main>
  )
}
