const { crosswordMatrix, matrixRotate, diagonal } = require('./index');

test('crosswordMatix is a function', () => {
	expect(typeof crosswordMatrix).toEqual('function');
})

const testMatrix1 = [
	['a', 'b', 's', 'v', 'x'],
	['r', 'o', 'x', 'o', 'e'],
	['e', 'm', 'o', 'h', 's'],
	['t', 'b', 'p', 'h', 'l'],
	['o', 'l', 't', 's', 'r']
]

//first testing the horizontal/vertical
const word1a = 'bomb';
const word1b = 'pox';
const word1c = 'rox';
const word1d = 'home';
const word1e = 'lhxb';
const wordNotPresent = 'stpom'


test('crosswordMatrix successfully finds word in matrix', () => {
	expect(crosswordMatrix(testMatrix1, word1a)).toEqual(true);
})

test('crosswordMatrix successfully finds word in matrix', () => {
	expect(crosswordMatrix(testMatrix1, word1b)).toEqual(true);
})

test('crosswordMatrix successfully finds word in matrix', () => {
	expect(crosswordMatrix(testMatrix1, word1c)).toEqual(true);
})

test('crosswordMatrix successfully finds word in matrix', () => {
	expect(crosswordMatrix(testMatrix1, word1d)).toEqual(true);
})

test('crosswordMatrix successfully finds word in matrix', () => {
	expect(crosswordMatrix(testMatrix1, 'lhxb')).toEqual(true);
})

test('crosswordMatrix successfully finds word in matrix', () => {
	expect(crosswordMatrix(testMatrix1, wordNotPresent)).toEqual(false);
})
