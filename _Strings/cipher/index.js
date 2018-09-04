// write code that bumps each letter up by a certain offset number


//this solution is from https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
const caesarCipher = (string, offset) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const input = string.toLowerCase();
    let output = '';

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        if (alphabet.indexOf(letter) === -1) {
            output += letter;
            continue;
        }

        let index = alphabet.indexOf(letter) + offset % 26;
        console.log('index: ', index);
        if (index > 25) index -= 26;
        if (index < 0) index += 26;

        output +=
            string[i] === string[i].toUpperCase()
                ? alphabet[index].toUpperCase()
                : alphabet[index];
    }

    return output;
};

module.exports =  { caesarCipher };




//originally tried to do it more complicated like this and it didnt' work as well...
//capitals go from  65-90, and lowercase go from 97 to 122

//2 methods important here: String.charAt(65) -> 'A'  and 'Alphabet'.charCodeAt(0) -> 65



// function caesarCipher(str, offset) {
// 	if(offset < 1) return;
// 	if(offset > 26) {
// 		if(offset%26===0) offset = 26;
// 		else offset = offset%26 + 1;
// 	}
// 	console.log('offset: ', offset);
// 	return str
// 										 .split('')
// 										 .map(elem => {
// 											 let currentCode = elem.charCodeAt(0);
// 											 let newCode = currentCode + offset;
// 											 if (97 <= newCode <= 122) {
// 												 if (newCode > 122) {
// 													 console.log('*****************')
// 													 newCode = (newCode - 122) + 97-(26-offset);
// 												 }
//
// 												 console.log('currentCode: ', currentCode, '', 'currentCode+26: ', currentCode+26, ' newCode: ', newCode, );
// 											 } else if(65 <= newCode <= 90) {
// 												 if (newCode > 90) newCode = (newCode - 90) + 65-(26-offset);
//
// 												 console.log('currentCode: ', currentCode, '', 'currentCode+26: ', currentCode+26, ' newCode: ', newCode, );
// 											 }
//
// 											 return String.fromCharCode(newCode);
// 										 	})
// 											.join('')
// }
