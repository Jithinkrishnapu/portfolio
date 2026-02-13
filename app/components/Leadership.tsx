'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faBuilding } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const ventures = [
  {
    title: 'Co-Founder',
    company: 'Codenzic Innovations',
    year: '2026',
    icon: faRocket,
    gradient: 'from-accent/20 to-accent-dark/20',
    description:
      'Leading product strategy, architecture decisions, and business growth at Codenzic Innovations. Building scalable CRM systems, business automation platforms, and enterprise software solutions for clients across India and the Middle East.',
    logo: '/codenzic.jpg',
  },
  {
    title: 'Former Founding Member',
    company: 'Mykare Health',
    year: '2021 – 2025',
    icon: faBuilding,
    gradient: 'from-purple-600/20 to-pink-600/20',
    description:
      'Contributed to early-stage product development, system architecture, and operational infrastructure during the company\'s foundational growth phase in the healthcare technology space.',
    logo: '/mykare.png',
  },
]

export default function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="leadership" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent mb-12" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold">leadership & ventures</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${venture.gradient} border border-[#222] p-4 md:p-6 hover:border-accent/50 transition-all duration-300 h-full`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                  {/* Icon or Logo */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#111] border border-[#333] flex items-center justify-center text-accent shrink-0 overflow-hidden">
                    {venture.logo ? (
                      <Image
                        src={venture.logo}
                        alt={venture.company}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    ) : (
                      <FontAwesomeIcon icon={venture.icon} className="w-5 h-5 md:w-6 md:h-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-white text-xs md:text-sm uppercase tracking-wide">
                        {venture.title}
                      </h3>
                      <span className="text-accent text-[10px] md:text-xs font-medium shrink-0">{venture.year}</span>
                    </div>
                    <p className="text-accent text-xs md:text-sm font-medium mb-2 md:mb-3">{venture.company}</p>
                    <p className="text-[#999] text-xs md:text-sm leading-relaxed">{venture.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
