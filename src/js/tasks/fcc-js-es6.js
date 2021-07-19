/* ############################# */
/* ######## ECMAScript 6 ####### */
/* ############################# */

const outputResponse = `Output: `;

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
const scopeFCCB8 = document.getElementById('fcc-task-b8');

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
const scopeFCCB9 = document.getElementById('fcc-task-b9');

function debugFCCB9() {
  scopeFCCB9.innerHTML = outputResponse + howManyArguments(1,2,3,4,5);
}

if (btnFCCB9 !== null && scopeFCCB9 !== null) {
  btnFCCB9.addEventListener('click', debugFCCB9);
} else {
  scopeFCCB9.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B10: Use the Spread Operator to Evaluate Arrays In-Place */

/* ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are excepted. */

/* The ES5 code below uses apply() to compute the maximum value in an array: */

var spreadArr = [1, 2, 5, 8, 20];
var maxArr = Math.max.apply(null, spreadArr);

/* Max arr would have value of 89. We had to use Math.max.apply(null,arr) because Math.max(arr) returns Nan.Math.max() excepts comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain. */

const spreadArray = [299, 349, 568, 154];
const maxArray = Math.max(...spreadArray);

/* maxArray would have a value of 89. ...spreadArray returns an unpacked array. In other words, it SPREADS the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work: */

// const spreadedData = ...spreadArray;

/* OUTPUT CODE */

const btnFCCB10 = document.getElementById('run-fcc-task-b10');
const scopeFCCB10 = document.getElementById('fcc-task-b10');

function debugFCCB10() {
  scopeFCCB10.innerHTML = outputResponse + maxArr + ", Max from spread array: " + maxArray;
}

if (btnFCCB10 !== null && scopeFCCB10 !== null) {
  btnFCCB10.addEventListener('click', debugFCCB10);
} else {
  scopeFCCB10.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B11: Use Destructuring Assignment to Extract Values from Objects */

/* Destructing assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object. Consider the following ES5 code: */

const golfUser = { name: 'Jade Duh', age1: 26};
const golfUserName = golfUser.name;
const golfUserAge = golfUser.age1;

/* Name would have a value of the string Jade Duh, and age would have number 26. Here's equivalent assignment statement using the ES6 destructing syntax: */

let { name, age1 } = golfUser;

/* And again, name would have a value of the string John Doe, and age would have the number 34. Here, the name and age variables will be created and assigned the values of their respective values from the golfUser object. You can see how much cleaner this is. You can extract as many or few values from the object as you want. */

/* OUTPUT CODE */

const btnFCCB11 = document.getElementById('run-fcc-task-b11');
const scopeFCCB11 = document.getElementById('fcc-task-b11');

function debugFCCB11() {
  scopeFCCB11.innerHTML = outputResponse + golfUser.age1;
}

if (btnFCCB11 !== null && scopeFCCB11 !== null) {
  btnFCCB11.addEventListener('click', debugFCCB11);
} else {
  scopeFCCB11.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B12: Use Destructuring Assignment to Assign Variables from Objects */

/* Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value. */

const myPet = { name: 'Lovi', age: 10, type: 'Dog'};

/* Here's how you cna give new variable names in the assignment: */

const { name: petName, age: petAge } = myPet;

/* You may read it as "get the value of myPet.name and assign it to a new variable named petName" and so on. The value of petname would be string Lovi, and the value of petAge would be the number 10. */

/* OUTPUT CODE */

const btnFCCB12 = document.getElementById('run-fcc-task-b12');
const scopeFCCB12 = document.getElementById('fcc-task-b12');

function debugFCCB12() {
  scopeFCCB12.innerHTML = outputResponse + "My pet is called: " + petName + " and her age is: " + petAge + ".";
}

if (btnFCCB12 !== null && scopeFCCB12 !== null) {
  btnFCCB12.addEventListener('click', debugFCCB12);
} else {
  scopeFCCB12.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B13: Use Destructuring Assignment to Assign Variables from Nested Objects */

/* You can use the name principles from the previous two lessons to destructure values from nested objects. Using an object similar to previous examples: */

const pokerUser = {
  mike: {
    age2: 42,
    email: 'mike@wazowski.com'
  }
};

/* Here's how to extract the values of object properties and assign them to variables with the same name: */

const { mike: { age2, email }} = pokerUser;

/* And here's how you can assign an object properties' values to variables with different names: */

const { mike: { age2: mikeAge, email: mikeEmail}} = pokerUser;

/* OUTPUT CODE */

const btnFCCB13 = document.getElementById('run-fcc-task-b13');
const scopeFCCB13 = document.getElementById('fcc-task-b13');

function debugFCCB13() {
  scopeFCCB13.innerHTML = outputResponse + "First user is: " + mikeAge + ", " + mikeEmail;
}

if (btnFCCB13 !== null && scopeFCCB13 !== null) {
  btnFCCB13.addEventListener('click', debugFCCB13);
} else {
  scopeFCCB13.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B14: Use Destructuring Assignment to Assign Variables from Arrays */

/* ES6 makes destructuring arrays as easy as destructuring objects. One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables. Destructuring an array lets us do exactly that: */

const [aB14, bB14] = [1, 2, 3, 4, 5, 6];

/* The debug will display the values of aB14 and bB14 as 1 and 2.*/

/* The variable aB14 is assigned the first value of the array, and b is assigned to the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index: */

const [a2B14, b2B14,,, c2B14] = [1, 2, 3, 5, 8, 10, 22];

/* OUTPUT CODE */

const btnFCCB14 = document.getElementById('run-fcc-task-b14');
const scopeFCCB14 = document.getElementById('fcc-task-b14');

function debugFCCB14() {
  scopeFCCB14.innerHTML = outputResponse + a2B14 + ', ' + b2B14 + ', ' + c2B14;
}

if (btnFCCB14 !== null && scopeFCCB14 !== null) {
  btnFCCB14.addEventListener('click', debugFCCB14);
} else {
  scopeFCCB14.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B15: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements */

/* In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array. The result is similar to Array.prototype.slice(), as shown below: */

const [firstE, secondE, ...restOfArray] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* The debug would display values 1, 2, and [3, 4, 5, 6, 7, 8, 9, 10]. Variables firstE and secondE take the first and second values from the array. After that, because of the rest parameter's presence, restOfArray gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array. */

/* OUTPUT CODE */

const btnFCCB15 = document.getElementById('run-fcc-task-b15');
const scopeFCCB15 = document.getElementById('fcc-task-b15');

function debugFCCB15() {
  scopeFCCB15.innerHTML = outputResponse + restOfArray;
}

if (btnFCCB15 !== null && scopeFCCB15 !== null) {
  btnFCCB15.addEventListener('click', debugFCCB15);
} else {
  scopeFCCB15.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B16: Use Destructuring Assignment to Pass an Object as a Function's Parameters */

/* In some cases, you can destructure the object in a function argument itself. Consider the code below: */

const profileData = {
  name: 'Jurij',
  age: 18,
  nationality: 'Russian',
  location: 'Russia'
};

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}

const profName = profileData.name;

/* This effectively destructures the object sent into the function. This can also be done in-place: */

const profileUpdate2 = ({ name, age, nationality, location }) => {};

/* When profileData is passed to above function, the values are destructured from the function parameter for use within the function. */

/* OUTPUT CODE */

const btnFCCB16= document.getElementById('run-fcc-task-b16');
const scopeFCCB16 = document.getElementById('fcc-task-b16');

function debugFCCB16() {
  scopeFCCB16.innerHTML = outputResponse + 'And some data from it is: ' + profName;
}

if (btnFCCB16 !== null && scopeFCCB16 !== null) {
  btnFCCB16.addEventListener('click', debugFCCB16);
} else {
  scopeFCCB16.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B17: Create String using Template Literals */

/* A new feature of ES6 is the template literal. This is special type of string that makes creating complex strings easier. Template Literals allow you to create multi-line strings and to use string interpolation features to create strings. Consider the code below: */

const person = {
  name: "Karollo",
  age: 22,
  nationality: 'Poland'
};

const profileGreeting = `Hello there ${person.name}!
 You are ${person.age}, from ${person.nationality}.`

/* A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${here}. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating string gives you more flexibility to create robust strings. We can use it to create more complex functionalities: */

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  return failureItems;
}
const failuresList = makeList(result.failure);

/* OUTPUT CODE */

const btnFCCB17 = document.getElementById('run-fcc-task-b17');
const scopeFCCB17 = document.getElementById('fcc-task-b17');

function debugFCCB17() {
  scopeFCCB17.innerHTML = `${outputResponse} First code execution: ${profileGreeting}. Second code execution: ${makeList(failuresList)}.`;
}

if (btnFCCB17 !== null && scopeFCCB17 !== null) {
  btnFCCB17.addEventListener('click', debugFCCB17);
} else {
  scopeFCCB17.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B18: Write Concise Object Literal Declarations Using Object Property Shorthand */

/* ES6 Adds some nice support for easily defining object literals. Consider the following code: */

const getMousePos = (x, y) => ({
  x: x,
  y: y
});

/* getMousePos is a simple function that returns an object containing two properties. ES6 provides the syntatic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted to x: x (or sth equivalent) under the hood. Here is the same function from above rewritten to use this new syntax: */

const getMousePosition = (x, y) => ({ x, y });

/* OUTPUT CODE */

const btnFCCB18 = document.getElementById('run-fcc-task-b18');
const scopeFCCB18 = document.getElementById('fcc-task-b18');

function debugFCCB18() {
  scopeFCCB18.innerHTML = `${outputResponse} Our function for getting mouse position: ${getMousePosition(12,12)}, and x value from it equals: ${getMousePosition.x}.`;
}

if (btnFCCB18 !== null && scopeFCCB18 !== null) {
  btnFCCB18.addEventListener('click', debugFCCB18);
} else {
  scopeFCCB18.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B19: Write Concise Declarative Functions with ES6 */

/* When defining functions within objects in ES5, we have to use the keyword function as follows: */

const codUser = {
  name: "xXx_Destroyer_xXx",
  sayHello: function() {
    return `Hello ${this.name}!`;
  }
};

/* With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax: */

const bfUser = {
  name: 'Total_Chad',
  sayHello() {
    return `Hello ${this.name}!`;
  }
};

/* OUTPUT CODE */

const btnFCCB19 = document.getElementById('run-fcc-task-b19');
const scopeFCCB19 = document.getElementById('fcc-task-b19');

function debugFCCB19() {
  scopeFCCB19.innerHTML = `${outputResponse} ${codUser.sayHello()} and the second execution (ES6 function) is: ${bfUser.sayHello()}`;
}

if (btnFCCB19 !== null && scopeFCCB19 !== null) {
  btnFCCB19.addEventListener('click', debugFCCB19);
} else {
  scopeFCCB19.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B20: Use class Syntax to Define a Constructor Function */

/* ES6 provides a new syntax to create objects, using the class keyword. It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function to use the new keyword to initiate an object. */

var SpaceShuttle = function(targetPlanet) {
  this.targetPlanet = targetPlanet;
}

var shuttleOne = new SpaceShuttle('Jupiter');

/* The class syntax simply replaces the constructor function creation: */

class SpaceShip {
  constructor(targetSpace) {
    this.targetSpace = targetSpace;
  }
}

const shuttleTwo = new SpaceShip('Saturn');

/* It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object. UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle and SpaceShip used above.

The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming Section of the JS Algorithms And Data Structures Certification. */


/* OUTPUT CODE */

const btnFCCB20 = document.getElementById('run-fcc-task-b20');
const scopeFCCB20 = document.getElementById('fcc-task-b20');

function debugFCCB20() {
  scopeFCCB20.innerHTML = `${outputResponse} ${shuttleOne.targetPlanet} and the second class execution (ES6 function - constructor) is: ${shuttleTwo.targetSpace}.`;
}

if (btnFCCB20 !== null && scopeFCCB20 !== null) {
  btnFCCB20.addEventListener('click', debugFCCB20);
} else {
  scopeFCCB20.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B21: Use getters and setters to Control Access to an Object */

/* You can obtain values from an object and set the value of a property within an object. These are classically called getters and setters. */

/* Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable. */

/* Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely. */

class Book {
  constructor(title, author, quantity) {
    this._title = title;
    this._author = author;
    this._quantity = quantity;
  }
  //getters
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get quantity() {
    return this._quantity;
  }
  //setters
  set title(titleUpdate) {
    this._title = titleUpdate;
  }
  set author(authorUpdate) {
    this._author = authorUpdate;
  }
  set quantity(quantityUpdate) {
    this._quantity = quantityUpdate;
  }
}

const NewEra = new Book('New Era', 'Marcin Soczynski', 24);

NewEra.author = 'Marcin S';
NewEra.quantity = 23;

/* We can also perform a lil-bit more advanced things with getters and setters, feel the power of creating API (Application Programming Interface) */

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const livingRoomThermostat = new Thermostat(80);
let currentTemp = livingRoomThermostat.temperature;
currentTemp = livingRoomThermostat.temperature = 22;

/* Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. However, (_) is convention to precede the name of a private variable with an underscore, this practice itself does not make a variable private. */

/* OUTPUT CODE */

const btnFCCB21 = document.getElementById('run-fcc-task-b21');
const scopeFCCB21 = document.getElementById('fcc-task-b21');

function debugFCCB21() {
  scopeFCCB21.innerHTML = `${outputResponse} Our book is: ${NewEra.title}, written by ${NewEra.author}, and there is still ${NewEra.quantity} more of it. Now let's see Thermostat temperature: ${currentTemp}`;
}

if (btnFCCB21 !== null && scopeFCCB21 !== null) {
  btnFCCB21.addEventListener('click', debugFCCB21);
} else {
  scopeFCCB21.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B22: Create a Module Script */

/* JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it's really huge, and some websites are built almost entirely with JS. In order to make JS more modular, clean, and maintainable; ES6 introduced a way to easily share code among JS files. This involves exporting parts of a file for use in one or more other files, and importing the parts you nee, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here's an example: */

// <script type="module" src="filename.js"></script>

/* A script that uses this module type can now use the IMPORT and EXPORT features you will learn about in the upcoming challenges. */

/* OUTPUT CODE */

const btnFCCB22 = document.getElementById('run-fcc-task-b22');
const scopeFCCB22 = document.getElementById('fcc-task-b22');

function debugFCCB22() {
  scopeFCCB22.innerHTML = `${outputResponse}`;
}

if (btnFCCB22 !== null && scopeFCCB22 !== null) {
  btnFCCB22.addEventListener('click', debugFCCB22);
} else {
  scopeFCCB22.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B23: Use export to Share a Code Block */

/* Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JS files. In order to share it with these other files, you first need to export it. */

// export const add1 = (x,y) => {
//   return x + y;
// }

/* The above is a common way to export a single function, but you can achieve the same thing like this: */

const add2 = (x,y) => {
  return x + y;
}

// export { add2 };

/* When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example (with comma) */

/* OUTPUT CODE */

const btnFCCB23 = document.getElementById('run-fcc-task-b23');
const scopeFCCB23 = document.getElementById('fcc-task-b23');

function debugFCCB23() {
  scopeFCCB23.innerHTML = `${outputResponse} ${add2(14,16)}, and there is no more coverage of this subject.`;
}

if (btnFCCB23 !== null && scopeFCCB23 !== null) {
  btnFCCB23.addEventListener('click', debugFCCB23);
} else {
  scopeFCCB23.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B24: Reuse JavaScript Code Using import */

/* import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file: */

// import { add } from './math_functions.js';

/* Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. the ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way. You can import more than one item from the file by adding them in the import statement like this: */

// import { add, subtract } from './math_functions.js';

/* OUTPUT CODE */

const btnFCCB24 = document.getElementById('run-fcc-task-b24');
const scopeFCCB24 = document.getElementById('fcc-task-b24');

function debugFCCB24() {
  scopeFCCB24.innerHTML = `${outputResponse} There is no more coverage of this subject.`;
}

if (btnFCCB24 !== null && scopeFCCB24 !== null) {
  btnFCCB24.addEventListener('click', debugFCCB24);
} else {
  scopeFCCB24.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B25: Use * to Import Everything from a File */

/* Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory: */

// import * as myMathModule from "./math_functions.js";

/* The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported: */

// myMathModule.add(2,3);
// myMathModule.subtract(5,3);

/* OUTPUT CODE */

const btnFCCB25 = document.getElementById('run-fcc-task-b25');
const scopeFCCB25 = document.getElementById('fcc-task-b25');

function debugFCCB25() {
  scopeFCCB25.innerHTML = `${outputResponse} There is no more coverage of this subject.`;
}

if (btnFCCB25 !== null && scopeFCCB25 !== null) {
  btnFCCB25.addEventListener('click', debugFCCB25);
} else {
  scopeFCCB25.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B26: Create an Export Fallback with export default */

/* In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files. There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using export default: */

/*
 export default function add(x, y) {
  return x + y;
 }
*/
/*
 export default function(x, y) {
  return x + y;
 }
*/

/* The first is a named function, and the second is an anonymous function. Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const. */

/* OUTPUT CODE */

const btnFCCB26 = document.getElementById('run-fcc-task-b26');
const scopeFCCB26 = document.getElementById('fcc-task-b26');

function debugFCCB26() {
  scopeFCCB26.innerHTML = `${outputResponse} There is no more coverage of this subject.`;
}

if (btnFCCB26 !== null && scopeFCCB26 !== null) {
  btnFCCB26.addEventListener('click', debugFCCB26);
} else {
  scopeFCCB26.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B27: Import a Default Export */

/* In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it: */

// import add from "./math_functions.js";

/* The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default. */

/* OUTPUT CODE */

const btnFCCB27 = document.getElementById('run-fcc-task-b27');
const scopeFCCB27 = document.getElementById('fcc-task-b27');

function debugFCCB27() {
  scopeFCCB27.innerHTML = `${outputResponse} There is no more coverage of this subject.`;
}

if (btnFCCB27 !== null && scopeFCCB27 !== null) {
  btnFCCB27.addEventListener('click', debugFCCB27);
} else {
  scopeFCCB27.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B28: Create a JavaScript Promise */

/* A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this: */

const firstPromise = new Promise((resolve, reject) => {});

/* OUTPUT CODE */

const btnFCCB28 = document.getElementById('run-fcc-task-b28');
const scopeFCCB28 = document.getElementById('fcc-task-b28');

function debugFCCB28() {
  scopeFCCB28.innerHTML = `${outputResponse} ${firstPromise} The promise is empty, so there is no response.`;
}

if (btnFCCB28 !== null && scopeFCCB28 !== null) {
  btnFCCB28.addEventListener('click', debugFCCB28);
} else {
  scopeFCCB28.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B29: Complete a Promise with resolve and reject */

/* A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below. */

const secondPromise = new Promise((resolve, reject) => {
  const response = 200;
  if (response === 200) {
    return resolve("Promise was fulfilled");
  } else {
    return reject("Promise was rejected");
  }
});

/* The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere. */

/* OUTPUT CODE */

const btnFCCB29 = document.getElementById('run-fcc-task-b29');
const scopeFCCB29 = document.getElementById('fcc-task-b29');

function debugFCCB29() {
  scopeFCCB29.innerHTML = `${outputResponse} ${secondPromise}`;
}

if (btnFCCB29 !== null && scopeFCCB29 !== null) {
  btnFCCB29.addEventListener('click', debugFCCB29);
} else {
  scopeFCCB29.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B30: Handle a Fulfilled Promise with then */

/* Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount ot time, and after it completes usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here's an example: */

secondPromise.then(result => {
  //execution
  console.log(result);
});

/* Result comes from the argument given to the resolve method. */

/* OUTPUT CODE */

const btnFCCB30 = document.getElementById('run-fcc-task-b30');
const scopeFCCB30 = document.getElementById('fcc-task-b30');

function debugFCCB30() {
  scopeFCCB30.innerHTML = `${outputResponse} ${secondPromise} and response is empty.`;
}

if (btnFCCB30 !== null && scopeFCCB30 !== null) {
  btnFCCB30.addEventListener('click', debugFCCB30);
} else {
  scopeFCCB30.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task B31: Handle a Rejected Promise with catch */

/* catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here's the syntax: */

secondPromise.catch(error => {
  //execution
  console.log(error);
});

/* OUTPUT CODE */

const btnFCCB31 = document.getElementById('run-fcc-task-b31');
const scopeFCCB31 = document.getElementById('fcc-task-b31');

function debugFCCB31() {
  scopeFCCB31.innerHTML = `${outputResponse} ${secondPromise} and response is empty.`;
}

if (btnFCCB31 !== null && scopeFCCB31 !== null) {
  btnFCCB31.addEventListener('click', debugFCCB31);
} else {
  scopeFCCB31.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}
