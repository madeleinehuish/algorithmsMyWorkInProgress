const { whitespace1, whitespace2, replaceWhitespace, replaceWhitespaceRegex }  = require('./index');

test('whitespace1 is a function', () => {
  expect(typeof whitespace1).toEqual('function');
});

test('whitespace2 is a function', () => {
  expect(typeof whitespace2).toEqual('function');
});

test('replaceWhitespace is a function', () => {
  expect(typeof replaceWhitespace).toEqual('function');
})


const test1 = " Hey    how are   you  doing   today?"
const test2 = " Lets   try   this one... ";
const test3 = "Ok    one     more.  Ok!   ";


const testSolution1 = "Hey how are you doing today?";
const testSolution1a = "%20Hey%20%20%20%20how%20are%20%20%20you%20%20doing%20%20%20today?";
const testSolution2 = "Lets try this one...";
const testSolution2a = "%20Lets%20%20%20try%20%20%20this%20one...%20";
const testSolution3 = "Ok one more. Ok!";
const testSolution3a = "Ok%20%20%20%20one%20%20%20%20%20more.%20%20Ok!%20%20%20";

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

test('replaceWhitespace succesfully replaces white space with %20', () => {
  expect(replaceWhitespace(test1)).toEqual(testSolution1a)
})

test('replaceWhitespace succesfully replaces white space with %20', () => {
  expect(replaceWhitespace(test2)).toEqual(testSolution2a)
})

test('replaceWhitespace succesfully replaces white space with %20', () => {
  expect(replaceWhitespace(test3)).toEqual(testSolution3a)
})

test('replaceWhitespace succesfully replaces white space with %20', () => {
  expect(replaceWhitespaceRegex(test1)).toEqual(testSolution1a)
})

test('replaceWhitespace succesfully replaces white space with %20', () => {
  expect(replaceWhitespaceRegex(test2)).toEqual(testSolution2a)
})

test('replaceWhitespace succesfully replaces white space with %20', () => {
  expect(replaceWhitespaceRegex(test3)).toEqual(testSolution3a)
})
