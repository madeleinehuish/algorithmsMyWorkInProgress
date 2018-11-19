//returning something with an assignment
let memo ={};
let n = 11;

const testThis = ()=> {
  return memo[n] = function(arr) {console.log(arr)}
}

console.log('testThis: ', testThis())  // testThis:  function (arr) {console.log(arr);}

console.log('memo[n]: ', memo[n])  // memo[n]:  function (arr) {console.log(arr);}


//exercises from free code camp


//largest number in each sub array
function largestOfFour(arr) {
  let largest = [];
  for(let elem of arr) {
    let max =null;
    for(let i=0; i < elem.length; i++) {
      if(!max || max < elem[i]) max = elem[i];
    }
    largest.push(max);
  }
  // You can do this!
  return largest;
}

//confirm last part of string is equal to target string (without using endsWith)
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //find length of target
  //check the length substring of last part of string
  let targetLength = target.length;
  let last = str.substr(str.length - targetLength, targetLength);
  console.log('last: ', last)
  if(last === target) return true
  return false;
}

confirmEnding("Bastian", "n");

//string repeat
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num < 1) return '';
  if(num ===1) return str;
  let newStr = str;
  for(let i=2; i <= num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);


//truncate and add ... (first example should be 'A-tisket...')
function truncateString(str, num) {
  // Clear out that junk in your trunk
  //Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
  if(num >= str.length) return str;

  let newStr = str.substr(0, num) + "..."

  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//make all words in sentence capitalized with other part lowercase
function titleCase(str) {

  return str.split(' ')
            .map(elem=> elem[0].toUpperCase() + elem.substr(1,str.length-1).toLowerCase())
            .join(' ');
}

titleCase("I'm a little tea pot");

//frankensplice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let newArr1 = arr1.slice();
  let newArr2 = arr2.slice();
  // console.log('newArr1: ', newArr1);
  // console.log('newArr2: ', newArr2);

  newArr2.splice(n, 0, ...newArr1);
  // console.log('newArr2: ', newArr2);

  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].


//return array stripped of all falsey values: Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
 return arr.filter(Boolean)
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""])
bouncer([1, null, NaN, 2, undefined])

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  if(arr.length < 1) return 0;
  let sort = arr.sort((a,b)=>a-b);
  for(let i=0;i < sort.length; i++) {
    console.log(i+1)
    if(i===0 && num ===sort[i]) return 0;
    if(i === sort.length-1) return i+1;
    if(num > sort[i] && num <= sort[i+1])return i+1;

  }

}
// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// Passed
// getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
// Passed
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
// Passed
// getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
// Passed
// getIndexToIns([40, 60], 50) should return 1.
// Passed
// getIndexToIns([40, 60], 50) should return a number.
// getIndexToIns([3, 10, 5], 3) should return 0.
// Passed
// getIndexToIns([3, 10, 5], 3) should return a number.
// getIndexToIns([5, 3, 20, 3], 5) should return 2.
// Passed
// getIndexToIns([5, 3, 20, 3], 5) should return a number.
// Passed
// getIndexToIns([2, 20, 10], 19) should return 2.
// Passed
// getIndexToIns([2, 20, 10], 19) should return a number.
// Passed
// getIndexToIns([2, 5, 10], 15) should return 3.
// Passed
// getIndexToIns([2, 5, 10], 15) should return a number.
// Passed
// getIndexToIns([], 1) should return 0.
// Passed
// getIndexToIns([], 1) should return a number.
