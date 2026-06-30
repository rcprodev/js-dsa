# Big O Notation Notes for DSA Prerequisite

Use these notes whenever you get stuck while learning Data Structures and Algorithms. Big O helps you understand **how fast an algorithm grows** when the input size grows.

---

## 1. What is Big O Notation? - is a mathematical way to describe the efficiency of an algorithm

**Big O notation** describes the **upper bound** of an algorithm's time or space usage as input size increases.

In simple words:

> Big O tells us how an algorithm behaves when `n` becomes large.

Example:

```js
for (let i = 0; i < n; i++) {
  console.log(i);
}
```

This loop runs `n` times.

Time Complexity: `O(n)`

---

## 2. Why Big O Matters in DSA

When solving DSA problems, multiple solutions may work, but not all are efficient.

Example:

Given an array, check whether a target value exists.

### Slow approach

```js
function contains(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}
```

Time Complexity: `O(n)`

Because in the worst case, we may check every element.

### Faster approach if data is stored in a Set

```js
const set = new Set(arr);
set.has(target);
```

Lookup Time Complexity: `O(1)` average case

Big O helps you compare these approaches.

---

## 3. Important Terms

### Input size: `n`

`n` represents the size of input.

Examples:

```js
arr.length     // n for an array
str.length     // n for a string
number of nodes // n for linked list/tree/graph
```

---

### Time Complexity

How the running time grows as input grows.

Example:

```js
for (let i = 0; i < n; i++) {}
```

Time Complexity: `O(n)`

---

### Space Complexity

How much extra memory an algorithm uses as input grows.

Example:

```js
function copyArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}
```

Time Complexity: `O(n)`  
Space Complexity: `O(n)`

Because we create a new array of size `n`.

---

## 4. Common Big O Complexities

| Complexity   | Name         | Meaning                            | Example                     |
| ------------ | ------------ | ---------------------------------- | --------------------------- |
| `O(1)`       | Constant     | Same time regardless of input size | Accessing `arr[0]`          |
| `O(log n)`   | Logarithmic  | Input reduces by half each step    | Binary search               |
| `O(n)`       | Linear       | Grows directly with input          | Single loop                 |
| `O(n log n)` | Linearithmic | Common in efficient sorting        | Merge sort, heap sort       |
| `O(n^2)`     | Quadratic    | Nested loops over same input       | Bubble sort                 |
| `O(2^n)`     | Exponential  | Doubles with each input increase   | Recursive subset generation |
| `O(n!)`      | Factorial    | Extremely slow                     | Permutations                |

---

## 5. Complexity Growth Order

From fastest to slowest:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n^2)
O(n^3)
O(2^n)
O(n!)
```

Remember:

> Lower growth rate is usually better.

---

## 6. Big O Rules

### Rule 1: Ignore constants

```js
for (let i = 0; i < n; i++) {
  console.log(i);
}

for (let i = 0; i < n; i++) {
  console.log(i);
}
```

This runs `2n` times.

Actual: `O(2n)`  
Big O: `O(n)`

We ignore constants.

---

### Rule 2: Drop smaller terms

```js
for (let i = 0; i < n; i++) {
  console.log(i);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

Actual: `O(n + n^2)`  
Big O: `O(n^2)`

Because `n^2` grows much faster than `n`.

---

### Rule 3: Different inputs need different variables

```js
function printTwoArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    console.log(arr2[j]);
  }
}
```

If `arr1.length = n` and `arr2.length = m`:

Time Complexity: `O(n + m)`

Do not write `O(n)` unless both arrays have the same size.

---

### Rule 4: Nested loops usually multiply

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

Outer loop: `n` times  
Inner loop: `n` times

Total: `n * n = n^2`

Time Complexity: `O(n^2)`

---

### Rule 5: Consecutive loops usually add

```js
for (let i = 0; i < n; i++) {}
for (let j = 0; j < n; j++) {}
```

Total: `n + n = 2n`

Time Complexity: `O(n)`

---

## 7. O(1) - Constant Time

An algorithm is `O(1)` if it takes the same amount of time regardless of input size.

Example:

```js
function getFirst(arr) {
  return arr[0];
}
```

Even if the array has 10 elements or 10 million elements, accessing the first element is constant time.

Time Complexity: `O(1)`

More examples:

```js
arr[0];
arr[arr.length - 1];
map.get(key);
set.has(value);
```

Note: `Map` and `Set` operations are usually considered `O(1)` average case.

---

## 8. O(n) - Linear Time

An algorithm is `O(n)` if work grows directly with input size.

Example:

```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

If array size is 10, loop runs 10 times.  
If array size is 1000, loop runs 1000 times.

Time Complexity: `O(n)`

---

## 9. O(n^2) - Quadratic Time

Nested loops over the same input usually become `O(n^2)`.

Example:

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

If `n = 5`, operations = 25  
If `n = 100`, operations = 10,000

Time Complexity: `O(n^2)`

Common examples:

- Bubble sort
- Selection sort
- Insertion sort worst case
- Checking all pairs
- Brute force two-sum

---

## 10. O(log n) - Logarithmic Time

An algorithm is `O(log n)` when the input size is reduced by a constant factor, usually half, at each step.

Example: Binary Search

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

Time Complexity: `O(log n)`

Why?

Each step cuts the search space in half.

```text
n -> n/2 -> n/4 -> n/8 -> ... -> 1
```

---

## 11. O(n log n)

`O(n log n)` is common in efficient sorting algorithms.

Examples:

- Merge sort
- Heap sort
- Quick sort average case

Why merge sort is `O(n log n)`:

- Splitting array takes `log n` levels.
- Merging each level takes `n` work.

Total: `O(n log n)`

---

## 12. O(2^n) - Exponential Time

Exponential algorithms grow very fast.

Example: Fibonacci without memoization

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

Time Complexity: `O(2^n)` approximately

Because each call creates more recursive calls.

This is usually too slow for large input.

---

## 13. O(n!) - Factorial Time

Factorial time appears when generating all permutations.

Example:

For `n = 3`:

```text
ABC
ACB
BAC
BCA
CAB
CBA
```

Total permutations: `3! = 6`

For `n = 10`:

```text
10! = 3,628,800
```

Time Complexity: `O(n!)`

---

## 14. Best Case, Average Case, Worst Case

### Best Case

Minimum time the algorithm can take.

Example:

```js
function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

If target is at the first index:

Best Case: `O(1)`

---

### Worst Case

Maximum time the algorithm can take.

If target is at the last index or not present:

Worst Case: `O(n)`

In interviews, when someone asks for Big O, they usually mean **worst-case complexity**, unless specified otherwise.

---

### Average Case

Expected time for a typical input.

Example:

Linear search average case: `O(n)`

Because on average, we may check about half the array. But Big O ignores constants, so `n/2` becomes `O(n)`.

---

## 15. Space Complexity

Space complexity measures extra memory used by an algorithm.

### O(1) space

```js
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
```

Extra memory: only `sum`

Space Complexity: `O(1)`

---

### O(n) space

```js
function doubleArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }

  return result;
}
```

Extra memory: new array of size `n`

Space Complexity: `O(n)`

---

## 16. Recursion and Big O

Recursive functions are analyzed by checking:

1. Number of recursive calls
2. Size reduction per call
3. Work done in each call
4. Recursion depth

---

### Example 1: Simple recursion

```js
function countdown(n) {
  if (n === 0) return;
  countdown(n - 1);
}
```

Recursive calls: `n`  
Time Complexity: `O(n)`  
Space Complexity: `O(n)` because of call stack

---

### Example 2: Binary recursion

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

Time Complexity: `O(2^n)` approximately  
Space Complexity: `O(n)` because maximum call stack depth is `n`

---

### Example 3: Divide by 2 recursion

```js
function logExample(n) {
  if (n <= 1) return;
  logExample(Math.floor(n / 2));
}
```

Time Complexity: `O(log n)`  
Space Complexity: `O(log n)` because of call stack

---

## 17. Big O for Common JavaScript Operations

### Array

| Operation                            |           Complexity | Notes                           |
| ------------------------------------ | -------------------: | ------------------------------- |
| Access by index `arr[i]`             |               `O(1)` | Direct access                   |
| Push at end `arr.push(x)`            |       `O(1)` average | Usually constant                |
| Pop from end `arr.pop()`             |               `O(1)` | Removes last item               |
| Insert at beginning `arr.unshift(x)` |               `O(n)` | Shifts all elements             |
| Remove from beginning `arr.shift()`  |               `O(n)` | Shifts all elements             |
| Search unsorted array                |               `O(n)` | May scan all elements           |
| Slice `arr.slice()`                  |               `O(k)` | `k` = copied elements           |
| Splice `arr.splice()`                |               `O(n)` | May shift elements              |
| Sort `arr.sort()`                    | `O(n log n)` average | Engine-dependent implementation |

---

### Object

| Operation            |     Complexity | Notes               |
| -------------------- | -------------: | ------------------- |
| Insert property      | `O(1)` average | `obj[key] = value`  |
| Delete property      | `O(1)` average | `delete obj[key]`   |
| Access property      | `O(1)` average | `obj[key]`          |
| Search value         |         `O(n)` | Need to scan values |
| `Object.keys(obj)`   |         `O(n)` | Returns all keys    |
| `Object.values(obj)` |         `O(n)` | Returns all values  |

---

### Map

| Operation             |     Complexity | Notes             |
| --------------------- | -------------: | ----------------- |
| `map.set(key, value)` | `O(1)` average | Insert/update     |
| `map.get(key)`        | `O(1)` average | Lookup            |
| `map.has(key)`        | `O(1)` average | Existence check   |
| `map.delete(key)`     | `O(1)` average | Remove key        |
| Iterating map         |         `O(n)` | Visit all entries |

---

### Set

| Operation           |     Complexity | Notes            |
| ------------------- | -------------: | ---------------- |
| `set.add(value)`    | `O(1)` average | Insert           |
| `set.has(value)`    | `O(1)` average | Lookup           |
| `set.delete(value)` | `O(1)` average | Remove           |
| Iterating set       |         `O(n)` | Visit all values |

---

## 18. Common DSA Complexity Cheat Sheet

### Arrays

| Task                          | Common Complexity |
| ----------------------------- | ----------------: |
| Access by index               |            `O(1)` |
| Linear search                 |            `O(n)` |
| Binary search in sorted array |        `O(log n)` |
| Insert/delete at end          |    `O(1)` average |
| Insert/delete at start        |            `O(n)` |
| Insert/delete in middle       |            `O(n)` |

---

### Strings

| Task                      | Common Complexity |
| ------------------------- | ----------------: |
| Access character by index |            `O(1)` |
| Traverse string           |            `O(n)` |
| Compare two strings       |            `O(n)` |
| Create substring          |    `O(k)` usually |
| Reverse string            |            `O(n)` |

---

### Linked List

| Task                                | Common Complexity |
| ----------------------------------- | ----------------: |
| Access by index                     |            `O(n)` |
| Search                              |            `O(n)` |
| Insert at head                      |            `O(1)` |
| Delete head                         |            `O(1)` |
| Insert at tail with tail pointer    |            `O(1)` |
| Insert at tail without tail pointer |            `O(n)` |

---

### Stack

| Task     | Complexity |
| -------- | ---------: |
| Push     |     `O(1)` |
| Pop      |     `O(1)` |
| Peek/top |     `O(1)` |
| Search   |     `O(n)` |

---

### Queue

| Task       |                        Complexity |
| ---------- | --------------------------------: |
| Enqueue    |                            `O(1)` |
| Dequeue    | `O(1)` with proper implementation |
| Peek/front |                            `O(1)` |
| Search     |                            `O(n)` |

Important JavaScript note:

Avoid using `arr.shift()` for queue dequeue in performance-sensitive code because `shift()` is `O(n)`.

Use a pointer-based queue instead.

---

### Hash Table / Map / Set

| Task     | Average Complexity |
| -------- | -----------------: |
| Insert   |             `O(1)` |
| Delete   |             `O(1)` |
| Search   |             `O(1)` |
| Traverse |             `O(n)` |

Worst case can become `O(n)` due to hash collisions, but average case is usually considered `O(1)`.

---

### Binary Search Tree

| Task   | Balanced BST | Skewed BST |
| ------ | -----------: | ---------: |
| Search |   `O(log n)` |     `O(n)` |
| Insert |   `O(log n)` |     `O(n)` |
| Delete |   `O(log n)` |     `O(n)` |

---

### Heap / Priority Queue

| Task           | Complexity |
| -------------- | ---------: |
| Get min/max    |     `O(1)` |
| Insert         | `O(log n)` |
| Remove min/max | `O(log n)` |
| Build heap     |     `O(n)` |

---

### Graph

Let:

- `V` = number of vertices/nodes
- `E` = number of edges

| Task                           |  Complexity |
| ------------------------------ | ----------: |
| BFS                            |  `O(V + E)` |
| DFS                            |  `O(V + E)` |
| Check edge in adjacency matrix |      `O(1)` |
| Check edge in adjacency list   | `O(degree)` |

---

## 19. Sorting Algorithms Complexity

| Algorithm      |         Best |      Average |        Worst |              Space |
| -------------- | -----------: | -----------: | -----------: | -----------------: |
| Bubble Sort    |       `O(n)` |     `O(n^2)` |     `O(n^2)` |             `O(1)` |
| Selection Sort |     `O(n^2)` |     `O(n^2)` |     `O(n^2)` |             `O(1)` |
| Insertion Sort |       `O(n)` |     `O(n^2)` |     `O(n^2)` |             `O(1)` |
| Merge Sort     | `O(n log n)` | `O(n log n)` | `O(n log n)` |             `O(n)` |
| Quick Sort     | `O(n log n)` | `O(n log n)` |     `O(n^2)` | `O(log n)` average |
| Heap Sort      | `O(n log n)` | `O(n log n)` | `O(n log n)` |             `O(1)` |

---

## 20. Searching Algorithms Complexity

| Algorithm     | Requirement           |     Complexity |
| ------------- | --------------------- | -------------: |
| Linear Search | Works on any array    |         `O(n)` |
| Binary Search | Requires sorted array |     `O(log n)` |
| Hash Lookup   | Requires hash map/set | `O(1)` average |

---

## 21. How to Analyze Loops

### Single loop

```js
for (let i = 0; i < n; i++) {}
```

Runs `n` times.

Complexity: `O(n)`

---

### Loop increments by 2

```js
for (let i = 0; i < n; i += 2) {}
```

Runs `n/2` times.

Complexity: `O(n)`

Because constants are ignored.

---

### Loop doubles each time

```js
for (let i = 1; i < n; i *= 2) {}
```

Runs `log n` times.

Complexity: `O(log n)`

---

### Nested loops

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}
```

Complexity: `O(n^2)`

---

### Nested loop where inner depends on outer

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {}
}
```

Operations:

```text
0 + 1 + 2 + 3 + ... + (n - 1)
```

This equals roughly:

```text
n(n - 1) / 2
```

Complexity: `O(n^2)`

---

## 22. Common Code Patterns and Their Big O

### Pattern 1: One loop

```js
for (let i = 0; i < n; i++) {}
```

Time: `O(n)`

---

### Pattern 2: Two separate loops

```js
for (let i = 0; i < n; i++) {}
for (let j = 0; j < n; j++) {}
```

Time: `O(n + n) = O(n)`

---

### Pattern 3: Nested loops

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}
```

Time: `O(n^2)`

---

### Pattern 4: Loop with hash map

```js
function countFrequency(arr) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return map;
}
```

Time: `O(n)`  
Space: `O(n)`

---

### Pattern 5: Sorting first

```js
arr.sort((a, b) => a - b);
```

Time: `O(n log n)`

If your algorithm sorts first and then loops once:

```js
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {}
```

Total: `O(n log n + n)`  
Final: `O(n log n)`

---

### Pattern 6: Two pointers

```js
let left = 0;
let right = arr.length - 1;

while (left < right) {
  left++;
  right--;
}
```

Time: `O(n)`  
Space: `O(1)`

Even though two pointers are moving, each element is visited at most once.

---

### Pattern 7: Sliding window

```js
let left = 0;
let sum = 0;

for (let right = 0; right < arr.length; right++) {
  sum += arr[right];

  while (sum > target) {
    sum -= arr[left];
    left++;
  }
}
```

Time: `O(n)`

Why not `O(n^2)`?

Because both `left` and `right` only move forward. Each element is added once and removed once.

---

### Pattern 8: BFS / DFS on graph

```js
function dfs(graph, node, visited) {
  if (visited.has(node)) return;

  visited.add(node);

  for (const neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}
```

Time: `O(V + E)`  
Space: `O(V)`

---

## 23. Big O Examples from Common DSA Problems

### Two Sum - Brute Force

```js
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```

Time: `O(n^2)`  
Space: `O(1)`

---

### Two Sum - Hash Map

```js
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }
}
```

Time: `O(n)`  
Space: `O(n)`

Trade-off:

> We improved time complexity by using extra space.

---

### Check Palindrome

```js
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}
```

Time: `O(n)`  
Space: `O(1)`

---

### Reverse Array In Place

```js
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
```

Time: `O(n)`  
Space: `O(1)`

---

### Find Maximum

```js
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}
```

Time: `O(n)`  
Space: `O(1)`

---

## 24. Time vs Space Trade-off

Sometimes you can make an algorithm faster by using more memory.

Example: Duplicate check

### Brute force

```js
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
```

Time: `O(n^2)`  
Space: `O(1)`

---

### Using Set

```js
function hasDuplicate(arr) {
  const seen = new Set();

  for (const item of arr) {
    if (seen.has(item)) return true;
    seen.add(item);
  }

  return false;
}
```

Time: `O(n)`  
Space: `O(n)`

This is a common DSA trade-off.

---

## 25. How to Quickly Find Big O in an Interview

Use this checklist:

1. What is the input size? `n`, `m`, `V`, `E`?
2. How many times does each loop run?
3. Are loops separate or nested?
4. Does the input reduce by half each step?
5. Is there recursion?
6. Is sorting used?
7. Is extra memory used?
8. Can smaller terms/constants be ignored?

---

## 26. Common Mistakes Beginners Make

### Mistake 1: Counting exact operations too much

You do not need exact operation count.

Focus on growth.

`3n + 10` becomes `O(n)`.

---

### Mistake 2: Thinking two loops always means `O(n^2)`

Wrong:

```js
for (let i = 0; i < n; i++) {}
for (let j = 0; j < n; j++) {}
```

This is `O(n)`, not `O(n^2)`.

Nested loops usually multiply. Separate loops usually add.

---

### Mistake 3: Forgetting space complexity of recursion

```js
function recurse(n) {
  if (n === 0) return;
  recurse(n - 1);
}
```

Time: `O(n)`  
Space: `O(n)` because recursive calls use stack memory.

---

### Mistake 4: Saying binary search is always possible

Binary search requires sorted data or a monotonic condition.

If array is unsorted, binary search cannot be directly applied.

---

### Mistake 5: Treating all nested loops as `O(n^2)`

Example:

```js
for (let i = 1; i < n; i *= 2) {
  for (let j = 0; j < n; j++) {}
}
```

Outer loop: `O(log n)`  
Inner loop: `O(n)`

Total: `O(n log n)`

---

## 27. Quick Mental Models

### If you see direct access

```js
arr[i];
```

Think: `O(1)`

---

### If you see one full scan

```js
for (...) {}
```

Think: `O(n)`

---

### If you see nested full scans

```js
for (...) {
  for (...) {}
}
```

Think: `O(n^2)`

---

### If you see halving

```js
n = n / 2;
```

Think: `O(log n)`

---

### If you see sorting

```js
arr.sort();
```

Think: `O(n log n)`

---

### If you see all subsets

Think: `O(2^n)`

---

### If you see all permutations

Think: `O(n!)`

---

## 28. Big O Practice Questions

Try to solve these yourself before checking the answer.

---

### Q1

```js
function example(arr) {
  console.log(arr[0]);
}
```

Answer: `O(1)`

---

### Q2

```js
function example(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

Answer: `O(n)`

---

### Q3

```js
function example(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

Answer: `O(n^2)`

---

### Q4

```js
function example(arr) {
  for (let i = 0; i < arr.length; i++) {}
  for (let j = 0; j < arr.length; j++) {}
}
```

Answer: `O(n)`

---

### Q5

```js
function example(n) {
  for (let i = 1; i < n; i *= 2) {
    console.log(i);
  }
}
```

Answer: `O(log n)`

---

### Q6

```js
function example(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

Answer: `O(n log n)`

---

### Q7

```js
function example(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}
```

Time: `O(n)`  
Space: `O(n)`

---

### Q8

```js
function example(n) {
  if (n <= 1) return;
  example(n - 1);
}
```

Time: `O(n)`  
Space: `O(n)`

---

### Q9

```js
function example(n) {
  if (n <= 1) return;
  example(Math.floor(n / 2));
}
```

Time: `O(log n)`  
Space: `O(log n)`

---

### Q10

```js
function example(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {}
  for (let j = 0; j < arr2.length; j++) {}
}
```

Answer: `O(n + m)`

---

## 29. Big O Table for Fast Revision

| Pattern                          | Time Complexity |
| -------------------------------- | --------------: |
| Access one item                  |          `O(1)` |
| Loop through input once          |          `O(n)` |
| Loop through two separate arrays |      `O(n + m)` |
| Nested loop same input           |        `O(n^2)` |
| Divide input by 2 repeatedly     |      `O(log n)` |
| Sorting                          |    `O(n log n)` |
| Generate all subsets             |        `O(2^n)` |
| Generate all permutations        |         `O(n!)` |
| BFS/DFS graph                    |      `O(V + E)` |

---

## 30. Final Interview Answer Format

When asked complexity, answer like this:

```text
Time Complexity: O(n)
Space Complexity: O(1)
Reason: We traverse the array once and only use a few variables.
```

Another example:

```text
Time Complexity: O(n log n)
Space Complexity: O(1) or O(n), depending on sorting implementation.
Reason: Sorting dominates the overall complexity. The extra loop is O(n), so we drop the smaller term.
```

---

## 31. Mini Glossary

| Term             | Meaning                            |
| ---------------- | ---------------------------------- |
| `n`              | Input size                         |
| Time complexity  | How running time grows             |
| Space complexity | How memory usage grows             |
| Constant time    | Same time regardless of input size |
| Linear time      | Time grows directly with input     |
| Logarithmic time | Input gets reduced repeatedly      |
| Quadratic time   | Usually nested loops               |
| Worst case       | Maximum possible running time      |
| Average case     | Expected running time              |
| Best case        | Minimum possible running time      |

---

## 32. Useful Reference Links

- Big O notation overview: https://en.wikipedia.org/wiki/Big_O_notation
- Time complexity cheat sheet: https://www.bigocheatsheet.com/
- VisuAlgo visualizations: https://visualgo.net/en
- MDN JavaScript Array reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- MDN JavaScript Map reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- MDN JavaScript Set reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

---

## 33. One-Line Summary

> Big O is not about exact time. It is about how the algorithm grows when input size grows.
