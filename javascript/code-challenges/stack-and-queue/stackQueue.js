// Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue




// Stack
// Stacks are based on the principle of Last In First Out (LIFO). This means that the last item added to the stack must be the first item removed from it.
// Node
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Create a Stack class that has a top property. It creates an empty Stack when instantiated.

class Stack {
  constructor() {
    this.top = null;
  }
// This object should be aware of a default empty value assigned to top when the stack is created.

// Create a push(value) method that adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value) {
// Add a new node with that value to the top of the stack
    const new_node = new Node(value);

    // If the stack is empty, the node should become the top of the stack
    if (this.top === null) {
      // If the stack is not empty, the node should become the top of the stack
      this.top = new_node;
      // Make the next property of the new node point to the original top
    } else {
      new_node.next = this.top;
      this.top = new_node;
    }
  }

  // pop() - remove the node from the top of the stack, and return the node’s value.
  pop() {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  //peek() - return the value of the node located on top of the stack, without removing it from the stack
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
