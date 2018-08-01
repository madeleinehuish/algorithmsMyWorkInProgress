const maxSum = require('./index');

test('maxSum function exists', () => {
  expect(typeof maxSum).toEqual('function');
});

let testArr1 = [-5, 6, 7, 1, 4, -8, 16];

let solution1 = 26;

test('maxSum correctly finds maximum sub array', () => {
  expect(maxSum(testArr1)).toEqual(solution1);
});
