const { matrixZero } = require('./index');

test('matrixZero is a function', () => {
	expect(typeof matrixZero).toEqual('function');
})

// const testMatrix1 = [
// 	[1], [3], [5], [7], [9],
// 	[0], [1], [2], [3], [4],
// 	[8], [7], [0], [9], [7],
// 	[8], [7], [1], [9], [7]
// ];

const testMatrix1 = [
	[1, 3, 5, 7, 9],
	[0, 1, 2, 3, 4],
	[8, 7, 0, 9, 7],
	[8, 7, 1, 9, 7]
]

const solution1 = [
	[0, 3, 0, 7, 9],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 7, 0, 9, 7]
];

test('matrixZero successfully converts rows/columns containing a zero to all zeros', () => {
	expect(matrixZero(testMatrix1)).toEqual(solution1);
})
