'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faWhatsapp, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  {
    name: 'Gmail',
    href: 'mailto:jithin1998official@gmail.com',
    icon: faEnvelope,
    color: 'hover:text-red-500',
    bg: 'hover:bg-red-500/10',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jithin-krishna-078680177/',
    icon: faLinkedinIn,
    color: 'hover:text-blue-500',
    bg: 'hover:bg-blue-500/10',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919048512163',
    icon: faWhatsapp,
    color: 'hover:text-green-500',
    bg: 'hover:bg-green-500/10',
  },
  {
    name: 'X/Twitter',
    href: 'https://x.com/KrishnaJi29381',
    icon: faXTwitter,
    color: 'hover:text-white',
    bg: 'hover:bg-white/10',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Jithinkrishnapu',
    icon: faGithub,
    color: 'hover:text-white',
    bg: 'hover:bg-white/10',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/iam_jithinkrishna',
    icon: faInstagram,
    color: 'hover:text-pink-500',
    bg: 'hover:bg-pink-500/10',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent mb-12" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Contact me</h2>

          {/* Social Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#111] border border-[#222] ${link.bg} ${link.color} transition-all duration-300 min-w-[80px]`}
              >
                <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
                <span className="text-xs text-[#888]">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[#555] text-sm mt-12"
          >
            © {new Date().getFullYear()} Jithin Krishna. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
