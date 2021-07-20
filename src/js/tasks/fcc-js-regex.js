/* ############################# */
/* ########## REGEX ############ */
/* ############################# */

const outputResponse = `Output: `;

/* ############################################################ */
/* Task C1: Using the Test Method */
/* ############################################################ */

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

/* ############################################################ */
/* Task C2: Match Literal Strings */
/* ############################################################ */

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

/* ############################################################ */
/* Task C3: Match a Literal String with Different Possibilities */
/* ############################################################ */

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

/* ############################################################ */
/* Task C4: Ignore Case While Matching - TO CHECK */
/* ############################################################ */

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

/* ############################################################ */
/* Task C5: Extract Matches */
/* ############################################################ */

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

/* ############################################################ */
/* Task C6: Find More Than the First Match */
/* ############################################################ */

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

/* ############################################################ */
/* Task C7: Match Anything with Wildcard Period */
/* ############################################################ */

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

/* ############################################################ */
/* Task C8: Match Single Character with Multiple Possibilities */
/* ############################################################ */

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

/* ############################################################ */
/* Task C9: Match Letters of the Alphabet */
/* ############################################################ */

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

/* ############################################################ */
/* Task 10: Match Numbers and Letters of the Alphabet */
/* ############################################################ */

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

/* ############################################################ */
/* Task C11: Match Single Characters Not Specified */
/* ############################################################ */

/* So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets ale called NEGATED CHARACTER SETS. */

/* To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match. For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters. Let's create a single regex that matches all character that are not a number or a vowel with some flags. */

let eleventhStr = "4 blind mages.";
let testEleventhRegex = /[^0-9aeiou]/gi;

/* OUTPUT CODE */

const btnFCCC11 = document.getElementById('run-fcc-task-c11');
const scopeFCCC11 = document.getElementById('fcc-task-c11');

function debugFCCC11() {
  scopeFCCC11.innerHTML = `${outputResponse} Our match: ${eleventhStr.match(testEleventhRegex)}.`;
}

if (btnFCCC11 !== null && scopeFCCC11 !== null) {
  btnFCCC11.addEventListener('click', debugFCCC11);
} else {
  scopeFCCC11.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C12: Match Characters that Occur One or More Times */
/* ############################################################ */

/* Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated. You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other. */

/* For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"]. If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match. */

let twelfthStr = "Missouri";
let testTwelfthRegex = /s+/gi;

/* OUTPUT CODE */

const btnFCCC12 = document.getElementById('run-fcc-task-c12');
const scopeFCCC12 = document.getElementById('fcc-task-c12');

function debugFCCC12() {
  scopeFCCC12.innerHTML = `${outputResponse} Our match: ${twelfthStr.match(testTwelfthRegex)}.`;
}

if (btnFCCC12 !== null && scopeFCCC12 !== null) {
  btnFCCC12.addEventListener('click', debugFCCC12);
} else {
  scopeFCCC12.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C13: Match Characters that Occur Zero or More Times */
/* ############################################################ */

/* The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches character that occur zero or more times.

The character to do this is the asterisk or star: *.

In order below, the three match calls would return the values with go (last would be null). */

let thirteenthStr1 = "Polska goooola!";
let thirteenthStr2 = "GOOOOOOL ROBERT LEWANDOWSKI";
let thirteenthStr3 = "Global Village";
let testThirteenthRegex = /go*/gi;

/* OUTPUT CODE */

const btnFCCC13 = document.getElementById('run-fcc-task-c13');
const scopeFCCC13 = document.getElementById('fcc-task-c13');

function debugFCCC13() {
  scopeFCCC13.innerHTML = `${outputResponse} Our first match: ${thirteenthStr1.match(testThirteenthRegex)}, second match: ${thirteenthStr2.match(testThirteenthRegex)}, third match: ${thirteenthStr3.match(testThirteenthRegex)}.`;
}

if (btnFCCC13 !== null && scopeFCCC13 !== null) {
  btnFCCC13.addEventListener('click', debugFCCC13);
} else {
  scopeFCCC13.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C14: Find Characters with Lazy Matching */
/* ############################################################ */

/* In regular expressions, a greedy match finds the longest possibler part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between. Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"]. Note that parsing HTML with REGEX should be avoided, but pattern matching an HTML string with regular expressions is completely fine
 */

let fourteenthStr = "<h1>Titanic</h1>";
let testFourteenthRegex = /<.*?>/;

/* OUTPUT CODE */

const btnFCCC14 = document.getElementById('run-fcc-task-c14');
const scopeFCCC14 = document.getElementById('fcc-task-c14');

function debugFCCC14() {
  scopeFCCC14.innerHTML = `${outputResponse} Our match: ${fourteenthStr.match(testFourteenthRegex)}.`;
}

if (btnFCCC14 !== null && scopeFCCC14 !== null) {
  btnFCCC14.addEventListener('click', debugFCCC14);
} else {
  scopeFCCC14.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C15: Find One or More Criminals in a Hunt */
/* ############################################################ */

/* Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once. Here's and example to review how to do this: */

/* The regex /z+/ matches the letter z then it appears one or more times in a row. It would fins matches in all of the following strings: "z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

But it doesn't find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"

Write a greedy regex that finds one or more criminals within a group of other people. A Criminal is represented by the capital letter C.
*/

let reCriminalito = /C+/;

/* Yeah like, it was very easy (but requirements could be tricky somehow). */

/* OUTPUT CODE */

const btnFCCC15 = document.getElementById('run-fcc-task-c15');
const scopeFCCC15 = document.getElementById('fcc-task-c15');

function debugFCCC15() {
  scopeFCCC15.innerHTML = `${outputResponse} Well, task is done, I just had to write /C+/ as a regex, the case group doesn't matter.`;
}

if (btnFCCC15 !== null && scopeFCCC15 !== null) {
  btnFCCC15.addEventListener('click', debugFCCC15);
} else {
  scopeFCCC15.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C16: Match Beginning String Patterns */
/* ############################################################ */

/* Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings. In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWIllNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings. */

let sixteenthStr = "Ricky's mom said that he should use a rubber.";
let sixteenthStr2 = "Now there is no any Ricky's.";
let testSixteenthRegex = /^ricky's/gi;

/* OUTPUT CODE */

const btnFCCC16 = document.getElementById('run-fcc-task-c16');
const scopeFCCC16 = document.getElementById('fcc-task-c16');

function debugFCCC16() {
  scopeFCCC16.innerHTML = `${outputResponse} First test for Ricky at the beginning of string: ${testSixteenthRegex.test(sixteenthStr)}, second test: ${testSixteenthRegex.test(sixteenthStr2)}.`;
}

if (btnFCCC16 !== null && scopeFCCC16 !== null) {
  btnFCCC16.addEventListener('click', debugFCCC16);
} else {
  scopeFCCC16.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C17: Match Ending String Patterns */
/* ############################################################ */

/* In the last challenge, you learned to use the caret character to search for patterns at the beginning of string. There is also a way to search for patterns at the end of strings. You can search the end of string using the dollar sign character $ at the end of the regex. */

let seventeenthStr = "Where would you go, Wizard";
let seventeenthStr2 = "Wizard is not there!";
let testSeventeenthRegex = /Wizard$/;

/* OUTPUT CODE */

const btnFCCC17 = document.getElementById('run-fcc-task-c17');
const scopeFCCC17 = document.getElementById('fcc-task-c17');

function debugFCCC17() {
  scopeFCCC17.innerHTML = `${outputResponse} First test for Wizard at the end of string: ${testSeventeenthRegex.test(seventeenthStr)}, second test: ${testSeventeenthRegex.test(seventeenthStr2)}.`;
}

if (btnFCCC17 !== null && scopeFCCC17 !== null) {
  btnFCCC17.addEventListener('click', debugFCCC17);
} else {
  scopeFCCC17.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C18: Match All Letters and Numbers */
/* ############################################################ */

/* Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well. */

/* The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_). These shortcut character classes are also known as shorthand character classes. */

let eighteenthStr1 = "important_let_const_var";
let eighteenthStr2 = "420";
let testEighteenthRegexLongHand = /[A-Za-z0-9_]+/;
let testEighteenthRegexShortHand = /\w+/;

/* OUTPUT CODE */

const btnFCCC18 = document.getElementById('run-fcc-task-c18');
const scopeFCCC18 = document.getElementById('fcc-task-c18');

function debugFCCC18() {
  scopeFCCC18.innerHTML = `${outputResponse} First test longhand on string: ${testEighteenthRegexLongHand.test(eighteenthStr1)}, second test longhand on numbers: ${testEighteenthRegexLongHand.test(eighteenthStr2)}. First test shorthand on string: ${testEighteenthRegexShortHand.test(eighteenthStr1)}, second test shorthand on numbers: ${testEighteenthRegexShortHand.test(eighteenthStr2)}.`;
}

if (btnFCCC18 !== null && scopeFCCC18 !== null) {
  btnFCCC18.addEventListener('click', debugFCCC18);
} else {
  scopeFCCC18.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C19: Match Everything But Letters and Numbers */
/* ############################################################ */

/* You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics. You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_]. */

let nineteenthStr1 = "We go boys!!";
let nineteenthStr2 = "40%";
let testNineteenthRegex = /\W/;

/* OUTPUT CODE */

const btnFCCC19 = document.getElementById('run-fcc-task-c19');
const scopeFCCC19 = document.getElementById('fcc-task-c19');

function debugFCCC19() {
  scopeFCCC19.innerHTML = `${outputResponse} First match with shorthand: ${nineteenthStr1.match(testNineteenthRegex)}, second match with shorthand: ${nineteenthStr2.match(testNineteenthRegex)}.`;
}

if (btnFCCC19 !== null && scopeFCCC19 !== null) {
  btnFCCC19.addEventListener('click', debugFCCC19);
} else {
  scopeFCCC19.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C20: Match All Numbers */
/* ############################################################ */

/* You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers. The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine. */

let twentiethStr1 = "2001: A Space Odyssey";
let testTwentiethRegex = /\d/g;

/* OUTPUT CODE */

const btnFCCC20 = document.getElementById('run-fcc-task-c20');
const scopeFCCC20 = document.getElementById('fcc-task-c20');

function debugFCCC20() {
  scopeFCCC20.innerHTML = `${outputResponse} Looking only for numbers: ${twentiethStr1.match(testTwentiethRegex)}.`;
}

if (btnFCCC20 !== null && scopeFCCC20 !== null) {
  btnFCCC20.addEventListener('click', debugFCCC20);
} else {
  scopeFCCC20.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C21: Match All Non-Numbers */
/* ############################################################ */

/* The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead. The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine. */

let twentyFirstStr = "2021: Godzilla vs Kong";
let testTwentyFirstRegex = /\D/g;

/* We are going to count how many non-digits are in this title. For that, we are using .length property after our match. */

/* OUTPUT CODE */

const btnFCCC21 = document.getElementById('run-fcc-task-c21');
const scopeFCCC21 = document.getElementById('fcc-task-c21');

function debugFCCC21() {
  scopeFCCC21.innerHTML = `${outputResponse} Looking only for numbers: ${twentyFirstStr.match(testTwentyFirstRegex).length}.`;
}

if (btnFCCC21 !== null && scopeFCCC21 !== null) {
  btnFCCC21.addEventListener('click', debugFCCC21);
} else {
  scopeFCCC21.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C22: Restrict Possible Usernames */
/* ############################################################ */

/* Usernames are used everywhere on the internet. They are what give users a unique identity on their favourite sites. */

/* You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating a username: */

/* 1. Usernames can only use alpha-numeric characters.
*  2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
*  3. Username letters can be lowercase and uppercase.
*  4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*  */

let usernameC22 = "JackOfDehad420";
let checkUsernameC22 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let checkResult = checkUsernameC22.test(usernameC22);

/* Code Explanation
^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input */

/* OUTPUT CODE */

const btnFCCC22 = document.getElementById('run-fcc-task-c22');
const scopeFCCC22 = document.getElementById('fcc-task-c22');

function debugFCCC22() {
  scopeFCCC22.innerHTML = `${outputResponse} Does the username fits checklist 1-4? ${checkResult}.`;
}

if (btnFCCC22 !== null && scopeFCCC22 !== null) {
  btnFCCC22.addEventListener('click', debugFCCC22);
} else {
  scopeFCCC22.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C23: Match Whitespace */
/* ############################################################ */

/* The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters. */

/* You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [\r\t\f\n\v]. Below we would check how many whitespaces are in our string. */

let twentyThirdStr = "Spaces? Le what? They are e v e r y w h e r e.";
let testTwentyThirdRegex = /\s/g;
let twentyThirdResult = twentyThirdStr.match(testTwentyThirdRegex).length;

/* OUTPUT CODE */

const btnFCCC23 = document.getElementById('run-fcc-task-c23');
const scopeFCCC23 = document.getElementById('fcc-task-c23');

function debugFCCC23() {
  scopeFCCC23.innerHTML = `${outputResponse} How many whitespaces? There are: ${twentyThirdResult}.`;
}

if (btnFCCC23 !== null && scopeFCCC23 !== null) {
  btnFCCC23.addEventListener('click', debugFCCC23);
} else {
  scopeFCCC23.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C24: Match Non-Whitespace Characters */
/* ############################################################ */

/* You learned about searching for white space using \s, with a lowercase s. You can also search for everything except whitespace. */

/* Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^\r\t\f\n\v]. Here below, the value returned by .length would be equal to all non-whitespace characters. */

let twentyFourthStr = "All my homies does push-up rows on hexagon dumbbells.";
let testTwentyFourthRegex = /\S/g;
let twentyFourthResult = twentyFourthStr.match(testTwentyFourthRegex).length;

/* OUTPUT CODE */

const btnFCCC24 = document.getElementById('run-fcc-task-c24');
const scopeFCCC24 = document.getElementById('fcc-task-c24');

function debugFCCC24() {
  scopeFCCC24.innerHTML = `${outputResponse} How many non-whitespace characters? There are: ${twentyFourthResult}.`;
}

if (btnFCCC24 !== null && scopeFCCC24 !== null) {
  btnFCCC24.addEventListener('click', debugFCCC24);
} else {
  scopeFCCC24.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C25: Specify Upper and Lower Number of Matches */
/* ############################################################ */

/* Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns. You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns. */

/* For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/. */

let twentyFifthStr1 = "aaaah";
let twentyFifthStr2 = "aah";
let testTwentyFifthRegex = /a{3,5}h/;
let twentyFifthResult1 = testTwentyFifthRegex.test(twentyFifthStr1);
let twentyFifthResult2 = testTwentyFifthRegex.test(twentyFifthStr2);

/* OUTPUT CODE */

const btnFCCC25 = document.getElementById('run-fcc-task-c25');
const scopeFCCC25 = document.getElementById('fcc-task-c25');

function debugFCCC25() {
  scopeFCCC25.innerHTML = `${outputResponse} First range: ${twentyFifthResult1}, second range: ${twentyFifthResult2}.`;
}

if (btnFCCC25 !== null && scopeFCCC25 !== null) {
  btnFCCC25.addEventListener('click', debugFCCC25);
} else {
  scopeFCCC25.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C26: Specify Only the Lower Number of Matches */
/* ############################################################ */

/* You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit. To only specify the lower number of patterns keep the first number followed by a comma. For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/. */

let twentySixthStr1 = "Haaaah";
let twentySixthStr2 = "Haah";
let testTwentySixthRegex = /ha{3,}h/i;
let twentySixthResult1 = testTwentySixthRegex.test(twentySixthStr1);
let twentySixthResult2 = testTwentySixthRegex.test(twentySixthStr2);

/* OUTPUT CODE */

const btnFCCC26 = document.getElementById('run-fcc-task-c26');
const scopeFCCC26 = document.getElementById('fcc-task-c26');

function debugFCCC26() {
  scopeFCCC26.innerHTML = `${outputResponse} First range: ${twentySixthResult1}, second range: ${twentySixthResult2}.`;
}

if (btnFCCC26 !== null && scopeFCCC26 !== null) {
  btnFCCC26.addEventListener('click', debugFCCC26);
} else {
  scopeFCCC26.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C27: Specify Exact Number of Matches */
/* ############################################################ */

/* You can specify the lowe and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches. To specify a certain number of patterns, just have that one number between the curly brackets. For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/. */

let twentySeventhStr1 = "haaah";
let twentySeventhStr2 = "hah";
let testTwentySeventhRegex = /ha{3}h/;
let twentySeventhResult1 = testTwentySeventhRegex.test(twentySeventhStr1);
let twentySeventhResult2 = testTwentySeventhRegex.test(twentySeventhStr2);

/* OUTPUT CODE */

const btnFCCC27 = document.getElementById('run-fcc-task-c27');
const scopeFCCC27 = document.getElementById('fcc-task-c27');

function debugFCCC27() {
  scopeFCCC27.innerHTML = `${outputResponse} First range: ${twentySeventhResult1}, second range: ${twentySeventhResult2}.`;
}

if (btnFCCC27 !== null && scopeFCCC27 !== null) {
  btnFCCC27.addEventListener('click', debugFCCC27);
} else {
  scopeFCCC27.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C28: Check for All or None */
/* ############################################################ */

/* Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless. You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional. For example, there are slight differences in American and British English and you can use the question mark to match both spellings. */

let americano = "Color";
let british = "Colour";
let checkColorsRegex = /colou?r/i;
let spellingCheckResult1 = checkColorsRegex.test(americano);
let spellingCheckResult2 = checkColorsRegex.test(british);

/* OUTPUT CODE */

const btnFCCC28 = document.getElementById('run-fcc-task-c28');
const scopeFCCC28 = document.getElementById('fcc-task-c28');

function debugFCCC28() {
  scopeFCCC28.innerHTML = `${outputResponse} Our spell check: ${spellingCheckResult1}, ${spellingCheckResult2}.`;
}

if (btnFCCC28 !== null && scopeFCCC28 !== null) {
  btnFCCC28.addEventListener('click', debugFCCC28);
} else {
  scopeFCCC28.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C29: Positive and Negative Lookahead */
/* ############################################################ */

/* Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string. There are two kinds of lookaheads: positive lookahead and negative lookahead. */

/* A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched. On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present. They are a lil-bit confusing, but some examples could help. */

let quit = "qu";
let noQuit = "qt";
let quitRegex = /q(?=u)/;
let noQuitRegex = /q(?!u)/;
let quitResult = quit.match(quitRegex);
let noQuitResult = noQuit.match(noQuitRegex);

/* Both of these match calls would return ["q"]. A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number: */

let passwordC29 = "abc1337";
let checkPasswordC29 = /(?=\w{3,6})(?=\D*\d)/;
let passwordCheckResult = checkPasswordC29.test(passwordC29);

/* OUTPUT CODE */

const btnFCCC29 = document.getElementById('run-fcc-task-c29');
const scopeFCCC29 = document.getElementById('fcc-task-c29');

function debugFCCC29() {
  scopeFCCC29.innerHTML = `${outputResponse} Our lookaheads with quits: ${quitResult}, and no quit: ${noQuitResult}. Our lookahead for password that looks for between 3 and 6 characters and at least 1 number: ${passwordCheckResult}.`;
}

if (btnFCCC29 !== null && scopeFCCC29 !== null) {
  btnFCCC29.addEventListener('click', debugFCCC29);
} else {
  scopeFCCC29.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C30: Check For Mixed Grouping of Characters */
/* ############################################################ */

/* Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses (). If you want to find either Penguin or Pumpkin in a string, you can use the following regular expression: /P(engu|umpk)in/g */

/* Then check whether the desired string groups are in the test string by using the test() method. */

let thirtyStr1 = "Pumpkin";
let thirtyStr2 = "Penguin";
let testThirtyRegex = /P(umpk|engu)in/g;
let thirtyRegexResult1 = testThirtyRegex.test(thirtyStr1);
let thirtyRegexResult2 = testThirtyRegex.test(thirtyStr2);

/* OUTPUT CODE */

const btnFCCC30 = document.getElementById('run-fcc-task-c30');
const scopeFCCC30 = document.getElementById('fcc-task-c30');

function debugFCCC30() {
  scopeFCCC30.innerHTML = `${outputResponse} Is this Penguin or Pumpkin? ${thirtyRegexResult1}, ${thirtyRegexResult2}.`;
}

if (btnFCCC30 !== null && scopeFCCC30 !== null) {
  btnFCCC30.addEventListener('click', debugFCCC30);
} else {
  scopeFCCC30.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C31: Reuse Patterns Using Capture Groups */
/* ############################################################ */

/* Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string. You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses. */

/* To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group. The example below matches any word that occurs twice separated by a space: */

let repeatStr = "regex regex";
let checkRepeatedRegex = /(\w+)\s\1/;
let repeatStrResult1 = checkRepeatedRegex.test(repeatStr);
let repeatStrResult2 = repeatStr.match(checkRepeatedRegex);

/* The test call would return true, and the match call would return ["regex regex", "regex"]. Using the .match() method on a string will return an array with the string it matches, along with its capture group. */

/* OUTPUT CODE */

const btnFCCC31 = document.getElementById('run-fcc-task-c31');
const scopeFCCC31 = document.getElementById('fcc-task-c31');

function debugFCCC31() {
  scopeFCCC31.innerHTML = `${outputResponse} Ye ye, two results: ${repeatStrResult1}, ${repeatStrResult2}.`;
}

if (btnFCCC31 !== null && scopeFCCC31 !== null) {
  btnFCCC31.addEventListener('click', debugFCCC31);
} else {
  scopeFCCC31.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C32: Use Capture Groups to Search and Replace */
/* ############################################################ */

/* Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match. You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something. */

let wrongText = "The sky is gold.";
let textRegex = /gold/;
let repairedText = wrongText.replace(textRegex, "blue");

/* The replace call would return the string The sky is blue. You can also access capture groups in the replacement string with dollar signs ($). */

"Ay Lmao".replace(/(\w+)\s(\w+)/, '$2 $1');

/* OUTPUT CODE */

const btnFCCC32 = document.getElementById('run-fcc-task-c32');
const scopeFCCC32 = document.getElementById('fcc-task-c32');

function debugFCCC32() {
  scopeFCCC32.innerHTML = `${outputResponse} Text replacement: ${repairedText}.`;
}

if (btnFCCC32 !== null && scopeFCCC32 !== null) {
  btnFCCC32.addEventListener('click', debugFCCC32);
} else {
  scopeFCCC32.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################################################ */
/* Task C33: Remove Whitespace from Start and End */
/* ############################################################ */

/* Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it. */

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let wsResult = hello.replace(wsRegex, "");

/* OUTPUT CODE */

const btnFCCC33 = document.getElementById('run-fcc-task-c33');
const scopeFCCC33 = document.getElementById('fcc-task-c33');

function debugFCCC33() {
  scopeFCCC33.innerHTML = `${outputResponse} Repaired text: ${wsResult}.`;
}

if (btnFCCC33 !== null && scopeFCCC33 !== null) {
  btnFCCC33.addEventListener('click', debugFCCC33);
} else {
  scopeFCCC33.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}
