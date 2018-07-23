const { factorialRecursive, factorialWhile, factorialFor } = require('./index.js');

test('factorial function exists', () => {
  expect(typeof factorialRecursive).toEqual('function');
});

//recursive
test('correctly finds factorial of 0, recursive', () => {
  expect(factorialRecursive(0)).toEqual(1);
});

test('correctly finds factorial of 5, recursive', () => {
  expect(factorialRecursive(5)).toEqual(120);
});

test('correctly finds factorial of 8, recursive', () => {
  expect(factorialRecursive(8)).toEqual(40320);
});

//while
test('correctly finds factorial of 0, while', () => {
  expect(factorialWhile(0)).toEqual(1);
});

test('correctly finds factorial of 5, while', () => {
  expect(factorialWhile(5)).toEqual(120);
});

test('correctly finds factorial of 8, while', () => {
  expect(factorialWhile(8)).toEqual(40320);
});

//for
test('correctly finds factorial of 0, for', () => {
  expect(factorialFor(0)).toEqual(1);
});

test('correctly finds factorial of 5, for', () => {
  expect(factorialFor(5)).toEqual(120);
});

test('correctly finds factorial of 8, for', () => {
  expect(factorialFor(8)).toEqual(40320);
});
