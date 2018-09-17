//take in an array of arrays as matrix. if a row or column has a zero, that whole row or column zeroes out
//is there a more optimal solution? this is my first brute force attempt...
function matrixZero(arr) {

	let newArr = [].concat(arr);
	let rowLength = arr[0].length;
	let indices = { rows: [], cols: [] };

	for(let row=0; row < arr.length; row++) {
		for(let col=0; col < rowLength; col++) {
			if(arr[row][col]===0) {
				indices.rows.push(row);
				indices.cols.push(col);
			}
		}
	}
	for(let row=0; row < arr.length; row++) {
		for(let col=0; col < rowLength; col++) {
				if(indices.rows.includes(row) || indices.cols.includes(col)) {
					newArr[row][col] = 0;
				} else {
					newArr[row][col] = arr[row][col];
				}
		}
	}
	console.log('newArr: ', newArr);

	return newArr;
}

module.exports = { matrixZero }
