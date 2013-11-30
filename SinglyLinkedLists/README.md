<h3> Singly Linked Lists </h3>
<p>Singly linked lists contain nodes which have a data field as well as a next field, which points to the next node in line</p>
<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/816px-Singly-linked-list.svg.png">

<h2>How to create one ? </h2>
```
// New Singly Linked List
var sllist = new SingleLinkedList();
// Adding Nodes
sllist.add(new Node(1));
sllist.add(new Node(2));
sllist.add(new Node(3));
// Adding and hold a node
var node3 = sllist.add(new Node(4));
// Delete the node
sllist.remove(node3);
// Reverse the list
sllist.reverse();
```