const { fib, memoizedFib } = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

test('memoizedFib function is defined', () => {
  expect(typeof memoizedFib).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib(4)).toEqual(3);
});

test('calculates correct fib value for 15', () => {
  expect(fib(39)).toEqual(63245986);
});

test('memoized calculates correct fib value for 1', () => {
  expect(memoizedFib(1)).toEqual(1);
});

test('memoized calculates correct fib value for 2', () => {
  expect(memoizedFib(2)).toEqual(1);
});

test('memoized calculates correct fib value for 3', () => {
  expect(memoizedFib(3)).toEqual(2);
});

test('memoized calculates correct fib value for 4', () => {
  expect(memoizedFib(4)).toEqual(3);
});

test('memoized calculates correct fib value for 15', () => {
  expect(memoizedFib(39)).toEqual(63245986);
});
