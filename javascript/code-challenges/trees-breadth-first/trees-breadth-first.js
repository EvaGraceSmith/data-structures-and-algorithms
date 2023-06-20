'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function breadthFirst(tree) {
if (!tree) {
    // If the tree is empty (no root node), return an empty array
    return [];
  }

  const result = []; // Array to store the values encountered
  const queue = [tree]; // Queue to track the nodes to visit

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Remove the first node from the queue

    result.push(currentNode.value); // Add the value to the result array

    // Add the child nodes to the queue
    for (const child of currentNode.children) {
      queue.push(child);
    }
  }

  return result;
}

module.exports = { Node, breadthFirst };
