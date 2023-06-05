'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Depth-first Pre-order Traversal: root -> left -> right
  preOrder() {
    const result = [];
    this.preOrderHelper(this.root, result);
    return result;
  }

  preOrderHelper(node, result) {
    if (node === null) return;
    result.push(node.value);
    this.preOrderHelper(node.left, result);
    this.preOrderHelper(node.right, result);
  }

  // Depth-first In-order Traversal: left -> root -> right
  inOrder() {
    const result = [];
    this.inOrderHelper(this.root, result);
    return result;
  }

  inOrderHelper(node, result) {
    if (node === null) return;
    this.inOrderHelper(node.left, result);
    result.push(node.value);
    this.inOrderHelper(node.right, result);
  }

  // Depth-first Post-order Traversal: left -> right -> root
  postOrder() {
    const result = [];
    this.postOrderHelper(this.root, result);
    return result;
  }

  postOrderHelper(node, result) {
    if (node === null) return;
    this.postOrderHelper(node.left, result);
    this.postOrderHelper(node.right, result);
    result.push(node.value);
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  // Add a new node with the given value in the correct location in the binary search tree
  add(value) {
    this.root = this.addHelper(this.root, value);
  }

  addHelper(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.addHelper(node.left, value);
    } else {
      node.right = this.addHelper(node.right, value);
    }

    return node;
  }

  // Check if the value is present in the tree
  contains(value) {
    return this.containsHelper(this.root, value);
  }

  containsHelper(node, value) {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this.containsHelper(node.left, value);
    } else {
      return this.containsHelper(node.right, value);
    }
  }
}
module.exports = {
  BinarySearchTree
};
