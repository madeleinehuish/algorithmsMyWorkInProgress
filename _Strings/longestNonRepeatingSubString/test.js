//Jest Tests
const { longestNonRepeatingSubString, longestNonRepeatingSubStringNonOptimal } = require('./index');

test('longestNonRepeatingSubString is a function', () => {
  expect(typeof longestNonRepeatingSubString).toEqual('function');
});

test('longestNonRepeatingSubStringNonOptimal is a function', () => {
  expect(typeof longestNonRepeatingSubStringNonOptimal).toEqual('function');
});

let testData1 = 'abcabcbb';
let testData2 = 'bbbbb';
let testData3 = 'pwwkew';
let testData4 = 'abccdefgh';
let testData5 = 'aabcd';

let solution1 = 3;
let solution2 = 1;
let solution3 = 3;
let solution4 = 6;
let solution5 = 4;

test('longestNonRepeatingSubString correctly identifies longest substring', () => {
  expect(longestNonRepeatingSubString(testData1)).toEqual(solution1);
  expect(longestNonRepeatingSubString(testData2)).toEqual(solution2);
  expect(longestNonRepeatingSubString(testData3)).toEqual(solution3);
  expect(longestNonRepeatingSubString(testData4)).toEqual(solution4);
  expect(longestNonRepeatingSubString(testData5)).toEqual(solution5);
});

// test('longestNonRepeatingSubStringNonOptimal correctly identifies longest substring', () => {
//   expect(longestNonRepeatingSubStringNonOptimal(testData1)).toEqual(solution1);
//   expect(longestNonRepeatingSubStringNonOptimal(testData2)).toEqual(solution2);
//   expect(longestNonRepeatingSubStringNonOptimal(testData3)).toEqual(solution3);
// });

// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3.
