'use strict';

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function tree_intersection(tree1, tree2) {
  const valuesSet = new Set();
  const hashmap = {};

  // Helper function to traverse the binary tree and store values in the hashmap
  function traverseTree(node) {
    if (node) {
      hashmap[node.val] = true;
      traverseTree(node.left);
      traverseTree(node.right);
    }
  }

  // Traverse the first tree and store values in the hashmap
  traverseTree(tree1);

  // Helper function to check if a value exists in both trees
  function checkCommonValues(node) {
    if (node) {
      if (hashmap.hasOwnProperty(node.val)) {
        valuesSet.add(node.val);
      }
      checkCommonValues(node.left);
      checkCommonValues(node.right);
    }
  }

  // Check for common values in the second tree
  checkCommonValues(tree2);

  return valuesSet;
}

// Create binary tree 1
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
tree1.left.right = new TreeNode(5);

// Create binary tree 2
const tree2 = new TreeNode(3);
tree2.left = new TreeNode(5);
tree2.right = new TreeNode(6);
tree2.left.left = new TreeNode(1);
tree2.left.right = new TreeNode(7);

// Find common values in the two trees
const commonValues = tree_intersection(tree1, tree2);

console.log(commonValues);  // Output: Set { 1, 3, 5 }

module.exports = tree_intersection;
