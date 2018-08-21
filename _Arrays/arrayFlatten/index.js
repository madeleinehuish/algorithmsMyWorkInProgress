
//these first three flatten functions only work for 2d arrays
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

/////multiple
//this one handles multiple levels deep with recursion
function flatten3d(arr) {
    let newArr =[];
    for(let sub of arr) {
        if(Array.isArray(sub)) {
             newArr = newArr.concat(flatten3d(sub));
        } else newArr = newArr.concat(sub);
    }
		// console.log('newArr: ', newArr);
    return newArr;
}


module.exports = { flatten, flatten2, flatten3, flatten3d };





// console.log(flatten(arr)) //=> [1, 3, 2, 4, 6, 8, 7, 5, 9]
// [1, 3, 2, ]
