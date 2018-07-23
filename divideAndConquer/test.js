const { sum, quickSort } = require('./index');

test('Sum function is defined', () => {
  expect(typeof sum).toEqual('function');
});

test('Quicksort function is defined', () => {
  expect(typeof quickSort).toEqual('function');
})


test('calculates correct sum value', () => {
	let testCase = [1, 2, 3, 6, 7, 8, 9];
  expect(sum(testCase)).toEqual(36);
});

test('Quicksort correctly sorts an array', () => {
  let testCase = [34, 67, 23, 12, 2, 1, 45, 87];
  let solution = [1, 2, 12, 23, 34, 45, 67, 87];
  expect(quickSort(testCase)).toEqual(solution);
})
