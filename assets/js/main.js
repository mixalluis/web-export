// General Utilities (Scroll animation, certificates modal, gallery selector, current year)

// Supported certificate IDs - display strings live in i18n.js under cert.<id>.*
const CERT_IDS = ['nib', 'npwp', 'kemendag', 'phyto', 'coa', 'coo'];

// Official document registration numbers (not translated - managed by the admin data app)
const CERT_REG_NOS = {
  nib: "1289000438192",
  npwp: "42.819.301.4-412.000",
  kemendag: "EXP-ID/KEMENDAG-2021/04921",
  phyto: "IQA-KT-EXP/SUB/2026/0892",
  coa: "COA-LAB/ID/2026/0411",
  coo: "COO-SKA/ID/2026/1944"
};

let activeCertId = CERT_IDS[0];

// Localised string lookup with an English fallback (works even if i18n.js is missing)
function tr(key, fallback) {
  if (typeof t === 'function') {
    const value = t(key);
    if (value && value !== key) return value;
  }
  return fallback || '';
}

// Render the certificate modal body for one certificate id in the active language
function renderCertModal(certId) {
  activeCertId = certId;
  const set = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  set('cert-modal-title', tr('cert.' + certId + '.title'));
  set('cert-modal-issuer', tr('cert.' + certId + '.issuer'));
  set('cert-modal-reg', CERT_REG_NOS[certId] || '');
  set('cert-modal-valid', tr('cert.' + certId + '.valid'));
  set('cert-modal-desc', tr('cert.' + certId + '.desc'));
}

document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Certificate Modal Handler (labels come from the i18n.js cert.<id>.* keys)
  const certModal = document.getElementById('cert-modal');
  const certClose = document.getElementById('cert-modal-close');
  const certTriggers = document.querySelectorAll('[data-cert-id]');

  certTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const requested = btn.getAttribute('data-cert-id');
      renderCertModal(CERT_IDS.indexOf(requested) !== -1 ? requested : CERT_IDS[0]);

      if (certModal) certModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  if (certClose) {
    certClose.addEventListener('click', () => {
      if (certModal) certModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Keep an open certificate modal in sync when the visitor switches language
  window.addEventListener('languageChanged', () => {
    if (certModal && !certModal.classList.contains('hidden')) {
      renderCertModal(activeCertId);
    }
  });

  // Gallery Thumbnail Clickers
  const thumbs = document.querySelectorAll('[data-gallery-thumb]');
  const mainImage = document.getElementById('gallery-main-image');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('data-gallery-thumb');
      if (mainImage && src) {
        mainImage.setAttribute('src', src);
      }
      thumbs.forEach(t => t.classList.remove('border-emerald-600', 'ring-2', 'ring-emerald-500/20'));
      thumb.classList.add('border-emerald-600', 'ring-2', 'ring-emerald-500/20');
    });
  });
});
