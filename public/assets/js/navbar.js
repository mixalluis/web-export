// Navbar Interactions (Desktop & Mobile, Hamburger drawer, ESC key, Click Outside)
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBackdrop = document.getElementById('menu-backdrop');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('hidden');
    if (menuBackdrop) menuBackdrop.classList.remove('hidden');
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    if (menuIcon) menuIcon.classList.add('hidden');
    if (closeIcon) closeIcon.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('hidden');
    if (menuBackdrop) menuBackdrop.classList.add('hidden');
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    if (menuIcon) menuIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close when clicking on backdrop
  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close when clicking any link inside mobile menu
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on click outside mobile menu and hamburger button
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!mobileMenu.contains(e.target) && hamburgerBtn && !hamburgerBtn.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // If window is resized to desktop/tablet (>= 768px), automatically close mobile menu
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });

  // Highlight active link based on current path
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.split('?')[0].replace(/\/+$/, '') || '/';
    if (cleanHref === currentPath || (cleanHref !== '/' && currentPath.startsWith(cleanHref))) {
      link.classList.add('text-emerald-700', 'font-semibold');
      link.classList.remove('text-slate-600');
    }
  });
});
