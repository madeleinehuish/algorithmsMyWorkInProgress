const crosswordMatrix = require('./index');

test('crosswordMatix is a function', () => {
	expect(typeof crosswordMatrix).toEqual('function');
})

const testMatrix1 = [
	'a', 'b', 's', 'v',
	'r', 'o', 'x', 'o',
	'e', 'm', 'o', 'h',
	't', 'b', 'p', 'h',
	'o', 'l', 't', 's'
]

//first testing the horizontal/vertical
const word1a = 'bomb';
const word1b = 'pox';
const word1c = 'rox';
const word1d = 'home';
const wordNotPresent = 'stpom'

const rowLength = 4;
const columnLength = 5;

test('crosswordMatrix successfully finds word in matrix', () => {
	expect(crosswordMatrix(testMatrix1, word1a, rowLength, columnLength)).toEqual(true);
})

test('crosswordMatrix successfully finds word in matrix', () => {
	expect(crosswordMatrix(testMatrix1, wordNotPresent, rowLength, columnLength)).toEqual(false);
})
