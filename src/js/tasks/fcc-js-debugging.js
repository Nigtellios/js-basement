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


