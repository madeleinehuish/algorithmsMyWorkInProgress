//1. build arrays
//2. setup variables, counter===1, startRow===0, startColumn===0, endRow===n-1, endCol===n-1
//3. while (startRow <== endRow && startCol <== endCol)
//4. repeat this for each dir : set up for loop , add to each point in array, adjust one of 4 main variables

function matrix(n) {
	let result = [];
	for (let i =0; i < n; i++) {
		result.push([]);
	}
	let counter = n*n;
	let startRow = 0;
	let endRow = n - 1;
	let startCol = 0;
	let endCol = n -1;

	while(startRow <= endRow && startCol <= endCol) {
		for(let col = startCol; col <= endCol; col++) {
			result[startRow][col] = counter;
			counter--;
		}
		startRow++;
		for(let row = startRow; row <= endRow; row++) {
			result[row][endCol] = counter;
			counter--;
		}
		endCol--;
		for(let col = endCol; col >= startCol; col--) {
			result[endRow][col] = counter;
			counter--;
		}
		endRow--;
		for(let row = endRow; row >= startRow; row--) {
			result[row][startCol] = counter;
			counter--;
		}
		startCol++;
	}
	return result;
}

//create a function that takes a root and possibly any function to call on all nodes
//set up a working array and start it with root
//set up a while arr.length
//inside of while loop pull nodes out of array and push their children to the array
//call any function on array

//works with a queue
function BFT(root, fn) {
	let arr = [root];
	while(arr.length) {
		let node = arr.shift();
		arr.push(...node.children);
		fn(node);
	}
}

//works with a stack
function DFT(root, fn) {
	let arr = [root];
	while(arr.length) {
		let node = arr.shift();
		arr.unshift(...node.children);
		fn(node);
	}
}

//let sum = 0
//while n>0
// sum += n%10
// n = Math.floor(n/10)
//return sum
function sumOfAllDigits(n) {
	let sum = 0;
	while(n>0) {
		sum += n%10;
		n = Math.floor(n/10);
	}
	return sum;
}
