Since you're preparing for **React + JavaScript interviews**, mastering these JavaScript patterns is much more valuable than memorizing random algorithms. Interviewers (especially at service-based companies and product companies) often ask you to implement these **without using built-in libraries**.

## 1. Currying ⭐⭐⭐⭐

**Questions**

- Implement a curry function.
- Infinite currying (`sum(1)(2)(3)()`).
- Curry with placeholders.
- Convert normal function to curried function.
- Uncurry a function.

---

## 2. Debouncing ⭐⭐⭐⭐⭐

**Questions**

- Implement debounce.
- Debounce with cancel().
- Debounce with flush().
- React search using debounce.
- Leading debounce.
- Trailing debounce.
- Debounce input validation.

---

## 3. Throttling ⭐⭐⭐⭐⭐

**Questions**

- Implement throttle.
- Leading throttle.
- Trailing throttle.
- Scroll event optimization.
- Resize event optimization.
- Button click throttling.

---

## 4. Memoization ⭐⭐⭐⭐⭐

**Questions**

- Implement memoize().
- Memoize Fibonacci.
- Memoize recursive functions.
- Memoize API calls.
- LRU cache memoization.

---

## 5. Once Function

```js
const initialize = once(fn);
```

Questions:

- Function should execute only once.
- Multiple arguments.
- Preserve `this`.

---

## 6. Compose

```js
compose(f, g, h);
```

Questions:

- Implement compose.
- Compose async functions.
- Compose promise functions.

---

## 7. Pipe

```js
pipe(f, g, h);
```

Same as compose but left-to-right.

---

## 8. Polyfills ⭐⭐⭐⭐⭐

Most asked in interviews.

Implement:

- map()
- filter()
- reduce()
- forEach()
- find()
- some()
- every()
- bind()
- call()
- apply()
- Promise.all()
- Promise.race()
- Promise.any()
- Promise.allSettled()

---

## 9. Deep Clone

Questions

- Clone nested object
- Handle arrays
- Handle circular reference
- Compare with structuredClone

---

## 10. Flatten Object

Input

```js
{
  a:1,
  b:{
    c:2
  }
}
```

Output

```js
{
  "a":1,
  "b.c":2
}
```

---

## 11. Flatten Array ⭐⭐⭐⭐

Input

```js
[1, [2, [3, [4]]]];
```

Output

```js
[1, 2, 3, 4];
```

Without `flat()`.

---

## 12. Group By

```js
groupBy(users, "age");
```

---

## 13. Chunk Array

Input

```js
chunk([1, 2, 3, 4, 5], 2);
```

Output

```js
[[1, 2], [3, 4], [5]];
```

---

## 14. Event Emitter ⭐⭐⭐⭐⭐

Implement

```js
on();

emit();

off();

once();
```

Very common in Node.js interviews.

---

## 15. Promise Queue

Execute promises

```js
2 at a time
```

Concurrency questions are common.

---

## 16. Retry Function

```js
retry(fetchData, 3);
```

Retry API three times.

---

## 17. Sleep Function

```js
await sleep(2000);
```

---

## 18. Timeout Wrapper

```js
timeout(fetchData, 5000);
```

Reject if API exceeds time limit.

---

## 19. Rate Limiter

Allow

```
5 requests/sec
```

---

## 20. Async Pool

Run

```
100 tasks
```

Maximum

```
3 simultaneously
```

---

## 21. Lazy Execution

Example

```js
LazyMan("Ram").sleep(2).eat("Pizza").sleep(1);
```

A popular advanced interview problem.

---

## 22. Chainable Calculator

```js
calc.add(5).multiply(2).subtract(3).result();
```

---

## 23. Infinite Sum ⭐⭐⭐⭐

```js
sum(1)(2)(3)(4)();
```

---

## 24. Function Overloading

```js
add(1, 2);

add(1)(2);
```

---

## 25. Object Path Getter

```js
get(obj, "a.b.c");
```

---

## 26. Object Path Setter

```js
set(obj, "a.b.c", 100);
```

---

## 27. Deep Equal

```js
deepEqual(obj1, obj2);
```

---

## 28. Shuffle Array

Implement Fisher–Yates shuffle.

---

## 29. Observer Pattern

Implement

- subscribe
- unsubscribe
- notify

---

## 30. Pub/Sub System

Similar to EventEmitter but with topics.

---

## 31. Singleton Pattern

```js
Database.getInstance();
```

---

## 32. Factory Pattern

Create different objects from one interface.

---

## 33. Iterator

Implement custom iterator using

```js
Symbol.iterator;
```

---

## 34. Generator Based Iterator

```js
function* generator() {}
```

---

## 35. Proxy

Track

- object changes
- validation
- logging

---

## 36. Closure Problems ⭐⭐⭐⭐⭐

Examples:

- Counter
- Private variables
- Module pattern
- Timer closure
- Loop closure (`var` vs `let`)
- Closure memory leak scenarios

---

## 37. `this` Problems ⭐⭐⭐⭐⭐

Practice:

- `call`
- `apply`
- `bind`
- Arrow vs normal function
- Constructor functions
- Method borrowing

---

## 38. Event Loop Problems ⭐⭐⭐⭐⭐

Predict output involving:

- `setTimeout`
- `Promise`
- `async/await`
- `queueMicrotask`
- `process.nextTick` (Node.js)

---

## 39. Promise Implementation

Implement a simplified Promise supporting:

- `then`
- `catch`
- `finally`

---

## 40. LRU Cache

Implement an LRU cache with `get()` and `put()`.

---

# Most Asked in React/Frontend Interviews (Priority)

1. Debounce
2. Throttle
3. Currying
4. Closure
5. Event Loop
6. Promise
7. Promise.all
8. Memoization
9. Polyfills (`map`, `filter`, `reduce`)
10. Event Emitter
11. Flatten Array
12. Deep Clone
13. Compose / Pipe
14. Infinite Currying
15. `call`, `apply`, `bind`
16. `this` keyword
17. Retry API
18. Async Queue
19. Object Path Getter/Setter
20. Deep Equal

Given your goal of landing a **React Frontend Developer** role (around **3.8 years of experience**), becoming comfortable with these patterns will cover the majority of JavaScript coding rounds you'll encounter in both service-based and many product-based interviews.
