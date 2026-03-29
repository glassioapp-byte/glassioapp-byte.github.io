'use client'

import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Shield, Building2 } from 'lucide-react'

function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, target, duration])

  return (
    <span ref={ref} className="counter-value tabular-nums">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  {
    icon: Zap,
    prefix: '',
    value: 3,
    suffix: 'x',
    label: 'Faster Response',
    description: 'Teams using Glassio respond to critical communications three times faster than with legacy tools.',
    gradient: 'from-indigo-600/25 to-violet-600/10',
    iconGradient: 'from-indigo-500 to-violet-500',
    border: 'rgba(99,102,241,0.25)',
    glow: 'rgba(99,102,241,0.15)',
  },
  {
    icon: TrendingUp,
    prefix: '',
    value: 40,
    suffix: '%',
    label: 'Less Friction',
    description: 'Reduce the daily overhead of communication management by nearly half — time better spent building.',
    gradient: 'from-cyan-600/25 to-blue-600/10',
    iconGradient: 'from-cyan-500 to-blue-500',
    border: 'rgba(6,182,212,0.25)',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: Shield,
    prefix: '',
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
    description: 'Mission-critical reliability with enterprise-grade infrastructure backing every conversation.',
    gradient: 'from-emerald-600/25 to-teal-600/10',
    iconGradient: 'from-emerald-500 to-teal-500',
    border: 'rgba(16,185,129,0.25)',
    glow: 'rgba(16,185,129,0.15)',
  },
  {
    icon: Building2,
    prefix: '',
    value: 10000,
    suffix: '+',
    label: 'Businesses',
    description: 'From solo founders to growing enterprises, Glassio powers communication at every scale.',
    gradient: 'from-violet-600/25 to-purple-600/10',
    iconGradient: 'from-violet-500 to-purple-500',
    border: 'rgba(139,92,246,0.25)',
    glow: 'rgba(139,92,246,0.15)',
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Zap({ className }: any) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

export default function BusinessBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="benefits" ref={ref} className="relative py-28 overflow-hidden bg-[#0a0d1a]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="tag-pill mb-5 inline-flex">
            <span className="glow-dot" />
            Real Business Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5">
            Numbers that{' '}
            <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Glassio users see measurable improvements from their very first week.
            Here&apos;s what the data shows.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card-hover p-7 relative overflow-hidden text-center"
                style={{ borderColor: stat.border }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-80`}
                  aria-hidden
                />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${stat.glow}, transparent 70%)` }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.iconGradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                    style={{ boxShadow: `0 0 20px ${stat.glow}` }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Animated number */}
                  <div className="text-5xl font-black text-white mb-2 tracking-tight">
                    {stat.value === 99.9 ? (
                      <span className="counter-value">99.9{stat.suffix}</span>
                    ) : (
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    )}
                  </div>

                  <div className="text-sm font-semibold text-white/80 mb-3">{stat.label}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Big callout bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative glass-card p-10 md:p-14 text-center overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 50%, rgba(6,182,212,0.08) 100%)',
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-3xl mx-auto">
              &ldquo;Switching to Glassio was the single most impactful productivity
              decision our team made this year.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center">
                <span className="text-sm text-white font-bold">JM</span>
              </div>
              <div className="text-left">
                <p className="text-sm text-white font-semibold">James Morrison</p>
                <p className="text-xs text-slate-400">CEO, Apex Ventures</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
