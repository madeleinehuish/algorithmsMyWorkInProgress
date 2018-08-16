// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// // //my iterative solution
// function vowels(str) {
// 	let modStr = str.toLowerCase();
// 	let amountOfVowels = 0;
// 	for (let char of modStr) {
// 		if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
// 			amountOfVowels++;
// 		}
// 	}
// 	return amountOfVowels;
// }

// //stephen's easy solution
function vowels(str) {
	let checker = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;
	for(let char of str.toLowerCase()) {
		if(checker.includes(char)) count++;
	}
	return count;
}

// // //regex solution
// function vowels(str) {
// 	const matches = str.match(/[aeiou]/gi);
// 	return matches ? matches.length : 0;
// }

module.exports = vowels;
