// Define the Node class to represent nodes in the k-ary tree
class Node {
  constructor(value) {
    this.value = value; // Value of the node
    this.children = []; // Array to store child nodes
  }
}

// Function to perform FizzBuzz transformation on a k-ary tree
function fizzBuzzTree(tree) {
  if (!tree) {
    return null; // If input tree is empty, return null
  }

  // Step 1: Create a new Node instance with the converted value for the root node
  const root = new Node(convertValue(tree.value));

  // Step 2: Recursively traverse each child node of the input tree
  for (let child of tree.children) {
    // Step 3: Create a new Node instance with the converted value for each child node
    root.children.push(fizzBuzzTree(child)); // Step 4: Recursively process the child nodes
  }

  // Step 5: Return the newly created tree with modified values
  return root;
}

// Helper function to convert node value based on FizzBuzz rules
function convertValue(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "FizzBuzz"; // If value is divisible by both 3 and 5, replace with "FizzBuzz"
  } else if (value % 3 === 0) {
    return "Fizz"; // If value is divisible by 3, replace with "Fizz"
  } else if (value % 5 === 0) {
    return "Buzz"; // If value is divisible by 5, replace with "Buzz"
  } else {
    return String(value); // If value is not divisible by 3 or 5, convert to string
  }
}

module.exports = { Node, fizzBuzzTree, convertValue };
