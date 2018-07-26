//using spread operator
function flatten(arr) {
	let newArr =[];
	for(let subArr of arr) {
		newArr.push(...subArr);
		// console.log('newArr: ', newArr);
	}
	// console.log('final: ', newArr);
	return newArr;
}

//using concat
function flatten2(arr) {
	let newArr =[];
	for(let subArr of arr) {
		newArr = newArr.concat(subArr);
		// console.log('newArr: ', newArr);
	}
	// console.log('final: ', newArr);
	return newArr;
}

//using reduce
function flatten3(arr) {
	return arr.reduce((acc, curr) => {
		return acc.concat(curr);
	}, [])
}


module.exports = { flatten, flatten2, flatten3 };
