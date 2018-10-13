// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// // easiest
// function reverse(str) {
// 	return str.split('').reverse().join('');
// }


// // using a loop
// function reverse(str) {
// 	let newStr = '';
// 	for(let char=str.length-1; char >= 0; char --) {
// 		newStr = newStr + str[char];
// 	}
// 	return newStr;
// }

// // simpler loop
// function reverse(str) {
// 	let reversed = '';
// 	for(let char of str) {
// 		reversed = char + reversed;
// 	}
// 	return reversed;
// }

// // elegant using split and reduce
function reverse(str) {
	return str.split('').reduce((acc, current) => current + acc)
}

module.exports = reverse;
