'use client'

import { useEffect, useState } from 'react'

const SESSION_KEY = 'glassio_admin_session'
const ADMIN_SECRET_DEFAULT = 'glassio-admin-2024'

interface CookieConfig {
  bannerEnabled: boolean
  bannerText: string
  privacyPolicyUrl: string
}

export default function CookieSettingsPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const [config, setConfig] = useState<CookieConfig | null>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ text: string; error: boolean } | null>(null)

  // Form state
  const [bannerEnabled, setBannerEnabled] = useState(true)
  const [bannerText, setBannerText] = useState('')
  const [privacyPolicyUrl, setPrivacyPolicyUrl] = useState('')

  // Check existing session on mount
  useEffect(() => {
    const token = localStorage.getItem(SESSION_KEY)
    if (token) {
      setAuthed(true)
    }
  }, [])

  // Load config after auth
  useEffect(() => {
    if (!authed) return
    setLoading(true)
    fetch('/api/cookie-config')
      .then((r) => r.json())
      .then((data: CookieConfig) => {
        setConfig(data)
        setBannerEnabled(data.bannerEnabled)
        setBannerText(data.bannerText)
        setPrivacyPolicyUrl(data.privacyPolicyUrl)
      })
      .catch(() => setMessage({ text: 'Failed to load config.', error: true }))
      .finally(() => setLoading(false))
  }, [authed])

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET ?? ADMIN_SECRET_DEFAULT
    if (password === secret) {
      localStorage.setItem(SESSION_KEY, password)
      setAuthed(true)
      setLoginError('')
    } else {
      setLoginError('Incorrect password. Please try again.')
    }
  }

  function handleLogout() {
    localStorage.removeItem(SESSION_KEY)
    setAuthed(false)
    setPassword('')
    setConfig(null)
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setMessage(null)
    const token = localStorage.getItem(SESSION_KEY) ?? ADMIN_SECRET_DEFAULT
    try {
      const res = await fetch('/api/cookie-config', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': token,
        },
        body: JSON.stringify({ bannerEnabled, bannerText, privacyPolicyUrl }),
      })
      if (res.status === 401) {
        setMessage({ text: 'Unauthorized. Please log in again.', error: true })
        handleLogout()
        return
      }
      if (!res.ok) {
        setMessage({ text: 'Failed to save settings.', error: true })
        return
      }
      const updated: CookieConfig = await res.json()
      setConfig(updated)
      setMessage({ text: 'Settings saved successfully.', error: false })
    } catch {
      setMessage({ text: 'Network error. Please try again.', error: true })
    } finally {
      setSaving(false)
    }
  }

  // ── Login screen ───────────────────────────────────────────
  if (!authed) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: '#080B14' }}
      >
        <div
          className="w-full max-w-sm rounded-2xl p-8"
          style={{
            background: 'rgba(12,17,28,0.96)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
          }}
        >
          <div className="text-2xl mb-1 text-center">🍪</div>
          <h1 className="text-lg font-bold text-slate-100 text-center mb-1">
            Cookie Settings
          </h1>
          <p className="text-[0.78rem] text-white/40 text-center mb-6">
            Admin access required
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[0.8rem] font-semibold text-white/60 mb-1.5">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin secret"
                className="w-full rounded-lg px-3 py-2.5 text-[0.85rem] text-slate-100 placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                autoComplete="current-password"
                required
              />
            </div>
            {loginError && (
              <p className="text-[0.78rem] text-red-400">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-[0.85rem] font-semibold text-white transition-opacity hover:opacity-85"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── Admin screen ───────────────────────────────────────────
  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{ background: '#080B14' }}
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-slate-100">Cookie Banner Settings</h1>
            <p className="text-[0.78rem] text-white/40 mt-0.5">
              Control the consent banner shown to visitors
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg text-[0.78rem] font-semibold text-white/50 hover:text-white/80 transition-colors"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="text-white/40 text-sm text-center py-12">Loading settings…</div>
        ) : (
          <form
            onSubmit={handleSave}
            className="rounded-2xl p-6 space-y-6"
            style={{
              background: 'rgba(12,17,28,0.96)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Banner Enabled toggle */}
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[0.88rem] font-bold text-slate-200">
                    Cookie Banner Enabled
                  </div>
                  <div className="text-[0.75rem] text-white/35 mt-0.5">
                    {bannerEnabled
                      ? 'Banner is visible to new visitors'
                      : 'Banner is hidden on all pages'}
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={bannerEnabled}
                  onClick={() => setBannerEnabled((v) => !v)}
                  className="relative w-11 h-6 rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex-shrink-0 cursor-pointer"
                  style={{
                    background: bannerEnabled
                      ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                      : 'rgba(255,255,255,0.12)',
                    borderColor: bannerEnabled ? 'transparent' : 'rgba(255,255,255,0.12)',
                  }}
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white shadow transition-transform duration-200"
                    style={{ transform: bannerEnabled ? 'translateX(20px)' : 'translateX(0)' }}
                  />
                </button>
              </div>
            </div>

            {/* Banner Text */}
            <div>
              <label className="block text-[0.8rem] font-semibold text-white/60 mb-1.5">
                Banner Text
              </label>
              <textarea
                value={bannerText}
                onChange={(e) => setBannerText(e.target.value)}
                rows={4}
                className="w-full rounded-lg px-3 py-2.5 text-[0.83rem] text-slate-200 placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                placeholder="We use cookies to enhance your experience…"
              />
            </div>

            {/* Privacy Policy URL */}
            <div>
              <label className="block text-[0.8rem] font-semibold text-white/60 mb-1.5">
                Privacy Policy URL
              </label>
              <input
                type="text"
                value={privacyPolicyUrl}
                onChange={(e) => setPrivacyPolicyUrl(e.target.value)}
                className="w-full rounded-lg px-3 py-2.5 text-[0.83rem] text-slate-200 placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                placeholder="/privacy.html"
              />
            </div>

            {/* Message */}
            {message && (
              <p
                className="text-[0.78rem]"
                style={{ color: message.error ? '#f87171' : '#5eead4' }}
              >
                {message.error ? '✗' : '✓'} {message.text}
              </p>
            )}

            {/* Save */}
            <button
              type="submit"
              disabled={saving}
              className="w-full py-2.5 rounded-lg text-[0.85rem] font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
              }}
            >
              {saving ? 'Saving…' : 'Save Settings'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
