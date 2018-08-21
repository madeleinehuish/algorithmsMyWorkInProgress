const symmetricPairs = require('./index');

test('symmetricPairs is a function', () => {
  expect(typeof symmetricPairs).toEqual('function');
});

let testArr1 = [[1, 2], [3, 4], [8, 9], [10, 11], [2, 1], [9, 8]];
let testArr2 = [[1, 2], [3, 4], [8, 9], [10, 11], [2, 1]];
let testArr3 = [[1, 2], [3, 4], [8, 9], [10, 11]];

let solution1 = [[1,2], [8, 9]];
let solution2 = [[1,2]];
let solution3 = [];

test('symmetricPairs successfully finds symmetric pairs in given array', () => {
  expect(symmetricPairs(testArr1)).toEqual(solution1);
});

test('symmetricPairs successfully finds symmetric pairs in given array', () => {
  expect(symmetricPairs(testArr2)).toEqual(solution2);
});

test('symmetricPairs successfully finds symmetric pairs in given array', () => {
  expect(symmetricPairs(testArr3)).toEqual(solution3);
});
