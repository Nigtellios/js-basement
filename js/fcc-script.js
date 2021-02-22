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

/* Task 6: Basic JavaScript: Understanding Uninitialized Variables */

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
console.log("Task 12: " + myVar);

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
console.log("Task 25: " + myStr);

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
console.log("Task 29: " + myStr);

/* Task 30: Basic JavaScript: Find the Length of a String */

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

/* Task 31: Basic JavaScript: Use Bracket Notation to Find the First Character in a String */

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // L
console.log("Task 31: " + lastName[0]);


/* Task 32: Basic JavaScript: Understand String Immutability */

var myStr = "Jello World";
myStr[0] = "H"; 
// ^It can't be done, strings are immutable. Proper way is below.
myStr = "Hello World";

/* Task 33: Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String */

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2]; // third letter - v

/* Task 34: Basic JavaScript: Use Bracket Notation to Find the Last Character in a String */

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

/* Task 35: Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String */

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

/* Task 36: Basic JavaScript: Word Blanks */

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " + myNoun + " was " + myAdjective + " and he just " + myVerb + " very " + myAdverb;


/* Task 37: Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays */

var myArray = ["LeMoiJelly", 0];

/* Task 38: Basic JavaScript: Nest one Array within Another Array */

var myArray = [["Nested Array, 0"]];

/* Task 39: Basic JavaScript: Access Array Data with Indexes */

var myArray = [50,60,70];
var myData = myArray[0]; // 50

/* Task 40: Basic JavaScript: Modify Array Data With Indexes */

var myArray = [18,64,99];
myArray[0] = 45; // now index 0 is 45 instead of 18

/* Task 41: Basic JavaScript: Access Multi-Dimensional Arrays With Indexes */

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// We are going for item with value 8, so:
var myData = myArray[2][1];

/* Task 42: Basic JavaScript: Manipulate Arrays With push() */

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log("Task 43: " + myArray);

/* Task 43: Basic JavaScript: Manipulate Arrays With pop() */

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(); // So now we assigned .poped value to variable removedFromMyArray

/* Task 44: Basic JavaScript: Manipulate Arrays With shift() */

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); // now removedFromMyArray has ["John", 23]

/* Task 45: Basic JavaScript: Manipulate Arrays With unshift() */

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]); // Now we have also ["Paul", 35] at the beginning of array myArray

/* Task 46: Basic JavaScript: Shopping List */

var myList = [["Milk", 3], ["Butter", 8], ["Chicken Leg", 10], ["Vodka", 40], ["Pen", 5]];

/* Task 47: Basic JavaScript: Write Reusable JavaScript with Functions */

function reusableFunction() {
  console.log("Hi World")
}

reusableFunction(); // We call the function

/* Task 48: Basic JavaScript: Passing Values to Functions with Arguments */

function functionWithArgs(arg1, arg2) {
  console.log("Task 48: " + (arg1 + arg2)); // It outputs sum of arg1 and arg2
}

functionWithArgs(3, 16);

/* Task 49: Basic JavaScript: Global Scope and Functions */

var myGlobal = 10;

function fun1() {
  oopsGlobal = 5; // oopsGlobal is defined without var so it has Global scope.
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log("Task 49: " + output);
}

fun2();

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

