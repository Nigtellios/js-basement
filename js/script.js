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

console.log(task7 + inventory[2]);
console.log(task7 + "Our array has: " + howLong + " positions.");
console.log(task7 + "Item with index 2 is: " + howLongItem + " letters long.");
console.log(task7 + "Our whole array after push: " + inventory);
console.log(task7 + "Our whole array after pop: " + inventory);

/* End of Task 7 --------- */