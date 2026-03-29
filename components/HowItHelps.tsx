'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Minus, RefreshCw, Award, BarChart3 } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Saves Precious Time',
    description:
      'Eliminate the back-and-forth of fragmented communication. Glassio consolidates your entire professional workflow into a single, beautifully organized space — recovering hours every week.',
    metric: '8+ hrs/week saved',
    color: '#6366f1',
  },
  {
    icon: Minus,
    title: 'Reduces Friction',
    description:
      'No more switching between apps, hunting for context, or repeating yourself. Everything your team needs lives in one place, surfaced exactly when you need it.',
    metric: '40% less overhead',
    color: '#06b6d4',
  },
  {
    icon: RefreshCw,
    title: 'Improves Consistency',
    description:
      'Standardized workflows and smart templates ensure every client interaction and internal process follows your best practices — automatically and effortlessly.',
    metric: '2x consistency rate',
    color: '#8b5cf6',
  },
  {
    icon: Award,
    title: 'Strengthens Presence',
    description:
      'Make every touchpoint with clients and partners reflect the quality of your work. Glassio\'s Professional Presence Suite elevates how the world perceives your brand.',
    metric: '94% client satisfaction',
    color: '#f59e0b',
  },
  {
    icon: BarChart3,
    title: 'Scales With You',
    description:
      'Whether you\'re a solo operator or a growing enterprise, Glassio\'s architecture adapts without friction. Add team members, expand workflows, and grow without hitting walls.',
    metric: 'From 1 to 10,000+',
    color: '#10b981',
  },
]

function WorkflowDiagram() {
  const nodes = [
    { label: 'Receive', x: '10%', y: '50%', color: '#6366f1' },
    { label: 'Triage', x: '35%', y: '20%', color: '#8b5cf6' },
    { label: 'Respond', x: '60%', y: '50%', color: '#06b6d4' },
    { label: 'Close', x: '85%', y: '20%', color: '#10b981' },
  ]

  const paths = [
    { from: nodes[0], to: nodes[1] },
    { from: nodes[1], to: nodes[2] },
    { from: nodes[2], to: nodes[3] },
  ]

  return (
    <div className="relative w-full h-48 md:h-64">
      {/* SVG paths */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
        {paths.map((path, i) => {
          const x1 = parseFloat(path.from.x) * 4
          const y1 = parseFloat(path.from.y) * 1.8
          const x2 = parseFloat(path.to.x) * 4
          const y2 = parseFloat(path.to.y) * 1.8

          return (
            <motion.path
              key={i}
              d={`M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`}
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ delay: 0.3 + i * 0.4, duration: 0.8, ease: 'easeInOut' }}
            />
          )
        })}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
        >
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex flex-col items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${node.color}22, ${node.color}0a)`,
              border: `1px solid ${node.color}44`,
              boxShadow: `0 0 20px ${node.color}20`,
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full mb-1.5"
              style={{ background: node.color, boxShadow: `0 0 8px ${node.color}` }}
            />
            <span className="text-[10px] text-white/70 font-semibold">{node.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function HowItHelps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-28 overflow-hidden" style={{ background: '#0d1020' }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translate(20%, -20%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translate(-20%, 20%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="tag-pill mb-5 inline-flex">
            <span className="glow-dot" style={{ background: '#8b5cf6', boxShadow: '0 0 8px rgba(139,92,246,0.8)' }} />
            Growth Engine
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5">
            How Glassio{' '}
            <span className="gradient-text">grows your business</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Communication is the backbone of every successful business. Glassio
            strengthens that backbone.
          </p>
        </motion.div>

        {/* Workflow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass-card p-8 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5" aria-hidden />
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-6 font-medium">
            Glassio Communication Flow
          </p>
          <WorkflowDiagram />
        </motion.div>

        {/* Benefits list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${benefit.color}18`,
                      border: `1px solid ${benefit.color}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: benefit.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: `${benefit.color}15`,
                          color: benefit.color,
                          border: `1px solid ${benefit.color}25`,
                        }}
                      >
                        {benefit.metric}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
