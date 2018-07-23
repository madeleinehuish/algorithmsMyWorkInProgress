// find the sum of all members of an array using recursion/divide and conquer
function sum(arr) {
	if(arr.length===0) return 0;
	if(arr.length===1) return arr[0];

	return arr[0] + sum(arr.splice(1));
}

//this is also filed under sorting
function quickSort(arr) {
	if(arr.length < 2) return arr;

	let pivot = arr[0];
  let lesser = [];
  let greater = [];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

module.exports = { sum, quickSort };
