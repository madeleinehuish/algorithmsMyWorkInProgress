const {
        areThereAnyDupes,
        findFirstRepeatingCharacter,
        findLastRepeatingCharacter,
        findFirstNonRepeatingCharacter,
        findLastNonRepeatingCharacter
       } = require('./index.js');

test('areThereAnyDupes function exists', () => {
  expect(typeof areThereAnyDupes).toEqual('function');
});

test('findLastRepeatingCharacter function exists', () => {
  expect(typeof findLastRepeatingCharacter).toEqual('function');
});

test('findLastNonRepeatingCharacter function exists', () => {
  expect(typeof findLastNonRepeatingCharacter).toEqual('function');
});

test('findFirstRepeatingCharacter function exists', () => {
  expect(typeof findFirstRepeatingCharacter).toEqual('function');
});

test('findFirstNonRepeatingCharacter function exists', () => {
  expect(typeof findFirstNonRepeatingCharacter).toEqual('function');
});

test('duplicates found in duplicate array', () => {
  expect(areThereAnyDupes([1, 3, 6, 8, 10, 5, 3, 35])).toBeTruthy();
});

test('Array of non dupes shows false', () => {
  expect(areThereAnyDupes([1, 3, 6, 8, 10, 5, 31, 35])).toBeFalsy();
});

test('Check first repeating character shows true', () => {
  expect(findFirstRepeatingCharacter([1, 2, 2, 3, 3, 5, 6, 7, 7, 8])).toEqual(2);
})

test('Check first repeating character shows null if no repeating', () => {
  expect(findLastRepeatingCharacter([1, 2, 3, 4, 5, 7, 19, 20])).toEqual(null);
})

test('Check last repeating character shows true', () => {
  expect(findLastRepeatingCharacter([1, 2, 2, 3, 3, 5, 6, 7, 7, 8])).toEqual(7);
})

test('Check last repeating character shows null if no repeating', () => {
  expect(findLastRepeatingCharacter([1, 2, 3, 4, 5, 7, 19, 20])).toEqual(null);
})

test('Check first non-repeating character shows true', () => {
  expect(findFirstNonRepeatingCharacter([1, 2, 2, 3, 3, 5, 6, 7, 7, 8])).toEqual(1);
})

//failing
test('Check first non-repeating character shows null if all are repeating', () => {
  expect(findFirstNonRepeatingCharacter([1, 1, 3, 3, 5, 5, 19, 19])).toEqual(null);
})

test('Check last non-repeating character shows true', () => {
  expect(findLastNonRepeatingCharacter([1, 2, 2, 3, 3, 5, 6, 7, 7, 8])).toEqual(8);
})

test('Check last non-repeating character shows null if no repeating', () => {
  expect(findLastRepeatingCharacter([1, 2, 3, 4, 5, 7, 19, 20])).toEqual(null);
})
