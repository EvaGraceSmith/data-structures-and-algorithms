class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack(); // Stack for enqueue operation
    this.stack2 = new Stack(); // Stack for dequeue operation
  }

  enqueue(value) {
    // Move all elements from stack2 to stack1
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    // Push the new value to stack1
    this.stack1.push(value);
  }

  dequeue() {
    // If both stacks are empty, return null
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      return null;
    }

    // Move all elements from stack1 to stack2 (in reverse order)
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    // Pop and return the top element from stack2
    return this.stack2.pop();
  }
}

module.exports = {
  Stack,
  PseudoQueue,
};
