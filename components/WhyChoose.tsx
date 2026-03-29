'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X, Zap } from 'lucide-react'

const comparisons = [
  {
    feature: 'Crystal-clear glass UI',
    glassio: true,
    others: false,
  },
  {
    feature: 'AI-powered workflow intelligence',
    glassio: true,
    others: false,
  },
  {
    feature: 'Smart notification filtering',
    glassio: true,
    others: false,
  },
  {
    feature: 'Professional Presence Suite',
    glassio: true,
    others: false,
  },
  {
    feature: 'Native iOS performance',
    glassio: true,
    others: false,
  },
  {
    feature: 'Privacy-first architecture',
    glassio: true,
    others: false,
  },
  {
    feature: 'Real-time message delivery',
    glassio: true,
    others: true,
  },
  {
    feature: 'Team channels & threads',
    glassio: true,
    others: true,
  },
]

const advantages = [
  {
    title: 'Built for iOS. Not Ported.',
    description:
      'Glassio is engineered specifically for Apple platforms. Every interaction uses native APIs, haptic feedback, and Cupertino design patterns — not a React Native afterthought.',
    icon: '🍎',
  },
  {
    title: 'Design is the Product.',
    description:
      'While competitors bury features behind cluttered dashboards, Glassio believes premium software should feel like an extension of your thoughts — effortless and beautiful.',
    icon: '✦',
  },
  {
    title: 'Privacy is Non-Negotiable.',
    description:
      'Zero-knowledge architecture means your conversations are yours alone. We don\'t sell your data, train AI on your content, or compromise your business intelligence.',
    icon: '🔒',
  },
]

export default function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why-glassio" ref={ref} className="relative py-28 overflow-hidden bg-[#080B14]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translateX(-30%) translateY(-50%)',
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
            Why Glassio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5">
            Not just different.{' '}
            <span className="gradient-text">Definitively better.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The difference between ordinary tools and Glassio isn&apos;t one feature —
            it&apos;s a philosophy of excellence at every level.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="glass-card overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 px-6 py-4 border-b border-white/8">
                <div className="text-sm text-slate-500 font-medium">Feature</div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white">
                    <span className="w-5 h-5 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white fill-white" />
                    </span>
                    Glassio
                  </span>
                </div>
                <div className="text-center text-sm text-slate-500 font-medium">Others</div>
              </div>

              {/* Table rows */}
              {comparisons.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                  className="grid grid-cols-3 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors"
                >
                  <div className="text-sm text-slate-300 self-center">{row.feature}</div>
                  <div className="flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {row.others ? (
                      <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                        <X className="w-3 h-3 text-red-500/70" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                className="glass-card-hover p-7 group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 text-3xl w-12 h-12 flex items-center justify-center">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Closing pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl p-6 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 100%)',
                border: '1px solid rgba(99,102,241,0.3)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-violet-500/10" />
              <p className="relative z-10 text-white font-semibold text-lg mb-1">
                The premium choice for professionals.
              </p>
              <p className="relative z-10 text-slate-400 text-sm">
                Join 10,000+ businesses that chose excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
