let matrix1 = [
	[ 1,  2,  3,  4,  5],
	[ 6,  7,  8,  9 ,10],
	[11, 12, 13, 14, 15]
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


//objective, capture all of the up right and up left diagonals
function diagonal(arr) {

	//Up Right
	let curRowLen = 1;
	let hitMid = false;
	let row = 0;
	let col = 0;
	let diagRow = 0;
	let diagCol = 0;
	let diagonal = [];

	while(curRowLen!==1 && !hitMid) {
		while(!hitMid) {
			for(let col = 0; col <= curRowLen; col++)
			diagonal[diagRow][diagCol] = arr[row][col];
			col++;
			diagCol++;
		}
		curRowLen++



	}
}
