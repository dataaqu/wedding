'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-4 md:px-6 py-8 text-center text-black overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-[10px] md:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 md:mb-5 max-w-[90vw]"
        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
      >
        We warmly invite you to share in our happiness
      </motion.p>

      <div className="flex flex-col items-center gap-1 md:gap-2 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
        >
          You have mail from
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
          className="text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: 'SymphonyPro, cursive' }}
        >
          Barbare & Levan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2, ease: 'easeOut' }}
          className="relative w-[80vw] max-w-[600px]"
        >
          <Image
            src="/assets/images/first.png"
            alt="Envelope"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2, ease: 'easeOut' }}
          className="text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
        >
          Click envelope to open
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.8, ease: 'easeOut' }}
          className="text-lg md:text-2xl"
          style={{ fontFamily: 'SymphonyPro, cursive' }}
        >
          We hope you can join us
        </motion.p>
      </div>
    </main>
  )
}
