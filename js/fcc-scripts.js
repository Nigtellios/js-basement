/* Free Code Camp Tasks */

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
  oopsGlobal_T49 = 5; // oopsGlobal is defined without var so it has Global scope.
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

/* However, it is possible to have both local and global variables with the same name. If we declare anything this way, the local variable takes precendence over the global variable. */

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

/* Task 70: Introducint Else If Statements */

/* If we have multiple conditions that needs to be adressed, we can chain if's statements together with else if statements. */

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
    return "It's very hot outisde!";
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

/* If the break statement is ommited from a switch statement's case, the following case statement(s) are executed until a break is encountered. If we have multiple inputs with the same output, we can represent them in a switch statement like this: */

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

/* BlackJack - Actually, I have to write a programm that would count my cards. It is done by keeping track of the relative numbers of high and low cards remaining in the deck. Each Card is assigned a value according to the table below. Then the count is positive, the player should bet high. When the count is zero or negative, the player should bet low. */

/* First of all, I tried to  do it only via ifs, so I put everything in a dunction and forgot that it would not properly display my output with „Bet" and „Hold" because it would output every step instead of only calculated output. So the solution for this is to create switch inside function. */

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

/* 11.03.2021 - IT'S FINISHING TIME! <3 */