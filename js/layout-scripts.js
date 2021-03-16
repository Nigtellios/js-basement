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

window.onload = buttonsListeners();