function addTogetherLinkedLists(list1, list2, carryOver) {
  // Given two linked lists add together the values in order e.g. (1 > 3 > 8) & (9 > 4 > 7) = (1 > 8 > 5 > 1)
  
  // Base case for if we've exhausted both lists and no 1 carried
  if (list1 === null && list2 === null && carryOver === 0) {
    return null;
  }
  // Make a new node
  var resultNode = new Node(null);
  var currentNumber = carryOver;
  
  if (list1 !== null) {
    currentNumber += list1.value;
  }
  if (list2 !== null) {
    currentNumber += list2.value;
  }
  // Computer remainder from adding carryOver, and both values
  resultNode.value = currentNumber % 10;
  // If either list still has values
  if (list1 !== null || list2 !== null) {
    // Recurse while advancing the pointers in list(s) and carry the 1
    var additionalNodes = addTogetherLinkedLists(list1 !== null ? list1.next : null, list2 !== null ? list2.next : null, Math.floor(currentNumber / 10));
    
    resultNode.next = additionalNodes;
  }
  // Return new linked list
  return resultNode;
}