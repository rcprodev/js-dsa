class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  fwdTraverse() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  reverseTraverse() {
    let current = this.tail;
    while (current) {
      console.log(current.val);
      current = current.prev;
    }
  }

  shift() {
    if (!this.head) return;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
  }

  pop() {
    if (!this.head) return;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
  }

  find(val) {
    let current = this.head;

    while (current) {
      if (current.val == val) {
        return true;
      }

      current = current.next;
    }
    return false;
  }
}

export default DoublyLinkedList;
