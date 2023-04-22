# Lesson 2 

## Style Guide

* Set text editor to use space characters - not tabs - The editor should also insert spaces if you press the `Tab` key on the keyboard. 
* Set text editor to use two spaces for indentation when converting tab characters to spaces
* Limit lines to 80 characters, it's not a universal limit, but helps with readability.  
* Don't overdo comments, let the code do the talking instead.
* use camelCase for variable and function names.

```js
// declaring and initializing a variable 
let answerToUltimateQuestion = 42;

// defining a function
function fourScoreAndSevenYearsAgo(){
  // do something
}
```
* some special functions called constructor functions use PascalCase names
```js
function DomesticCat(name) {
  // do something 
}

let cat = new DomesticCat('Fluffy');
```
* Use uppercase names with underscores to represent const values: values that don't change 
```js
const INTEREST_RATE = 0.0525;
const FOUR = 'four';

// this naming style is called SCREAMING_SNAKE_CASE
```

* All names - variables and constants as well as functions - should use alphabetic (a-z A-Z) and numeric characters only. 
* First character must be alphabetic
* Constants may use underscores within the name, but should not use consecutive underscores, or should names begin or end with underscores. 
* JavaScript also allows $ in names, but this should only be used when working with a library that uses $ names, such as jQuery.
* When writing code with curly braces, such as functions and `if` statements, write the opening brace on the same line as the function name or conditional expression, use a single space before the opening brace: 
```js
// bad
function test(){
  // do something
}

function test()
{
  // do something 
}

if (foo === bar){
  // do something 
}

while (foo !== bar)
{
  // do something 
}




// good
function test() {
  // do something 
}

if (foo === bar) {
  // do something 
}

while (foo !== bar) {
  // do something 
}
```

* use spaces between operators and operands to make your code less cluttered and easier to read:
```js
// bad 
let sum=x+5;

// good
let sum = x + 5;
```

* use semicolons to terminate each logical line of code unless the line ends with { ,  } , or : .  


## Truthiness

A vital skill in all programming languages is being able to express `true` and `false`.  Typically we capture the notion of whether a value is true or false in a **boolean** data type.   A boolean is a data type whose only purpose is to convey whether it is true or false. 

JavaScript uses the `true` or `false` primitive values as booleans, which can be logged, assigned to variables, passed around and tested.

```js
console.log(true); // true
console.log(false); // false

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

makeLonger("abc", true); // 'abcabc'
makeLonger("xyz", false); // 'xyz'

function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
}

isDigit("5"); // true
isDigit("a"); // false

if (value === true) {
  console.log("It's true!");
} else if (value === false) {
  console.log("It's false!");
} else {
  console.log("It's not true or false!")
}
```

## Expressions and Conditionals 

IRL code doesn't use expressions like `value === true`,  instead an expression that should evaluate as either `true` or `false` is used:

```js
let num = 5; 

if (num < 10) { // same as `if ((num < 10) === true)`
  console.log("small number");
} else {
  console.log("large number");
}
```

A function doesn't usually return `true` or `false` explicitly either, it usually returns the result of a conditional expression.

```js
function isSmall(number) {
  return number < 10;
}

let num = 15;

if (isSmall(num)) {
  console.log('small number');
} else {
  console.log('large number');
}
```

The code above logs `large number` because isSmall(num) evaluates to `false` when num >= 10.

## Logical Operators 

Logical operators evaluate an expression that involves two subexpressions, then return a value that evaluates as `true` or `false`.

### The `&&` Operator 

This operator evaluates as true only when both sub-expressions evaluate as true:

```
> true && true              // true
> true && false             // false
> false && true             // false
> false && false            // false

> let num = 5
> (num < 10) && (num > 3)       // true
> (num < 10) && (num > 6)       // false
> (num > 10) && (num < 6)       // false
> (num > 10) && (num < 3)       // false
```

```
> let num = 5
> (num < 10) && (num > 0) && ((num % 2) === 1)
= true

> (num < 10) && (num < 0) && ((num % 2) === 1)
= false
```

## The `||` Operator 

The **or** operator evaluates as true when either of the two sub-expressions evaluates as true.

```
> true || true              // true
> true || false             // true
> false || true             // true
> false || false            // false

> let num = 5
> num < 10 || num > 3       // true
> num < 10 || num > 6       // true
> num > 10 || num < 6       // true
> num > 10 || num < 3       // false
```

## Short-Circuit Operators 

Both `&&` and `||` exhibit a behavior called **short-circuiting** that means JavaScript stops evaluating sub-expressions once it can determine the final value.  In the case of `&&`, JavaScript short-circuits when it realizes that the entire expression can't be true; when it encounters a false sub-expression.  With `||` , it short-circuits when it realizes that the expression can't be false; when one sub-expression is true. 

`&&` short-circuits when it encounters the first sub-expression (from left-to-right) that evaluates as false: 

```node
> false && undefined.length
= false
```

By itself `undefined.length` would raise a `TypeError` however since the left side of the `&&` guarantees that the entire expression can't be true, <mark class="hltr-red">the right side never executes.</mark>

This would:
```js
> true && undefined.length
TypeError: Cannot read property 'length' of undefined
```

The `||` operator short-circuits when it encounters the first `true` sub-expression (left-to-right)

```node
> true || undefined.length
= true
```

Relying on short-circuit behavior can be dangerous but it can be handy:

```js
if (name && (name.length > 0)) {
  console.log(`Hi, ${name}.`);
} else {
  console.log("Hello, whoever you are.");
}
```

## What is truthiness? 

Truthiness differs from boolean values in that JavaScript evaluates almost all values as true except : 
* false
* undefined
* null
* 0
* ''
* NaN

So far the phrases _evaluated as true_ and _evaluated as false_ have been used but you can also use **truthy** and **falsy** to describe the nature of the values.   

Truthiness means that we can use any condition or logical operator: 

```js
let num = 5;
if (num) {
  console.log("valid number");
} else {
  console.log("erro!");
}
```

JavaScript considers any non-zero / non-NaN number to be truthy, however num it doesn't mean` num === true`

The use of truthy an falsy values can sometimes lead to surprising code:

```js
let name; 
if (name = getNameFromUser()) {
  console.log(`Hi ${name}`);
} else {
  console.log("you must enter your name!");
}
```

The safer way to write the code is : 

```js
let name = getNameFromUser();
if (name) {
  console.log(`Hi ${name}`);
} else {
  console.log("you must enter your name!");
}
```

Make it clear that you're testing for an empty name:

```js
let name = getNameFromUser();
if (name === '') {
  console.log("you must enrer your name!")
} else {
  console.log(`Hi ${name}`);
}
```

It can be made even better by testing for an empty name: 

```js
let name = getNameFromUser();
if (name === "") {
  console.log("you must enter your name!");
} else {
  console.log(`Hi ${name}`);
}
```

## Walk-through: Calculator 

 Write some code to welcome user to program:
 ```js
console.log('Welcome to Calculator!');
 ```
Ask user for first number : 
```js
console.log("What's the first number?");
```

As is the program will run in node but then immediately stop running without waiting for the user to give input / feedback.  This is where you use `readline-sync` and the `question` function to receive the user response:
```js 
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's teh first number?");
```

The first line will use the built-in Node.js function `require` to look for the `readline-sync` library in the `node_modules` folder.  This will return the library in the form of an object that we can assign to the `readline` variable, whose name does not have to be `readline`, you can choose any name but it would make sense to choose a name that helps you remember what the variable contains.  

By using the `question` method from  the `readline-sync` library, you can get the input from the user.
```js
const readline = require('readline-sync');

console.log('Welcome to Calculator');

console.log("What's the first number?");
readline.question();
```

The last line, the .question() method causes the program to wait for keyboard input, it returns the input as a string when the user pressed the Return key.  Now you assign that return value of the `readline.question` to a variable:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log(question1)
```

second number implementation:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log(`${number1} ${number2}`);
```

At this point we want to do something with these numbers, the mathematical operations. 

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');

let operation = readline.question()
```

```js
	const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Subtract 4) Multiply 5) Divide');
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = number1 + number2;
}

console.log(`The result is: ${output}`);
```

readline.question() always returns a string

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
}

console.log(`The result is: ${output}`);
```

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
  output = Number(number1) - Number(number2);
}

console.log(`The result is: ${output}`);
```

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // 3 represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === '4') { // 4 represents division
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
```

## Pseudocode

When you write JavaScript, you are writing for the JS engine / interpreter to process.  If there's a syntax error, the engine will complain saying it doesn't know how to process the broken syntax.  Since code needs to be error-free, there's a rigid format when programming.  

Pseudocode on the other hand is for humans, so the format is relaxed:

```
Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.
```

We don't start writing code from the beginning, but instead **load the problem into our brain** first. Only then can you start to dissect, understand, and come up with an execution path to solve a problem. 

Two layers to solving any problem: 
* logical problem domain layer
* syntactical programming language layer

Using pseudocode allows us to focus on the logical problem domain layer without dragging us down to the programming language layer.

The issue with pseudocode is that the logic can't be verified, for that we need to translate the pseudocode to progamming code.

## Formal Pseudocode

![![JS101/#^Table]]
```
START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END
```

js:
```js
function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}
```

For more complicated, sophisticated problems we need to take a more piecemeal approach when writing pseudocode, then translate it to JavaScript.

Write pseudocode for: 
1.   A function that returns the sum of two numbers
```
SET num1 = first number
SET num2 = second number
SET sum = num1 + num2
PRINT sum
```

2.   A function that takes an array of strings, and returns a string that is all those strings concatenated together

```
SET emptyStr to an empty string 
SET iterator to 1

WHILE iterator <= length of array of strings
  += current string to emptyStr
  iterator = iterator + 1

PRINT emptyStr
```

You don't need to use pseudocode for every bit of code written, especially once we're down to the function level, however, it's a good idea to always use it here in this course and the associated Small Problem exercises.  It helps with overcoming problems in the short term, and prepare for interview assessments later on. 

## Flowchart

By using a flowchart we map out the logical sequence of possible solutions in visual way.  

![[Pasted image 20230416165006.png]] 

Using a flowchart approach to finding the largest number in a collection : 

![[Pasted image 20230416165149.png]] 

 The decision component (the diamond) should only have two branches, if you have more you should use separate diamonds for each branch.  

Arrows show logical 'flow' to specify the iteration logic.   

Step-by-step logic the program needs to solve the problem = imperative or procedural way to solve.

### A Larger Problem

We need to ask the user to enter N collections of numbers that we want to find and display the largest number from each collection. 

```
while the user wants to keep going 
   - ask the user for a collection of numbers
   - extract the largest one from that collection and save it 
   - ask the user if they ant to input another collection 

return the saved list of numbers
```


```
while the user wants to keep going 
  - ask the user for a collection of numbers
  - iterate through the collection one at a time
   - save the first value as the the starting value
   - for each iteration, compare the saved value with the current value
   - if the saved value is greater than or equal to the current number move to the next value of the colletion
   - otherwise, if the current value is greater tahn the saved value reassign the saved value as the current value

 - after iterating through the collection, save the largest value into the list
 - ask the user if they want to input another collection

return the saved list of numbers
```

When pseudocode gets long, it's hard to trust the accuracy, you can only verify the logic by actual program code, so its prudent to extract a logical grouping into a sub-process and tackle the various pieces separately. 

```
START

SET largeNumbers = []
SET keepGoing = true

WHILE keepGoing === true
   GET 'enter a collection'
   SET collection 
   SET largest number = SUBPROCESS "extract the largest one from the collection"
   largestNumbers.push(largestNumber)
   GET 'enter another collection?'
   IF 'yes'
     keepGoing = true 
   ELSE
     keepGoing = false

PRINT largeNumbers

END
```

We have a SUBPROCESS keyword showing that something else will extract the largest number from the collection, extracting logic into sub-processes lets us focus on a well-defined, narrowly-scoped set of pseudocode.

![[Pasted image 20230416213053.png]]

As you begin to use pseudocode and flowcharts you start to think about how detailed the chart and words should e, and what you can extract to sub-processes.  

A programmer must always think about this when designing the solution to a problem, you wont get it right the first time. 

At a high level, use declarative syntax.  
  (calculator example)

```
- GET the first number
  - make sure it's valid, otherwise ask for another
- GET the second nummber
  - make sure it's valid, otherwise ask for another
- GET the operator
  - Make sure it's valid, otherwise, ask again

- Perform the operation on the two numbers
- Display result
- Ask whether the user wants to do another calculation
```

Once you have the high-level steps, you can drill down a level into imperative pseudocode and outline specifics

This takes practice, and you're expected to lay out logic before coding; pseudocode is the most straightforward way to do that. 

### Flowcharting the Calculator 

![[Pasted image 20230416220655.png]] 

High level flowchart introducing three sub-processes: `numberValid`, `operatorValid`, and `findResult`; by not worrying about the low-level details of how the sub-processes will work, we can think at a higher level about our overall application logic.


## ESLint

Choosing a style guide
* Helps write clear, consistent code that is ready to read
* Helps make variable and function names consistent and predictable
* Help write code that coworkers, fellow students, and Launch School staff easily read and understand
* Helps detect and correct common JavaScript coding mistakes

Airbnb JavaScript Style Guide
https://github.com/airbnb/javascript

This style guide captures many of the standard conventions that most developers use.  ESLint configuration enforces many of the styles in the Airbnb guide.

ESLint is a static code analyzer for JavaScript that offers advice on style, format, coding practices, possible errors and other problems.  Using ESLint will help you adhere to the rules of your preferred style guide.  It's a modular framework that uses a pluggable architecture to insert enforcement rules.

Developers call ESLint : linter.  Linters inspect code for potential errors and 'code smells', adherence to the best practices determined by developers over the years. 

Linting is not foolproof, but it can serves as the first line of defense against some of the most common pitfalls in a language.   For example, the configuration we use doesn't let assignments as a conditionl expression in an `if` statement: 
```js
if (result = someFunction()) { // this is legal, but might be a mistake
  ...
}
```

ESLint is a Node package, so it's installed like any other package and it's recommended to install ESLint and all related packages locally as a development dependency
```shell
$ npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev
```

### Configuring ESLint 

For Launch School purposes we use the YAML configuration format since it's easier to read and type.

create a `.eslintrc.yml` file and place the file in your top-level projects directory or put it in each individual project directory; not both.

create test file
```bash
touch hello.js
```

hello.js :
```js
console.log(helloWorld)
```

run ESLint on the file:
```bash
$ npx eslint hello.js

/Users/applecore/Documents/launchSchool/JS101/projects/ESLint_test/hello.js
  1:13  error  'helloWorld' is not defined  no-undef
  1:24  error  Missing semicolon            semi

✖ 2 problems (2 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
  ```

* the first non-blank line shows the full path name of the file the ESLint checked
* The next two lines show the two errors that the ESLint found in the code, the first involves an undefined `helloWorld` variable on line 1, column 13.  The second shows a missing semi-colon on line 1, column 24. 
* The two error lines show the names of the rules that apply to those errors: `no-undef` and `semi` rules
* Last two lines report some simple stats about what ESLint found: 2 separate problems, both of which it classified as errors instead of warnings, it also suggests you can fix one of the problems by running `eslint --fix hello.js --` 


## Walk-Through: Refactoring Calculator 

```js 
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

// rest of program omitted
```


## Switch Statement 

Currently, the code in `calculator.js` uses `if/else`  statements to compare the user's choice of operators with valid possibilities: 
```js
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
```

Each comparison compares the variable operation to a different value which is the use-case for the `switch` statement:

```js
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
```

It is crucial to include `break` statements in each `case` unless a return is used, without a `break` JavaScript falls through and evaluates the rest of the `case` clauses until it reaches the end of the `switch` statement or it encounters a `break` or a `return` statement. 

## Validating User Input 

Flow-Chart for the refactoring of calculator.js
![[Pasted image 20230417014306.png]] 

All three user inputs use looping logic.  We can use a `while` loop to implement this logic.  The loop terminates when the input is valid.  Here's how it would look like or the first input number: 
```js
prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}
```

We haven't written the invalidNumber function yet, but the overall logic is that once we ask for the first number we start a loop that:
* checks whether the input is valid
* the loop ends if the input is valid
* tells the user that the input is invalid
* waits for the next input
* jumps back to the top of the loop

Let's write the invalidNumber function: 
```js
function invalidNumber(number) {
  return Number.isNaN(Number(number1));
}
```

The Number.isNaN() method takes any JS value and returns the boolean `true` if the value is `NaN` and `false` if not.

Calling `Number()` on a non-numeric string will evaluate to `NaN`.  `number` would be invalid if the conversion results to `NaN`.   Note: `Number()` ignores the leading whitespace in the `number` string so `Number(' 24')` returns 24.

Suppose you don't enter any input; the current program will run without prompting the user to re-enter an input.  The `readline.question` method returns an empty string when the user doesn't provide any input, and `Number()` will return `0` when given an empty string, or a string that is only whitespace, so the current version of the function `invalidNumber()` treats it as valid `0` and returns `false` .

```js
function invalidNumber(number) { return number.trimStart() === '' || Number.isNaN(Number(number)); }
```

The code above treats whitespace strings and empty strings as invalid input.  `String.prototype.trimStart` method gets a copy of the `number` string with the leading whitespace removed. 

We add this same logic to the second number prompt:
```js
prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}
```

Furthermore, we can also validate the operation requested:

```js
prompt('What operation would you like to perform? 1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}
```

## ESLint Calculator

Run `calculator.js` through ESLint to check for potential styling and other issues:
```bash
npx eslint calculator.js
```

ESLint will scan the program statically and outputs any issues.

## Debugging 

Debugging is at the core of what developers do.   Most of the day-to-day life of a programmer is spent stuck on some problem.  

The key to debugging is a logical mind and patient temperament. 

<mark class="hltr-red">You need to develop a systematic, patient temperament when faced with a problem.</mark>

You have to practice staying even-keeled. 

## Reading Error Messages

The wall of tex when running into an error is called a **stack trace**, which is crucial in determining where to start the debugging process.

```
```
```
TypeError: Cannot read property 'filter' of undefined at app.get (/Users/nf/Desktop/meadowlark/meadowlark.js:8:13)    
```

1. Search Engine
   Once error is identified study the error message and try to walk backward through the code to understand how the program flow arrived at the error condition.  Use  a search engine to look up the error message.  Make sure not to include terms that are specific to your computer or program when searching.  Don't copy / paste an entire stack trace.  It's a good idea to preface the search with the language you're working with to get language apropos  search results.

2. Stack Overflow
   Has answers to common problems, many of which rank high in search engines, but sometimes it's worth it to search SO directly. 

3. Documentation 
   MDN documentation for the core JavaScript language, not a library or framework specific documentation.  


## Steps to Debugging 

1. Reproduce the error
   Programmers need a deterministic way to reproduce the problem consistently, that allows the isolation of the root problem.  This step becomes more critical as you build more sophisticated apps with external dependencies and moving parts.  

2. Determine the Boundaries of the Error
   Once you can reproduce the error it's time to tweak the data that caused the error.   You try to modify the data or code to get an idea of the scope of the error and determine the boundaries of the problem.  This approach leads to a deeper understanding, and thus you can implement a better solution.  

3. Trace the code
   Once the boundaries of the problem are set you can trace the code: 
   ```js
   function car(newCar) {
     let make = getMake(newCar);
     let model = getModel(newCar);
     return [make, model];
   }
   
   function getMake(newCar) {
     return newCar.split(' ')[0];
   }
   
   function getModel(newCar) {
     return newCar.split(' ')[2];
   }
   
   let [ make, model ] = car('Ford Mustang');
   console.log(make === 'Ford') // => true
   console.log(model[0] === 'M') // => TypeError: Cannot read property '0' of undefined
   ```

4. Understand the Problem Well
   Once you narrow the source of the bug, it's time to analyze the code. 
```js
function getModel(newCar) {
  return newCar; // => 'Ford Mustang'
}
```

```js
function getModel(newCar) {
  return newCar.split(' '); // => ['Ford', 'Mustang']
}
```

```js
function getModel(newCar) {
  return newCar.split(' ')[2]; // => undefined 
}
```

```js
function getModel(newCar) {
  return newCar.split(' ')[1]; // => "Mustang"
}
```

5. Implement a Fix 
```js
try {
  return model[0] === "M";
} catch {
  return false;
}
```

6. Test the fix 
   After implementing a fix, make sure to verify that the code fixed the problem by using a similar set of tests from step 2.

### Techniques for Debugging 

1. Line by line 

   Patience is the best tool since most bugs come from overlooking a detail.  Being careful, patient and developing a habit of reading code line-by-line, character-by-character is the most useful programming skill.  You have to become detail oriented and train yourself to be patient and not gloss over details. 

2. Rubber Duck

   Rubber Ducking Debugging is very useful, the method centers around using an object, like a rubber duck, as a sounding board when faced with a hard problem.   The idea is that when you explain the complexity of the problem to an object, you force yourself to articulate the problem, detail by detail; which often leads to discovering the root of the problem.  The point is to focus your mind on walking through the code, line by line, and noticing a small detail that may reveal a deeper problem.

3. Walking Away

   Some have claimed a swim, jog or even shower helps, the idea is that it activates different part of your brain, when you walk away, your brain is still working on the problem in the background (after you've already correctly loaded the problem to your brain).  Our brains also get tired, so it's recommended to take breaks and come back with fresh eyes and refreshed brain. 

4. Inspecting with a Debugger
   Node.js comes with a debugger that lets you pause the program during execution and perform various actions from that point in program execution.  
```node
// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter += 1;
}
```

```bash
> node inspect debug.js
```

```text
< Debugger listening on ws://127.0.0.1:9229/5c08d9ea-1d25-4fa8-8ddb-3ab96ea3ac5b
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in debug.js:3
  1 // debug.js
  2
> 3 let counter = 1;
  4
  5 while (counter <= 5) {
debug>
```

5.  Advanced Debugging 
   Node debugger has a lot of helpful features and mechanisms to step into functions and more systematically step through the code.

## Errors

As a developer you want to do your best to avoid errors when the program runs.  

### Terminology

When an error occurs in JavaScript we say that it _throws_ an error.  It is also referred to _exceptions_ or _raising an exception_. 

### Reference Error

A `ReferenceError` occurs when you attempt to use a variable or function that doesn't exist. 

```
a; // Referencing a variable that doesn't exist results in a ReferenceError.
a() // The same is true of attempting to call a function that doesn't exist.
```

## Type Error 

A type error occurs in a variety of different ways.  

* accessing a property on a value that does not have any properties, such as `null` or `undefined`
* trying to call something that isn't a function can also raise a `TypeError`
* trying to reassign a `const` variable 
```node
> let a;    // a is declared but not assigned a value
> typeof a;
= 'undefined'

> a.name    // TypeError: Cannot read property 'name' of undefined 

> a = 1;
> a()       // TypeError: Property 'a' is not a function

> const b = 42;
> b = 3.14; // TypeError: Assignment to constant variable.
```

## Syntax Error

`SyntaxError` almost always occurs immediately after loading a JavaScript program, but before it starts to run.  JavaScript detects `SyntaxError` solely from the text of the program.

```js
function ( {} // SyntaxError: Unexpectd token (
```

There are several cases where JavaScript can throw a `SyntaxError` while a program is running.  
```js
JSON.pase('not really JSON'); // SyntaxError: Unexpected token I in JSON at position 0
```

## Preventing Errors

```js
function lowerInitial(word) {
  return word[0].toLowerCase();
}
```

```js
lowerInitial('Joe') // j
lowerInitial('Karen') //k
```

What if we pass a string?
```js
lowerInitial(''); // TypeError: Cannot read property 'toLowerCase' of undefined
```

Errors typically occur where assumptions are made in code, we assume that the word always has a non-zero length here.

### Guard Clause

One way to avoid that type of error is to use a _guard clause_, which is code that guarantees data meets certain preconditions before it gets used.  `lowerInitial`  can be tracked to see if `word` contains any characters before it's used:
```js
function lowerInitial(word) {
  if (word.length === 0) { // If word conttains an empty string 
    return '-'; // return a dash instead of proceeding
  }
  
  return word[0].toLowerCase() // word is guaranteed to have at least one character, so word[0] never evaluates as `undefined`. 
}
```

### When To Use Guard Clauses 

Best used when a function can't trust that its arguments are valid, invalid arguments can have incorrect types, structures, values or properties.  

### Detecting Edge Cases 

Most error prevention work stems from examining assumptions inherent in code.  Think about whether your program can violate your own assumptions.  If they do, they are _edge cases_ because they often involve values at the extreme end of the range of possible values.  In `lowerInitial` the shortest possible string `''` is an edge case.

Start by considering the inputs of the code, in a function these would be the arguments.  Each data type has its own set of values that can cause undesired behavior. 

For example if an argument is meant to be numeric, will the code work if the code is negative or zero?  What if you're expecting a whole number and instead get a floating point? 

In `lowerInitial` we sat that empty strings can be a problem if your function doesn't expect one.  It's a good idea to think about how particular combination of values can create unexpected conditions. 

### Planning Your Code

One way to plan is to write the common use cases of a new function, and check how the function handles them.  This is a good way to identify edge cases.

Assume we have a function that inserts a new element to an Array in proper alphabetical sorted position:

```js
let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));  // Logs "Australia, Brazil, Cuba, Senegal"
```

```js
alphaInsert([], 'Brazil');             // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');  // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');       // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');     // Duplicate entry
```

Focus on the 'happy path', the most basic use case(s).  Then revisit your complete list of use cases and verify that your implementation works well with each case.  If one fails address it and then check again.  

## Catching Errors

It is not possible to prevent all errors, some JavaScript functions can throw exceptions, but there's no practical way to predict and avoid those errors.  `JSON.parse`, for example, takes a single `String` argument that contains some data in JSON format and converts it to an object.  If you pass a String to `JSON.parse` that isn't valid JSON value, all `JSON.parse` can do is throw an exception. 

```js
let data = 'not valid JSON';

JSON.parse(data); // throws SyntaxError: Unexpected token I in JSON at position 0
```

a JSON string looks similar to JS literals, main difference being that we double quote the keys and the literal value appears inside a string:

```JSON
let object = { "name": "Ferdinand", "age": 13 };  // object literal
let json = '{ "name": "Ferdinand", "age": 13}';   // JSON string
```

Only way to prevent errors in `JSON.pase` is to parse the input string, meaning we need to build a method that can parse JSON Strings.  That's what the method `JSON.parse` does, so we don't reimplement it just to avoid errors, we try to **catch** it with `try / catch / finally` block:

```js
try {
  // Do something that might fail here and throw and exception
} catch (error) {
  // This code only runs if something in the try clause throw an exception
  // 'error' contains the exception objet
} finally {
  // This code always runs even if the above code throws an exception
}
```

The `finally` clause is optional, it can be omitted, similar to an `else`clause when you don't need one. 

```js
function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data); // Throws an exception if 'data' is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an exception
    // 'e' contains an Error object that we can inspect and use
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally{
    // This coderuns whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);        // Logs 'There was a SyntaxError parsing JSON data:
                        //       Unexpected token i in JSON at position 0'
                        // Logs "Finished parsing data"
                        // returns null
```

### When to Use Try / Catch

Only use `try / catch / finally` blocks when the following conditions are both true:

* A built-in JavaScript function or method can throw an exception and you need to handle or prevent that exception
* A simple guard clause is impossible or impractical to prevent the exception


### LS Article:  JavaScript Weekly: Graceful Error Handling 
##### by Severin Perez 

#### Why Errors Happen

Thinking about the origin of errors is a key part of planning good code.  If you know that something _could_ happen, and prepare for it, then your code will perform well regardless of whether that thing actually _does_ happen.

1. Source Code Errors:  The programmer has done something wrong, grammar, syntax, function being passed wrong argument
2. Edge Case Error:  When you write and test a function you do so with the expectation that the function will receive an input of a certain type from within a certain set of values, what happens when the input is of the right type but falls just outside the set of values you are expecting?  These are edge cases and can cause unexpected errors.   For example a function that receives a string as an argument but relies on the string having actual content, if the function receives an empty string `''`, which is a `falsy` value, then it can cause havoc w/control flow and will result in an error.
3. Uncontrolled Input Errors: Most programs deal in some fashion with input that originates outside the source code, in web dev, this is usually user input.  If a user is submitting a form, what happens if they don't fill out one of the fields? You're going to get an empty string value from that field, which is what we know can cause trouble.  You need to think ahead of time about what kinds of values might lead to errors.


#### Type Errors:

JavaScript raises errors in two situations: 
   1. an error occurs at compilation 
   2. an error occurs at runtime 

When a runtime error occurs, your program will run up to the point where an error-causing function is executed and then crash.

JavaScript defines 8 types of errors:
   1. `Error` 
   2. `TypeError`
   3. `ReferenceError`
   4. `SyntaxError`
   5. `RangeError`
   6. `InternalError`
   7. `EvalError`
   8. `URIError`


* TyperError: 
   - occurs at runtime
   - occurs when a value is not of expected type
   - typically trying to call a method on a value that doesn't recognize the supplied method

* ReferenceError:
   - occurs at runtime 
   - occurs when you attempt to access a variable or function that has not been declared yet

* SyntaxError:
   - occurs at compilation  / 'early error'
   - occurs when source code is syntactically invalid
   - usually the result of a missing bracket, paren or something similar

Example errors:
```js 
console..og("My favorite dinsosaur is " + theropod)
// ReferenceError: theropod is not defined

let sauropod = 'apatosaurus';
sauropod();
//TypeError: sauropod is not a function

if (sauropod === 'apatosaurus')
   console.log('We have the same favorite sauropod!');
   }
// SyntaxError
```

line 1 leads to `ReferenceError` because we attempt to access a variable called `theropod` which does not yet exist.  

line 5 results in a `TypeError` because we try invoke a variable as a function.  

line 8 we get a `SyntaxError` because of the. missing curly brace for the `if` block.


All errors share two common properties:
  1. `name` 
  2. `message`
They provide information about the type of error and what it means.

Different runtime environments have additional property implementations such as a `stack`, but more often than not you'll be dealing w/ `name` and `message` .

```js
let dinoError = new Error('Oh no! A dino error!');
dinoError.name = 'DinoError';

console.log('dinoError name: ', dinoError.name);
  // logs : dinoError name: DinoError

console.log('dinoError message: ', dinoError.message);
  // logs : dinoError messaeg: Oh no! A dino error!
```

### Graceful Error Handling:

You should aim to write code that prevents errors from being thrown in the first place, however, in cases where you cannot predict inputs and therefore need to guard against such errors, JavaScript provides a handy construct known as `try / catch / finally ` statement. 

This statement is a series of blocks that look for errors and capture them before they can crash the program.  The `try` block executes and if everything goes well then the program exits the block per normal.  If an error occurs in the `try` block then the error object is immediately passed to the `catch` block, where you can deal with the error gracefully without the whole program collapsing.  

```js
function cloneDinosaur(name) {
  try {
    let myDinosaur = {
      name: name,
      dangerMessage: name.toUpperCase() + ' IS COMING!!!',
    };

    return myDinosaur;
  } catch (e) {
     console.log(e.name + ': ' + e.message);

    return undefined;
  } finally {
     console.log("Dinosaur clone function complete.");
  }
}

let badUserInput = null;
let dino = cloneDinosaur(badUserInput);
   // Logs: TypeError: Cannot read property 'toUpperCase' of null
   // Logs: Dinosaur clone function complete
console.log(dino);
   // Logs: undefined

let goodUserInput = 'Rex';
let rex = cloneDinosaur(goodUserInput);
   // Logs: Dinosaur clone function complete
console.log(rex);
   // Logs: { name: 'Rex', dangerMessage: 'REX IS COMING!!!'} 
```

In the code above, we have a function called `cloneDinosaur` which accepts a `name` parameter, the function expects this parameter to be a value of `String` type.  Because we an not guarantee what kind of input the `cloneDinosaur` function might receive, we have composed a `try / catch / finally` statement inside, which will catch errors and exit gracefully rather than crashing the program.  When input is `null`, the function attempts to use the `String.prototype.toUpperCase` method on the `null` value, which throws a `TypeError`, which gets passed immediately to the `catch` block. Inside the `catch` block we log a helpful message by accessing the errors `name` and `message` properties then return `undefined` from the function.  

When the function is passed a valid input, everything works as expected and the function returns and object containing information about the dinosaur.  in _both_ cases, the `finally` block executes and logs a message.

#### Throwing Custom Errors

What if we need to recognize errors that are specific to the program rather than to JavaScript itself?   For this, we need custom errors.

```js 
function DinoError(message) { 
  this.name = "DinoError"; 
  this.message = message;
}
DinoError.prototype = new Error(); 


function cloneDinosaur(name, type) { 
  var validTypes = ["Apatosaurus", "Dilophosaurus", "Tyrannosaurus Rex", "Stegosaurus"]; 
  
  try { 
    if (validTypes.indexOf(type) === -1) { 
      throw new DinoError("We don't know how to clone the dinosaur type: " + type);
    } 
    
    var myDinosaur = { 
      name: name, 
      type: type, 
      dangerMessage: name.toUpperCase() + " IS COMING!!!", 
    }; return myDinosaur; } catch (e) { if (e instanceof DinoError) { console.log("You experienced a DinoError!"); } else { console.log("You experienced a standard error."); } console.log(e.name + ": " + e.message); return undefined; } finally { console.log("Dinosaur clone function complete."); }} var dino = cloneDinosaur("Dino", "Brachiosaurus"); // Logs: You experienced a DinoError! // Logs: DinoError: We don't know how to clone the dinosaur type: Brachiosaurus // Logs: Dinosaur clone function complete.console.log(dino); // Logs: undefined var spike = cloneDinosaur(null, "Stegosaurus"); // Logs: You experienced a standard error. // Logs: TypeError: Cannot read property 'toUpperCase' of null // Logs: Dinosaur clone function complete.console.log(spike); // Logs: undefined var rex = cloneDinosaur("Rex", "Tyrannosaurus Rex"); // Logs: Dinosaur clone function complete.console.log(rex); // Logs: { name: 'Rex', type: 'Tyrannosaurus Rex', dangerMessage: 'REX IS COMING!!!' }
    ```


## Precedence

The meaning of an expression in JavaScript is determined by **Operator Precedence**. 

```js
2 + 5          // Two operands 
!true          // Unary: One Operand
value ? 1 : 2  // Ternary: Three Operands
```

Each operand can be the result of evaluating some other operator and its operands:
```js
> 3 + 5 * 7
```

we have two operators + and * each of which takes two numbers as operands, however there are only 3 numbers

An operator that has higher precedence than another is said to **bind** more tightly to its operands, in the expression 3 + 5 * 7, the * operator binds more tightly to its operands , 5 & 7. 


### Evaluation Order

Precedence in JavaScript is only part of the story, the other parts are either left-to-right evaluation, right-to-left evaluation, short-circuiting and ternary expression.s 

```js
function value(n) {
  console.log(n);
  return n;
}

console.log(value(3) + value(5) * value(7));
```

```
3
5
7
38
```

In an arithmetic expression, JavaScript goes through an expression left-to-right and evaluates everything it can without calling any operators.  So it evaluates, value(3), value(5) and value(7) first, in that order.  JavaScript re-evaluates the result with the precedences rules only after it has those values.


Right-to-left evaluation occurs when you do multiple assignments or multiple ** operators: 

```js
> a = b = c = 3
> 5 ** 3 ** 2  // same as 5 ** (3 ** 2) = 5 ** 9
```

Ternary operator (?:) and the short-circuit operators && and || are common source of unexpected behavior. 7
```js
> 3 ? 1 / 0 : 1 + 2 // Infinity 
> 5 && 1 / 0        // Infinity 
> null || 1 / 0     // Infinity 
```

What happens if we modify things so that the 1 / 0 isn't needed
```js
> null ? 1 / 0 : 1 + 2 // 3
> null & 1 / 0         // null
> 5  ||  1 / 0         // 5
```

first one, 1/0 doesn't get executed because 1 +2 is the truthy value, the other two due to short circuiting. 

### Use parenthesis 
Don't rely on the precedence rules when mixing operators.  


## Assignment: Calculator Bonus Features
