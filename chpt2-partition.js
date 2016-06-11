function partitionListAroundValue(headNode, pivotValue) {
  // Nodes < pivotValue need to come before nodes >= pivotValue
  
  var currentNode = headNode;
  var smallerList = null;
  var smallerListStart = null;
  var largerList = null;
  var largerListStart = null;
  
  while (currentNode) {
    var nextNode = currentNode.next;
    
    if (currentNode.value < value) {
      // Smaller so add to smaller list
      if (smallerList === null) {
        smallerList = currentNode;
        smallerListStart = currentNode;
      } else {
        smallerList.next = currentNode;
      }
    } else {
      // Larger or equal add to bigger list
      if (largerList === null) {
        largerList = currentNode;
        largerListStart = currentNode;
      } else {
        largerList.next = currentNode;
      }
    }
    currentNode = nextNode;
  }
  // Now we stitch together the two lists since we tracked the end of smaller list and start of bigger list
  smallerList.next = largerListStart;
  // Retrieve the head of the new list
  return smallerListStart;
}
