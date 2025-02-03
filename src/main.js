document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.submenu-title');
  const burderButton = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const body = document.querySelector('.body');
  const header = document.querySelector('.header');
  const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints;

  if (isTouchScreen) {
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('show');
      });
    });
  
    burderButton.addEventListener('click', (event) => {
      event.stopPropagation();
  
      toggleMenu();
      closeSubmenu();
    });
  
    document.addEventListener('click', function(event) {
      const isClickOutsideMenu = !menu.contains(event.target) && !header.contains(event.target);
      const isMenuOpen = menu.classList.contains('show');
  
      if (isClickOutsideMenu && isMenuOpen) {
        closeMenu();
        closeSubmenu();
      }
    });
  }

  const toggleMenu = () => {
    menu.classList.toggle('show');
    body.classList.toggle('menu-open');
  }

  const closeMenu = () => {
    menu.classList.remove('show');
    body.classList.remove('menu-open');
  };

  const closeSubmenu = () => {
    menuItems.forEach(item => { item.classList.remove('show'); });
  }
});
