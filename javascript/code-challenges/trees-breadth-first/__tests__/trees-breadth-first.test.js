const  { Node, breadthFirst }  = require('../trees-breadth-first.js');

describe("breadthFirst", () => {
  class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }

  const tree = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);

  tree.children.push(node2);
  tree.children.push(node3);
  node2.children.push(node4);
  node3.children.push(node5);

  it("returns all values in breadth-first order", () => {
    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns an empty array for an empty tree", () => {
    expect(breadthFirst(null)).toEqual([]);
  });
  

  it("returns the value of the root node for a tree with only one node", () => {
    const singleNodeTree = new Node(10);
    expect(breadthFirst(singleNodeTree)).toEqual([10]);
  });
});
