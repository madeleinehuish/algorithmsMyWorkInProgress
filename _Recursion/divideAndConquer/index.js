// find the sum of all members of an array using recursion/divide and conquer
function sum(arr) {
	if(arr.length===0) return 0;
	if(arr.length===1) return arr[0];

	return arr[0] + sum(arr.splice(1));
}

//this is also filed under sorting, see below for version using the random pivot (which is faster)
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

// // //this version of quickSort uses a random pivot
// // //also see https://stackoverflow.com/questions/31332438/implementing-quicksort-in-javascript-with-a-random-pivot
// function quickSort(arr) {
// 	if(arr.length < 2) return arr;
//
// 	let pivotIndex = Math.floor(Math.random()*(arr.length-1));
// 	let pivot = arr[pivotIndex];
//
//   let lesser = [];
//   let greater = [];
//
//   for(let i = 0; i < arr.length; i++) { //start index at 0 using random pivot but remember the continue statement below
// 		if(i===pivotIndex) continue;
//     if(arr[i] < pivot) {
//       lesser.push(arr[i]);
//     } else {
//       greater.push(arr[i]);
//     }
//   }
//
//   return quickSort(lesser).concat(pivot, quickSort(greater));
// }
