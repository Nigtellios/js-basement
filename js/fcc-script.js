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

/* In JS you can determine the type of a variable or a value with tyPEOF operator */

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
  if(testLessThanVal > 99) {
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