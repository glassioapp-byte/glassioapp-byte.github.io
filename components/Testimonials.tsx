'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'Meridian Capital',
    avatar: 'SC',
    avatarGradient: 'from-indigo-400 to-violet-500',
    stars: 5,
    quote:
      'Glassio changed how our entire firm communicates. The interface is so clean and intuitive that onboarding new team members takes under an hour. It\'s like someone finally understood what business professionals actually need.',
    tag: 'Finance',
  },
  {
    name: 'Marcus Williams',
    role: 'Head of Product',
    company: 'Orbit Labs',
    avatar: 'MW',
    avatarGradient: 'from-cyan-400 to-blue-500',
    stars: 5,
    quote:
      'We tried every major communication tool on the market. Nothing came close to Glassio for our distributed team. The Smart Notification Engine alone saved me from notification anxiety — I actually feel calm at work now.',
    tag: 'Tech',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'Studio Paloma',
    avatar: 'ER',
    avatarGradient: 'from-violet-400 to-purple-500',
    stars: 5,
    quote:
      'As a design agency founder, aesthetics matter to me in everything — including my tools. Glassio is the first business app that actually reflects the quality standards we hold our own work to. Clients have even commented on it.',
    tag: 'Creative',
  },
  {
    name: 'David Park',
    role: 'CTO',
    company: 'Nexus Health',
    avatar: 'DP',
    avatarGradient: 'from-emerald-400 to-teal-500',
    stars: 5,
    quote:
      'Security and privacy were our biggest concerns. Glassio\'s privacy-first architecture gave our compliance team peace of mind immediately. The performance on iOS is exceptional — it\'s genuinely the fastest communication app I\'ve used.',
    tag: 'Healthcare',
  },
  {
    name: 'Amara Osei',
    role: 'Operations Director',
    company: 'Volta Logistics',
    avatar: 'AO',
    avatarGradient: 'from-amber-400 to-orange-500',
    stars: 5,
    quote:
      'Managing 200+ people across three continents was chaos before Glassio. Now everything flows. The Professional Presence Suite makes us look world-class to our enterprise partners, and our internal team response time is down 60%.',
    tag: 'Logistics',
  },
  {
    name: 'Tom Nakamura',
    role: 'Creative Director',
    company: 'Frontier Media',
    avatar: 'TN',
    avatarGradient: 'from-rose-400 to-pink-500',
    stars: 5,
    quote:
      'The fact that Glassio looks as good as it works is a testament to the team behind it. We\'re a creative company — our tools need to inspire, not frustrate. Glassio is the only business app I actually enjoy opening.',
    tag: 'Media',
  },
]

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: typeof testimonials[0]
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card-hover p-7 flex flex-col justify-between h-full"
    >
      {/* Stars */}
      <div>
        <div className="flex gap-0.5 mb-5">
          {[...Array(testimonial.stars)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-xs font-bold text-white">{testimonial.avatar}</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{testimonial.name}</p>
            <p className="text-xs text-slate-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(99,102,241,0.12)',
            border: '1px solid rgba(99,102,241,0.2)',
            color: '#a5b4fc',
          }}
        >
          {testimonial.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [activeIdx, setActiveIdx] = useState(0)

  const visibleCount = 3
  const maxIdx = testimonials.length - visibleCount

  const prev = () => setActiveIdx((i) => Math.max(0, i - 1))
  const next = () => setActiveIdx((i) => Math.min(maxIdx, i + 1))

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-[#080B14]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translate(20%, -20%)',
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
            <span className="glow-dot" style={{ background: '#f59e0b', boxShadow: '0 0 8px rgba(245,158,11,0.8)' }} />
            Loved by Professionals
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5">
            Trusted by teams that{' '}
            <span className="gradient-text">demand more</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don&apos;t take our word for it. Hear from the professionals who&apos;ve made
            Glassio their competitive edge.
          </p>
        </motion.div>

        {/* Cards grid — desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={0.1 + i * 0.08} />
          ))}
        </div>

        {/* Cards carousel — mobile */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `calc(-${activeIdx * 100}% - ${activeIdx * 16}px)` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="flex-shrink-0 w-full">
                  <TestimonialCard testimonial={t} delay={0} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              disabled={activeIdx === 0}
              className="p-2 rounded-xl glass-card disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width: i === activeIdx ? '20px' : '6px',
                    height: '6px',
                    background: i === activeIdx ? '#6366f1' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={activeIdx >= testimonials.length - 1}
              className="p-2 rounded-xl glass-card disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16"
        >
          {[
            { value: '4.9', label: 'App Store Rating' },
            { value: '10k+', label: 'Happy Teams' },
            { value: '98%', label: 'Retention Rate' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-black gradient-text-primary mb-1">{item.value}</p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
