
// // should do the following, reversing each individual word
//describe("Reverse Words", () => {
//  it("Should reverse words", () => {
//   assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//  });
// });

// // piece by piece
// function reverseWords(str) {
// 	let strArr = str.trim().split(' ');
//
// 	for(let i=0; i < strArr.length; i++) {
// 		strArr[i] = strArr[i].split('').reverse().join('');
// 	}
//
// 	return strArr.join(' ');
//
// }

// // more elegant
function reverseWords(str) {
	return str.trim()
	          .split(' ')
						.map(elem => elem.split('').reverse().join('')) //or use split('').reduce method...
						.join(' ')
}


//need to write tests for this one
