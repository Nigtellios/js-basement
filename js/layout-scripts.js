/* Assign FreeCodeCamp Toolbar buttons */
let bttFccTop = document.getElementById('go-to-top-fcc');
let bttFccBot = document.getElementById('go-to-bot-fcc');

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
  /* Reverse Y Axis, top value + height value = bottom edge */
  let yReverse = fcc.offsetTop + fcc.offsetHeight;
  fcc.scrollTo({
    top: yReverse,
    behavior: 'smooth'
  });
}

/* Check if buttons exists before listening to it */
if(bttFccTop) {
  bttFccTop.addEventListener('click', scrollToTop);
} 

if (bttFccBot) {
  bttFccBot.addEventListener('click', scrollToBot);
}