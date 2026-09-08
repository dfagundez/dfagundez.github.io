// Diego Fagundez Portfolio — Scripts

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function() {
  [
    initRevealAnimations,
    initTheme,
    initLanguage,
    initSmoothScroll,
    initCursorGlow,
    initSpotlight,
    initTypewriter
  ].forEach(init => {
    try {
      init();
    } catch (err) {
      console.error(`${init.name} failed:`, err);
    }
  });
});

// Multi-language support
function initLanguage() {
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('language') === 'en' ? 'en' : 'es';

  setLanguage(currentLang);
  updateToggleText(currentLang);

  if (!langToggle) return;

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLang);
    setLanguage(currentLang);
    updateToggleText(currentLang);
  });
}

function updateToggleText(lang) {
  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
}

function setLanguage(lang) {
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      if (el.tagName === 'TITLE') {
        document.title = text;
      } else {
        el.textContent = text;
      }
    }
  });

  document.documentElement.lang = lang;
}

// Theme: CSS handles the system preference; JS only applies a stored override
function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    document.documentElement.setAttribute('data-theme', stored);
  }
}

// Reveal on scroll: .reveal starts faded/offset, .reveal-in transitions it in
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(el => {
    const delay = el.style.getPropertyValue('--delay').trim();
    if (delay) el.style.transitionDelay = delay;
  });

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('reveal-in'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -10% 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));
}

// Smooth scroll for anchor links with nav offset
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// Cursor glow effect (follows mouse on whole page)
function initCursorGlow() {
  const fine = window.matchMedia('(pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || reduced) return;

  let raf = 0;
  const onMove = (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      document.documentElement.style.setProperty('--px', `${e.clientX}px`);
      document.documentElement.style.setProperty('--py', `${e.clientY}px`);
    });
  };

  window.addEventListener('pointermove', onMove, { passive: true });
}

// Sheen: highlight follows the pointer inside the element
function initSpotlight() {
  document.querySelectorAll('.sheen').forEach(el => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--sx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--sy', `${e.clientY - rect.top}px`);
    }, { passive: true });
  });
}

// Footer typewriter: types a word, holds, backspaces it, then types the next one
function initTypewriter() {
  const host = document.querySelector('.typewriter');
  if (!host) return;

  const words = (host.dataset.words || '').split('|').map(w => w.trim()).filter(Boolean);
  if (words.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Hidden copies of every word (plus the caret) hold the box at its widest,
  // so the sentence to the left never shifts while letters come and go.
  host.textContent = '';
  words.forEach(word => {
    const sizer = document.createElement('span');
    sizer.className = 'typewriter-sizer';
    sizer.textContent = `${word}_`;
    host.appendChild(sizer);
  });

  const el = document.createElement('span');
  el.className = 'typewriter-text';
  el.textContent = words[0];
  host.appendChild(el);

  const TYPE_MS = 85;
  const DELETE_MS = 45;
  const HOLD_MS = 2600;
  const GAP_MS = 500;

  let index = 0;
  let chars = words[0].length;
  let deleting = true;

  const tick = () => {
    const word = words[index];
    chars += deleting ? -1 : 1;
    el.textContent = word.slice(0, chars);

    let wait = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && chars === word.length) {
      deleting = true;
      wait = HOLD_MS;
    } else if (deleting && chars === 0) {
      deleting = false;
      index = (index + 1) % words.length;
      wait = GAP_MS;
    }

    setTimeout(tick, wait);
  };

  setTimeout(tick, HOLD_MS);
}
