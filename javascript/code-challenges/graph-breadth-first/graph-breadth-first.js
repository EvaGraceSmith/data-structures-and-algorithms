'use strict';


class Graph {
  constructor() {
    this.nodes = [];
  }

  breadthFirst(startNode) {
    if (this.nodes.length === 0) {
      return []; // Return an empty array if the graph has no nodes
    }

    const visited = new Set(); // To keep track of visited nodes
    const queue = []; // To store nodes for BFS traversal
    const visitedOrder = []; // To store visited nodes in order

    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      visitedOrder.push(currentNode);

      currentNode.adjacentNodes.forEach((adjNode) => {
        if (!visited.has(adjNode)) {
          queue.push(adjNode);
          visited.add(adjNode);
        }
      });
    }

    return visitedOrder;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.adjacentNodes = [];
  }

  addAdjacentNode(node) {
    this.adjacentNodes.push(node);
  }
}


module.exports = { Graph, Node };
