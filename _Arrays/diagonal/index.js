let matrix1 = [
	[ 1,  2,  3,  4,  5],
	[ 6,  7,  8,  9 ,10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25]
]

let solutionUpRightMatrix1 = [
	[1],
	[6,  2],
	[11, 7, 3],
	[16, 12, 8, 4],
	[21, 17, 13, 9, 5],
	[22, 18, 14, 10],
	[23, 19, 15],
	[24, 20],
	[25]
]

let solutionDownRightMatrix = [
	[5],
	[4, 10],
	[3, 9, 15],
	[2, 8, 14, 20],
	[1, 7, 13, 19, 25],
	[6, 12, 18, 24],
	[11, 17, 23],
	[16, 22],
	[21]
]

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

	//set first and last elements of diagonalArr
	diagonalArr[0][0] = arr[0][0];
	diagonalArr[diagArrLength-1][0] = arr[rowLength-1][colLength-1];

	//this will solve the first half of diagonals
	for(let diagCurrRow=1; diagCurrRow <= diagArrMidRow; diagCurrRow++) {
		let row = diagCurrRow;
		for(let diagCurrCol=0; diagCurrCol <= diagCurrRow; diagCurrCol++) {
			let col = diagCurrCol;
			diagonalArr[diagCurrRow][diagCurrCol] = arr[row][col];
			row--;
			console.log('diagonalArr: ', diagonalArr)
		}
	}
}

// //starting with an nxn array input
// function diagonal(arr) {
//
// 	const rowLength = arr[0].length;
// 	const colLength = arr.length;
// 	const diagArrLength = rowLength + colLength - 1;
// 	const diagArrMidRow = Math.floor(diagArrLength/2);
//
// 	//prepare diagonalArr
// 	let diagonalArr = [];
// 	for(let i=0; i < diagArrLength; i++) {
// 		diagonalArr.push([]);
// 	}
//
// 	//set first and last elements of diagonalArr
// 	diagonalArr[0][0] = arr[0][0];
// 	diagonalArr[diagArrLength-1][0] = arr[rowLength-1][colLength-1];
//
// 	let counter = 1;
// 	while(counter < diagArrLength-1) {
// 	// while(counter < colLength)	{
// 		// counter++;
// 		for(let row = counter; row < colLength; row++) {
// 			let currRow = row;
// 			for(let col = 0; col <= row; col++) {
//         console.log('row: ', row, 'col: ', col, 'currRow: ', currRow);
// 				diagonalArr[row][col] = arr[currRow][col];
// 				currRow--;
// 				counter++;
// 			}
// 			// for(let col = colLength-1; col >= row; col--) {
// 			// 	console.log('row: ', row, 'col: ', col, 'currRow: ', currRow);
// 			// 	diagonalArr[row][col] = arr[currRow][currCol];
// 			// 	currCol--;
// 			// 	currRow++;
// 			// 	counter++;
// 			// }
// 		}
//
//
//
// 		// let row = colLength - 1;
// 		// let currRow = row;
// 		// for(let col = 1; col <= rowLength; col++) {
// 		// 	for(let currCol = col; currCol <= rowLength; currCol++) {
// 		// 		console.log('row: ', row, 'col: ', col, 'currCol: ', currCol);
// 		// 		diagonalArr[counter][currCol] = arr[row][currCol];
// 		// 		currRow--;
// 		// 	}
// 		// 	counter++;
// 		// }
//
//
// 		// for(let col = 1; col <= rowLength; col++) {
// 		// 	let currCol = col;
// 		// 	for(let row = colLength - 1; currCol >= rowLength ; row--) {
// 		// 		console.log('row: ', row, 'col: ', col, 'currCol: ', currCol);
// 		// 		diagonalArr[row][col] = arr[row][currCol];
// 		// 		currCol++;
// 		// 		counter++;
// 		// 	}
// 		// }
// 		console.log('diagonalArr: ', diagonalArr);
// 	}
// }

// In a Google interview, are you expected to ace all 5? Or can one or two slip-offs still give a substantial chance of getting hired?
// Samuel Stromwall
// Samuel Stromwall, lives in Mountain View, CA
// Answered Nov 12, 2017 · Upvoted by Daniel Entin, works at Google and Dmitriy Genzel, former Staff Research Scientist at Google (2005-2016)
// In my interviews, I got asked around seven or eight technical questions. I think I got one right, maybe two. So I “aced” zero out of five interviews. Still got hired. And it’s not like I had an astonishing resume, either. I was 20 years old with three months of software experience. I’m coming up on 6 months at Google.
//
// I think this has been said before, but it’s worth repeating. The candidate should not concern themself with whether or not they can solve the problem. It’s about the process. Define the constraints, talk about every solution that you think of, talk about why one of them is the best, attempt to write it down, find and fix the bugs. If you stop communicating your ideas, it sounds like you’ve stopped having ideas.
