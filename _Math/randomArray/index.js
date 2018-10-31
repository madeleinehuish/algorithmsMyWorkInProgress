//this shuffle function is from stack overflow:
//https://stackoverflow.com/questions/5836833/create-a-array-with-random-values-in-javascript

//this is a work in progress...

function shuffle(num) {
	let a = [];
	for (let i=0;i<num;++i) a[i]=i;

	// http://stackoverflow.com/questions/962802#962890
	function shuf(array) {
	  let tmp, current, top = array.length;
	  if(top) while(--top) {
	    current = Math.floor(Math.random() * (top + 1));
	    tmp = array[current];
	    array[current] = array[top];
	    array[top] = tmp;
	  }
	  return array;
	}

	return shuf(a);
}

function insertZero(arr) {
	let randomNum = Math.ceil(Math.random(arr.length) * arr.length);
	// console.log('randomNum: ', randomNum);
	let index = randomNum;
	let savedNumber = arr[randomNum];

	arr[index] = 0;

	return { index, savedNumber, arr };
}

function findZeroInArray(arr) {

}

module.exports = { shuffle, insertZero, findZeroInArray };
