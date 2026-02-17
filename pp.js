/* ============================================================
   SCRIPT.JS — Fr. [Name] Art Portfolio
   Handles: mobile nav · sticky header · scroll reveals · footer year
   ============================================================ */

// ---------- Footer: auto-update copyright year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile Navigation Toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
  // Prevent body scroll when menu is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ---------- Sticky Header Shadow on Scroll ----------
const siteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ---------- Scroll Reveal ----------
// Add 'reveal' class to elements you want to animate in.
// The JS watches them and adds 'visible' when they enter view.

const revealTargets = document.querySelectorAll(
  '.about-image-wrap, .about-text, .mission-card, ' +
  '.gallery-card, .project-item, .contact-inner'
);

// Tag them as reveal elements
revealTargets.forEach((el, i) => {
  el.classList.add('reveal');
  // Stagger siblings (mission cards, gallery cards, etc.)
  const parent = el.parentElement;
  if (parent) {
    const siblings = [...parent.children].filter(c => c.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0 && idx <= 3) {
      el.classList.add(`reveal-delay-${idx}`);
    }
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach(el => revealObserver.observe(el));
