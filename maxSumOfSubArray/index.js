//given an array find the maximum sum along a contiguous subarray of given array

//kadane's algorithm
function maxSum(arr) {
	let currentMaxSum = arr[0];
	let globalMaxSum = arr[0];

	for(let i=1; i < arr.length; i++) {
		currentMaxSum = Math.max(arr[i], currentMaxSum + arr[i]);
		if(currentMaxSum > globalMaxSum) {
			globalMaxSum = currentMaxSum;
		}
	}

	return globalMaxSum;
}


//find continuous sub array which adds to given sum
function subArrWithGivenSum(arr, n){
	var obj = {};
	var currentSum = 0;

	for(var i = 0; i < arr.length; i++){
		currentSum += arr[i];
		console.log("currentSum ", currentSum);
		if(currentSum == n){
			return [0, i];
		}
		obj[currentSum] = i;
		console.log("currentSum - n: ", (currentSum - n));
		if(obj.hasOwnProperty(currentSum - n)){
			return [obj[currentSum - n] + 1, i];
		}

		console.log(obj);
	}
	return -1;
}



module.exports =  { maxSum, subArrWithGivenSum };
