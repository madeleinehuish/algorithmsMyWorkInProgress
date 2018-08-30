const { matrixRotate, matrixRotateCounterClock } = require('./index');

test('matrixRotate is a function', () => {
	expect(typeof matrixRotate).toEqual('function');
})

test('matrixRotate is a function', () => {
	expect(typeof matrixRotateCounterClock).toEqual('function');
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


test('matrixRotate successfully returns a matrix copy that is rotated 90 degrees to right', () => {
	expect(matrixRotate(testGrid)).toEqual(clockwiseSolution);
  expect(matrixRotate(testGrid2)).toEqual(clockwiseSolution2);
})

test('matrixRotateCounterClock successfully returns a matrix copy that is rotated 90 degrees to left', () => {
	expect(matrixRotateCounterClock(testGrid)).toEqual(counterClockSolution);
  expect(matrixRotateCounterClock(testGrid2)).toEqual(counterClockSolution2);
})
