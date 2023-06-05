class Node {
  constructor(value) {
    // Value stored in the node
    this.value = value;
// Reference to the left child node
    this.left = null;
    // Reference to the right child node
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    // Reference to the root node of the tree
    this.root = null;
  }

  findMaximumValue() {
    if (!this.root) {
      // If the tree is empty (no root node), return null
      return null;
    }

    // Variable to store the maximum value found,
    // initialized with the smallest possible value
    let max = Number.NEGATIVE_INFINITY;
 // Stack to keep track of nodes to visit, initialized with the root node
    const stack = [this.root];

    while (stack.length) {
      const node = stack.pop(); // Pop a node from the stack

      if (node.value > max) {
        // If the value of the current node is
        // greater than the current maximum value
        max = node.value; // Update the maximum value
      }

      if (node.left) {
        // If the current node has a left child
// Push the left child onto the stack for future visit
        stack.push(node.left);
      }

      if (node.right) {
        // If the current node has a right child
// Push the right child onto the stack for future visit
        stack.push(node.right);
      }
    }

    return max; // Return the maximum value found
  }
}

module.exports = { Node, BinaryTree };
