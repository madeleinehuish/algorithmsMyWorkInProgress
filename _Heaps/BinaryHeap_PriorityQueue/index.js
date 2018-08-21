/* Heaps */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

// heap visualization
// https://www.cs.usfca.edu/~galles/visualization/Heap.html

//next try out binomial heap and fibonacci heap

//this code was inspired by https://www.youtube.com/watch?v=dM_JHpfFITs. I re-implemented in modern class format with notes and tests

class MaxHeap {

  constructor() {
    this.heap = [null];
  }

	getHeap() {
    return this.heap;
  }

	insert(num) {
    //first of all push the num to array
		this.heap.push(num);
    //check that array length is greater than 2
		if (this.heap.length > 2) {
      //set iniitial index to work with
			let idx = this.heap.length - 1;
      //while loop checks to see if current index is greater than its parent
			while (this.heap[idx] > this.heap[Math.floor(idx/2)]) {
        //make sure index stays 1 or higher
				if (idx >= 1) {
          //exchange current index with its parent
					[this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
          //bump idx to its parent index (so it can check higher up chain)
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};

	remove() {
		//first of all capture the greatest value to return
		let greatest = this.heap[1];
		//check if heap length > 2
		if (this.heap.length > 2) {
			//set first value to last value then cut off last value
			this.heap[1] = this.heap[this.heap.length - 1];
			this.heap.splice(this.heap.length - 1);
			//quick check if length === 3 just do a quick swap and return
			if (this.heap.length === 3) {
				if (this.heap[1] < this.heap[2]) {
					[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
				};
				return greatest;
			};
			//otherwise set first tier to check with parent and 2 children
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			// while the parent is less than either child do the following...
			while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
				//check first if left child bigger than right child, if it is then swap left with parent
				if (this.heap[left] > this.heap[right]) {
					[this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
					//reset parent index i to its left child index
					i = 2 * i
				//otherwise swap right with the parent
				} else {
					[this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
					//reset parent index i to its right child index
					i = 2 * i + 1;
				};
				//reset children indices of left and right to their respective new positions
				left = 2 * i;
				right = 2 * i + 1;
				//escape the loop if children are now undefined
				if (this.heap[left] == undefined || this.heap[right] == undefined) {
					break;
				};
			};
		//if heap length is 2 then just take out the first value
		} else if (this.heap.length === 2) {
			this.heap.splice(1, 1);
		//else heap length is less than 2 which means it just contains null
		} else {
			return null;
		};
		//return the greatest value (top of the heap)
		return greatest;
	};

};


class MinHeap {

  constructor() {
    this.heap = [null];
  }

  getHeap() {
    return this.heap;
  }

	insert(num) {
		this.heap.push(num);
		if (this.heap.length > 2) {
			let idx = this.heap.length - 1;
			while (this.heap[idx] < this.heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};

	remove() {
		let smallest = this.heap[1];
		if (this.heap.length > 2) {
			this.heap[1] = this.heap[this.heap.length - 1];
			this.heap.splice(this.heap.length - 1);
			if (this.heap.length === 3) {
				if (this.heap[1] > this.heap[2]) {
					[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
				if (this.heap[left] < this.heap[right]) {
					[this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
					i = 2 * i
				} else {
					[this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (this.heap[left] == undefined || this.heap[right] == undefined) {
					break;
				};
			};
		} else if (this.heap.length === 2) {
			this.heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

	sort() {
		let result = new Array();
		while (this.heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};

};


module.exports = { MaxHeap, MinHeap };
