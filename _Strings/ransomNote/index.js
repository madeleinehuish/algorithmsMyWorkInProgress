//you have a magazine and need to cut out words from the magazine to form a ransome note. Can you form the ransom note you want given the magazine?

//this is very similar to the anagram solution

//this is my solution
function ransomNote(ransom_note, magazine) {
	let arrRansom = ransom_note.trim().split(' ');
	let arrMagazine = magazine.trim().split(' ');
	let charMapRansom = {};
	let charMapMagazine = {};

	for(let word of arrRansom) {
		charMapRansom[word] = (charMapRansom[word] || 0) + 1;
	}

	for(let word of arrMagazine) {
		charMapMagazine[word] = (charMapMagazine[word] || 0) + 1;
	}

	if(Object.keys(charMapRansom).length > Object.keys(charMapMagazine).length) {
		return false;
	}

	for(let word in charMapRansom) {
		if(!charMapMagazine[word]) return false;
		if(charMapRansom[word] > charMapMagazine[word]) return false;
	}

	return true;

}

module.exports = ransomNote;


// // this solution is from https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
// const ransomNote = (note, magazine) => {
//     const magazineWords = magazine.split(" ");
//     const magazineHash = {};
//
//     magazineWords.forEach(word => {
//         if (!magazineHash[word]) magazineHash[word] = 0;
//         magazineHash[word]++;
//     });
//
//     const noteWords = note.split(" ");
//     let possible = true;
//
//     noteWords.forEach(word => {
//         if (magazineHash[word]) {
//             magazineHash[word]--;
//             if (magazineHash[word] < 0) possible = false;
//         } else possible = false;
//     });
//
//     return possible;
// };
