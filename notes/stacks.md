# Stacks

Stack is a linear data structure.

It is one of the simplest but most powerful data structure in DSA.

It follows a strict rule

- LIFO (Last In, First Out)
- The last element you add is the first one you remove

Example : stack of plates, pile of books.

You always

- Add(push) on top
- Remove(pop) from top
- you never take something from the middle.

### Core operations

| Operation    | Meaning                 |
| ------------ | ----------------------- |
| push(x)      | Add element on top      |
| pop()        | Remove top element      |
| peek()/top() | see top element         |
| isEmpty()    | check if stack is empty |
| size()       | number of elements      |

Here are expanded notes to build on top of your current stack documentation, covering implementations, Big O efficiency, and common use cases.

---

## Implementation in JavaScript

You can implement a stack in JavaScript primarily in two ways: using a built-in array or a custom Linked List.

### 1. Array-Based Implementation (Simplest)

JavaScript arrays already have built-in `push()` and `pop()` methods that run in $O(1)$ amortized time, making them perfect for a quick stack.

```javascript
class ArrayStack {
  constructor() {
    this.items = [];
  }

  // Add to top
  push(element) {
    this.items.push(element);
  }

  // Remove from top
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }

  // View top element
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
```

### 2. Linked List Implementation (Memory Efficient)

For a strict $O(1)$ worst-case guarantee without array resizing overhead, a Singly Linked List works beautifully by adding and removing from the head.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
```

---

## Big O Complexity

| Operation         | Time Complexity | Space Complexity |
| ----------------- | --------------- | ---------------- |
| **Push**          | $O(1)$          | $O(1)$           |
| **Pop**           | $O(1)$          | $O(1)$           |
| **Peek**          | $O(1)$          | $O(1)$           |
| **Search/Access** | $O(n)$          | $O(1)$           |

> **Note:** Search and Access are $O(n)$ because stacks aren't built for random access. To find an item at the bottom, you have to pop everything above it.

---

## Common Real-World Applications

- **The Call Stack:** How JavaScript manages function execution context (Last In, First Out).
- **Undo/Redo Functionality:** Think of `Ctrl + Z` in a text editor. Your actions are pushed to a stack; undoing pops the latest action off.
- **Browser History:** Going back to the previous page pops the current URL off the history stack.
- **Expression Parsing:** Evaluating mathematical notation (like transforming Infix to Postfix expressions).

---

## Classic Interview Problem: Valid Parentheses

Stacks are the go-to data structure when you need to match elements or track nested relationships.

```javascript
function isValidParentheses(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (stack.pop() !== map[char]) {
      return false; // Mismatched or extra closing bracket
    }
  }

  return stack.length === 0; // Ensures no unclosed brackets remain
}
```

---

Here is the next logical addition to your notes, focusing on the architectural variations of stacks, advanced patterns, and how they contrast with other data structures.

---

## Stack Variations

While a standard stack restricts access to only the top element, certain specialized variations are used to optimize specific operations.

### 1. Monotonic Stack

A stack where elements are always kept in a strict order (either entirely increasing or entirely decreasing). When a new element violates this order, elements are popped until the condition is met again.

- **Monotonic Increasing:** $1 \rightarrow 3 \rightarrow 5 \rightarrow 8$ (smallest at the bottom)
- **Monotonic Decreasing:** $8 \rightarrow 5 \rightarrow 3 \rightarrow 1$ (largest at the bottom)
- **Use Case:** Finding the _Next Greater Element_ or _Next Smaller Element_ in an array in linear time $O(n)$ instead of brute-force $O(n^2)$.

### 2. Min/Max Stack

A design variant that allows you to retrieve the minimum or maximum element currently in the stack in constant $O(1)$ time without searching through the data structure.

- **Implementation Trick:** Maintain an auxiliary "min stack" alongside the main stack that tracks the lowest value encountered up to that point.

---

## Memory: Stack vs. Heap Allocation

In system architecture, the term "Stack" also refers to a specific region of computer memory, which behaves exactly like the data structure.

| Feature          | Stack Memory                                            | Heap Memory                                         |
| ---------------- | ------------------------------------------------------- | --------------------------------------------------- |
| **Allocation**   | Automatic by the CPU/Runtime.                           | Manual by the programmer or runtime engine.         |
| **Access Speed** | Fast (high-speed architectural execution).              | Slower (requires pointer lookups).                  |
| **Size Limit**   | Finite and rigid (leads to _Stack Overflow_ errors).    | Flexible, limited only by physical system memory.   |
| **Data Scope**   | Local variables, primitive data types, function frames. | Objects, dynamic data structures, global variables. |

---

## Double Stack Pattern (Implementing a Queue)

A classic interview paradigm forces you to implement a Queue (FIFO) using nothing but two Stacks (LIFO).

```javascript
class QueueWithStacks {
  constructor() {
    this.stackIn = []; // For incoming elements (push)
    this.stackOut = []; // For outgoing elements (pop/peek)
  }

  // Push element to the back of the queue
  enqueue(val) {
    this.stackIn.push(val);
  }

  // Remove element from the front of the queue
  dequeue() {
    this.shiftStacks();
    return this.stackOut.pop() || null;
  }

  peek() {
    this.shiftStacks();
    return this.stackOut[this.stackOut.length - 1] || null;
  }

  // Helper: Transfer items only when stackOut is empty
  shiftStacks() {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop());
      }
    }
  }
}
```

---

## Advanced Problem Patterns

When a coding question mentions tracking tracking historical states, reversing order, or matching adjacent pairs, look for these keywords:

- **Stock Span Problem:** Calculating consecutive days where stock prices were less than or equal to the current day (Monotonic Stack pattern).
- **Infix to Postfix/Prefix Translation:** Parsing strings like `A + B` into `A B +` so compilers can compute math equations unambiguously without needing parentheses.
- **Depth-First Search (DFS):** Stacks inherently form the backbone of recursive or iterative graph traversals where you explore deeply along a single path before backtracking.
