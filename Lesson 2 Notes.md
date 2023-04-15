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
