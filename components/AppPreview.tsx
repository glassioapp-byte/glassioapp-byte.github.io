'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function AppScreen({
  title,
  subtitle,
  colors,
  delay,
  items,
}: {
  title: string
  subtitle: string
  colors: { primary: string; secondary: string; bg: string }
  delay: number
  items: { label: string; width: string; height?: string; color?: string }[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex-shrink-0 w-56 md:w-64"
      style={{ perspective: '800px' }}
    >
      {/* Screen glow */}
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-25"
        style={{ background: `radial-gradient(circle, ${colors.primary}, transparent 70%)` }}
      />

      {/* Phone frame */}
      <div
        className="relative rounded-[32px] overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, rgba(20,20,40,0.95), rgba(10,10,25,0.98))',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: `0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), 0 0 40px ${colors.primary}20`,
          padding: '8px',
        }}
      >
        {/* Screen */}
        <div
          className="rounded-[26px] overflow-hidden"
          style={{
            background: colors.bg,
            minHeight: '420px',
          }}
        >
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 pt-4 pb-2">
            <span className="text-[9px] text-white/50">9:41</span>
            <div className="w-16 h-4 bg-black rounded-full" />
            <div className="flex gap-1">
              <div className="w-3 h-2 bg-white/30 rounded-sm" />
            </div>
          </div>

          {/* Header */}
          <div
            className="px-5 py-4 mb-2"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}10)`,
              borderBottom: `1px solid ${colors.primary}20`,
            }}
          >
            <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">{subtitle}</p>
            <p className="text-sm font-bold text-white">{title}</p>
          </div>

          {/* Content blocks */}
          <div className="px-4 py-3 space-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div
                  className="flex-shrink-0 rounded-lg"
                  style={{
                    width: '28px',
                    height: item.height || '28px',
                    background: item.color
                      ? `linear-gradient(135deg, ${item.color}60, ${item.color}30)`
                      : `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}20)`,
                    border: `1px solid ${item.color || colors.primary}30`,
                  }}
                />
                <div className="flex-1">
                  <div
                    className="h-2 rounded-full mb-1.5"
                    style={{
                      width: item.width,
                      background: 'rgba(255,255,255,0.15)',
                      borderRadius: '3px',
                    }}
                  />
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${parseInt(item.width) * 0.6}%`,
                      background: 'rgba(255,255,255,0.07)',
                      borderRadius: '3px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-4 left-4 right-4">
            <div
              className="h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}20)`,
                border: `1px solid ${colors.primary}25`,
              }}
            >
              <div className="flex gap-2">
                {[colors.primary, colors.secondary, '#ffffff'].map((c, i) => (
                  <div
                    key={i}
                    className="w-1 h-4 rounded-full"
                    style={{ background: `${c}60` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const screens = [
  {
    title: 'Conversations',
    subtitle: 'Messages',
    colors: { primary: '#6366f1', secondary: '#8b5cf6', bg: 'linear-gradient(160deg, #0d1028 0%, #080B14 100%)' },
    items: [
      { label: 'Alex R.', width: '85%', color: '#6366f1' },
      { label: 'Tech Team', width: '70%', color: '#8b5cf6' },
      { label: 'Maria K.', width: '60%', color: '#06b6d4' },
      { label: 'James L.', width: '75%', color: '#f59e0b' },
      { label: 'Anna S.', width: '50%', color: '#10b981' },
    ],
  },
  {
    title: 'Team Channels',
    subtitle: 'Workspace',
    colors: { primary: '#06b6d4', secondary: '#3b82f6', bg: 'linear-gradient(160deg, #091520 0%, #080B14 100%)' },
    items: [
      { label: '# general', width: '80%', color: '#06b6d4' },
      { label: '# design', width: '65%', color: '#8b5cf6' },
      { label: '# dev', width: '90%', color: '#3b82f6' },
      { label: '# sales', width: '55%', color: '#10b981' },
      { label: '# support', width: '72%', color: '#f59e0b' },
    ],
  },
  {
    title: 'Smart Inbox',
    subtitle: 'Priority',
    colors: { primary: '#8b5cf6', secondary: '#a855f7', bg: 'linear-gradient(160deg, #0e0d20 0%, #080B14 100%)' },
    items: [
      { label: 'Urgent', width: '90%', color: '#ef4444', height: '32px' },
      { label: 'Today', width: '75%', color: '#f59e0b', height: '32px' },
      { label: 'Later', width: '60%', color: '#6366f1', height: '32px' },
      { label: 'Archived', width: '45%', color: '#475569', height: '28px' },
    ],
  },
]

export default function AppPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-[#0a0d1a]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-10"
          style={{
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.4) 0%, rgba(6,182,212,0.3) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-5 inline-flex">
            <span className="glow-dot" style={{ background: '#06b6d4', boxShadow: '0 0 8px rgba(6,182,212,0.8)' }} />
            App Preview
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5">
            Beautiful by{' '}
            <span className="gradient-text-accent">every measure</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every screen in Glassio is crafted to the pixel. Here&apos;s a glimpse of
            what awaits inside.
          </p>
        </motion.div>

        {/* Screens showcase */}
        <div className="flex justify-center gap-6 md:gap-8 flex-wrap md:flex-nowrap overflow-visible pb-8">
          {screens.map((screen, i) => (
            <AppScreen
              key={screen.title}
              title={screen.title}
              subtitle={screen.subtitle}
              colors={screen.colors}
              delay={0.2 + i * 0.15}
              items={screen.items}
            />
          ))}
        </div>

        {/* Feature callout chips below screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {[
            '✦ Dark mode optimized',
            '✦ Dynamic Island support',
            '✦ Haptic feedback',
            '✦ Widget integration',
            '✦ Spotlight search',
            '✦ Focus mode filters',
          ].map((chip) => (
            <span
              key={chip}
              className="text-xs font-medium text-slate-400 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
