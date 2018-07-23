const sumOfAllDigits = require('./index');

test('sumOfAllDigits is a function', () => {
  expect(typeof sumOfAllDigits).toEqual('function');
});

test('sumOfAllDigits called with 123', () => {
  expect(sumOfAllDigits(123)).toEqual(6);
});

test('sumOfAllDigits called with 589', () => {
  expect(sumOfAllDigits(589)).toEqual(22);
});

test('sumOfAllDigits called with 24987', () => {
  expect(sumOfAllDigits(24987)).toEqual(30);
});

test('sumOfAllDigits called with 10101', () => {
  expect(sumOfAllDigits(10101)).toEqual(3);
});
