# JavaScript DSA – Searching Algorithms Notes

Searching algorithms are used to **find an element in a collection** (array, linked list, tree, graph, etc.).

---

# 1. Linear Search

## Definition

Linear Search checks each element one by one until the target is found.

### Works on

- Unsorted arrays ✅
- Sorted arrays ✅

### Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(1)       |
| Average | O(n)       |
| Worst   | O(n)       |

### Space Complexity

```
O(1)
```

---

## Algorithm

```
Start from first element

Compare current element with target

If found
    return index

Else
    move to next element

If end reached
    return -1
```

---

## JavaScript Implementation

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30));
```

Output

```
2
```

---

## Dry Run

Array

```
[12,18,25,31,45]
```

Target

```
31
```

Iterations

```
12 ❌

18 ❌

25 ❌

31 ✅
```

Return

```
3
```

---

## Advantages

- Very simple
- Works on unsorted data
- No preprocessing

## Disadvantages

- Slow for large datasets

---

# 2. Binary Search

## Definition

Binary Search repeatedly divides the search space into half.

**Requirement**

Array must be **sorted**.

---

## Idea

Instead of checking every element,

Check middle element.

If target is

```
Less
```

Search left half.

If target is

```
Greater
```

Search right half.

Repeat until found.

---

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(1)       |
| Average | O(log n)   |
| Worst   | O(log n)   |

Space

Iterative

```
O(1)
```

Recursive

```
O(log n)
```

---

## Visualization

Searching

```
55
```

Array

```
10 20 30 40 50 55 60 70 80
```

Step 1

```
10 20 30 40 50 55 60 70 80
             ↑
            50
```

55 > 50

Search Right

```
55 60 70 80
```

Middle

```
60
```

55 < 60

Search Left

```
55
```

Found.

---

## Iterative Binary Search

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 40));
```

Output

```
3
```

---

## Recursive Binary Search

```javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }

  return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([5, 10, 15, 20, 25], 20));
```

---

## Dry Run

Array

```
[5,10,15,20,25,30,35]
```

Target

```
25
```

Initial

```
left = 0

right = 6

mid = 3

20
```

25 > 20

```
left = 4
```

Now

```
mid = 5

30
```

25 < 30

```
right = 4
```

Now

```
mid = 4

25
```

Found.

---

# Binary Search Flow

```
Start

↓

Find Mid

↓

Is Mid == Target?

Yes → Return

No

↓

Target < Mid?

Yes

↓

Search Left

No

↓

Search Right

Repeat
```

---

# 3. Jump Search

Used for sorted arrays.

Instead of checking every element,

Jump by √n positions.

Time Complexity

```
O(√n)
```

Example

```
10 20 30 40 50 60 70 80 90
```

Jump

```
10 → 40 → 70
```

Then perform linear search within the identified block.

---

# 4. Interpolation Search

Works on

- Sorted array
- Uniformly distributed values

Instead of middle,

Estimate where the element should be.

Time Complexity

| Case    | Complexity   |
| ------- | ------------ |
| Best    | O(1)         |
| Average | O(log log n) |
| Worst   | O(n)         |

Example

```
10 20 30 40 50 60 70
```

Searching

```
60
```

Estimated position is near the end.

---

# 5. Exponential Search

Useful when

- Sorted array
- Size is unknown
- Infinite array concept

Steps

1. Find a range by doubling the index (`1, 2, 4, 8, ...`).
2. Perform Binary Search within that range.

Time Complexity

```
O(log n)
```

---

# 6. Ternary Search

Instead of dividing into 2 halves,

Divide into 3 parts.

Works on

- Sorted arrays
- Unimodal functions (optimization)

Time Complexity

```
O(log₃ n)
```

Binary Search is generally preferred due to lower comparison overhead.

---

# Linear Search vs Binary Search

| Feature           | Linear | Binary   |
| ----------------- | ------ | -------- |
| Sorted Required   | ❌ No  | ✅ Yes   |
| Time              | O(n)   | O(log n) |
| Space (Iterative) | O(1)   | O(1)     |
| Easy to Implement | ✅     | ✅       |
| Large Data        | ❌     | ✅       |
| Small Data        | ✅     | ✅       |

---

# Common Interview Questions

### 1. Why must Binary Search use a sorted array?

Because it eliminates half of the search space based on ordering. Without sorting, you cannot determine whether to search left or right.

### 2. Binary Search iterative vs recursive?

- **Iterative:** O(1) space, generally preferred.
- **Recursive:** Cleaner code but uses O(log n) call stack space.

### 3. Why use `left + Math.floor((right - left) / 2)` instead of `(left + right) / 2`?

To avoid integer overflow in languages with fixed-size integers (e.g., Java, C++). In JavaScript this isn't usually an issue, but it's still considered a best practice.

### 4. Can Binary Search work on a linked list?

No. Binary Search requires random access to the middle element, which linked lists do not provide efficiently.

### 5. When should you use Linear Search?

- Unsorted arrays
- Small datasets
- Single or infrequent searches

### 6. When should you use Binary Search?

- Sorted arrays
- Large datasets
- Frequent search operations

---

# Complexity Summary

| Algorithm            | Best | Average      | Worst     | Sorted Required           |
| -------------------- | ---- | ------------ | --------- | ------------------------- |
| Linear Search        | O(1) | O(n)         | O(n)      | ❌                        |
| Binary Search        | O(1) | O(log n)     | O(log n)  | ✅                        |
| Jump Search          | O(1) | O(√n)        | O(√n)     | ✅                        |
| Interpolation Search | O(1) | O(log log n) | O(n)      | ✅ (uniform distribution) |
| Exponential Search   | O(1) | O(log n)     | O(log n)  | ✅                        |
| Ternary Search       | O(1) | O(log₃ n)    | O(log₃ n) | ✅                        |

> **Interview Tip:** For JavaScript front-end interviews, you should thoroughly master **Linear Search** and **Binary Search** (iterative and recursive), including edge cases and time complexity. The other search algorithms are less commonly asked but are useful to know conceptually.
