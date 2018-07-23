// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next=null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		// this.insertAt(data, 0);  //this works with the insertAt function
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while(node) {
			counter++;
			node = node.next
		}
		return counter;
	}

	getFirst() {
		// return this.getAt(0);
		return this.head;
	}

	getLast() {
		let node = this.head;

		if(!node) {
			return null
		}
		while(node) {
			if(!node.next) {
				return node
			}
			node = node.next;
		}
		// return this.getAt(this.size() - 1);
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head.next;
	}

	removeLast() {
		//size === 0
		if(!this.head) {
			return;
		}
		//size === 1
		if(!this.head.next) {
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;
		//size > 1
		while(node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();
		if(!last) {
			this.head = new Node(data);
		} else {
			last.next = new Node(data);
		}
	}

	// insertLast(data) {  //this will work by itself but will cause some of the other methods to fail below
	// 	if(!this.head) this.head = new Node(data);
	// 	let node = this.head;
	// 	while(node.next) {
	// 		node = node.next;
	// 	}
	// 	node.next = new Node(data);
	// }

	getAt(index) {
		let counter = 0;
		let node = this.head;

		while(node) {
			if(counter===index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		return null; //couldn't find it or index out of bounds or this.head === null
	}

	removeAt(index) {
		if(!this.head) {
			return;
		}

		if(index===0) {
			this.head = this.head.next;
			return;
		}

		let node = this.getAt(index);
		if(node) {
			let previous = this.getAt(index-1);
			previous.next = node.next;
			return;
		}
		return;
	}

	insertAt(data, index) {
		if(!this.head) {
			this.head = new Node(data);
			return;
		}

		if(index===0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index-1) || this.getLast();
		previous.next = new Node(data, previous.next);
	}

	forEach(fn) {
		let counter = 0;
		let node = this.head;

		while(node) {
			fn(node, counter);
			counter++;
			node = node.next;
		}
		return;
	}

	*[Symbol.iterator]() {
		let node = this.head;

		while(node) {
			yield node;
			node = node.next;
		}
	}

	// this works but is longer for removeAt
	// removeAt(index) {
	// 	//size === 0
	// 	if(!this.head) {
	// 		return;
	// 	}
	//
	// 	if(index===0){
	// 		this.head = this.head.next;
	// 		return;
	// 	}
	//
	// 	let previous = this.head;
	// 	let node = this.head.next;
	// 	let counter = 1;
	//
	// 	while(node) {
	// 		if(counter===index) {
	// 			previous.next = node.next;
	// 			return;
	// 		}
	// 		counter++;
	// 		previous = node;
	// 		node = node.next;
	// 	}
	// 	return;
	// }
}

module.exports = { Node, LinkedList };
