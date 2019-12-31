$(document).ready(() => {
  initiateAnchors();
});
const doc = document;
const BODY = doc.querySelector('body');
const HEADER = doc.querySelector('header');
const HEADER_NAV_ID = doc.getElementById('headerNav');
const HEADER_NAV = doc.querySelector('.header__nav');
const HEADER_NAV_WRAP = doc.querySelector('.header__nav-wrap');

const NAV_LINK_CLASS = HEADER_NAV_ID.querySelectorAll('.nav-link');

const HEIGHT_HEADER = doc.querySelector('.header').offsetHeight;
const ABOUT_CLASS = doc.querySelector('.about');
const ABOUT_PADDING_TOP = (ABOUT_CLASS.style.paddingTop = `${HEIGHT_HEADER}px`);
const HAMBURGER_ID = doc.getElementById('hamburger');

// hamburger click
const showMobileMenu = () => {
  HEADER_NAV.classList.add('m-show');
  HEADER_NAV_WRAP.classList.add('m-show');
  BODY.classList.add('scroll-off');
};

const closeMobileMenu = () => {
  HEADER_NAV.classList.remove('m-show');
  HEADER_NAV_WRAP.classList.remove('m-show');
  BODY.classList.remove('scroll-off');
};

const toggleMobileMenu = () => {
  HAMBURGER_ID.classList.toggle('is-active');
  HAMBURGER_ID.classList.contains('is-active')
    ? showMobileMenu()
    : closeMobileMenu();
};

const initiateAnchors = () => {
  const headerHeight = $('.header').outerHeight();
  const $anchorsLinks = $('.header__nav-items').find('a');
  const anchorsSections = $anchorsLinks.map(function () {
    const item = $($(this).attr('href'));

    if (item) {
      return item;
    }
  }); // On window scroll: define current section and set certain anchor`s link as active

  $(window).scroll(function () {
    const distanceFromZero = $(this).scrollTop() + headerHeight;

    let currSection = 0;
    anchorsSections.map(function () {
      const distance = distanceFromZero - $(this).offset().top;
      if (distance >= 0) {
        currSection = this;
      }
    });

    if (currSection[0]) {
      $anchorsLinks.parent().removeClass('is-active').end().filter(`[href='#${currSection[0].id}']`)
        .parent()
        .addClass('is-active');
    }
  }); // On anchor link click: animated auto-scroll to certain block.

  $anchorsLinks.click(function (e) {
    const anchorHref = $(this).attr('href');
    const scrollEndpoint = anchorHref === '#' ? 0 : $(anchorHref).offset().top - headerHeight;
    $('html, body').stop().animate({
      scrollTop: scrollEndpoint,
    }, 0);
    if (window.matchMedia('(max-width: 1168px)').matches) {
      toggleMobileMenu();
    }
    e.preventDefault();
  });
}

const toggleHeaderBgOnScroll = () => {
  const onScroll = () => (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
    ? HEADER.classList.add('header-color-fixed')
    : HEADER.classList.remove('header-color-fixed'));

  window.addEventListener('scroll', onScroll);
};

// Toggle Mobile Menu
HAMBURGER_ID.addEventListener('click', toggleMobileMenu);

// Toggle header BG on color

toggleHeaderBgOnScroll();

