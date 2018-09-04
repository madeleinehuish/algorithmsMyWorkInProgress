// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
  // anagrams('rail safety', 'fairy tales') --> True
  // anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  // anagrams('Hi there', 'Bye there') --> False


// // //this solution takes a bit more work than the simple one at very bottom
function anagrams(stringA, stringB) {
	let charMapA = {};
	let charMapB = {};

	for (let char of stringA) {                     //can also use a split('').forEach()
		charMapA[char] = (charMapA[char] || 0) + 1;
	}

	for (let char of stringB) {
		charMapB[char] = (charMapB[char] || 0) + 1;
	}

	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
	    return false;
	  }

	for (let char in charMapA) {
		// if (charMapA[char] !== charMapB[char]) {
		if(!charMapB[char]) {
			return false;
		}
	}

	return true;
}

// function anagrams(str1, str2) {
// 	let charMapA = {};
// 	let charMapB = {};
//
// 	str1.split('').forEach(char => {
// 		charMapA[char] = (charMapA[char] || 0) + 1;
// 	})
//
// 	str2.split('').forEach(char => {
// 		charMapB[char] = (charMapB[char] || 0) + 1;
// 	})
//
// 	if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// 		return false;
// 	}
//
// 	for(let char in charMapA) {
// 		if(charMapA[char] !== charMapB[char]) {
// 			return false;
// 		}
// 	}
//
// 	return true;
// }


// // easiest but has linearithmic O vs the map above which has linear
// function anagrams(stringA, stringB) {
// 	let check1 = stringA.split('').sort().join('');
// 	let check2 = stringB.split('').sort().join('');
//
// 	return check1 === check2;
// }

module.exports = anagrams;
