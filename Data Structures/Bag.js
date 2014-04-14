function Bag() {
  this.size = 100;
  this.length = 0;
  this.head = null;
  this.Node = function () {
    this.item;
    this.next;
  }
}

Bag.prototype.add = function(item) {
  var head = this.head;
  var node = new this.Node();
  node.item = item;
  this.head = node;
  node.next = head;
  this.length++;
};

Bag.prototype.isEmpty = function () {
  return this.head === null;
};

Bag.prototype.size = function () {
  return length;
};
