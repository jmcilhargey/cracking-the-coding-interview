// To implement a stack with mins, we can either store 1 min and then spend 0(n) if that min is popped from stack
// Another option shown here is to keep a separate stack for mins that updates as we push and pop from the stack
function StackWithMin() {
  this.values = [];
  this.mins = [];
}

StackWithMin.prototype.push = function(value) {
  // Check if no mins or if value is <= our min
  if (value <= this.mins[this.mins.length - 1] || !this.mins.length) {
    this.mins.push(value);
  }
  this.values.push(value);
};

StackWithMin.prototype.pop = function() {
  
  var poppedValue = this.values.pop();
  // If the popped value is our min, we need to update our min list
  if (poppedValue === this.mins[this.mins.length - 1]) {
    this.mins.pop();
  }
  return poppedValue;
};

StackWithMin.prototype.peek = function() {
  return this.values[this.values.length - 1];
};

StackWithMin.prototype.min = function() {
  
  if (!this.min.length) {
    throw new Error("No minimum value");
  }
  
  return this.min[this.min.length - 1];
};
