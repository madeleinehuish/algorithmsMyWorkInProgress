//A child is running up a staircase with n steps and can hop either 1 step, 2 steps or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

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

function countWaysMemoized(n, memo={}) {
  if(memo[n])return memo[n];
	if(n < 0) return 0;
	if(n === 0) return 1;
	return memo[n] = countWaysMemoized(n-1) + countWaysMemoized(n-2) + countWaysMemoized(n-3);
}

//this is a function which can be used to memoize any recursive function
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
//
// const countWaysMemoized = memoize(countWaysBruteForce)



module.exports = { countWaysBruteForce, countWaysMemoized };


//speed test to compare brute vs memoized. paste into chrome and run (from a codepen)
var iterations = 100000;

// function1
function func1(n) {
	if(n < 0) return 0;
	if(n === 0) return 1;
	return func1(n-1) + func1(n-2) + func1(n-3);
}

// function2
function func2(n, memo={}) {
  if(memo[n])return memo[n];
	if(n < 0) return 0;
	if(n === 0) return 1;
	return memo[n] = func2(n-1) + func2(n-2) + func2(n-3);
}

// measure speed of function1
var start1 = window.performance.now();
for (var i = 0; i < iterations; i++) {
  func1(10);
};
var end1 = window.performance.now();
var time1 = Math.round(end1 - start1);

// measure speed of function2
var start2 = window.performance.now();
for (var i = 0; i < iterations; i++) {
  func2(10);
};
var end2 = window.performance.now();
var time2 = Math.round(end2 - start2);

// output which function is faster and speed of each function
console.log("Function1:" + time1 + "ms");
console.log("Function2:" + time2 + "ms");

if (time1 > time2) {
  result = Math.round(100 - (time2/time1)*100);
  console.log("Function2 is faster than Function1 by " + result + "%");
}

if (time2 > time1) {
  result = Math.round(100 - (time1/time2)*100);
  console.log("Function1 is faster than Function2 by " + result + "%");
}
