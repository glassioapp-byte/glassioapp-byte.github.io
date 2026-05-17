/*!
 * Glassio Cookie Consent Banner — standalone vanilla JS
 * Same localStorage keys as index.html implementation.
 * Self-contained: injects CSS, appends HTML, initialises on DOMContentLoaded.
 */
(function () {
  'use strict';

  // ── Keys ────────────────────────────────────────────────────────────────────
  var CK_CONSENT_KEY = 'glassio_ck_consent';
  var CK_CFG_KEY     = 'glassio_ck_cfg';

  var _ckPrefs = { analytics: false, marketing: false, personalization: false };

  // ── Config helpers ───────────────────────────────────────────────────────────
  function ckLoadCfg() {
    var def = {
      enabled: true,
      text: 'We use cookies to enhance your experience. Some cookies are essential for the site to work properly. Others help us understand how visitors use our site and may be used for analytics, marketing, or personalization.',
      privacyUrl: './privacy.html'
    };
    try {
      var r = localStorage.getItem(CK_CFG_KEY);
      return r ? Object.assign({}, def, JSON.parse(r)) : def;
    } catch (e) { return def; }
  }

  function ckLoadConsent() {
    try {
      var r = localStorage.getItem(CK_CONSENT_KEY);
      return r ? JSON.parse(r) : null;
    } catch (e) { return null; }
  }

  function ckSaveConsent(prefs) {
    var obj = Object.assign({ essential: true, ts: new Date().toISOString() }, prefs);
    try { localStorage.setItem(CK_CONSENT_KEY, JSON.stringify(obj)); } catch (e) {}
    document.dispatchEvent(new CustomEvent('glassio:consent', { detail: obj }));
  }

  // ── CSS injection ────────────────────────────────────────────────────────────
  function injectCSS() {
    if (document.getElementById('ck-style')) return;
    var style = document.createElement('style');
    style.id = 'ck-style';
    style.textContent = [
      /* Banner */
      '#ck-banner{position:fixed;bottom:0;left:0;right:0;z-index:9990;padding:0 16px 16px;pointer-events:none;transform:translateY(100%);opacity:0;transition:transform .45s cubic-bezier(.16,1,.3,1),opacity .35s ease}',
      '#ck-banner.ck-show{transform:translateY(0);opacity:1}',
      '#ck-banner-inner{max-width:1100px;margin:0 auto;background:rgba(12,17,28,0.96);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,.10);border-radius:16px;padding:20px 24px;display:flex;align-items:center;gap:20px;box-shadow:0 -4px 40px rgba(0,0,0,.5),0 8px 32px rgba(0,0,0,.3);pointer-events:auto;flex-wrap:wrap}',
      '#ck-icon{font-size:1.8rem;flex-shrink:0}',
      '#ck-content{flex:1;min-width:200px}',
      '#ck-title{font-size:.95rem;font-weight:700;color:#f1f5f9;margin-bottom:5px}',
      '#ck-text{font-size:.8rem;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:6px}',
      '#ck-privacy-link{font-size:.78rem;color:#818cf8;text-decoration:underline;text-underline-offset:2px}',
      '#ck-privacy-link:hover{color:#a5b4fc}',
      '#ck-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center;flex-shrink:0}',
      '.ck-btn{display:inline-flex;align-items:center;justify-content:center;padding:9px 18px;border-radius:9px;font-size:.8rem;font-weight:600;cursor:pointer;border:none;white-space:nowrap;transition:opacity .15s,transform .15s}',
      '.ck-btn:hover{opacity:.88;transform:translateY(-1px)}',
      '.ck-btn:active{transform:translateY(0)}',
      '.ck-btn-primary{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;box-shadow:0 4px 16px rgba(99,102,241,.35)}',
      '.ck-btn-secondary{background:rgba(255,255,255,.07);color:#cbd5e1;border:1px solid rgba(255,255,255,.12)}',
      '.ck-btn-ghost{background:transparent;color:rgba(255,255,255,.45);font-size:.75rem;padding:9px 12px;text-decoration:underline;text-underline-offset:2px}',
      '.ck-btn-ghost:hover{color:rgba(255,255,255,.75)}',
      /* Modal */
      '#ck-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:10000;display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;pointer-events:none;transition:opacity .25s}',
      '#ck-overlay.ck-show{opacity:1;pointer-events:auto}',
      '#ck-modal{background:#0e1420;border:1px solid rgba(255,255,255,.10);border-radius:20px;padding:32px;max-width:480px;width:100%;max-height:90vh;overflow-y:auto;position:relative;box-shadow:0 32px 80px rgba(0,0,0,.7);transform:scale(.94) translateY(16px);transition:transform .3s cubic-bezier(.16,1,.3,1)}',
      '#ck-overlay.ck-show #ck-modal{transform:scale(1) translateY(0)}',
      '#ck-modal-close{position:absolute;top:14px;right:14px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.09);color:rgba(255,255,255,.5);border-radius:8px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1rem;line-height:1}',
      '#ck-modal-close:hover{background:rgba(255,255,255,.12);color:#fff}',
      '#ck-modal h2{font-size:1.1rem;font-weight:700;color:#f1f5f9;margin-bottom:8px}',
      '#ck-modal > p{font-size:.8rem;color:rgba(255,255,255,.45);line-height:1.65;margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,.07)}',
      '.ck-cat{padding:16px 0;border-bottom:1px solid rgba(255,255,255,.06)}',
      '.ck-cat:last-of-type{border-bottom:none;margin-bottom:16px}',
      '.ck-cat-row{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}',
      '.ck-cat-name{font-size:.87rem;font-weight:700;color:#e2e8f0;margin-bottom:3px}',
      '.ck-cat-desc{font-size:.75rem;color:rgba(255,255,255,.38);line-height:1.5}',
      '.ck-tog{width:44px;height:24px;border-radius:12px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.12);position:relative;cursor:pointer;flex-shrink:0;margin-top:2px;transition:background .2s,border-color .2s}',
      '.ck-tog.on{background:linear-gradient(135deg,#6366f1,#8b5cf6);border-color:transparent}',
      '.ck-tog.disabled{cursor:default;opacity:.5}',
      '.ck-tog-knob{position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:9px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.3);transition:transform .2s}',
      '.ck-tog.on .ck-tog-knob{transform:translateX(20px)}',
      '.ck-modal-acts{display:flex;gap:10px;margin-top:8px;padding-top:20px;border-top:1px solid rgba(255,255,255,.07)}',
      '.ck-modal-acts .ck-btn{flex:1}',
      /* Responsive */
      '@media(max-width:640px){#ck-banner-inner{flex-direction:column;align-items:flex-start;gap:14px}#ck-actions{width:100%;flex-direction:column}#ck-actions .ck-btn{width:100%;justify-content:center}#ck-modal{padding:24px 18px}}'
    ].join('');
    (document.head || document.documentElement).appendChild(style);
  }

  // ── HTML injection ───────────────────────────────────────────────────────────
  function injectHTML(cfg) {
    if (document.getElementById('ck-banner')) return; // already injected

    var bannerHTML = [
      '<div id="ck-banner" role="region" aria-label="Cookie consent" aria-live="polite">',
      '  <div id="ck-banner-inner">',
      '    <div id="ck-icon">🍪</div>',
      '    <div id="ck-content">',
      '      <div id="ck-title">We use cookies</div>',
      '      <div id="ck-text">' + cfg.text + '</div>',
      '      <a id="ck-privacy-link" href="' + cfg.privacyUrl + '">Privacy Policy</a>',
      '    </div>',
      '    <div id="ck-actions">',
      '      <button class="ck-btn ck-btn-primary" onclick="ckAcceptAll()">Accept All</button>',
      '      <button class="ck-btn ck-btn-secondary" onclick="ckRejectNonEssential()">Reject Non-Essential</button>',
      '      <button class="ck-btn ck-btn-ghost" onclick="ckOpenPreferences()">Manage Preferences</button>',
      '    </div>',
      '  </div>',
      '</div>',
      '',
      '<div id="ck-overlay" role="dialog" aria-modal="true" aria-labelledby="ck-modal-title" onclick="ckOverlayClick(event)">',
      '  <div id="ck-modal">',
      '    <button id="ck-modal-close" onclick="ckClosePreferences()" aria-label="Close">✕</button>',
      '    <h2 id="ck-modal-title">Cookie Preferences</h2>',
      '    <p>Manage which cookies you allow. Essential cookies are always active as they are required for the site to function properly.</p>',
      '    <div class="ck-cat">',
      '      <div class="ck-cat-row">',
      '        <div><div class="ck-cat-name">Essential Cookies</div><div class="ck-cat-desc">Required for the website to function. Cannot be disabled.</div></div>',
      '        <div class="ck-tog on disabled" aria-checked="true" role="switch" aria-label="Essential cookies"><div class="ck-tog-knob"></div></div>',
      '      </div>',
      '    </div>',
      '    <div class="ck-cat">',
      '      <div class="ck-cat-row">',
      '        <div><div class="ck-cat-name">Analytics Cookies</div><div class="ck-cat-desc">Help us understand how visitors interact with our website so we can improve it.</div></div>',
      '        <div class="ck-tog" id="ck-tog-analytics" role="switch" aria-label="Analytics cookies" onclick="ckTogglePref(\'analytics\')"><div class="ck-tog-knob"></div></div>',
      '      </div>',
      '    </div>',
      '    <div class="ck-cat">',
      '      <div class="ck-cat-row">',
      '        <div><div class="ck-cat-name">Marketing Cookies</div><div class="ck-cat-desc">Used to deliver relevant advertisements and track campaign effectiveness.</div></div>',
      '        <div class="ck-tog" id="ck-tog-marketing" role="switch" aria-label="Marketing cookies" onclick="ckTogglePref(\'marketing\')"><div class="ck-tog-knob"></div></div>',
      '      </div>',
      '    </div>',
      '    <div class="ck-cat">',
      '      <div class="ck-cat-row">',
      '        <div><div class="ck-cat-name">Personalization Cookies</div><div class="ck-cat-desc">Allow the site to remember your preferences and deliver a personalized experience.</div></div>',
      '        <div class="ck-tog" id="ck-tog-personalization" role="switch" aria-label="Personalization cookies" onclick="ckTogglePref(\'personalization\')"><div class="ck-tog-knob"></div></div>',
      '      </div>',
      '    </div>',
      '    <div class="ck-modal-acts">',
      '      <button class="ck-btn ck-btn-secondary" onclick="ckSavePreferences()">Save Preferences</button>',
      '      <button class="ck-btn ck-btn-primary" onclick="ckAcceptAll()">Accept All</button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');

    var container = document.createElement('div');
    container.innerHTML = bannerHTML;
    while (container.firstChild) {
      document.body.appendChild(container.firstChild);
    }
  }

  // ── Banner show/hide ─────────────────────────────────────────────────────────
  function ckHideBanner() {
    var b = document.getElementById('ck-banner');
    if (b) {
      b.classList.remove('ck-show');
      setTimeout(function () { b.style.display = 'none'; }, 500);
    }
  }

  function ckShowBanner() {
    var cfg = ckLoadCfg();
    if (!cfg.enabled) return;
    var el = document.getElementById('ck-banner');
    if (!el) return;
    var t = document.getElementById('ck-text');
    if (t) t.textContent = cfg.text;
    var a = document.getElementById('ck-privacy-link');
    if (a) a.href = cfg.privacyUrl;
    el.style.display = 'block';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add('ck-show'); });
    });
  }

  // ── Public API (attached to window so onclick="" works) ──────────────────────
  window.ckAcceptAll = function () {
    ckSaveConsent({ analytics: true, marketing: true, personalization: true });
    ckHideBanner();
    ckClosePreferences();
  };

  window.ckRejectNonEssential = function () {
    ckSaveConsent({ analytics: false, marketing: false, personalization: false });
    ckHideBanner();
  };

  window.ckOpenPreferences = function () {
    var consent = ckLoadConsent();
    _ckPrefs = {
      analytics:       !!(consent && consent.analytics),
      marketing:       !!(consent && consent.marketing),
      personalization: !!(consent && consent.personalization)
    };
    ['analytics', 'marketing', 'personalization'].forEach(function (k) {
      var tog = document.getElementById('ck-tog-' + k);
      if (tog) {
        tog.classList.toggle('on', _ckPrefs[k]);
        tog.setAttribute('aria-checked', _ckPrefs[k].toString());
      }
    });
    var o = document.getElementById('ck-overlay');
    if (o) o.classList.add('ck-show');
  };

  window.ckClosePreferences = function () {
    var o = document.getElementById('ck-overlay');
    if (o) o.classList.remove('ck-show');
  };

  window.ckOverlayClick = function (e) {
    if (e.target === document.getElementById('ck-overlay')) {
      window.ckClosePreferences();
    }
  };

  window.ckTogglePref = function (key) {
    _ckPrefs[key] = !_ckPrefs[key];
    var tog = document.getElementById('ck-tog-' + key);
    if (tog) {
      tog.classList.toggle('on', _ckPrefs[key]);
      tog.setAttribute('aria-checked', _ckPrefs[key].toString());
    }
  };

  window.ckSavePreferences = function () {
    ckSaveConsent(_ckPrefs);
    ckHideBanner();
    window.ckClosePreferences();
  };

  // ── Init ─────────────────────────────────────────────────────────────────────
  function ckInit() {
    injectCSS();
    var cfg = ckLoadCfg();
    injectHTML(cfg);

    var consent = ckLoadConsent();
    if (!consent && cfg.enabled) {
      setTimeout(ckShowBanner, 800);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ckInit);
  } else {
    ckInit();
  }
})();
