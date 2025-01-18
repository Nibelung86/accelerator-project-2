import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';
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
    bulletActiveClass: 'swiper-pagination-bullet-active',
    type: 'bullets',
    clickable:  false,
  },

  watchSlidesProgress: true,

  breakpoints: {
    1440: {
      allowTouchMove: false,

      pagination: {
        clickable:  true,
      },
    }
  }
});

const toursSlider = new Swiper('.tours__slider', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,

  slidesPerView: 'auto',

  navigation: {
    nextEl: '.tours__slider-button-next',
    prevEl: '.tours__slider-button-prev',
  },

  breakpoints: {
    320: {
      width: 290,
      slidesPerView: 1,
      initialSlide: 0,
      spaceBetween: 15,
    },

    768: {
      width: 678,
      slidesPerView: 2,
      initialSlide: 0,
      spaceBetween: 18,
    },

    1440: {
      width: 1200,
      slidesPerView: 3,
      initialSlide: 0,
      spaceBetween: 30,
    }
  }
});

const trainersSlider = new Swiper('.instructors__slider', {
  modules: [Navigation],
  direction: 'horizontal',

  loop: false,

  navigation: {
    nextEl: '.instructors__slider-button-next',
    prevEl: '.instructors__slider-button-prev',
  },

  breakpoints: {
    320: {
      width: 290,
      slidesPerView: 1,
      initialSlide: 2,
      spaceBetween: 15,
    },

    768: {
      width: 678,
      slidesPerView: 3,
      initialSlide: 0,
      spaceBetween: 20,
    },

    1440: {
      width: 1200,
      slidesPerView: 4,
      initialSlide: 0,
      spaceBetween: 20,
    }
  }
});

const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: false,
  initialSlide: 0,
  slidesPerView: 1,
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.reviews__slider-button-next',
    prevEl: '.reviews__slider-button-prev',
  },

  breakpoints: {
    320: {
      width: 290,
      spaceBetween: 30,
    },

    768: {
      width: 565,
      spaceBetween: 30,
    },

    1440: {
      width: 700,
      spaceBetween: 120,
    },
  }
});

const swiperAdv = document.querySelector('.adv__slider');
const swiperAdvList = document.querySelector('.adv__list');
const swiperAdvSlides = document.querySelectorAll('.adv__item');
const desktopWidth = 1440;

const advSlider = () => {
  new Swiper('.adv__slider', {
    modules: [Navigation],
    navigation: {
      nextEl: '.adv__slider-button-next',
      prevEl: '.adv__slider-button-prev',
    },

    breakpoints: {
      1440: {
        watchSlidesProgress: true,
        spaceBetween: 30,
        initialSlide: 2,
        centeredSlides: true,
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        simulateTouch: false,
        loop: true,
        loopAddBlankSlides: false,
        loopAdditionalSlides: 0,
      },
    }
  });
};

const addSwiperClass = () => {
  swiperAdv.classList.add('swiper');
  swiperAdvList.classList.add('swiper-wrapper');
  swiperAdvSlides.forEach((slide) => {
    slide.classList.add('swiper-slide');
  });
};

if (document.body.clientWidth >= desktopWidth) {
  addSwiperClass();
  advSlider();
}

heroSlider();
toursSlider();
trainersSlider();
reviewsSlider();
