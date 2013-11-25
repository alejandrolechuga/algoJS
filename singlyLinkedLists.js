
function Node(value) {
  this.next = null;
  this.value = value;
}

function SingleLinkedList () {
  this.first = null;
};

SingleLinkedList.prototype.add = function (node) {
  var current; 
  // Checking first if exists 
  if (this.first === null) {
    this.first = node;
  } else {
    // Starting with our first node as current
    current = this.first;
    // Traverse all the nodes until we get a null value which means we reach the tail
    while(!!current.next) {
      current = current.next;
    }
    // add the new node
    current.next = node;
  }
  return node;
};

SingleLinkedList.prototype.remove = function (node) {
  var 
    current 
  , previous; 

  // starting with the first node
  current = this.first;
  // checking if the first reference its equal to the node
  if (current == node) {
    // we change the reference 
    this.first = current.next;
  } else {
    // while current is different from null
    while(!!current) {
      // we hold the previous value
      previous = current;
      // we swap the current value 
      current = current.next;
      // if the current value is the node 
      if (current === node) {
        // we remove it by changing the next reference
        previous.next = current.next;
        break;
      }
    }
  }
  return node;
};
// [ f ] [ 1 ] [ 2 ]
// [ 1 ] [ f ] [ 2 ]
// [ 1 ] [ 2 ] [ f ]
// [ 2 ] [ 1 ] [ f ]

 SingleLinkedList.prototype.reverse = function (Node) {
  var 
    current
  , previous
  , firsthold;
  current = this.first;
  while (current) {
    previous = current;
    current = current.next;
    this.first = current;
    this.first.next = previous;
  }
};

var sllist = new SingleLinkedList();
sllist.add(new Node(1));
sllist.add(new Node(2));
sllist.add(new Node(3));
var node3 = sllist.add(new Node(4));
sllist.remove(node3);
sllist.reverse();
console.log(sllist.first);