
function diagonal(arr) {
	const rowLength = arr[0].length;
	const colLength = arr.length;
	const diagArrLength = rowLength + colLength - 1;
	const diagArrMidRow = Math.floor(diagArrLength/2);

	//prepare diagonalArr
	let diagonalArr = [];
	for(let i=0; i < diagArrLength; i++) {
		diagonalArr.push([]);
	}

	//this will solve the first half of diagonals (up right diagonal)
	for(let diagCurrRow=0; diagCurrRow <= diagArrMidRow; diagCurrRow++) {
		let row = diagCurrRow;
		for(let diagCurrCol=0; diagCurrCol <= diagCurrRow; diagCurrCol++) {
			let col = diagCurrCol;
			diagonalArr[diagCurrRow][diagCurrCol] = arr[row][col];
			row--;
			// console.log('diagonalArr: ', diagonalArr)
		}
	}

	//this will solve the second half of the diagonals (up right diagonal)
	let diagCurrRowLength = rowLength -1;
  let columnCounter = 1;
	for(let diagCurrRow = diagArrMidRow + 1; diagCurrRow < diagArrLength; diagCurrRow++) {
		let row = colLength-1;
		let col=columnCounter;
		for(let diagCurrCol = 0; diagCurrCol < diagCurrRowLength; diagCurrCol++) {
			diagonalArr[diagCurrRow][diagCurrCol] = arr[row][col];
			row--;
      col++;
		}
    columnCounter++;
		diagCurrRowLength--;
		// console.log('diagonalArr: ', diagonalArr)
	}
	return diagonalArr;
}

function matrixRotate(arr) {
  let newArr = [];
  let rowLength = arr[0].length;

  for(let col=0; col < rowLength; col++) {
    for(let row=arr.length-1; row >= 0; row--) {
      newArr.push(arr[row][col]);
    }
  }

  //push values into original format (convert 1d to 2d)
  let chunked = [];

  for(let i=0; i < rowLength; i++) {
    chunked[i] = newArr.splice(0, arr.length)
  }

  return chunked;
}


function crosswordMatrix(arr, word) {

	let rotated = matrixRotate(arr);

	let horizontalLines = arr;
	let verticalLines = rotated;
	let diagonalUpRight = diagonal(arr);
	let diagonalDownRight = diagonal(rotated);

	let fullArray = [...horizontalLines, ...verticalLines, ...diagonalUpRight, ...diagonalDownRight];
	// console.log('fullArray: ', fullArray);

	for(let elem of fullArray) {
		let el = [].concat(elem); //reverse changes original so have to do it on copy
		let line = el.join('');
		let reversed = el.reverse().join('');
		if(line.includes(word) || reversed.includes(word)) return true;
	}

	return false;

}


module.exports = { crosswordMatrix, matrixRotate, diagonal };










// function crosswordMatrix(arr, word, rowLength, colLength) {
// 	let diagArr = arr.slice(0);
// 	let wordCheck = []; //array of arrays to check
// 	let wordcount = 0;
//
// 	//prefill directional arrays
// 	let horizontal = new Array(colLength).fill('');
// 	let vertical = new Array(rowLength).fill('');
// 	let upright = new Array(rowLength>colLength ? rowLength - 1 : colLength - 1).fill('');
// 	let downright = new Array(rowLength>colLength ? rowLength - 1 : colLength - 1).fill('');
//
// 	let found = false;
//
// 	let counterRow = 0;
// 	let counterCol = 0;
// 	// let diagupRightNext;
// 	// let diagdownRightNext;
//
// 	// for(let word=0; word < arr.length/colLength; word=word+rowLength) {
// 	// 	horizontal[word] += arr.slice(word, word+rowLength);
// 	// }
//
	// //horizontal/vertical loop
	// for(let col=0; col < rowLength; col++) {
	// // for(let row=0; row < colLength; row++) {
	// 	for(let row=0; row < colLength; row++) {
	// 	// for(let col=0; col < rowLength; col++) {
	// 		//build horizontals
	// 		horizontal[row] = (horizontal[row] || '') + arr[col + counterRow];
	// 		//build vertical
	// 		vertical[col] = ((vertical[col]) + (arr[col + counterRow] || ''));
	//
	//
	// 		// //this works for row on top
	// 		// //build horizontals
	// 		// horizontal[row] = (horizontal[row + counterCol] || '') + arr[col];
	// 		// //build vertical
	// 		// vertical[col] = ((vertical[col + counterCol]) + (arr[col] || ''));
	//
	// 		//ideally we can move diagonal logic below up here into the main loop
	//
	//
	//
	// 		//up counter
	// 		counterRow += rowLength;
	// 		if(row === colLength -1) counterRow = 0;
	// 	}
	// }
//
//
// 	//diagonal logic.....
// 	//diagonal loop
// 	// let downright = [];
// 	// let upright = [];
// 	//let row = 0
// 	//let col = 0
//
// 	//trying an array in 2d to see if that works better
// 	let times = colLength;
// 	let newMatrix = [];
// 	for(let i=0; i < times; i++) {
// 		newMatrix.push(diagArr.splice(0, rowLength));
// 	}
// 	console.log('newMatrix: ', newMatrix);
// 	console.log('newMatrix[0][1]: ', newMatrix[0][1])// [row][col]
// 	//*************
// 	//longside # of diagonals = length of long side of rectangle -1
// 	//shortside # of diagonals = length of short side of rectange -2
// 	if(colLength > rowLength) { //this sets longside on colLength
// 		//start with longside logic (this is working but need to push values to arrays)
// 		let index = 0;
// 		for(let row=0; row < colLength; row++) {
// 			// if(row===0) {
// 			// 	upright[0] = newMatrix[0][0];
// 			// 	console.log('upright: ', upright);
// 			// 	index++;
// 			// }
// 			// let finished = false;
// 			let curCol = 0;
// 			let curRow = row;
// 			while(curRow>=0){
// 				upright[index] = (upright[index] || '') + newMatrix[curRow][curCol];
// 				console.log('upright: ', upright);
// 				index++;
// 				curCol++;
// 				curRow--;
// 			}
// 		}
// 		console.log('transition index: ', index);
// 		//then shortside logic (this isn't working)
// 		for(let col=1; col <= rowLength -1; col++) {
// 			if(col===rowLength -1 && curRow === rowLength) {
// 				upright[upright.length-1] = newMatrix[rowLength-1][colLength-1];
// 			}
//
// 			curCol = col;
// 			curRow = rowLength;
// 			while(curCol<=rowLength-1) {
// 				console.log('***index: ', index);
// 				console.log('[curRow][curCol]: ',curRow, curCol, newMatrix[curRow][curCol]);
// 				upright[index] =
// 														// (upright[index] || '') +
// 													newMatrix[curRow][curCol];
// 				console.log('upright[index]: ', upright[index], index);
// 				index++;
// 				curCol++;
// 				curRow--;
// 			}
// 		}
// 	}
// 	if(rowLength > colLength) { //this sets longside on rowLength
//
// 	}
//
// 	console.log('upright: ', upright);
//
// 	//second half of upright diagonal
//
// 	//build downright logic
//
// 	//second check if at last value
// 	//otherwise
// 	//first half goes from col=0 to row=0
// 	//second half goes from col=colLength-1 to row=rowLength-1
//
// 	//diagonal down right
// 	//first half goes from col=0 to row=rowLength-1
// 	//second half goes from col=
//
//
// 	console.log('horizontal: ', horizontal);
// 	console.log('vertical: ', vertical);
// 	//build wordCheck
// 	wordCheck = [...horizontal, ...vertical]; //also add diagonals here...
// 	//check each
// 	for(let elem of wordCheck) {
// 		if(elem.includes(word)) {
// 			wordcount++;
// 			found = true;
// 		}
// 		if(elem.split('').reverse().join('').includes(word)) { //check reverse values
// 			wordcount++;
// 			found = true;
// 		}
// 		// console.log('word: ', word);
// 		// console.log('elem: ', elem);
// 	}
// 	console.log('wordCheck: ', wordCheck);
// 	console.log('wordcount: ', wordcount);
// 	return found;
// }
