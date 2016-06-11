// Our task is to build a queue using 2 stacks -- Queue is FIFO while stack is LIFO
// We use the left one to deposit new values and then the right one to reverse them so they're in order

function Queue() {
  this.leftStack = [];
  this.rightStack = [];
}

Queue.prototype.add = function(value) {
  this.leftStack.push(value);
};

Queue.prototype.remove = function() {
  // If our queue stack is empty we'll need to push things from the push stack
  if (!this.rightStack.length) {
    this.dequeue();
  }
  return this.rightStack.pop();
};

Queue.prototype.dequeue = function() {
  // Move everything from the push stack to the pop stack -- This gets us the elements in order
  while (this.leftStack.length) {
    this.rightStack.push(this.leftStack.pop());
  }
};

Queue.prototype.size = function() {
  return this.leftStack.length + this.rightStack.length;
};

Queue.prototype.peek = function() {
  if (!this.rightStack.length) {
    this.dequeue();
  }
  return this.rightStack[this.rightStack.length - 1];
};