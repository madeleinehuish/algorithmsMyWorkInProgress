const diagonal = require('./index');

test('diagonal is a function', () => {
	expect(typeof diagonal).toEqual('function');
})

const matrix1 = [
	[ 1,  2,  3,  4,  5],
	[ 6,  7,  8,  9 ,10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25]
]

const solutionUpRightMatrix1 = [
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

const solutionDownRightMatrix = [
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


test('diagonal successfully converts matrix', () => {
	expect(diagonal(matrix1)).toEqual(solutionUpRightMatrix1);
})
