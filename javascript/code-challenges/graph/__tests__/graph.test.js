const Graph = require('../graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('Node can be successfully added to the graph', () => {
    graph.addNode('A');
    expect(graph.getNodes()).toContain('A');
  });

  test('An edge can be successfully added to the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B', 5);
    const neighborsA = graph.getNeighbors('A');
    const neighborsB = graph.getNeighbors('B');

    expect(neighborsA.length).toBe(1);
    expect(neighborsA[0].node).toBe('B');
    expect(neighborsA[0].weight).toBe(5);

    expect(neighborsB.length).toBe(1);
    expect(neighborsB[0].node).toBe('A');
    expect(neighborsB[0].weight).toBe(5);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    const nodes = graph.getNodes();

    expect(nodes.length).toBe(3);
    expect(nodes).toContain('A');
    expect(nodes).toContain('B');
    expect(nodes).toContain('C');
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('A', 'B', 5);
    graph.addEdge('B', 'C', 3);
    const neighborsA = graph.getNeighbors('A');
    const neighborsB = graph.getNeighbors('B');
    const neighborsC = graph.getNeighbors('C');

    expect(neighborsA.length).toBe(1);
    expect(neighborsA[0].node).toBe('B');
    expect(neighborsA[0].weight).toBe(5);

    expect(neighborsB.length).toBe(2);
    expect(neighborsB[0].node).toBe('A');
    expect(neighborsB[0].weight).toBe(5);
    expect(neighborsB[1].node).toBe('C');
    expect(neighborsB[1].weight).toBe(3);

    expect(neighborsC.length).toBe(1);
    expect(neighborsC[0].node).toBe('B');
    expect(neighborsC[0].weight).toBe(3);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B', 5);
    const neighbors = graph.getNeighbors('A');
    expect(neighbors[0].weight).toBe(5);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    expect(graph.size()).toBe(3);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    graph.addNode('A');
    graph.addEdge('A', 'A', 5);
    const neighbors = graph.getNeighbors('A');
    expect(neighbors.length).toBe(2);
    expect(neighbors[0].node).toBe('A');
    expect(neighbors[0].weight).toBe(5);
  });
});
