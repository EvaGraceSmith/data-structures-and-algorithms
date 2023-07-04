class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, []);
    }
    return value;
  }

  addEdge(node1, node2, weight = 1) {
    if (!this.nodes.has(node1) || !this.nodes.has(node2)) {
      throw new Error('Both nodes should already be in the graph');
    }
    const neighbors1 = this.nodes.get(node1);
    const neighbors2 = this.nodes.get(node2);

    neighbors1.push({ node: node2, weight });
    neighbors2.push({ node: node1, weight });
  }

  getNodes() {
    return [...this.nodes.keys()];
  }

  getNeighbors(node) {
    if (!this.nodes.has(node)) {
      return [];
    }
    return this.nodes.get(node);
  }

  size() {
    return this.nodes.size;
  }
}


module.exports = Graph;
