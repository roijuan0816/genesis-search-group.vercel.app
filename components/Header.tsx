'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['HOME', 'ABOUT', 'SERVICES', 'INDUSTRIES', 'EMPLOYERS', 'CONTACT']

  return (
    <header className="fixed w-full top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gray-700">
      <nav className="container flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-accent"
        >
          Genesis
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-gray-300 hover:text-accent transition-colors duration-200"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary border-t border-gray-700 px-4 py-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-gray-300 hover:text-accent transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  )
}

export default Header
