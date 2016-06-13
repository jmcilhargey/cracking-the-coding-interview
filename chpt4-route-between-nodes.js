function findRouteBetweenNodes(rootNode, startNode, endNode) {
  
  if (startNode === endNode) {
    return true;
  }
  // See reference files for queue class
  var queueOfNodes = new Queue();
  queueOfNodes.enqueue(startNode);
  
  while (queueOfNodes.length) {
    var currentNode = queueOfNodes.dequeue;
    
    if (currentNode !== null) {
      // Since this is a graph, it's connections are represented by an array nodes
      currentNode.edges.forEach(function(edge)
        // To prevent an infinite loop from cycles, edges need a property/enum to tell if they've been visited
        if (!edge.visited) {
          if (edge.node === endNode) {
            return true;
          } else {
            queueOfNodes.enqueue(edge);
          }
        }
      });
      edge.visited = true;
    }
  }
}