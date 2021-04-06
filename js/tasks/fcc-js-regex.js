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

/* Task C4: Ignore Case While Matching - TO CHECK */

/* Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences. */

/* Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c. */

/* You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase. */

let fourthRegex = "WhAt are we doing?";
let testFourthRegex = /what/i;
let fourthResult = testFourthRegex.test(fourthRegex);

/* OUTPUT CODE */

const btnFCCC4 = document.getElementById('run-fcc-task-c4');
const scopeFCCC4 = document.getElementById('fcc-task-c4');

function debugFCCC4() {
  scopeFCCC4.innerHTML = `${outputResponse} Is there any what? ${fourthResult}`;
}

if (btnFCCC4 !== null && scopeFCCC4 !== null) {
  btnFCCC4.addEventListener('click', debugFCCC4);
} else {
  scopeFCCC4.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task C5: Extract Matches */

/* So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method. */

/* To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. Here is the example: */
"This request has been denIed.".match(/denied/i);
let fifthRegex = "Where is the David?";
let testFifthRegex = /david/i;

/* Here the first match would return ["denied"] and the second would return ["david"]. Note that the .match syntax is the "opposite" of the .test method you have been using this far. */

// 'string'.match(/regex/);
// /regex/.test('string');

/* OUTPUT CODE */

const btnFCCC5 = document.getElementById('run-fcc-task-c5');
const scopeFCCC5 = document.getElementById('fcc-task-c5');

function debugFCCC5() {
  scopeFCCC5.innerHTML = `${outputResponse} Is there any David? ${fifthRegex.match(testFifthRegex)}`;
}

if (btnFCCC5 !== null && scopeFCCC5 !== null) {
  btnFCCC5.addEventListener('click', debugFCCC5);
} else {
  scopeFCCC5.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task C6: Find More Than the First Match */

/* So far, you have only been able to extract or search a pattern once. To search or extract a pattern more than once, you can use the g flag. Note that we can combine multiple regex flags, so we can use g with i at the same time. */

let sixthRegex = "Seven, three, five, fIVe, six, zero, eight.";
let testSixthRegex = /five/gi;
let sixthResult = sixthRegex.match(testSixthRegex);

/* OUTPUT CODE */

const btnFCCC6 = document.getElementById('run-fcc-task-c6');
const scopeFCCC6 = document.getElementById('fcc-task-c6');

function debugFCCC6() {
  scopeFCCC6.innerHTML = `${outputResponse} Is there any Five? ${sixthResult}`;
}

if (btnFCCC6 !== null && scopeFCCC6 !== null) {
  btnFCCC6.addEventListener('click', debugFCCC6);
} else {
  scopeFCCC6.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task C7: Match Anything with Wildcard Period */

/* Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: . */

/* The wildcard character . will match any one character (1 length). The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words. */

let seventhRegex1 = "Cam is on!";
let seventhRegex2 = "Cas has been built.";
let testSeventhRegex = /ca./i;

/* OUTPUT CODE */

const btnFCCC7 = document.getElementById('run-fcc-task-c7');
const scopeFCCC7 = document.getElementById('fcc-task-c7');

function debugFCCC7() {
  scopeFCCC7.innerHTML = `${outputResponse} Is there any ca.? ${testSeventhRegex.test(seventhRegex1)} and second test: ${testSeventhRegex.test(seventhRegex2)}`;
}

if (btnFCCC7 !== null && scopeFCCC7 !== null) {
  btnFCCC7.addEventListener('click', debugFCCC7);
} else {
  scopeFCCC7.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task C8: Match Single Character with Multiple Possibilities */

/* You learned how to match literal patterns (/literal/) and wildcard character (/./). These are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes. */

/* You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ ]) brackets. For example, if you want to match bag, big, ana bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u. */

let eightRegex1 = "big";
let eightRegex2 = "bag";
let eightRegex3 = "bug";
let eightRegex4 = "bog";
let testEightRegex = /b[aiu]g/i;

/* In example: To match all vowels with letters a, e, i, o, u you can just do regex = /[aeiou]/gi */

/* OUTPUT CODE */

const btnFCCC8 = document.getElementById('run-fcc-task-c8');
const scopeFCCC8 = document.getElementById('fcc-task-c8');

function debugFCCC8() {
  scopeFCCC8.innerHTML = `${outputResponse} First match: ${eightRegex1.match(testEightRegex)}, second match: ${eightRegex2.match(testEightRegex)}, third match: ${eightRegex3.match(testEightRegex)}, fourth match: ${eightRegex4.match(testEightRegex)}.`;
}

if (btnFCCC8 !== null && scopeFCCC8 !== null) {
  btnFCCC8.addEventListener('click', debugFCCC8);
} else {
  scopeFCCC8.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task C9: Match Letters of the Alphabet */

/* You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple. Inside a character set, you can define a range of characters to match using a hyphen character: -. */

/* For example, to match lowercase letters a through e you would use [a-e]. */

let ninthStr1 = "cat";
let ninthStr2 = "bat";
let ninthStr3 = "mat";
let testNinthRegex = /[a-e]at/;

/* OUTPUT CODE */

const btnFCCC9 = document.getElementById('run-fcc-task-c9');
const scopeFCCC9 = document.getElementById('fcc-task-c9');

function debugFCCC9() {
  scopeFCCC9.innerHTML = `${outputResponse} First match: ${ninthStr1.match(testNinthRegex)}, second match: ${ninthStr2.match(testNinthRegex)}, third match: ${ninthStr3.match(testNinthRegex)}.`;
}

if (btnFCCC9 !== null && scopeFCCC9 !== null) {
  btnFCCC9.addEventListener('click', debugFCCC9);
} else {
  scopeFCCC9.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 10: Match Numbers and Letters of the Alphabet */

/* Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5. Also, it is possible to combine a range of letters and numbers in a single character set. */

let tenthStr = "Dehad1998";
let testTenthRegex = /[a-z0-9]/gi;

/* OUTPUT CODE */

const btnFCCC10 = document.getElementById('run-fcc-task-c10');
const scopeFCCC10 = document.getElementById('fcc-task-c10');

function debugFCCC10() {
  scopeFCCC10.innerHTML = `${outputResponse} Our match: ${tenthStr.match(testTenthRegex)}.`;
}

if (btnFCCC10 !== null && scopeFCCC10 !== null) {
  btnFCCC10.addEventListener('click', debugFCCC10);
} else {
  scopeFCCC10.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}
