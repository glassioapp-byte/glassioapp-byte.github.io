'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, Users, MessageSquare } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download & Setup',
    description:
      'Install Glassio from the App Store in seconds. Create your professional workspace and customize your identity in under two minutes — no tech degree required.',
    detail: 'Free to download. No credit card needed.',
    gradient: 'from-indigo-600 to-indigo-500',
    glow: 'rgba(99,102,241,0.4)',
    dotColor: '#6366f1',
  },
  {
    number: '02',
    icon: Users,
    title: 'Connect Your Team',
    description:
      'Invite colleagues, clients, or collaborators with a single link. Smart onboarding gets everyone up and running without friction or confusion.',
    detail: 'Unlimited team members. Scales with you.',
    gradient: 'from-cyan-600 to-cyan-500',
    glow: 'rgba(6,182,212,0.4)',
    dotColor: '#06b6d4',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Communicate & Grow',
    description:
      'Experience the clarity of purpose-built professional communication. Watch response times drop, deals close faster, and your team operate at a new level of excellence.',
    detail: 'Results from day one.',
    gradient: 'from-violet-600 to-violet-500',
    glow: 'rgba(139,92,246,0.4)',
    dotColor: '#8b5cf6',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-[#0a0d1a]">
      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translate(30%, 30%)',
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
            <span className="glow-dot" style={{ background: '#06b6d4', boxShadow: '0 0 8px rgba(6,182,212,0.8)' }} />
            Simple by Design
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5">
            Up and running in{' '}
            <span className="gradient-text-accent">three steps</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Getting started with Glassio takes minutes. The results last a lifetime.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-16 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(99,102,241,0.6), rgba(6,182,212,0.6), rgba(139,92,246,0.6))',
            }}
          >
            {/* Animated pulse along line */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 h-full"
              style={{
                background: 'linear-gradient(90deg, rgba(99,102,241,0.8), rgba(6,182,212,0.8), rgba(139,92,246,0.8))',
                boxShadow: '0 0 8px rgba(99,102,241,0.6)',
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Step number + icon */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div
                        className="absolute -inset-3 rounded-full opacity-30 blur-xl"
                        style={{ background: step.glow }}
                      />
                      <div
                        className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                        style={{ boxShadow: `0 0 30px ${step.glow}, 0 8px 32px rgba(0,0,0,0.4)` }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Step dot on line */}
                      <div
                        className="absolute -top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 hidden lg:block"
                        style={{
                          background: step.dotColor,
                          borderColor: 'rgba(255,255,255,0.2)',
                          boxShadow: `0 0 10px ${step.glow}`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="glass-card p-7 text-center">
                    <div className="text-5xl font-black text-white/5 absolute top-4 right-5 leading-none select-none">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">{step.description}</p>
                    <div
                      className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: `${step.glow.replace('0.4', '0.1')}`,
                        color: step.dotColor,
                        border: `1px solid ${step.glow.replace('0.4', '0.2')}`,
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.dotColor }} />
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
