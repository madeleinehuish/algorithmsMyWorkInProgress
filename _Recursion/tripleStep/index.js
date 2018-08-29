//A child is running up a staircase with n steps and can hop either 1 step, 2 steps or 3 steps at a time. Implement amehtod to count how many possible ways the child can run up the stairs.

//brute force recursion
function countWaysBruteForce(n) {
	if(n < 0) return 0;
	if(n === 0) return 1;
	return countWaysBruteForce(n-1) + countWaysBruteForce(n-2) + countWaysBruteForce(n-3);
}

// //this memoization solution is all in one function
// function countWaysMemoized(n, memo = new Array(n).fill(-1)) {
//   if(n < 0) return 0;
//   else if(n === 0) return 1;
//   else if(memo[n] > -1) return memo[n];
//   memo[n] = countWaysMemoized(n - 1, memo) + countWaysMemoized(n - 2, memo) + countWaysMemoized(n - 3, memo);
//   return memo[n];
// }


//this is a function which can be used to memoize any recursive function
function memoize(fn){
	const cache = {};

	return function(...args) {
		if(cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this,args);
		cache[args] = result;

		return result;
	}
}

const countWaysMemoized = memoize(countWaysBruteForce)



module.exports = { countWaysBruteForce, countWaysMemoized };
