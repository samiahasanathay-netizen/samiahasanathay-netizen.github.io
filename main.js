// ============================================================
// SAMIA ATHAY — PORTFOLIO — main.js
// Nav behaviour, mobile menu, thread-stitch reveal, small utils.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Nav: solid on scroll ---------- */
  const nav = document.querySelector('.site-nav');
  const onDark = nav && nav.classList.contains('on-dark');

  function updateNavState(){
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else if (onDark) {
      nav.classList.remove('scrolled');
    }
  }
  updateNavState();
  window.addEventListener('scroll', updateNavState, { passive:true });

  /* ---------- Mobile menu toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const navEl = document.querySelector('.site-nav');
  if (toggle && navEl) {
    toggle.addEventListener('click', () => {
      const isOpen = navEl.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Mobile dropdown accordion
    document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 720) {
          e.preventDefault();
          link.closest('.nav-item').classList.toggle('open');
        }
      });
    });
    // Close menu when a link is clicked (mobile)
    document.querySelectorAll('.nav-links a:not(.nav-item.has-dropdown > .nav-link)').forEach(a => {
      a.addEventListener('click', () => {
        navEl.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Thread-stitch reveal on scroll ---------- */
  const threads = document.querySelectorAll('.thread');
  if ('IntersectionObserver' in window && threads.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    threads.forEach(t => io.observe(t));
  } else {
    threads.forEach(t => t.classList.add('in-view'));
  }

  /* ---------- Fade-up reveal for generic content blocks ----------
     Elements are visible by default in CSS (no-JS safe). Only once
     we're sure IntersectionObserver exists do we opt them into the
     hidden "pending" state, so a JS error never leaves content stuck
     invisible. */
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('reveal-in');
          io2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => {
      el.classList.add('reveal-pending');
      io2.observe(el);
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Active nav link ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === path) link.classList.add('active');
  });

});
