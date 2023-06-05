'use strict';

// Represents a single node in the tree
class Node {
  constructor(value) {
    this.value = value; // Value stored in the node
    this.left = null; // Reference to the left child node
    this.right = null; // Reference to the right child node
  }
}

// Represents a binary tree
class BinaryTree {
  constructor() {
    // Initialize the tree with a null root node in order to handle an empty tree because the root node is the entry point to the tree and is the first node that is visited when traversing the tree
    this.root = null; // The root node of the tree
  }

  // Depth-first Pre-order Traversal: Visit the root node, then traverse the left subtree, then traverse the right subtree
  preOrder() {
    const result = [];
    // Call the helper function with the root node and the result array
    // The helper function will recursively traverse the tree and add the values of the nodes to the result array
    this.preOrderHelper(this.root, result);
    return result;
  }

  // Helper function for pre-order traversal
  // The helper function is recursive because it calls itself

  preOrderHelper(node, result) {
    if (node === null) return; // Base case: if the node is null, return
    result.push(node.value); // Visit the node (add its value to the result)
    this.preOrderHelper(node.left, result); // Recursively traverse the left subtree
    this.preOrderHelper(node.right, result); // Recursively traverse the right subtree
  }

  // Depth-first In-order Traversal: Traverse the left subtree, then visit the root node, then traverse the right subtree
  inOrder() {
    const result = [];
    this.inOrderHelper(this.root, result);
    return result;
  }

  // Helper function for in-order traversal
  inOrderHelper(node, result) {
    if (node === null) return; // Base case: if the node is null, return
    this.inOrderHelper(node.left, result); // Recursively traverse the left subtree
    result.push(node.value); // Visit the node (add its value to the result)
    this.inOrderHelper(node.right, result); // Recursively traverse the right subtree
  }

  // Depth-first Post-order Traversal: Traverse the left subtree, then traverse the right subtree, then visit the root node
  postOrder() {
    const result = [];
    this.postOrderHelper(this.root, result);
    return result;
  }

  // Helper function for post-order traversal
  postOrderHelper(node, result) {
    if (node === null) return; // Base case: if the node is null, return
    this.postOrderHelper(node.left, result); // Recursively traverse the left subtree
    this.postOrderHelper(node.right, result); // Recursively traverse the right subtree
    result.push(node.value); // Visit the node (add its value to the result)
  }
}

// Represents a binary search tree, which is a type of binary tree
class BinarySearchTree extends BinaryTree {
  constructor() {
    super(); // Call the constructor of the parent class (BinaryTree)
  }

  // Add a new node with the given value in the correct location in the binary search tree
  add(value) {
    this.root = this.addHelper(this.root, value);
  }

  // Helper function for adding a new node
  addHelper(node, value) {
    if (node === null) {
      // If the node is null, create a new node with the given value
      return new Node(value);
    }

    if (value < node.value) {
      // If the value is less than the current node's value, recursively add it to the left subtree
      node.left = this.addHelper(node.left, value);
    } else {
      // If the value is greater than or equal to the current node's value, recursively add it to the right subtree
      node.right = this.addHelper(node.right, value);
    }

    return node;
  }

  // Check if the value is present in the tree
  contains(value) {
    return this.containsHelper(this.root, value);
  }

  // Helper function for checking if a value is present in the tree
  containsHelper(node, value) {
    if (node === null) {
      // If the node is null, the value is not found
      return false;
    }

    if (node.value === value) {
      // If the value is equal to the current node's value, it is found
      return true;
    }

    if (value < node.value) {
      // If the value is less than the current node's value, recursively search in the left subtree
      return this.containsHelper(node.left, value);
    } else {
      // If the value is greater than the current node's value, recursively search in the right subtree
      return this.containsHelper(node.right, value);
    }
  }
}

module.exports = {
  BinarySearchTree
};

