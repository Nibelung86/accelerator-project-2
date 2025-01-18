const nav = document.querySelector('.main-nav');
const body = document.querySelector('.page-body');
const navLinks = document.querySelectorAll('.main-nav__link');
const menuButton = document.querySelector('.main-nav__toggle');

function navOpen() {

  menuButton.addEventListener('click', () => {
    if (nav.classList.contains('main-nav--closed')) {
      nav.classList.remove('main-nav--closed');
      nav.classList.add('main-nav--opened');
      body.classList.add('page-body--dark');
    } else {
      nav.classList.add('main-nav--closed');
      nav.classList.remove('main-nav--opened');
      body.classList.remove('page-body--dark');
    }
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      nav.classList.remove('main-nav--opened');
      nav.classList.add('main-nav--closed');
      body.classList.remove('page-body--dark');
    });
  });
}

navOpen();
