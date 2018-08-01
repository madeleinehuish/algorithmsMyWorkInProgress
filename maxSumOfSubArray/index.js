//given an array find the maximum sum along a contiguous subarray of given array

function maxSum(arr) {
	let currentMaxSum;
	let globalMaxSum;

	currentMaxSum = globalMaxSum = arr[0];

	for(let i=1; i < arr.length; i++) {
		currentMaxSum = Math.max(arr[i], currentMaxSum + arr[i]);
		if(currentMaxSum > globalMaxSum) {
			globalMaxSum = currentMaxSum;
		}
	}

	return globalMaxSum;
}



module.exports = maxSum;
