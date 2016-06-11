// Here is the base stack class
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
// Checks if current stack has reached max capicity of 10 values
Stack.prototype.isFull = function() {
  return this.values.length >= 10;
};
// Make a stack of stacks
function SetOfStacks() {
  this.set = [new Stack()];
}
// Gets the last stack so we can push values to it
SetOfStacks.prototype.getLastStack = function() {
  return this.set[this.set.length - 1];
};

SetOfStacks.prototype.push = function(value) {

  var currentStack = this.getLastStack();
  // If current stack reaches capacity, then make a new one
  if (currentStack.isFull()) {
    this.set.push(new Stack());
    currentStack = this.getLastStack();
  }
  currentStack.push(value);
};

SetOfStacks.prototype.pop = function(value) {

  var currentStack = this.getLastStack();
  
  var poppedvalue = currentStack.pop();
  // If no values left in current stack, then pop it off the set
  if (!currentStack.values.length) {
    this.set.pop();
  }
  return poppedvalue;
};
