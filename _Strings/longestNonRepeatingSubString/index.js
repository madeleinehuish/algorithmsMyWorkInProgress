// //this is my solution which I came up with on my own using Set()

function longestNonRepeatingSubString(str) {
  let max = current = 0;
  let currArr = [];
  let maxArr = [];
  let charSet = new Set();

  for(let char of str) {
    if(charSet.has(char)) {
      if(current > max) {
        max = current;
        maxArr = currArr;
        maxArr.push(char);
        current = 1;
        currArr = [];
      }
    } else {
      charSet.add(char);
      current++;
      console.log('char: ', char);
      currArr.push(char)
    }
  }
  if(current > max) {
    max = current;
    maxArr = currArr;

  }
  let maxStr = maxArr.join('');
  console.log('maxStr: ', maxStr);
  return max;
}


// //this solution will return the actual string with max length
// im not sure if it works. i've since added tests which forced me to rewrite the code above so this might no longer be valid
// function longestNonRepeatingSubString(str) {
//   let max = currentSubStrLength = 0;
//   let charMap = new Map();
//   let maxStr = '';
//
//   for(let char of str) {
//
//     if(charMap.has(char)) {
//       if(currentSubStrLength > max) {
//         max = currentSubStrLength;
//       }
//       maxStr='';
//       currentSubStrLength = 0;
//     }
//     currentSubStrLength++;
//     maxStr = maxStr + char;
//     console.log('maxStr: ', maxStr);
//     charMap.set(char, charMap.get(char)+1 || 0)
//   }
//
//   return maxStr;
// }

//https://gist.github.com/codediodeio/24319b9b17cba57e7a34002228abaaaf
// var longestNonRepeatingSubString = function(s) {
//
//     let map = {}
//     let start = 0
//     let maxLen = 0
//     let arr = s.split('')
//
//     for (i=0; i < s.length; i++) {
//         let current = map[arr[i]]
//         if (current!=null && start <= current) {
//             start = current + 1
//         } else {
//             maxLen = Math.max(maxLen, i - start + 1)
//         }
//
//         map[arr[i]] = i
//     }
//
//     return maxLen
//
//
// };



function longestNonRepeatingSubStringNonOptimal(str) {

}

module.exports = { longestNonRepeatingSubString, longestNonRepeatingSubStringNonOptimal } ;






// //this solution comes from https://gist.github.com/primaryobjects/3bbf42ed7fdd537cd88705de2edd5120
// function longestNonRepeatingSubString(s) {
// 	let max = 0;
// 	    let str = '';
// 	    let i = 0;
// 	    let cache = [];
//
// 	    while (i < s.length) {
// 	        if (cache[s[i]]) {
// 	            // Found a repeating character.
// 	            if (str.length > max) {
// 	                max = str.length;
// 	            }
//
// 	            // Not optimal: empty substring, move i back to last position, and start collecting over.
// 	            /*str = '';
// 	            // Move back to last non-repeating character.
// 	            i = cache[s[i]];
// 	            cache = [];*/
//
// 	            // Optimal: strip everything up to the first repeating character in our substring, and continue on.
// 	            var start = str.indexOf(s[i]);
// 	            str = str.substring(start + 1);
// 	        }
//
// 	        if (i < s.length) {
// 	            str += s[i];
// 	            cache[s[i]] = i + 1;
// 	            i++;
// 	        }
// 	    }
//
// 	    if (str.length > max) {
// 	        max = str.length;
// 	    }
//
// 	    return max;
// }

//these 2 don't work from https://wsvincent.com/javascript-longest-substring-no-repeating-characters/
// // O(n) time, O(1) space
// const longestNonRepeatingSubString = str => {
//   let result = [],
//       maxResult = 0;
//
//   for (let i=0; i<str.length; i++) {
//     if (!result.includes(str[i])) {
//       result.push(str[i]);
//     } else {
//       maxResult = i;
//     }
//   }
//
//   return maxResult;
// }


// const allUnique = str => {
//   const set = [...new Set(str)];
//   return (set.length === str.length) ? true: false;
// }
//
// const longestNonRepeatingSubString = str => {
//   let result = 0,
//       maxResult = 0;
//   for (let i=0; i<str.length-1; i++) {
//     for (let j=i+1; j<str.length; j++) {
//       if (allUnique(str.substring(i, j))) {
//         result = str.substring(i, j).length;
//         if (result > maxResult) {
//           maxResult = result;
//         }
//       }
//     }
//   return maxResult;
//   }
// }

// //from https://js-algorithms.tutorialhorizon.com/2017/01/23/length-of-longest-substring-without-repeating-characters/
// // Algorithm
// // Time complexity: O(n)
// //
// // 1. Have a pointer which tracks the starting index of the current substring
// // 2. Create a map of each character and its index
// //    If the current character is in the lookup
// //    Change the starting index
// // 3. Add the current character to the map
// // 4. Update the max length of the substring
// function longestNonRepeatingSubString(s) {
//
//   if (s.length <= 1)
//     return s.length
//
//   let lookup = new Map()
//   let len = s.length
//   let max = 0
//   let start = 0
//
//   for (let i = 0; i < len; i++) {
//     let c = s.charAt(i)
//
//     if (lookup.has(c) && lookup.get(c) >= start) {
//       start = lookup.get(c) + 1; // Read the logic in the notes above
//     }
//
//     lookup.set(c, i)
//
//     max = Math.max(max, i - start + 1)
//   }
//
//   return max;
// }
