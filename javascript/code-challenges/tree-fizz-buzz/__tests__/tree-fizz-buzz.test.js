const { fizzBuzzTree, Node, convertValue } = require('../tree-fizz-buzz.js');



describe('fizzBuzzTree', () => {
  test('returns a new tree with modified values based on FizzBuzz rules', () => {
    // Create the original k-ary tree
    const tree = new Node(15);
    tree.children.push(new Node(3));
    tree.children.push(new Node(5));
    tree.children.push(new Node(7));
    tree.children[0].children.push(new Node(9));
    tree.children[1].children.push(new Node(10));
    tree.children[2].children.push(new Node(15));

    // Create the expected modified tree
    const expectedTree = new Node("FizzBuzz");
    expectedTree.children.push(new Node("Fizz"));
    expectedTree.children.push(new Node("Buzz"));
    expectedTree.children.push(new Node("7"));
    expectedTree.children[0].children.push(new Node("Fizz"));
    expectedTree.children[1].children.push(new Node("Buzz"));
    expectedTree.children[2].children.push(new Node("FizzBuzz"));

    // Call the fizzBuzzTree function
    const modifiedTree = fizzBuzzTree(tree);

    // Compare the modified tree with the expected tree
    expect(modifiedTree).toEqual(expectedTree);



        // Tree with no nodes
        const emptyTree = null;
        const expectedEmptyTree = null;
        const modifiedEmptyTree = fizzBuzzTree(emptyTree);
        expect(modifiedEmptyTree).toEqual(expectedEmptyTree);

        //  Tree with nodes only on one side
        const treeWithOneSide = new Node(3);
        treeWithOneSide.children.push(new Node(6));
        treeWithOneSide.children[0].children.push(new Node(9));
        treeWithOneSide.children[0].children[0].children.push(new Node(12));
        const expectedTreeWithOneSide = new Node("Fizz");
        expectedTreeWithOneSide.children.push(new Node("Fizz"));
        expectedTreeWithOneSide.children[0].children.push(new Node("Fizz"));
        expectedTreeWithOneSide.children[0].children[0].children.push(new Node("Fizz"));
        const modifiedTreeWithOneSide = fizzBuzzTree(treeWithOneSide);
        expect(modifiedTreeWithOneSide).toEqual(expectedTreeWithOneSide);

        //  Tree with negative numbers
        const treeWithNegativeNumbers = new Node(-15);
        treeWithNegativeNumbers.children.push(new Node(-3));
        treeWithNegativeNumbers.children.push(new Node(-5));
        treeWithNegativeNumbers.children[0].children.push(new Node(-9));
        treeWithNegativeNumbers.children[1].children.push(new Node(-10));
        treeWithNegativeNumbers.children[0].children[0].children.push(new Node(-15));
        const expectedTreeWithNegativeNumbers = new Node("FizzBuzz");
        expectedTreeWithNegativeNumbers.children.push(new Node("Fizz"));
        expectedTreeWithNegativeNumbers.children.push(new Node("Buzz"));
        expectedTreeWithNegativeNumbers.children[0].children.push(new Node("Fizz"));
        expectedTreeWithNegativeNumbers.children[1].children.push(new Node("Buzz"));
        expectedTreeWithNegativeNumbers.children[0].children[0].children.push(new Node("FizzBuzz"));
        const modifiedTreeWithNegativeNumbers = fizzBuzzTree(treeWithNegativeNumbers);
        expect(modifiedTreeWithNegativeNumbers).toEqual(expectedTreeWithNegativeNumbers);


  });
});

