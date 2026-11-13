(() => {
  'use strict';

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear().toLocaleString('my-MM');

  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = menuButton && document.getElementById(menuButton.getAttribute('aria-controls'));

  if (!menuButton || !menu) return;

  const setMenuOpen = (isOpen) => {
    menu.classList.toggle('show', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 1200px)').matches) setMenuOpen(false);
  });
})();