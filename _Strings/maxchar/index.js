// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



// function maxChar(str) {
// 	let chars = {};
// 	let max = 0;
// 	let maxChar = '';
// 	for(let char of str) {
// 		chars[char] = (chars[char] || 0) + 1;
// 	}
//
// 	for(let char in chars) {
// 		// console.log('char: ', char);
// 		if(chars[char] > max) {
// 			max = chars[char];
// 			maxChar = char;
// 		}
// 	}
// 	return maxChar;
// }

function maxChar(str) {
	let chars = {};
	let max = 0;
	let maxChar = '';
	for(let char of str) {
		chars[char] = (chars[char] || 0) + 1;
		if(chars[char] > max) {
			max = chars[char];
			maxChar = char;
		}
	}
	return maxChar;
}

// //basic character frequency in string only including letters (A and a count the same)
// function charFreq(sentence) {
//
//   if(typeof sentence !== 'string') return -1;
//   let charMap={};
//   for(let char of sentence.toLowerCase()) {
//     if(char.charCodeAt() > 96 && char.charCodeAt() < 123) {
//       charMap[char] = (charMap[char] || 0) + 1;
//     }
//   }
//
//   return charMap
// }


//one way we could get array of maxValues that are the same is to record max and then loop through one more time to
//grab all chars where maxChar[char] === max

// maxChar("abcccccccd");
// maxChar("apple 1231111");



module.exports = maxChar;
