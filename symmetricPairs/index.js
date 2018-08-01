
// //find correct amount of symmetric pairs in given array

function symmetricPairs(arr) {
	let pairMap = {};
	let solution = [];
	// let count = 0;

	for(let i=0; i < arr.length; i++) {
		let first = arr[i][0];
		let second = arr[i][1];

		if(pairMap[second] && pairMap[second] === first) {
			solution.push([second, first]);
			// count++;
		} else {
			pairMap[first] = second;
		}
	}

	console.log('pairMap: ', pairMap);
	console.log('solution: ', solution);
	// return count;
	return solution;
}



module.exports = symmetricPairs;
