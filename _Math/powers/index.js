//return true if a number is a power of 2

function isPowerOf2(num) {
	let counter = 2;
	while(counter <= num) {
		if(Math.pow(counter, 2) === num) return true;
		// console.log('counter: ', counter, ' Math.pow(counter): ', Math.pow(counter, 2));
		counter++;
	}
	return false;
}

//return true is a number is a power of n (here designated as powerOf)

function isPowerOf(num, powerOf) {
	let counter = powerOf;
	while(counter <= num) {
		if(Math.pow(counter, powerOf) === num) return true;
		// console.log('counter: ', counter, ' Math.pow(counter): ', Math.pow(counter, 2));
		counter++;
	}
	return false;
}


module.exports = { isPowerOf2, isPowerOf };
