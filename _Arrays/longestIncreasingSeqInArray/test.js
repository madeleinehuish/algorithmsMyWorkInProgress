

//Jest Tests
const { longestIncreasingSequence } = require('./index');

test('longestIncreasingSequence is a function', () => {
  expect(typeof longestIncreasingSequence).toEqual('function');
});

let testData1b = [1];
let testData2b = [1,1];
let testData3b = [3, 4, 1, 2];
let testData4b = [3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10];
let testData5b = [5, 6, 7, 8, 2, 1, -5, 6, 8, 10];

let solution1b = [];
let solution2b = [];
let solution3b = [3, 4];
let solution4b = [-43, -1, 0, 11];
let solution5b = [5, 6, 7, 8];

test('longestIncreasingSequence produces correct result', () => {
  expect(longestIncreasingSequence(testData1b)).toEqual(solution1b);
  expect(longestIncreasingSequence(testData2b)).toEqual(solution2b);
  expect(longestIncreasingSequence(testData3b)).toEqual(solution3b);
  expect(longestIncreasingSequence(testData4b)).toEqual(solution4b);
  expect(longestIncreasingSequence(testData5b)).toEqual(solution5b);
});
