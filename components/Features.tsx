'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  MessageSquare,
  Sparkles,
  Zap,
  Brain,
  Bell,
  Briefcase,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Intuitive Business Messaging',
    description:
      'Send messages, files, and context-rich updates that your team actually understands. Threading, reactions, and smart search make every conversation count.',
    gradient: 'from-indigo-500/15 to-violet-600/5',
    iconBg: 'rgba(99,102,241,0.15)',
    iconBorder: 'rgba(99,102,241,0.3)',
    iconColor: 'text-indigo-400',
    glow: 'rgba(99,102,241,0.2)',
  },
  {
    icon: Sparkles,
    title: 'Crystal-Clear Interface',
    description:
      'Every pixel is intentional. Glassio\'s glass-morphism design language eliminates visual noise so you can focus on what matters — your business.',
    gradient: 'from-cyan-500/15 to-blue-600/5',
    iconBg: 'rgba(6,182,212,0.15)',
    iconBorder: 'rgba(6,182,212,0.3)',
    iconColor: 'text-cyan-400',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Communication',
    description:
      'Messages delivered in milliseconds. No lag, no loading spinners. Glassio\'s architecture is engineered for real-time performance that feels instant.',
    gradient: 'from-amber-500/15 to-orange-600/5',
    iconBg: 'rgba(245,158,11,0.15)',
    iconBorder: 'rgba(245,158,11,0.3)',
    iconColor: 'text-amber-400',
    glow: 'rgba(245,158,11,0.2)',
  },
  {
    icon: Brain,
    title: 'Team Workflow Intelligence',
    description:
      'AI-powered insights surface patterns in your team\'s communication, flag blockers before they escalate, and suggest optimal response windows.',
    gradient: 'from-violet-500/15 to-purple-600/5',
    iconBg: 'rgba(139,92,246,0.15)',
    iconBorder: 'rgba(139,92,246,0.3)',
    iconColor: 'text-violet-400',
    glow: 'rgba(139,92,246,0.2)',
  },
  {
    icon: Bell,
    title: 'Smart Notification Engine',
    description:
      'Finally — notifications that respect your focus. Glassio learns your patterns and delivers alerts only when they\'re genuinely urgent and relevant.',
    gradient: 'from-rose-500/15 to-pink-600/5',
    iconBg: 'rgba(244,63,94,0.15)',
    iconBorder: 'rgba(244,63,94,0.3)',
    iconColor: 'text-rose-400',
    glow: 'rgba(244,63,94,0.2)',
  },
  {
    icon: Briefcase,
    title: 'Professional Presence Suite',
    description:
      'Custom branded communication, professional status indicators, and polished delivery receipts that show clients and partners you mean business.',
    gradient: 'from-emerald-500/15 to-teal-600/5',
    iconBg: 'rgba(16,185,129,0.15)',
    iconBorder: 'rgba(16,185,129,0.3)',
    iconColor: 'text-emerald-400',
    glow: 'rgba(16,185,129,0.2)',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="features" ref={ref} className="relative py-28 overflow-hidden bg-[#080B14]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="tag-pill mb-5 inline-flex">
            <span className="glow-dot" />
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5">
            Everything you need.{' '}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Six carefully crafted capabilities that work in harmony to elevate every aspect
            of your professional communication.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-card-hover p-7 overflow-hidden"
                style={{ borderColor: feature.iconBorder }}
              >
                {/* Card gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-70`}
                  aria-hidden
                />

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${feature.glow}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background: feature.iconBg,
                      border: `1px solid ${feature.iconBorder}`,
                    }}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner shine on hover */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${feature.iconBorder}, transparent 70%)`,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
