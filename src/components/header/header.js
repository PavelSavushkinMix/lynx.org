const BODY = document.querySelector('body');
const HEADER = document.querySelector('header');
const HEADER_NAV_ID = document.getElementById('headerNav');
const HEADER_NAV = document.querySelector('.header__nav');
const HEADER_NAV_WRAP = document.querySelector('.header__nav-wrap');

const NAV_LINK_CLASS = HEADER_NAV_ID.querySelectorAll('.nav-link');

const HEIGHT_HEADER = document.querySelector('.header').offsetHeight;
const ABOUT_CLASS = document.querySelector('.about');
const ABOUT_PADDING_TOP = (ABOUT_CLASS.style.paddingTop = `${HEIGHT_HEADER}px`);

const HAMBURGER_ID = document.getElementById('hamburger');
const HAMBURGER_CLASS = document.getElementsByClassName('hamburger');

// hamburger click
const showMobileMenu = () => {
  HEADER_NAV.classList.add('m-show');
  HEADER_NAV_WRAP.classList.add('m-show');
  BODY.style.overflow = 'hidden';
};

const closeMobileMenu = () => {
  HEADER_NAV.classList.remove('m-show');
  HEADER_NAV_WRAP.classList.remove('m-show');
  BODY.style.overflow = 'inherit';
};

const toggleMobileMenu = () => {
  HAMBURGER_ID.classList.toggle('is-active');
  HAMBURGER_ID.classList.contains('is-active')
    ? showMobileMenu()
    : closeMobileMenu();
};

// Toggle Mobile Menu
HAMBURGER_ID.addEventListener('click', toggleMobileMenu);

// Toggle header BG on color
const toggleHeaderBgOnScroll = () => {
  const onScroll = () => (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
    ? HEADER.classList.add('header-color-fixed')
    : HEADER.classList.remove('header-color-fixed'));

  window.addEventListener('scroll', onScroll);
};

// Toggle active NavLink
const toggleActiveNavLink = () => {
  const onActive = (e) => {
    const current = document.querySelector('.header__nav .is-active');
    if (current !== null) {
      current.classList.remove('is-active');
    }
    e.target.classList.add('is-active');

    if (window.matchMedia('(max-width: 1168px)').matches) {
      toggleMobileMenu();
    }
  };

  const NavLinks = document.querySelectorAll('.header__nav .nav-link');

  if (NavLinks.length) {
    NavLinks.forEach((link) => link.addEventListener('click', onActive));
  }
};

toggleHeaderBgOnScroll();
toggleActiveNavLink();
