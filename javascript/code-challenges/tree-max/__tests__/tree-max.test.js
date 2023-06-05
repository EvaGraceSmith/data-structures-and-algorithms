const { BinaryTree, Node } = require('../tree-max.js'); 

describe('BinaryTree', () => {
  describe('findMaximumValue', () => {
    test('should return the maximum value in the tree', () => {
      const tree = new BinaryTree();
      tree.root = new Node(5);
      tree.root.left = new Node(3);
      tree.root.right = new Node(9);
      tree.root.left.left = new Node(2);
      tree.root.left.right = new Node(8);
      tree.root.right.left = new Node(4);
      tree.root.right.right = new Node(7);

      const maxValue = tree.findMaximumValue();
      expect(maxValue).toBe(9);
    });

    test('should return null for an empty tree', () => {
      const tree = new BinaryTree();

      const maxValue = tree.findMaximumValue();
      expect(maxValue).toBeNull();
    });

    test('should return the maximum value when there is only one node', () => {
      const tree = new BinaryTree();
      tree.root = new Node(42);

      const maxValue = tree.findMaximumValue();
      expect(maxValue).toBe(42);
    });

    // Add more test cases if needed
  });
});
