// separate array of mixed up zeros and ones into sorted array
// also separate odds and evens in array

// //quick and dirty for the ones and zeros
// function separateZerosAndOnes(arr) {
// 	return arr.sort();
// }

//more realistic in how they might expect us to solve
function separateZerosAndOnes(arr) {
	let arr0 = [];
	let arr1 = [];
	let arr2 = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i]===0) {
			arr0.push(0);
		}	else if (arr[i]===1) {
			arr1.push(1);
		} else {
			arr2.push(arr[i]);
		}
	}

	return [...arr0, ...arr1, ...arr2];
}

function separateEvenAndOdds(arr) {
	let odds = [];
	let evens = [];

	for(let i = 0; i < arr.length; i++) {
		if(arr[i]%2===0) {
			evens.push(arr[i]);
		} else {
			odds.push(arr[i]);
		}
	}

	return [...odds, ...evens];
}

module.exports =  { separateZerosAndOnes, separateEvenAndOdds };
