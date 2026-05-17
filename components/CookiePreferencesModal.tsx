'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  personalization: boolean
}

interface CategoryRowProps {
  name: string
  description: string
  enabled: boolean
  disabled?: boolean
  onToggle?: () => void
}

function CategoryRow({ name, description, enabled, disabled, onToggle }: CategoryRowProps) {
  return (
    <div className="py-4 border-b border-white/[0.06] last:border-b-0 last:mb-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[0.87rem] font-bold text-slate-200 mb-1">{name}</div>
          <div className="text-[0.75rem] text-white/[0.38] leading-relaxed">{description}</div>
        </div>
        <button
          role="switch"
          aria-checked={enabled}
          aria-label={`${name} toggle`}
          onClick={disabled ? undefined : onToggle}
          style={{ flexShrink: 0, marginTop: '2px' }}
          className={[
            'relative w-11 h-6 rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
            enabled
              ? 'border-transparent'
              : 'bg-white/[0.12] border-white/[0.12]',
            disabled ? 'cursor-default opacity-50' : 'cursor-pointer',
          ].join(' ')}
          style={{
            background: enabled
              ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
              : undefined,
            flexShrink: 0,
            marginTop: '2px',
          }}
        >
          <span
            className="absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white shadow transition-transform duration-200"
            style={{ transform: enabled ? 'translateX(20px)' : 'translateX(0)' }}
          />
        </button>
      </div>
    </div>
  )
}

interface CookiePreferencesModalProps {
  open: boolean
  onClose: (prefs: CookiePreferences | null) => void
  initialPreferences: CookiePreferences
}

export default function CookiePreferencesModal({
  open,
  onClose,
  initialPreferences,
}: CookiePreferencesModalProps) {
  const [prefs, setPrefs] = useState<CookiePreferences>(initialPreferences)
  const modalRef = useRef<HTMLDivElement>(null)

  // Sync initialPreferences when opened
  useEffect(() => {
    if (open) {
      setPrefs(initialPreferences)
    }
  }, [open, initialPreferences])

  // Focus trap
  useEffect(() => {
    if (!open) return
    const el = modalRef.current
    if (!el) return
    const focusables = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    first?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose(null)
        return
      }
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  function toggle(key: keyof Omit<CookiePreferences, 'essential'>) {
    setPrefs((p) => ({ ...p, [key]: !p[key] }))
  }

  function acceptAll() {
    const all: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true,
    }
    onClose(all)
  }

  function savePreferences() {
    onClose(prefs)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          style={{
            background: 'rgba(0,0,0,0.70)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose(null)
          }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="ck-modal-title"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.94, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#0e1420',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '20px',
              padding: '32px',
              maxWidth: '480px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 32px 80px rgba(0,0,0,0.70)',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => onClose(null)}
              aria-label="Close"
              className="absolute top-3.5 right-3.5 flex items-center justify-center w-[30px] h-[30px] rounded-lg text-white/50 hover:text-white transition-colors"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.09)',
                fontSize: '1rem',
              }}
            >
              ✕
            </button>

            <h2
              id="ck-modal-title"
              className="text-[1.1rem] font-bold text-slate-100 mb-2"
            >
              Cookie Preferences
            </h2>
            <p
              className="text-[0.8rem] text-white/45 leading-relaxed mb-6 pb-5"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              Manage which cookies you allow. Essential cookies are always active as
              they are required for the site to function properly.
            </p>

            <CategoryRow
              name="Essential Cookies"
              description="Required for the website to function. Cannot be disabled."
              enabled={true}
              disabled={true}
            />
            <CategoryRow
              name="Analytics Cookies"
              description="Help us understand how visitors interact with our website so we can improve it."
              enabled={prefs.analytics}
              onToggle={() => toggle('analytics')}
            />
            <CategoryRow
              name="Marketing Cookies"
              description="Used to deliver relevant advertisements and track campaign effectiveness."
              enabled={prefs.marketing}
              onToggle={() => toggle('marketing')}
            />
            <CategoryRow
              name="Personalization Cookies"
              description="Allow the site to remember your preferences and deliver a personalized experience."
              enabled={prefs.personalization}
              onToggle={() => toggle('personalization')}
            />

            {/* Actions */}
            <div
              className="flex gap-2.5 mt-2 pt-5"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <button
                onClick={savePreferences}
                className="flex-1 py-2.5 px-4 rounded-[9px] text-[0.8rem] font-semibold text-slate-300 hover:opacity-80 transition-opacity"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 py-2.5 px-4 rounded-[9px] text-[0.8rem] font-semibold text-white hover:opacity-80 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
                }}
              >
                Accept All
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
