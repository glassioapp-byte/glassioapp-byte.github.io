'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Why Glassio', href: '#why-glassio' },
  { label: 'FAQ', href: '#faq' },
]

function AppStoreBadge({ small = false }: { small?: boolean }) {
  return (
    <a
      href="#download"
      className={`appstore-btn ${small ? 'text-xs py-2 px-4' : 'text-sm'}`}
      onClick={(e) => e.preventDefault()}
    >
      <svg
        width={small ? '14' : '16'}
        height={small ? '17' : '20'}
        viewBox="0 0 16 20"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.044 10.753c-.02-2.055 1.68-3.056 1.757-3.103-0.96-1.4-2.45-1.59-2.975-1.61-1.256-.127-2.468.746-3.107.746-.638 0-1.608-.732-2.65-.712-1.349.02-2.607.793-3.302 2.002-1.424 2.458-.362 6.085 1.007 8.076.685.978 1.487 2.074 2.544 2.035 1.027-.041 1.413-.653 2.653-.653 1.24 0 1.595.653 2.676.63 1.104-.018 1.797-.988 2.465-1.972.785-1.13 1.104-2.23 1.12-2.287-.025-.012-2.14-.816-2.162-3.152l-.026.0z" />
        <path d="M11.03 4.298c.563-.684.944-1.63.84-2.578-.813.033-1.8.54-2.381 1.22-.522.61-.982 1.585-.86 2.52.908.07 1.835-.46 2.401-1.162z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className={`${small ? 'text-[9px]' : 'text-[10px]'} opacity-75 font-normal`}>Download on the</span>
        <span className={`${small ? 'text-sm' : 'text-base'} font-semibold -mt-0.5`}>App Store</span>
      </span>
    </a>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-glow-sm transition-shadow group-hover:shadow-glow-primary">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">Glass</span>
                <span className="gradient-text-primary">io</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/5 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <AppStoreBadge />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 nav-glass border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 pb-1 px-2">
                <AppStoreBadge small />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
