// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const reversed = n
		.toString()
		.split('')
		.reverse()
		.join('');

		// console.log('reversed Int: ', reversed);

		return parseInt(reversed) * Math.sign(n);

	// // or can do like this
	// if (n < 0 ) {
	// 	return parseInt(reversed) * -1;
	// }

	// return parseInt(reversed);

}


module.exports = reverseInt;
