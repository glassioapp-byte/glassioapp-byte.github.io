'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Star, Zap, Lock } from 'lucide-react'

const trustBadges = [
  { icon: Star, label: 'Free to Download', color: '#f59e0b' },
  { icon: Zap, label: 'iOS 17+', color: '#6366f1' },
  { icon: Shield, label: 'Privacy First', color: '#10b981' },
  { icon: Lock, label: 'End-to-End Encrypted', color: '#06b6d4' },
]

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="download" ref={ref} className="relative py-32 overflow-hidden bg-[#080B14]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center mega orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Left accent */}
        <div
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.6), transparent)',
            filter: 'blur(60px)',
          }}
        />
        {/* Right accent */}
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.6), transparent)',
            filter: 'blur(60px)',
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="tag-pill inline-flex">
            <span className="glow-dot" />
            Available Now
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          Ready to{' '}
          <span className="gradient-text">transform</span>
          <br />
          your business?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Join 10,000+ businesses that have already discovered what premium
          professional communication feels like. Your first step starts with
          a single download.
        </motion.p>

        {/* CTA Button — large App Store */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 150 }}
          className="flex justify-center mb-14"
        >
          <motion.a
            href="#"
            onClick={(e) => e.preventDefault()}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl text-white relative overflow-hidden"
            style={{
              background: '#000000',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
            }}
          >
            {/* Shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-effect" />

            <svg width="24" height="30" viewBox="0 0 16 20" fill="white">
              <path d="M13.044 10.753c-.02-2.055 1.68-3.056 1.757-3.103-0.96-1.4-2.45-1.59-2.975-1.61-1.256-.127-2.468.746-3.107.746-.638 0-1.608-.732-2.65-.712-1.349.02-2.607.793-3.302 2.002-1.424 2.458-.362 6.085 1.007 8.076.685.978 1.487 2.074 2.544 2.035 1.027-.041 1.413-.653 2.653-.653 1.24 0 1.595.653 2.676.63 1.104-.018 1.797-.988 2.465-1.972.785-1.13 1.104-2.23 1.12-2.287-.025-.012-2.14-.816-2.162-3.152z" />
              <path d="M11.03 4.298c.563-.684.944-1.63.84-2.578-.813.033-1.8.54-2.381 1.22-.522.61-.982 1.585-.86 2.52.908.07 1.835-.46 2.401-1.162z" />
            </svg>

            <div className="flex flex-col text-left relative z-10">
              <span className="text-sm text-white/70 font-normal leading-tight">Download on the</span>
              <span className="text-2xl font-bold tracking-tight leading-tight">App Store</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Icon className="w-4 h-4" style={{ color: badge.color }} />
                <span className="text-sm font-medium text-slate-300">{badge.label}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10 text-xs text-slate-600"
        >
          Available on iPhone and iPad. Requires iOS 17.0 or later. Free to download.
          In-app purchases available.
        </motion.p>
      </div>
    </section>
  )
}
