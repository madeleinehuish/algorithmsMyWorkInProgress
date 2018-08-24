const { isPermutation } = require('./index');

test('isPermutation is a function', () => {
  expect(typeof isPermutation).toEqual('function');
});

let testString1 = "Madeleine is fucking awesome";
let testString1b = "if sucking emosewa";
let testString1c = "is so fucking emoszwa";
let testString1d = "Madeleine is so fucking awesome and badass";
let testString1e = "Madeleine is so fucking awesome";


test('isPermutation correctly determines permutation', () => {
  expect(isPermutation(testString1, testString1b)).toEqual(true);
});

test('isPermutation correctly determines permutation when substring is same as original', () => {
  expect(isPermutation(testString1, testString1e)).toEqual(true);
});

test('isPermutation correctly shows false for non permutation', () => {
  expect(isPermutation(testString1, testString1c)).toEqual(false);
});

test('isPermutation correctly shows false for sub string longer than original', () => {
  expect(isPermutation(testString1, testString1d)).toEqual(false);
});
