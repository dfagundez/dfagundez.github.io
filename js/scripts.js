/**
 * Diego Fagundez Portfolio
 * Minimal JavaScript for smooth interactions
 */

// ==========================================
// Navigation Toggle (Mobile)
// ==========================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// ==========================================
// Smooth Scroll with offset for fixed nav
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================
// Navigation Background on Scroll
// ==========================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow when scrolled
  if (currentScroll > 100) {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
  } else {
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// ==========================================
// Intersection Observer for Fade-in Animations
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const fadeInElements = document.querySelectorAll('.about-content, .timeline-item, .contact-content');

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

fadeInElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  fadeInObserver.observe(element);
});

// ==========================================
// Active Navigation Link on Scroll
// ==========================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
  const scrollPosition = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
          link.style.color = 'var(--color-accent)';
        } else {
          link.style.color = '';
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// ==========================================
// Parallax Effect for Hero Section
// ==========================================
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroHeight = document.querySelector('.hero').offsetHeight;
  
  if (scrolled < heroHeight) {
    const parallaxSpeed = 0.5;
    heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    heroContent.style.opacity = 1 - (scrolled / heroHeight);
  }
});

// ==========================================
// Smooth Reveal for Skill Tags
// ==========================================
const skillTags = document.querySelectorAll('.skill-tag');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 50); // Stagger the animation
    }
  });
}, observerOptions);

skillTags.forEach(tag => {
  tag.style.opacity = '0';
  tag.style.transform = 'translateY(20px)';
  tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  skillObserver.observe(tag);
});

// ==========================================
// Timeline Items Animation
// ==========================================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, observerOptions);

timelineItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  item.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
  timelineObserver.observe(item);
});

// ==========================================
// Cursor Effect (Optional - Zen circle)
// ==========================================
const createCursorCircle = () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor-circle');
  cursor.style.cssText = `
    position: fixed;
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease, opacity 0.3s ease;
    opacity: 0;
  `;
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '0.5';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  const animateCursor = () => {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.15;
    cursorY += dy * 0.15;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  };

  animateCursor();

  // Scale cursor on hover over interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .skill-tag');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.opacity = '0.8';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.opacity = '0.5';
    });
  });
};

// Only create cursor effect on desktop devices
if (window.innerWidth > 768) {
  createCursorCircle();
}

// ==========================================
// Console Easter Egg
// ==========================================
console.log('%c侘寂 wabi-sabi', 'font-size: 20px; color: #4A5F4F; font-family: "Noto Serif JP", serif;');
console.log('%cBeauty in simplicity, perfection in imperfection.', 'font-size: 14px; color: #596161;');
console.log('%c\nMade with minimal JavaScript and maximum intention.\n- Diego Fagundez', 'font-size: 12px; color: #8B9D83; font-style: italic;');

// ==========================================
// Performance: Reduce animations on low-end devices
// ==========================================
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
  document.documentElement.style.setProperty('--transition-smooth', 'none');
  document.documentElement.style.setProperty('--transition-slow', 'none');
}

// ==========================================
// Accessibility: Respect reduced motion preference
// ==========================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.setProperty('--transition-smooth', 'none');
  document.documentElement.style.setProperty('--transition-slow', 'none');
  
  // Disable parallax
  window.removeEventListener('scroll', () => {
    heroContent.style.transform = 'none';
  });
}

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Set initial active nav link
  updateActiveNavLink();
  
  // Log page load time
  if (performance && performance.timing) {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`%c⚡ Page loaded in ${loadTime}ms`, 'color: #4A5F4F; font-weight: bold;');
  }
});
