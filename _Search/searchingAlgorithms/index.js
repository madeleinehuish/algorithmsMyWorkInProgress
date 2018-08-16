//find value using classical binary search

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

/*
algorithm for binary search
1. set upper and lower bounds variables at zero and arr.length -1
2. set up a while loop (low <= high)
3. inside of the while loop assign mid = Math.floor(low + (high-low) /2)
4. if statement:
      check first if arr[mid] equals the value, if so return
      check next if arr[mid] is less than value, if so set a new low one greater than mid
      else arr[mid] must be more than value so set a new high at one less than mid
5. lastly return -1 (for the case in which value not found)

*/
function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === val) {
      return mid
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

module.exports = { linearSearch, binarySearch };
