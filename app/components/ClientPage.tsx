'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './Hero'
import ExecutiveIntro from './ExecutiveIntro'
import Services from './Services'
import CodenzicPromo from './CodenzicPromo'
import Work from './Work'
import Leadership from './Leadership'
import Philosophy from './Philosophy'
import Contact from './Contact'

const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#0c0e12] -z-10" />,
})

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setPrevScrollPos(currentScrollPos)
      setVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#111317]/80 backdrop-blur-xl border-b border-white/5 h-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tighter text-[#e2e2e8]">
          Jithin Krishna.
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium text-[#c1caad] hover:text-white transition-colors duration-200"
          >
            Strategy
          </a>
          <a
            href="#impact"
            className="text-sm font-medium text-[#c1caad] hover:text-white transition-colors duration-200"
          >
            Impact
          </a>
          <a
            href="#codenzic"
            className="text-sm font-medium text-[#c1caad] hover:text-white transition-colors duration-200"
          >
            Codenzic
          </a>
          <a
            href="#work"
            className="text-sm font-medium text-[#c1caad] hover:text-white transition-colors duration-200"
          >
            Case Studies
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-[#a9fc03] text-black font-semibold text-xs px-5 py-3 rounded-lg hover:scale-105 transition-transform duration-200"
        >
          Schedule a Strategy Call
        </a>
      </div>
    </motion.nav>
  )
}

export default function ClientPage() {
  return (
    <main className="relative bg-[#0c0e12] min-h-screen text-[#e2e2e8] overflow-hidden">
      <Navbar />
      <Scene3D />
      <Hero />
      <ExecutiveIntro />
      <Services />
      <CodenzicPromo />
      <Work />
      <Leadership />
      <Philosophy />
      <Contact />
    </main>
  )
}
