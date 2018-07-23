const reverseArray = require('./index');

test('reverseArray function exists', () => {
  expect(reverseArray).toBeDefined();
});

test('reverseArray successfully reverses an array', () => {
	let testInput = [1, 2, 3, 4, 5, 6];
	let solution = [6, 5, 4, 3, 2, 1]
  expect(reverseArray(testInput)).toEqual(solution);
});
