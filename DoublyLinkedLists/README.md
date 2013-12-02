<h2> Doubly Linked Lists </h2>
 Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes
 <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/1220px-Doubly-linked-list.svg.png">
 
 <h2>Create a doubly Linked List</h2>
 ```javascript
// New Double Linked List
var dll = new DoubleLinkedList();
// Add Items at the beginning
dll.addAtBeginning(new Node(1));
dll.addAtBeginning(new Node(2));
// Hold a node
var node3 = dll.addAtBeginning(new Node(3));
dll.addAtBeginning(new Node(4));
// Remove a node
dll.remove(node3);
// Add node at the end
dll.addAtEnd(node3);
console.log(dll);
 ```
