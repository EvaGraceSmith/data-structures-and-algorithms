// Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

// Node
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const new_node = new Node(value);
    if (this.top === null) {
      this.top = new_node;
    } else {
      new_node.next = this.top;
      this.top = new_node;
    }
  }

  pop() {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const new_node = new Node(value);
    if (this.front === null) {
      this.front = new_node;
      this.rear = new_node;
    } else {
      this.rear.next = new_node;
      this.rear = new_node;
    }
  }

  dequeue() {
    if (this.front === null) {
      throw new Error("Queue is empty");
    }
    const value = this.front.value;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    return value;
  }

  peek() {
    if (this.front === null) {
      throw new Error("Queue is empty");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};
