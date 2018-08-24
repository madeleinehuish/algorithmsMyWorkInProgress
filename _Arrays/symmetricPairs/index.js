
// //find correct pairs of symmetric pairs in given array and return an array of those pairs

function symmetricPairs(arr) {
	let pairMap = {};
	let solution = [];
	// let count = 0;

	for(let i=0; i < arr.length; i++) {
		let first = arr[i][0];
		let second = arr[i][1];

		if(pairMap[second] && pairMap[second] === first) {
			//console.log('second, first: ', second, first);
			solution.push([second, first]);
			// count++;
		} else {
			pairMap[first] = second;
			// console.log("pairMap[first] = second", first, second);
		}
	}

	// console.log('pairMap: ', pairMap);
	// console.log('solution: ', solution);
	// return count;
	return solution;
}



module.exports = symmetricPairs;
