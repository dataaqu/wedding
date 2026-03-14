'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function InvitePage() {
  return (
    <main className="min-h-svh flex items-center justify-center px-4 py-8 text-center text-black">
      <div className="flex flex-col items-center w-full max-w-[700px] mt-12 md:mt-20">
        {/* Envelope with invite on top */}
        <div className="relative w-[60vw] md:w-[70vw] max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
            className="absolute left-[69%] -translate-x-1/2 -top-[35%] w-[100%] z-10"
          >
            <Image
              src="/assets/images/png invite.png"
              alt="Invite"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0, ease: 'easeOut' }}
            className="relative left-[-10%]"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5, ease: 'easeOut' }}
              className="absolute left-[20%] top-[14%] -translate-y-1/2 w-[35%] z-10 pointer-events-none"
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
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Row 2 - scattered elements */}
        <div className="relative w-full -mt-36 md:-mt-72" style={{ height: '70vw', maxHeight: '600px' }}>
          {/* 1. decoration_2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3, ease: 'easeOut' }}
            className="absolute left-[2%] md:left-[5%] top-[25%] md:top-[20%] w-[15%] md:w-[20%] z-30"
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
            className="absolute left-[-8%] md:left-[-10%] top-[5%] w-[70%] md:w-[85%] z-40"
          >
            <Image
              src="/assets/images/heart.png"
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
            className="absolute right-[10%] md:right-[20%] top-[30%] md:top-[10%] w-[18%] md:w-[22%] z-30"
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
            className="absolute right-[5%] md:right-[12%] top-[45%] md:top-[30%] w-[12%] md:w-[15%] z-30 rotate-[10deg]"
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
            className="absolute left-[65%] md:left-[70%] top-[55%] md:top-[60%] w-[8%] md:w-[10%] z-30"
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
            className="absolute right-[8%] md:right-[15%] top-[65%] md:top-[75%] w-[12%] md:w-[15%] z-30"
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
      </div>
    </main>
  )
}
