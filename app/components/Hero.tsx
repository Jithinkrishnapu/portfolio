'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-12 md:pt-24 pb-20 overflow-hidden">
      {/* Background Dots Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, #a9fc03 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-3/5 text-left">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest text-[#a9fc03] uppercase"
            >
              Founder & CSO
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight tracking-tight"
            >
              Building Growth Through <span className="text-[#a9fc03]">Technology</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#c1caad] mb-10 max-w-xl leading-relaxed font-light"
            >
              I am Jithin Krishna, Co-Founder & Chief Strategy Officer at Codenzic Innovations. I help businesses transform operations through enterprise software, automation, AI solutions, and scalable digital strategies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-[#a9fc03] text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-200"
              >
                Partner With Me
              </a>
              <a
                href="#codenzic"
                className="border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                Explore Codenzic
              </a>
            </motion.div>
          </div>

          {/* Right Image Block */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[360px] group aspect-[3/4]"
            >
              {/* Glow Behind Image */}
              <div className="absolute -inset-1 bg-[#a9fc03]/20 blur-xl group-hover:bg-[#a9fc03]/30 transition-all duration-1000 rounded-2xl" />
              
              {/* Glass Card Container */}
              <div className="relative w-full h-full glass-card rounded-2xl overflow-hidden border border-white/10">
                <Image
                  alt="Jithin Krishna - Founder & CSO"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf1PGTYLzD0-16hfgcHp3zWIBAYhfrenuXcRGs5y12G3Ce6L76RN8cG94pWKGwHD3b5O_XxFvfgEwjMLkzrIIjrKmLFtqkLNceXjPfTSwV1dpFlsopMouBE_L8Qwj3kzrVnMExVL3qozpUQmhqXbThGKH4-rXdI1X_sMZzK8zTgobBtMK66R1q_IpA-MkcBSCeIrlNG4Hwo5krGQYkfPvf3o441amRkU2lXWEXesQnNfKyejdEtqpa6EZvPEpfFLjp8SAm8xXY2N4"
                  fill
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
