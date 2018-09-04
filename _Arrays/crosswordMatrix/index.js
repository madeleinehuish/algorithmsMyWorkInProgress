function crosswordMatrix(arr, word, rowLength, colLength) {
	let pathQueue = []; //array of arrays to check

  // let horizontal = [''];
	let horizontal = new Array(colLength).fill('')
	// let vertical = [''];
	let vertical = new Array(rowLength).fill('')
	let downright = [];
	let upright = [];

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
}

module.exports = crosswordMatrix ;
