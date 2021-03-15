/* Assign FreeCodeCamp Toolbar buttons */
const bttFccTop = document.getElementById('go-to-top-fcc');
const bttFccBot = document.getElementById('go-to-bot-fcc');
const bttZTop = document.getElementById('go-to-top-zenva');
const bttZBot = document.getElementById('go-to-bot-zenva');

/* Assign FreeCodeCamp and Zenva slider divs */
let fcc = document.getElementById('fcc');
let zenva = document.getElementById('zenva');
let myOwn = document.getElementById('my-own');


/* FCC */
function FCCscrollToTop() {
  fcc.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function FCCscrollToBot() {
  fcc.scrollTo({
    top: fcc.scrollHeight,
    behavior: 'smooth'
  });
}

/* Zenva */
function ZscrollToTop() {
  zenva.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function ZscrollToBot() {
  zenva.scrollTo({
    top: zenva.scrollHeight,
    behavior: 'smooth'
  });
}

/* My Own */

/* Check if buttons exists before listening to it */
if (bttFccTop !== null) {
  bttFccTop.addEventListener('click', FCCscrollToTop);
} 

if (bttFccBot !== null) {
  bttFccBot.addEventListener('click', FCCscrollToBot);
}

if (bttZTop !== null) {
  bttZTop.addEventListener('click', ZscrollToTop);
} 

if (bttZBot !== null) {
  bttZBot.addEventListener('click', ZscrollToBot);
}