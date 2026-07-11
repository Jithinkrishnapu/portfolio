'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-[#0c0e12] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-8xl text-[#a9fc03] font-serif leading-none mb-4 select-none"
        >
          “
        </motion.div>

        {/* Quote text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-light italic leading-tight text-white mb-8"
        >
          {"\"Technology is valuable only when it creates measurable business impact.\""}
        </motion.h2>

        {/* Accent Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 48 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-[#a9fc03] mx-auto mb-6"
        />

        {/* Source */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs font-bold tracking-widest text-[#c1caad] uppercase"
        >
          Jithin Krishna, Founder Mindset
        </motion.p>
      </div>
    </section>
  )
}
