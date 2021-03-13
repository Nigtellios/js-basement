/* This is from ZENVA JS Foundations */

let outputResponse = "Output: ";

/* 1st Task - Beginning */

var hello_Z1 = "#Task 1: Hello, World";

/* END OF TASK 1 */

/* OUTPUT CODE */

const btn_Z1 = document.getElementById('run-zenva-task-1');
const scope_Z1 = document.getElementById('zenva-task-1');

function debug_Z1() {
  scope_Z1.innerHTML = outputResponse + hello_Z1;
}

if (btn_Z1 !== null && scope_Z1 !== null) {
  btn_Z1.addEventListener('click', debug_Z1);
} else {
  scope_Z1.innerHTML = "ERROR: Button ID or box scope ID doesn't exist or has the wrong value.";
}


/* Task 2 - Variables */

var task2 = "#Task 2: ";

//Assigning a value to the variable
//However, this is an literal value -> it is a notation for representing a fixed value.

var currentMana_Z2 = 100; 

//We can do this in different ways, like:
var maxStamina_Z2;
maxStamina_Z2 = 100;
var currentStamina_Z2 = 50.2;
currentStamina_Z2 = maxStamina_Z2; 

//Right here we are assigning current stamina level to their Maximum avaliable value.
//We don't want to do it vice versa because we would damage our max allowed value.

console.log(task2 + currentStamina_Z2);


//This the type of boolean value, it holds two statements - true or false.
var isGameOver_Z2 = false;
isGameOver_Z2 = true;

//^ We just reassigned our value in case of changing statement.

console.log(task2 + isGameOver_Z2);

/* END OF TASK 2 */

/* Task 3 - Const vs Let vs Var */

const task3 = "#Task 3: ";

const maxMoves_Z3 = 50;
//The value of constant cannot be changed, so it would stay at 50.
//Now we can't change its value but we can change other variable value to it, like:

var currentMove_Z3 = 15;
currentMove_Z3 = maxMoves_Z3;

console.log(task3 + currentMove_Z3);

//LET can be used only in some scope, it can be changed or used only in code block where it
//was declared.

if (true) {
  var isGameRunning_Z3 = false;
  let hasGameCrashed_Z3 = false;
}

var question_Z3 = "Is game still running? ";

console.log(task3 + question_Z3 + isGameRunning_Z3);
console.log(task3 + question_Z3 + hasGameCrashed_Z3);


/* End of Task 3 ------------------ */

/* Task 4 - Strings */

var task4 = "#Task 4: "
var characterName_Z4 = "Nebed";
characterName_Z4 = "Miran";

var age_Z4 = 22;

let encourMessage_Z4 = `Hi, my name is ${characterName_Z4}, and I'm ${age_Z4}.`;
//This string between `` is using interpolation.

let nameLength_Z4 = characterName_Z4.length;

//Now we can use two methods to convert text to Upper and Lower Case:

let upperName_Z4 = characterName_Z4.toUpperCase();
let lowerName_Z4 = characterName_Z4.toLowerCase();

//Actually these two aren't modifying the literal value, we are creating
//something like a copy of them and store them in upperName and lowerName.
//If we want to change the original value, we have to reassing it using these methods.

characterName_Z4 = characterName_Z4.toLowerCase();
//So this one is geting original value and converts it to lower case.

let nameSlice_Z4 = characterName_Z4.slice(0, 3);

console.log(task4 + encourMessage_Z4);
console.log(task4 + nameLength_Z4);
console.log(task4 + upperName_Z4);
console.log(task4 + lowerName_Z4);
console.log(task4 + nameSlice_Z4);

let currentLevel_Z4 = 0;
currentLevel_Z4 = 3;

let currentLevelInfo_Z4 = `Currently you are at level ${currentLevel_Z4}`;

console.log(task4 + currentLevelInfo_Z4);

/* End of Task 4 --------- */

/* Task 5 - Operators */

var task5 = "#Task 5: ";

//Assignment operator, it just assigns a value to a variable.

let hp_Z5 = 50;
hp_Z5 = 250;

//Arithmetic operators + - * /

hp_Z5 = hp_Z5 + 10; //260
hp_Z5 = hp_Z5 - 20; //240
hp_Z5 = hp_Z5 * 2; //480
hp_Z5 = hp_Z5 / 2; //240

//Now the modulus, which would return us a remainder of selected number
//With this we can check if a number is even or odd.
//It would look like health % 2 == 0; - if it's 0 then it's even, if not it's odd.

hp_Z5 = hp_Z5 % 21; //9

//Now with exponentiation we can raise first operand to the power of second one.

hp_Z5 = hp_Z5 ** 2; //81

//Or even..

//hp = (hp ** 2)**2 ; //43046721

//Now we can do the same with combination of arithmetic and assignment operator together.

hp_Z5 -= 20; //61
hp_Z5 += 30; //91
hp_Z5 *= 2; //182
hp_Z5 /= 2; //91

//^Yep, we actually raised an 81 to the power of 81 which result is 43 milions.

//Ye now Incrementation and decrementation.

hp_Z5++; //92
hp_Z5--; //91

//And remember the PEMDAS with brackets! It is better to make brackets for
//higher priority operations in maths even if they are no needed.

hp_Z5 = (hp_Z5 * 2) - 20; //Value: 162 and THIS IS BETTER than:
//hp = hp * 2 - 20;

//Homework

hp_Z5 = hp + 1; //163
hp_Z5++; //164
hp_Z5 += 1; //165

let currentValue_Z5 = `Current value is: ${hp_Z5}`;

console.log(task5 + currentValue_Z5);

/* End of Task 5 --------- */

/* Task 6 - Operators part 2*/

var task6 = "#Task 6: ";

let word1_Z6 = "Hello";
let word2_Z6 = "World";

let result_Z6 = word1_Z6 + word2_Z6;

console.log(result_Z6); 

//Well it is just to said that we can also make a operations on strings
//which is really useful.
//Now let's go with comparsion operators.

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
//What we did there? We asked the computer about comparsion, is the number 1 bigger than
//number 2? No, so if the number 2 is bigger then it will store number 2 value, because
//first sentence after ? stores only true, so if the statement is true then return number1,
//if not - there comes an : - then store a value of number2.

//Homework - Game over or not depending on number of lives.

const maxLives_Z6 = 3;
let currentLives_Z6 = 1;

let isTheGameOver_Z6 = currentLives_Z6 <= 0 && currentLives_Z6 < maxLives_Z6;

//OR THE SOLUTION OF AUTHOR - SIMPLER

let numberOfLives_Z6 = 3;
let isTheGameOver2_Z6 = !(numberOfLives_Z6 > 0);

//So actually the number of lives has to fill two conditions: we have to be at 0 lives to be dead and in
//the same moment we have to got smaller number than maxLives to don't allow the numbers to override the value.

console.log(task6 + "1 " + operationResult1_Z6);
console.log(task6 + "2 " + operationResult2_Z6);
console.log(task6 + "3 " + operationResult3_Z6);
console.log(task6 + "Ultra: " + ultraOperation_Z6);
console.log(task6 + "AND: " + logOp1_Z6);
console.log(task6 + "OR: " + logOp2_Z6);
console.log(task6 + "Ternary: " + ternary_Z6);
console.log(task6 + "Homework: " + isTheGameOver_Z6);

/* End of Task 6 --------- */

/* Task 7 - Arrays */

var task7 = "#Task 7: ";

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

console.log(task7 + inventory_Z7[2]);
console.log(task7 + "Our array has: " + howLong_Z7 + " positions.");
console.log(task7 + "Item with index 2 is: " + howLongItem_Z7 + " letters long.");
console.log(task7 + "Our whole array after push: " + inventory_Z7);
console.log(task7 + "Value of popArray after the pop(): " + popArray_Z7);

/* End of Task 7 --------- */

/* Task 8 - Multidimensional Arrays */

var task8 = "#Task 8: ";

let levels_Z8 = [
  [1.1, 1.2, 1.3, 1.4], //Array 1
  [2.1, 2.2], //Array 2
  [3.1, 3.2, 3.3], //Array 3
  [4.1, 4.2, 4.3, 4.4, 4.5] //Array 4
];

//^Actually we created a 4 arrays inside array, that is called multidimensional arrays.
//We wanna simulate few levels of our game while every of them has some sub-levels inside.
//We can assume that they are like rows and columns. In each of inner-array we have some 
//columns, these columns are: 1.1, 1.2, 1.3, 1.4 etc.

let firstArea_Z8 = levels_Z8[0]; 
//^ This is simple access of whole 1 innerArray of our levels Array.

let firstLevelArea_Z8 = levels_Z8[0][1]; //It should be 1.2
//^ This is simple access of 1st content in 1Inner array.
// in [0] - This is row, while [1] is column inside inner row 0 (array 1)

let firstLevelMod_Z8 = levels_Z8[0][1] = 1.9;

/* Homework - delete 1 item from innerArray 2 and add it to Inner Array 3 */

let secondLevelMod_Z8 = levels_Z8[1].pop();
let secondLevelMod2_Z8 = levels_Z8[2].push(secondLevelMod_Z8);

console.log(task8 + firstArea_Z8);
console.log(task8 + firstLevelArea_Z8);
console.log(task8 + firstLevelMod_Z8);
console.log(task8 + "Whole Inner-Array1 after Level change: " + levels_Z8[0]);
console.log(task8 + "Whole Inner-Array1 after Level change: " + levels_Z8[0]);
console.log(task8 + "Content of 3rd InnerArray after push: " + levels_Z8[2]);

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

let currentHealth_Z9 = 100;
let healAmount_Z9 = 25;

function heal() {
  currentHealth_Z9 += healAmount_Z9;
}

/* While designing functions we should think about logic behind it, it is much
better to create something reusable or universal over time than just doing some
static instructions which would not benefit over time. */

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

//^The example above was example of nested function which was declared and
//called inside another function.

console.log(task9 + "Current Health after heal: " + currentHealth_Z9);
console.log(task9 + "Test of a function reference: " + t1_Z9);
console.log(task9 + "Test of a nested function: " + t3_Z9);

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
// We can also perform the same syntax using:
// let name = gameCharacter['name'];

// We can also re-assign any property.

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

console.log(task17 + "Our X position is: " + gameCharacter.xPosition);
console.log(task17 + "Our Additional property is: " + gameCharacter.surname);

/* End of Task 17 --------- */

/* Task 18 - References, Object Getters and Setters */ 

var task18 = "#Task 18: ";

// By general, there are NO POINTERS in JavaScript
// Let's have a look but first let's write some simple object.

let simpleObject = {
  id: 0,
  rowName: "null",
  columnName: "First",
  profession: "magician",
  title: "Wizard",
  // Now we want to get our title and profession from simpleObject and connect them together.
  //We used it inside of an object, now every time we would use that it would just compute our full name.
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

console.log(task18 + "Value of j: " + j); // Value of j is 5
console.log(task18 + "Value of i: " + i); // Value of i is 10

// So on, this whole sequence is just copying a value.
// However, if we create something like:

let refName = simpleObject; //This is called reference.
refName.id = 1; 

// So now, refName.id is equal to 1, and the same the simpleObject id property is equal to 1.

console.log(task18 + "Value of simpleObject ID: " + simpleObject.id); // And now it is 1.
console.log(task18 + "Value of refName ID: " + refName.id); // And now it is 1.

// Now let's create some fancy getters and setters.

// get connection() {
//   let fullName = this.title + " , the " + this.profession;
//   return fullName;
// }

simpleObject.connection;

console.log(task18 + "Our first getter called connection: " + simpleObject.connection); // And now it is 1.

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

console.log(task18 + "Our first setter called maxPeople: " + crowd.countPeople); // And now it is 1.

/* End of Task 18 --------- */

/* Task 19 - Object Functions */ 

var task19 = "#Task 19: ";

// We are going to create multiple instances of single object.

// This kind of abstraction allows us to create multiple, infinite instances of object
// while we have to copy standard one to create another instances.

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

// However, this it something like blueprint, now we are going to create instance of this object.
// To do this, we have to use „new" keyword.

let salesman = new townNPC(0, "Maverick", "Salesman", 120); // So now we store those values in salesman.

console.log(task19 + "Our first NPC is: " + salesman.name + " with an ID value "+ salesman.id + ". Who's profession is: " + salesman.title + ". He stood at: " + salesman.pos + ".");

/* End of Task 19 --------- */

/* Task 20 - Object Prototypes */ 

var task20 = "#Task 20: ";

function constructor(id, posX, posY, name, swingPos) {
  this.id = id;
  this.posX = posX;
  this.posY = posY;
  this.name = name;
  this.swingPos = swingPos;
}

// And now let's try to create another property on the fly by
// doing prototype.

let crane = new constructor(1, 15, 35, "Meril 1", 0);

console.log(task20 + "Our constructor: " + crane.id + " " + crane.posX + " " + crane.posY + " " + crane.name + " ");

crane.title = "Mother Crane";

console.log(task20 + "Our additional property in Obj as a function 1st instance: " + crane.title);

// So actually we've added another value to our Obj as a func, but it would
// not appear in another instance because we've added it on the fly to this one,
// it is not attached to our „blueprint".

let crane2 = new constructor(2, 50, 590, "Meril 2");
crane2.title;

console.log(task20 + "Our additional property in Obj as a function 2st instance: " + crane2.title);
// so it is undefined, as should be, it is an reference error.

// We can outsmart it using prototype. Now every instance of Object as a Function would have this property.

constructor.prototype.profession = "Blacksmith";

console.log(task20 + "Our property after using prototype: " + crane.profession);

// Ofc later on, we can reassign these values, just „Blacksmith" is now the default one for whole blueprint.
// Let's use it more complex. Let's create a function that would heal our character.

let swingCrane = function(swingAmount) {
  this.swingPos += swingAmount;
}

constructor.prototype.swingCrane = swingCrane;
crane.swingCrane(20);
crane2.swingCrane(40);

console.log(task20 + "Our function after using prototype on 1st instance: " + crane.swingPos);
console.log(task20 + "Our function after using prototype on 2nd instance: " + crane2.swingPos);
// This function done on crane2 would return undefined, because our value was not defines in
// 2nd object instance assign.

/* End of Task 20 --------- */

/* Task 21 - Classes */ 

var task21 = "#Task 21: ";

class gameCharacter {
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

let warrior = new gameCharacter(1, "Dave", "Barbarian", 150, 100, 200);

warrior.move(50);

// Now let's talk about inheritance of classes.
// We want to use keyword super to inherit properties from parent class,
// also if we want to add something that doesn't exist in parent class
// we can easily do so. 

class elfCharacter extends gameCharacter {
  constructor(id, name, title, health, mana, xPosition){
    super(id, name, title, health, mana, xPosition);
    this.fishingSkillLevel = 0;
  }
}

// Right up the fishingSkillLevel only exists in elfCharacter, so in children
// class that inherit values from parent class. Parent class.

console.log(task21 + "Some of the values from our class: ");
console.log("Warrior name: " + warrior.name);

/* End of Task 21 --------- */