/* Assign FreeCodeCamp Toolbar buttons */
const bttFccTop = document.getElementById('go-to-top-fcc');
const bttFccBot = document.getElementById('go-to-bot-fcc');
const bttZTop = document.getElementById('go-to-top-zenva');
const bttZBot = document.getElementById('go-to-bot-zenva');
const bttMyOwnTop = document.getElementById('go-to-top-my-own');
const bttMyOwnBot = document.getElementById('go-to-bot-my-own');

/* Assign FreeCodeCamp and Zenva slider divs */
const fcc = document.getElementById('fcc');
const zenva = document.getElementById('zenva');
const myOwn = document.getElementById('my-own');

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

/* Check if buttons exists before listening to it */

/* FCC */
if (bttFccTop !== null) {
  bttFccTop.addEventListener('click', function(){scrollToTop(fcc)});
} 

if (bttFccBot !== null) {
  bttFccBot.addEventListener('click', function(){scrollToBot(fcc)});
} 

/* Zenva */
if (bttZTop !== null) {
  bttZTop.addEventListener('click', function(){scrollToTop(zenva)});
} 

if (bttZBot !== null) {
  bttZBot.addEventListener('click', function(){scrollToBot(zenva)});
}

/* My Own */
if (bttMyOwnTop !== null) {
  bttMyOwnTop.addEventListener('click', function(){scrollToTop(myOwn)});
} 

if (bttMyOwnBot !== null) {
  bttMyOwnBot.addEventListener('click', function(){scrollToBot(myOwn)});
}