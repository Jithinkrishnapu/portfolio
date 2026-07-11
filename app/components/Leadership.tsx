'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
  { role: 'Developer', side: 'left' },
  { role: 'Senior Engineer', side: 'right' },
  { role: 'Technical Leader', side: 'left' },
  { role: 'Product Builder', side: 'right' },
  { role: 'Co-Founder', side: 'left' },
  { role: 'Chief Strategy Officer', side: 'right', highlight: true },
]

export default function Leadership() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="leadership" className="py-24 bg-[#0c0e12] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-bold text-xs tracking-widest text-[#a9fc03] uppercase mb-4 block"
          >
            Evolution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Leadership Journey
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto" ref={containerRef}>
          {/* Vertical Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 origin-top hidden md:block"
          />

          <div className="space-y-16 md:space-y-24 relative">
            {timelineEvents.map((item, index) => {
              const isLeft = item.side === 'left'

              return (
                <div
                  key={item.role}
                  className={`flex flex-col md:flex-row items-center justify-between w-full relative ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot (Middle of timeline on desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: index * 0.15, duration: 0.4, type: 'spring', stiffness: 200 }}
                      className={`w-4 h-4 rounded-full border-4 border-[#0c0e12] ${
                        item.highlight
                          ? 'bg-[#a9fc03] shadow-[0_0_15px_#a9fc03]'
                          : 'bg-[#a9fc03] opacity-60 shadow-[0_0_10px_rgba(169,252,3,0.3)]'
                      }`}
                    />
                  </div>

                  {/* Left Side Content (Desktop: Text right-aligned / Mobile: Centered) */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
                    className={`w-full md:w-5/12 text-center ${
                      isLeft ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <h4
                      className={`text-xl md:text-2xl font-bold ${
                        item.highlight ? 'text-[#a9fc03] text-2xl md:text-3xl' : 'text-white'
                      }`}
                    >
                      {item.role}
                    </h4>
                  </motion.div>

                  {/* Empty Spacer on opposite side (Desktop only) */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
