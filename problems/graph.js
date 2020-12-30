class Graph {
  constructor() {
    this.adjList = {}
  }

  addVertex(vertex) {
    if(this.adjList[vertex] === undefined){
      this.adjList[vertex] = []
    }
  }

  addEdges(srcValue, destValue) {
    if(this.adjList[srcValue] === undefined) this.addVertex(srcValue)
    if(this.adjList[destValue] === undefined) this.addVertex(destValue)

    this.adjList[srcValue].push(destValue)
    this.adjList[destValue].push(srcValue)
  }

  buildGraph(edges) {
    edges.forEach(edge => {
      this.addEdges(...edge)
    })
    return this.adjList
  }

  breadthFirstTraversal(startingVertex, newArr = []) {
    if (!startingVertex) return newArr;
    const queueArr = [startingVertex];

    while (queueArr.length > 0) {

      let node = queueArr.shift();
      newArr.push(node.val);

      if (node.left) {
        queueArr.push(node.left);
      }
      if (node.right) {
        queueArr.push(node.right);
      }
    }
    console.log(newArr)
    return newArr;
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};









