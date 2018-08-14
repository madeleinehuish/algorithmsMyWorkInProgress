//reverse an array without a built in function

// function reverseArray(arr) {
// 	let reversed =[];
// 	for (let i = arr.length -1; i >= 0; i--) {
// 		reversed.push(arr[i]);
// 	}
// 	return reversed;
// }

// function reverseArray(arr) {
// 	return arr.reduce((acc, cur) => {
// 		return [cur].concat(acc);
// 	}, [])
// }

function reverseArray(arr) {
	return arr.reduce((acc, cur) => {
		return [cur, ...acc];
	}, [])
}

// function reverseArray(arr) {
// 	return arr.reverse();
// }

// function reverseArray(arr) {
// 	let reversed = [];
// 	let counter = arr.length -1;
// 	for (let i = 0; i < arr.length; i++) {
// 		reversed[i] = arr[counter];
// 		counter--;
// 	}
// 	return reversed;
// }

module.exports = reverseArray;
