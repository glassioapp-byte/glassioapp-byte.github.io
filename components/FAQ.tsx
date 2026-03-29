'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Is Glassio free to download?',
    answer:
      'Yes — Glassio is free to download on the App Store. You can get started immediately with full access to core messaging features. Premium plans unlock advanced workflow intelligence, Professional Presence Suite features, and priority support for growing teams.',
  },
  {
    question: 'What iOS version does Glassio require?',
    answer:
      'Glassio requires iOS 17 or later to deliver the full premium experience, including Dynamic Island integration, interactive widgets, and all haptic feedback features. We regularly update to support the latest iOS capabilities.',
  },
  {
    question: 'How does Glassio protect my privacy?',
    answer:
      'Privacy is foundational to everything we build. Glassio uses end-to-end encryption for all messages, stores zero metadata about your communication patterns on our servers, and never sells or shares your data with third parties. Our privacy-first architecture means even Glassio cannot read your conversations.',
  },
  {
    question: 'Can I use Glassio for my entire team?',
    answer:
      'Absolutely. Glassio is designed to scale from solo professionals to organizations with thousands of members. Workspace management, role-based permissions, and admin controls make it straightforward to deploy across your entire organization without technical overhead.',
  },
  {
    question: 'Does Glassio work offline?',
    answer:
      'Glassio caches your recent conversations and critical content locally so you can read and draft messages even without an internet connection. Queued messages send automatically when connectivity is restored, ensuring you never lose a thought in transit.',
  },
  {
    question: 'How is Glassio different from other messaging apps?',
    answer:
      'Glassio was built specifically for professional use — not adapted from a consumer app. The difference shows in every detail: a native iOS architecture that feels seamless, AI-powered workflow intelligence that learns your patterns, and a Professional Presence Suite that ensures every interaction reflects your brand standards. Generic tools were never designed for business excellence.',
  },
  {
    question: 'Can I migrate from another platform?',
    answer:
      'Yes. Glassio supports import from major communication platforms so you can bring over your history and contacts. Our onboarding team provides white-glove migration support for enterprise customers, ensuring zero disruption to your business operations during the transition.',
  },
  {
    question: 'Is there a macOS or web version?',
    answer:
      'Glassio is currently optimized for iPhone and iPad. A native macOS companion app is in active development and is expected to launch soon. A web interface for cross-platform access is also on our roadmap for later this year.',
  },
]

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="border-b last:border-0"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span
          className={`text-base font-semibold transition-colors duration-200 ${
            isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
          }`}
        >
          {faq.question}
        </span>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{
            background: isOpen
              ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
              : 'rgba(255,255,255,0.06)',
            border: isOpen ? 'none' : '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-white" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-slate-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-slate-400 leading-relaxed pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" ref={ref} className="relative py-28 overflow-hidden bg-[#0a0d1a]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-10 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translate(30%, -50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-5 inline-flex">
            <span className="glow-dot" />
            Questions Answered
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight mb-5">
            Everything you{' '}
            <span className="gradient-text">want to know</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Still curious? We&apos;ve answered the questions we hear most from professionals
            like you.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card px-6 md:px-10 py-2"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-10 text-sm text-slate-400"
        >
          Still have questions?{' '}
          <a
            href="mailto:hello@glassio.app"
            className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4"
          >
            Contact our team
          </a>{' '}
          — we respond within 24 hours.
        </motion.p>
      </div>
    </section>
  )
}
