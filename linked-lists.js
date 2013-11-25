// Computer Science with JavaScript

// Simple linked list 
// First node
var node = {
	data: 1,
	next: null
};
// Setting a value
node.data = 1;

// Adding a second node and value 
node.next = {
	data: 2,
	next: null 
};

// LinkedList type 
function LinkedList() {
	// Number of items
	this.length = 0;
	// First element of list 
	this.head = null;
}
// LinkedList Methods 
LinkedList.prototype = {
	/**
	* @method add 
	* @param data 
	*/
	add: function (data) {
		// Node with data
		var 
				node 
			, current;

		// Our new node 	
		node = {
			data: data,
			next: null
		};

		// If the linkedList doesn't have a head
		// add the first one
		if (this.head === null) {
			this.head = node;
		} else {
			// Setting the current node
			current = this.head; 
			// Traverse the nodes until getting the tail node
			while (current.next) {
				// Everytime we find a next node with assign it to current
				current = current.next;
			}
			current.next = node;
		}
		// On every new node we increment our length
		this.length++;
	},

	/**
	* @method item
	* @param index
	* @return data
	*/
	item: function (index) {
		// If the index in within the range
		if (index >= 0 && index < this.length) {
			var 
				current = this.head
			, i = 0;
			// We traverse the nodes untile the index
			while(i < index) {
				// Assigning the next itemt to the current
				current = current.next;
				i++;
			}
			// Returning the current data
			return current.data;
		} else {
			return null;
		}
	},

	/**
	* @method remove
	* @param index 
	*/
	remove: function (index) {
		if (index >= 0 && index < this.length)	{
			var 
				current = this.head
			, previous
			, i = 0;

			// If the index is the firs element
			if (i == 0) {
				// If the current.next doesn't exust this.head will be null
				this.head = current.next;
			} else {
				// Traverse the items and holding the previous and current
				while(i < index) {
					previous = current;
					current = current.next; 
					i++;
				}
				previous.next = current.next;
			}
			this.length --;
		}
	}
};

var linkedlist = new LinkedList();
linkedlist.add(12);
linkedlist.add(14);
linkedlist.add(15);
linkedlist.add(18);
console.log(linkedlist.item(0));
//linkedlist.remove(1);
console.log(linkedlist);
linkedlist.remove(0);
console.log(linkedlist);

