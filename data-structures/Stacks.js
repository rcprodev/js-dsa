// STACKS

//using array (simplest)

class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    return this.items.push(val);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

export default Stack;

// linked list based implementation

/*
Time Complexity : 
            push - O(1)
            pop - O(1)
            peek - O(1)
*/
