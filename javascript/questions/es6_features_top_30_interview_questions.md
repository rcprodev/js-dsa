# ES6 Features and Top 30 JavaScript Interview Questions

> ES6 is also known as **ECMAScript 2015**. It introduced major JavaScript features that are still heavily used in modern frontend, backend, and full-stack development.

## Quick Links

- [Official ECMAScript 2015 Specification](https://262.ecma-international.org/6.0/)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Modules: `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN Modules: `export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

---

## ES6 Feature Cheat Sheet

| Feature | What it does | Small example | Reference |
|---|---|---|---|
| `let` | Declares block-scoped variables. | `let age = 25;` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) |
| `const` | Declares block-scoped variables that cannot be reassigned. | `const PI = 3.14;` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) |
| Arrow Functions | Shorter function syntax and lexical `this`. | `const add = (a, b) => a + b;` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) |
| Template Literals | String interpolation and multiline strings. | `` `Hello ${name}` `` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) |
| Destructuring | Extracts values from arrays or objects. | `const { name } = user;` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring) |
| Default Parameters | Sets default values for function parameters. | `function greet(name = 'User') {}` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) |
| Rest Parameters | Collects multiple arguments into an array. | `function sum(...nums) {}` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) |
| Spread Syntax | Expands arrays, objects, or iterables. | `const copy = [...arr];` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) |
| Classes | Cleaner syntax for prototype-based objects. | `class User { constructor(name) {} }` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) |
| Modules | Splits code using `import` and `export`. | `import x from './x.js';` | [MDN Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) |
| Promises | Handles asynchronous operations. | `fetch(url).then(...)` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) |
| Enhanced Object Literals | Shorter object property and method syntax. | `{ name, greet() {} }` | [MDN Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) |
| Computed Property Names | Dynamic object property keys. | `{ [key]: value }` | [MDN Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) |
| `for...of` | Iterates over iterable values. | `for (const item of arr) {}` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) |
| Map | Key-value collection where keys can be any type. | `new Map()` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) |
| Set | Collection of unique values. | `new Set([1, 2, 2])` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) |
| Symbol | Creates unique identifiers. | `const id = Symbol('id');` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) |
| Iterators | Defines custom iteration behavior. | `obj[Symbol.iterator]()` | [MDN Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) |
| Generators | Functions that can pause and resume execution. | `function* gen() { yield 1; }` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) |

---

# Top 30 ES6 Interview Questions and Answers

## 1. What is ES6?

**Answer:** ES6, also called ECMAScript 2015, is a major JavaScript version that introduced features like `let`, `const`, arrow functions, classes, template literals, destructuring, modules, promises, `Map`, `Set`, generators, and more.

**Reference:** [Official ES2015 Specification](https://262.ecma-international.org/6.0/)

---

## 2. What is the difference between `var`, `let`, and `const`?

**Answer:**

| Keyword | Scope | Reassignment | Redeclaration |
|---|---|---|---|
| `var` | Function-scoped | Yes | Yes |
| `let` | Block-scoped | Yes | No in same scope |
| `const` | Block-scoped | No | No in same scope |

```js
var a = 1;
let b = 2;
const c = 3;
```

**Reference:** [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

---

## 3. Is `const` fully immutable?

**Answer:** No. `const` prevents reassignment, but objects and arrays declared with `const` can still be mutated.

```js
const user = { name: 'Amit' };
user.name = 'Rahul'; // Allowed

// user = {}; // Not allowed
```

**Reference:** [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

---

## 4. What is block scope in ES6?

**Answer:** Block scope means a variable is available only inside the nearest `{}` block where it is declared.

```js
{
  let x = 10;
}

// console.log(x); // ReferenceError
```

**Reference:** [MDN Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

---

## 5. What is the Temporal Dead Zone?

**Answer:** The Temporal Dead Zone, or TDZ, is the period between entering a scope and the actual declaration of a `let` or `const` variable. Accessing the variable before declaration causes a `ReferenceError`.

```js
console.log(name); // ReferenceError
let name = 'John';
```

**Reference:** [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

---

## 6. What are arrow functions?

**Answer:** Arrow functions provide shorter syntax for writing functions.

```js
const add = (a, b) => a + b;
```

They do not have their own `this`, `arguments`, `super`, or `new.target` binding.

**Reference:** [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

## 7. How is `this` different in arrow functions?

**Answer:** In normal functions, `this` depends on how the function is called. In arrow functions, `this` is lexically inherited from the surrounding scope.

```js
const user = {
  name: 'Alex',
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};
```

**Reference:** [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

## 8. When should you not use arrow functions?

**Answer:** Avoid arrow functions when you need dynamic `this`, such as object methods, constructors, or event handlers where `this` should point to the element.

```js
const user = {
  name: 'Ravi',
  greet: () => console.log(this.name) // Not ideal
};
```

**Reference:** [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

## 9. What are template literals?

**Answer:** Template literals are strings written with backticks. They support interpolation and multiline strings.

```js
const name = 'Sara';
console.log(`Hello, ${name}`);
```

**Reference:** [MDN Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

---

## 10. What is destructuring in ES6?

**Answer:** Destructuring extracts values from arrays or objects into variables.

```js
const user = { name: 'John', age: 25 };
const { name, age } = user;
```

**Reference:** [MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

---

## 11. Explain array destructuring.

**Answer:** Array destructuring extracts values based on position.

```js
const numbers = [10, 20, 30];
const [first, second] = numbers;

console.log(first); // 10
console.log(second); // 20
```

**Reference:** [MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

---

## 12. Explain object destructuring.

**Answer:** Object destructuring extracts values based on property names.

```js
const product = { title: 'Laptop', price: 50000 };
const { title, price } = product;
```

**Reference:** [MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

---

## 13. What are default parameters?

**Answer:** Default parameters allow function parameters to have default values when no argument or `undefined` is passed.

```js
function greet(name = 'Guest') {
  return `Hello ${name}`;
}
```

**Reference:** [MDN Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

---

## 14. What is the rest parameter?

**Answer:** The rest parameter collects remaining arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

**Reference:** [MDN Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

---

## 15. What is spread syntax?

**Answer:** Spread syntax expands arrays, objects, or iterable values.

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

const user = { name: 'Ankit' };
const newUser = { ...user, age: 24 };
```

**Reference:** [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

## 16. Difference between rest and spread syntax?

**Answer:** They use the same `...` syntax but work differently.

| Rest | Spread |
|---|---|
| Collects values | Expands values |
| Used in function parameters and destructuring | Used in function calls, arrays, and objects |

```js
function test(...args) {} // Rest
const nums = [1, 2, 3];
console.log(...nums); // Spread
```

**Reference:** [MDN Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

## 17. What are enhanced object literals?

**Answer:** ES6 allows shorter syntax for object properties and methods.

```js
const name = 'Neha';
const user = {
  name,
  greet() {
    return `Hello ${name}`;
  }
};
```

**Reference:** [MDN Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

---

## 18. What are computed property names?

**Answer:** Computed property names allow dynamic object keys using square brackets.

```js
const key = 'email';
const user = {
  [key]: 'test@example.com'
};
```

**Reference:** [MDN Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

---

## 19. What are ES6 classes?

**Answer:** Classes provide cleaner syntax for creating objects and inheritance. JavaScript classes are built on prototypes.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}
```

**Reference:** [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

## 20. Are JavaScript classes real classes?

**Answer:** JavaScript classes are syntactic sugar over prototype-based inheritance. They make object-oriented code easier to read, but JavaScript still uses prototypes internally.

**Reference:** [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

## 21. What is inheritance in ES6 classes?

**Answer:** ES6 uses `extends` for inheritance and `super()` to call the parent constructor.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
```

**Reference:** [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

## 22. What are modules in ES6?

**Answer:** Modules allow JavaScript code to be split into separate files using `export` and `import`.

```js
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from './math.js';
```

**Reference:** [MDN `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), [MDN `export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

---

## 23. Difference between default export and named export?

**Answer:**

| Named Export | Default Export |
|---|---|
| Multiple per file | Usually one per file |
| Imported using exact exported name or alias | Can be imported with any name |

```js
// Named export
export const name = 'App';
import { name } from './file.js';

// Default export
export default function greet() {}
import greetUser from './file.js';
```

**Reference:** [MDN `export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), [MDN `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

---

## 24. What are Promises in ES6?

**Answer:** A Promise represents the eventual success or failure of an asynchronous operation.

```js
const promise = new Promise((resolve, reject) => {
  resolve('Done');
});

promise.then(result => console.log(result));
```

**Reference:** [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

## 25. What are the states of a Promise?

**Answer:** A Promise has three main states:

1. `pending`
2. `fulfilled`
3. `rejected`

```js
fetch('/api')
  .then(response => response.json())
  .catch(error => console.log(error));
```

**Reference:** [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

## 26. What is `Promise.all()`?

**Answer:** `Promise.all()` runs multiple promises in parallel and resolves when all promises resolve. It rejects if any one promise rejects.

```js
Promise.all([promise1, promise2])
  .then(results => console.log(results))
  .catch(error => console.log(error));
```

**Reference:** [MDN Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

---

## 27. What is `for...of` loop?

**Answer:** `for...of` loops over iterable values such as arrays, strings, maps, sets, and generators.

```js
const names = ['A', 'B', 'C'];

for (const name of names) {
  console.log(name);
}
```

**Reference:** [MDN `for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

---

## 28. Difference between `for...in` and `for...of`?

**Answer:**

| `for...in` | `for...of` |
|---|---|
| Iterates over keys/property names | Iterates over values |
| Used mostly for objects | Used for iterable values |

```js
const arr = ['a', 'b'];

for (const index in arr) console.log(index); // 0, 1
for (const value of arr) console.log(value); // a, b
```

**Reference:** [MDN `for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in), [MDN `for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

---

## 29. What is the difference between Map and Object?

**Answer:**

| Map | Object |
|---|---|
| Keys can be any type | Keys are strings or symbols |
| Has useful methods like `.set()`, `.get()`, `.has()` | Mostly plain key-value structure |
| Easy to check size using `.size` | Need manual counting |

```js
const map = new Map();
map.set({ id: 1 }, 'User');
```

**Reference:** [MDN Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

---

## 30. What is the difference between Set and Array?

**Answer:**

| Set | Array |
|---|---|
| Stores unique values | Can store duplicate values |
| Has `.add()`, `.has()`, `.delete()` | Has index-based methods |
| Good for removing duplicates | Good for ordered lists |

```js
const unique = new Set([1, 2, 2, 3]);
console.log([...unique]); // [1, 2, 3]
```

**Reference:** [MDN Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

---

# Bonus: Common Practical Questions

## How do you remove duplicates from an array in ES6?

```js
const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4]
```

## How do you clone an array in ES6?

```js
const arr = [1, 2, 3];
const copy = [...arr];
```

## How do you merge objects in ES6?

```js
const user = { name: 'Amit' };
const details = { age: 25 };

const result = { ...user, ...details };
```

## How do you swap variables using destructuring?

```js
let a = 10;
let b = 20;

[a, b] = [b, a];
```

---

# Fast Revision Summary

- Use `let` when the value changes.
- Use `const` by default when reassignment is not needed.
- Use arrow functions for short callbacks, but avoid them when dynamic `this` is required.
- Use template literals for clean strings.
- Use destructuring to extract values from arrays and objects.
- Use spread to copy or merge arrays/objects.
- Use rest to collect function arguments.
- Use classes for cleaner object-oriented syntax.
- Use modules to organize code.
- Use promises to handle asynchronous operations.
- Use `Map` when keys can be any type.
- Use `Set` when you need unique values.

---

# Recommended Study Order

1. `let`, `const`, and scope
2. Arrow functions and `this`
3. Template literals
4. Destructuring
5. Rest and spread
6. Classes and inheritance
7. Modules
8. Promises
9. Map and Set
10. Generators and iterators

---

# References

- [ECMAScript 2015 Specification](https://262.ecma-international.org/6.0/)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Modules: `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
