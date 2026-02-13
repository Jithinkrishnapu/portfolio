'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] max-w-[calc(100vw-48px)] max-h-[calc(100vh-120px)] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-[#222]"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-r from-accent to-accent-dark flex items-center justify-between px-4 z-10">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="w-5 h-5 text-black" />
                <div>
                  <h3 className="text-black font-semibold text-sm">AI Assistant</h3>
                  <p className="text-black/70 text-xs font-normal">Ask me anything</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <FontAwesomeIcon icon={faXmark} className="w-4 h-4 text-black" />
              </button>
            </div>

            {/* Loading state */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-[#0D0D0D] flex items-center justify-center pt-14">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  <p className="text-[#888] text-sm font-normal">Loading AI...</p>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              src="https://ai.jithinkrishna.com"
              className="w-full h-full pt-14 bg-[#0D0D0D]"
              onLoad={() => setIsLoaded(true)}
              title="AI Assistant"
              allow="microphone"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent to-accent-dark text-black font-medium shadow-lg shadow-accent/25 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
          />

          {/* Icon */}
          <FontAwesomeIcon 
            icon={isOpen ? faXmark : faWandMagicSparkles} 
            className="w-4 h-4 relative" 
          />

          <span className="relative font-medium">{isOpen ? 'Close' : 'Ask AI'}</span>
        </motion.button>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/30 -z-10"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.div>
    </>
  )
}
