const { MaxHeap, MinHeap } = require('./index');

let myMaxHeap = new MaxHeap();
let myMinHeap = new MinHeap();


test('MaxHeap is a class', () => {
	expect(typeof MaxHeap.prototype.constructor).toEqual('function');
})

test('MinHeap is a class', () => {
	expect(typeof MinHeap.prototype.constructor).toEqual('function');
})

//HeapMax cases
myMaxHeap.insert(100);
myMaxHeap.insert(7);
myMaxHeap.insert(19);
myMaxHeap.insert(36);
myMaxHeap.insert(17);
myMaxHeap.insert(10);
myMaxHeap.insert(25);
myMaxHeap.insert(1);
myMaxHeap.insert(2);
let heap = myMaxHeap.getHeap();

test('MaxHeap insert correctly inserts a priority number (checking correct array length)', () => {
	expect(heap.length).toEqual(10);
})

test('MaxHeap insert correctly inserts a priority number (checks that inserted number fulfils heap requisite)', () => {
	for(let i=1; i < heap.length; i++) {
		if(heap[2*i]) {
			expect(heap[i] > heap[2*i]).toEqual(true);
		}
		if(heap[(2*i)+1]) {
			expect(heap[i] > heap[(2*i)+1])
		}
	}
})

test('MaxHeap remove correctly removes a number from heap', () => {
	myMaxHeap.remove();
	heap = myMaxHeap.getHeap();
	expect(heap.includes(100)).toEqual(false);
	myMaxHeap.remove();
	heap = myMaxHeap.getHeap();
	expect(heap.includes(36)).toEqual(false);
	expect(heap[1]).toEqual(25);
})

//HeapMin cases
myMinHeap.insert(100);
myMinHeap.insert(7);
myMinHeap.insert(19);
myMinHeap.insert(36);
myMinHeap.insert(17);
myMinHeap.insert(10);
myMinHeap.insert(25);
myMinHeap.insert(1);
myMinHeap.insert(2);
let heapMin = myMinHeap.getHeap();

test('MinHeap insert correctly inserts a priority number (checking correct array length)', () => {
	expect(heapMin.length).toEqual(10);
})

test('MinHeap insert correctly inserts a priority number (checks that inserted number fulfils heap requisite)', () => {
	for(let i=1; i < heapMin.length; i++) {
		if(heapMin[2*i]) {
			expect(heapMin[i] < heapMin[2*i]).toEqual(true);
		}
		if(heapMin[(2*i)+1]) {
			expect(heapMin[i] < heapMin[(2*i)+1])
		}
	}
})

test('MinHeap remove correctly removes a number from heap', () => {
	myMinHeap.remove();
	heapMin = myMinHeap.getHeap();
	expect(heapMin.includes(1)).toEqual(false);
	myMinHeap.remove();
	heapMin = myMinHeap.getHeap();
	expect(heapMin.includes(2)).toEqual(false);
	expect(heapMin[1]).toEqual(7);
})
