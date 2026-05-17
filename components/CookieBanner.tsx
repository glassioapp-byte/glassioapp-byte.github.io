'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CookiePreferencesModal, {
  CookiePreferences,
} from './CookiePreferencesModal'

const CONSENT_KEY = 'glassio_ck_consent'

interface CookieConfig {
  bannerEnabled: boolean
  bannerText: string
  privacyPolicyUrl: string
}

const DEFAULT_CONFIG: CookieConfig = {
  bannerEnabled: true,
  bannerText:
    'We use cookies to enhance your experience. Some cookies are essential for the site to work properly. Others help us understand how visitors use our site and may be used for analytics, marketing, or personalization.',
  privacyPolicyUrl: '/privacy.html',
}

const DEFAULT_PREFS: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  personalization: false,
}

function loadConsent(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveConsent(prefs: CookiePreferences) {
  const obj = { ...prefs, essential: true, ts: new Date().toISOString() }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(obj))
  } catch {
    // ignore
  }
  document.dispatchEvent(new CustomEvent('glassio:consent', { detail: obj }))
}

export default function CookieBanner() {
  const [config, setConfig] = useState<CookieConfig | null>(null)
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentPrefs, setCurrentPrefs] = useState<CookiePreferences>(DEFAULT_PREFS)

  useEffect(() => {
    // Load config from API, fall back to default
    fetch('/api/cookie-config')
      .then((r) => r.json())
      .then((data: CookieConfig) => setConfig(data))
      .catch(() => setConfig(DEFAULT_CONFIG))
  }, [])

  useEffect(() => {
    if (!config) return
    const consent = loadConsent()
    if (config.bannerEnabled && !consent) {
      setVisible(true)
    }
    if (consent) {
      setCurrentPrefs(consent)
    }
  }, [config])

  function acceptAll() {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true,
    }
    saveConsent(prefs)
    setCurrentPrefs(prefs)
    setVisible(false)
    setModalOpen(false)
  }

  function rejectNonEssential() {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    }
    saveConsent(prefs)
    setCurrentPrefs(prefs)
    setVisible(false)
  }

  function handleModalClose(prefs: CookiePreferences | null) {
    setModalOpen(false)
    if (prefs) {
      saveConsent(prefs)
      setCurrentPrefs(prefs)
      setVisible(false)
    }
  }

  return (
    <>
      {/* Wrapper: pointer-events none so it doesn't block page */}
      <div
        className="fixed inset-x-0 bottom-0 z-[9990] px-4 pb-4"
        style={{ pointerEvents: 'none' }}
      >
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{
                y: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.35 },
              }}
              style={{ pointerEvents: 'auto' }}
            >
              <div
                className="mx-auto flex flex-wrap items-center gap-5 rounded-2xl px-6 py-5"
                style={{
                  maxWidth: '1100px',
                  background: 'rgba(12,17,28,0.96)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow:
                    '0 -4px 40px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Icon */}
                <span className="text-[1.8rem] flex-shrink-0">🍪</span>

                {/* Text */}
                <div className="flex-1 min-w-[200px]">
                  <div className="text-[0.95rem] font-bold text-slate-100 mb-1">
                    We use cookies
                  </div>
                  <p className="text-[0.8rem] text-white/55 leading-relaxed mb-1.5">
                    {config?.bannerText ?? DEFAULT_CONFIG.bannerText}
                  </p>
                  <a
                    href={config?.privacyPolicyUrl ?? DEFAULT_CONFIG.privacyPolicyUrl}
                    className="text-[0.78rem] text-indigo-400 underline underline-offset-2 hover:text-indigo-300 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2.5 items-center flex-shrink-0 sm:flex-col md:flex-row">
                  <button
                    onClick={acceptAll}
                    className="inline-flex items-center justify-center px-[18px] py-[9px] rounded-[9px] text-[0.8rem] font-semibold text-white whitespace-nowrap transition-all hover:opacity-88 hover:-translate-y-px active:translate-y-0"
                    style={{
                      background:
                        'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
                    }}
                  >
                    Accept All
                  </button>
                  <button
                    onClick={rejectNonEssential}
                    className="inline-flex items-center justify-center px-[18px] py-[9px] rounded-[9px] text-[0.8rem] font-semibold text-slate-300 whitespace-nowrap transition-all hover:opacity-88 hover:-translate-y-px active:translate-y-0"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center px-3 py-[9px] text-[0.75rem] text-white/45 underline underline-offset-2 hover:text-white/75 whitespace-nowrap transition-colors"
                  >
                    Manage Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CookiePreferencesModal
        open={modalOpen}
        onClose={handleModalClose}
        initialPreferences={currentPrefs}
      />
    </>
  )
}
