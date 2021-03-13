/* This is from ZENVA JS Foundations */

let outputResponseZ = "Output: ";

/* 1st Task - Beginning */

var hello_Z1 = "#Task 1: Hello, World";

/* END OF TASK 1 */

/* OUTPUT CODE */

const btnZ1 = document.getElementById('run-zenva-task-1');
const scopeZ1 = document.getElementById('zenva-task-1');

function debugZ1() {
  scopeZ1.innerHTML = outputResponseZ + hello_Z1;
}

if (btnZ1 !== null && scopeZ1 !== null) {
  btnZ1.addEventListener('click', debugZ1);
} else {
  scopeZ1.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 2 - Variables */

//Assigning a value to the variable. However, this is an literal value -> it is a notation for representing a fixed value.

var currentMana_Z2 = 100; 

//We can do this in different ways, like:
var maxStamina_Z2;
maxStamina_Z2 = 100;
var currentStamina_Z2 = 50.2;
currentStamina_Z2 = maxStamina_Z2; 

//Right here we are assigning current stamina level to their Maximum avaliable value. We don't want to do it vice versa because we would damage our max allowed value.

//This the type of boolean value, it holds two statements - true or false.
var isGameOver_Z2 = false;
isGameOver_Z2 = true;

//^ We just reassigned our value in case of changing statement.

/* END OF TASK 2 */

/* OUTPUT CODE */

const btnZ2 = document.getElementById('run-zenva-task-2');
const scopeZ2 = document.getElementById('zenva-task-2');

function debugZ2() {
  scopeZ2.innerHTML = outputResponseZ + currentMana_Z2 + ', ' + currentStamina_Z2 + ', ' + maxStamina_Z2 + ', ' + isGameOver_Z2;
}

if (btnZ2 !== null && scopeZ2 !== null) {
  btnZ2.addEventListener('click', debugZ2);
} else {
  scopeZ2.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 3 - Const vs Let vs Var */

const maxMoves_Z3 = 50;
//The value of constant cannot be changed, so it would stay at 50. Now we can't change its value but we can change other variable value to it, like:

var currentMove_Z3 = 15;
currentMove_Z3 = maxMoves_Z3;

//LET can be used only in some scope, it can be changed or used only in code block where it was declared.

if (true) {
  var isGameRunning_Z3 = false;
  let hasGameCrashed_Z3 = false;
}

var question_Z3 = "Is game still running? ";

/* End of Task 3 ------------------ */

/* OUTPUT CODE */

const btnZ3 = document.getElementById('run-zenva-task-3');
const scopeZ3 = document.getElementById('zenva-task-3');

function debugZ3() {
  scopeZ3.innerHTML = outputResponseZ + maxMoves_Z3 + ', ' + currentMove_Z3 + ', ' + isGameRunning_Z3 + ', ' + hasGameCrashed_Z3;
}

if (btnZ3 !== null && scopeZ3 !== null) {
  btnZ3.addEventListener('click', debugZ3);
} else {
  scopeZ3.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 4 - Strings */

var characterName_Z4 = "Nebed";
characterName_Z4 = "Miran";

var age_Z4 = 22;

let encourMessage_Z4 = `Hi, my name is ${characterName_Z4}, and I'm ${age_Z4}.`;
//This string between `` is using interpolation.

let nameLength_Z4 = characterName_Z4.length;

//Now we can use two methods to convert text to Upper and Lower Case:

let upperName_Z4 = characterName_Z4.toUpperCase();
let lowerName_Z4 = characterName_Z4.toLowerCase();

//Actually these two aren't modifying the literal value, we are creating. Something like a copy of them and store them in upperName and lowerName. If we want to change the original value, we have to reassing it using these methods.

characterName_Z4 = characterName_Z4.toLowerCase();
//So this one is geting original value and converts it to lower case.

let nameSlice_Z4 = characterName_Z4.slice(0, 3);

let currentLevel_Z4 = 0;
currentLevel_Z4 = 3;

let currentLevelInfo_Z4 = `Currently you are at level ${currentLevel_Z4}`;

/* End of Task 4 --------- */

/* OUTPUT CODE */

const btnZ4 = document.getElementById('run-zenva-task-4');
const scopeZ4 = document.getElementById('zenva-task-4');

function debugZ4() {
  scopeZ4.innerHTML = outputResponseZ + encourMessage_Z4 + ', ' + nameLength_Z4 + ', ' + upperName_Z4 + ', ' + lowerName_Z4 + ', ' + nameSlice_Z4 + ', ' + currentLevelInfo_Z4;
}

if (btnZ4 !== null && scopeZ4 !== null) {
  btnZ4.addEventListener('click', debugZ4);
} else {
  scopeZ4.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 5 - Operators */

//Assignment operator, it just assigns a value to a variable.

let hp_Z5 = 50;
hp_Z5 = 250;

//Arithmetic operators + - * /

hp_Z5 = hp_Z5 + 10; //260
hp_Z5 = hp_Z5 - 20; //240
hp_Z5 = hp_Z5 * 2; //480
hp_Z5 = hp_Z5 / 2; //240

//Now the modulus, which would return us a remainder of selected number. With this we can check if a number is even or odd. It would look like health % 2 == 0; - if it's 0 then it's even, if not it's odd.

hp_Z5 = hp_Z5 % 21; //9

//Now with exponentiation we can raise first operand to the power of second one.

hp_Z5 = hp_Z5 ** 2; //81

//Or even.. hp = (hp ** 2)**2 ; //43046721
//Now we can do the same with combination of arithmetic and assignment operator together.

hp_Z5 -= 20; //61
hp_Z5 += 30; //91
hp_Z5 *= 2; //182
hp_Z5 /= 2; //91

//^Yep, we actually raised an 81 to the power of 81 which result is 43 milions. So on now Incrementation and decrementation.

hp_Z5++; //92
hp_Z5--; //91

//And remember the PEMDAS with brackets! It is better to make brackets for higher priority operations in maths even if they are no needed.

hp_Z5 = (hp_Z5 * 2) - 20; //Value: 162 and THIS IS BETTER than: hp = hp * 2 - 20;

//Homework

hp_Z5 = hp + 1; //163
hp_Z5++; //164
hp_Z5 += 1; //165

let currentValue_Z5 = `Current value is: ${hp_Z5}`;

/* End of Task 5 --------- */

/* OUTPUT CODE */

const btnZ5 = document.getElementById('run-zenva-task-5');
const scopeZ5 = document.getElementById('zenva-task-5');

function debugZ5() {
  scopeZ4.innerHTML = outputResponseZ + currentValue_Z5;
}

if (btnZ5 !== null && scopeZ5 !== null) {
  btnZ5.addEventListener('click', debugZ5);
} else {
  scopeZ5.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 6 - Operators part 2*/

let word1_Z6 = "Hello";
let word2_Z6 = "World";

let result_Z6 = word1_Z6 + word2_Z6;

//Well it is just to said that we can also make a operations on strings which is really useful. Now let's go with comparsion operators.

let number1_Z6 = 13;
let number2_Z6 = 17;

let operationResult1_Z6 = number1_Z6 > number2_Z6; //false, not higher than n2.
//^it would return false because it is simply not true that number1 is greater than number 2.
let operationResult2_Z6 = number1_Z6 == number2_Z6; //false, not equal
let operationResult3_Z6 = number1_Z6 <= number2_Z6; //true
let operationResult4_Z6 = number1_Z6 != number2_Z6; //true, not equal

let ultraOperation_Z6 = number1_Z6 === number2_Z6;

ultraOperation_Z6 = !ultraOperation_Z6; //It just changed the value from false to true
//due to the ! (not) logical operator

let logOp1_Z6 = number1_Z6 > number2_Z6 && number2_Z6 == number1_Z6;
let logOp2_Z6 = number2_Z6 > number1_Z6 || number2_Z6 == number1_Z6;
//^ with OR operator || only one of operands have to be true to return true

//Ternary ? : something like if else

let ternary_Z6 = number1_Z6 > number2_Z6 ? number1_Z6 : number2_Z6;
//What we did there? We asked the computer about comparsion, is the number 1 bigger than number 2? No, so if the number 2 is bigger then it will store number 2 value, because first sentence after ? stores only true, so if the statement is true then return number1, if not - there comes an : - then store a value of number2.

//Homework - Game over or not depending on number of lives.

const maxLives_Z6 = 3;
let currentLives_Z6 = 1;

let isTheGameOver_Z6 = currentLives_Z6 <= 0 && currentLives_Z6 < maxLives_Z6;

//OR THE SOLUTION OF AUTHOR - SIMPLER

let numberOfLives_Z6 = 3;
let isTheGameOver2_Z6 = !(numberOfLives_Z6 > 0);

//So actually the number of lives has to fill two conditions: we have to be at 0 lives to be dead and in the same moment we have to got smaller number than maxLives to don't allow the numbers to override the value.

/* End of Task 6 --------- */

/* OUTPUT CODE */

const btnZ6 = document.getElementById('run-zenva-task-6');
const scopeZ6 = document.getElementById('zenva-task-6');

function debugZ6() {
  scopeZ6.innerHTML = outputResponseZ + ', Result 1: ' + result_Z6 + ", 1: " + operationResult1_Z6 + ", 2: " + operationResult2_Z6 + ", 3: " + operationResult3_Z6 + ", Ultra: " + ultraOperation_Z6 + ", AND: " + logOp1_Z6 + ", OR: " + logOp2_Z6 + ", Ternary: " + ternary_Z6 + ", Homework: "  + isTheGameOver_Z6;
}

if (btnZ6 !== null && scopeZ6 !== null) {
  btnZ6.addEventListener('click', debugZ6);
} else {
  scopeZ6.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 7 - Arrays */

let inventory_Z7 = ["shirt", "axe", "sword"];
//inventory = ["water", "pants"]; We can ofc change the values if we want to something different.

//Let's pretend that we know what is in the array and we want something from it.

let shirt_Z7 = inventory_Z7[0];

//But we can access and modify existing element. 

inventory_Z7[2] = "bread";

//We can return a whole length of an array and simply a length of single position in an array.

let howLong_Z7 = inventory_Z7.length; // It would return 3.

//Now let's get length of item with index 2 (so 3rd in a row).

let howLongItem_Z7 = inventory_Z7[2].length;

//We can push item to the end of the array via push() method.

let pushArray_Z7 = inventory_Z7.push("potion");

//We can also delete an item from array using pop() method.

let popArray_Z7 = inventory_Z7.pop();

//Pop is actually removing the last item and then returning it.

/* End of Task 7 --------- */

/* OUTPUT CODE */

const btnZ7 = document.getElementById('run-zenva-task-7');
const scopeZ7 = document.getElementById('zenva-task-7');

function debugZ7() {
  scopeZ7.innerHTML = outputResponseZ + ', Inv 2: ' + inventory_Z7[2] + "Our array has: " + howLong_Z7 + " positions." + " Item with index 2 is: " + howLongItem_Z7 + " letters long. " + "Our whole array after push: " + inventory_Z7 +  "Value of popArray after the pop(): " + popArray_Z7;
}

if (btnZ7 !== null && scopeZ7 !== null) {
  btnZ7.addEventListener('click', debugZ7);
} else {
  scopeZ7.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 8 - Multidimensional Arrays */

var task8 = "#Task 8: ";

let levels_Z8 = [
  [1.1, 1.2, 1.3, 1.4], //Array 1
  [2.1, 2.2], //Array 2
  [3.1, 3.2, 3.3], //Array 3
  [4.1, 4.2, 4.3, 4.4, 4.5] //Array 4
];

//^Actually we created a 4 arrays inside array, that is called multidimensional arrays. We wanna simulate few levels of our game while every of them has some sub-levels inside. We can assume that they are like rows and columns. In each of inner-array we have some columns, these columns are: 1.1, 1.2, 1.3, 1.4 etc.

let firstArea_Z8 = levels_Z8[0]; 
//^ This is simple access of whole 1 innerArray of our levels Array.

let firstLevelArea_Z8 = levels_Z8[0][1]; //It should be 1.2
//^ This is simple access of 1st content in 1Inner array. In [0] - This is row, while [1] is column inside inner row 0 (array 1)

let firstLevelMod_Z8 = levels_Z8[0][1] = 1.9;

/* Homework - delete 1 item from innerArray 2 and add it to Inner Array 3 */

let secondLevelMod_Z8 = levels_Z8[1].pop();
let secondLevelMod2_Z8 = levels_Z8[2].push(secondLevelMod_Z8);

/* End of Task 8 --------- */

/* OUTPUT CODE */

const btnZ8 = document.getElementById('run-zenva-task-8');
const scopeZ8 = document.getElementById('zenva-task-8');

function debugZ8() {
  scopeZ8.innerHTML = outputResponseZ + 'First Area: ' + firstArea_Z8 + ". First level area: " + firstLevelArea_Z8 + ". First level mod: " + firstLevelMod_Z8 + ". Whole Inner-Array1 after Level change: " + levels_Z8[0] + ". Content of 3rd InnerArray after push: " + levels_Z8[2];
}

if (btnZ8 !== null && scopeZ8 !== null) {
  btnZ8.addEventListener('click', debugZ8);
} else {
  scopeZ8.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 9 - Functions */ /* */

var task9 = "#Task 9: ";

/*
function name(inputs) {
  function body
  return value
}
*/

//Hovewer, we don't have to return values or scopes any inputs all the time. Our function can work without this and it would be perfectly fair if we just want to do some code without returning anything or scoping any targets.

let currentHealth_Z9 = 100;
let healAmount_Z9 = 25;

function heal() {
  currentHealth_Z9 += healAmount_Z9;
}

/* While designing functions we should think about logic behind it, it is much better to create something reusable or universal over time than just doing some static instructions which would not benefit over time. */

heal();

/* However, we can create an reference using variable to store the function. */

let t1_Z9; let t2_Z9;
t1_Z9 = 2; t2_Z9 = 10;

let ref = function test1() {
  t1_Z9 += t2_Z9;
}

ref();

/* We can also nest a function inside other function, like: */

let t3_Z9; let t4_Z9;
t3_Z9 = 20; t4_Z9 = 5;

function nestTest() {
  t3_Z9 += t4_Z9;
  function nested() {
    t3_Z9--;
  }
  nested();
}

nestTest();

//^The example above was example of nested function which was declared and called inside another function.

/* End of Task 9 --------- */

/* OUTPUT CODE */

const btnZ9 = document.getElementById('run-zenva-task-9');
const scopeZ9= document.getElementById('zenva-task-9');

function debugZ9() {
  scopeZ9.innerHTML = outputResponseZ + "Current Health after heal: " + currentHealth_Z9 + ". Test of a function reference: " + t1_Z9 + ". Test of a nested function: " + t3_Z9;
}

if (btnZ9 !== null && scopeZ9 !== null) {
  btnZ9.addEventListener('click', debugZ9);
} else {
  scopeZ9.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 10 - Function Parameters */ 

let currentSanity_Z10 = 0;

// Now we would create some inputs to change the behavior of our function. It is bad practice to declare other variable which can be used as an Input, instead of this we can make it as a parameter.

function sanity_Z10(recoverSanity_Z10) {
  currentSanity_Z10 += recoverSanity_Z10;
}

sanity_Z10(100); //currentSanity will be 100.

// Sometimes we just want to pass some default value. However, if we then call another value while calling an function, we will override this.


let currentMana_Z10 = 55.5;

function manaRecover_Z10(manaRecoverAmount_Z10 = 25) {
  currentMana_Z10 += manaRecoverAmount_Z10;
}

manaRecover_Z10(30.5);

// Now our 30.5 will override the default value of 25. It is very good to have default value of parameter.

/* End of Task 10 --------- */

/* OUTPUT CODE */

const btnZ10 = document.getElementById('run-zenva-task-10');
const scopeZ10= document.getElementById('zenva-task-10');

function debugZ10() {
  scopeZ10.innerHTML = outputResponseZ + "Sanity after function call: " + currentSanity_Z10 + ". Mana after function call: " + currentMana_Z10;
}

if (btnZ10 !== null && scopeZ10 !== null) {
  btnZ10.addEventListener('click', debugZ10);
} else {
  scopeZ10.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 11 - Function Return Statements */ 

let maxBalance_Z11 = 200.0;
let currentBalance_Z11 = 198.1;

//Now we want to calculate a precentage of our balance, during this we would learn how to return something from a function to make some calculations.

function transaction(transValue_Z11 = 1.0) {
  let calcValue_Z11 = currentBalance_Z11 + transValue_Z11;
  currentBalance_Z11 = calcValue_Z11 > 200 ? maxBalance_Z11 : calcValue_Z11;
  currentBalance_Z10 -= transValue_Z11;
  return (currentBalance_Z11 / maxBalance_Z11) * 100; //Calculating the precentage.
}

let result_Z11 = transaction();
result_Z11 = transaction(20.9);

/* End of Task 11 --------- */

/* OUTPUT CODE */

const btnZ11 = document.getElementById('run-zenva-task-11');
const scopeZ11= document.getElementById('zenva-task-11');

function debugZ11() {
  scopeZ11.innerHTML = outputResponseZ + result_Z11 + ". Current Balance after transaction: " + currentBalance_Z11;
}

if (btnZ11 !== null && scopeZ11 !== null) {
  btnZ11.addEventListener('click', debugZ11);
} else {
  scopeZ11.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 12 - If Statements 1/2 */ 

let keyPress_Z12 = "r";
let xPos_Z12 = 0;

// We are going to create something like test for moving object

if (keyPress_Z12 == "l") {
  xPos_Z12 -= 1; //xPos = -1;
} else if (keyPress_Z12 == "r") {
  xPos_Z12 += 1; //xPos = -1;
} else {
  xPos_Z12 = 0;
}

// This code is comparing the value of variable keyPress „else" there works as an backup if we want to do something if no any of the values matches the requirements specified in above statements. If any of requirements fails (returns false), then code is going to another one.

/* End of Task 12 --------- */

/* OUTPUT CODE */

const btnZ12 = document.getElementById('run-zenva-task-12');
const scopeZ12= document.getElementById('zenva-task-12');

function debugZ12() {
  scopeZ12.innerHTML = outputResponseZ + xPos_Z12;
}

if (btnZ12 !== null && scopeZ12 !== null) {
  btnZ12.addEventListener('click', debugZ12);
} else {
  scopeZ12.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 13 - If Statements 2/2 */ 

// Let's talk about nested Ifs, imagine if we have:

let someNumber_Z13 = 99;
let doLMAO_Z13 = 0;

if (someNumber_Z13 > 10 ) {
  doLMAO_Z13 += 25;
}
if (someNumber_Z13 < 5 ) {
  doLMAO_Z13 *= 2;
}

// We can use something above if we want to execute only one test of code at a time without creating else if statement, but right I can't see this any useful.

// Now we are going to create nested If

let keyPressed_Z13 = "d";
let endPos_Z13 = 200;
let actualPos_Z13 = 50;

if (keyPressed_Z13 == "d") {
  if (actualPos_Z13 < endPos_Z13) {
    actualPos_Z13 += 1;
  }
  actualPos_Z13 += 1;
} else if (keyPressed_Z13 == "a") {
  actualPos_Z13 -= 1;
} else {
  actualPos_Z13 = 0;
}

// However, there are scenarios when we shouldn't do that, instead of it we should add logical expression to it. Properly it would look like this:

if (keyPressed_Z13 == "d" && actualPos_Z13 < endPos_Z13) {
  actualPos_Z13 += 1;
} else if (keyPressed_Z13 == "a") {
  actualPos_Z13 -= 1;
} else {
  actualPos_Z13 = 0;
}

// but in the example above, the code would run only if both statements are true, when we still want to do something before matching both of boolean expressions, then we have to use nested if.

/* Homework - Do the same on the left side of map */

if (keyPressed_Z13 == "d" && actualPos_Z13 < endPos_Z13) {
  actualPos_Z13 += 1;
} else if (keyPressed_Z13 == "a" && actualPos_Z13 >= 0) {
  actualPos_Z13 -= 1;
} else {
  actualPos_Z13 = 0;
}

/* End of Task 13 --------- */

/* OUTPUT CODE */

const btnZ13 = document.getElementById('run-zenva-task-13');
const scopeZ13= document.getElementById('zenva-task-13');

function debugZ13() {
  scopeZ13.innerHTML = outputResponseZ + "Value after debug: " + doLMAO_Z13 + ". Actual position: " + actualPos_Z13;
}

if (btnZ13 !== null && scopeZ13 !== null) {
  btnZ13.addEventListener('click', debugZ13);
} else {
  scopeZ13.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 14 - While Loops */ 

// Ye let's do the same another time (oof), now we are going to move foward continously by 50 until we met end of our „map" (at least in math)

let endOfMap_Z14 = 500;
let aPos_Z14 = 0;
let enemyPos_Z14 = 450;
let isGameOver_Z14 = false;

// while(aPos_Z14 < endOfMap_Z14) {
//   console.log(aPos_Z14); // To look forward if it is working in console.
//   aPo_Z14s += 50;
//   if (aPos_Z14 == enemyPos_Z14) {
//     console.log('Game Over!');
//   }
// }

while(!isGameOver_Z14) {
  console.log("Current Position: " + aPos_Z14);
  if(aPos == enemyPos_Z14){
    isGameOver_Z14 = true;
    console.log("You've met enemy! Game is over on: " + aPos_Z14);
  } else if (aPos_Z14 == endOfMap_Z14) {
    isGameOver_Z14 = true;
    console.log("You've met end of the map! Game is over on: " + aPos_Z14);
  } else {
    aPos_Z14 += 50;
  }
}

// ^ This is also a homework, we've made a code when game would end if we met end of the map or our enemy.

/* End of Task 14 --------- */

/* OUTPUT CODE */

const btnZ14 = document.getElementById('run-zenva-task-14');
const scopeZ14= document.getElementById('zenva-task-14');

function debugZ14() {
  scopeZ14.innerHTML = outputResponseZ + "Our actual position: " + aPos_Z14;
}

if (btnZ14 !== null && scopeZ14 !== null) {
  btnZ14.addEventListener('click', debugZ14);
} else {
  scopeZ14.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 15 - Control Statements */ 

var task15 = "#Task 15: ";

let endOfMap_Z15 = 500;
let aPos_Z15 = 0;
let enemyPos_Z15 = 250;
let isGameOver_Z15 = false;

// while(aPos_Z15 < endOfMap_Z15) {
//   aPos_Z15 +=50;
//   console.log("I'm moving, my position: " + aPos_Z15);
//   if(aPos_Z15 == enemyPos_Z15) {
//     console.log("You've met enemy! Game is lost!");
//     break;
//   }
// }

// We simply want to stop our code like end game mechanics. That's why we used break. We are exiting our loop. Let's say that we want to skip every odd number right now:

endOfMap_Z15 = 20;

// while(aPos_Z15 < endOfMap_Z15) {
//   if (xPos_Z15 % 2 == 1) {
//     xPos_Z15 += 2;
//     continue;
//   }
//   aPos_Z15++;
//   if(aPos_Z15 == enemyPos_Z15) {
//     console.log("You've met enemy! Game is lost!");
//     break;
//   }
//   console.log("I'm moving, my position: " + aPos_Z15);
// }

// This seems like kinda broken logic, but if we hit continue with our statements, we actually leave behind everything that is after continue, because we will endlessly jump between boolean condition inside while till our continue, so actually our break would never happen (in the example above);

function movePlayer_Z15() {
  while(aPos_Z15 < endOfMap_Z15) {
   aPos_Z15 ++;
   if(aPos_Z15 == enemyPos_Z15) {
     console.log("You've met enemy! Game is lost!");
     return;
   }
  }
}

// So actually we can move out the entire function with our „return" instead of breaking iterations of whole loop.

/* End of Task 15 --------- */

/* OUTPUT CODE */

const btnZ15 = document.getElementById('run-zenva-task-15');
const scopeZ15= document.getElementById('zenva-task-15');

function debugZ15() {
  scopeZ15.innerHTML = outputResponseZ + aPos_Z15;
}

if (btnZ15 !== null && scopeZ15 !== null) {
  btnZ15.addEventListener('click', debugZ15);
} else {
  scopeZ15.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 16 - For Loops */ 

let items = ["Polo", "Gloves", "Wallet"];
let endPointString = "I have: ";

// for(let i = 0; i < items.length; i++) {
//   //It would run 3 times coz of Array Length
//   let itemName = items[i]; //We are parsing index so we would get item
//   endPointString += itemName + ", ";
// }

// ^With this construction of our for loop we want to attach something to every each item. We want to reach every content of our array so our iterator is our array index. We want to finish when our iterator would be equal to length of our Array.

items.forEach(function(element) {
  endPointString += element + ", ";
});

// This looks kinda confusing, but we are just doing a function on each element of our array, so it's simpler and much more clear.

/* End of Task 16 --------- */

/* OUTPUT CODE */

const btnZ16 = document.getElementById('run-zenva-task-16');
const scopeZ16= document.getElementById('zenva-task-16');

function debugZ16() {
  scopeZ16.innerHTML = outputResponseZ + endPointString;
}

if (btnZ16 !== null && scopeZ16 !== null) {
  btnZ16.addEventListener('click', debugZ16);
} else {
  scopeZ16.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 17 - Objects */ 

var task17 = "#Task 17: ";

// We are going to create object called character.

let gameCharacter = {
  name: "Bezimienny",
  xPosition: 0,
  yPosition: 0,
  items: ["Sword", "Helmet"],
  // They are the properties
  // property: value,
  move: function(x) {
    this.xPosition += x;
    // this. means that belongs to this position of this object.
    // It says: the property xPos of THIS object (gameCharacter) is
    // going to increase by value of our x.
  },
};

let name = gameCharacter.name;

// We can also perform the same syntax using: let name = gameCharacter['name']; We can also re-assign any property.

gameCharacter.items = ["Axe", "Bread"];

// Aaaaand use functions

gameCharacter.move(5);
var x = gameCharacter.xPosition;

// And we can add properties to the object on the fly simply using:

gameCharacter.surname = "Leon";

// Aaaaaaaaaaaaaaand we can access our functions on the fly and modify them:

gameCharacter.zPosition = 0;
gameCharacter.move = function(x,y) {
  this.xPos += x;
  this.yPos += y;
};

/* End of Task 17 --------- */

/* OUTPUT CODE */

const btnZ17 = document.getElementById('run-zenva-task-17');
const scopeZ17= document.getElementById('zenva-task-17');

function debugZ17() {
  scopeZ17.innerHTML = outputResponseZ + "Our X position is: " + gameCharacter.xPosition + ". Our Additional property is: " + gameCharacter.surname;
}

if (btnZ17 !== null && scopeZ17 !== null) {
  btnZ17.addEventListener('click', debugZ17);
} else {
  scopeZ17.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 18 - References, Object Getters and Setters */ 

// By general, there are NO POINTERS in JavaScript. Let's have a look but first let's write some simple object.

let simpleObject = {
  id: 0,
  rowName: "null",
  columnName: "First",
  profession: "magician",
  title: "Wizard",
  // Now we want to get our title and profession from simpleObject and connect them together. We used it inside of an object, now every time we would use that it would just compute our full name.
  get connection() {
    let fullName = this.title + ", the " + this.profession + ".";
    return fullName;
  }
};

// And now, speaking by logic:

let i = 5; // variable i is equal to 5, so we assign a value to the variable j
let j = i; // but now, the all it is doing it's copying the value of i into j,
           // i remains the same (5), while j takes new value
i = 10;    // now j remains the same, because we change value in previous step, but we are not
           // changing j after that. let's test this out

// So on, this whole sequence is just copying a value. However, if we create something like:

let refName = simpleObject; //This is called reference.
refName.id = 1; 

// So now, refName.id is equal to 1, and the same the simpleObject id property is equal to 1.

// Now let's create some fancy getters and setters.

// get connection() {
//   let fullName = this.title + " , the " + this.profession;
//   return fullName;
// }

simpleObject.connection;

// Let's create some setter. They are used to modify some properties.

let crowd = {
  id: 0,
  countPeople: 12,
  set maxPeople(counter) {
    this.countPeople = counter;
    // So every time we set max people then we are changing countPeople to it.
  }
}

crowd.maxPeople = 50; 

// Now it would change our countPeople to 50, but the crowd.maxPeople itself is UNDEFINED.

/* End of Task 18 --------- */

/* OUTPUT CODE */

const btnZ18 = document.getElementById('run-zenva-task-18');
const scopeZ18= document.getElementById('zenva-task-18');

function debugZ18() {
  scopeZ18.innerHTML = outputResponseZ + "Value of j: " + j + ". Value of i: " + i + ". Value of simpleObject ID: " + simpleObject.id + ". Value of refName ID: " + refName.id + ". Our first getter called connection: " + simpleObject.connection + ". Our first setter called maxPeople: " + crowd.countPeople;
}

if (btnZ18 !== null && scopeZ18 !== null) {
  btnZ18.addEventListener('click', debugZ18);
} else {
  scopeZ18.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 19 - Object Functions */ 

// We are going to create multiple instances of single object.

// This kind of abstraction allows us to create multiple, infinite instances of object while we have to copy standard one to create another instances.

function townNPC(id, name, title, pos) {
  this.id = id;
  this.name = name;
  this.title = title;
  this.pos = pos;
  this.move = function(x) {
    this.pos += x;
  }
  this.type = "default"; // If some value is not passed as a parameter, it would be
  // default for this whole object type. It is useful when we would use some (the same)
  // function on every instance of single object type.
}

// However, this it something like blueprint, now we are going to create instance of this object. To do this, we have to use „new" keyword.

let salesman = new townNPC(0, "Maverick", "Salesman", 120); // So now we store those values in salesman.

/* End of Task 19 --------- */

/* OUTPUT CODE */

const btnZ19 = document.getElementById('run-zenva-task-19');
const scopeZ19= document.getElementById('zenva-task-19');

function debugZ19() {
  scopeZ19.innerHTML = outputResponseZ + "Our first NPC is: " + salesman.name + " with an ID value "+ salesman.id + ". Who's profession is: " + salesman.title + ". He stood at: " + salesman.pos + ".";
}

if (btnZ19 !== null && scopeZ19 !== null) {
  btnZ19.addEventListener('click', debugZ19);
} else {
  scopeZ19.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 20 - Object Prototypes */ 

function constructor(id, posX, posY, name, swingPos) {
  this.id = id;
  this.posX = posX;
  this.posY = posY;
  this.name = name;
  this.swingPos = swingPos;
}

// And now let's try to create another property on the fly by doing prototype.

let crane = new constructor(1, 15, 35, "Meril 1", 0);

crane.title = "Mother Crane";

// So actually we've added another value to our Obj as a func, but it would not appear in another instance because we've added it on the fly to this one, it is not attached to our „blueprint".

let crane2 = new constructor(2, 50, 590, "Meril 2");
crane2.title;

// so it is undefined, as should be, it is an reference error. We can outsmart it using prototype. Now every instance of Object as a Function would have this property.

constructor.prototype.profession = "Blacksmith";

// Ofc later on, we can reassign these values, just „Blacksmith" is now the default one for whole blueprint. Let's use it more complex. Let's create a function that would heal our character.

let swingCrane = function(swingAmount) {
  this.swingPos += swingAmount;
}

constructor.prototype.swingCrane = swingCrane;
crane.swingCrane(20);
crane2.swingCrane(40);

// This function done on crane2 would return undefined, because our value was not defines in 2nd object instance assign.

/* End of Task 20 --------- */

/* OUTPUT CODE */

const btnZ20 = document.getElementById('run-zenva-task-20');
const scopeZ20 = document.getElementById('zenva-task-20');

function debugZ20() {
  scopeZ20.innerHTML = outputResponseZ + "Our constructor: " + crane.id + " " + crane.posX + " " + crane.posY + " " + crane.name + " " + ". Our additional property in Obj as a function 1st instance: " + crane.title + ". Our additional property in Obj as a function 2st instance: " + crane2.title + ". Our property after using prototype: " + crane.profession + ". Our function after using prototype on 1st instance: " + crane.swingPos + ". Our function after using prototype on 2nd instance: " + crane2.swingPos;
}

if (btnZ20 !== null && scopeZ20 !== null) {
  btnZ20.addEventListener('click', debugZ20);
} else {
  scopeZ20.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}

/* Task 21 - Classes */ 

class gameCharacter2 {
  constructor(id, name, title, health, mana, xPosition) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.health = health;
    this.mana = mana;
    this.xPosition = xPosition;
  }
  move(distance){
    this.xPosition += distance;
  }
}

let warrior = new gameCharacter2(1, "Dave", "Barbarian", 150, 100, 200);

warrior.move(50);

// Now let's talk about inheritance of classes. We want to use keyword super to inherit properties from parent class, also if we want to add something that doesn't exist in parent class, we can easily do so. 

class elfCharacter extends gameCharacter2 {
  constructor(id, name, title, health, mana, xPosition){
    super(id, name, title, health, mana, xPosition);
    this.fishingSkillLevel = 0;
  }
}

// Right up the fishingSkillLevel only exists in elfCharacter, so in children class that inherit values from parent class. Parent class.

/* End of Task 21 --------- */

/* OUTPUT CODE */

const btnZ21 = document.getElementById('run-zenva-task-21');
const scopeZ21= document.getElementById('zenva-task-21');

function debugZ21() {
  scopeZ21.innerHTML = outputResponseZ + "Some of the values from our class: " + "Warrior name: " + warrior.name;
}

if (btnZ21 !== null && scopeZ21 !== null) {
  btnZ21.addEventListener('click', debugZ21);
} else {
  scopeZ21.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}