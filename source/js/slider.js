import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const heroSlider = new Swiper('.hero__slider', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,

  pagination: {
    el: '.swiper-pagination',
    bulletElement: 'button',
    bulletClass: 'swiper-pagination-bullet',
    type: 'bullets',
    clickable:  true,
  },

  watchSlidesProgress: true,

  breakpoints: {
    1440: {
      // allowTouchMove: false,
    }
  }
});

heroSlider();
