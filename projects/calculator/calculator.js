// Ask user for first number
// Ask user for second number
// Ask user for operation to perform
// Perform the operation on two numbers
// Print result to the terminal 

const readline = require('readline-sync');

// welcome user to the app
console.log("Welcome to Calculator!");

// ask user for first number
console.log("What's the first number?");

let number1 = readline.question();


console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;

if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`)