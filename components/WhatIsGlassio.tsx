'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, AlertTriangle, TrendingUp } from 'lucide-react'

const problems = [
  {
    icon: MessageSquare,
    title: 'Communication Chaos',
    description:
      'Teams scattered across email threads, DMs, and apps lose crucial context. Glassio brings everything into one crystal-clear workspace.',
    gradient: 'from-indigo-500/20 to-violet-600/10',
    iconColor: 'text-indigo-400',
    borderColor: 'rgba(99,102,241,0.2)',
  },
  {
    icon: AlertTriangle,
    title: 'Notification Overload',
    description:
      'Constant pings from irrelevant channels destroy deep work. Glassio\'s intelligent engine surfaces only what truly matters, when it matters.',
    gradient: 'from-cyan-500/20 to-blue-600/10',
    iconColor: 'text-cyan-400',
    borderColor: 'rgba(6,182,212,0.2)',
  },
  {
    icon: TrendingUp,
    title: 'Unprofessional Presence',
    description:
      'Generic tools make every business look the same. Glassio\'s Professional Presence Suite ensures your communication reflects your brand excellence.',
    gradient: 'from-violet-500/20 to-purple-600/10',
    iconColor: 'text-violet-400',
    borderColor: 'rgba(139,92,246,0.2)',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function WhatIsGlassio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080B14 0%, #0a0d1a 100%)' }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translate(-30%, -50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tag-pill mb-6 inline-flex">
              <span className="glow-dot" />
              What is Glassio?
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-6">
              Business communication,{' '}
              <span className="gradient-text">finally refined</span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Glassio is the professional communication platform built from the ground
              up for ambitious teams. Where other tools pile on features until they
              collapse under their own weight, Glassio distills everything down to
              what actually moves your business forward.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              Every interaction — from the first tap to your deepest workflow — feels
              effortless and intentional. This is what premium software feels like.
            </p>

            {/* Checkmarks */}
            <div className="flex flex-col gap-3">
              {[
                'Designed for professionals who demand excellence',
                'Privacy-first architecture — your data stays yours',
                'Built for iOS with native performance and elegance',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mt-0.5">
                    <svg className="w-2.5 h-2.5 text-indigo-400" fill="none" viewBox="0 0 10 8">
                      <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — problem cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-5"
          >
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
                <motion.div
                  key={problem.title}
                  variants={itemVariants}
                  className="glass-card-hover p-6 relative overflow-hidden"
                  style={{ borderColor: problem.borderColor }}
                >
                  {/* Card gradient bg */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-60`}
                    aria-hidden
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: `1px solid ${problem.borderColor}`,
                      }}
                    >
                      <Icon className={`w-5 h-5 ${problem.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1.5">{problem.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
