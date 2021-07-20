/* ############################# */
/* ######## DEBUGGING ######### */
/* ############################# */

/* Debugging is the process of going though your code, finding any issues, and fixing them. */

/* Issues in code generally come in three forms: SYNTAX ERRORS (that prevent your program from running), RUNTIME ERRORS (where your code has unexpected behavior), or LOGICAL ERRORS (where your code doesn't do what you intended. */

/* In this part of course, you will learn how to use the JavaScript console to debug programs and prevent common issues before they happen. */

const outputResponse = `(Debugging Module) Output: `;

/* ############################################################ */
/* Task D1: Use JS Console to Check the Value of a Variable */
/* ############################################################ */

/* Every browser has Developer consoles, also known as DevTools, you can debug your JS there. */

/* The console.log method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is. */

/* Let's use some console.log! */

let d1_a = "XD";

/* OUTPUT CODE */
console.log(`Task D1, yes, we are using console logs, A value is: ${d1_a}`);

/* ############################################################ */
/* Task D2: Understanding the Differences between the freeCodeCamp and Browser Console */
/* ############################################################ */

/* Console in browser will display our console.log() statements the exact number of times it is called. */

/* In FCC, console will print console.log() statements a short time after the editor detects a change in the script, as well as during testing. This console is cleared before the tests are run and, to avoid spam, only prints the logs during the first test. Console.logs inside functions are printed to the FCC console whenever those functions are called. This can help debugging functions that are called during testing. */

/* ############################################################ */
/* Task D3: Use typeof to Check the Type of a Variable */
/* ############################################################ */

/* We are using typeof to check the data structure, or type, of a variable. This is extremely useful in debugging when working with multiple data types. If we are adding two numbers, but one is actually a string, resultrs can be unexcepted. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JSON (JavaScript Object Notation) object. */

let d3_seven = 7;
let d3_sevenString = "Seven";
let d3_array = [];
let d3_object = {};
let d3_calc = () => { };

/* OUTPUT CODE */
console.log(`Task D3, we're using typeof: ${typeof d3_seven}, ${typeof d3_seven}, ${typeof d3_sevenString}, ${typeof d3_array}, ${typeof d3_object}, ${typeof d3_calc}.`);

/* ############################################################ */
/* Task D4: Catch Misspelled Variable and Function Names */
/* ############################################################ */

/* In JS, variable and function names are case-sensitive. Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form or a reference error. */

/* ############################################################ */
/* Task D5: Catch Unclosed Parentheses, Brackets, Braces and Quotes */
/* ############################################################ */

/* Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items one of the pair types. Please also take care when nesting blocks into others, such as adding a callback function as na argument to a method. */

/* Best way to avoid these is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding. */

/* ############################################################ */
/* Task D6: Catch Mixed Usage of Single and Double Quotes */
/* ############################################################ */

/* JS allows the use of both single (') and double (") quotes to declare a string. Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error. */

/* ############################################################ */
/* Task D7: Catch Use of Assignment Operator Instead of Equality Operator */
/* ############################################################ */

/* Branching programs, i.e. ones that do different things if certain conditions are met, rely on if, else if, and else statements in JS. The condition sometimes takes the form of testing whether a result is equal to a value. */

/* It is very important to remember, that assignment operator (=) in JS assigns a value to a variable name, And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same)! */

/* ############################################################ */
/* Task D8: Catch Missing Open and Closing Parenthesis After a Function Call */
/* ############################################################ */

/* When a function or method doesn't take any arguments, you may forget to include the (empty) opening an closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the excepted value the function returns. */

/* Here: */

function letPresentIt() {
    return "Catch something!";
}

let d8_variable1 = letPresentIt;
let d8_variable2 = letPresentIt();

/* variable1 is the function letPresentIt, and variable2 is the string "Catch something!", so is the value returned by the function. */

//console.log(d8_variable1());
//console.log(typeof d8_variable2);

/* ############################################################ */
/* Task D9: Catch Arguments Passed in the Wrong Order When Calling a Function */
/* ############################################################ */

/* Continuing on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as function excepting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues. */

/* ############################################################ */
/* Task D10: Catch Off By One Errors When Using Indexing */
/* ############################################################ */

/* OBOE (Off By One Errors) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JS indexing starts at zero, not one, which means the last index is always less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined. */

/* When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part what's returned) or not. */

/*
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
    console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
    console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
    console.log(alphabet[k]);
} */

/* First one loops one too many time, second too few times, (missing first index, 0). The third example is correct! */

/* ############################################################ */
/* Task D11: Use Caution When Reinitializing Variables Inside a Loop */
/* ############################################################ */

/* Sometimes it is necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particulary dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop. */

/* Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable. */

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let d11_newArray = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        d11_newArray.push(row);
    }
    return d11_newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/* The code above was broken, the row is intended to be created every time the outer loop would check how many rows has to be there, it was declared at the very beginning, so basically row has to be initialized based on number of iterations, not the calculation itself. */

/* ############################################################ */
/* Task D12: Prevent Infinite Loops with a Valid Terminal Condition */
/* ############################################################ */

/* The final topic is the dreaded infinite Loop. Loops are great tools then you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants. */

/* It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the rerminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it. */