# Singly Linked List (JavaScript) - DSA Interview Notes

---

# 1. What is a Linked List?

A **Linked List** is a linear data structure where elements are stored as **nodes**.

Each node contains:

- Data (value)
- Pointer (reference) to the next node

```
Head
 ↓
[10 | • ] → [20 | • ] → [30 | • ] → null
```

Unlike arrays, linked lists are **not stored in contiguous memory**.

---

# 2. Node Structure

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

Example:

```
value = 10
next = null

┌──────┬──────┐
│  10  │ null │
└──────┴──────┘
```

---

# 3. Linked List Class

```javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
```

---

# 4. Why use Linked List?

Advantages

- Dynamic size
- Fast insertion at beginning
- Fast deletion at beginning
- No shifting of elements

Disadvantages

- No random access
- Extra memory for pointers
- Slower traversal

---

# 5. Array vs Linked List

| Array              | Linked List        |
| ------------------ | ------------------ |
| Contiguous memory  | Random memory      |
| Index access O(1)  | No indexing        |
| Insert middle O(n) | O(1) if node known |
| Delete middle O(n) | O(1) if node known |
| Fixed resize       | Dynamic            |

---

# 6. Basic Operations

### Insert at Beginning

```
Before

10 → 20 → 30

Insert 5

5 → 10 → 20 → 30
```

```javascript
prepend(value){
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    this.size++;
}
```

Time Complexity

```
O(1)
```

---

### Insert at End

```
10 → 20 → 30

Insert 40

10 → 20 → 30 → 40
```

```javascript
append(value){
    const node = new Node(value);

    if(!this.head){
        this.head = node;
    }else{
        let curr = this.head;

        while(curr.next){
            curr = curr.next;
        }

        curr.next = node;
    }

    this.size++;
}
```

Time

```
O(n)
```

---

### Insert at Index

```javascript
insert(value,index){
    if(index<0 || index>this.size) return;

    if(index===0){
        this.prepend(value);
        return;
    }

    const node = new Node(value);

    let prev = this.head;

    for(let i=0;i<index-1;i++){
        prev = prev.next;
    }

    node.next = prev.next;
    prev.next = node;

    this.size++;
}
```

Time

```
O(n)
```

---

# 7. Delete Operations

### Delete First

```
10 → 20 → 30

↓

20 → 30
```

```javascript
removeFirst(){
    if(!this.head) return;

    this.head = this.head.next;
    this.size--;
}
```

Time

```
O(1)
```

---

### Delete Last

```
10 → 20 → 30

↓

10 → 20
```

```javascript
removeLast(){
    if(!this.head) return;

    if(!this.head.next){
        this.head = null;
        this.size--;
        return;
    }

    let prev = null;
    let curr = this.head;

    while(curr.next){
        prev = curr;
        curr = curr.next;
    }

    prev.next = null;

    this.size--;
}
```

Time

```
O(n)
```

---

### Delete by Index

```javascript
remove(index){

    if(index<0 || index>=this.size)
        return;

    if(index===0){
        this.removeFirst();
        return;
    }

    let prev = this.head;

    for(let i=0;i<index-1;i++){
        prev = prev.next;
    }

    prev.next = prev.next.next;

    this.size--;
}
```

---

# 8. Searching

```javascript
search(value){

    let curr = this.head;
    let index = 0;

    while(curr){

        if(curr.value===value)
            return index;

        curr = curr.next;
        index++;
    }

    return -1;
}
```

Time

```
O(n)
```

---

# 9. Traversal

```javascript
print(){

    let curr = this.head;

    while(curr){
        console.log(curr.value);
        curr = curr.next;
    }
}
```

---

# 10. Reverse Linked List (Most Asked)

Original

```
10 → 20 → 30 → null
```

Result

```
30 → 20 → 10 → null
```

Algorithm

```
prev = null

current = head

while(current){

next = current.next

current.next = prev

prev = current

current = next

}

head = prev
```

Code

```javascript
reverse(){

    let prev = null;
    let curr = this.head;

    while(curr){

        let next = curr.next;

        curr.next = prev;

        prev = curr;

        curr = next;
    }

    this.head = prev;
}
```

Time

```
O(n)
```

Space

```
O(1)
```

---

# 11. Middle Node (Fast & Slow Pointer)

```
1 → 2 → 3 → 4 → 5

        ↑
      Middle
```

```javascript
findMiddle(){

    let slow = this.head;
    let fast = this.head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
```

Time

```
O(n)
```

---

# 12. Detect Cycle (Floyd's Algorithm)

```
1 → 2 → 3 → 4
     ↑       ↓
     ← ← ← ←
```

```javascript
hasCycle(){

    let slow = this.head;
    let fast = this.head;

    while(fast && fast.next){

        slow = slow.next;
        fast = fast.next.next;

        if(slow===fast)
            return true;
    }

    return false;
}
```

Time

```
O(n)
```

Space

```
O(1)
```

---

# 13. Complexity Table

| Operation       | Time |
| --------------- | ---- |
| Prepend         | O(1) |
| Append          | O(n) |
| Insert at Index | O(n) |
| Delete First    | O(1) |
| Delete Last     | O(n) |
| Delete by Index | O(n) |
| Search          | O(n) |
| Traverse        | O(n) |
| Reverse         | O(n) |
| Find Middle     | O(n) |
| Detect Cycle    | O(n) |

---

# 14. Common Interview Questions

- Reverse a linked list (iterative & recursive)
- Find the middle node
- Detect a cycle
- Remove duplicates
- Merge two sorted linked lists
- Find the nth node from the end
- Delete a node without head reference
- Check if a linked list is a palindrome
- Reverse nodes in groups of k
- Find the intersection point of two linked lists
- Sort a linked list (Merge Sort)
- Rotate a linked list
- Partition a linked list around a value
- Clone a linked list with random pointers

---

# 15. Important Edge Cases

- Empty list (`head === null`)
- Single-node list
- Insert at index `0`
- Insert at the end (`index === size`)
- Delete the only node
- Delete the head node
- Search in an empty list
- Reverse an empty list
- Reverse a single-node list
- Detect a cycle in an empty or one-node list

---

## Interview Tips

- Always update `head` correctly when inserting or deleting at the beginning.
- Store `next` before changing pointers during reversal.
- Check for `null` before accessing `.next`.
- Use the **fast and slow pointer** technique for middle-node and cycle-detection problems.
- Clearly state the **time and space complexity** for every solution.

These notes cover the core singly linked list concepts and the patterns most commonly tested in JavaScript DSA and frontend interviews.

# Doubly Linked List (JavaScript) - DSA Interview Notes

---

# 1. What is a Doubly Linked List?

A **Doubly Linked List (DLL)** is a linear data structure where each node stores:

- Data (value)
- Pointer to the previous node (`prev`)
- Pointer to the next node (`next`)

Unlike a Singly Linked List, you can traverse **both forward and backward**.

```
null ← [10] ⇄ [20] ⇄ [30] → null
       ↑                  ↑
      Head              Tail
```

---

# 2. Node Structure

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
```

Each node

```
┌──────────────┐
│ prev | value | next │
└──────────────┘
```

---

# 3. Doubly Linked List Class

```javascript
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
```

Why maintain a `tail`?

- O(1) insertion at end
- O(1) deletion at end
- Reverse traversal

---

# 4. Advantages

- Traverse in both directions
- Easier insertion/deletion
- O(1) deletion when node is known
- Efficient implementation of LRU Cache, Browser History

---

# 5. Disadvantages

- Extra memory for `prev`
- More pointer updates
- Slightly complex implementation

---

# 6. Singly vs Doubly Linked List

| Singly                       | Doubly             |
| ---------------------------- | ------------------ |
| next only                    | prev + next        |
| Forward traversal            | Forward & Backward |
| Less memory                  | More memory        |
| Delete previous is difficult | Delete is easier   |
| Simpler                      | More complex       |

---

# 7. Insert at Beginning (Prepend)

Before

```
null ← 20 ⇄ 30
```

Insert 10

```
null ← 10 ⇄ 20 ⇄ 30
```

```javascript
prepend(value) {
    const node = new Node(value);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    this.size++;
}
```

Time

```
O(1)
```

---

# 8. Insert at End (Append)

```
10 ⇄ 20 ⇄ 30

↓

10 ⇄ 20 ⇄ 30 ⇄ 40
```

```javascript
append(value) {
    const node = new Node(value);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    this.size++;
}
```

Time

```
O(1)
```

---

# 9. Insert at Index

```javascript
insert(value, index) {

    if (index < 0 || index > this.size)
        return;

    if (index === 0) {
        this.prepend(value);
        return;
    }

    if (index === this.size) {
        this.append(value);
        return;
    }

    const node = new Node(value);

    let curr = this.head;

    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    node.prev = curr.prev;
    node.next = curr;

    curr.prev.next = node;
    curr.prev = node;

    this.size++;
}
```

Time

```
O(n)
```

---

# 10. Delete First

```
10 ⇄ 20 ⇄ 30

↓

20 ⇄ 30
```

```javascript
removeFirst() {

    if (!this.head)
        return;

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }

    this.size--;
}
```

Time

```
O(1)
```

---

# 11. Delete Last

```
10 ⇄ 20 ⇄ 30

↓

10 ⇄ 20
```

```javascript
removeLast() {

    if (!this.tail)
        return;

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    this.size--;
}
```

Time

```
O(1)
```

---

# 12. Delete by Index

```javascript
remove(index) {

    if (index < 0 || index >= this.size)
        return;

    if (index === 0) {
        this.removeFirst();
        return;
    }

    if (index === this.size - 1) {
        this.removeLast();
        return;
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    this.size--;
}
```

Time

```
O(n)
```

---

# 13. Search

```javascript
search(value) {

    let curr = this.head;
    let index = 0;

    while (curr) {

        if (curr.value === value)
            return index;

        curr = curr.next;
        index++;
    }

    return -1;
}
```

Time

```
O(n)
```

---

# 14. Traverse Forward

```javascript
printForward() {

    let curr = this.head;

    while (curr) {
        console.log(curr.value);
        curr = curr.next;
    }
}
```

---

# 15. Traverse Backward

```javascript
printBackward() {

    let curr = this.tail;

    while (curr) {
        console.log(curr.value);
        curr = curr.prev;
    }
}
```

---

# 16. Reverse a Doubly Linked List

### Idea

Swap each node's `next` and `prev`.

```
Before

10 ⇄ 20 ⇄ 30

After

30 ⇄ 20 ⇄ 10
```

```javascript
reverse() {

    let curr = this.head;
    let temp = null;

    while (curr) {
        temp = curr.prev;
        curr.prev = curr.next;
        curr.next = temp;
        curr = curr.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
}
```

Time

```
O(n)
```

Space

```
O(1)
```

---

# 17. Complexity Table

| Operation    | Time |
| ------------ | ---- |
| Insert Front | O(1) |
| Insert End   | O(1) |
| Insert Index | O(n) |
| Delete Front | O(1) |
| Delete End   | O(1) |
| Delete Index | O(n) |
| Search       | O(n) |
| Traverse     | O(n) |
| Reverse      | O(n) |

---

# 18. Common Interview Questions

### Easy

- Implement Doubly Linked List
- Insert at front
- Insert at end
- Delete first
- Delete last
- Search an element
- Traverse forward
- Traverse backward

### Medium

- Reverse a Doubly Linked List
- Delete a given node
- Insert before a node
- Insert after a node
- Remove duplicates
- Find pair with given sum
- Rotate DLL

### Hard

- Flatten a multilevel doubly linked list
- LRU Cache (uses DLL + HashMap)
- Browser history implementation
- Text editor undo/redo
- LFU Cache

---

# 19. Real-World Applications

### Browser Navigation

```
Google ⇄ YouTube ⇄ GitHub

Back  ← prev
Forward → next
```

---

### Undo / Redo

```
Action1 ⇄ Action2 ⇄ Action3
```

Move backward using `prev`, forward using `next`.

---

### Music Playlist

```
Song1 ⇄ Song2 ⇄ Song3
```

Previous song → `prev`

Next song → `next`

---

### LRU Cache

```
HashMap + Doubly Linked List
```

Most recently used items move to the front, least recently used items are removed from the tail in O(1).

---

# 20. Important Edge Cases

- Empty list
- Single-node list
- Insert into empty list
- Delete only node
- Insert at index `0`
- Insert at index `size`
- Delete head
- Delete tail
- Search in empty list
- Reverse empty list
- Reverse single-node list
- Always update both `head` and `tail` correctly.

---

# 21. Singly vs Doubly Complexity

| Operation         | Singly | Doubly   |
| ----------------- | ------ | -------- |
| Insert Front      | O(1)   | O(1)     |
| Insert End        | O(n)\* | O(1)\*\* |
| Delete Front      | O(1)   | O(1)     |
| Delete End        | O(n)\* | O(1)\*\* |
| Search            | O(n)   | O(n)     |
| Reverse Traversal | ❌     | ✅       |

- Without a `tail` pointer.
  \*\* Assuming the list maintains a `tail` pointer.

---

# Interview Tips

- Always update **four pointers** when inserting or deleting a node in the middle:
  1. `node.prev`
  2. `node.next`
  3. `prev.next`
  4. `next.prev`

- Handle the empty-list and single-node cases separately.
- Remember to update `head` and `tail` whenever the first or last node changes.
- State the time and space complexity after explaining each operation.
- Be prepared to explain real-world uses like **LRU Cache**, **browser history**, and **undo/redo**, as these are common interview follow-up questions.
