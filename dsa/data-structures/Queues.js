// QUEUES

// using linked list implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // front
    this.tail = null; // rear
    this.length = 0;
  }

  enqueue(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;

    const removed = this.head;

    this.head = this.head.next;

    if (!this.head) {
      // queue became empty
      this.tail = null;
    }

    this.length--;
    return removed.val;
  }

  peek() {
    return this.head ? this.head.val : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

export default Queue;
