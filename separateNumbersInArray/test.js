const { separateZerosAndOnes, separateEvenAndOdds } = require('./index');

test('separateZerosAndOnes function exists', () => {
  expect(separateZerosAndOnes).toBeDefined();
});

test('separateEvenAndOdds function exists', () => {
  expect(separateEvenAndOdds).toBeDefined();
});

test('Correctly separates values in array', () => {
	let testArray = [1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0];
	let solution = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  expect(separateZerosAndOnes(testArray)).toEqual(solution);
});

test('Correctly separates evens and odds in array', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let solution = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16];
  expect(separateEvenAndOdds(testArray)).toEqual(solution);
})
