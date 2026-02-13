'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen, faGlobe, faServer, faPalette, faPlug, faLightbulb, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    title: 'Mobile App Development',
    subtitle: 'React Native & Flutter',
    icon: faMobileScreen,
    gradient: 'from-blue-600/20 to-cyan-600/20',
  },
  {
    title: 'Web Development',
    subtitle: 'Next.js & React',
    icon: faGlobe,
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
  {
    title: 'Backend Development',
    subtitle: 'Node.js & Spring',
    icon: faServer,
    gradient: 'from-green-600/20 to-emerald-600/20',
  },
  {
    title: 'UI/UX Design',
    subtitle: 'Figma & Prototyping',
    icon: faPalette,
    gradient: 'from-orange-600/20 to-red-600/20',
  },
  {
    title: 'API Development',
    subtitle: 'REST & GraphQL',
    icon: faPlug,
    gradient: 'from-indigo-600/20 to-violet-600/20',
  },
  {
    title: 'Consulting',
    subtitle: 'Tech Strategy',
    icon: faLightbulb,
    gradient: 'from-yellow-600/20 to-amber-600/20',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-20 px-6">
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
            <h2 className="text-2xl md:text-3xl font-semibold">what I do</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} border border-[#222] p-4 hover:border-accent/50 transition-all duration-300`}>
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-[#111] border border-[#333] flex items-center justify-center text-accent">
                    <FontAwesomeIcon icon={service.icon} className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-[#888] text-xs mt-1">{service.subtitle}</p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="w-8 h-8 rounded-full bg-accent flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-black" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
