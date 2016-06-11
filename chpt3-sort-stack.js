function Stack() {
  this.values = [];
}

Stack.prototype.push = function(value) {
  this.values.push(value);
};

Stack.prototype.pop = function() {
  return this.values.pop();
};

Stack.prototype.peek = function() {
  return this.values[this.values.length - 1];
};

Stack.prototype.isEmpty = function() {
  return this.values.length === 0;
};

// We want to sort a stack so that the smallest values are on the top using only 1 additional stack

var exampleStack = new Stack();
exampleStack.push(1);
exampleStack.push(6);
exampleStack.push(2);
exampleStack.push(5);
exampleStack.push(9);

function sortUnsortedStack(unsortedStack) {
  
  var orderedStack = new Stack();
  // Keep going while there are still values in our unsorted stack
  while (unsortedStack.values.length > 0) {
    // Store the top unsorted value in a variable
    var nextValue = unsortedStack.pop();
    // As long as there are values in the ordered stack that are bigger than our popped value
    while (!orderedStack.isEmpty() && nextValue < orderedStack.peek()) {
     
      unsortedStack.push(orderedStack.pop());
    }
    orderedStack.push(nextValue);
  }
  return orderedStack;
}

var ourSortedStack = sortUnsortedStack(exampleStack);

console.log(ourSortedStack.values);