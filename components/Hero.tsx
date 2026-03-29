'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Zap } from 'lucide-react'

function IPhoneMockup() {
  return (
    <div className="relative w-[280px] md:w-[320px] mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-[44px] bg-gradient-to-b from-indigo-500/20 to-violet-600/20 blur-2xl scale-95 -z-10" />

      {/* Phone body */}
      <div
        className="relative rounded-[44px] overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(30,30,60,0.9) 0%, rgba(15,15,30,0.95) 100%)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.15)',
          padding: '10px',
        }}
      >
        {/* Screen */}
        <div
          className="relative rounded-[36px] overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #0d1020 0%, #080B14 100%)',
            aspectRatio: '9/19.5',
          }}
        >
          {/* Notch / Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

          {/* Status bar */}
          <div className="flex justify-between items-center px-8 pt-4 pb-2 mt-6">
            <span className="text-[10px] text-white/60 font-medium">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="flex gap-0.5 items-end">
                {[2, 3, 4, 5].map((h, i) => (
                  <div key={i} className="w-0.5 bg-white/60 rounded-sm" style={{ height: `${h}px` }} />
                ))}
              </div>
              <svg className="w-3 h-2.5 text-white/60" viewBox="0 0 13 9" fill="currentColor">
                <rect x="0" y="0" width="11" height="9" rx="2" fillOpacity="0.3" />
                <rect x="1" y="1" width="7" height="7" rx="1" />
                <rect x="11.5" y="3" width="1.5" height="3" rx="0.75" fillOpacity="0.7" />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div className="px-5 py-3">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] text-white/40 font-medium">GOOD MORNING</p>
                <p className="text-sm text-white font-semibold">Sarah Johnson</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center">
                <span className="text-[10px] text-white font-bold">SJ</span>
              </div>
            </div>

            {/* Metric cards row */}
            <div className="flex gap-2 mb-4">
              {[
                { label: 'Messages', value: '24', color: '#6366f1' },
                { label: 'Tasks', value: '8', color: '#06b6d4' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex-1 rounded-2xl p-2.5"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}08)`,
                    border: `1px solid ${item.color}33`,
                  }}
                >
                  <p className="text-lg font-bold text-white">{item.value}</p>
                  <p className="text-[9px] text-white/50">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Message list */}
            {[
              { name: 'Alex Rivera', msg: 'Great work on the deck!', time: '2m', unread: true, color: '#6366f1' },
              { name: 'Tech Team', msg: 'Build deployed ✓', time: '15m', unread: false, color: '#06b6d4' },
              { name: 'Maria K.', msg: 'Meeting at 3PM confirmed', time: '1h', unread: false, color: '#8b5cf6' },
              { name: 'James L.', msg: 'Q3 report is ready', time: '2h', unread: false, color: '#f59e0b' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 py-2 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}88)` }}
                >
                  <span className="text-[8px] text-white font-bold">
                    {item.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-white font-semibold leading-tight">{item.name}</p>
                  <p className="text-[9px] text-white/40 truncate">{item.msg}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[8px] text-white/30">{item.time}</span>
                  {item.unread && (
                    <div className="w-3 h-3 rounded-full bg-indigo-500 flex items-center justify-center">
                      <span className="text-[6px] text-white font-bold">1</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Bottom navigation */}
            <div className="flex justify-around items-center pt-4 mt-2">
              {[
                { icon: '💬', active: true },
                { icon: '🔔', active: false },
                { icon: '📁', active: false },
                { icon: '⚙️', active: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-0.5"
                >
                  <span className="text-base">{item.icon}</span>
                  {item.active && (
                    <div className="w-1 h-1 rounded-full bg-indigo-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute right-[-3px] top-24 w-[3px] h-12 bg-white/10 rounded-l-sm" />
      <div className="absolute left-[-3px] top-20 w-[3px] h-8 bg-white/10 rounded-r-sm" />
      <div className="absolute left-[-3px] top-32 w-[3px] h-8 bg-white/10 rounded-r-sm" />
      <div className="absolute left-[-3px] top-44 w-[3px] h-8 bg-white/10 rounded-r-sm" />
    </div>
  )
}

function FloatingMetricCard({ value, label, delay, className }: { value: string; label: string; delay: number; className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className={`glass-card px-4 py-3 absolute ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-lg font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-orb-1 top-[-200px] left-[-200px]" />
        <div className="aurora-orb-2 top-[-100px] right-[-200px]" />
        <div className="aurora-orb-3 bottom-[-300px] left-1/2 -translate-x-1/2" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column — copy */}
          <div>
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="tag-pill">
                <span className="glow-dot" />
                Now Available on the App Store
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              The Premium{' '}
              <span className="relative">
                <span className="gradient-text">Business App</span>
              </span>{' '}
              Built for Modern{' '}
              <span className="text-slate-400">Communication</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Glassio transforms how your team communicates — crystal-clear workflows,
              intelligent notifications, and a professional presence that sets you apart
              from the competition.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              {/* App Store button */}
              <motion.a
                href="#download"
                onClick={(e) => e.preventDefault()}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="appstore-btn text-sm animate-glow-pulse"
              >
                <svg width="18" height="22" viewBox="0 0 16 20" fill="white">
                  <path d="M13.044 10.753c-.02-2.055 1.68-3.056 1.757-3.103-0.96-1.4-2.45-1.59-2.975-1.61-1.256-.127-2.468.746-3.107.746-.638 0-1.608-.732-2.65-.712-1.349.02-2.607.793-3.302 2.002-1.424 2.458-.362 6.085 1.007 8.076.685.978 1.487 2.074 2.544 2.035 1.027-.041 1.413-.653 2.653-.653 1.24 0 1.595.653 2.676.63 1.104-.018 1.797-.988 2.465-1.972.785-1.13 1.104-2.23 1.12-2.287-.025-.012-2.14-.816-2.162-3.152z" />
                  <path d="M11.03 4.298c.563-.684.944-1.63.84-2.578-.813.033-1.8.54-2.381 1.22-.522.61-.982 1.585-.86 2.52.908.07 1.835-.46 2.401-1.162z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] opacity-75 font-normal">Download on the</span>
                  <span className="text-base font-semibold -mt-0.5">App Store</span>
                </span>
              </motion.a>

              {/* Explore Features button */}
              <motion.button
                onClick={() => {
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-6 flex-wrap"
            >
              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-slate-400 font-medium">4.9 / 5</span>
              </div>

              <div className="w-px h-4 bg-white/10" />

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Shield className="w-4 h-4 text-indigo-400" />
                <span>Privacy First</span>
              </div>

              <div className="w-px h-4 bg-white/10" />

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>iOS 17+</span>
              </div>
            </motion.div>
          </div>

          {/* Right column — phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative animate-float"
            >
              <IPhoneMockup />

              {/* Floating metric cards */}
              <FloatingMetricCard
                value="3x"
                label="Faster Response"
                delay={0.6}
                className="-left-8 md:-left-16 top-16 z-20"
              />
              <FloatingMetricCard
                value="99.9%"
                label="Uptime"
                delay={0.75}
                className="-right-4 md:-right-12 top-32 z-20"
              />
              <FloatingMetricCard
                value="10k+"
                label="Businesses"
                delay={0.9}
                className="-left-6 md:-left-14 bottom-24 z-20"
              />

              {/* Decorative orbs */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-cyan-500/10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080B14] to-transparent pointer-events-none" />
    </section>
  )
}
