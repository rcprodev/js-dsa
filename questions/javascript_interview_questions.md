# JavaScript Interview Questions

## 1. JavaScript Basics

1. What is JavaScript?

**JavaScript** is a programming language used mainly to make websites interactive and dynamic.

HTML gives structure, CSS gives design, and JavaScript adds behavior.

Example:

```js
document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});
```

Here, JavaScript responds when the user clicks a button.

JavaScript is used for:

- Form validation
- Button clicks
- API calls
- Dynamic UI updates
- Frontend frameworks like React, Angular, and Vue
- Backend development using Node.js

### Interview answer

JavaScript is a high-level, interpreted programming language mainly used to create interactive and dynamic web pages. It runs in the browser and allows developers to handle user actions, update content without reloading the page, validate forms, call APIs, and build modern web applications.

JavaScript can also be used on the server side with Node.js.

In simple words, **JavaScript is the language that adds logic and interactivity to websites and web applications.**

---

2. What are the main features of JavaScript?

Main features of JavaScript are:

### 1. Lightweight and interpreted

JavaScript does not need manual compilation. The browser or Node.js engine reads and runs it directly.

```js
console.log("Hello JavaScript");
```

### 2. Dynamic typing

We do not need to define the data type manually.

```js
let value = 10;
value = "Hello";
```

### 3. Object-based language

JavaScript supports objects, which are used to store data and behavior.

```js
const user = {
  name: "Rahul",
  age: 25,
};
```

### 4. First-class functions

Functions can be stored in variables, passed as arguments, and returned from other functions.

```js
const greet = function () {
  return "Hello";
};
```

### 5. Event-driven

JavaScript can respond to user actions like clicks, typing, scrolling, and form submission.

```js
button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

### 6. Asynchronous support

JavaScript can handle async tasks like API calls using callbacks, promises, and `async/await`.

```js
async function getData() {
  const response = await fetch("/api/users");
  const data = await response.json();
  console.log(data);
}
```

### 7. Platform independent

JavaScript can run in browsers, servers using Node.js, mobile apps, desktop apps, and more.

### Interview answer

JavaScript is a lightweight, interpreted, and dynamically typed programming language. Its main features include object-based programming, first-class functions, event-driven behavior, asynchronous programming using promises and async/await, and platform independence.

It is mainly used to create interactive web pages, but with Node.js it can also be used for backend development.

In simple words, **JavaScript is flexible, dynamic, event-driven, and widely used for both frontend and backend development.**

---

3. What are the different data types in JavaScript?

JavaScript has **two main categories of data types**:

## 1. Primitive data types

Primitive values store single/simple values.

### String

Used for text.

```js
let name = "Rahul";
```

### Number

Used for numbers, including integers and decimals.

```js
let age = 25;
let price = 99.99;
```

### Boolean

Used for `true` or `false`.

```js
let isLoggedIn = true;
```

### Undefined

A variable declared but not assigned a value.

```js
let city;
console.log(city); // undefined
```

### Null

Intentional empty value.

```js
let user = null;
```

### BigInt

Used for very large numbers.

```js
let bigNumber = 12345678901234567890n;
```

### Symbol

Used to create unique values.

```js
let id = Symbol("id");
```

## 2. Non-primitive data type

### Object

Used to store collections of data.

```js
let user = {
  name: "Rahul",
  age: 25,
};
```

Arrays and functions are also treated as objects in JavaScript.

```js
let numbers = [1, 2, 3];

function greet() {
  console.log("Hello");
}
```

## Interview answer

JavaScript data types are mainly divided into **primitive** and **non-primitive** types.

Primitive data types include `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`. These store simple values.

The non-primitive data type is `object`, which is used to store collections or complex data. Arrays and functions also come under objects.

In simple words, **primitive types store single values, while non-primitive types store collections or references to data.**

---

4. What is the difference between primitive and non-primitive data types in JavaScript?

Primitive and non-primitive data types differ mainly in **how they store values and how they are copied**.

## Primitive data types

Primitive data types store **single values** directly.

Examples:

```js
let name = "Rahul"; // string
let age = 25; // number
let isActive = true; // boolean
let city; // undefined
let user = null; // null
let bigNum = 123n; // bigint
let id = Symbol("id"); // symbol
```

Primitive types are copied by **value**.

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not affect `a`.

## Non-primitive data types

Non-primitive data types store **collections or complex values**.

Examples:

```js
let user = {
  name: "Rahul",
  age: 25,
};

let numbers = [1, 2, 3];

function greet() {
  console.log("Hello");
}
```

Objects, arrays, and functions are non-primitive.

Non-primitive types are copied by **reference**.

```js
let user1 = { name: "Rahul" };
let user2 = user1;

user2.name = "Amit";

console.log(user1.name); // Amit
console.log(user2.name); // Amit
```

Here, both `user1` and `user2` point to the same object in memory.

## Interview answer

Primitive data types in JavaScript store simple values and are copied by value. Examples are `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`.

Non-primitive data types store complex values and are copied by reference. Examples are `object`, `array`, and `function`.

The main difference is that **primitive values are copied independently, while non-primitive values share the same reference in memory**.

---

5. What is the difference between `null` and `undefined`?

`null` and `undefined` both represent empty values, but they are different.

`undefined` means a variable has been declared but has not been assigned a value.

```js
let name;

console.log(name); // undefined
```

`null` means we intentionally assign an empty or no-value state.

```js
let user = null;

console.log(user); // null
```

Example:

```js
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null
```

Main difference:

```js
typeof undefined; // "undefined"
typeof null; // "object"
```

The `typeof null` result is a known old JavaScript bug, but it still exists for compatibility.

### Interview answer

`undefined` means a variable has been declared but no value has been assigned to it. It is usually assigned by JavaScript automatically.

`null` means an empty value is intentionally assigned by the developer.

For example:

```js
let x;
let y = null;
```

Here, `x` is `undefined` because it has no assigned value, while `y` is `null` because we manually assigned it as empty.

In simple words, **undefined means value is missing, and null means value is intentionally empty.**

---

6. What is the difference between `==` and `===`?

`==` and `===` are used for comparison in JavaScript, but they work differently.

## `==` Loose equality

`==` compares values after doing **type conversion**.

```js
console.log(5 == "5"); // true
```

Here, JavaScript converts `"5"` into a number and then compares it.

Another example:

```js
console.log(false == 0); // true
console.log(null == undefined); // true
```

## `===` Strict equality

`===` compares both **value and data type**.

```js
console.log(5 === "5"); // false
```

Here, the value looks same, but the types are different:

```js
5; // number
("5"); // string
```

So the result is `false`.

Example:

```js
console.log(10 === 10); // true
console.log(10 === "10"); // false
```

## Interview answer

`==` is loose equality. It compares two values after type conversion.

`===` is strict equality. It compares both value and data type without converting the types.

For example:

```js
5 == "5"; // true
5 === "5"; // false
```

In real projects, we usually prefer `===` because it avoids unexpected type conversion bugs and gives more predictable results.

In simple words, **`==` checks only value after conversion, while `===` checks both value and type.**

---

7. What is type coercion in JavaScript?

**Type coercion** in JavaScript means converting one data type into another automatically or manually.

JavaScript is dynamically typed, so sometimes it converts values during operations.

Example:

```js
console.log("5" + 2);
// "52"
```

Here, number `2` is converted into a string because `+` with a string performs concatenation.

Another example:

```js
console.log("5" - 2);
// 3
```

Here, string `"5"` is converted into a number because `-` works with numbers.

There are two types of coercion:

### 1. Implicit coercion

JavaScript automatically converts the type.

```js
console.log(5 == "5");
// true
```

Here, `"5"` is converted into number `5`.

### 2. Explicit coercion

Developer manually converts the type.

```js
let value = "100";

console.log(Number(value)); // 100
console.log(String(100)); // "100"
console.log(Boolean(1)); // true
```

### Interview answer

Type coercion in JavaScript is the process of converting a value from one data type to another. It can happen automatically by JavaScript, which is called implicit coercion, or manually by the developer, which is called explicit coercion.

For example:

```js
5 == "5"; // true
```

Here, JavaScript converts the string `"5"` into a number before comparison.

But with strict equality:

```js
5 === "5"; // false
```

No type conversion happens.

In simple words, **type coercion means JavaScript changes the type of a value when needed, especially during comparisons or operations.**

---

8. What is type conversion in JavaScript?

**Type conversion** in JavaScript means converting a value from one data type to another.

Example:

```js
let age = "25";

console.log(typeof age); // "string"

let convertedAge = Number(age);

console.log(convertedAge); // 25
console.log(typeof convertedAge); // "number"
```

Common type conversion methods:

```js
String(100); // "100"
Number("100"); // 100
Boolean(1); // true
Boolean(0); // false
```

Example with number to string:

```js
let price = 500;

let result = String(price);

console.log(result); // "500"
console.log(typeof result); // "string"
```

Example with string to number:

```js
let value = "50";

let num = Number(value);

console.log(num + 10); // 60
```

Example with boolean conversion:

```js
Boolean(""); // false
Boolean("hello"); // true
Boolean(0); // false
Boolean(1); // true
```

### Interview answer

Type conversion in JavaScript is the process of converting a value from one data type to another. It can be done manually using methods like `String()`, `Number()`, and `Boolean()`.

For example:

```js
let value = "10";
let numberValue = Number(value);

console.log(numberValue); // 10
```

Type conversion is useful when we receive data in one format, like a string from an input field, but need to use it as another type, like a number for calculation.

In simple words, **type conversion means changing the data type of a value from one type to another.**

---

9. What is `NaN` in JavaScript?

`NaN` means **Not-a-Number**.

It appears when JavaScript tries to perform a numeric operation but the result is not a valid number.

Example:

```js
console.log(Number("hello")); // NaN
```

Here, `"hello"` cannot be converted into a number, so the result is `NaN`.

Another example:

```js
console.log("abc" * 5); // NaN
```

JavaScript expects a number for multiplication, but `"abc"` is not numeric.

One important point: `NaN` is actually of type `number`.

```js
console.log(typeof NaN); // "number"
```

Also, `NaN` is not equal to itself:

```js
console.log(NaN === NaN); // false
```

To check if a value is `NaN`, use:

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false
```

### Interview answer

`NaN` stands for **Not-a-Number**. It is a special value in JavaScript that represents an invalid number result.

It usually occurs when a mathematical operation fails or when a value cannot be converted into a valid number.

For example:

```js
Number("abc"); // NaN
```

Even though it means Not-a-Number, its type is `number`.

```js
typeof NaN; // "number"
```

In simple words, **NaN means JavaScript expected a number but could not produce a valid numeric result.**

---

10. What is the difference between `isNaN()` and `Number.isNaN()`?

`isNaN()` and `Number.isNaN()` both check for `NaN`, but they behave differently.

## `isNaN()`

`isNaN()` first converts the value into a number, then checks whether the result is `NaN`.

```js
isNaN("hello"); // true
```

Why?

```js
Number("hello"); // NaN
```

So `isNaN("hello")` returns `true`.

More examples:

```js
isNaN("123"); // false
isNaN("abc"); // true
isNaN(undefined); // true
isNaN(true); // false
```

This can sometimes be confusing because it does type conversion.

## `Number.isNaN()`

`Number.isNaN()` does **not** convert the value. It only returns `true` if the value is actually `NaN`.

```js
Number.isNaN("hello"); // false
Number.isNaN(NaN); // true
```

Examples:

```js
Number.isNaN("abc"); // false
Number.isNaN(undefined); // false
Number.isNaN(NaN); // true
Number.isNaN(10); // false
```

## Main difference

```js
isNaN("hello"); // true
Number.isNaN("hello"); // false
```

`isNaN("hello")` returns `true` because `"hello"` becomes `NaN` after conversion.

`Number.isNaN("hello")` returns `false` because `"hello"` itself is not the actual `NaN` value.

## Interview answer

`isNaN()` checks whether a value becomes `NaN` after type conversion, while `Number.isNaN()` checks whether the value is exactly `NaN` without converting it.

For example:

```js
isNaN("abc"); // true
Number.isNaN("abc"); // false
```

In real projects, `Number.isNaN()` is usually safer because it avoids unexpected results caused by automatic type conversion.

In simple words, **`isNaN()` does type conversion, but `Number.isNaN()` does a strict NaN check.**

---

11. What is the difference between `typeof` and `instanceof`?

`typeof` and `instanceof` are both used to check data types in JavaScript, but they work differently.

`typeof` checks the **type of a value**.

```js
typeof "Hello"; // "string"
typeof 10; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof {}; // "object"
typeof []; // "object"
typeof null; // "object"
typeof function () {}; // "function"
```

Problem: `typeof` is not perfect for arrays and `null`.

```js
typeof []; // "object"
typeof null; // "object"
```

`instanceof` checks whether an object was created from a **specific class or constructor**.

```js
const arr = [];

arr instanceof Array; // true
arr instanceof Object; // true
```

Example with class:

```js
class User {}

const user = new User();

user instanceof User; // true
user instanceof Object; // true
```

Main difference:

```js
typeof []              // "object"
[] instanceof Array    // true
```

So, for primitive values like string, number, and boolean, use `typeof`.

For objects, arrays, dates, classes, and custom constructors, use `instanceof`.

**Interview answer:**

`typeof` is used to check the basic type of a value, such as string, number, boolean, undefined, function, or object. It is mostly useful for primitive values.

`instanceof` is used to check whether an object belongs to a particular class or constructor function. It checks the prototype chain.

For example:

```js
typeof "hello"; // "string"

const arr = [];
arr instanceof Array; // true
```

So, in simple words, **`typeof` tells us the general data type, while `instanceof` tells us whether an object is an instance of a specific constructor or class.**

---

12. What is the difference between `var`, `let`, and `const`?

`var`, `let`, and `const` are used to declare variables in JavaScript, but they differ in **scope, redeclaration, reassignment, and hoisting**.

## 1. `var`

`var` is **function-scoped**.

```js
function test() {
  var name = "Rahul";
  console.log(name);
}

test();
```

`var` can be **redeclared** and **reassigned**.

```js
var age = 25;
var age = 30;

age = 35;

console.log(age); // 35
```

`var` is hoisted and initialized with `undefined`.

```js
console.log(x); // undefined
var x = 10;
```

## 2. `let`

`let` is **block-scoped**.

```js
if (true) {
  let city = "Delhi";
  console.log(city);
}

// console.log(city); // ReferenceError
```

`let` cannot be redeclared in the same scope, but it can be reassigned.

```js
let count = 1;
count = 2;

console.log(count); // 2
```

This is not allowed:

```js
let count = 1;
let count = 2; // SyntaxError
```

## 3. `const`

`const` is also **block-scoped**.

It cannot be redeclared or reassigned.

```js
const pi = 3.14;

// pi = 3.15; // TypeError
```

But if `const` holds an object or array, the internal values can still be changed.

```js
const user = {
  name: "Rahul",
};

user.name = "Amit";

console.log(user.name); // Amit
```

The variable reference cannot change, but the object’s properties can change.

```js
const user = { name: "Rahul" };

// user = { name: "Amit" }; // TypeError
```

## Interview answer

`var`, `let`, and `const` are used for variable declaration in JavaScript.

`var` is function-scoped, can be redeclared and reassigned, and is hoisted with `undefined`.

`let` is block-scoped, cannot be redeclared in the same scope, but can be reassigned.

`const` is also block-scoped, cannot be redeclared or reassigned, but if it stores an object or array, the internal properties or elements can still be modified.

In modern JavaScript, we usually avoid `var` and prefer `const` by default. Use `let` only when the value needs to change.

---

## 2. Variables, Scope, and Hoisting

13. What is hoisting in JavaScript?

**Hoisting** in JavaScript means variable and function declarations are moved to the top of their scope during the creation phase, before code execution.

But the important point is: **only declarations are hoisted, not initial values.**

### Example with `var`

```js
console.log(a); // undefined

var a = 10;
```

JavaScript treats it like this:

```js
var a;

console.log(a); // undefined

a = 10;
```

So `var` is hoisted and initialized with `undefined`.

### Example with `let` and `const`

```js
console.log(name); // ReferenceError

let name = "Rahul";
```

`let` and `const` are also hoisted, but they are not initialized. They stay in the **Temporal Dead Zone** until the declaration line is reached.

### Example with function declaration

```js
greet(); // Hello

function greet() {
  console.log("Hello");
}
```

Function declarations are fully hoisted, so we can call them before they are written in the code.

### Function expression

```js
sayHello(); // TypeError

var sayHello = function () {
  console.log("Hello");
};
```

Here, only the variable `sayHello` is hoisted, not the function value.

## Interview answer

Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the creation phase.

Variables declared with `var` are hoisted and initialized with `undefined`, so accessing them before declaration gives `undefined`.

Variables declared with `let` and `const` are also hoisted, but they are not initialized, so accessing them before declaration gives a `ReferenceError` because of the Temporal Dead Zone.

Function declarations are fully hoisted, so they can be called before they appear in the code.

In simple words, **hoisting means JavaScript knows about declarations before code execution, but how they behave depends on whether we use `var`, `let`, `const`, or function declarations.**

---

14. How does hoisting work with `var`, `let`, and `const`?

Hoisting works differently with `var`, `let`, and `const`.

## 1. Hoisting with `var`

`var` declarations are hoisted and initialized with `undefined`.

```js
console.log(a); // undefined

var a = 10;
```

JavaScript treats it like this:

```js
var a;

console.log(a); // undefined

a = 10;
```

So with `var`, you can access the variable before declaration, but the value will be `undefined`.

## 2. Hoisting with `let`

`let` is also hoisted, but it is **not initialized**.

```js
console.log(b); // ReferenceError

let b = 20;
```

The variable exists in memory, but you cannot access it before the declaration line. This period is called the **Temporal Dead Zone**.

## 3. Hoisting with `const`

`const` behaves like `let`. It is hoisted but not initialized.

```js
console.log(c); // ReferenceError

const c = 30;
```

Also, `const` must be assigned a value at the time of declaration.

```js
const x; // SyntaxError
```

Correct:

```js
const x = 100;
```

## Main difference

```js
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;

console.log(c); // ReferenceError
const c = 30;
```

## Interview answer

Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the creation phase.

With `var`, the variable is hoisted and initialized with `undefined`, so accessing it before declaration gives `undefined`.

With `let` and `const`, the variables are also hoisted, but they are not initialized. They stay in the Temporal Dead Zone until the declaration line is reached, so accessing them before declaration gives a `ReferenceError`.

In simple words, **`var` is hoisted with `undefined`, but `let` and `const` are hoisted without initialization.**

---

15. What is the temporal dead zone in JavaScript?

The **Temporal Dead Zone**, or **TDZ**, is the time between when a variable is created in memory and when it is actually initialized.

It mainly happens with `let` and `const`.

Example:

```js
console.log(name); // ReferenceError

let name = "Rahul";
```

Here, `name` exists in memory because JavaScript knows about it during the creation phase, but it cannot be used before the line where it is declared.

With `var`, this behaves differently:

```js
console.log(age); // undefined

var age = 25;
```

`var` is hoisted and initialized with `undefined`, but `let` and `const` are hoisted without initialization. That uninitialized period is called the **Temporal Dead Zone**.

### Interview answer

The Temporal Dead Zone in JavaScript is the period between entering a scope and the actual declaration line of a `let` or `const` variable. During this period, the variable is hoisted but not initialized, so accessing it throws a `ReferenceError`.

Example:

```js
console.log(x); // ReferenceError

let x = 10;
```

In simple words, **TDZ means we cannot access `let` and `const` variables before their declaration line, even though they are hoisted.**

16. What are the different types of scope in JavaScript?JavaScript has mainly **three types of scope**:

## 1. Global scope

A variable declared outside any function or block has global scope. It can be accessed from anywhere in the program.

```js
let appName = "My App";

function showAppName() {
  console.log(appName);
}

showAppName(); // My App
```

Here, `appName` is globally scoped.

## 2. Function scope

Variables declared inside a function can be accessed only inside that function.

```js
function greet() {
  let message = "Hello";
  console.log(message);
}

greet();

// console.log(message); // ReferenceError
```

Here, `message` exists only inside the `greet()` function.

`var` is function-scoped:

```js
function test() {
  var name = "Rahul";
}

console.log(name); // ReferenceError
```

## 3. Block scope

Variables declared with `let` and `const` inside a block `{}` can be accessed only inside that block.

```js
if (true) {
  let age = 25;
  const city = "Delhi";

  console.log(age); // 25
  console.log(city); // Delhi
}

// console.log(age);  // ReferenceError
// console.log(city); // ReferenceError
```

But `var` does not follow block scope:

```js
if (true) {
  var count = 10;
}

console.log(count); // 10
```

## Interview answer

Scope in JavaScript defines where a variable can be accessed in the code.

There are mainly three types of scope: **global scope, function scope, and block scope**.

Global scope means the variable is declared outside any function or block and can be accessed anywhere. Function scope means the variable is accessible only inside the function where it is declared. Block scope means the variable is accessible only inside a block `{}`, and this applies to variables declared with `let` and `const`.

In simple words, **scope decides the visibility and lifetime of variables in JavaScript.**

---

17. What is global scope in JavaScript?
18. What is function scope in JavaScript?
19. What is block scope in JavaScript?
20. What is lexical scope in JavaScript?
21. What is scope chaining in JavaScript?
22. What is variable shadowing in JavaScript?

## 3. Functions

23. What is the difference between a function declaration and a function expression?
24. What is an arrow function?
25. How is an arrow function different from a regular function?
26. What are first-class functions in JavaScript?
27. What are higher-order functions in JavaScript?
28. What is a callback function?
29. What is an immediately invoked function expression?
30. What are pure functions in JavaScript?
31. What are default parameters in JavaScript?
32. What are rest parameters in JavaScript?
33. What is the difference between parameters and arguments?
34. Explain `call()`, `apply()`, and `bind()`.
35. What is the difference between `call()` and `apply()`?
36. What is function currying in JavaScript?
    - Function currying is a technique in JavaScript where a function that takes multiple arguments is converted into a series of functions, each accepting one argument at a time.

## 4. `this` Keyword

37. How does the `this` keyword work in JavaScript?
38. What is the value of `this` in a regular function?
39. What is the value of `this` in an arrow function?
40. How does `this` behave inside an object method?
41. How does `this` behave inside an event handler?
42. How can you explicitly set the value of `this`?

## 5. Closures

43. What is a closure in JavaScript?
    - A closure is a feature in JavaScript where an inner function has access to variables from its outer function’s scope, even after the outer function has returned.

    - Closures are created whenever a function is defined inside another function and the inner function uses variables from the outer function.

    - They are useful for data privacy, maintaining state, and creating functions with preserved values.

44. Why are closures useful in JavaScript?
45. What are common use cases of closures?
46. How do closures help in data privacy?
47. What is the relationship between closures and lexical scope?

## 6. Arrays and Array Methods

48. What is the difference between `forEach()` and `map()`?
49. What is the difference between `map()`, `filter()`, and `reduce()`?
50. What is the difference between `find()` and `filter()`?
51. What is the difference between `slice()` and `splice()`?
52. What is the difference between `push()`, `pop()`, `shift()`, and `unshift()`?
53. What is the difference between `some()` and `every()`?
54. What is the difference between `indexOf()` and `includes()`?
55. What is the difference between `sort()` and `reverse()`?
56. What is array destructuring in JavaScript?
57. How do you remove duplicates from an array?
58. How do you flatten an array in JavaScript?
59. What is the difference between mutable and immutable array methods?

## 7. Objects

60. What is an object in JavaScript?
61. What is the difference between dot notation and bracket notation?
62. What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?
63. What is object destructuring in JavaScript?
64. What is the spread operator in JavaScript?
65. What is the difference between the spread operator and the rest operator?
66. What is optional chaining (`?.`)?
67. What is the nullish coalescing operator (`??`)?
68. What is the difference between `Object.freeze()` and `Object.seal()`?
69. What is the difference between shallow copy and deep copy?
70. How can you clone an object in JavaScript?

## 8. Loops and Iteration

71. What is the difference between `for...in` and `for...of` loops in JavaScript?
72. What is the difference between `for`, `while`, and `do...while` loops?
73. When should you use `forEach()` instead of a `for` loop?
74. Can you use `break` or `continue` inside `forEach()`?
75. What are iterables in JavaScript?
76. What are iterators in JavaScript?

## 9. Asynchronous JavaScript

77. What is asynchronous programming in JavaScript?
78. What is a promise in JavaScript?
79. How do promises work in JavaScript?
80. What are the different states of a promise?
81. What is promise chaining?
82. What is the difference between `then()`, `catch()`, and `finally()`?
83. How does `async/await` work under the hood?
84. What is the difference between promises and `async/await`?
85. What is the difference between `Promise.all()`, `Promise.any()`, `Promise.allSettled()`, and `Promise.race()`?
86. What happens if one promise fails inside `Promise.all()`?
87. What is the purpose of `setTimeout()` and `setInterval()`?
88. What is the difference between `setTimeout()` with `0` delay and immediate execution?

## 10. Event Loop and Task Queues

89. What is the event loop in JavaScript?
90. What are microtasks and macrotasks in the event loop?
91. What is the difference between the call stack and the callback queue?
92. What is the difference between the microtask queue and the macrotask queue?
93. Which has higher priority: microtasks or macrotasks?
94. How does JavaScript handle non-blocking operations?
95. What is the role of the Web APIs in asynchronous JavaScript?

## 11. DOM and Events

96. What is the DOM in JavaScript?
97. How do you select elements in the DOM?
98. What is event bubbling?
99. What is event capturing?
100.  What is event delegation?
101.  What is the difference between `event.target` and `event.currentTarget`?
102.  What is the purpose of `preventDefault()`?
103.  What is the purpose of `stopPropagation()`?
104.  What is the difference between `innerHTML`, `innerText`, and `textContent`?
105.  How do you create and remove DOM elements using JavaScript?

## 12. ES6+ Features

106. What are template literals in JavaScript?
107. What are modules in JavaScript?
108. What is the difference between named export and default export?
109. What are classes in JavaScript?
110. What is the difference between a class and a constructor function?
111. What is inheritance in JavaScript?
112. What is the `super` keyword in JavaScript?
113. What are getters and setters in JavaScript?
114. What are symbols in JavaScript?
115. What are generators in JavaScript?

## 13. Error Handling

116. What is error handling in JavaScript?

**Error handling** in JavaScript means managing errors so the program does not crash unexpectedly.

JavaScript uses `try...catch...finally` to handle runtime errors.

```js
try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error.message);
} finally {
  console.log("This will always run");
}
```

### How it works

`try` contains the code that may throw an error.

```js
try {
  JSON.parse("wrong json");
}
```

`catch` handles the error.

```js
catch (error) {
  console.log(error.message);
}
```

`finally` runs whether an error happens or not.

```js
finally {
  console.log("Cleanup work");
}
```

You can also throw your own error:

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}
```

### Interview answer

Error handling in JavaScript is the process of catching and managing errors during program execution. It helps prevent the application from crashing and allows us to show meaningful messages or perform fallback actions.

JavaScript mainly handles errors using `try...catch...finally`. Code that may fail is written inside the `try` block. If an error occurs, the `catch` block handles it. The `finally` block is optional and runs whether an error occurs or not.

We can also create errors manually using `throw new Error()`.

In simple words, **error handling means safely handling unexpected problems in code without breaking the whole application.**

117. What is the purpose of `try...catch`?
118. What is the purpose of the `finally` block?

The `finally` block is used to run code **whether an error happens or not**.

It is usually used for cleanup work, such as:

- Closing a connection
- Stopping a loader
- Clearing resources
- Running final logic after `try` and `catch`

Example:

```js
try {
  console.log("Trying to fetch data");
  throw new Error("API failed");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("This will always run");
}
```

Output:

```js
Trying to fetch data
Error: API failed
This will always run
```

Even if there is no error, `finally` still runs:

```js
try {
  console.log("Success");
} catch (error) {
  console.log("Error");
} finally {
  console.log("Always runs");
}
```

### Interview answer

The `finally` block in JavaScript is used to execute code after `try` and `catch`, regardless of whether an error occurred or not. It is mainly used for cleanup operations, like closing files, clearing timers, stopping loaders, or releasing resources.

In simple words, **`finally` is used when we want some code to run no matter what happens in the `try` or `catch` block.**

119. What is the difference between throwing a string and throwing an `Error` object?
120. How do you handle errors in promises?
121. How do you handle errors with `async/await`?
122. What is a custom error in JavaScript?

A **custom error** in JavaScript is an error type created by the developer to represent a specific problem in the application.

JavaScript already has built-in errors like:

```js
Error;
TypeError;
ReferenceError;
SyntaxError;
```

But sometimes we need our own error, like:

```js
ValidationError;
AuthenticationError;
PaymentError;
DatabaseError;
```

Example:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(age) {
  if (age < 18) {
    throw new ValidationError("User must be at least 18 years old");
  }

  return "User registered successfully";
}

try {
  console.log(registerUser(16));
} catch (error) {
  console.log(error.name); // ValidationError
  console.log(error.message); // User must be at least 18 years old
}
```

**Interview answer:**

A custom error in JavaScript is a user-defined error class created by extending the built-in `Error` class. It is used when we want to handle specific application-level errors in a cleaner and more meaningful way.

For example, instead of throwing a normal error for invalid user input, we can create a `ValidationError`.

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
```

Then we can throw it like this:

```js
throw new ValidationError("Invalid input");
```

The benefit of custom errors is that we can identify different error types and handle them separately.

In simple words, **a custom error is our own error type used to make error handling more clear and specific.**

## 14. Performance and Optimization

123. What is debouncing in JavaScript?
124. What is throttling in JavaScript?
125. What is the difference between debouncing and throttling?
126. What is memory leak in JavaScript?


    - A memory leak in JavaScript occurs when memory that is no longer needed is not released because some references are still active. Even though JavaScript has garbage collection, it cannot remove objects that are still referenced. Common causes include global variables, uncleared timers, unremoved event listeners, closures, and subscriptions. Over time, memory leaks can slow down the application or crash it.

127. What are common causes of memory leaks in JavaScript?
128. How can you improve JavaScript performance?
129. What is lazy loading?
130. What is code splitting?


    - Code splitting is a performance optimization technique in JavaScript where the application bundle is divided into smaller chunks. Instead of sending one large JavaScript file to the browser, we load only the required code initially and load the remaining code on demand.

    - This improves the initial page load time and makes the application faster, especially for large applications. Code splitting is commonly handled by bundlers like Webpack, Vite, Rollup, and frameworks like React, Next.js, and Angular.

    - In simple words, code splitting means loading JavaScript only when it is needed instead of loading everything upfront.

131. What is tree shaking?


    - Tree shaking is a JavaScript optimization technique used by bundlers like Webpack, Rollup, Vite, or esbuild to remove unused code from the final production bundle.

    - For example, if a file exports five functions but my application imports and uses only one of them, tree shaking helps remove the other unused functions from the final bundle. This makes the JavaScript file smaller and improves application loading performance.

    - Tree shaking works best with ES6 module syntax, because import and export are static and can be analyzed during build time.

## 15. Advanced JavaScript Concepts

132. What is prototypal inheritance?
133. What is the prototype chain?
134. What is the difference between `__proto__` and `prototype`?
135. What is the difference between synchronous and asynchronous code?
136. What is the difference between blocking and non-blocking code?
137. What is garbage collection in JavaScript?
138. What is the difference between pass by value and pass by reference?
139. What is strict mode in JavaScript?
140. What is the difference between `localStorage`, `sessionStorage`, and cookies?
141. What is the difference between deep equality and shallow equality?
142. What is memoization in JavaScript?
143. What is recursion in JavaScript?
144. What is the difference between composition and inheritance?
145. What is the difference between mutable and immutable data in JavaScript?
