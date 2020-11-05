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