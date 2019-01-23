// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// // easiest
// function palindrome(str) {
// 	return str === str.split('').reverse().join('');
// }

// function palindrome(str) {
// 	let reversed = '';
// 	for(let char of str) {
// 		reversed = char + reversed;
// 	}
// 	return str === reversed;
// }


function palindrome(str) {
	let reversed = str.split('').reduce((acc, current) => current + acc)

	return str === reversed;
}


//longest palindrome in sentence
function longestPalindrome(sentence) {
// your code goes here
	// split the sentence into words
	let words = [];
	let wordArray = sentence.split(‘ ‘);
	for(let word of wordArray) {
		if(palindrome(word)) words.push(word);
	}
	let
	return 	words.sort(function(a, b){return a.length-b.length}).pop();
}



module.exports = palindrome;
