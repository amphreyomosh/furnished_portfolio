'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

export const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' },
  ]

  return (
    <footer className="py-12 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-light hover:text-white transition-colors"
              data-cursor-hover
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-light text-sm">
          Built by <span className="underline hover:text-white transition-colors">Harmo</span>
        </p>
      </div>
    </footer>
  )
}
