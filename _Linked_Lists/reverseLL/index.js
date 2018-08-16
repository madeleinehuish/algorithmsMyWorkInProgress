//reverse a linked list iterative solution

function reverse(list) {
	let current = list.head;
	let next = null;
	let prev = null;

	while(current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	list.head = prev;

	return list;
}

// //another way to think about it
// function reverse(list) {
// 	let node2 = list.head;
// 	let node3 = null;
// 	let node1 = null;
//
// 	while(node2) {
// 		node3 = node2.next;
// 		node2.next = node1;
// 		node1 = node2;
// 		node2 = node3;
// 	}
//
// 	list.head = node1;
//
// 	return list;
// }

module.exports = reverse;
