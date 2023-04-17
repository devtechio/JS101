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


