'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Counter({ target, duration = 2 }: { target: number; duration?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = target
    if (start === end) return

    const totalMiliseconds = duration * 1000
    const startTime = performance.now()

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / totalMiliseconds, 1)
      
      // Ease out quad
      const easeProgress = progress * (2 - progress)
      
      setCount(Math.floor(easeProgress * (end - start) + start))

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}

export default function ExecutiveIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="impact" className="py-20 bg-[#0c0e12]">
      {/* Intro Text */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-md">
              Technology Leader With a Business-First Mindset
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
            ref={ref}
          >
            <p className="text-lg text-[#c1caad] leading-relaxed">
              In an era defined by rapid digital acceleration, I believe technology must create measurable business growth. My approach strips away the hype, focusing on structural efficiency, scalable architecture, and AI integrations that solve real-world operational bottlenecks.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />
      </div>

      {/* Impact Metrics */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2"
          >
            <div className="text-6xl font-extrabold text-[#a9fc03] leading-none">
              <Counter target={5} />+
            </div>
            <div className="text-xs font-bold tracking-widest text-[#c1caad] uppercase">
              Years of Strategic Experience
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-2"
          >
            <div className="text-6xl font-extrabold text-[#a9fc03] leading-none">
              <Counter target={20} />+
            </div>
            <div className="text-xs font-bold tracking-widest text-[#c1caad] uppercase">
              Digital Solutions Architected
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-2"
          >
            <div className="text-6xl font-extrabold text-[#a9fc03] leading-none">
              GCC
            </div>
            <div className="text-xs font-bold tracking-widest text-[#c1caad] uppercase">
              Regional Market Focus
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
