//given array of first increasing then decreasing value, find max
//likewise, given array of first decreasing then increasing value, find min

//easiest solution
function findDecreasing(arr) {
	let min = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] <= min) {
			min = arr[i];
		}
	}
	return min;
}

function findIncreasing(arr) {
	let max = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] >= max) {
			max = arr[i];
		}
	}
	return max;
}

function findMultiplePointsWhereSlopeZero(arr) {
	let minmax = [];
	let currentValue = null;
	for(let i = 1; i < arr.length; i++) {
		let prev = arr[i-1];
		let current = arr[i];
		let next = arr[i+1];

		if(next) {
			//find min values
			if(prev > current && next > current) {
				minmax.push(current);
			}
			//find max values
			if(prev < current && next < current) {
				minmax.push(current);
			}
		}
	}
	return minmax;
}

module.exports = { findDecreasing, findIncreasing, findMultiplePointsWhereSlopeZero };
