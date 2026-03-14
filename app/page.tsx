'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 text-center text-black overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-xl tracking-[0.3em] uppercase mb-5"
        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
      >
        We warmly invite you to share in our happiness
      </motion.p>

      <div className="flex flex-col items-center gap-2">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
        >
          You have mail from
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
          className="text-7xl"
          style={{ fontFamily: 'SymphonyPro, cursive' }}
        >
          Barbare & Levan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2, ease: 'easeOut' }}
          className="relative"
        >
          <Image
            src="/assets/images/first.png"
            alt="Envelope"
            width={600}
            height={600}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2, ease: 'easeOut' }}
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
        >
          Click envelope to open
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.8, ease: 'easeOut' }}
          className="text-2xl"
          style={{ fontFamily: 'SymphonyPro, cursive' }}
        >
          We hope you can join us
        </motion.p>
      </div>
    </main>
  )
}
