/* Assign FreeCodeCamp Toolbar buttons */
const bttFccTop = document.getElementById('go-to-top-fcc');
const bttFccBot = document.getElementById('go-to-bot-fcc');

/* Assign FreeCodeCamp and Zenva slider divs */
let fcc = document.getElementById('fcc');
let zenva = document.getElementById('zenva');

function scrollToTop() {
  fcc.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToBot() {
  /* Reverse Y Axis, scrollHeight instead of offsetTop + offsetHeight... There was also scrollIntoView (but scollIntoView works for whole page) */
  fcc.scrollTo({
    top: fcc.scrollHeight,
    behavior: 'smooth'
  });
}

/* Check if buttons exists before listening to it */
if (bttFccTop !== null) {
  bttFccTop.addEventListener('click', scrollToTop);
} 

if (bttFccBot !== null) {
  bttFccBot.addEventListener('click', scrollToBot);
}