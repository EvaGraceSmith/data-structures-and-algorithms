'use strict';

const { Graph, Node } = require('../graph-breadth-first');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();

    // Create nodes
    const nodeA = new Node('A');
    const nodeB = new Node('B');
    const nodeC = new Node('C');
    const nodeD = new Node('D');
    const nodeE = new Node('E');
    const nodeF = new Node('F');

    // Connect nodes
    nodeA.addAdjacentNode(nodeB);
    nodeA.addAdjacentNode(nodeC);
    nodeB.addAdjacentNode(nodeD);
    nodeB.addAdjacentNode(nodeE);
    nodeC.addAdjacentNode(nodeF);

    graph.nodes.push(nodeA, nodeB, nodeC, nodeD, nodeE, nodeF);
  });

  describe('breadthFirst', () => {
    it('returns the correct collection of nodes for a given starting node', () => {
      const startNode = graph.nodes[0]; // Starting node A
      const visitedNodes = graph.breadthFirst(startNode);

      expect(visitedNodes).toHaveLength(6);
      expect(visitedNodes[0]).toBe(startNode);
      expect(visitedNodes).toEqual([
        startNode,
        graph.nodes[1], // Node B
        graph.nodes[2], // Node C
        graph.nodes[3], // Node D
        graph.nodes[4], // Node E
        graph.nodes[5], // Node F
      ]);
    });

    it('returns an empty collection if the graph has no nodes', () => {
      graph.nodes = []; // Empty the graph

      const startNode = new Node('A');
      const visitedNodes = graph.breadthFirst(startNode);

      expect(visitedNodes).toHaveLength(0);
      expect(visitedNodes).toEqual([]);
    });

    it('returns a collection with a single node if the graph has only one node', () => {
      graph.nodes = [new Node('A')]; // Only one node in the graph

      const startNode = graph.nodes[0];
      const visitedNodes = graph.breadthFirst(startNode);

      expect(visitedNodes).toHaveLength(1);
      expect(visitedNodes[0]).toBe(startNode);
      expect(visitedNodes).toEqual([startNode]);
    });
  });
});
