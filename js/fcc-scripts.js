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

var myNameT2;
myNameT2 = "Jakub";

/* OUTPUT CODE */

const btnFCC2 = document.getElementById('run-fcc-task-2');
const scopeFCC2 = document.getElementById('fcc-task-2');

function debugFCC2() {
  scopeFCC2.innerHTML = outputResponse + myNameT2;
}

if (btnFCC2 !== null && scopeFCC2 !== null) {
  btnFCC2.addEventListener('click', debugFCC2);
} else {
  scopeFCC2.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 3: Basic JavaScript: Storing Values with the Assignment Operator */

var aT3;
aT3 = 7; // Now a stores value of 7. Any calculations to the right of = operator are performed
// on the left of the operator. Like +=, -= etc.

/* OUTPUT CODE */

const btnFCC3 = document.getElementById('run-fcc-task-3');
const scopeFCC3 = document.getElementById('fcc-task-3');

function debugFCC3() {
  scopeFCC3.innerHTML = outputResponse + aT3;
}

if (btnFCC3 !== null && scopeFCC3 !== null) {
  btnFCC3.addEventListener('click', debugFCC3);
} else {
  scopeFCC3.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 4: Basic JavaScript: Assigning the Value of One Variable to Another */

var aT4;
aT4 = 7;
var bT4;
bT4 = aT4;

/* OUTPUT CODE */

const btnFCC4 = document.getElementById('run-fcc-task-4');
const scopeFCC4 = document.getElementById('fcc-task-4');

function debugFCC4() {
  scopeFCC4.innerHTML = outputResponse + aT4 + ', ' + bT4;
}

if (btnFCC4 !== null && scopeFCC4 !== null) {
  btnFCC4.addEventListener('click', debugFCC4);
} else {
  scopeFCC4.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 5: Basic JavaScript: Initializing Variables with the Assignment Operator */

var aT5 = 9; //Now it's the inital value of variable a.

/* OUTPUT CODE */

const btnFCC5 = document.getElementById('run-fcc-task-5');
const scopeFCC5 = document.getElementById('fcc-task-5');

function debugFCC5() {
  scopeFCC5.innerHTML = outputResponse + aT5;
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

var aT6;
var bT6;
var cT6;

aT6 = 5;
bT6 = 10;
cT6 = "I am a";

/* OUTPUT CODE */

const btnFCC6 = document.getElementById('run-fcc-task-6');
const scopeFCC6 = document.getElementById('fcc-task-6');

function debugFCC6() {
  scopeFCC6.innerHTML = outputResponse + aT6 + ', ' + bT6 + ', ' + cT6;
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

var sumT8 = 10 + 10; // 20

/* OUTPUT CODE */

const btnFCC8 = document.getElementById('run-fcc-task-8');
const scopeFCC8 = document.getElementById('fcc-task-8');

function debugFCC8() {
  scopeFCC8.innerHTML = outputResponse + sumT8;
}

if (btnFCC8 !== null && scopeFCC8 !== null) {
  btnFCC8.addEventListener('click', debugFCC8);
} else {
  scopeFCC8.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 9: Basic JavaScript: Subtract One Number from Another with JavaScript */

var differenceT9 = 45 - 33; // 12

/* OUTPUT CODE */

const btnFCC9 = document.getElementById('run-fcc-task-9');
const scopeFCC9 = document.getElementById('fcc-task-9');

function debugFCC9() {
  scopeFCC9.innerHTML = outputResponse + differenceT9;
}

if (btnFCC9 !== null && scopeFCC9 !== null) {
  btnFCC9.addEventListener('click', debugFCC9);
} else {
  scopeFCC9.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 10: Basic JavaScript: Multiply Two Numbers with JavaScript */

var productT10 = 8 * 10; // 80

/* OUTPUT CODE */

const btnFCC10 = document.getElementById('run-fcc-task-10');
const scopeFCC10 = document.getElementById('fcc-task-10');

function debugFCC10() {
  scopeFCC10.innerHTML = outputResponse + productT10;
}

if (btnFCC10 !== null && scopeFCC10 !== null) {
  btnFCC10.addEventListener('click', debugFCC10);
} else {
  scopeFCC10.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 11: Basic JavaScript: Divide One Number by Another with JavaScript */

var quotientT11 = 66 / 33; // 2

/* OUTPUT CODE */

const btnFCC11 = document.getElementById('run-fcc-task-11');
const scopeFCC11 = document.getElementById('fcc-task-11');

function debugFCC11() {
  scopeFCC11.innerHTML = outputResponse + quotientT11;
}

if (btnFCC11 !== null && scopeFCC11 !== null) {
  btnFCC11.addEventListener('click', debugFCC11);
} else {
  scopeFCC11.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 12: Basic JavaScript: Increment a Number with JavaScript */

var myVarT12 = 87;
myVarT12++;

/* OUTPUT CODE */

const btnFCC12 = document.getElementById('run-fcc-task-12');
const scopeFCC12 = document.getElementById('fcc-task-12');

function debugFCC12() {
  scopeFCC12.innerHTML = outputResponse + myVarT12;
}

if (btnFCC12 !== null && scopeFCC12 !== null) {
  btnFCC12.addEventListener('click', debugFCC12);
} else {
  scopeFCC12.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 13: Basic JavaScript: Decrement a Number with JavaScript */

var myVarT13 = 11;
myVarT13--; // 10

/* OUTPUT CODE */

const btnFCC13 = document.getElementById('run-fcc-task-13');
const scopeFCC13 = document.getElementById('fcc-task-13');

function debugFCC13() {
  scopeFCC13.innerHTML = outputResponse + myVarT13;
}

if (btnFCC13 !== null && scopeFCC13 !== null) {
  btnFCC13.addEventListener('click', debugFCC13);
} else {
  scopeFCC13.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 14: Basic JavaScript: Create Decimal Numbers with JavaScript */

var myDecimalT14 = 5.8;

/* OUTPUT CODE */

const btnFCC14 = document.getElementById('run-fcc-task-14');
const scopeFCC14 = document.getElementById('fcc-task-14');

function debugFCC14() {
  scopeFCC14.innerHTML = outputResponse + myDecimalT14;
}

if (btnFCC14 !== null && scopeFCC14 !== null) {
  btnFCC14.addEventListener('click', debugFCC14);
} else {
  scopeFCC14.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 15: Basic JavaScript: Multiply Two Decimals with JavaScript */

var productT15 = 2.0 * 2.5; // 5

/* OUTPUT CODE */

const btnFCC15 = document.getElementById('run-fcc-task-15');
const scopeFCC15 = document.getElementById('fcc-task-15');

function debugFCC15() {
  scopeFCC15.innerHTML = outputResponse + productT15;
}

if (btnFCC15 !== null && scopeFCC15 !== null) {
  btnFCC15.addEventListener('click', debugFCC15);
} else {
  scopeFCC15.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 16: Basic JavaScript: Divide One Decimal by Another with JavaScript */

var quotientT16 = 4.4 / 2.0; // 2.2

/* OUTPUT CODE */

const btnFCC16 = document.getElementById('run-fcc-task-16');
const scopeFCC16 = document.getElementById('fcc-task-16');

function debugFCC16() {
  scopeFCC16.innerHTML = outputResponse + quotientT16;
}

if (btnFCC16 !== null && scopeFCC16 !== null) {
  btnFCC16.addEventListener('click', debugFCC16);
} else {
  scopeFCC16.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 17: Basic JavaScript: Finding a Remainder in JavaScript */

var remainderT17;
remainderT17 = 11;
remainderT17 = remainderT17 % 3; // 2

/* OUTPUT CODE */

const btnFCC17 = document.getElementById('run-fcc-task-17');
const scopeFCC17 = document.getElementById('fcc-task-17');

function debugFCC17() {
  scopeFCC17.innerHTML = outputResponse + remainderT17;
}

if (btnFCC17 !== null && scopeFCC17 !== null) {
  btnFCC17.addEventListener('click', debugFCC17);
} else {
  scopeFCC17.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 18: Basic JavaScript: Compound Assignment With Augmented Addition */

var aT18 = 3;
var bT18 = 17;
var cT18 = 12;

aT18 += 12;
bT18 += 9;
cT18 += 7;

/* OUTPUT CODE */

const btnFCC18 = document.getElementById('run-fcc-task-18');
const scopeFCC18 = document.getElementById('fcc-task-18');

function debugFCC18() {
  scopeFCC18.innerHTML = outputResponse + aT18 + ', ' + bT18 + ', ' + cT18;
}

if (btnFCC18 !== null && scopeFCC18 !== null) {
  btnFCC18.addEventListener('click', debugFCC18);
} else {
  scopeFCC18.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 19: Basic JavaScript: Compound Assignment With Augmented Subtraction */

var aT19 = 11;
var bT19 = 9;
var cT19 = 3;

aT19 -= 6;
bT19 -= 15;
cT19 -= 1;

/* OUTPUT CODE */

const btnFCC19 = document.getElementById('run-fcc-task-19');
const scopeFCC19 = document.getElementById('fcc-task-19');

function debugFCC19() {
  scopeFCC19.innerHTML = outputResponse + aT19 + ', ' + bT19 + ', ' + cT19;
}

if (btnFCC19 !== null && scopeFCC19 !== null) {
  btnFCC19.addEventListener('click', debugFCC19);
} else {
  scopeFCC19.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 20: Basic JavaScript: Compound Assignment With Augmented Multiplication */

var aT20 = 5;
var bT20 = 12;
var cT20 = 4.6;

aT20 *= 5;
bT20 *= 3;
cT20 *= 10;

/* OUTPUT CODE */

const btnFCC20 = document.getElementById('run-fcc-task-20');
const scopeFCC20 = document.getElementById('fcc-task-20');

function debugFCC20() {
  scopeFCC20.innerHTML = outputResponse + aT20 + ', ' + bT20 + ', ' + cT20;
}

if (btnFCC20 !== null && scopeFCC20 !== null) {
  btnFCC20.addEventListener('click', debugFCC20);
} else {
  scopeFCC20.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 21: Basic JavaScript: Compound Assignment With Augmented Division */

var aT21 = 48;
var bT21 = 108;
var cT21 = 33;

aT21 /= 12;
bT21 /= 4;
cT21 /= 11;


/* OUTPUT CODE */

const btnFCC21 = document.getElementById('run-fcc-task-21');
const scopeFCC21 = document.getElementById('fcc-task-21');

function debugFCC21() {
  scopeFCC21.innerHTML = outputResponse + aT21 + ', ' + bT21 + ', ' + cT21;
}

if (btnFCC21 !== null && scopeFCC21 !== null) {
  btnFCC21.addEventListener('click', debugFCC21);
} else {
  scopeFCC21.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 22: Basic JavaScript: Declare String Variables */

var myFirstNameT22;
var myLastNameT22;

myFirstNameT22 = "Jakub";
myLastNameT22 = "Kowalski";

/* OUTPUT CODE */

const btnFCC22 = document.getElementById('run-fcc-task-22');
const scopeFCC22 = document.getElementById('fcc-task-22');

function debugFCC22() {
  scopeFCC22.innerHTML = outputResponse + myFirstNameT22 + myLastNameT22;
}

if (btnFCC22 !== null && scopeFCC22 !== null) {
  btnFCC22.addEventListener('click', debugFCC22);
} else {
  scopeFCC22.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 23: Basic JavaScript: Escaping Literal Quotes in Strings */

// In JavaScript, you can escape a quote from considering it as an end of string quote by 
// placing a backslash (\) in front of the quote.

var myStrT23 = "I am a \"double quoted\" string inside \"double quotes\".";

/* OUTPUT CODE */

const btnFCC23 = document.getElementById('run-fcc-task-23');
const scopeFCC23 = document.getElementById('fcc-task-23');

function debugFCC23() {
  scopeFCC23.innerHTML = outputResponse + myStrT23;
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

var myStrT24 = '<a href="http://www.example.com" target="_blank">Link</a>';

/* OUTPUT CODE */

const btnFCC24 = document.getElementById('run-fcc-task-24');
const scopeFCC24 = document.getElementById('fcc-task-24');

function debugFCC24() {
  scopeFCC24.innerHTML = outputResponse + myStrT24;
}

if (btnFCC24 !== null && scopeFCC24 !== null) {
  btnFCC24.addEventListener('click', debugFCC24);
} else {
  scopeFCC24.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 25: Basic JavaScript: Escape Sequences in Strings */

var myStrT25 = "FirstLine\n\t\\SecondLine\nThirdLine";

/* OUTPUT CODE */

const btnFCC25 = document.getElementById('run-fcc-task-25');
const scopeFCC25 = document.getElementById('fcc-task-25');

function debugFCC25() {
  scopeFCC25.innerHTML = outputResponse + myStrT25;
}

if (btnFCC25 !== null && scopeFCC25 !== null) {
  btnFCC25.addEventListener('click', debugFCC25);
} else {
  scopeFCC25.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 26: Basic JavaScript: Concatenating Strings with Plus Operator */

var myStrT26 = "This is the start. " + "This is the end.";

/* OUTPUT CODE */

const btnFCC26 = document.getElementById('run-fcc-task-26');
const scopeFCC26 = document.getElementById('fcc-task-26');

function debugFCC26() {
  scopeFCC26.innerHTML = outputResponse + myStrT26;
}

if (btnFCC26 !== null && scopeFCC26 !== null) {
  btnFCC26.addEventListener('click', debugFCC26);
} else {
  scopeFCC26.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 27: Basic JavaScript: Concatenating Strings with the Plus Equals Operator */

var myStrT27 = "This is the first sentence. ";
myStrT27 += "This is the second sentence.";

/* OUTPUT CODE */

const btnFCC27 = document.getElementById('run-fcc-task-27');
const scopeFCC27 = document.getElementById('fcc-task-27');

function debugFCC27() {
  scopeFCC27.innerHTML = outputResponse + myStrT27;
}

if (btnFCC27 !== null && scopeFCC27 !== null) {
  btnFCC27.addEventListener('click', debugFCC27);
} else {
  scopeFCC27.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 28: Basic JavaScript: Constructing Strings with Variables */

var myNameT28 = "Jakub";
var myStrT28 = "My name is " + myNameT28 + " and I am well!";

/* OUTPUT CODE */

const btnFCC28 = document.getElementById('run-fcc-task-28');
const scopeFCC28 = document.getElementById('fcc-task-28');

function debugFCC28() {
  scopeFCC28.innerHTML = outputResponse + myStrT28;
}

if (btnFCC28 !== null && scopeFCC28 !== null) {
  btnFCC28.addEventListener('click', debugFCC28);
} else {
  scopeFCC28.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 29: Basic JavaScript: Appending Variables to Strings */

var someAdjectiveT29 = "Okay";
var myStrT29 = "Learning to code is ";
var T29response = myStrT29 += someAdjectiveT29;

/* OUTPUT CODE */

const btnFCC29 = document.getElementById('run-fcc-task-29');
const scopeFCC29 = document.getElementById('fcc-task-29');

function debugFCC29() {
  scopeFCC29.innerHTML = outputResponse + T29response;
}

if (btnFCC29 !== null && scopeFCC29 !== null) {
  btnFCC29.addEventListener('click', debugFCC29);
} else {
  scopeFCC29.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 30: Basic JavaScript: Find the Length of a String */

var lastNameLengthT30 = 0;
var lastNameT30 = "Lovelace";
lastNameLengthT30 = lastNameT30.length;

/* OUTPUT CODE */

const btnFCC30 = document.getElementById('run-fcc-task-30');
const scopeFCC30 = document.getElementById('fcc-task-30');

function debugFCC30() {
  scopeFCC30.innerHTML = outputResponse + lastNameLengthT30;
}

if (btnFCC30 !== null && scopeFCC30 !== null) {
  btnFCC30.addEventListener('click', debugFCC30);
} else {
  scopeFCC30.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 31: Basic JavaScript: Use Bracket Notation to Find the First Character in a String */

var firstLetterOfLastNameT31 = "";
var lastNameT31 = "Lovelace";
firstLetterOfLastNameT31 = lastNameT31[0]; // L

/* OUTPUT CODE */

const btnFCC31 = document.getElementById('run-fcc-task-31');
const scopeFCC31 = document.getElementById('fcc-task-31');

function debugFCC31() {
  scopeFCC31.innerHTML = outputResponse + firstLetterOfLastNameT31;
}

if (btnFCC31 !== null && scopeFCC31 !== null) {
  btnFCC31.addEventListener('click', debugFCC31);
} else {
  scopeFCC31.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 32: Basic JavaScript: Understand String Immutability */

var myStrT32 = "Jello World";
myStrT32[0] = "H"; 
// ^It can't be done, strings are immutable. Proper way is below.
myStrT32 = "Hello World";

/* OUTPUT CODE */

const btnFCC32 = document.getElementById('run-fcc-task-32');
const scopeFCC32 = document.getElementById('fcc-task-32');

function debugFCC32() {
  scopeFCC32.innerHTML = outputResponse + myStrT32;
}

if (btnFCC32 !== null && scopeFCC32 !== null) {
  btnFCC32.addEventListener('click', debugFCC32);
} else {
  scopeFCC32.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 33: Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String */

var lastNameT33 = "Kowalsky";

var thirdLetterOfLastNameT33 = lastNameT33[2]; // third letter - w

/* OUTPUT CODE */

const btnFCC33 = document.getElementById('run-fcc-task-33');
const scopeFCC33 = document.getElementById('fcc-task-33');

function debugFCC33() {
  scopeFCC33.innerHTML = outputResponse + thirdLetterOfLastNameT33;
}

if (btnFCC33 !== null && scopeFCC33 !== null) {
  btnFCC33.addEventListener('click', debugFCC33);
} else {
  scopeFCC33.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 34: Basic JavaScript: Use Bracket Notation to Find the Last Character in a String */

var lastLetterOfLastNameT34 = lastNameT33[lastNameT33.length - 1];

/* OUTPUT CODE */

const btnFCC34 = document.getElementById('run-fcc-task-34');
const scopeFCC34 = document.getElementById('fcc-task-34');

function debugFCC34() {
  scopeFCC34.innerHTML = outputResponse + lastLetterOfLastNameT34;
}

if (btnFCC34 !== null && scopeFCC34 !== null) {
  btnFCC34.addEventListener('click', debugFCC34);
} else {
  scopeFCC34.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 35: Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String */

var secondToLastLetterOfLastNameT33 = lastNameT33[lastNameT33.length - 2];

/* OUTPUT CODE */

const btnFCC35 = document.getElementById('run-fcc-task-35');
const scopeFCC35 = document.getElementById('fcc-task-35');

function debugFCC35() {
  scopeFCC35.innerHTML = outputResponse + secondToLastLetterOfLastNameT33;
}

if (btnFCC35 !== null && scopeFCC35 !== null) {
  btnFCC35.addEventListener('click', debugFCC35);
} else {
  scopeFCC35.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 36: Basic JavaScript: Word Blanks */

var myNounT36 = "dog";
var myAdjectiveT36 = "big";
var myVerbT36 = "ran";
var myAdverbT36 = "quickly";

var wordBlanksT36 = "The " + myNounT36 + " was " + myAdjectiveT36 + " and he just " + myVerbT36 + " very " + myAdverbT36;

/* OUTPUT CODE */

const btnFCC36 = document.getElementById('run-fcc-task-36');
const scopeFCC36 = document.getElementById('fcc-task-36');

function debugFCC36() {
  scopeFCC36.innerHTML = outputResponse + wordBlanksT36;
}

if (btnFCC36 !== null && scopeFCC36 !== null) {
  btnFCC36.addEventListener('click', debugFCC36);
} else {
  scopeFCC36.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 37: Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays */

var myArrayT37 = ["LeMoiJelly", 0];

/* OUTPUT CODE */

const btnFCC37 = document.getElementById('run-fcc-task-37');
const scopeFCC37 = document.getElementById('fcc-task-37');

function debugFCC37() {
  scopeFCC37.innerHTML = outputResponse + myArrayT37[0] + ', ' + myArrayT37[1];
}

if (btnFCC37 !== null && scopeFCC37 !== null) {
  btnFCC37.addEventListener('click', debugFCC37);
} else {
  scopeFCC37.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 38: Basic JavaScript: Nest one Array within Another Array */

var myArrayT38 = [["Nested Array", 0]];

/* OUTPUT CODE */

const btnFCC38 = document.getElementById('run-fcc-task-38');
const scopeFCC38 = document.getElementById('fcc-task-38');

function debugFCC38() {
  scopeFCC38.innerHTML = outputResponse + myArrayT38[0][0] + ', ' + myArrayT38[0][1];
}

if (btnFCC38 !== null && scopeFCC38 !== null) {
  btnFCC38.addEventListener('click', debugFCC38);
} else {
  scopeFCC38.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 39: Basic JavaScript: Access Array Data with Indexes */

var myArrayT39 = [50,60,70];
var myDataT39 = myArrayT39[0]; // 50

/* OUTPUT CODE */

const btnFCC39 = document.getElementById('run-fcc-task-39');
const scopeFCC39 = document.getElementById('fcc-task-39');

function debugFCC39() {
  scopeFCC39.innerHTML = outputResponse + myDataT39;
}

if (btnFCC39 !== null && scopeFCC39 !== null) {
  btnFCC39.addEventListener('click', debugFCC39);
} else {
  scopeFCC39.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 40: Basic JavaScript: Modify Array Data With Indexes */

var myArrayT40 = [18,64,99];
myArrayT40[0] = 45; // now index 0 is 45 instead of 18

/* OUTPUT CODE */

const btnFCC40 = document.getElementById('run-fcc-task-40');
const scopeFCC40 = document.getElementById('fcc-task-40');

function debugFCC40() {
  scopeFCC40.innerHTML = outputResponse + myArrayT40[0];
}

if (btnFCC40 !== null && scopeFCC40 !== null) {
  btnFCC40.addEventListener('click', debugFCC40);
} else {
  scopeFCC40.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 41: Basic JavaScript: Access Multi-Dimensional Arrays With Indexes */

var myArrayT41 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// We are going for item with value 8, so:
var myDataT41 = myArrayT41[2][1];

/* Task 42: Basic JavaScript: Manipulate Arrays With push() */

var myArrayT42 = [["John", 23], ["cat", 2]];
myArrayT42.push(["dog", 3]);
console.log("Task 43: " + myArrayT42);

/* Task 43: Basic JavaScript: Manipulate Arrays With pop() */

var myArrayT43 = [["John", 23], ["cat", 2]];
var removedFromMyArrayT43 = myArrayT43.pop(); // So now we assigned .poped value to variable removedFromMyArray

/* Task 44: Basic JavaScript: Manipulate Arrays With shift() */

var myArrayT44 = [["John", 23], ["dog", 3]];
var removedFromMyArrayT44 = myArrayT44.shift(); // now removedFromMyArray has ["John", 23]

/* Task 45: Basic JavaScript: Manipulate Arrays With unshift() */

var myArrayT45 = [["John", 23], ["dog", 3]];
myArrayT45.shift();
myArrayT45.unshift(["Paul", 35]); // Now we have also ["Paul", 35] at the beginning of array myArray

/* Task 46: Basic JavaScript: Shopping List */

var myListT46 = [["Milk", 3], ["Butter", 8], ["Chicken Leg", 10], ["Vodka", 40], ["Pen", 5]];

/* Task 47: Basic JavaScript: Write Reusable JavaScript with Functions */

function reusableFunctionT47() {
  console.log("Hi World")
}

reusableFunctionT47(); // We call the function

/* Task 48: Basic JavaScript: Passing Values to Functions with Arguments */

function functionWithArgsT48(arg1T48, arg2T48) {
  console.log("Task 48: " + (arg1T48 + arg2T48)); // It outputs sum of arg1 and arg2
}

functionWithArgsT48(3, 16);

/* Task 49: Basic JavaScript: Global Scope and Functions */

var myGlobalT49 = 10;

function funT49() {
  oopsGlobalT49 = 5; // oopsGlobal is defined without var so it has Global scope.
}

function fun2T49() {
  var outputT49 = "";
  if (typeof myGlobalT49 != "undefined") {
    outputT49 += "myGlobal: " + myGlobalT49;
  }
  if (typeof oopsGlobalT49 != "undefined") {
    outputT49 += " oopsGlobal: " + oopsGlobalT49;
  }
  console.log("Task 49: " + outputT49);
}

fun2T49();

/* Task 50: Basic JavaScript: Local Scope and Functions */

/* Variables declared within a function, as well as function parameters itself has local scope. They are only visible within that function. */

function letsTestIt() {
  var loc = "foo";
  console.log("Task 50: " + loc);
}

letsTestIt(); //log "foo"
// console.log("Task 50: " + loc); // is not defined because of local scope

/* Task 51: Global vs. Local Scope in Functions */

/* However, it is possible to have both local and global variables with the same name. If we declare anything this way, the local variable takes precendence over the global variable. */

const globalOne = "What";
function locTest() {
  var globalOne = "World";
  return globalOne;
}

console.log("Task 51: " + globalOne);

/* But as far as I see, in ES6+ now the local one just doesn't work and the final value is „What". */

/* Task 52: Return a Value from a Function with Return */

/* We can pass values into a function with arguments. You can use a return statement to send a value back out of a function. */

function plusVal52(pv52Arg) {
  return pv52Arg + 3;
}

const pv52Answer = plusVal52(10);
console.log("Task 52: " + pv52Answer);

/* Task 53: Understanding Undefined Value returned from a Function */

/* Function can include the return statement but it does not have to. In this case when you call this function it would process inner code but returned value would be undefined. */

var checkSum = 0;

function notDefined(sumNum) {
  checkSum = checkSum + sumNum;
}

notDefined(5);
console.log("Task 53: " + checkSum);

/* But as far as I see, in ES6+ now it can not return anything so the output of checkSum would be 5. */

/* Task 54: Assignment with a Returned Value */

/* In JS everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable. */

var process = 0;

function passProcess(number) {
  return (number + 10)/5;
}

process = passProcess(100);
//We are assigning returned value to variable.

console.log("Task 54: " + process);

/* Task 55: Stand in Line (QUEUE) */

/* in Computer Science a QUEUE is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue. */

/* First of all, we want to add the number to the end of array, then remove the first element of the array. */

function pushArray(arr, arrItem) {
  testArray.push(arrItem);
  var arrItem = testArray.shift();
  return arrItem;
}

var testArray = [1,2,3,4,5];

console.log("Task 55: Before: " + JSON.stringify(testArray));
console.log("Task 55: Pushing array with: " + pushArray(testArray, 6));
console.log("Task 55: After: " + JSON.stringify(testArray));

/* Task 56: Understanding Boolean Values */

/* Boolean is another data type. They may only be one of two values: true or false. They are basically little on-off switches, there TRUE is ON, and FALSE is OFF. These two states are mutually exclusive. Booleans are never written with QUOTES! */

function booleanTest() {
  return true;
  //Only thing that we want is to return TRUE.
}

var bT = booleanTest();

console.log("Task 56: Value of bT is (booleanTest): " + bT);

/* Task 57: Use Conditional Logic with If Statements */

/* If statements are used to make decisions in code. The keyword If tells JavaScript to execute the code in curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false. When condition will be true -> code in curly brackets will execute statements inside them, while FALSE -> they will not. */

function testIfs(testIfsCondition) {
  if(testIfsCondition) {
    return "This condition was true";
  }
  //Otherwise
  return "This condition was false";
}

console.log("Task 57: " + testIfs(true));
console.log("Task 57: " + testIfs(false));

/* Task 58: Comparison with the Equality Operator */

/* There are many comparison operators in JS. All of these operators return a boolean true or false. The most basic operator is equality == and it compares two values and returns true if they're equivalent or false if they are not. */

function testEqual(testEqualVal) {
  if (testEqualVal == 50) {
    return "Your testEqualVal is equivalent to value of 50.";
  }
  return "Your testEqualVal isn't equivalent to value of 50.";
}

console.log("Task 58: " + testEqual(50));

/* Task 59: Comparison with the Strict Equality Operator */

/* Strict equality === is the counterpart to the equality operator ==. However, unlike the equality operator which attempts to convert both values being compared to a common type, the strict equality operator DOES NOT perform a type conversion. */

function testStrict(testStrictVal) {
  if(testStrictVal === "XD") {
    return "Your testStrictVal is equal and the same type of XD String";
  }
  return "Your testStrictVal is NOT EQUAL and the NOT same type of XD String";
}

console.log("Task 59: " + testStrict("XD"));

/* Task 60: Practice comparing different values */

/* In JS you can determine the type of a variable or a value with TYPEOF operator */

var comp1 = 5;
var comp2 = '5';

console.log("Task 60: comp1 is: " + typeof comp1);
console.log("Task 60: comp2 is: " + typeof comp2);

function compareComps(comp1, comp2) {
  if (comp1 === comp2) {
    return "comp1 and comp2 are equal";
  }
  return "comp1 and comp2 are not equal";
}

console.log("Task 60: " + compareComps(5, '5'));

/* Task 61: Comparison with inqeuality operator */

/* The inequality operator (!=) is the opposite of the equality operator. It means „Not Equal". and returns false where equality would return true and vice versa. The same like equality operator, the inequality operator will convert data types of values while comparing. */

function testNotEqual(testNotEqualVal) {
  if(testNotEqualVal != 99) {
    return "TestNotEqual Value isn't equal 99."
  }
  return "TNEV is equal."
}

console.log("Task 61: " + testNotEqual(98));

/* Task 62: Comparison with Strict Inequality Operator */

/* Strict inequality operator (!==) is the logical opposite of the strict equality operator. „Stricty Not Equal" returns FALSE where strict equality woulr return true and vice versa. IT WILL NOT CONVERT DATA TYPES. */

function testStrictNotEqual(testStrictNotEqualVal) {
  if(testStrictNotEqualVal !== 564) {
    return "testStrictNotEqualVal isn't equal 564.";
  }
  return "testStrictNotEqualVal is equal 564.";
}

console.log("Task 62: " + testStrictNotEqual(563));

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

console.log("Task 63: " + testGreaterThan(301));

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

console.log("Task 64: " + testGreaterOrEqual(20));

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

console.log("Task 65: " + testLessThan(68));

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

console.log("Task 66: " + testLessThanOrEqual(68));

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

console.log("Task 67: " + testLogicalAnd(60));

/* Task 68: Comparisons with the Logical OR Operator */

/* The logical OR operator (||) returns true if either of the operands is TRUE. Otherwise it returns FALSE. It's composed of two pipe symbols ||. */

/* Let's write a function that would return GREAT when number would not be between 1 and 100. */

function testLogicalOr(testLogicalOrVal) {
  if(testLogicalOrVal > 1 || testLogicalOrVal < 100) {
    return "GREAT!";
  }
  return "Unfortunately, your number is between 1 and 100.";
}

console.log("Task 68: " + testLogicalOr(101));

/* Task 69: Introducing Else Statements */

/* With else, we can execute code when previous IF condition is false. Normally, nothing special would happen if we just declare some boolean test inside if condition without ELSE. */

function testIfElse(testIfElseVal) {
  if(testIfElseVal === "password") {
    return "You are logged in!";
  } else {
    return "Your password is incorrect.";
  }
}

console.log("Task 69: " + testIfElse("harry"));

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

console.log("Task 70: " + testElseIf("email@mailorg"));

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

console.log("Task 71: " + testIfOrder(44));

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

console.log("Task 72: " + testIfChain(18));

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

console.log("Task 73: " + golfScore(5, 4));

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

console.log("Task 74: Which colour has Ferrari car?\na. Red\nb. Blue\nc. Green\nd. Yellow");
console.log("Task 74: " + testSwitch('d4'));

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
  
console.log("Task 75: Where are we going?");
console.log("Task 75: " + testSwitchDefault(3));

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

console.log("Task 76: " + testMultipleSwitch(2));

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

console.log("Task 77: " + replaceSwitch(2));

/* Task 78: Returning Boolean Values From Functions */

/* There are a few approaches to do comparisons with the equality operator (which return a boolean TRUE or FALSE.) Sometimes, people do things like: */

function booleanIsEqual(a1, b1) {
  if (a1 === b1) {
    return true;
  } else {
    return false;
  }
}

console.log('Task 78: ' + booleanIsEqual(1, 2));

/* But the more proper, and better way is to do this via: */

function booleanIsEqualVariant(aa1, bb1) {
  return aa1 === bb1;
}

console.log('Task 78: ' + booleanIsEqualVariant(1, 2));

/* It would give us False, because === returns TRUE or FALSE. */


/* Task 79: Return Early Pattern for Functions */

/* When a return statement is reached, the execution of the current function stops and control returns to the calling location. */

function earlyPattern() {
  console.log("Task 79: Early Pattern 1/2 Stage. ");
  return "Task 79: Early Pattern 2/2 Stage - from RETURN statement.";
  console.log("Task 79: Early Pattern - Statement never used.");
}

console.log('### FOLLOW UP ###' + ' ' + earlyPattern());

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

console.log("Task 80: " + cardCounter(2) + " " + cardCounter(6) + " " + cardCounter(7) + " " + cardCounter('A'));


/* Task 81: Build JavaScript Objects */

/* 03.03.2021 - IT'S REWORK TIME! <3 */

console.log("");
console.log("");