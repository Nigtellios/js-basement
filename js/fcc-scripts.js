/* Free Code Camp Tasks */

/* BASE -> FUNCTION OUTPUT SETUP */

/* function debugFccX() {
  document.getElementById('fcc-task-X').innerHTML = "Output: " + someVariable;
}
document.getElementById('run-fcc-task-X').addEventListener('click', debugFccX); */

/* Task 1: Basic JavaScript: Comment Your JavaScript Code */

// in-line comment
/* multi
line
comment */

/* Task 2: Basic JavaScript: Declare JavaScript Variables */

// 8 Different data types: undefined, null, boolean, string, symbol, bigint, number, and object.

var myName;
myName = "Jakub";

function debugFcc2() {
  document.getElementById('fcc-task-2').innerHTML = "Output: " + myName;
}
document.getElementById('run-fcc-task-2').addEventListener('click', debugFcc2);

/* Task 3: Basic JavaScript: Storing Values with the Assignment Operator */

var a;
a = 7; // Now a stores value of 7. Any calculations to the right of = operator are performed
// on the left of the operator. Like +=, -= etc.

function debugFcc3() {
  document.getElementById('fcc-task-3').innerHTML = "Output: " + a;
}
document.getElementById('run-fcc-task-3').addEventListener('click', debugFcc3);

/* Task 4: Basic JavaScript: Assigning the Value of One Variable to Another */

var a;
a = 7;
var b;
b = a;

function debugFcc4() {
  document.getElementById('fcc-task-4').innerHTML = "Output: " + b;
}
document.getElementById('run-fcc-task-4').addEventListener('click', debugFcc4);

/* Task 5: Basic JavaScript: Initializing Variables with the Assignment Operator */

var a = 9; //Now it's the inital value of variable a.

function debugFcc5() {
  document.getElementById('fcc-task-5').innerHTML = "Output: " + a;
}
document.getElementById('run-fcc-task-5').addEventListener('click', debugFcc5);

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

function debugFcc6() {
  document.getElementById('fcc-task-6').innerHTML = "Output: " + a + ", " + b + ", " + c;
}
document.getElementById('run-fcc-task-6').addEventListener('click', debugFcc6);

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

function debugFcc7() {
  document.getElementById('fcc-task-7').innerHTML = "Output: " + studlyCapVar + ", " + properCamelCase + ", " + titleCaseOver;
}
document.getElementById('run-fcc-task-7').addEventListener('click', debugFcc7);


/* Task 8: Basic JavaScript: Add Two Numbers with JavaScript */

var sum = 10 + 10; // 20

function debugFcc8() {
  document.getElementById('fcc-task-8').innerHTML = "Output: " + sum;
}
document.getElementById('run-fcc-task-8').addEventListener('click', debugFcc8);

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