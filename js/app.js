import '../css/vendor/normalize.css';
import '../css/vendor/tiny-slider.css';
import '../css/style.scss';

/* Slider Init */
let slider = tns({
  container: '.slide-container__content',
  items: 1,
  rewind: true,
  speed: 200,
  controlsContainer: '.slide-container__controls__arrows',
  navContainer: '.slide-container__controls__nav'
});

/* Layout Functionality scripts */

/* Assign buttons IDs to variables */
const firstSlideButtonUp = document.getElementById('go-to-top-fcc');
const firstSlideButtonDown = document.getElementById('go-to-bot-fcc');

const secondSlideButtonUp = document.getElementById('go-to-top-zenva');
const secondSlideButtonDown = document.getElementById('go-to-bot-zenva');

const thirdSlideButtonUp = document.getElementById('go-to-top-my-own');
const thirdSlideButtonDown = document.getElementById('go-to-bot-my-own');

/* Assign Slider inner-divs */
const firstSlideTargetDiv = document.getElementById('fcc');
const secondSlideTargetDiv = document.getElementById('zenva');
const thirdSlideTargetDiv = document.getElementById('my-own');

/* Re-Usable scroll functions */
function scrollToTop(targetDivTop) {
  targetDivTop.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToBot(targetDivBot) {
  targetDivBot.scrollTo({
    top: targetDivBot.scrollHeight,
    behavior: 'smooth'
  });
}

function buttonsListeners() {
  firstSlideButtonUp.addEventListener('click', function(){scrollToTop(firstSlideTargetDiv)});
  firstSlideButtonDown.addEventListener('click', function(){scrollToBot(firstSlideTargetDiv)});
  secondSlideButtonUp.addEventListener('click', function(){scrollToTop(secondSlideTargetDiv)});
  secondSlideButtonDown.addEventListener('click', function(){scrollToBot(secondSlideTargetDiv)});
  thirdSlideButtonUp.addEventListener('click', function(){scrollToTop(thirdSlideTargetDiv)});
  thirdSlideButtonDown.addEventListener('click', function(){scrollToBot(thirdSlideTargetDiv)});
}

window.onload = buttonsListeners;

/* JS Imports */
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';
import './tasks/fcc-scripts';
import './tasks/zenva-scripts';
import './tasks/my-own-scripts';
