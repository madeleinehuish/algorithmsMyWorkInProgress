const { matrixRotate, matrixRotateCounterClock, matrixRotateWith2DMatrix } = require('./index');

test('matrixRotate is a function', () => {
	expect(typeof matrixRotate).toEqual('function');
})

test('matrixRotate is a function', () => {
	expect(typeof matrixRotateCounterClock).toEqual('function');
})

test('matrixRotateWith2DMatrix is a function', () => {
	expect(typeof matrixRotateWith2DMatrix).toEqual('function');
})

const testGrid = [
  [0,0], [0,1], [0,2], [0,3],
  [1,0], [1,1], [1,2], [1,3],
  [2,0], [2,1], [2,2], [2,3],
  [3,0], [3,1], [3,2], [3,3]
];

const testGrid2 = [
  [1], [2], [3], [4],
  [5], [6], [7], [8],
  [9], [0], [1], [2],
  [3], [4], [5], [6]
];

const testGrid3 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
]

const testGrid4 = [
	[1, 2],
	[3, 4],
	[5, 6],
	[7, 8],
	[9, 10]
]



const clockwiseSolution = [
  [3,0], [2,0], [1,0], [0,0],
  [3,1], [2,1], [1,1], [0,1],
  [3,2], [2,2], [1,2], [0,2],
  [3,3], [2,3], [1,3], [0,3]
];

const counterClockSolution = [
	[0,3], [1,3], [2,3], [3,3],
  [0,2], [1,2], [2,2], [3,2],
  [0,1], [1,1], [2,1], [3,1],
  [0,0], [1,0], [2,0], [3,0]
]

const clockwiseSolution2 = [
  [3], [9], [5], [1],
  [4], [0], [6], [2],
  [5], [1], [7], [3],
  [6], [2], [8], [4]
];

const counterClockSolution2 = [
  [4], [8], [2], [6],
  [3], [7], [1], [5],
  [2], [6], [0], [4],
  [1], [5], [9], [3]
]

const testGridSolution3 = [
	[13, 9, 5, 1],
	[14, 10, 6, 2],
	[15, 11, 7, 3],
	[16, 12, 8, 4]
]

const testGridSolution4 = [
	[9, 7, 5, 3, 1],
  [10, 8, 6, 4, 2]
]


test('matrixRotate successfully returns a matrix copy that is rotated 90 degrees to right', () => {
	expect(matrixRotate(testGrid)).toEqual(clockwiseSolution);
  expect(matrixRotate(testGrid2)).toEqual(clockwiseSolution2);
})

test('matrixRotateCounterClock successfully returns a matrix copy that is rotated 90 degrees to left', () => {
	expect(matrixRotateCounterClock(testGrid)).toEqual(counterClockSolution);
  expect(matrixRotateCounterClock(testGrid2)).toEqual(counterClockSolution2);
})

test('matrixRotateWith2DMatrix successfully returns a matrix copy that is rotated 90 degrees to left', () => {
	expect(matrixRotateWith2DMatrix(testGrid3)).toEqual(testGridSolution3);
	expect(matrixRotateWith2DMatrix(testGrid4)).toEqual(testGridSolution4);
})
