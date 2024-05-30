import 'normalize.css';
import './style.css';
import { targetDropDowns } from './drop-down-menu';
import './image-carosel.js';

// drop-down-menu
const elsWithDropdowns = document.querySelectorAll('.drop-down-menu button');
elsWithDropdowns.forEach((el) => {
  targetDropDowns(el);
});
