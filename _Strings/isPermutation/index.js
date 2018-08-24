//maybe also write a function checking for substrings

function isPermutation(str, sub) { //this is similar to isSubset in array methods

	let arrMap = {};
	let subMap = {};
	let arr = str.split('');

	arr.forEach(elem => {
		arrMap[elem] = (arrMap[elem] || 0) + 1;
	})

	for(let elem of sub) {
		if(!arrMap[elem]) return false;
	}

	return true;

}
//trying to get this working with a Map()
// function isPermutation(str1, str2) {
//
// 	if(str2.length > str1.length) return false;
//
// 	let subStringMap = new Map();
//
// 	for(let char of str2) { //making map of str2 as it is assumed it will be smaller or at least same size
// 		subStringMap.set(char, ((subStringMap.get(char) || 0) + 1))
// 	}
//
// 	console.log('subStringMap: ', subStringMap);
//
// 	for(let char of str1) {
// 		if(!subStringMap.has(char)) return false
// 	}
// 	return true;
// }


module.exports = { isPermutation }
