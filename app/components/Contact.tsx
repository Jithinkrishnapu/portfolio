'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jithin-krishna-078680177/' },
  { name: 'Email', href: 'mailto:jithin@codenzic.com' },
  { name: 'WhatsApp', href: 'https://wa.me/919048512163' },
  { name: 'GitHub', href: 'https://github.com/Jithinkrishnapu' },
  { name: 'X/Twitter', href: 'https://x.com/KrishnaJi29381' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 bg-[#0c0e12] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Contact CTA Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 45 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 md:p-24 rounded-3xl text-center border border-white/10 relative overflow-hidden mb-24"
        >
          {/* Accent glow overlay */}
          <div className="absolute inset-0 bg-[#a9fc03]/5 opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              {"Let's Build Something That Creates Impact"}
            </h2>
            <p className="text-lg text-[#c1caad] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              {"Whether you're looking for a technical co-founder, a strategic partner, or executive-level digital consulting, let's start a conversation."}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:jithin@codenzic.com?subject=Business Consultation"
                className="bg-[#a9fc03] text-black font-semibold px-10 py-5 rounded-lg hover:scale-105 transition-transform duration-200"
              >
                Business Consultation
              </a>
              <a
                href="https://www.linkedin.com/in/jithin-krishna-078680177/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white font-semibold px-10 py-5 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                Strategic Partnership
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-12 text-[#c1caad]">
          <div className="space-y-6">
            <div className="text-2xl font-bold text-white">Jithin Krishna.</div>
            <p className="text-sm leading-relaxed max-w-sm">
              © {new Date().getFullYear()} Jithin Krishna. All rights reserved.<br />
              Co-Founder @ Codenzic Innovations.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-16">
            {/* Connect block */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-white uppercase">CONNECT</h5>
              <ul className="space-y-2.5 text-sm">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company block */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-white uppercase">COMPANY</h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://codenzic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Codenzic Innovations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

      </div>
    </section>
  )
}
