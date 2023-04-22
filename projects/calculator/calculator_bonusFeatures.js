// Ask user for first number
// Ask user for second number
// Ask user for operation to perform
// Perform the operation on two numbers
// Print result to the terminal

const readline = require('readline-sync');

const MESSAGES = require('./calculator_bonusFeatures.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (1 + 1 === 2) {
  prompt(MESSAGES['welcome']);

  prompt(MESSAGES['firstNum']);

  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNum']);

    number1 = readline.question();
  }

  prompt(MESSAGES['secondNum']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNum']);

    number2 = readline.question();
  }
  prompt(MESSAGES['operation']);

  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['forceOperation']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt(MESSAGES['anotherTime']);

  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}

/*Asking the user for another calculation
Currently, our calculator asks the user
for two numbers and an operation and
then exits after displaying the result.
Wouldn't it be nice if we could ask the
user if they wanted to perform another
calculation and start a new calculation
when they respond with yes?*/

