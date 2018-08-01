//differences with callbacks and promises
let fs = require('fs');

// #1 callback example
fs.readFile("sample.txt", 'utf8', (err, contents) => {
	if(err) {
		throw err;
	}

	console.log(contents);
})

console.log('Hi!');

// #2 old style promise example
function readFile2(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, 'utf8', (err, contents) => {
			if(err) {
				reject(err);
				return;
			}
			resolve(contents);
		})
	})
}

let promise = readFile2('sample2.txt');

promise.then(contents => {
	console.log(contents);
}, err => {
	console.error(err.message);
})

console.log('Hi 2!');

// #3 async await Examples
async function readFile3(file) {
	let contents = new Promise((resolve, reject) => {
		fs.readFile(file, 'utf8', (err, contents) => {
			if(err) {
				reject(err);
				return;
			}
			resolve(contents);
		})
	})
	let result = await contents;
	console.log(result);
}

readFile3('sample3.txt');
console.log('Hi 3!');
