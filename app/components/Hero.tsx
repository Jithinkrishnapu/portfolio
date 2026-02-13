'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCartShopping, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs, faJava, faDocker, faAws } from '@fortawesome/free-brands-svg-icons'

// System-level capabilities (ordered by strategic importance)
const techStack = [
  { name: 'AWS', icon: faAws },
  { name: 'Docker', icon: faDocker },
  { name: 'Java', icon: faJava },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'React', icon: faReact },
]

export default function Hero() {
  return (
    <section className="min-h-screen px-6 pt-8 pb-16 overflow-hidden">
      {/* Top Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center gap-4 mb-8 flex-wrap relative z-20"
      >
        <a
          href="#work"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/50 bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
        >
          <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
          See my work
        </a>
        <a
          href="#services"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#333] bg-[#111] text-white text-sm font-medium hover:border-[#444] transition-colors"
        >
          <FontAwesomeIcon icon={faCartShopping} className="w-4 h-4" />
          My services
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/50 bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
        >
          <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
          Book a service
        </a>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto relative">
        {/* Hero Section with Overlapping Name */}
        <div className="relative min-h-[500px] md:min-h-[550px] mb-8">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-0 top-16 md:top-24 z-10"
          >
            <p className="text-accent text-lg md:text-2xl font-medium mb-1">Tech Founder</p>
            <p className="text-[#888] text-lg md:text-2xl">Co-Founder of Codenzic Innovations</p>
          </motion.div>

          {/* Right Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-0 top-16 md:top-24 z-10 max-w-[200px] md:max-w-[250px] text-right"
          >
            <p className="text-[#BFBFBF] text-xs md:text-sm leading-relaxed">
              Tech Founder focused on building scalable SaaS products and business automation platforms for modern enterprises.
            </p>
          </motion.div>

          {/* Center - Avatar with Name Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Illustrator Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-accent/20 rounded-full blur-[100px]" />
              
              {/* Avatar with dark blend at bottom */}
              <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[400px]">
                <Image
                  src="/avatar_il.png"
                  alt="Jithin Krishna"
                  fill
                  className="object-contain object-bottom"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  }}
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Name - Centered below avatar, overlapping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center -mt-24 md:-mt-32 relative z-10"
        >
          <span className="text-[#555] text-xs md:text-sm font-normal tracking-[0.4em] block mb-1">
            JITHIN
          </span>
          <h1 className="text-7xl md:text-[120px] lg:text-[150px] font-bold tracking-tight leading-none">
            <span className="text-gradient">Krishna</span>
          </h1>
        </motion.div>

        {/* Technical Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 relative z-10"
        >
          <p className="text-center text-[#555] text-xs uppercase tracking-widest mb-4">Technical Background</p>
          <div className="flex justify-center gap-6 md:gap-8 flex-wrap opacity-60">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-2 text-[#666] hover:text-[#888] transition-colors cursor-default"
              >
                <FontAwesomeIcon icon={tech.icon} className="w-4 h-4" />
                <span className="text-xs font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent mb-12" />

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
            Building scalable{' '}
            <span className="text-accent">SaaS products</span>{' '}
            and
            <br />
            business automation platforms
          </h2>
          <p className="text-[#888] text-sm max-w-2xl mx-auto">
            I architect and scale enterprise grade SaaS platforms translating product vision into resilient systems that deliver measurable business outcomes.
          </p>
        </motion.div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center gap-6 flex-wrap opacity-30"
        >
          {['PostgreSQL', 'MongoDB', 'Spring', 'Flutter'].map((tool) => (
            <span key={tool} className="text-[10px] text-[#555] font-medium uppercase tracking-wider">
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
