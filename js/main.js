// ── EValue Consulting — Main JS ────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  renderPage();
  initNav();
});

// ── Navigation ─────────────────────────────────────────────────
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  // Close menu when a link is clicked on mobile
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

function setActiveNav(page) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}

// ── Page router ────────────────────────────────────────────────
let currentPage = 'home';

function showPage(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  setActiveNav(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderPage();
}

// ── Render all translatable elements ──────────────────────────
function renderPage() {
  // NAV
  setText('nav-home',     t('nav_home'));
  setText('nav-about',    t('nav_about'));
  setText('nav-services', t('nav_services'));
  setText('nav-approach', t('nav_approach'));
  setText('nav-contact',  t('nav_contact'));
  setText('nav-cta',      t('nav_cta'));

  // HOME
  setText('hero-eyebrow',    t('hero_eyebrow'));
  setHTML('hero-h1',         t('hero_h1'));
  setText('hero-sub',        t('hero_sub'));
  setText('hero-cta1',       t('hero_cta1'));
  setText('hero-cta2',       t('hero_cta2'));
  setText('hero-tag-label',  t('hero_tag_label'));
  setText('num1-label',      t('num1_label'));
  setText('num2-label',      t('num2_label'));
  setText('num3-label',      t('num3_label'));
  setText('services-eyebrow',t('services_eyebrow'));
  setText('services-title',  t('services_title'));
  setText('services-link',   t('services_link'));
  setText('s1-name', t('s1_name')); setText('s1-desc', t('s1_desc')); setText('s1-tag', t('s1_tag'));
  setText('s2-name', t('s2_name')); setText('s2-desc', t('s2_desc')); setText('s2-tag', t('s2_tag'));
  setText('s3-name', t('s3_name')); setText('s3-desc', t('s3_desc')); setText('s3-tag', t('s3_tag'));
  setText('s4-name', t('s4_name')); setText('s4-desc', t('s4_desc')); setText('s4-tag', t('s4_tag'));
  setText('s5-name', t('s5_name')); setText('s5-desc', t('s5_desc')); setText('s5-tag', t('s5_tag'));
  setText('s6-name', t('s6_name')); setText('s6-desc', t('s6_desc')); setText('s6-tag', t('s6_tag'));
  setText('approach-eyebrow', t('approach_eyebrow'));
  setText('pull-quote',  t('pull_quote'));
  setText('pull-attr',   t('pull_attr'));
  setText('step1-title', t('step1_title')); setText('step1-desc', t('step1_desc'));
  setText('step2-title', t('step2_title')); setText('step2-desc', t('step2_desc'));
  setText('step3-title', t('step3_title')); setText('step3-desc', t('step3_desc'));
  setText('about-role',  t('about_role'));
  setText('about-text',  t('about_text'));
  setText('about-cta',   t('about_cta'));
  setText('contact-bar-headline', t('contact_bar_headline'));

  // SERVICES PAGE
  setText('svc-eyebrow', t('svc_eyebrow'));
  setHTML('svc-h1',      t('svc_h1'));
  setText('svc-sub',     t('svc_sub'));
  setText('area1-label', t('area1_label'));
  setText('area2-label', t('area2_label'));
  setText('area3-label', t('area3_label'));
  setText('svc-cta-headline', t('svc_cta_headline'));
  setText('svc-cta-btn',      t('svc_cta_btn'));

  // ABOUT PAGE
  setText('about-eyebrow',    t('about_eyebrow'));
  setText('about-page-sub',   t('about_sub'));
  setText('about-full-role',  t('about_full_role'));
  setText('about-p1', t('about_p1'));
  setText('about-p2', t('about_p2'));
  setText('about-p3', t('about_p3'));
  setText('about-col1-label', t('about_col1_label'));
  setText('about-col1-text',  t('about_col1_text'));
  setText('about-col2-label', t('about_col2_label'));
  setText('about-col2-text',  t('about_col2_text'));

  // APPROACH PAGE
  setHTML('approach-h1',  t('approach_h1'));
  setText('approach-sub', t('approach_sub'));
  setText('ag1-title', t('ag1_title')); setText('ag1-body', t('ag1_body'));
  setText('ag2-title', t('ag2_title')); setText('ag2-body', t('ag2_body'));
  setText('ag3-title', t('ag3_title')); setText('ag3-body', t('ag3_body'));
  setText('approach-col1-label', t('approach_col1_label'));
  setText('approach-col1-text',  t('approach_col1_text'));
  setText('approach-col2-label', t('approach_col2_label'));
  setText('approach-col2-text',  t('approach_col2_text'));

  // CONTACT PAGE
  setText('contact-eyebrow',     t('contact_eyebrow'));
  setHTML('contact-h1',          t('contact_h1'));
  setText('contact-form-title',  t('contact_form_title'));
  setAttr('input-name',    'placeholder', t('form_name'));
  setAttr('input-org',     'placeholder', t('form_org'));
  setAttr('input-email',   'placeholder', t('form_email'));
  setAttr('input-subject', 'placeholder', t('form_subject'));
  setText('form-submit',         t('form_submit'));
  setText('contact-info-title',  t('contact_info_title'));
  setText('phone-label',   t('phone_label'));
  setText('email-label',   t('email_label'));
  setText('linkedin-label',t('linkedin_label'));
  setText('base-label',    t('base_label'));
  setText('base-note',     t('base_note'));

  // FOOTER
  document.querySelectorAll('.footer-copy').forEach(el => el.textContent = t('footer_copy'));
}

// ── Helpers ────────────────────────────────────────────────────
function setText(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.textContent = val;
}
function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.innerHTML = val;
}
function setAttr(id, attr, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.setAttribute(attr, val);
}

// ── Service accordion ──────────────────────────────────────────
function toggleService(header) {
  const card  = header.closest('.service-full');
  const arrow = header.querySelector('.sfh-arrow');
  const isOpen = card.classList.contains('open');

  document.querySelectorAll('.service-full').forEach(c => c.classList.remove('open'));

  if (!isOpen) {
    card.classList.add('open');
  }
}

// ── Contact form (static — connects to Netlify Forms) ──────────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = currentLang === 'it' ? 'Invio in corso…' : 'Sending…';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() });
      btn.textContent = currentLang === 'it' ? 'Messaggio inviato ✓' : 'Message sent ✓';
      form.reset();
    } catch {
      btn.textContent = currentLang === 'it' ? 'Errore — riprova' : 'Error — please retry';
    }

    setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3000);
  });
}
