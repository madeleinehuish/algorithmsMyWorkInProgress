
// bubbleSort, selectionSort, and mergeSort. Also includes quickSort.

//Look also under Divide and Conquer for Quicksort!!!!

//need to still implement insertion sort, radix sort, heap sort and others


// //bubble sort (I modified Steven Grider's method to use es6 swapping)
function bubbleSort(arr) {
	for(let i=0; i < arr.length; i++) {
		// if (i===arr.length-1) console.log('i: ', i); //this line is only for seeing the full loop in addition to bottom console.log
		for(let j=0; j < (arr.length - i - 1); j++) {
			if(arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
			}
			// console.log('i: ', i, 'j: ', j, ' arr: ', arr);
		}
	}
	return arr;
}

//  // //selection sort, Steven Grider's method
// function selectionSort(arr) {
// 	// console.log('starting arr: ', arr);
// 	for(let i=0; i < arr.length; i++) {
// 		let indexOfMin = i;
// 		for(let j = i+1; j < arr.length; j++) {
// 			if(arr[j] < arr[indexOfMin]) {
// 				indexOfMin = j;
// 			}
// 		}
// 		if(indexOfMin !== i) {
// 			[arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
// 		}
// 		// console.log('round: ', i, ' arr=', arr);
// 	}
// 	return arr;
// }

//selection sort as derived by myself from the python in Grokking Algorithms (a few changes required for the JS)
//this version goes through array arr.length-1 times, searching for smallest each time, taking it out and putting into new array
//the original array changes so each successive loop smaller
function findSmallestIndex(arr) {
	let smallest = arr[0];
	let smallestIndex = 0;

	for(let i=0; i < arr.length; i++) {
		if(arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
}

function selectionSort(arr) {
	let newArr = [];
	let len = arr.length; //this is necessary as arr.length will change with splice below so can't be used for the loop

	for(let i=0; i < len; i++) {
		let smallestIndex = findSmallestIndex(arr);
		newArr.push(...arr.splice(smallestIndex, 1));
		// console.log('round ', i, ' arr: ', arr, ' newArr: ', newArr)
	}

	return newArr;
}



// merge sort
function mergeSort(arr) {
	if(arr.length === 1) {
		return arr;
	}
	const center = Math.floor(arr.length/2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);
	// console.log('in mergeSort, calling merge(mergeSort(left), mergeSort(right)); mergeSort(left) ',mergeSort(left), ' mergeSort(right) ', mergeSort(right))
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const results = [];
	while(left.length && right.length) {
		if(left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}
	// console.log('merge: [...results, ...left, ...right] ', [...results, ...left, ...right])
	return [...results, ...left, ...right];
}

// //quick sort
// //this is also filed under divide and conquer
// //this version uses pivot at arr[0]
// function quickSort(arr) {
// 	if(arr.length < 2) return arr;
//
// 	let pivot = arr[0]; //this is not as optimal as the random pivot below, which has been determined to be much faster
//
//   let lesser = [];
//   let greater = [];
//
//   for(let i = 1; i < arr.length; i++) { //note loop starts at 1 as pivot is at arr[0]
//     if(arr[i] < pivot) {
//       lesser.push(arr[i]);
//     } else {
//       greater.push(arr[i]);
//     }
//   }
//
//   return quickSort(lesser).concat(pivot, quickSort(greater));
// }

// //this version of quickSort uses a random pivot
// //also see https://stackoverflow.com/questions/31332438/implementing-quicksort-in-javascript-with-a-random-pivot
function quickSort(arr) {
	if(arr.length < 2) return arr;

	let pivotIndex = Math.floor(Math.random()*(arr.length-1));
	let pivot = arr[pivotIndex];

  let lesser = [];
  let greater = [];

  for(let i = 0; i < arr.length; i++) { //start index at 0 using random pivot but remember the continue statement below
		if(i===pivotIndex) continue;
    if(arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

module.exports = { bubbleSort, selectionSort, findSmallestIndex, mergeSort, merge, quickSort };

// //old way of doing before es6 with temp variable
// function bubbleSort(arr) {
// 	for(let i=0; i < arr.length; i++) {
// 		for(let j=0; j < (arr.length - i -1); j++) {
// 			if(arr[j] > arr[j+1]) {
// 				const lesser = arr[j+1];
// 				arr[j+1] = arr[j];
// 				arr[j] = lesser;
// 			}
// 		}
// 	}
// 	return arr;
// }

// // old way before es6
// function selectionSort(arr) {
//
// 	for(let i=0; i < arr.length; i++) {
// 		let indexOfMin = i;
// 		for(let j = i+1; j < arr.length; j++) {
// 			if(arr[j] < arr[indexOfMin]) {
// 				indexOfMin = j;
// 			}
// 		}
// 		if(indexOfMin !== i) {
// 			let lesser = arr[indexOfMin];
// 			arr[indexOfMin] = arr[i];
// 			arr[i] = lesser;
// 		}
// 	}
// 	return arr;
// }


//for more on quick sort see also the following site:
//http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-quicksort-algorithm/

// //this code is from the above site

// //swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }
//
// // classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
// function quicksort(array, left, right) {
//   left = left || 0;
//   right = right || array.length - 1;
//
//   // var pivot = partitionLomuto(array, left, right); // you can play with both partition
//   var pivot = partitionHoare(array, left, right); // you can play with both partition
//
//   if(left < pivot - 1) {
//     quicksort(array, left, pivot - 1);
//   }
//   if(right > pivot) {
//     quicksort(array, pivot, right);
//   }
//   return array;
// }
// // Lomuto partition scheme, it is less efficient than the Hoare partition scheme
// function partitionLomuto(array, left, right) {
//   var pivot = right;
//   var i = left;
//
//   for(var j = left; j < right; j++) {
//     if(array[j] <= array[pivot]) {
//       swap(array, i , j);
//       i = i + 1;
//     }
//   }
//   swap(array, i, j);
//   return i;
// }
// // Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
// function partitionHoare(array, left, right) {
//   var pivot = Math.floor((left + right) / 2 );
//
//   while(left <= right) {
//     while(array[left] < array[pivot]) {
//       left++;
//     }
//     while(array[right] > array[pivot]) {
//       right--;
//     }
//     if(left <= right) {
//       swap(array, left, right);
//       left++;
//       right--;
//     }
//   }
//   return left;
// }
//
// console.log(quicksort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
//
// // Version with counters
// // sample of arrays to sort
// var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//
// var countOuter = 0;
// var countInner = 0;
// var countSwap = 0;
//
// function resetCounters() {
//   countOuter = 0;
//   countInner = 0;
//   countSwap = 0;
// }
//
// // basic implementation (pivot is the first element of the array)
// function quicksortBasic(array) {
//   countOuter++;
//   if(array.length < 2) {
//     return array;
//   }
//
//   var pivot = array[0];
//   var lesser = [];
//   var greater = [];
//
//   for(var i = 1; i < array.length; i++) {
//     countInner++;
//     if(array[i] < pivot) {
//       lesser.push(array[i]);
//     } else {
//       greater.push(array[i]);
//     }
//   }
//
//   return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
// }
//
// quicksortBasic(arrayRandom.slice()); // => outer: 13 inner: 25 swap: 0
// console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
// resetCounters();
//
// quicksortBasic(arrayOrdered.slice()); // => outer: 19 inner: 45 swap: 0
// console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
// resetCounters();
//
// quicksortBasic(arrayReversed.slice()); // => outer: 19 inner: 45 swap: 0
// console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
// resetCounters();
//
// // swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }
//
// // classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
// function quicksort(array, left, right) {
//   countOuter++;
//   left = left || 0;
//   right = right || array.length - 1;
//
//   // var pivot = partitionLomuto(array, left, right); // you can play with both partition
//   var pivot = partitionHoare(array, left, right); // you can play with both partition
//
//   if(left < pivot - 1) {
//     quicksort(array, left, pivot - 1);
//   }
//   if(right > pivot) {
//     quicksort(array, pivot, right);
//   }
//   return array;
// }
// // Lomuto partition scheme, it is less efficient than the Hoare partition scheme
// function partitionLomuto(array, left, right) {
//   var pivot = right;
//   var i = left;
//
//   for(var j = left; j < right; j++) {
//     countInner++;
//     if(array[j] <= array[pivot]) {
//       countSwap++;
//       swap(array, i , j);
//       i = i + 1;
//     }
//   }
//   countSwap++;
//   swap(array, i, j);
//   return i;
// }
// // Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
// function partitionHoare(array, left, right) {
//   var pivot = Math.floor((left + right) / 2 );
//
//   while(left <= right) {
//     countInner++;
//     while(array[left] < array[pivot]) {
//       left++;
//     }
//     while(array[right] > array[pivot]) {
//       right--;
//     }
//     if(left <= right) {
//       countSwap++;
//       swap(array, left, right);
//       left++;
//       right--;
//     }
//   }
//   return left;
// }
//
// quicksort(arrayRandom.slice());
// // => Hoare: outer: 9 inner: 12 swap: 12 - Lomuto: outer: 10 inner: 35 swap: 28
// console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
// resetCounters();
//
// quicksort(arrayOrdered.slice());
// // => Hoare: outer: 9 inner: 9 swap: 9 - Lomuto: outer: 9 inner: 45 swap: 54
// console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
// resetCounters();
//
// quicksort(arrayReversed.slice());
// // => Hoare: outer: 9 inner: 13 swap: 13 - Lomuto: outer: 10 inner: 54 swap: 39
// console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
// resetCounters();
