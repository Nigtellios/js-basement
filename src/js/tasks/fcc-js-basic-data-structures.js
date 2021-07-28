/* ######################################## */
/* ######## BASIC DATA STRUCTURES ######### */
/* ######################################## */

/* Data can be stored and accessed in many ways. You already know some common JS data structures - arrays an objects. */

/* In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use inf different situations.
*  You'll also learn how to use helpful JS methods like splice() and object.keys() to access and manipulate data. */

const outputResponse = `(Basic Data Structures) Output: `;

/* ############################################################ */
/* Task E1: Use an Array to Store a Collection of Data */
/* ############################################################ */

/* Arrays can be one, or multi-dimensional. They can contain all valid JS data types: booleans, string, numbers, etc.
*  They have length property, Array.length, which as show below can be easy accessed with the syntax Array.length.
*  Arrays can contain JS Objects, and they are capable of storing complex objects. */

// Simple one-dimensional array
let simpleArray = ['first', 2, 'third', true, undefined, null, false];
console.log(`${ outputResponse } ${ simpleArray[0] }.`);

// Complex Array
let complexArray = [
    [
        {
            "name": "Puerto",
            "surname": "Rico"
        },
        {
            "name": "John",
            "surname": "Travolta"
        }
    ],
    [
        {
            "key": "value",
            "some": "thing"
        }
    ],
    [
        {
            "quantity": 25
        }
    ]
];

console.log(`${ outputResponse } ${ complexArray[0][0].name }`);

/* ############################################################ */
/* Task E2: Access an Array's Contents Using Bracket Notation */
/* ############################################################ */

/* Fundamental feature of any data structure is the ability to not only store the data, but to be able to retrieve the data on command.
*  Let's try to access something from our array. */

let accessArray = ["first_item", "second_item", "third_item"];

/* In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it.
* JS Arrays are zero-indexed, first element of an array is actually at the zeroth position, not first. In order to retrieve data from array
* we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object.
* This thing is known as bracket notation. */

let outputVariable = accessArray[1];

/* Using bracket notation we can set an index to a value. */

accessArray[1] = "Zeroth_Item, troll.";

/* ############################################################ */
/* Task E3: Add Items to an Array with push() and unshift() */
/* ############################################################ */

/* An Array length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and
* elements can be added or removed over time. In other words, ARRAYS ARE MUTABLE. We will look at two methods to programmatically modify an arrays:
* Array.push() and Array.unshift(). */

/* Both of these methods take one or more elements as parameters and add those elements to the array the method is being called on. */

/* The push() method adds elements to the end of an array, and unshift() adds elements to the beginning. */

let deactivatedUser = "Sigma1997";
let activeUsers = ["Dehad", "TheMadis", "Aron"];

activeUsers.unshift("Meraq12", "DenzelW");

console.log(`${ outputResponse } ${ activeUsers }`);

activeUsers.push(deactivatedUser);

console.log(`${ outputResponse } ${ activeUsers }`);

/* Notify that we can also push variables, which allows us even greater flexibility in dynamically modifying our array's data. */

/* ############################################################ */
/* Task E4: Remove Items from an Array with pop() and shift() */
/* ############################################################ */

/* Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift().
* pop() removes an element from the end of an array, while shift() removes an element from the beginning.
* The key difference between pop() and unshift) and their cousins push() and unshift() is that neither method
* takes parameters, and each only allows an array to be modified by a single element ad a time. */

let welcomeMessages = ["What's up?", "Sup' there?", "Hello General Kenobi"];

welcomeMessages.pop();

console.log(`${ outputResponse } ${ welcomeMessages }`);

welcomeMessages.shift();

console.log(`${ outputResponse } ${ welcomeMessages }`);

let deletedMessage = welcomeMessages.pop();
console.log(`${ outputResponse } ${ welcomeMessages }`);
console.log(`${ outputResponse } ${ deletedMessage }`);

/* ############################################################ */
/* Task E5: Remove Items Using splice() */
/* ############################################################ */

/* Splice() allows us to remove any number of consecutive elements from anywhere in an array.
* Splice() can take up to 3 parameters, let's focus on first two of them. First two are integers which
* represents indexes or position of the array that splice() is being called upon, while the second one indicates
* the number of elements to delete. For example: */

let arrayToSplice = ["Splice", "Me", "Daddy", "Pwease", "!"];
arrayToSplice.splice(1, 1);
console.log(`${ outputResponse } ${ arrayToSplice }`);

/* Splice not only modifies the array it's being called on, but it also returns a new array containing the value of
* the removed elements: */

let newArray = arrayToSplice.splice(2, 2);
console.log(`${ outputResponse } New array is: ${ newArray }`);

/* ############################################################ */
/* Task E6: Add Items Using splice() */
/* ############################################################ */

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const spliceIndex = 4;
const amountToDelete = 5;

someNumbers.splice(spliceIndex, amountToDelete, 15, 16, 17, 18, 19, 20);
console.log(`${ outputResponse } Some numbers after 3rd Splice parameter: ${ someNumbers }`);

/* ############################################################ */
/* Task E7: Copy Array Items Using slice() */
/* ############################################################ */

/* slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon
* untouched. slice() takes only 2 parameters -> the first is the index at which to begin extraction, and the
* second is the index at which to sop extraction (extraction will occur up to, but not including the element
* at this index. */

let joinRequirements = ['kind', 'meaningful', 'nice', 'tall', 'blonde'];

let requirementsToVerify = joinRequirements.slice(2, 4);
console.log(`${ outputResponse } requirements pushed to verify: ${ requirementsToVerify }`);

/* ############################################################ */
/* Task E8: Copy an Array with the Spread Operator */
/* ############################################################ */

/* ES6's spread operator allows us to easily copy all of an array's elements, in order, with a simple
* and highly readable syntax. The spread syntax simply looks like this: ...
* So we can copy an array like: */

let arrayToCopy = [true, false, 1, 2];
let copiedArray = [...arrayToCopy];
console.log(`${ outputResponse } Array copied using Spread Operator: ${ copiedArray }`);

/* Let's return a new array made up of N copies of an ARRAY. */

function copyAnArray(array, nTimes) {
    let returnedArray = [];
    while (nTimes >= 1) {
        returnedArray.push([...array]);
        nTimes--;
    }
    return returnedArray;
}

console.log(`${ outputResponse } Our copy machine: ${ copyAnArray(['XD', 'DX'], 3) }`);

/* ############################################################ */
/* Task E9: Combine Arrays with the Spread Operator */
/* ############################################################ */

/* With spread operator we can also combine arrays or insert all the elements of one array into another, at any index.
* With traditional syntaxes we can concatenate arrays, but only at the end of one, and the start of another. Spread
* operator makes these operations extremely simple: */

let traditionalArray = ["Mike", "George", "David", "Custom_1"];
let insertIntoNewArray = ["Thomas", "Dave", ...traditionalArray, "Karen"];

console.log(`${ outputResponse } Our Inserted Array: ${ insertIntoNewArray }`);

/* ############################################################ */
/* Task E10: Check For The Presence of an Element With indexOf() */
/* ############################################################ */

/* Arrays can be changed, mutated at any time, there's no guarantee about where a particular piece of data will be
* on a given array, or if that element even still exists. We can do it with indexOf(), it takes an element as a parameter,
* and when called, it returns the position or index of that element, or -1 if the element does not exist on the array. */

let fruitList = ['Apple', 'Orange', 'Peach', 'Pear', 'Avocado'];

console.log(`${ outputResponse } indexOf Orange and Tomato: ${ fruitList.indexOf('Orange') } and tomato: ${ fruitList.indexOf('Tomato') }`);

/* Now let's check if the element exist in the array via function: */

let checkUsers = ['Madis', 'Evelyn'];

let checkIfElementExist = (arr, el) => {
    return arr.indexOf(el) >= 0 ? true : false;
}

console.log(`${ outputResponse } Does "Dehad" exists in Users array? ${ checkIfElementExist(checkUsers, "Dehad") }`);

/* ############################################################ */
/* Task E11: Iterate Through All an Array's Items Using for Loops */
/* ############################################################ */
