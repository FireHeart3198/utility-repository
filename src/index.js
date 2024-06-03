import 'normalize.css';
import './style.css';
import { targetDropDowns } from './drop-down-menu';
import { setSlide, slideLeft, slideRight } from './image-carousel.js';

// drop-down-menu
const elsWithDropdowns = document.querySelectorAll('.drop-down-menu button');
elsWithDropdowns.forEach((el) => {
  targetDropDowns(el);
});

// image-carousel
setSlide(0);
const leftArrow = document.querySelector('.arrow.left');
leftArrow.addEventListener('click', () => {
  slideLeft();
});

const rightArrow = document.querySelector('.arrow.right');
rightArrow.addEventListener('click', () => {
  slideRight();
});

window.setInterval(() => {
  slideRight();
}, 5000);
