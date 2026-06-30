# Recursion

- Recursion in javascript is a programming technique where a function calls itself to solve a problem.

- Instead of solving the whole problem at once, recursion breaks it down into smaller, similar sub-problems

### Key parts of recursion

Every recursive function must have:

1. Base case --> the condition where the function stops calling itself
2. Recursive case --> the part where the function calls itself again

Here are comprehensive notes for Recursion, expanding on the concepts in your repository and connecting them directly to the Stack data structure we discussed earlier.

---

## Anatomy of Recursion

Recursion in JavaScript (or any language) is a technique where a function calls itself to solve a smaller instance of the same problem.

Every recursive function fundamentally requires two parts to function correctly without crashing your program:

1. **Base Case:** The halting condition. This is the simplest, smallest instance of the problem that can be solved immediately without further recursion. Without this, you get an infinite loop (which leads to a _Stack Overflow_).
2. **Recursive Case:** The part where the function calls itself with a modified argument, moving it one step closer to the Base Case.

---

## How It Works Under the Hood: The Call Stack

Recursion is heavily dependent on the **Call Stack**. When a recursive function runs, it goes through two distinct phases:

1. **Winding Phase (Pushing):** Each time the function calls itself, execution pauses, and a new execution context (frame) is pushed onto the Call Stack. No calculations are finalized yet.
2. **Unwinding Phase (Popping):** Once the Base Case is reached, it returns a value. The stack then starts popping frames off the top, taking the returned value from the child call and using it to resolve the parent call, all the way back down to the original function.

---

## Classic Examples in JavaScript

### 1. Factorial (Linear Recursion)

The factorial of $n$ (written as $n!$) is the product of all positive integers less than or equal to $n$.

```javascript
function factorial(n) {
  // 1. Base Case
  if (n === 0 || n === 1) return 1;

  // 2. Recursive Case
  return n * factorial(n - 1);
}

// Execution Steps for factorial(3):
// factorial(3) returns 3 * factorial(2)  -- (Pauses)
// factorial(2) returns 2 * factorial(1)  -- (Pauses)
// factorial(1) returns 1                 -- (Base Case Reached!)
// (Unwinding) 2 * 1 = 2
// (Unwinding) 3 * 2 = 6
// Final Result: 6
```

### 2. Fibonacci Sequence (Branching Recursion)

Calculating the $n$-th number where each number is the sum of the two preceding ones.

```javascript
function fibonacci(n) {
  // Base Case
  if (n <= 1) return n;

  // Recursive Case (Multiple calls per frame)
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## Big O Complexity of Recursion

Analyzing recursion requires looking at how many times the function is called and how deep the stack gets.

| Problem               | Time Complexity | Space Complexity | Reason for Space Complexity                                                          |
| --------------------- | --------------- | ---------------- | ------------------------------------------------------------------------------------ |
| **Factorial**         | $O(n)$          | $O(n)$           | Maximum of $n$ frames on the Call Stack at once.                                     |
| **Fibonacci (Naive)** | $O(2^n)$        | $O(n)$           | Exponential time due to redundant branching tree calls, but stack depth is only $n$. |
| **Binary Search**     | $O(\log n)$     | $O(\log n)$      | Halves the search space each time, stack depth is $\log n$.                          |

> **Note on Space:** The biggest hidden cost of recursion is Space Complexity. An iterative `while` loop has $O(1)$ space, but a recursive function almost always requires at least $O(n)$ space for the Call Stack memory.

---

## Recursion vs. Iteration

| Feature         | Recursion                                                              | Iteration (Loops)                                               |
| --------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Readability** | Often cleaner, declarative, and easier to read for complex math/trees. | Can get messy with nested loops and state variables.            |
| **Memory**      | High overhead. Uses stack memory for every call.                       | Low overhead. Uses $O(1)$ constant space.                       |
| **Performance** | Generally slower due to function call overhead.                        | Generally faster.                                               |
| **Danger**      | Risk of Stack Overflow if the base case is faulty.                     | Risk of infinite loops, but won't immediately crash the engine. |

---

## Common Use Cases and Patterns

You should reach for recursion when dealing with data structures or problems that are naturally nested or recursive in nature.

- **Tree and Graph Traversal:** Moving through the DOM (Document Object Model) in the browser, or traversing binary trees (Depth-First Search).
- **Divide and Conquer Algorithms:** Sorting algorithms like **Merge Sort** and **Quick Sort** rely on splitting arrays recursively.
- **Backtracking:** Algorithms that explore all possible solutions and "back up" when they hit a dead end (e.g., solving a Sudoku puzzle, generating permutations of a string, or finding a path through a maze).
- **Nested Data:** Flattening deeply nested arrays or deeply cloning complex JSON objects.

---

## Advanced Concept: Tail Recursion

**Tail Recursion** occurs when the recursive call is the very _last_ operation performed in the function.

In a standard recursive `factorial(n)`, the last step is `n * factorial(n - 1)`. The multiplication happens _after_ the recursion returns, forcing the engine to keep the parent frame alive in memory.

In a tail-recursive function, you pass the accumulated result as an argument:

```javascript
function tailFactorial(n, accumulator = 1) {
  if (n === 0) return accumulator;

  // The recursive call is the absolute final action.
  // No pending multiplication awaits its return.
  return tailFactorial(n - 1, n * accumulator);
}
```

_Theoretical Benefit:_ In languages with Tail Call Optimization (TCO), the compiler reuses the current stack frame, dropping the space complexity from $O(n)$ to $O(1)$.
_JavaScript Reality:_ While ES6 specified TCO, most modern JS engines (like V8 in Chrome/Node.js) **do not** currently implement it. Therefore, even tail-recursive functions in JS will still consume $O(n)$ stack space.
