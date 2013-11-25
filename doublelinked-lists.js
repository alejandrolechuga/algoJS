function DoblyLinkedList () {
	this.head = null;
	this.tail = null;
}

DoblyLinkedList.prototype = {
	add: function (data) {
		var node
		, current
		, previous; 

		node = {
			data: data, 
			next: null,
			previous: null
		};

		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			//current = this.head; 
			previous = this.tail;
			this.tail = node;
			node.previous = previous;
			node.next =  prep
		}
		this.length++;
	}
	insertAfter: function() {},
	insertBefore: function () {},
	insertBegining: function () {},
	remove: function () {}
};