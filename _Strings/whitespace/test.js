const { whitespace1, whitespace2 }  = require('./index');

test('whitespace1 is a function', () => {
  expect(typeof whitespace1).toEqual('function');
});

test('whitespace2 is a function', () => {
  expect(typeof whitespace2).toEqual('function');
});


const test1 = " Hey    how are   you  doing   today?"
const test2 = " Lets   try   this one... ";
const test3 = "Ok    one     more.  Ok!   ";


const testSolution1 = "Hey how are you doing today?";
const testSolution2 = "Lets try this one...";
const testSolution3 = "Ok one more. Ok!";

test('whitespace1 successfully removed on test 1', () => {
  expect(whitespace1(test1)).toEqual(testSolution1);
});

test('whitespace1 successfully removed on test 2', () => {
  expect(whitespace1(test2)).toEqual(testSolution2);
});

test('whitespace1 successfully removed on test 3', () => {
  expect(whitespace1(test3)).toEqual(testSolution3);
});

test('whitespace2 successfully removed on test 1', () => {
  expect(whitespace2(test1)).toEqual(testSolution1);
});

test('whitespace2 successfully removed on test 2', () => {
  expect(whitespace2(test2)).toEqual(testSolution2);
});

test('whitespace2 successfully removed on test 3', () => {
  expect(whitespace2(test3)).toEqual(testSolution3);
});
