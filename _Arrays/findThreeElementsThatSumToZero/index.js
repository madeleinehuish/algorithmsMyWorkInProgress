//find three numbers in array that sum to zero and console out the findThreeNumbers
//this can also be used to find a sum for two numbers (without the third loop and third number)
// O(n^3)
function findThreeNumbers(arr) {
	let found = false;
	for(let i = 0; i < arr.length; i++) {
		for(let j = i+1; j < arr.length; j++) {
			for(let k = j+1; k < arr.length; k++) {
				if(arr[i] + arr[j] + arr[k] === 0) {
					console.log('Found 3 numbers: ', arr[i], arr[j], arr[k]);
					found = true;
				}
			}
		}
	}
	if (found ===false) {
		console.log('Did not find any three numbers that summed to zero');
	}
}


// //find how many pairs add up to sum given one array, this is an O(n) solution unlike above...
function getPairsCount(arr, sum) {
	let hashMap = {};
	for(let i=0; i < arr.length; i++) {
		hashMap[arr[i]] = (hashMap[arr[i]] || 0) + 1;
	}
	let twice_count = 0;
	for(let i=0; i< arr.length; i++) {
		twice_count += hashMap[sum-arr[i]] || 0;
		if(sum-arr[i] === arr[i]) twice_count--;
	}

	return twice_count/2;
}

//this version strips duplicates
function getPairsCountStripDupes(arr, sum) {
	//strip duplicates
	let newArr = [...new Set(arr)];
	//start get pairs count functionality
	let hashMap = {};
	let doubleCount = 0;

	for(let elem of newArr) {
		hashMap[elem] = (hashMap[elem] || 0) + 1;
	}

	for(let elem of newArr) {
		if(hashMap[sum - elem]) doubleCount++;
		//for duplicate values (in the case of [5, 3, 7], 5 will get counted and needs to be removed)
		if(sum - elem === elem) doubleCount--;
	}
	return doubleCount/2;
}

//this one returns the pairs
//from https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
const twoSum = (array, sum) => {
    const pairs = [];
    const store = [];

    for (let part1 of array) {
        const part2 = sum - part1;
        if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
        store.push(part1);
    }

    return pairs;
};


module.exports = { findThreeNumbers, getPairsCount, getPairsCountStripDupes };
