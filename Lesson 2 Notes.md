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

 