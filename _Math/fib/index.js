// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// //this is stephen grider's memoize function which works great as a separate function. i prefer the more concise solution below
// function memoize(fn){
// 	const cache = {};
//
// 	return function(...args) {
// 		if(cache[args]) {
// 			return cache[args];
// 		}
//
// 		const result = fn.apply(this,args);
// 		cache[args] = result;
//
// 		return result;
// 	}
// }

// //recursive solution is O(2^n), exponential, much less efficient than the iterative solution below
// function fib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
//
// 	return fib(n-1) + fib(n-2); //calling memoized version
// }
//
// fib = memoize(fib)




// //recursive solution is O(2^n), exponential, much less efficient than the iterative solution below
function slowfib(n) {
	if (n <= 1) {
		return n;
	}

	return slowfib(n-1) + slowfib(n-2);
}

//linear runtime
function fib(n) {
	const result = [0,1];

	for(let i=2; i<=n; i++){

		result[i] = result[i-1] + result[i-2];
	}

	return result[n];
	// return result; //returns whole array
}

function memoizedFib(n, memo={}) {

  if (memo[n]) return memo[n];
  if (n <= 1) return n;

  return memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
}


module.exports = { fib, memoizedFib };
