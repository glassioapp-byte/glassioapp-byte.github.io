'use client'

import { motion } from 'framer-motion'
import { Zap, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Why Glassio', href: '#why-glassio' },
    { label: 'App Preview', href: '#app-preview' },
  ],
  Support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: 'mailto:hello@glassio.app' },
    { label: 'Help Center', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/glassioapp' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/glassio' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/glassioapp' },
]

function AppStoreBadge() {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="inline-flex items-center gap-3 bg-black border border-white/15 hover:border-white/30 px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group"
    >
      <svg width="18" height="22" viewBox="0 0 16 20" fill="white" className="opacity-90 group-hover:opacity-100 transition-opacity">
        <path d="M13.044 10.753c-.02-2.055 1.68-3.056 1.757-3.103-0.96-1.4-2.45-1.59-2.975-1.61-1.256-.127-2.468.746-3.107.746-.638 0-1.608-.732-2.65-.712-1.349.02-2.607.793-3.302 2.002-1.424 2.458-.362 6.085 1.007 8.076.685.978 1.487 2.074 2.544 2.035 1.027-.041 1.413-.653 2.653-.653 1.24 0 1.595.653 2.676.63 1.104-.018 1.797-.988 2.465-1.972.785-1.13 1.104-2.23 1.12-2.287-.025-.012-2.14-.816-2.162-3.152z" />
        <path d="M11.03 4.298c.563-.684.944-1.63.84-2.578-.813.033-1.8.54-2.381 1.22-.522.61-.982 1.585-.86 2.52.908.07 1.835-.46 2.401-1.162z" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[9px] text-white/60 leading-tight">Download on the</span>
        <span className="text-sm font-semibold text-white leading-tight">App Store</span>
      </div>
    </a>
  )
}

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080B14 0%, #060810 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-8"
          style={{
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-white/6">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">Glass</span>
                <span className="gradient-text-primary">io</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              The premium business communication app built for teams that
              refuse to compromise on excellence.
            </p>

            {/* App Store badge */}
            <AppStoreBadge />

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="col-span-1">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="group flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                      {link.href.startsWith('http') && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-slate-600 order-2 md:order-1">
            &copy; {new Date().getFullYear()} Glassio. All rights reserved.
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <span className="text-xs text-slate-600 flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
                style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }}
              />
              All systems operational
            </span>
            <span className="text-xs text-slate-600">Made with ✦ for professionals</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
