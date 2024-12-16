const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav__link');
const menuButton = document.querySelector('.main-nav__toggle');

function navOpen() {

  menuButton.addEventListener('click', () => {
    if (nav.classList.contains('main-nav--closed')) {
      nav.classList.remove('main-nav--closed');
      nav.classList.add('main-nav--opened');
      document.body.style.position = 'fixed';
      document.body.style.backgroundColor = 'rgba(45, 56, 63, 0.6)';
    } else {
      nav.classList.add('main-nav--closed');
      nav.classList.remove('main-nav--opened');
      document.body.style.position = '';
      document.body.style.backgroundColor = '';
    }
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      nav.classList.remove('main-nav--opened');
      nav.classList.add('main-nav--closed');
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.backgroundColor = '';
    });
  });
}

navOpen();
