const tree_intersection = require('../tree-intersection.js');


// Define the TreeNode class
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

describe('tree_intersection', () => {
  it('should return the set of common values in two binary trees', () => {
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

    // Assert the common values
    expect(commonValues instanceof Set).toBe(true);
    expect(commonValues.size).toBe(3);
    expect(commonValues.has(1)).toBe(true);
    expect(commonValues.has(3)).toBe(true);
    expect(commonValues.has(5)).toBe(true);
  });
});
