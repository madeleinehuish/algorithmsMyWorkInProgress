function crosswordMatrix(arr, word, rowLength, colLength) {
	let wordCheck = []; //array of arrays to check
	let wordcount = 0;
  // let horizontal = [''];
	let horizontal = new Array(colLength).fill('')
	// let vertical = [''];
	let vertical = new Array(rowLength).fill('')
	let downright = [];
	let upright = [];
	let found = false;

	let counterRow = 0;
	let counterCol = 0;

	for(let col=0; col < rowLength; col++) {

		for(let row=0; row < colLength; row++) {
			//build horizontals
			horizontal[row] = (horizontal[row] || '') + arr[col + counterRow];
			//build vertical
			vertical[col] = ((vertical[col]) + (arr[col + counterRow] || ''));
			//up counter
			counterRow += rowLength;
			if(row === colLength -1) counterRow = 0;
		}
	}
	console.log('horizontal: ', horizontal);
	console.log('vertical: ', vertical);
	//build wordCheck
	wordCheck = [...horizontal, ...vertical]; //also add diagonals here...
	//check each
	for(let elem of wordCheck) {
		if(elem.includes(word)) {
			wordcount++;
			found = true;
		}
		if(elem.split('').reverse().join('').includes(word)) {
			wordcount++;
			found = true;
		}
		console.log('word: ', word);
		console.log('elem: ', elem);
	}
	console.log('wordCheck: ', wordCheck);
	console.log('wordcount: ', wordcount);
	return found;
}

module.exports = crosswordMatrix ;
