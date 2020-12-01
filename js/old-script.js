/* Yes, I perfectly know that all of these should be different GIT branches,
But right now I'm just too lazy to do that so it is much easier to just copy
and paste every single task. */

/* This is from ZENVA JS Foundations */

/* 1st Task - Beginning */

var hello = "#Task 1: Hello, World"

console.log(hello)

/* END OF TASK 1 */



/* Task 2 - Variables */

var task2 = "#Task 2: ";

//Assigning a value to the variable
//However, this is an literal value -> it is a notation for representing a fixed value.

var currentMana = 100; 

//We can do this in different ways, like:
var maxStamina;
maxStamina = 100;
var currentStamina = 50.2;
currentStamina = maxStamina; 

//Right here we are assigning current stamina level to their Maximum avaliable value.
//We don't want to do it vice versa because we would damage our max allowed value.

console.log(task2 + currentStamina);


//This the type of boolean value, it holds two statements - true or false.
var isGameOver = false;
isGameOver = true;

//^ We just reassigned our value in case of changing statement.

console.log(task2 + isGameOver);

/* END OF TASK 2 */

/* Task 3 - Const vs Let vs Var */

const task3 = "#Task 3: ";

const maxMoves = 50;
//The value of constant cannot be changed, so it would stay at 50.
//Now we can't change its value but we can change other variable value to it, like:

var currentMove = 15;
currentMove = maxMoves;

console.log(task3 + currentMove);

//LET can be used only in some scope, it can be changed or used only in code block where it
//was declared.

if (true) {
  var isGameRunning = false;
  let hasGameCrashed = false;
}

var question = "Is game still running? ";

console.log(task3 + question + isGameRunning);
console.log(task3 + question + hasGameCrashed);


/* End of Task 3 ------------------ */

/* Task 4 - Strings */

var task4 = "#Task 4: "
var characterName = "Nebed";
characterName = "Miran";

var age = 22;

let encourMessage = `Hi, my name is ${characterName}, and I'm ${age}.`;
//This string between `` is using interpolation.

let nameLength = characterName.length;

//Now we can use two methods to convert text to Upper and Lower Case:

let upperName = characterName.toUpperCase();
let lowerName = characterName.toLowerCase();

//Actually these two aren't modifying the literal value, we are creating
//something like a copy of them and store them in upperName and lowerName.
//If we want to change the original value, we have to reassing it using these methods.

characterName = characterName.toLowerCase();
//So this one is geting original value and converts it to lower case.

let nameSlice = characterName.slice(0, 3);

console.log(task4 + encourMessage);
console.log(task4 + nameLength);
console.log(task4 + upperName);
console.log(task4 + lowerName);
console.log(task4 + nameSlice);

let currentLevel = 0;
currentLevel = 3;

let currentLevelInfo = `Currently you are at level ${currentLevel}`;

console.log(task4 + currentLevelInfo);

/* End of Task 4 --------- */

/* Task 5 - Operators */

var task5 = "#Task 5: ";

//Assignment operator, it just assigns a value to a variable.

let hp = 50;
hp = 250;

//Arithmetic operators + - * /

hp = hp + 10; //260
hp = hp - 20; //240
hp = hp * 2; //480
hp = hp / 2; //240

//Now the modulus, which would return us a remainder of selected number
//With this we can check if a number is even or odd.
//It would look like health % 2 == 0; - if it's 0 then it's even, if not it's odd.

hp = hp % 21; //9

//Now with exponentiation we can raise first operand to the power of second one.

hp = hp ** 2; //81

//Or even..

//hp = (hp ** 2)**2 ; //43046721

//Now we can do the same with combination of arithmetic and assignment operator together.

hp -= 20; //61
hp += 30; //91
hp *= 2; //182
hp /= 2; //91

//^Yep, we actually raised an 81 to the power of 81 which result is 43 milions.

//Ye now Incrementation and decrementation.

hp++; //92
hp--; //91

//And remember the PEMDAS with brackets! It is better to make brackets for
//higher priority operations in maths even if they are no needed.

hp = (hp * 2) - 20; //Value: 162 and THIS IS BETTER than:
//hp = hp * 2 - 20;

//Homework

hp = hp + 1; //163
hp++; //164
hp += 1; //165

let currentValue = `Current value is: ${hp}`;

console.log(task5 + currentValue);

/* End of Task 5 --------- */

/* Task 6 - Operators part 2*/

var task6 = "#Task 6: ";

let word1 = "Hello";
let word2 = "World";

let result = word1 + word2;

console.log(result); 

//Well it is just to said that we can also make a operations on strings
//which is really useful.
//Now let's go with comparsion operators.

let number1 = 13;
let number2 = 17;

let operationResult1 = number1 > number2; //false, not higher than n2.
//^it would return false because it is simply not true that number1 is greater than number 2.
let operationResult2 = number1 == number2; //false, not equal
let operationResult3 = number1 <= number2; //true
let operationResult4 = number1 != number2; //true, not equal

let ultraOperation = number1 === number2;

ultraOperation = !ultraOperation; //It just changed the value from false to true
//due to the ! (not) logical operator

let logOp1 = number1 > number2 && number2 == number1;
let logOp2 = number2 > number1 || number2 == number1;
//^ with OR operator || only one of operands have to be true to return true

//Ternary ? : something like if else

let ternary = number1 > number2 ? number1 : number2;
//What we did there? We asked the computer about comparsion, is the number 1 bigger than
//number 2? No, so if the number 2 is bigger then it will store number 2 value, because
//first sentence after ? stores only true, so if the statement is true then return number1,
//if not - there comes an : - then store a value of number2.

//Homework - Game over or not depending on number of lives.

const maxLives = 3;
let currentLives = 1;

let isTheGameOver = currentLives <= 0 && currentLives < maxLives;

//OR THE SOLUTION OF AUTHOR - SIMPLER

let numberOfLives = 3;
let isTheGameOver2 = !(numberOfLives > 0);

//So actually the number of lives has to fill two conditions: we have to be at 0 lives to be dead and in
//the same moment we have to got smaller number than maxLives to don't allow the numbers to override the value.

console.log(task6 + "1 " + operationResult1);
console.log(task6 + "2 " + operationResult2);
console.log(task6 + "3 " + operationResult3);
console.log(task6 + "Ultra: " + ultraOperation);
console.log(task6 + "AND: " + logOp1);
console.log(task6 + "OR: " + logOp2);
console.log(task6 + "Ternary: " + ternary);
console.log(task6 + "Homework: " + isTheGameOver);

/* End of Task 6 --------- */

/* Task 7 - Arrays */

var task7 = "#Task 7: ";

let inventory = ["shirt", "axe", "sword"];
//inventory = ["water", "pants"]; We can ofc change the values if we want to something different.

//Let's pretend that we know what is in the array and we want something from it.

let shirt = inventory[0];

//But we can access and modify existing element. 

inventory[2] = "bread";

//We can return a whole length of an array and simply a length of single position in an array.

let howLong = inventory.length; // It would return 3.

//Now let's get length of item with index 2 (so 3rd in a row).

let howLongItem = inventory[2].length;

//We can push item to the end of the array via push() method.

let pushArray = inventory.push("potion");

//We can also delete an item from array using pop() method.

let popArray = inventory.pop();

//Pop is actually removing the last item and then returning it.

console.log(task7 + inventory[2]);
console.log(task7 + "Our array has: " + howLong + " positions.");
console.log(task7 + "Item with index 2 is: " + howLongItem + " letters long.");
console.log(task7 + "Our whole array after push: " + inventory);
console.log(task7 + "Value of popArray after the pop(): " + popArray);

/* End of Task 7 --------- */

/* Task 8 - Multidimensional Arrays */

var task8 = "#Task 8: ";

let levels = [
  [1.1, 1.2, 1.3, 1.4], //Array 1
  [2.1, 2.2], //Array 2
  [3.1, 3.2, 3.3], //Array 3
  [4.1, 4.2, 4.3, 4.4, 4.5] //Array 4
];

//^Actually we created a 4 arrays inside array, that is called multidimensional arrays.
//We wanna simulate few levels of our game while every of them has some sub-levels inside.
//We can assume that they are like rows and columns. In each of inner-array we have some 
//columns, these columns are: 1.1, 1.2, 1.3, 1.4 etc.

let firstArea = levels[0]; 
//^ This is simple access of whole 1 innerArray of our levels Array.

let firstLevelArea = levels[0][1]; //It should be 1.2
//^ This is simple access of 1st content in 1Inner array.
// in [0] - This is row, while [1] is column inside inner row 0 (array 1)

let firstLevelMod = levels[0][1] = 1.9;

/* Homework - delete 1 item from innerArray 2 and add it to Inner Array 3 */

let secondLevelMod = levels[1].pop();
let secondLevelMod2 = levels[2].push(secondLevelMod);

console.log(task8 + firstArea);
console.log(task8 + firstLevelArea);
console.log(task8 + firstLevelMod);
console.log(task8 + "Whole Inner-Array1 after Level change: " + levels[0]);
console.log(task8 + "Whole Inner-Array1 after Level change: " + levels[0]);
console.log(task8 + "Content of 3rd InnerArray after push: " + levels[2]);

/* End of Task 8 --------- */

/* Task 9 - Functions */ /* */

var task9 = "#Task 9: ";

/*
function name(inputs) {
  function body
  return value
}
*/
//Hovewer, we don't have to return values or scopes any inputs all the time,
//Our function can work without this and it would be perfectly fair if we
//just want to do some code without returning anything or scoping any targets.

let currentHealth = 100;
let healAmount = 25;

function heal() {
  currentHealth += healAmount;
}

/* While designing functions we should think about logic behind it, it is much
better to create something reusable or universal over time than just doing some
static instructions which would not benefit over time. */

heal();

/* However, we can create an reference using variable to store the function. */

let t1; let t2;
t1 = 2; t2 = 10;

let ref = function test1() {
  t1 += t2;
}

ref();

/* We can also nest a function inside other function, like: */

let t3; let t4;
t3 = 20; t4 = 5;

function nestTest() {
  t3 += t4;
  function nested() {
    t3--;
  }
  nested();
}

nestTest();

//^The example above was example of nested function which was declared and
//called inside another function.

console.log(task9 + "Current Health after heal: " + currentHealth);
console.log(task9 + "Test of a function reference: " + t1);
console.log(task9 + "Test of a nested function: " + t3);

/* End of Task 9 --------- */

/* Task 10 - Function Parameters */ 

var task10 = "#Task 10: ";

let currentSanity = 0;

// Now we would create some inputs to change the behavior of our function.
// It is bad practice to declare other variable which can be used as an Input,
// instead of this we can make it as a parameter.

function sanity(recoverSanity) {
  currentSanity += recoverSanity;
}

sanity(100); //currentSanity will be 100.

// Sometimes we just want to pass some default value. However, if we then call another
// value while calling an function, we will override this.


let currentMana = 55.5;

function manaRecover(manaRecoverAmount = 25) {
  currentMana += manaRecoverAmount;
}

manaRecover(30.5);

//Now our 30.5 will override the default value of 25.
//It is very good to have default value of parameter.

console.log(task10 + "Sanity after function call: " + currentSanity);
console.log(task10 + "Mana after function call: " + currentMana);

/* End of Task 10 --------- */

/* Task 11 - Function Return Statements */ 

var task11 = "#Task 11: ";

let maxBalance = 200.0;
let currentBalance = 198.1;

//Now we want to calculate a precentage of our balance, during this we would 
//learn how to return something from a function to make some calculations.

function transaction(transValue = 1.0) {
  let calcValue = currentBalance + transValue;
  currentBalance = calcValue > 200 ? maxBalance : calcValue;
  currentBalance -= transValue;
  return (currentBalance / maxBalance) * 100; //Calculating the precentage.
}

let result = transaction();
result = transaction(20.9);

console.log(task11 + "Current Balance after transaction: " + currentBalance);

/* End of Task 11 --------- */

/* Task 12 - If Statements 1/2 */ 

var task12 = "#Task 12: ";

let keyPress = "r";
let xPos = 0;

// We are going to create something like test for moving object

if (keyPress == "l") {
  xPos -= 1; //xPos = -1;
} else if (keyPress == "r") {
  xPos += 1; //xPos = -1;
} else {
  xPos = 0;
}

// This code is comparing the value of variable keyPress
// „else" there works as an backup if we want to do something 
// if no any of the values matches the requirements specified in above statements

// If any of requirements fails (returns false), then code is going to another one


console.log(task12 + "xPos value after debug: " + xPos);

/* End of Task 12 --------- */

/* Task 13 - If Statements 2/2 */ 

var task13 = "#Task 13: ";

// Let's talk about nested Ifs, imagine if we have:

let someNumber = 99;
let doLMAO = 0;

if (someNumber > 10 ) {
  doLMAO += 25;
}
if (someNumber < 5 ) {
  doLMAO *= 2;
}

// We can use something above if we want to execute only one test of code at a time without
// creating else if statement, but right I can't see this any useful.

// Now we are going to create nested If

let keyPressed = "d";
let endPos = 200;
let actualPos = 50;

if (keyPressed == "d") {
  if (actualPos < endPos) {
    actualPos += 1;
  }
  actualPos += 1;
} else if (keyPressed == "a") {
  actualPos -= 1;
} else {
  actualPos = 0;
}

// However, there are scenarios when we shouldn't do that, instead of it we 
// should add logical expression to it. Properly it would look like this:

if (keyPressed == "d" && actualPos < endPos) {
  actualPos += 1;
} else if (keyPressed == "a") {
  actualPos -= 1;
} else {
  actualPos = 0;
}

// but in the example above, the code would run only if both statements are
// true, when we still want to do something before matching both of boolean expressions, then
// we have to use nested if.

/* Homework - Do the same on the left side of map */

if (keyPressed == "d" && actualPos < endPos) {
  actualPos += 1;
} else if (keyPressed == "a" && actualPos >= 0) {
  actualPos -= 1;
} else {
  actualPos = 0;
}

console.log(task13 + "Value after debug: " + doLMAO);
console.log(task13 + "Actual position: " + actualPos);

/* End of Task 13 --------- */

/* Task 14 - While Loops */ 

var task14 = "#Task 14: ";

// Ye let's do the same another time (oof), now we are going to move foward
// continously by 50 until we met end of our „map" (at least in math)

let endOfMap = 500;
let aPos = 0;
let enemyPos = 450;
let isGameOver = false;

// while(aPos < endOfMap) {
//   console.log(aPos); // To look forward if it is working in console.
//   aPos += 50;
//   if (aPos == enemyPos) {
//     console.log('Game Over!');
//   }
// }

while(!isGameOver) {
  console.log("Current Position: " + aPos);
  if(aPos == enemyPos){
    isGameOver = true;
    console.log("You've met enemy! Game is over on: " + aPos);
  } else if (aPos == endOfMap) {
    isGameOver = true;
    console.log("You've met end of the map! Game is over on: " + aPos);
  } else {
    aPos += 50;
  }
}

// ^ This is also a homework, we've made a code when game would end if we met
// end of the map or our enemy.

console.log(task14 + "Our actual position: " + aPos);

/* End of Task 14 --------- */

/* Task 15 - Control Statements */ 

var task15 = "#Task 15: ";

let endOfMap = 500;
let aPos = 0;
let enemyPos = 250;
let isGameOver = false;

// while(aPos < endOfMap) {
//   aPos +=50;
//   console.log("I'm moving, my position: " + aPos);
//   if(aPos == enemyPos) {
//     console.log("You've met enemy! Game is lost!");
//     break;
//   }
// }

// We simply want to stop our code like end game mechanics. 
// That's why we used break. We are exiting our loop

// Let's say that we want to skip every odd number right now:

endOfMap = 20;

// while(aPos < endOfMap) {
//   if (xPos % 2 == 1) {
//     xPos += 2;
//     continue;
//   }
//   aPos++;
//   if(aPos == enemyPos) {
//     console.log("You've met enemy! Game is lost!");
//     break;
//   }
//   console.log("I'm moving, my position: " + aPos);
// }

// This seems like kinda broken logic, but if we hit continue with our statements,
// we actually leave behind everything that is after continue, because we will endlessly
// jump between boolean condition inside while till our continue, so actually our break
// would never happen (in the example above);

function movePlayer() {
  while(aPos < endOfMap) {
   aPos ++;
   if(aPos == enemyPos) {
     console.log("You've met enemy! Game is lost!");
     return;
   }
  }
}

// So actually we can move out the entire function with our „return" instead of breaking
// iterations of whole loop.

console.log(task15 + "Our return function: " + aPos);

/* End of Task 15 --------- */

/* Task 16 - For Loops */ 

var task16 = "#Task 16: ";

let items = ["Polo", "Gloves", "Wallet"];
let endPointString = "I have: ";

// for(let i = 0; i < items.length; i++) {
//   //It would run 3 times coz of Array Length
//   let itemName = items[i]; //We are parsing index so we would get item
//   endPointString += itemName + ", ";
// }

// ^With this construction of our for loop we want to attach something
// to every each item. We want to reach every content of our array
// so our iterator is our array index. We want to finish when our
// iterator would be equal to length of our Array.

items.forEach(function(element) {
  endPointString += element + ", ";
});

// This looks kinda confusing, but we are just doing a function on each element
// of our array, so it's simpler and much more clear.

console.log(task16 + endPointString);

/* End of Task 16 --------- */

