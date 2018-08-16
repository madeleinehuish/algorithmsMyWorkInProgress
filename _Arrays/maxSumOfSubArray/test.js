const { maxSum, subArrWithGivenSum } = require('./index');

test('maxSum function exists', () => {
  expect(typeof maxSum).toEqual('function');
});

test('subArrWithGivenSum function exists', () => {
  expect(typeof subArrWithGivenSum).toEqual('function');
});

let testArr1 = [-5, 6, 7, 1, 4, -8, 16];
let testSum1 = 13;

let testArr2 = [1, 4, 20, 3, 10, 5];
let testSum2 = 33;

let testArr3 = [10, 2, -2, -20, 10];
let testSum3 = -10;

let testArr4 = [-10, 0, 2, -2, -20, 10];
let testSum4 = 20;

let solution1a = 26;
let solution1b = [1, 2];
let solution2 = [2, 4];
let solution3 = [0, 3];
let solution4 = -1;

test('maxSum correctly finds maximum sub array', () => {
  expect(maxSum(testArr1)).toEqual(solution1a);
});

test('subArrWithGivenSum correctly finds indices of sub array that adds to given sum', () => {
  expect(subArrWithGivenSum(testArr1, testSum1)).toEqual(solution1b);
})

test('subArrWithGivenSum correctly finds indices of sub array that adds to given sum', () => {
  expect(subArrWithGivenSum(testArr2, testSum2)).toEqual(solution2);
})

test('subArrWithGivenSum correctly finds indices of sub array that adds to given sum', () => {
  expect(subArrWithGivenSum(testArr3, testSum3)).toEqual(solution3);
})

test('subArrWithGivenSum correctly finds NO indices of sub array that adds to given sum', () => {
  expect(subArrWithGivenSum(testArr4, testSum4)).toEqual(solution4);
})
