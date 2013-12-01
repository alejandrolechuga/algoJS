function Node(value) {
  this.next = null;
  this.previous = null;
  this.value = value;
}

function DoubleLinkedList() {
  this.first;
  this.last;
}

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
};

DoubleLinkedList.prototype.addAtEnd = function(node) {
  var hold;
  if (this.last) {
    hold = this.last;
    this.last = node;
    hold.next = this.last;
    this.last.previous = hold;
  } else {
    this.last = node;
    this.last = node;
  }
};
