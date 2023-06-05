const { BinarySearchTree } = require('../trees');

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('Can successfully instantiate an empty tree', () => {
    expect(bst.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    bst.add(5);
    expect(bst.root.value).toBe(5);
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    bst.add(5);
    bst.add(3);
    bst.add(7);

    expect(bst.root.left.value).toBe(3);
    expect(bst.root.right.value).toBe(7);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);

    expect(bst.preOrder()).toEqual([5, 3, 2, 4, 7, 6, 8]);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);

    expect(bst.inOrder()).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);

    expect(bst.postOrder()).toEqual([2, 4, 3, 6, 8, 7, 5]);
  });

  test('Returns true for the contains method, given an existing node value', () => {
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);

    expect(bst.contains(6)).toBe(true);
  });

  test('Returns false for the contains method, given a non-existing node value', () => {
    bst.add(5);
    bst.add(3);
    bst.add(7);

    expect(bst.contains(10)).toBe(false);
  });
});
