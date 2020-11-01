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

