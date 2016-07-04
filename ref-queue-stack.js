// Example linked list class (singly)
function LinkedListNode(value) {
	this.value;
	this.next = null;
}
// Example binary search tree
function BinarySearchTree(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insertLeft = function(value) {
	this.left = new BinarySearchTree(value);
	return this.left;
};

BinarySearchTree.prototype.insertRight = function(value) {
	this.right = new BinarySearchTree(value);
	return this.right;
};

// Example stack
function Stack() {

	this.data = [];
	this.top = 0;
}

Stack.prototype.push = function(element) {
	this.data[this.top++] = element;
};

Stack.prototype.pop = function() {
	return this.data[--this.top];
};

Stack.prototype.peek = function() {
	return this.data[this.top - 1];
};

Stack.prototype.clear = function() {
	this.top = 0;
};

Stack.prototype.length = function() {
	return this.top;
};
// Example queue
function Queue() {
	this.data = [];
}

Queue.prototype.enqueue = function(element) {
	this.data.push(element);
};

Queue.prototype.dequeue = function(element) {
	this.data.shift();
};

Queue.prototype.front = function() {
	return this.data[0];
};

Queue.prototype.back = function() {
	return this.data[this.data.length - 1];
};

queue.prototype.empty = function() {
	if (this.data.length == 0) {
		return true;
	} else {
		return false;
	}
};
// Example hash table class
function HashTable() {
		this.table = new Array(137);
}


