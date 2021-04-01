/* ############################# */
/* ########## REGEX ############ */
/* ############################# */

const outputResponse = `Output: `;

/* Task C1: Using the Test Method */

/* Regular expressions are used in programming languages to match parts of string. You create patterns to help you do that matching. */

/* If you want to find the word 'the" in the string "The dog chased the cat", you could use the following regular expressions: /the/. Notice that quote marks are not required within the regular expression. */

/* JS has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not. */

let testString = "Hello darkness my old friend.";
let testRegex = /darkness/;

/* OUTPUT CODE */

const btnFCCC1 = document.getElementById('run-fcc-task-c1');
const scopeFCCC1 = document.getElementById('fcc-task-c1');

function debugFCCC1() {
  scopeFCCC1.innerHTML = `${outputResponse} Our regex is: ${testRegex.test(testString)}`;
}

if (btnFCCC1 !== null && scopeFCCC1 !== null) {
  btnFCCC1.addEventListener('click', debugFCCC1);
} else {
  scopeFCCC1.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task C2: Match Literal Strings */

/* In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Wojciech: */

let wojtekString = "Hello, my name is Wojciech.";
let testWojtek = /Wojciech/;

/* This test call will return true. Any other forms of Wojciech will not match. For example, the regex /Wojciech/ will not match WOJCIECH or wojciech. */

let wojtekWrong = /wojtek/;

/* OUTPUT CODE */

const btnFCCC2 = document.getElementById('run-fcc-task-c2');
const scopeFCCC2 = document.getElementById('fcc-task-c2');

function debugFCCC2() {
  scopeFCCC2.innerHTML = `${outputResponse} First, we're looking for Wojciech REGEX and it's: ${testWojtek.test(wojtekString)}, now, it is the wrong regex so it is: ${wojtekWrong.test(wojtekString)}`;
}

if (btnFCCC2 !== null && scopeFCCC2 !== null) {
  btnFCCC2.addEventListener('click', debugFCCC2);
} else {
  scopeFCCC2.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task C3: Match a Literal String with Different Possibilities */

/* Using regexes like /coding/, you can look for the pattern coding in another string. This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |. */

/* This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/. You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like: /yes|no|maybe/. */

let vodkaPattern = "Where is my vOdka, Jurij?";
let testVodkaPattern = /vodka|Vodka|VODKA|vOdka|vODKA/;
let vodkaResult = testVodkaPattern.test(vodkaPattern);

/* OUTPUT CODE */

const btnFCCC3 = document.getElementById('run-fcc-task-c3');
const scopeFCCC3 = document.getElementById('fcc-task-c3');

function debugFCCC3() {
  scopeFCCC3.innerHTML = `${outputResponse} Is there any vodka? ${vodkaResult}`;
}

if (btnFCCC3 !== null && scopeFCCC3 !== null) {
  btnFCCC3.addEventListener('click', debugFCCC3);
} else {
  scopeFCCC3.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}
