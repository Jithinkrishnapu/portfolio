'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CodenzicPromo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="codenzic" className="py-20 bg-[#111317] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Blurred Background Glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#a9fc03]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 md:w-2/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Building The Future of Business Software With Codenzic
            </h2>
            <p className="text-lg text-[#c1caad] mb-10 leading-relaxed">
              At Codenzic Innovations, we specialize in building high-performance software that solves complex business challenges. From enterprise platforms to bespoke AI solutions, we are the technical engine for modern industry.
            </p>
            <a
              href="https://codenzic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#a9fc03] font-semibold hover:gap-5 transition-all duration-300"
            >
              Visit Codenzic Innovations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right Graphics */}
          <div className="relative z-10 md:w-1/3 flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="w-48 h-48 rounded-full border-4 border-[#a9fc03]/20 flex items-center justify-center p-8 relative"
            >
              <div className="text-5xl font-extrabold tracking-tighter text-white">C.</div>
              {/* Outer orbit dot */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#a9fc03] rounded-full shadow-[0_0_15px_#a9fc03]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
