'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  }

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto';
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
        data-cursor-hover
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className="fixed inset-0 z-40 bg-dark/95 menu-overlay flex items-center justify-start backdrop-blur-md"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.7, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
              className="flex flex-col justify-center items-start h-full pl-16 md:pl-24"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, type: 'spring', stiffness: 100 }}
                  onClick={() => handleLinkClick(item.href)}
                  className="group mb-8 text-left"
                  data-cursor-hover
                >
                  <div className="relative overflow-hidden">
                    <motion.h2
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300"
                      whileHover={{ x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.name}
                    </motion.h2>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-1 bg-white"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
