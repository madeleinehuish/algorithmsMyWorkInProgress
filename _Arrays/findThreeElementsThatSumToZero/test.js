const { findThreeNumbers, getPairsCount, getPairsCountStripDupes } = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('findThreeNumbers is a function', () => {
  expect(typeof findThreeNumbers).toEqual('function');
});

test('getPairsCount is a function', () => {
  expect(typeof getPairsCount).toEqual('function');
});


test('findThreeNumbers correctly finds three values that sum to zero', () => {
  let testArray = [1, 4, 7, -5, -2];
  findThreeNumbers(testArray);
  expect(console.log.mock.calls[0][0]).toEqual('Found 3 numbers: ', 1, 4, -5);
  expect(console.log.mock.calls[1][0]).toEqual('Found 3 numbers: ', 7, -5, -2);
  expect(console.log.mock.calls.length).toEqual(2);
});

test('findThreeNumbers correctly sees when array does not have 3 values that sum to zero', () => {
  let testArray = [1, 4, 2, 6, 10];
  findThreeNumbers(testArray);
  expect(console.log.mock.calls[0][0]).toEqual('Did not find any three numbers that summed to zero');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('getPairsCount correctly returns proper value', () => {
  expect(getPairsCount([1, 5, 6, 0, 12, -6, -6], 6)).toEqual(4);
});

test('getPairsCount correctly returns proper value', () => {
  expect(getPairsCount([5, 5, 5, 3, 7, 7, 3], 10)).toEqual(7);
});

test('getPairsCountStripDupes correctly returns proper value', () => {
  expect(getPairsCountStripDupes([1, 5, 6, 0, 12, -6, -6], 6)).toEqual(3);
});

test('getPairsCountStripDupes correctly returns proper value', () => {
  expect(getPairsCountStripDupes([5, 5, 5, 3, 7, 7, 3], 10)).toEqual(1);
});
