/* Free Code Camp Tasks */

/* Task 1: Basic JavaScript: Comment Your JavaScript Code */

// in-line comment
/* multi
line
comment */

/* Task 2: Basic JavaScript: Declare JavaScript Variables */

// 8 Different data types: undefined, null, boolean, string, symbol, bigint, number, and object.

var myName;

/* Task 3: Basic JavaScript: Storing Values with the Assignment Operator */

var a;
a = 7; // Now a stores value of 7. Any calculations to the right of = operator are performed
// on the left of the operator. Like +=, -= etc.

/* Task 4: Basic JavaScript: Assigning the Value of One Variable to Another */

var a;
a = 7;
var b;
b = a;

/* Task 5: Basic JavaScript: Initializing Variables with the Assignment Operator */

var a = 9; //Now it's the inital value of variable a.

/* Task 6: BBasic JavaScript: Understanding Uninitialized Variables */

// When JavaScript variables are declared, they have an initial value of undefined. 
// If you do a mathematical operation on an undefined variable your result will 
// be NaN which means "Not a Number". If you concatenate a string with an undefined 
// variable, you will get a literal string of "undefined".

var a;
var b;
var c;

a = 5;
b = 10;
c = "I am a";

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


/* Task 8: Basic JavaScript: Add Two Numbers with JavaScript */

var sum = 10 + 10; // 20

/* Task 9: Basic JavaScript: Subtract One Number from Another with JavaScript */

var difference = 45 - 33; // 12

/* Task 10: Basic JavaScript: Multiply Two Numbers with JavaScript */

var product = 8 * 10; // 80

/* Task 11: Basic JavaScript: Divide One Number by Another with JavaScript */

var quotient = 66 / 33; // 2

/* Task 12: Basic JavaScript: Increment a Number with JavaScript */

var myVar = 87;
myVar++;
console.log(myVar);

/* Task 13: Basic JavaScript: Decrement a Number with JavaScript */

var myVar = 11;
myVar--; // 10

/* Task 14: Basic JavaScript: Create Decimal Numbers with JavaScript */

var myDecimal = 5.8;

/* Task 15: Basic JavaScript: Multiply Two Decimals with JavaScript */

var product = 2.0 * 2.5; // 5

/* Task 16: Basic JavaScript: Divide One Decimal by Another with JavaScript */

var quotient = 4.4 / 2.0; // 2.2

/* Task 17: Basic JavaScript: Finding a Remainder in JavaScript */

var remainder;
remainder = 11;
remainder = remainder % 3; // 2

/* Task 18: Basic JavaScript: Compound Assignment With Augmented Addition */

var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

/* Task 19: Basic JavaScript: Compound Assignment With Augmented Subtraction */

var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

/* Task 20: Basic JavaScript: Compound Assignment With Augmented Multiplication */

var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

/* Task 21: Basic JavaScript: Compound Assignment With Augmented Division */

var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

/* Task 22: Basic JavaScript: Declare String Variables */

var myFirstName;
var myLastName;

myFirstName = "Jakub";
myLastName = "Kowalski";

/* Task 23: Basic JavaScript: Escaping Literal Quotes in Strings */

// In JavaScript, you can escape a quote from considering it as an end of string quote by 
// placing a backslash (\) in front of the quote.

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

/* Task 24: Basic JavaScript: Quoting Strings with Single Quotes */

// Remember, a string has the same kind of quote at the beginning and end. 
// But if you have that same quote somewhere in the middle, the string will stop early and throw an error.
// That's why we can use single quotes in strings too.

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/* Task 25: Basic JavaScript: Escape Sequences in Strings */

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

/* Task 26: Basic JavaScript: Concatenating Strings with Plus Operator */

var myStr = "This is the start. " + "This is the end.";

/* Task 27: Basic JavaScript: Concatenating Strings with the Plus Equals Operator */

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/* Task 28: Basic JavaScript: Constructing Strings with Variables */

var myName = "Jakub";
var myStr = "My name is " + myName + " and I am well!";

/* Task 29: Basic JavaScript: Appending Variables to Strings */

var someAdjective = "Okay";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

/* Task 30: Basic JavaScript: Find the Length of a String */

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

/* Task 31: Basic JavaScript: Use Bracket Notation to Find the First Character in a String */