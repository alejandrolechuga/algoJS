/**
* @class Node
* @constructor
*/
function Node(value) {
  this.next = null;
  this.previous = null;
  this.value = value;
}

/**
* Double Linked List
* @class DoubleLinkedList
* @constructor
*/
function DoubleLinkedList() {
  this.first;
  this.last;
}

/**
* Adds data-nodes at the beginning of the list
* @method addAtBeginning
* @param Node
* @return Node
*/
DoubleLinkedList.prototype.addAtBeginning = function (node) {
  var hold;
  if (this.first) {
    hold = this.first;
    this.first = node;
    hold.previous = this.first;
    this.first.next = hold;
  } else {
    this.first = node;
    this.last = node;
  }
   return node;
};

/**
* Adds data-nodes at the end of the list
* @method addAtEnd
* @param Node
* @return Node
*/
DoubleLinkedList.prototype.addAtEnd = function(node) {
  var hold;
  if (this.last) {
    hold = this.last;
    this.last = node;
    hold.next = this.last;
    this.last.previous = hold;
  } else {
    this.first = node;
    this.last = node;
  }
  return node;
};

/**
* Removes an specific node
* @method remove
* @param Node
* @return Node
*/
DoubleLinkedList.prototype.remove = function (node) {
  if (!node.previous) {
    this.first = node.next;
  } else {
    node.previous.next = node.next;
  }

  if (!node.next) {
    this.last = node;
  } else {
    node.next.previous = node.previous;
  }
   return node;
};

