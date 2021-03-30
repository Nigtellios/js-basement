/* Free Code Camp Tasks */

/* ############################# */
/* ######## ECMAScript 5 ####### */
/* ############################# */

/* BASE -> FUNCTION OUTPUT SETUP */

/* const btnFCCX = document.getElementById('run-fcc-task-X');
const scopeFCCX = document.getElementById('fcc-task-X');

function debugFccX() {
  scopeFCCX.innerHTML = outputResponse + someVariable;
}

if (btnFCCX !== null && scopeFCCX !== null) {
  btnFCCX.addEventListener('click', debugFccX);
} else {
  scopeFCCX.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
} */

let outputResponse = "Output: ";

/* Task 1: Basic JavaScript: Comment Your JavaScript Code */

// in-line comment
/* multi
line
comment */

/* Task 2: Basic JavaScript: Declare JavaScript Variables */

// 8 Different data types: undefined, null, boolean, string, symbol, bigint, number, and object.

var myName_T2;
myName_T2 = "Jakub";

/* OUTPUT CODE */

const btnFCC2 = document.getElementById('run-fcc-task-2');
const scopeFCC2 = document.getElementById('fcc-task-2');

function debugFCC2() {
  scopeFCC2.innerHTML = outputResponse + myName_T2;
}

if (btnFCC2 !== null && scopeFCC2 !== null) {
  btnFCC2.addEventListener('click', debugFCC2);
} else {
  scopeFCC2.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 3: Basic JavaScript: Storing Values with the Assignment Operator */

var a_T3;
a_T3 = 7; // Now a stores value of 7. Any calculations to the right of = operator are performed
// on the left of the operator. Like +=, -= etc.

/* OUTPUT CODE */

const btnFCC3 = document.getElementById('run-fcc-task-3');
const scopeFCC3 = document.getElementById('fcc-task-3');

function debugFCC3() {
  scopeFCC3.innerHTML = outputResponse + a_T3;
}

if (btnFCC3 !== null && scopeFCC3 !== null) {
  btnFCC3.addEventListener('click', debugFCC3);
} else {
  scopeFCC3.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 4: Basic JavaScript: Assigning the Value of One Variable to Another */

var a_T4;
a_T4 = 7;
var b_T4;
b_T4 = a_T4;

/* OUTPUT CODE */

const btnFCC4 = document.getElementById('run-fcc-task-4');
const scopeFCC4 = document.getElementById('fcc-task-4');

function debugFCC4() {
  scopeFCC4.innerHTML = outputResponse + a_T4 + ', ' + b_T4;
}

if (btnFCC4 !== null && scopeFCC4 !== null) {
  btnFCC4.addEventListener('click', debugFCC4);
} else {
  scopeFCC4.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 5: Basic JavaScript: Initializing Variables with the Assignment Operator */

var a_T5 = 9; //Now it's the inital value of variable a.

/* OUTPUT CODE */

const btnFCC5 = document.getElementById('run-fcc-task-5');
const scopeFCC5 = document.getElementById('fcc-task-5');

function debugFCC5() {
  scopeFCC5.innerHTML = outputResponse + a_T5;
}

if (btnFCC5 !== null && scopeFCC5 !== null) {
  btnFCC5.addEventListener('click', debugFCC5);
} else {
  scopeFCC5.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 6: Basic JavaScript: Understanding Uninitialized Variables */

// When JavaScript variables are declared, they have an initial value of undefined.
// If you do a mathematical operation on an undefined variable your result will
// be NaN which means "Not a Number". If you concatenate a string with an undefined
// variable, you will get a literal string of "undefined".

var a_T6;
var b_T6;
var c_T6;

a_T6 = 5;
b_T6 = 10;
c_T6 = "I am a";

/* OUTPUT CODE */

const btnFCC6 = document.getElementById('run-fcc-task-6');
const scopeFCC6 = document.getElementById('fcc-task-6');

function debugFCC6() {
  scopeFCC6.innerHTML = outputResponse + a_T6 + ', ' + b_T6 + ', ' + c_T6;
}

if (btnFCC6 !== null && scopeFCC6 !== null) {
  btnFCC6.addEventListener('click', debugFCC6);
} else {
  scopeFCC6.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 7: Understanding Case Sensitivity in Variables */

// JS is Case Sensitive, capitalization matters. It is best practice to use camelCase.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* OUTPUT CODE */

const btnFCC7 = document.getElementById('run-fcc-task-7');
const scopeFCC7 = document.getElementById('fcc-task-7');

function debugFCC7() {
  scopeFCC7.innerHTML = outputResponse + studlyCapVar + ', ' + properCamelCase + ', ' + titleCaseOver;
}

if (btnFCC7 !== null && scopeFCC7 !== null) {
  btnFCC7.addEventListener('click', debugFCC7);
} else {
  scopeFCC7.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 8: Basic JavaScript: Add Two Numbers with JavaScript */

var sum_T8 = 10 + 10; // 20

/* OUTPUT CODE */

const btnFCC8 = document.getElementById('run-fcc-task-8');
const scopeFCC8 = document.getElementById('fcc-task-8');

function debugFCC8() {
  scopeFCC8.innerHTML = outputResponse + sum_T8;
}

if (btnFCC8 !== null && scopeFCC8 !== null) {
  btnFCC8.addEventListener('click', debugFCC8);
} else {
  scopeFCC8.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 9: Basic JavaScript: Subtract One Number from Another with JavaScript */

var difference_T9 = 45 - 33; // 12

/* OUTPUT CODE */

const btnFCC9 = document.getElementById('run-fcc-task-9');
const scopeFCC9 = document.getElementById('fcc-task-9');

function debugFCC9() {
  scopeFCC9.innerHTML = outputResponse + difference_T9;
}

if (btnFCC9 !== null && scopeFCC9 !== null) {
  btnFCC9.addEventListener('click', debugFCC9);
} else {
  scopeFCC9.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 10: Basic JavaScript: Multiply Two Numbers with JavaScript */

var product_T10 = 8 * 10; // 80

/* OUTPUT CODE */

const btnFCC10 = document.getElementById('run-fcc-task-10');
const scopeFCC10 = document.getElementById('fcc-task-10');

function debugFCC10() {
  scopeFCC10.innerHTML = outputResponse + product_T10;
}

if (btnFCC10 !== null && scopeFCC10 !== null) {
  btnFCC10.addEventListener('click', debugFCC10);
} else {
  scopeFCC10.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 11: Basic JavaScript: Divide One Number by Another with JavaScript */

var quotient_T11 = 66 / 33; // 2

/* OUTPUT CODE */

const btnFCC11 = document.getElementById('run-fcc-task-11');
const scopeFCC11 = document.getElementById('fcc-task-11');

function debugFCC11() {
  scopeFCC11.innerHTML = outputResponse + quotient_T11;
}

if (btnFCC11 !== null && scopeFCC11 !== null) {
  btnFCC11.addEventListener('click', debugFCC11);
} else {
  scopeFCC11.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 12: Basic JavaScript: Increment a Number with JavaScript */

var myVar_T12 = 87;
myVar_T12++;

/* OUTPUT CODE */

const btnFCC12 = document.getElementById('run-fcc-task-12');
const scopeFCC12 = document.getElementById('fcc-task-12');

function debugFCC12() {
  scopeFCC12.innerHTML = outputResponse + myVar_T12;
}

if (btnFCC12 !== null && scopeFCC12 !== null) {
  btnFCC12.addEventListener('click', debugFCC12);
} else {
  scopeFCC12.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 13: Basic JavaScript: Decrement a Number with JavaScript */

var myVar_T13 = 11;
myVar_T13--; // 10

/* OUTPUT CODE */

const btnFCC13 = document.getElementById('run-fcc-task-13');
const scopeFCC13 = document.getElementById('fcc-task-13');

function debugFCC13() {
  scopeFCC13.innerHTML = outputResponse + myVar_T13;
}

if (btnFCC13 !== null && scopeFCC13 !== null) {
  btnFCC13.addEventListener('click', debugFCC13);
} else {
  scopeFCC13.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 14: Basic JavaScript: Create Decimal Numbers with JavaScript */

var myDecimal_T14 = 5.8;

/* OUTPUT CODE */

const btnFCC14 = document.getElementById('run-fcc-task-14');
const scopeFCC14 = document.getElementById('fcc-task-14');

function debugFCC14() {
  scopeFCC14.innerHTML = outputResponse + myDecimal_T14;
}

if (btnFCC14 !== null && scopeFCC14 !== null) {
  btnFCC14.addEventListener('click', debugFCC14);
} else {
  scopeFCC14.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 15: Basic JavaScript: Multiply Two Decimals with JavaScript */

var product_T15 = 2.0 * 2.5; // 5

/* OUTPUT CODE */

const btnFCC15 = document.getElementById('run-fcc-task-15');
const scopeFCC15 = document.getElementById('fcc-task-15');

function debugFCC15() {
  scopeFCC15.innerHTML = outputResponse + product_T15;
}

if (btnFCC15 !== null && scopeFCC15 !== null) {
  btnFCC15.addEventListener('click', debugFCC15);
} else {
  scopeFCC15.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 16: Basic JavaScript: Divide One Decimal by Another with JavaScript */

var quotient_T16 = 4.4 / 2.0; // 2.2

/* OUTPUT CODE */

const btnFCC16 = document.getElementById('run-fcc-task-16');
const scopeFCC16 = document.getElementById('fcc-task-16');

function debugFCC16() {
  scopeFCC16.innerHTML = outputResponse + quotient_T16;
}

if (btnFCC16 !== null && scopeFCC16 !== null) {
  btnFCC16.addEventListener('click', debugFCC16);
} else {
  scopeFCC16.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 17: Basic JavaScript: Finding a Remainder in JavaScript */

var remainder_T17;
remainder_T17 = 11;
remainder_T17 = remainder_T17 % 3; // 2

/* OUTPUT CODE */

const btnFCC17 = document.getElementById('run-fcc-task-17');
const scopeFCC17 = document.getElementById('fcc-task-17');

function debugFCC17() {
  scopeFCC17.innerHTML = outputResponse + remainder_T17;
}

if (btnFCC17 !== null && scopeFCC17 !== null) {
  btnFCC17.addEventListener('click', debugFCC17);
} else {
  scopeFCC17.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 18: Basic JavaScript: Compound Assignment With Augmented Addition */

var a_T18 = 3;
var b_T18 = 17;
var c_T18 = 12;

a_T18 += 12;
b_T18 += 9;
c_T18 += 7;

/* OUTPUT CODE */

const btnFCC18 = document.getElementById('run-fcc-task-18');
const scopeFCC18 = document.getElementById('fcc-task-18');

function debugFCC18() {
  scopeFCC18.innerHTML = outputResponse + a_T18 + ', ' + b_T18 + ', ' + c_T18;
}

if (btnFCC18 !== null && scopeFCC18 !== null) {
  btnFCC18.addEventListener('click', debugFCC18);
} else {
  scopeFCC18.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 19: Basic JavaScript: Compound Assignment With Augmented Subtraction */

var a_T19 = 11;
var b_T19 = 9;
var c_T19 = 3;

a_T19 -= 6;
b_T19 -= 15;
c_T19 -= 1;

/* OUTPUT CODE */

const btnFCC19 = document.getElementById('run-fcc-task-19');
const scopeFCC19 = document.getElementById('fcc-task-19');

function debugFCC19() {
  scopeFCC19.innerHTML = outputResponse + a_T19 + ', ' + b_T19 + ', ' + c_T19;
}

if (btnFCC19 !== null && scopeFCC19 !== null) {
  btnFCC19.addEventListener('click', debugFCC19);
} else {
  scopeFCC19.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 20: Basic JavaScript: Compound Assignment With Augmented Multiplication */

var a_T20 = 5;
var b_T20 = 12;
var c_T20 = 4.6;

a_T20 *= 5;
b_T20 *= 3;
c_T20 *= 10;

/* OUTPUT CODE */

const btnFCC20 = document.getElementById('run-fcc-task-20');
const scopeFCC20 = document.getElementById('fcc-task-20');

function debugFCC20() {
  scopeFCC20.innerHTML = outputResponse + a_T20 + ', ' + b_T20 + ', ' + c_T20;
}

if (btnFCC20 !== null && scopeFCC20 !== null) {
  btnFCC20.addEventListener('click', debugFCC20);
} else {
  scopeFCC20.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 21: Basic JavaScript: Compound Assignment With Augmented Division */

var a_T21 = 48;
var b_T21 = 108;
var c_T21 = 33;

a_T21 /= 12;
b_T21 /= 4;
c_T21 /= 11;


/* OUTPUT CODE */

const btnFCC21 = document.getElementById('run-fcc-task-21');
const scopeFCC21 = document.getElementById('fcc-task-21');

function debugFCC21() {
  scopeFCC21.innerHTML = outputResponse + a_T21 + ', ' + b_T21 + ', ' + c_T21;
}

if (btnFCC21 !== null && scopeFCC21 !== null) {
  btnFCC21.addEventListener('click', debugFCC21);
} else {
  scopeFCC21.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 22: Basic JavaScript: Declare String Variables */

var myFirstName_T22;
var myLastName_T22;

myFirstName_T22 = "Jakub";
myLastName_T22 = "Kowalski";

/* OUTPUT CODE */

const btnFCC22 = document.getElementById('run-fcc-task-22');
const scopeFCC22 = document.getElementById('fcc-task-22');

function debugFCC22() {
  scopeFCC22.innerHTML = outputResponse + myFirstName_T22 + myLastName_T22;
}

if (btnFCC22 !== null && scopeFCC22 !== null) {
  btnFCC22.addEventListener('click', debugFCC22);
} else {
  scopeFCC22.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 23: Basic JavaScript: Escaping Literal Quotes in Strings */

// In JavaScript, you can escape a quote from considering it as an end of string quote by
// placing a backslash (\) in front of the quote.

var myStr_T23 = "I am a \"double quoted\" string inside \"double quotes\".";

/* OUTPUT CODE */

const btnFCC23 = document.getElementById('run-fcc-task-23');
const scopeFCC23 = document.getElementById('fcc-task-23');

function debugFCC23() {
  scopeFCC23.innerHTML = outputResponse + myStr_T23;
}

if (btnFCC23 !== null && scopeFCC23 !== null) {
  btnFCC23.addEventListener('click', debugFCC23);
} else {
  scopeFCC23.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 24: Basic JavaScript: Quoting Strings with Single Quotes */

// Remember, a string has the same kind of quote at the beginning and end.
// But if you have that same quote somewhere in the middle, the string will stop early and throw an error.
// That's why we can use single quotes in strings too.

var myStr_T24 = '<a href="http://www.example.com" target="_blank">Link</a>';

/* OUTPUT CODE */

const btnFCC24 = document.getElementById('run-fcc-task-24');
const scopeFCC24 = document.getElementById('fcc-task-24');

function debugFCC24() {
  scopeFCC24.innerHTML = outputResponse + myStr_T24;
}

if (btnFCC24 !== null && scopeFCC24 !== null) {
  btnFCC24.addEventListener('click', debugFCC24);
} else {
  scopeFCC24.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 25: Basic JavaScript: Escape Sequences in Strings */

var myStr_T25 = "FirstLine\n\t\\SecondLine\nThirdLine";

/* OUTPUT CODE */

const btnFCC25 = document.getElementById('run-fcc-task-25');
const scopeFCC25 = document.getElementById('fcc-task-25');

function debugFCC25() {
  scopeFCC25.innerHTML = outputResponse + myStr_T25;
}

if (btnFCC25 !== null && scopeFCC25 !== null) {
  btnFCC25.addEventListener('click', debugFCC25);
} else {
  scopeFCC25.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 26: Basic JavaScript: Concatenating Strings with Plus Operator */

var myStr_T26 = "This is the start. " + "This is the end.";

/* OUTPUT CODE */

const btnFCC26 = document.getElementById('run-fcc-task-26');
const scopeFCC26 = document.getElementById('fcc-task-26');

function debugFCC26() {
  scopeFCC26.innerHTML = outputResponse + myStr_T26;
}

if (btnFCC26 !== null && scopeFCC26 !== null) {
  btnFCC26.addEventListener('click', debugFCC26);
} else {
  scopeFCC26.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 27: Basic JavaScript: Concatenating Strings with the Plus Equals Operator */

var myStr_T27 = "This is the first sentence. ";
myStr_T27 += "This is the second sentence.";

/* OUTPUT CODE */

const btnFCC27 = document.getElementById('run-fcc-task-27');
const scopeFCC27 = document.getElementById('fcc-task-27');

function debugFCC27() {
  scopeFCC27.innerHTML = outputResponse + myStr_T27;
}

if (btnFCC27 !== null && scopeFCC27 !== null) {
  btnFCC27.addEventListener('click', debugFCC27);
} else {
  scopeFCC27.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 28: Basic JavaScript: Constructing Strings with Variables */

var myName_T28 = "Jakub";
var myStr_T28 = "My name is " + myName_T28 + " and I am well!";

/* OUTPUT CODE */

const btnFCC28 = document.getElementById('run-fcc-task-28');
const scopeFCC28 = document.getElementById('fcc-task-28');

function debugFCC28() {
  scopeFCC28.innerHTML = outputResponse + myStr_T28;
}

if (btnFCC28 !== null && scopeFCC28 !== null) {
  btnFCC28.addEventListener('click', debugFCC28);
} else {
  scopeFCC28.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 29: Basic JavaScript: Appending Variables to Strings */

var someAdjective_T29 = "Okay";
var myStr_T29 = "Learning to code is ";
var _T29response = myStr_T29 += someAdjective_T29;

/* OUTPUT CODE */

const btnFCC29 = document.getElementById('run-fcc-task-29');
const scopeFCC29 = document.getElementById('fcc-task-29');

function debugFCC29() {
  scopeFCC29.innerHTML = outputResponse + _T29response;
}

if (btnFCC29 !== null && scopeFCC29 !== null) {
  btnFCC29.addEventListener('click', debugFCC29);
} else {
  scopeFCC29.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 30: Basic JavaScript: Find the Length of a String */

var lastNameLength_T30 = 0;
var lastName_T30 = "Lovelace";
lastNameLength_T30 = lastName_T30.length;

/* OUTPUT CODE */

const btnFCC30 = document.getElementById('run-fcc-task-30');
const scopeFCC30 = document.getElementById('fcc-task-30');

function debugFCC30() {
  scopeFCC30.innerHTML = outputResponse + lastNameLength_T30;
}

if (btnFCC30 !== null && scopeFCC30 !== null) {
  btnFCC30.addEventListener('click', debugFCC30);
} else {
  scopeFCC30.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 31: Basic JavaScript: Use Bracket Notation to Find the First Character in a String */

var firstLetterOfLastName_T31 = "";
var lastName_T31 = "Lovelace";
firstLetterOfLastName_T31 = lastName_T31[0]; // L

/* OUTPUT CODE */

const btnFCC31 = document.getElementById('run-fcc-task-31');
const scopeFCC31 = document.getElementById('fcc-task-31');

function debugFCC31() {
  scopeFCC31.innerHTML = outputResponse + firstLetterOfLastName_T31;
}

if (btnFCC31 !== null && scopeFCC31 !== null) {
  btnFCC31.addEventListener('click', debugFCC31);
} else {
  scopeFCC31.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 32: Basic JavaScript: Understand String Immutability */

var myStr_T32 = "Jello World";
myStr_T32[0] = "H";
// ^It can't be done, strings are immutable. Proper way is below.
myStr_T32 = "Hello World";

/* OUTPUT CODE */

const btnFCC32 = document.getElementById('run-fcc-task-32');
const scopeFCC32 = document.getElementById('fcc-task-32');

function debugFCC32() {
  scopeFCC32.innerHTML = outputResponse + myStr_T32;
}

if (btnFCC32 !== null && scopeFCC32 !== null) {
  btnFCC32.addEventListener('click', debugFCC32);
} else {
  scopeFCC32.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 33: Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String */

var lastName_T33 = "Kowalsky";

var thirdLetterOfLastName_T33 = lastName_T33[2]; // third letter - w

/* OUTPUT CODE */

const btnFCC33 = document.getElementById('run-fcc-task-33');
const scopeFCC33 = document.getElementById('fcc-task-33');

function debugFCC33() {
  scopeFCC33.innerHTML = outputResponse + thirdLetterOfLastName_T33;
}

if (btnFCC33 !== null && scopeFCC33 !== null) {
  btnFCC33.addEventListener('click', debugFCC33);
} else {
  scopeFCC33.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 34: Basic JavaScript: Use Bracket Notation to Find the Last Character in a String */

var lastLetterOfLastName_T34 = lastName_T33[lastName_T33.length - 1];

/* OUTPUT CODE */

const btnFCC34 = document.getElementById('run-fcc-task-34');
const scopeFCC34 = document.getElementById('fcc-task-34');

function debugFCC34() {
  scopeFCC34.innerHTML = outputResponse + lastLetterOfLastName_T34;
}

if (btnFCC34 !== null && scopeFCC34 !== null) {
  btnFCC34.addEventListener('click', debugFCC34);
} else {
  scopeFCC34.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 35: Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String */

var secondToLastLetterOfLastName_T33 = lastName_T33[lastName_T33.length - 2];

/* OUTPUT CODE */

const btnFCC35 = document.getElementById('run-fcc-task-35');
const scopeFCC35 = document.getElementById('fcc-task-35');

function debugFCC35() {
  scopeFCC35.innerHTML = outputResponse + secondToLastLetterOfLastName_T33;
}

if (btnFCC35 !== null && scopeFCC35 !== null) {
  btnFCC35.addEventListener('click', debugFCC35);
} else {
  scopeFCC35.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 36: Basic JavaScript: Word Blanks */

var myNoun_T36 = "dog";
var myAdjective_T36 = "big";
var myVerb_T36 = "ran";
var myAdverb_T36 = "quickly";

var wordBlanks_T36 = "The " + myNoun_T36 + " was " + myAdjective_T36 + " and he just " + myVerb_T36 + " very " + myAdverb_T36;

/* OUTPUT CODE */

const btnFCC36 = document.getElementById('run-fcc-task-36');
const scopeFCC36 = document.getElementById('fcc-task-36');

function debugFCC36() {
  scopeFCC36.innerHTML = outputResponse + wordBlanks_T36;
}

if (btnFCC36 !== null && scopeFCC36 !== null) {
  btnFCC36.addEventListener('click', debugFCC36);
} else {
  scopeFCC36.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 37: Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays */

var myArray_T37 = ["LeMoiJelly", 0];

/* OUTPUT CODE */

const btnFCC37 = document.getElementById('run-fcc-task-37');
const scopeFCC37 = document.getElementById('fcc-task-37');

function debugFCC37() {
  scopeFCC37.innerHTML = outputResponse + myArray_T37[0] + ', ' + myArray_T37[1];
}

if (btnFCC37 !== null && scopeFCC37 !== null) {
  btnFCC37.addEventListener('click', debugFCC37);
} else {
  scopeFCC37.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 38: Basic JavaScript: Nest one Array within Another Array */

var myArray_T38 = [["Nested Array", 0]];

/* OUTPUT CODE */

const btnFCC38 = document.getElementById('run-fcc-task-38');
const scopeFCC38 = document.getElementById('fcc-task-38');

function debugFCC38() {
  scopeFCC38.innerHTML = outputResponse + myArray_T38[0][0] + ', ' + myArray_T38[0][1];
}

if (btnFCC38 !== null && scopeFCC38 !== null) {
  btnFCC38.addEventListener('click', debugFCC38);
} else {
  scopeFCC38.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 39: Basic JavaScript: Access Array Data with Indexes */

var myArray_T39 = [50,60,70];
var myData_T39 = myArray_T39[0]; // 50

/* OUTPUT CODE */

const btnFCC39 = document.getElementById('run-fcc-task-39');
const scopeFCC39 = document.getElementById('fcc-task-39');

function debugFCC39() {
  scopeFCC39.innerHTML = outputResponse + myData_T39;
}

if (btnFCC39 !== null && scopeFCC39 !== null) {
  btnFCC39.addEventListener('click', debugFCC39);
} else {
  scopeFCC39.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 40: Basic JavaScript: Modify Array Data With Indexes */

var myArray_T40 = [18,64,99];
myArray_T40[0] = 45; // now index 0 is 45 instead of 18

/* OUTPUT CODE */

const btnFCC40 = document.getElementById('run-fcc-task-40');
const scopeFCC40 = document.getElementById('fcc-task-40');

function debugFCC40() {
  scopeFCC40.innerHTML = outputResponse + myArray_T40[0];
}

if (btnFCC40 !== null && scopeFCC40 !== null) {
  btnFCC40.addEventListener('click', debugFCC40);
} else {
  scopeFCC40.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 41: Basic JavaScript: Access Multi-Dimensional Arrays With Indexes */

var myArray_T41 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// We are going for item with value 8, so:
var myData_T41 = myArray_T41[2][1];

/* OUTPUT CODE */

const btnFCC41 = document.getElementById('run-fcc-task-41');
const scopeFCC41 = document.getElementById('fcc-task-41');

function debugFCC41() {
  scopeFCC41.innerHTML = outputResponse + myData_T41;
}

if (btnFCC41 !== null && scopeFCC41 !== null) {
  btnFCC41.addEventListener('click', debugFCC41);
} else {
  scopeFCC41.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 42: Basic JavaScript: Manipulate Arrays With push() */

var myArray_T42 = [["John", 23], ["cat", 2]];
myArray_T42.push(["dog", 3]);

/* OUTPUT CODE */

const btnFCC42 = document.getElementById('run-fcc-task-42');
const scopeFCC42 = document.getElementById('fcc-task-42');

function debugFCC42() {
  scopeFCC42.innerHTML = outputResponse + myArray_T42;
}

if (btnFCC42 !== null && scopeFCC42 !== null) {
  btnFCC42.addEventListener('click', debugFCC42);
} else {
  scopeFCC42.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 43: Basic JavaScript: Manipulate Arrays With pop() */

var myArray_T43 = [["John", 23], ["cat", 2]];
var removedFromMyArray_T43 = myArray_T43.pop();
// So now we assigned .poped value to variable removedFromMyArray

/* OUTPUT CODE */

const btnFCC43 = document.getElementById('run-fcc-task-43');
const scopeFCC43 = document.getElementById('fcc-task-43');

function debugFCC43() {
  scopeFCC43.innerHTML = outputResponse + removedFromMyArray_T43;
}

if (btnFCC43 !== null && scopeFCC43 !== null) {
  btnFCC43.addEventListener('click', debugFCC43);
} else {
  scopeFCC43.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 44: Basic JavaScript: Manipulate Arrays With shift() */

var myArray_T44 = [["John", 23], ["dog", 3]];
var removedFromMyArray_T44 = myArray_T44.shift();
// Now removedFromMyArray_T44 has ["John", 23]

/* OUTPUT CODE */

const btnFCC44 = document.getElementById('run-fcc-task-44');
const scopeFCC44 = document.getElementById('fcc-task-44');

function debugFCC44() {
  scopeFCC44.innerHTML = outputResponse + removedFromMyArray_T44;
}

if (btnFCC44 !== null && scopeFCC44 !== null) {
  btnFCC44.addEventListener('click', debugFCC44);
} else {
  scopeFCC44.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 45: Basic JavaScript: Manipulate Arrays With unshift() */

var myArray_T45 = [["John", 23], ["dog", 3]];
myArray_T45.shift();
myArray_T45.unshift(["Paul", 35]);
// Now we have also ["Paul", 35] at the beginning of array myArray

/* OUTPUT CODE */

const btnFCC45 = document.getElementById('run-fcc-task-45');
const scopeFCC45 = document.getElementById('fcc-task-45');

function debugFCC45() {
  scopeFCC45.innerHTML = outputResponse + myArray_T45;
}

if (btnFCC45 !== null && scopeFCC45 !== null) {
  btnFCC45.addEventListener('click', debugFCC45);
} else {
  scopeFCC45.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 46: Basic JavaScript: Shopping List */

var myList_T46 = [["Milk", 3], ["Butter", 8], ["Chicken Leg", 10], ["Vodka", 40], ["Pen", 5]];

/* OUTPUT CODE */

const btnFCC46 = document.getElementById('run-fcc-task-46');
const scopeFCC46 = document.getElementById('fcc-task-46');

function debugFCC46() {
  scopeFCC46.innerHTML = outputResponse + "First position is: " + myList_T46[0][0] + ', and its price is ' + myList_T46[0][1] + 'zl.';
}

if (btnFCC46 !== null && scopeFCC46 !== null) {
  btnFCC46.addEventListener('click', debugFCC46);
} else {
  scopeFCC46.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 47: Basic JavaScript: Write Reusable JavaScript with Functions */

function reusableFunction_T47() {
  return "Hi World";
}

reusableFunction_T47(); // We need to call the function

/* OUTPUT CODE */

const btnFCC47 = document.getElementById('run-fcc-task-47');
const scopeFCC47 = document.getElementById('fcc-task-47');

function debugFCC47() {
  scopeFCC47.innerHTML = outputResponse + reusableFunction_T47();
}

if (btnFCC47 !== null && scopeFCC47 !== null) {
  btnFCC47.addEventListener('click', debugFCC47);
} else {
  scopeFCC47.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 48: Basic JavaScript: Passing Values to Functions with Arguments */

function functionWithArgs_T48(arg1_T48, arg2_T48) {
  return arg1_T48 + arg2_T48; // It outputs sum of arg1 and arg2
}

functionWithArgs_T48(3, 16);

/* OUTPUT CODE */

const btnFCC48 = document.getElementById('run-fcc-task-48');
const scopeFCC48 = document.getElementById('fcc-task-48');

function debugFCC48() {
  scopeFCC48.innerHTML = outputResponse + functionWithArgs_T48(8, 12);
}

if (btnFCC48 !== null && scopeFCC48 !== null) {
  btnFCC48.addEventListener('click', debugFCC48);
} else {
  scopeFCC48.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 49: Basic JavaScript: Global Scope and Functions */

var myGlobal_T49 = 10;

function fun_T49() {
  var oopsGlobal_T49 = 5; // oopsGlobal is defined without var so it has Global scope.
}

function fun2_T49() {
  var output_T49 = "";
  if (typeof myGlobal_T49 != "undefined") {
    output_T49 += "myGlobal: " + myGlobal_T49;
  }
  if (typeof oopsGlobal_T49 != "undefined") {
    output_T49 += " oopsGlobal: " + oopsGlobal_T49;
  }
  return "Task 49: " + output_T49;
}

fun2_T49();

/* OUTPUT CODE */

const btnFCC49 = document.getElementById('run-fcc-task-49');
const scopeFCC49 = document.getElementById('fcc-task-49');

function debugFCC49() {
  scopeFCC49.innerHTML = outputResponse + fun2_T49();
}

if (btnFCC49 !== null && scopeFCC49 !== null) {
  btnFCC49.addEventListener('click', debugFCC49);
} else {
  scopeFCC49.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 50: Basic JavaScript: Local Scope and Functions */

/* Variables declared within a function, as well as function parameters itself has local scope. They are only visible within that function. */

function letsTestIt() {
  var loc = "foo";
  return "Task 50: " + loc;
}

letsTestIt(); //log "foo"
// return "Task 50: " + loc; // is not defined because of local scope

/* OUTPUT CODE */

const btnFCC50 = document.getElementById('run-fcc-task-50');
const scopeFCC50 = document.getElementById('fcc-task-50');

function debugFCC50() {
  scopeFCC50.innerHTML = outputResponse + letsTestIt();
}

if (btnFCC50 !== null && scopeFCC50 !== null) {
  btnFCC50.addEventListener('click', debugFCC50);
} else {
  scopeFCC50.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 51: Global vs. Local Scope in Functions */

/* However, it is possible to have both local and global variables with the same name. If we declare anything this way, the local variable takes precedence over the global variable. */

const globalOne = "What";
function locTest() {
  var globalOne = "World";
  return globalOne;
}

/* OUTPUT CODE */

const btnFCC51 = document.getElementById('run-fcc-task-51');
const scopeFCC51 = document.getElementById('fcc-task-51');

function debugFCC51() {
  scopeFCC51.innerHTML = outputResponse + locTest();
}

if (btnFCC51 !== null && scopeFCC51 !== null) {
  btnFCC51.addEventListener('click', debugFCC51);
} else {
  scopeFCC51.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* But as far as I see, in ES6+ now the local one just doesn't work and the final value is „What". */

/* Task 52: Return a Value from a Function with Return */

/* We can pass values into a function with arguments. You can use a return statement to send a value back out of a function. */

function plusVal52(pv52Arg) {
  return pv52Arg + 3;
}

const pv52Answer = plusVal52(10);

/* OUTPUT CODE */

const btnFCC52 = document.getElementById('run-fcc-task-52');
const scopeFCC52 = document.getElementById('fcc-task-52');

function debugFCC52() {
  scopeFCC52.innerHTML = outputResponse + pv52Answer;
}

if (btnFCC52 !== null && scopeFCC52 !== null) {
  btnFCC52.addEventListener('click', debugFCC52);
} else {
  scopeFCC52.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 53: Understanding Undefined Value returned from a Function */

/* Function can include the return statement but it does not have to. In this case when you call this function it would process inner code but returned value would be undefined. */

var checkSum = 0;

function notDefined(sumNum) {
  checkSum = checkSum + sumNum;
}

notDefined(5);

/* OUTPUT CODE */

const btnFCC53 = document.getElementById('run-fcc-task-53');
const scopeFCC53 = document.getElementById('fcc-task-53');

function debugFCC53() {
  scopeFCC53.innerHTML = outputResponse + checkSum;
}

if (btnFCC53 !== null && scopeFCC53 !== null) {
  btnFCC53.addEventListener('click', debugFCC53);
} else {
  scopeFCC53.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* But as far as I see, in ES6+ now it can not return anything so the output of checkSum would be 5. */

/* Task 54: Assignment with a Returned Value */

/* In JS everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable. */

var process = 0;

function passProcess(number) {
  return (number + 10)/5;
}

process = passProcess(100);
//We are assigning returned value to variable.

/* OUTPUT CODE */

const btnFCC54 = document.getElementById('run-fcc-task-54');
const scopeFCC54 = document.getElementById('fcc-task-54');

function debugFCC54() {
  scopeFCC54.innerHTML = outputResponse + process;
}

if (btnFCC54 !== null && scopeFCC54 !== null) {
  btnFCC54.addEventListener('click', debugFCC54);
} else {
  scopeFCC54.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 55: Stand in Line (QUEUE) */

/* In Computer Science a QUEUE is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue. */

/* First of all, we want to add the number to the end of array, then remove the first element of the array. */

function pushArray(arr, arrItem) {
  testArray.push(arrItem);
  var arrItem = testArray.shift();
  return arrItem;
}

var testArray = [1,2,3,4,5];

/* OUTPUT CODE */

const btnFCC55 = document.getElementById('run-fcc-task-55');
const scopeFCC55 = document.getElementById('fcc-task-55');

function debugFCC55() {
  scopeFCC55.innerHTML = outputResponse + JSON.stringify(testArray) + ', ' + pushArray(testArray, 6) + ', ' + JSON.stringify(testArray);
}

if (btnFCC55 !== null && scopeFCC55 !== null) {
  btnFCC55.addEventListener('click', debugFCC55);
} else {
  scopeFCC55.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 56: Understanding Boolean Values */

/* Boolean is another data type. They may only be one of two values: true or false. They are basically little on-off switches, there TRUE is ON, and FALSE is OFF. These two states are mutually exclusive. Booleans are never written with QUOTES! */

function booleanTest() {
  return true;
  //Only thing that we want is to return TRUE.
}

var bT = booleanTest();

/* OUTPUT CODE */

const btnFCC56 = document.getElementById('run-fcc-task-56');
const scopeFCC56 = document.getElementById('fcc-task-56');

function debugFCC56() {
  scopeFCC56.innerHTML = outputResponse + bT;
}

if (btnFCC56 !== null && scopeFCC56 !== null) {
  btnFCC56.addEventListener('click', debugFCC56);
} else {
  scopeFCC56.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 57: Use Conditional Logic with If Statements */

/* If statements are used to make decisions in code. The keyword If tells JavaScript to execute the code in curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false. When condition will be true -> code in curly brackets will execute statements inside them, while FALSE -> they will not. */

function testIfs(testIfsCondition) {
  if(testIfsCondition) {
    return "This condition was true";
  }
  //Otherwise
  return "This condition was false";
}

/* OUTPUT CODE */

const btnFCC57 = document.getElementById('run-fcc-task-57');
const scopeFCC57 = document.getElementById('fcc-task-57');

function debugFCC57() {
  scopeFCC57.innerHTML = outputResponse + testIfs(true) + ', ' + testIfs(false);
}

if (btnFCC57 !== null && scopeFCC57 !== null) {
  btnFCC57.addEventListener('click', debugFCC57);
} else {
  scopeFCC57.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 58: Comparison with the Equality Operator */

/* There are many comparison operators in JS. All of these operators return a boolean true or false. The most basic operator is equality == and it compares two values and returns true if they're equivalent or false if they are not. */

function testEqual(testEqualVal) {
  if (testEqualVal == 50) {
    return "Your testEqualVal is equivalent to value of 50.";
  }
  return "Your testEqualVal isn't equivalent to value of 50.";
}

/* OUTPUT CODE */

const btnFCC58 = document.getElementById('run-fcc-task-58');
const scopeFCC58 = document.getElementById('fcc-task-58');

function debugFCC58() {
  scopeFCC58.innerHTML = outputResponse + testEqual(50);
}

if (btnFCC58 !== null && scopeFCC58 !== null) {
  btnFCC58.addEventListener('click', debugFCC58);
} else {
  scopeFCC58.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 59: Comparison with the Strict Equality Operator */

/* Strict equality === is the counterpart to the equality operator ==. However, unlike the equality operator which attempts to convert both values being compared to a common type, the strict equality operator DOES NOT perform a type conversion. */

function testStrict(testStrictVal) {
  if(testStrictVal === "XD") {
    return "Your testStrictVal is equal and the same type of XD String";
  }
  return "Your testStrictVal is NOT EQUAL and the NOT same type of XD String";
}

/* OUTPUT CODE */

const btnFCC59 = document.getElementById('run-fcc-task-59');
const scopeFCC59 = document.getElementById('fcc-task-59');

function debugFCC59() {
  scopeFCC59.innerHTML = outputResponse + testStrict("XD");
}

if (btnFCC59 !== null && scopeFCC59 !== null) {
  btnFCC59.addEventListener('click', debugFCC59);
} else {
  scopeFCC59.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 60: Practice comparing different values */

/* In JS you can determine the type of a variable or a value with TYPEOF operator */

var comp1 = 5;
var comp2 = '5';

function compareComps(comp1, comp2) {
  if (comp1 === comp2) {
    return "comp1 and comp2 are equal";
  }
  return "comp1 and comp2 are not equal";
}

/* OUTPUT CODE */

const btnFCC60 = document.getElementById('run-fcc-task-60');
const scopeFCC60 = document.getElementById('fcc-task-60');

function debugFCC60() {
  scopeFCC60.innerHTML = outputResponse + compareComps(5, '5');
}

if (btnFCC60 !== null && scopeFCC60 !== null) {
  btnFCC60.addEventListener('click', debugFCC60);
} else {
  scopeFCC60.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 61: Comparison with inqeuality operator */

/* The inequality operator (!=) is the opposite of the equality operator. It means „Not Equal". and returns false where equality would return true and vice versa. The same like equality operator, the inequality operator will convert data types of values while comparing. */

function testNotEqual(testNotEqualVal) {
  if(testNotEqualVal != 99) {
    return "TestNotEqual Value isn't equal 99."
  }
  return "TNEV is equal."
}

/* OUTPUT CODE */

const btnFCC61 = document.getElementById('run-fcc-task-61');
const scopeFCC61 = document.getElementById('fcc-task-61');

function debugFCC61() {
  scopeFCC61.innerHTML = outputResponse + testNotEqual(98);
}

if (btnFCC61 !== null && scopeFCC61 !== null) {
  btnFCC61.addEventListener('click', debugFCC61);
} else {
  scopeFCC61.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 62: Comparison with Strict Inequality Operator */

/* Strict inequality operator (!==) is the logical opposite of the strict equality operator. „Stricty Not Equal" returns FALSE where strict equality woulr return true and vice versa. IT WILL NOT CONVERT DATA TYPES. */

function testStrictNotEqual(testStrictNotEqualVal) {
  if(testStrictNotEqualVal !== 564) {
    return "testStrictNotEqualVal isn't equal 564.";
  }
  return "testStrictNotEqualVal is equal 564.";
}

/* OUTPUT CODE */

const btnFCC62 = document.getElementById('run-fcc-task-62');
const scopeFCC62 = document.getElementById('fcc-task-62');

function debugFCC62() {
  scopeFCC62.innerHTML = outputResponse + testStrictNotEqual(563);
}

if (btnFCC62 !== null && scopeFCC62 !== null) {
  btnFCC62.addEventListener('click', debugFCC62);
} else {
  scopeFCC62.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 63: Comparison with the Greater Than Operator */

/* The greater than (>) operator compares the values of two numbers and returns true if number to the left is greater than the number to the right. Otherwise it returns FALSE. It will convert data types of values while comparing. */

function testGreaterThan(testGreaterThanVal) {
  if(testGreaterThanVal > 500) {
    return "It's over 500.";
  }
  if(testGreaterThanVal > 100) {
    return "It's over 100.";
  }
  return "It's 100 or below.";
}

/* OUTPUT CODE */

const btnFCC63 = document.getElementById('run-fcc-task-63');
const scopeFCC63 = document.getElementById('fcc-task-63');

function debugFCC63() {
  scopeFCC63.innerHTML = outputResponse + testGreaterThan(301);
}

if (btnFCC63 !== null && scopeFCC63 !== null) {
  btnFCC63.addEventListener('click', debugFCC63);
} else {
  scopeFCC63.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 64: Comparison with the Greater Than or Equal To Operator */

/* The greater than (>=) operator compares the values of two numbers and returns true if number to the left is greater than the number to the right. Otherwise it returns FALSE. It will convert data types of values while comparing. */

function testGreaterOrEqual(testGreaterOrEqualVal) {
  if(testGreaterOrEqualVal >= 66) {
    return "Nice, it's equal to or greater than 66.";
  }
  if(testGreaterOrEqualVal >= 33) {
    return "Nice, it's equal to or greater than 33.";
  }
  return "It's less than 33.";
}

/* OUTPUT CODE */

const btnFCC64 = document.getElementById('run-fcc-task-64');
const scopeFCC64 = document.getElementById('fcc-task-64');

function debugFCC64() {
  scopeFCC64.innerHTML = outputResponse + testGreaterOrEqual(20);
}

if (btnFCC64 !== null && scopeFCC64 !== null) {
  btnFCC64.addEventListener('click', debugFCC64);
} else {
  scopeFCC64.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 65: Comparison with the Less Than Operator */

/* Less Than operator compares two values and if value tothe left is less than number to the right, it returns true. It does convert data types while comparing. */

function testLessThan(testLessThanVal) {
  if(testLessThanVal < 55) {
    return "It's under 55.";
  }
  if(testLessThanVal < 99) {
    return "It's under 99.";
  }
  return "It's 99 or over.";
}

/* OUTPUT CODE */

const btnFCC65 = document.getElementById('run-fcc-task-65');
const scopeFCC65 = document.getElementById('fcc-task-65');

function debugFCC65() {
  scopeFCC65.innerHTML = outputResponse + testLessThan(68);
}

if (btnFCC65 !== null && scopeFCC65 !== null) {
  btnFCC65.addEventListener('click', debugFCC65);
} else {
  scopeFCC65.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 66: Comparison with Less Than or Equal To Operator */

/* Less than or equal to operator (<=) compares the values of two numbers. if the number to the left is less than or equal to the number to the right, it will return TRUE. It converts data types. */

function testLessThanOrEqual(testLessThanOrEqualVal) {
  if(testLessThanOrEqualVal <= 19) {
    return "Smaller than or Equal to 12.";
  }
  if(testLessThanOrEqualVal <= 29) {
    return "Smaller than or Equal to 29.";
  }
  return "More than 29.";
}

/* OUTPUT CODE */

const btnFCC66 = document.getElementById('run-fcc-task-66');
const scopeFCC66 = document.getElementById('fcc-task-66');

function debugFCC66() {
  scopeFCC66.innerHTML = outputResponse + testLessThanOrEqual(68);
}

if (btnFCC66 !== null && scopeFCC66 !== null) {
  btnFCC66.addEventListener('click', debugFCC66);
} else {
  scopeFCC66.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 67: Comparisons with the Logical And Operator */

/* Sometimes we have to test more than one thing at a time. The logical AND operator (&&) returns TRUE if and only if the operands to the left and right of it are true. */

/* However, the same efect can be achieved by nesting an if statement inside another if. */

// if (nNum > 5) {
//   if (nNum < 10) {
//     return "Yes.";
//   }
// }
// return "No";

/* It will only return Yes if nNum is greater than 5 and less than 10. The same logic can be written as: */

// if (nNum > 5 && num < 10) {
//   return "Yes";
// }
// return "No";

function testLogicalAnd(testLogicalAndVal) {
  if(testLogicalAndVal > 10 && testLogicalAndVal < 50) {
    return "Greater than 10 while smaller than 50.";
  }
  return "Smaller than 10 or bigger than 50.";
}

/* OUTPUT CODE */

const btnFCC67 = document.getElementById('run-fcc-task-67');
const scopeFCC67 = document.getElementById('fcc-task-67');

function debugFCC67() {
  scopeFCC67.innerHTML = outputResponse + testLogicalAnd(60);
}

if (btnFCC67 !== null && scopeFCC67 !== null) {
  btnFCC67.addEventListener('click', debugFCC67);
} else {
  scopeFCC67.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 68: Comparisons with the Logical OR Operator */

/* The logical OR operator (||) returns true if either of the operands is TRUE. Otherwise it returns FALSE. It's composed of two pipe symbols ||. */

/* Let's write a function that would return GREAT when number would not be between 1 and 100. */

function testLogicalOr(testLogicalOrVal) {
  if(testLogicalOrVal > 1 || testLogicalOrVal < 100) {
    return "GREAT!";
  }
  return "Unfortunately, your number is between 1 and 100.";
}

/* OUTPUT CODE */

const btnFCC68 = document.getElementById('run-fcc-task-68');
const scopeFCC68 = document.getElementById('fcc-task-68');

function debugFCC68() {
  scopeFCC68.innerHTML = outputResponse + testLogicalOr(101);
}

if (btnFCC68 !== null && scopeFCC68 !== null) {
  btnFCC68.addEventListener('click', debugFCC68);
} else {
  scopeFCC68.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 69: Introducing Else Statements */

/* With else, we can execute code when previous IF condition is false. Normally, nothing special would happen if we just declare some boolean test inside if condition without ELSE. */

function testIfElse(testIfElseVal) {
  if(testIfElseVal === "password") {
    return "You are logged in!";
  } else {
    return "Your password is incorrect.";
  }
}

/* OUTPUT CODE */

const btnFCC69 = document.getElementById('run-fcc-task-69');
const scopeFCC69 = document.getElementById('fcc-task-69');

function debugFCC69() {
  scopeFCC69.innerHTML = outputResponse + testIfElse("harry");
}

if (btnFCC69 !== null && scopeFCC69 !== null) {
  btnFCC69.addEventListener('click', debugFCC69);
} else {
  scopeFCC69.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 70: Introducing Else If Statements */

/* If we have multiple conditions that needs to be addressed, we can chain if's statements together with else if statements. */

function testElseIf(testElseIfVal) {
  if(testElseIfVal === "email@mail.org") {
    return "Your recovery email has been send!";
  } else if (testElseIfVal === "email@mailorg") {
    return "There is an error in your email address.";
  } else {
    return "Your email address is incorrect";
  }
}

/* OUTPUT CODE */

const btnFCC70 = document.getElementById('run-fcc-task-70');
const scopeFCC70 = document.getElementById('fcc-task-70');

function debugFCC70() {
  scopeFCC70.innerHTML = outputResponse + testElseIf("email@mailorg");
}

if (btnFCC70 !== null && scopeFCC70 !== null) {
  btnFCC70.addEventListener('click', debugFCC70);
} else {
  scopeFCC70.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 71: Logical Orded in If Else Statements */

/* In: if, else if and else statements order is very important. The whole function is executed from top to bottom so you will want to be careful of what statement comes first. It would be better explained in math problem: */

function testIfOrder(testIfOrderVal) {
  if(testIfOrderVal <= 25) {
    return "Smaller than or equal to 25.";
  } else if (testIfOrderVal <= 50) {
    return "Smaller than or equal to 50.";
  } else {
    return "Greater than 50.";
  }
}

/* OUTPUT CODE */

const btnFCC71 = document.getElementById('run-fcc-task-71');
const scopeFCC71 = document.getElementById('fcc-task-71');

function debugFCC71() {
  scopeFCC71.innerHTML = outputResponse + testIfOrder(44);
}

if (btnFCC71 !== null && scopeFCC71 !== null) {
  btnFCC71.addEventListener('click', debugFCC71);
} else {
  scopeFCC71.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 72: Chaining If Else Statements */

/* if/else can be chained together to make more complex logic (while not using SWITCH) */

function testIfChain(testIfChainVal) {
  if(testIfChainVal < 1) {
    return "Today it's very cold outside.";
  } else if (testIfChainVal < 10) {
    return "Today it's cold outside.";
  } else if (testIfChainVal < 15) {
    return "You should wear a hoodie today.";
  } else if (testIfChainVal < 20) {
    return "It's pretty nice outside today.";
  } else if (testIfChainVal < 30) {
    return "It's very hot outside!";
  } else {
    "Just don't leave house today!";
  }
}

/* OUTPUT CODE */

const btnFCC72 = document.getElementById('run-fcc-task-72');
const scopeFCC72 = document.getElementById('fcc-task-72');

function debugFCC72() {
  scopeFCC72.innerHTML = outputResponse + testIfChain(18);
}

if (btnFCC72 !== null && scopeFCC72 !== null) {
  btnFCC72.addEventListener('click', debugFCC72);
} else {
  scopeFCC72.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 73: Golf Game */

/* Well, I don't know nothing about GOLF, but I did it. */

function golfScore(par, strokes) {
  if(strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!"
  }
}

/* OUTPUT CODE */

const btnFCC73 = document.getElementById('run-fcc-task-73');
const scopeFCC73 = document.getElementById('fcc-task-73');

function debugFCC73() {
  scopeFCC73.innerHTML = outputResponse + golfScore(5, 4);
}

if (btnFCC73 !== null && scopeFCC73 !== null) {
  btnFCC73.addEventListener('click', debugFCC73);
} else {
  scopeFCC73.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 74: Selecting from Many Options with Switch Statements */

/* If you have many options to choose from, use a SWITCH statement. Switch Statement tests a value and can have many CASE statements which define various possible values. Statements are executed from the first matched CASE value until a BREAK is encountered. Remember that case values are tested with STRICT EQUALITY OPERATOR (===)! */

function testSwitch(testSwitchVal) {
  var testSwitchResponse = "";
  switch(testSwitchVal) {
    case 'a1':
      testSwitchResponse = "Correct, Ferraris usually are red!"
      break;
    case 'b2':
      testSwitchResponse = "Wrong answer.";
      break;
    case 'c3':
      testSwitchResponse = "Wrong answer, green is more default for Lamborghini than Ferrari.";
      break;
    case 'd4':
      testSwitchResponse = "Wrong answer, well, yellow is definitely default for Lamborghini, not Ferrari!";
      break;
  }
  return testSwitchResponse;
  //^because we want to return full case response which is stored in testSwitchResponse Variable.
}

/* OUTPUT CODE */

const btnFCC74 = document.getElementById('run-fcc-task-74');
const scopeFCC74 = document.getElementById('fcc-task-74');

function debugFCC74() {
  scopeFCC74.innerHTML = outputResponse + "Which colour has Ferrari car? a. Red b. Blue c. Green d. Yellow? " + testSwitch('d4');
}

if (btnFCC74 !== null && scopeFCC74 !== null) {
  btnFCC74.addEventListener('click', debugFCC74);
} else {
  scopeFCC74.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 75: Adding a Default Option in Switch Statements */

/* Default option in switch statements works almost the same as ELSE in if ELSE - it makes us a default behaviour bracket if none of above switch cases values are matched in comparing process */


function testSwitchDefault(testSwitchDefaultVal) {
  var testSwitchDefaultResponse = "";
  switch(testSwitchDefaultVal) {
  case 1:
    testSwitchDefaultResponse =  "We are going North.";
    break;
  case 2:
    testSwitchDefaultResponse =  "We are going South.";
    break;
  default:
    testSwitchDefaultResponse = "We are heading East.";
    break;
  }
  return testSwitchDefaultResponse;
}

/* OUTPUT CODE */

const btnFCC75 = document.getElementById('run-fcc-task-75');
const scopeFCC75 = document.getElementById('fcc-task-75');

function debugFCC75() {
  scopeFCC75.innerHTML = outputResponse + "Where are we going? " + testSwitchDefault(3);
}

if (btnFCC75 !== null && scopeFCC75 !== null) {
  btnFCC75.addEventListener('click', debugFCC75);
} else {
  scopeFCC75.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 76: Multiple Identical Options in Switch Statements */

/* If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If we have multiple inputs with the same output, we can represent them in a switch statement like this: */

function testMultipleSwitch(testMultipleSwitchVal) {
  var testMultipleSwitchResult = "";
  switch (testMultipleSwitchVal) {
    case 1:
    case 2:
    case 3:
      testMultipleSwitchResult = "Please choose between first, second, or third route!";
      break;
    case 4:
      testMultipleSwitchResult = "Please go back! There is no other way.";
      break;
    default:
      testMultipleSwitchResult = "Please, choose something first.";
      break;
  }
  return testMultipleSwitchResult;
}

/* OUTPUT CODE */

const btnFCC76 = document.getElementById('run-fcc-task-76');
const scopeFCC76 = document.getElementById('fcc-task-76');

function debugFCC76() {
  scopeFCC76.innerHTML = outputResponse + "Where are we going? " + testMultipleSwitch(2);
}

if (btnFCC76 !== null && scopeFCC76 !== null) {
  btnFCC76.addEventListener('click', debugFCC76);
} else {
  scopeFCC76.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 77: Replacing If Else Chains with Switch */

/* If you have many options to choose from, a switch statement would be easier and more proper way to write many chained options than if/else if statements. */

function replaceSwitch(replaceSwitchVal) {
  var replaceSwitchAnswer = "";

  // if (replaceSwitchVal === 1) {
  //   replaceSwitchAnswer = "Lmao.";
  // } else if (replaceSwitchVal === 2) {
  //   replaceSwitchAnswer = "Ay de La Lmao.";
  // } else {
  //   replaceSwitchAnswer = "Ok?";
  // }

  switch(replaceSwitchVal) {
    case 1:
      replaceSwitchAnswer = "Lmao.";
      break;
    case 2:
      replaceSwitchAnswer = "Ay de La Lmao.";
      break;
    default:
      replaceSwitchAnswer = "Ok.";
      break;
  }
  return replaceSwitchAnswer;
}

/* OUTPUT CODE */

const btnFCC77 = document.getElementById('run-fcc-task-77');
const scopeFCC77 = document.getElementById('fcc-task-77');

function debugFCC77() {
  scopeFCC77.innerHTML = outputResponse + replaceSwitch(2);
}

if (btnFCC77 !== null && scopeFCC77 !== null) {
  btnFCC77.addEventListener('click', debugFCC77);
} else {
  scopeFCC77.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 78: Returning Boolean Values From Functions */

/* There are a few approaches to do comparisons with the equality operator (which return a boolean TRUE or FALSE.) Sometimes, people do things like: */

function booleanIsEqual(a1, b1) {
  if (a1 === b1) {
    return true;
  } else {
    return false;
  }
}

/* But the more proper, and better way is to do this via: */

function booleanIsEqualVariant(aa1, bb1) {
  return aa1 === bb1;
}

/* It would give us False, because === returns TRUE or FALSE. */

/* OUTPUT CODE */

const btnFCC78 = document.getElementById('run-fcc-task-78');
const scopeFCC78 = document.getElementById('fcc-task-78');

function debugFCC78() {
  scopeFCC78.innerHTML = outputResponse + booleanIsEqual(1, 2) + ', ' + booleanIsEqualVariant(1, 2);
}

if (btnFCC78 !== null && scopeFCC78 !== null) {
  btnFCC78.addEventListener('click', debugFCC78);
} else {
  scopeFCC78.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 79: Return Early Pattern for Functions */

/* When a return statement is reached, the execution of the current function stops and control returns to the calling location. */

function earlyPattern() {
  return "Task 79: Early Pattern 1/2 Stage. ";
  return "Task 79: Early Pattern 2/2 Stage - from RETURN statement. ";
  return "Task 79: Early Pattern - Statement never used. ";
}

/* OUTPUT CODE */

const btnFCC79 = document.getElementById('run-fcc-task-79');
const scopeFCC79 = document.getElementById('fcc-task-79');

function debugFCC79() {
  scopeFCC79.innerHTML = outputResponse + '### FOLLOW UP ###' + earlyPattern();
}

if (btnFCC79 !== null && scopeFCC79 !== null) {
  btnFCC79.addEventListener('click', debugFCC79);
} else {
  scopeFCC79.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 80: Counting Cards */

/* BlackJack - Actually, I have to write a program that would count my cards. It is done by keeping track of the relative numbers of high and low cards remaining in the deck. Each Card is assigned a value according to the table below. Then the count is positive, the player should bet high. When the count is zero or negative, the player should bet low. */

/* First of all, I tried to  do it only via ifs, so I put everything in a function and forgot that it would not properly display my output with „Bet" and „Hold" because it would output every step instead of only calculated output. So the solution for this is to create switch inside function. */

var cardCount = 0;
function cardCounter(cardItems){
  switch(cardItems){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      cardCount++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      cardCount--;
      break;
  }
  if(cardCount > 0) {
    return cardCount + " Bet";
  } else {
    return cardCount + " Hold";
  }
}

/* OUTPUT CODE */

const btnFCC80 = document.getElementById('run-fcc-task-80');
const scopeFCC80 = document.getElementById('fcc-task-80');

function debugFCC80() {
  scopeFCC80.innerHTML = outputResponse + cardCounter(2) + " " + cardCounter(6) + " " + cardCounter(7) + " " + cardCounter('A');
}

if (btnFCC80 !== null && scopeFCC80 !== null) {
  btnFCC80.addEventListener('click', debugFCC80);
} else {
  scopeFCC80.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 81: Build JavaScript Objects */

/* Objects are similar to arrays, but except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. Objects are useful for storing data in a structured way, and can represent real world objects. You can store all the properties in many different data types, strings, numbers, or even in quotes for single-word string properties. However, if your object has any non-string properties, JavaScript will automatically typecast them as strings. */

var myDog = {
  name: 'Arturro',
  legs: 4,
  tails: 1,
  friends: ['Adan', 'Lovi']
};

/* OUTPUT CODE */

const btnFCC81 = document.getElementById('run-fcc-task-81');
const scopeFCC81 = document.getElementById('fcc-task-81');

function debugFCC81() {
  scopeFCC81.innerHTML = outputResponse + myDog.name;
}

if (btnFCC81 !== null && scopeFCC81 !== null) {
  btnFCC81.addEventListener('click', debugFCC81);
} else {
  scopeFCC81.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 82: Accessing Object Properties with Dot Notation */

/* There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array. Dot notation is what you use when you know the name of the property you're trying to access ahead of time. */

var carShop = {
  'cars': ['Ferrari Enzo', 'Fiat Uno', 'Toyota Avensis'],
  'prices': ['500000', '15000', '45000'],
  'location': ['Gdynia']
};

var buyFirstCar = `${carShop.cars[0]}, price: ${carShop.prices[0]}`;

/* OUTPUT CODE */

const btnFCC82 = document.getElementById('run-fcc-task-82');
const scopeFCC82 = document.getElementById('fcc-task-82');

function debugFCC82() {
  scopeFCC82.innerHTML = outputResponse + buyFirstCar;
}

if (btnFCC82 !== null && scopeFCC82 !== null) {
  btnFCC82.addEventListener('click', debugFCC82);
} else {
  scopeFCC82.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 83: Accessing Object Properties with Bracket Notation */

/* The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation. However, you can still use bracket notation on object properties without spaces. Note that property names with spaces in them must be in quotes (single or double). */

var myPub = {
  'beer barrels': ['Barrel of Tyskie', 'Barrel of Harnas', 'Barrel of Perelka'],
  'beer prices': ['300zl', '280zl', '310zl']
}

var buyFirstBarrel = `${myPub['beer barrels'][0]} With price of: ${myPub['beer prices'][0]}`;


/* OUTPUT CODE */

const btnFCC83 = document.getElementById('run-fcc-task-83');
const scopeFCC83 = document.getElementById('fcc-task-83');

function debugFCC83() {
  scopeFCC83.innerHTML = outputResponse + buyFirstBarrel;
}

if (btnFCC83 !== null && scopeFCC83 !== null) {
  btnFCC83.addEventListener('click', debugFCC83);
} else {
  scopeFCC83.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 84: Accessing Object Properties with Variables */

/* Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table. */

/* Another way you can use this concept is when the property's name is collected dynamically during the program execution. Note that we do not use quoter around the variable name when using it to access the property, because we are using the value of the variable, not the name. So: */

var patData = {
  patName: "Marcin Soczynski"
};

function patPrefix(str) {
  var prefix = "pat";
  return prefix + str;
}

var downloadPat = patPrefix("Name");

/* You can also do it not-dynamically via: */

var dogList = {
  Terrier: "Abel.", Doberman: "Kenie.", Labrador: "Es."
};

var myOwnDog = "Doberman";
var myDogBreed = dogList[myOwnDog];

/* OUTPUT CODE */

const btnFCC84 = document.getElementById('run-fcc-task-84');
const scopeFCC84 = document.getElementById('fcc-task-84');

function debugFCC84() {
  scopeFCC84.innerHTML = outputResponse + 'Dynamically: ' + patData[downloadPat] + '. Non dynamically: ' + myDogBreed;
}

if (btnFCC84 !== null && scopeFCC84 !== null) {
  btnFCC84.addEventListener('click', debugFCC84);
} else {
  scopeFCC84.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 85: Updating Object Properties */

/* After creating JS object, we can update its properties at any time just like we would update any other variable. We can use either dot or bracket notation to update them. */

var updateObject = {
  versions: ['v1.0.0' , 'v1.0.1'],
  branches: ['main', 'dev']
};

updateObject.versions[0] = 'v0.9.9';

/* OUTPUT CODE */

const btnFCC85 = document.getElementById('run-fcc-task-85');
const scopeFCC85 = document.getElementById('fcc-task-85');

function debugFCC85() {
  scopeFCC85.innerHTML = outputResponse + updateObject.versions[0];
}

if (btnFCC85 !== null && scopeFCC85 !== null) {
  btnFCC85.addEventListener('click', debugFCC85);
} else {
  scopeFCC85.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 86: Add New Properties to a JavaScript Object */

/* You can add new properties to existing JS Objects the same way you would modify them. */

var propHunt = {
  hunter: 'Prop Hunter',
  weapon: 'Kukri Knife'
};

propHunt.jacket = 'Bomber';
//^ or we can also do propHunt["jacket"] = 'Bomber';

/* OUTPUT CODE */

const btnFCC86 = document.getElementById('run-fcc-task-86');
const scopeFCC86 = document.getElementById('fcc-task-86');

function debugFCC86() {
  scopeFCC86.innerHTML = outputResponse + propHunt.jacket;
}

if (btnFCC86 !== null && scopeFCC86 !== null) {
  btnFCC86.addEventListener('click', debugFCC86);
} else {
  scopeFCC86.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 87: Delete Properties from a JavaScript Object */

/* We can also delete properties from objects like this: */

var shoppingList = {
  items: ['Milk ', 'Cheese ', 'Cheese cake '],
  prices: 1
};

delete shoppingList.items[2];
delete shoppingList.prices;

/* OUTPUT CODE */

const btnFCC87 = document.getElementById('run-fcc-task-87');
const scopeFCC87 = document.getElementById('fcc-task-87');

function debugFCC87() {
  scopeFCC87.innerHTML = outputResponse + shoppingList.items;
}

if (btnFCC87 !== null && scopeFCC87 !== null) {
  btnFCC87.addEventListener('click', debugFCC87);
} else {
  scopeFCC87.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 88: Using Objects for Lookups */

/* Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch or an if/else chain. This is most useful when you know that your input data is limited to a certain range. */

var customerList = {
  1: 'Martin',
  2: 'Jacob',
  3: 'John',
  4: 'Tery',
  5: 'Mercedes',
  6: 'Ken',
  7: 'Lee'
};

// customerList[1];
// customerList[5];

var selectedCustomer = 7;
customerList[selectedCustomer];

/* Or something more advanced: */

function lookForCustomer(customerID) {
  var searchResult = "";
  var customerLookupList = {
    1: 'Martin',
    2: 'Jacob',
    3: 'John',
    4: 'Tery',
    5: 'Mercedes',
    6: 'Ken',
    7: 'Lee'
  };
  searchResult = customerLookupList[customerID];
  return searchResult;
}

lookForCustomer(4);

/* OUTPUT CODE */

const btnFCC88 = document.getElementById('run-fcc-task-88');
const scopeFCC88 = document.getElementById('fcc-task-88');

function debugFCC88() {
  scopeFCC88.innerHTML = outputResponse + customerList[1] + ', ' + customerList[5] + ', ' + customerList[selectedCustomer] + ', ' + lookForCustomer(4); + '.';
}

if (btnFCC88 !== null && scopeFCC88 !== null) {
  btnFCC88.addEventListener('click', debugFCC88);
} else {
  scopeFCC88.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 89: Testing Objects for Properties */

/* Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not. */

/* We can do so in some ways, two of them: */

var testObject = {
  prop1: 'test value',
  prop2: 'test value2'
};

testObject.hasOwnProperty('prop1');
testObject.hasOwnProperty('prop2');

/* Or more advanced one (function to test if an object passed to the function (obj) contains a specific property(checkProp). If the property is found, return that property's value. If not, then return "Not Found". */

function checkObject(objectName, checkProp) {
  if(objectName.hasOwnProperty(checkProp)) {
    return objectName[checkProp];
  } else {
    return "Not Found.";
  }
}

checkObject(testObject, 'prop1');

/* OUTPUT CODE */

const btnFCC89 = document.getElementById('run-fcc-task-89');
const scopeFCC89 = document.getElementById('fcc-task-89');

function debugFCC89() {
  scopeFCC89.innerHTML = outputResponse + testObject.hasOwnProperty('prop1') + ', ' + testObject.hasOwnProperty('prop2') + ', ' + checkObject(testObject, 'prop1');
}

if (btnFCC89 !== null && scopeFCC89 !== null) {
  btnFCC89.addEventListener('click', debugFCC89);
} else {
  scopeFCC89.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 90: Manipulating Complex Objects */

/* Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions and objects. Let's create one of examples: */

var carModels = [
  {
    'manufacturer': 'Fiat',
    'name': 'Punto',
    'yearOfProduction': 1998,
    'variants': [
      'Pink',
      'Orange',
      'Red',
      'Blue'
    ],
    'doors': 5
  },
  {
    'manufacturer': 'Fiat',
    'name': 'Uno',
    'yearOfProduction': 2002,
    'variants': [
      'Black',
      'Brown',
      'White',
      'Violet'
    ],
    'doors': 5
  }
];

/* This is an array which contains one object inside. This object has various pieces of metadata about car models. It also has a nested bariants array. If we want to add more variants, we can do this by adding something to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "manufacturer": "Fiat" is a property that has a key of manufacturer and a value of Fiat. JS Object Notation or JSON is a related data interchange format used to store data. https://www.json.org/json-en.html Also, you would need to place a comma after every object in the array, unless it is the last object in the array. */

/* OUTPUT CODE */

const btnFCC90 = document.getElementById('run-fcc-task-90');
const scopeFCC90 = document.getElementById('fcc-task-90');

function debugFCC90() {
  scopeFCC90.innerHTML = outputResponse + carModels[0].manufacturer + ', ' + carModels[1].name;
}

if (btnFCC90 !== null && scopeFCC90 !== null) {
  btnFCC90.addEventListener('click', debugFCC90);
} else {
  scopeFCC90.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 91: Accessing Nested Objects */

/* The sub-properties of objects can be accessed by chaining together the dot or bracket notation. */

var myChest = {
  "inside" : {
    "top": {
      "socket": "old shirt"
    },
    "bottom": {
      "sachet": {
        "first": "old maps",
        "second": "old poster"
      }
    }
  }
};

var whatsInsideChest = myChest.inside.top["socket"];
var whatsInsideChest2 = myChest.inside.bottom["sachet"].second;

/* OUTPUT CODE */

const btnFCC91 = document.getElementById('run-fcc-task-91');
const scopeFCC91 = document.getElementById('fcc-task-91');

function debugFCC91() {
  scopeFCC91.innerHTML = outputResponse + whatsInsideChest + ', ' + whatsInsideChest2;
}

if (btnFCC91 !== null && scopeFCC91 !== null) {
  btnFCC91.addEventListener('click', debugFCC91);
} else {
  scopeFCC91.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 92: Accessing Nested Arrays */

/* As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays. */

var doorAccessList = [
  {
    workerID: 1,
    name: 'David',
    position: 'Assistant',
    entries: [
      '16.03.2021',
      '17.03.2021'
    ]
  },
  {
    workerID: 2,
    name: 'John',
    position: 'CTO',
    entries: [
      '16.03.2021',
      '17.03.2021'
    ]
  }
];

// doorAccessList[0].name;
// doorAccessList[1].entries[1];

/* OUTPUT CODE */

const btnFCC92 = document.getElementById('run-fcc-task-92');
const scopeFCC92 = document.getElementById('fcc-task-92');

function debugFCC92() {
  scopeFCC92.innerHTML = outputResponse + doorAccessList[0].name + ', ' + doorAccessList[1].entries[1];
}

if (btnFCC92 !== null && scopeFCC92 !== null) {
  btnFCC92.addEventListener('click', debugFCC92);
} else {
  scopeFCC92.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 93: Record Collection */

/* You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album. */

var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && object[id].hasOwnProperty("tracks") === false) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}

updateRecords(collection, 5439, 'artist', 'John Lemon');

var collectionUpdateOutput = collection['5439'].artist;

/* OUTPUT CODE */

const btnFCC93 = document.getElementById('run-fcc-task-93');
const scopeFCC93 = document.getElementById('fcc-task-93');

function debugFCC93() {
  scopeFCC93.innerHTML = outputResponse + collectionUpdateOutput;
}

if (btnFCC93 !== null && scopeFCC93 !== null) {
  btnFCC93.addEventListener('click', debugFCC93);
} else {
  scopeFCC93.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 94: Iterate with JavaScript While Loops */

/* We can run the same code multiple times by using a loop. */

/* The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true. */

var whileArray = [];
var i_T94 = 0;

while (i_T94 < 5) {
  whileArray.push(i_T94);
  i_T94++;
}

/* In the code above, the while loop will execute 5 times and append the numbers 0 through 4 to whileArray. First we are pushing value of i to the array, and then we are incrementing it and repeating execution till i will bump value of 5.*/

var whileOutput = whileArray;

/* OUTPUT CODE */

const btnFCC94 = document.getElementById('run-fcc-task-94');
const scopeFCC94 = document.getElementById('fcc-task-94');

function debugFCC94() {
  scopeFCC94.innerHTML = outputResponse + whileOutput;
}

if (btnFCC94 !== null && scopeFCC94 !== null) {
  btnFCC94.addEventListener('click', debugFCC94);
} else {
  scopeFCC94.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 95: Iterate with JavaScript For Loops */

/* The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter. */

var myDogs = ['Elaine', 'Jade', 'Martha', 'Margaret', 'John', 'Mary', 'Joseph'];
var myDogsOutput = [];

for (var dogCounter = 0; dogCounter < 6; dogCounter++) {
  myDogsOutput.push(myDogs[dogCounter]);
}

/* OUTPUT CODE */

const btnFCC95 = document.getElementById('run-fcc-task-95');
const scopeFCC95 = document.getElementById('fcc-task-95');

function debugFCC95() {
  scopeFCC95.innerHTML = outputResponse + myDogsOutput;
}

if (btnFCC95 !== null && scopeFCC95 !== null) {
  btnFCC95.addEventListener('click', debugFCC95);
} else {
  scopeFCC95.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 96: Iterate with JavaScript For Loops */

/* For loops don't have to iterate one at time. By changing our final-expression , we can count by even numbers. Basically, we'll increment iterator by 2 each loop with i += 2. */

var oddArray = [];

for (var oddIterator = 0; oddIterator < 10; oddIterator += 2) {
  oddArray.push(oddIterator);
}

/* OUTPUT CODE */

const btnFCC96 = document.getElementById('run-fcc-task-96');
const scopeFCC96 = document.getElementById('fcc-task-96');

function debugFCC96() {
  scopeFCC96.innerHTML = outputResponse + oddArray;
}

if (btnFCC96 !== null && scopeFCC96 !== null) {
  btnFCC96.addEventListener('click', debugFCC96);
} else {
  scopeFCC96.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 97: Count Backwards With a For Loop */

/* A for loop also count backwards, so long as we can define the right conditions. In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression. We'll start at 10, and loop while iterator > 0. We'll decrement iterator by 2 each loop with i -= 2. */

var backwardCount = [];

for (var backwardIterator = 10; backwardIterator > 0; backwardIterator -= 2) {
  backwardCount.push(backwardIterator);
}

/* OUTPUT CODE */

const btnFCC97 = document.getElementById('run-fcc-task-97');
const scopeFCC97 = document.getElementById('fcc-task-97');

function debugFCC97() {
  scopeFCC97.innerHTML = outputResponse + backwardCount;
}

if (btnFCC97 !== null && scopeFCC97 !== null) {
  btnFCC97.addEventListener('click', debugFCC97);
} else {
  scopeFCC97.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 98: Iterate Through an Array with a For Loop */

/* A common task in JavaScript is to iterate through the contents of an array. One way to do this is with a for loop. The code below will output each element of the array dataSheet to the console: */

/* Remember that arrays have zero-based indexing, which means the last index of the array is length-1. Our condition for this loop is i < array.length, which stops the loop when i is equal to length. In this case last iteration is i === 3, i.e. when i becomes equal to array.length and outputs "Elisa, 3". */

var dataSheet = [['Martin', 1], ['John', 2], ['Elisa', 3]];
var dataSheetOutput = [];
var totalData = 0;

for (var dataCounter = 0; dataCounter < dataSheet.length; dataCounter++) {
  dataSheetOutput.push(dataSheet[dataCounter]);
  totalData += dataCounter;
}

/* OUTPUT CODE */

const btnFCC98 = document.getElementById('run-fcc-task-98');
const scopeFCC98 = document.getElementById('fcc-task-98');

function debugFCC98() {
  scopeFCC98.innerHTML = outputResponse + dataSheetOutput + ', Number of iterations: ' + totalData + '.';
}

if (btnFCC98 !== null && scopeFCC98 !== null) {
  btnFCC98.addEventListener('click', debugFCC98);
} else {
  scopeFCC98.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 99: Nesting For Loops */

/* If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example: */

var multiLoopData = [
  ['16.04.2021', 'Martin'], ['17.04.2021', 'John'], ['18.04.2021', 'Nikolai']
];
var multiLoopDataOutput = [];

for (var firstCounter = 0; firstCounter < multiLoopData.length; firstCounter++) {
  for (var secondCounter = 0; secondCounter < multiLoopData[firstCounter].length; secondCounter++) {
    multiLoopDataOutput.push(multiLoopData[firstCounter][secondCounter]);
  }
}

/* Note that above example outputs each sub-element in multiLoopData one at a time. For the inner loop, we are checking the .length of multiLoopData[firstCounter] since multiLoopData[firstCounter] is itself an array.*/

/* Well, it is the same as the previous Task, while the previous one was much easier and faster, because we listed whole Arrays content. The loop above will be useful if there will be some specific nested array content to output. */

/* OUTPUT CODE */

const btnFCC99 = document.getElementById('run-fcc-task-99');
const scopeFCC99 = document.getElementById('fcc-task-99');

function debugFCC99() {
  scopeFCC99.innerHTML = outputResponse + multiLoopDataOutput;
}

if (btnFCC99 !== null && scopeFCC99 !== null) {
  btnFCC99.addEventListener('click', debugFCC99);
} else {
  scopeFCC99.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 100: Iterate with JavaScript Do... While Loops */

/* Next type of loop is called a "do...while" loop. It will first DO one pass of the code inside the loop no matter what, and then continue to run the loop WHILE the specified condition evaluates to TRUE. What makes "do...while" different from other loops? It behaves different if the condition fails on the first check. DO...WHILE Loop ensures that the code inside the loop will run AT LEAST ONCE. */

var doWhileData = [];
var doWhileIterator = 0;
do {
  doWhileData.push(doWhileIterator);
  doWhileIterator++;
} while (doWhileIterator < 5);

/* So we're gonna get results like [0, 1, 2, 3, 4]. If we change doWhileIterator to 5, then we will get [5] inside doWhileData because we will add a single element to the array AND THEN increment the iterator before we get to the condition check. That's what makes DO...WHILE loop different from other ones, in case of normal WHILE, the loop would never add single value to array because it would fail at condition check. */

/* OUTPUT CODE */

const btnFCC100 = document.getElementById('run-fcc-task-100');
const scopeFCC100 = document.getElementById('fcc-task-100');

function debugFCC100() {
  scopeFCC100.innerHTML = outputResponse + doWhileData;
}

if (btnFCC100 !== null && scopeFCC100 !== null) {
  btnFCC100.addEventListener('click', debugFCC100);
} else {
  scopeFCC100.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 101: Replace Loops using Recursion */

/* Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first N elements of an array to create the product of those elements. Using a FOR loop, you could do this: */

var dfArray = [1, 2, 3];
var rArray = [1, 4, 5];

function doForMultiply(multiplyArray, nElements) {
  var multiProduct = 1;
  for (var multiIterator = 0; multiIterator < nElements; multiIterator++) {
    multiProduct *= multiplyArray[multiIterator];
  }
  return multiProduct;
}

/* However, notice that doForMultiply(multiplyArray, nElements) == doForMultiply(multiplyArray, nElements - 1) * multiplyArray[nElements - 1]. That means you can rewrite doForMultiply in terms of itself and never need to use a loop. */

function doRecursiveMultiply(recursiveArray, rnElements) {
  if (rnElements <= 0) {
    return 1;
  } else {
    return doRecursiveMultiply(recursiveArray, rnElements - 1) * recursiveArray[rnElements - 1];
  }
}

/* The recursive version of multiply breaks down like this. In the base case, where rnElements <= 0, it returns 1. For larger values of n, it calls itself, but with rnElements - 1. That function call is evaluated in the same way, calling doRecursiveMultiply again until rnElements <= 0. At this point, all the functions can return and the original doRecursiveMultiply returns the answer. */

/* Recursive functions must have a base case when they return without calling the function again (in example above, when rnElements <= 0. Otherwise, they can never finish executing. */

/* OUTPUT CODE */

const btnFCC101 = document.getElementById('run-fcc-task-101');
const scopeFCC101 = document.getElementById('fcc-task-101');

function debugFCC101() {
  scopeFCC101.innerHTML = outputResponse + 'For loop: ' + doForMultiply(dfArray, 3) + '. Recursion version: ' + doRecursiveMultiply(rArray, 3) + '.';
}

if (btnFCC101 !== null && scopeFCC101 !== null) {
  btnFCC101.addEventListener('click', debugFCC101);
} else {
  scopeFCC101.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 102: Profile Lookup */

/* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */

var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(inputName, profileProp) {
  for (var iContacts = 0; iContacts < contacts.length; iContacts++) {
    if (contacts[iContacts].firstName === inputName) {
      if (contacts[iContacts].hasOwnProperty(profileProp)) {
        return contacts[iContacts][profileProp];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

/* OUTPUT CODE */

const btnFCC102 = document.getElementById('run-fcc-task-102');
const scopeFCC102 = document.getElementById('fcc-task-102');

function debugFCC102() {
  scopeFCC102.innerHTML = outputResponse + lookUpProfile('Harry', 'number');
}

if (btnFCC102 !== null && scopeFCC102 !== null) {
  btnFCC102.addEventListener('click', debugFCC102);
} else {
  scopeFCC102.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 103: Generate Random Fractions with JavaScript */

/* Random numbers are useful for creating random behavior. JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1. NOTE that like in "Storing Values with the Equal Operator", all functions calls will be resolved before the RETURN executes, so we can return the value of the Math.random() function. */

function randomNumberGenerator() {
  // return Math.random();
  var rngResult = Math.random();
  return Math.round(rngResult * 100) / 100;
  /* Or you can just leave it "*100" if you want bigger numbers */
}

/* ^numbers after digits from http://www.javascriptkit.com/javatutors/round.shtml */

/* OUTPUT CODE */

const btnFCC103 = document.getElementById('run-fcc-task-103');
const scopeFCC103 = document.getElementById('fcc-task-103');

function debugFCC103() {
  scopeFCC103.innerHTML = outputResponse + randomNumberGenerator();
}

if (btnFCC103 !== null && scopeFCC103 !== null) {
  btnFCC103.addEventListener('click', debugFCC103);
} else {
  scopeFCC103.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 104: Generate Random Whole Numbers with JavaScript */

/* It's nice that we can generate random decimal numbers, bit it's even more useful if we use it to generate random whole numbers. First of all, we use Math.random() to generate a random DECIMAL. Then we multiply that random decimal by 20, then we can use another function, Math.floor() to round the number down to its nearest whole number. REMEMBER that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19. So: */

function wholeRNGenerator() {
  return Math.floor(Math.random() * 21);
}

/* We are calling Math.random(), multiplying the result by 21 (well it's my fix, I want to get whole range between 0 and 20, if we can't reach 20 itself then let's raise it by whole 1 to 21), then passing the value to Math.floor() function to round the value down to the nearest whole number.*/

/* OUTPUT CODE */

const btnFCC104 = document.getElementById('run-fcc-task-104');
const scopeFCC104 = document.getElementById('fcc-task-104');

function debugFCC104() {
  scopeFCC104.innerHTML = outputResponse + wholeRNGenerator();
}

if (btnFCC104 !== null && scopeFCC104 !== null) {
  btnFCC104.addEventListener('click', debugFCC104);
} else {
  scopeFCC104.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 105: Generate Random Whole Numbers within a Range */

/* Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers. To do this, we'll define a minimum number MIN and a maximum number MAX. Look at the formula:

Math.floor(Math.random() * (max - min + 1)) + min.

We would multiply randomly generated (Math.random()) number with size of the range (max - min + 1) (to scale the random number) and adding minimum value to "shift" our scaled number into the range. */

function randomRNGenerator(rMin, rMax) {
  return Math.floor(Math.random() * (rMax - rMin + 1)) + rMin;
}

/* OUTPUT CODE */

const btnFCC105 = document.getElementById('run-fcc-task-105');
const scopeFCC105 = document.getElementById('fcc-task-105');

function debugFCC105() {
  scopeFCC105.innerHTML = outputResponse + randomRNGenerator(0, 50);
}

if (btnFCC105 !== null && scopeFCC105 !== null) {
  btnFCC105.addEventListener('click', debugFCC105);
} else {
  scopeFCC105.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 106: Use the parseInt Function */

/* The parseInt() function parses a string and returns an integer. parseInt() itself is much more advanced, check more in Mozilla's MDN docs. Here's an example: */

function convertToInt(convString) {
  return parseInt(convString);
}

/* OUTPUT CODE */

const btnFCC106 = document.getElementById('run-fcc-task-106');
const scopeFCC106 = document.getElementById('fcc-task-106');

function debugFCC106() {
  scopeFCC106.innerHTML = outputResponse + convertToInt("00156");
}

if (btnFCC106 !== null && scopeFCC106 !== null) {
  btnFCC106.addEventListener('click', debugFCC106);
} else {
  scopeFCC106.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 107: Use the parseInt Function with a Radix */

/* The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36. The function call looks like: parseInt(string, radix); And here is example: */

function convertToIntRadix(rString, rRadix) {
  return parseInt(rString, rRadix);
}

/* So actually we converted string in binary system (radix - base 2) to whole decimal number. */

/* OUTPUT CODE */

const btnFCC107 = document.getElementById('run-fcc-task-107');
const scopeFCC107 = document.getElementById('fcc-task-107');

function debugFCC107() {
  scopeFCC107.innerHTML = outputResponse + convertToIntRadix("101011", 2);
}

if (btnFCC107 !== null && scopeFCC107 !== null) {
  btnFCC107.addEventListener('click', debugFCC107);
} else {
  scopeFCC107.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 108: Use the Conditional (Ternary) Operator */

/* The conditional operator, also called the ternary operator, can be used as a one line if-else expression. The synrax is a ? b : c, where A is the condition, B is the code to run when the conditions returns TRUE, anc C is the code to run when the conditions returns FALSE. Let's use it to check which of two values is greater. */

function findGreaterThan(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? "First number is greater than second one." : "Second number is greater than first one.";
}

/* OUTPUT CODE */

const btnFCC108 = document.getElementById('run-fcc-task-108');
const scopeFCC108 = document.getElementById('fcc-task-108');

function debugFCC108() {
  scopeFCC108.innerHTML = outputResponse + findGreaterThan(12, 24);
}

if (btnFCC108 !== null && scopeFCC108 !== null) {
  btnFCC108.addEventListener('click', debugFCC108);
} else {
  scopeFCC108.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 109: Use Multiple Conditional (Ternary) Operators */

/* In the previous challenge, we used a single conditional operator. You can also chain them together to check for multiple conditions. It is considered best practice to format multiple conditional operators such that each condition is on separate line, as shown below. */

function findGreaterOrEqualTernary(tFirst, tSecond) {
  return (tFirst === tSecond) ? "Both numbers are equal."
    : (tFirst > tSecond) ? "First number is greater than second one."
      : "Second number is greater than first one.";
}

/* OUTPUT CODE */

const btnFCC109 = document.getElementById('run-fcc-task-109');
const scopeFCC109 = document.getElementById('fcc-task-109');

function debugFCC109() {
  scopeFCC109.innerHTML = outputResponse + findGreaterOrEqualTernary(15, 99);
}

if (btnFCC109 !== null && scopeFCC109 !== null) {
  btnFCC109.addEventListener('click', debugFCC109);
} else {
  scopeFCC109.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 110: Use Recursion to Create a Countdown */

/* In previous challenges, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function. As mentioned there, there will be a BASE CASE. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached. For example, say you want to write a recursive function that returns an array containing the numbers 1 through N. This function will need to accept an argument, N, representing the final number. Then it will need to call itself with progressively smaller values of N until it reaches 1. You could write the function as follows: */

/* function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

So on, the value [1,2,3,4,5] will be displayed in the console. */

/* At first, this seems counterintuitive since the value of N decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the Array, countup(n - 1) has already been evaluated and returned [1, 2, ...., n - 1]. */

function countDown(nTimes) {
  if (nTimes < 1) {
    return []; //return empty array
  } else {
    //else - in this case, call itself until nTimes < 1 will be TRUE (right now it's false - that's why we are iterating).
    var array = countDown(nTimes - 1);
    array.unshift(nTimes);
    return array;
  }
}

/* OUTPUT CODE */

const btnFCC110 = document.getElementById('run-fcc-task-110');
const scopeFCC110 = document.getElementById('fcc-task-110');

function debugFCC110() {
  scopeFCC110.innerHTML = outputResponse + countDown(10);
}

if (btnFCC110 !== null && scopeFCC110 !== null) {
  btnFCC110.addEventListener('click', debugFCC110);
} else {
  scopeFCC110.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 111: Use Recursion to Create a Range of Numbers */

/* Apart from fact, that recursion should never be used in any of these cases (exponential running time without permanent access to memory), we have to do another boring Recursion function. */

/* We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

/* OUTPUT CODE */

const btnFCC111 = document.getElementById('run-fcc-task-111');
const scopeFCC111 = document.getElementById('fcc-task-111');

function debugFCC111() {
  scopeFCC111.innerHTML = outputResponse + rangeOfNumbers(1, 5);
}

if (btnFCC111 !== null && scopeFCC111 !== null) {
  btnFCC111.addEventListener('click', debugFCC111);
} else {
  scopeFCC111.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* ############################# */
/* ######## ECMAScript 6 ####### */
/* ############################# */

/* Task B1: Explore Differences Between the var and let Keywords */

/* One of the biggest problems with declaring variables with the VAR keyword is that you can overwrite variable declarations without an error. In example: */

var testVar = 'Some text';
var testVar = 'Some overridden text';

/* So as you can see, console will display string 'Some overwritten text'. testVar variable is originally declared as 'Some text', and then overridden to be 'Some overridden text'. In a small APP, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult. */

/* A new keyword called LET was introduced in ES6 to solve this potential issue with the VAR keyword. If you were to replace var with let in the variable declarations of the code above, the result would be an error. */

let testLet = 'Some Nice Text';
// let testLet = 'Some not nice Text';
//It will throw "Identifier 'testLet' has already been declared (3110:4)"

/* This error can be seen in the console of your browser. So unlike var, when using let, a variable with the same name can only be declared once. Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions, For instance: */

"use strict";
x = 3.14;

/* OUTPUT CODE */

const btnFCCB1 = document.getElementById('run-fcc-task-b1');
const scopeFCCB1 = document.getElementById('fcc-task-b1');

function debugFCCB1() {
  scopeFCCB1.innerHTML = outputResponse + "We're testing VARs: " + testVar + '. Test let: ' + testLet + '.';
}

if (btnFCCB1 !== null && scopeFCCB1 !== null) {
  btnFCCB1.addEventListener('click', debugFCCB1);
} else {
  scopeFCCB1.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B2: Compare Scopes of the var and let Keywords */

/* When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function. The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression. In example: */

var numArray1 = [];
for (var i1 = 0; i1 < 3; i1++) {
  numArray1.push(i1);
}

/* With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following: */

var numArray2 = [];
var i2;
for (i2 = 0; i2 < 3; i2++) {
  numArray2.push(i2);
}

/* Here output will display the values [0,1,2] and 3. This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable. */

var printNumTwo1;
for (var i11 = 0; i11 < 3; i11++) {
  if (i11 === 2) {
    printNumTwo1 = function() {
      return i11;
    };
  }
}

/* Here the console will display the value 3. As we can see, printNumTwo1() prints 3 and not 2. This is because the value assigned to i11 was updated and the printNumTwo1() returns the global i11 and not the value i11 had when the function was created in the for loop. The let keyword does not follow this behavior: */

let printNumTwo2;
for (let i22 = 0; i22 < 3; i22++) {
  if (i22 === 2) {
    printNumTwo2 = function() {
      return i22;
    };
  }
}

/* Here we are not debugging, because console will display value 2, and an error that i22 is not defined. i22 is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo2 returned the correct value because three different i22 variables with unique values (0, 1 and 2) were created by the let keyword within the loop statement. */

/* OUTPUT CODE */

const btnFCCB2 = document.getElementById('run-fcc-task-b2');
const scopeFCCB2 = document.getElementById('fcc-task-b2');

function debugFCCB2() {
  scopeFCCB2.innerHTML = outputResponse + 'First example: ' + numArray1 + '. Iterator value: ' + i1 + '.' + ' Second example: ' + numArray2 + '. Iterator value: ' + i2 + '.' + ' Third example: ' + printNumTwo1() + '.';
}

if (btnFCCB2 !== null && scopeFCCB2 !== null) {
  btnFCCB2.addEventListener('click', debugFCCB2);
} else {
  scopeFCCB2.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B3: Declare a Read-Only Variable with the const Keyword */

/* The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword. */

/* const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned. Trying to reassign a variable declared with const will throw an error. You should always name variables you don't want to reassign using the CONST keyword. This helps you accidentally attempt to reassign a variable that is meant to say constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore. */

/* It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (Objects and arrays). In a later challenge you will see an example of lowercase variable identifier being used for an array. */

function printSomethingConst(inputSth) {
  const sentence = "This is something " + inputSth + "!";
  return sentence;
}

/* OUTPUT CODE */

const btnFCCB3 = document.getElementById('run-fcc-task-b3');
const scopeFCCB3 = document.getElementById('fcc-task-b3');

function debugFCCB3() {
  scopeFCCB3.innerHTML = outputResponse + printSomethingConst("amazing");
}

if (btnFCCB3 !== null && scopeFCCB3 !== null) {
  btnFCCB3.addEventListener('click', debugFCCB3);
} else {
  scopeFCCB3.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B4: Mutate an Array Declared with const */

/* The const declaration has many use cases in modern JavaScript. Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let. */

/* However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier. */

/* Here below you can mutate the object itself and the variable will still point to the altered array. Like all arrays, the array elements in testArrayConst are mutable, but because const was used, you cannot use the variable identifier testArrayConst to point to a different array using the assignment operator. */

const testArrayConst = ["Ok", 0, 2];
// testArrayConst = ["XD", 1, 1]; -> This will throw an error.
testArrayConst[2] = 1;

/* OUTPUT CODE */

const btnFCCB4 = document.getElementById('run-fcc-task-b4');
const scopeFCCB4 = document.getElementById('fcc-task-b4');

function debugFCCB4() {
  scopeFCCB4.innerHTML = outputResponse + testArrayConst[2];
}

if (btnFCCB4 !== null && scopeFCCB4 !== null) {
  btnFCCB4.addEventListener('click', debugFCCB4);
} else {
  scopeFCCB4.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B4: Prevent Object Mutation */

/* As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides function Object.freeze to prevent data mutation. Once the object if frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error. */

let preventObjectMutation = {
  name: 'Object',
  ID: 0
};

Object.freeze(preventObjectMutation);
preventObjectMutation.name = "What?";
preventObjectMutation.newProp = "Test";

/* The preventObjectMutation.name and preventObjectMutation.newProp assignments will result in errors, and the console will display values: Object, 0. */

/* OUTPUT CODE */

const btnFCCB5 = document.getElementById('run-fcc-task-b5');
const scopeFCCB5 = document.getElementById('fcc-task-b5');

function debugFCCB5() {
  scopeFCCB5.innerHTML = outputResponse + preventObjectMutation.name + ": " + preventObjectMutation.ID;
}

if (btnFCCB5 !== null && scopeFCCB5 !== null) {
  btnFCCB5.addEventListener('click', debugFCCB5);
} else {
  scopeFCCB5.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B6: Use Arrow Functions to Write Concise Anonymous Functions */

/* In JS, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else. To achieve this, we often use the following syntax: */

const myConstFunction = function() {
  const myConst = "Some String Value";
  return myConst;
}

/* ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow funciton syntax: */

const myArrowFunction = () => {
  const myArrowConst = "Some String Value in Arrow Function";
  return myArrowConst;
}

/* However, when there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements: */

const myShortFunction = (someString) => "This is: " + someString;

/* This code will still return the string "This is:" by default. */

/* OUTPUT CODE */

const btnFCCB6 = document.getElementById('run-fcc-task-b6');
const scopeFCCB6 = document.getElementById('fcc-task-b6');

function debugFCCB6() {
  scopeFCCB6.innerHTML = outputResponse + myConstFunction() + ", " + myArrowFunction() + ", " + myShortFunction("really short function.");
}

if (btnFCCB6 !== null && scopeFCCB6 !== null) {
  btnFCCB6.addEventListener('click', debugFCCB6);
} else {
  scopeFCCB6.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B7: Write Arrow Functions with Parameters */

/* Just like a regular function, you can pass arguments into an arrow function. */

const roundUp = (inputValue) => Math.ceil(inputValue);

/* However, if an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted. */

const doubleUp = inputValue => inputValue * 2;

/* It is possible to pass more than one argument into an arrow function: */

const multiplyNumbers = (inputValue, multiplyBy) => inputValue * multiplyBy;

/* OUTPUT CODE */

const btnFCCB7 = document.getElementById('run-fcc-task-b7');
const scopeFCCB7 = document.getElementById('fcc-task-b7');

function debugFCCB7() {
  scopeFCCB7.innerHTML = outputResponse + roundUp(8.02) + ". Double Up: " + doubleUp(256) + ". Multiply: " + multiplyNumbers(256, 4) + ".";
}

if (btnFCCB7 !== null && scopeFCCB7 !== null) {
  btnFCCB7.addEventListener('click', debugFCCB7);
} else {
  scopeFCCB7.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B8: Set Default Parameters for Your Functions */

/* In order to help us create more flexible functions, ES6 introduces default parameters for functions. The default parameter kicks in when the argument is not specified (it is undefined). As you can see, the parameter name will receive its default value Stranger when you do not provide a value for the parameter. You can add default values for as many parameters as you want. */

const gameGreeting = (name = "Stranger") => "Hello " + name + "!";

/* OUTPUT CODE */

const btnFCCB8 = document.getElementById('run-fcc-task-b8');
const scopeFCCB8= document.getElementById('fcc-task-b8');

function debugFCCB8() {
  scopeFCCB8.innerHTML = outputResponse + gameGreeting();
}

if (btnFCCB8 !== null && scopeFCCB8 !== null) {
  btnFCCB8.addEventListener('click', debugFCCB8);
} else {
  scopeFCCB8.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B9: Use the Rest Parameter with Function Parameters */

/* In order to help us create more flexible functions, ES6 Introduces the REST PARAMETER for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function. */

function howManyArguments(...args) {
  return "We've passed: " + arguments.length + " arguments.";
}

/* The debug would display the strings "We've passed 5 arguments. */

/* The rest parameter eliminates the need to check the ARGS array and allows us to apply map(), filter() and reduce() on the parameters array. */

/* OUTPUT CODE */

const btnFCCB9 = document.getElementById('run-fcc-task-b9');
const scopeFCCB9= document.getElementById('fcc-task-b9');

function debugFCCB9() {
  scopeFCCB9.innerHTML = outputResponse + howManyArguments(1,2,3,4,5);
}

if (btnFCCB9 !== null && scopeFCCB9!== null) {
  btnFCCB9.addEventListener('click', debugFCCB9);
} else {
  scopeFCCB9.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B10: Use the Spread Operator to Evaluate Arrays In-Place */

/* ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are excepted. */
