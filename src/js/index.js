<<<<<<< HEAD
import hello from "./modules/hello"
import AirDatepicker from "air-datepicker";
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date');
console.log(hello)
=======
import mobileNav from './modules/mobile-nav.js';
import loader from './modules/loader.js';

mobileNav();
loader();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    parallax: true,
    speed: 1000,

    keyboard: {
        enabled: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.slider-controls__count',
      type: 'fraction'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
>>>>>>> ce95bfd3aa30f3e5d4a0fe5168153db3163a3e90
