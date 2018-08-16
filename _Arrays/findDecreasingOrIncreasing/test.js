const { findDecreasing, findIncreasing, findMultiplePointsWhereSlopeZero } = require('./index');

test('findDecreasing function exists', () => {
  expect(findDecreasing).toBeDefined();
});

test('findIncreasing function exists', () => {
  expect(findIncreasing).toBeDefined();
});

test('findMultiplePointsWhereSlopeZero function exists', () => {
  expect(findMultiplePointsWhereSlopeZero).toBeDefined();
});


test('Correctly finds lowest point in decreasing', () => {
	let testArray = [200, 45, 34, 26, 23, 27, 56, 38, 100, 105];
	let solution = 23;
  expect(findDecreasing(testArray)).toEqual(solution);
});

test('Correctly finds highest point in increasing', () => {
	let testArray = [1, 3, 6, 10, 8, 7, 3];
	let solution = 10;
  expect(findIncreasing(testArray)).toEqual(solution);
});

test('Correctly finds all zero slope points in increasing/decreasing array', () => {
	let testArray = [1, 3, 5, 7, 9, 7, 5, 7, 9, 10, 11, 12, 13, 14, 15, 11, 10];
	let solution = [9, 5, 15];
  expect(findMultiplePointsWhereSlopeZero(testArray)).toEqual(solution);
});
