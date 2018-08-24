// const mySet = new Set([1, 2, 3, 4, 5]);
//
// const doesItHave5 = mySet.has(5);
// const setSize = mySet.size;
//
// // console.log(doesItHave5);
// // console.log(setSize);
//
// const myMap = new Map([[4,3], [3,2], [2,1], [1,0]]);
// let keys = myMap.keys();
// // console.log(keys);
//
// myMap.forEach(key =>{
// 	if(myMap.keys(key)){
// 		// console.log('Has ', key);
// 	}
// 	// if(myMap.values(key)){
// 	// 	console.log('Has ', key);
// 	// }
// })

function isSubset(arr, sub) { //maybe try this with a Map? or a Set?
	let arrMap = {};
	let subMap = {};

	arr.forEach(elem => {
		arrMap[elem] = (arrMap[elem] || 0) + 1;
	})

	for(let elem of sub) {
		if(!arrMap[elem]) return false;
	}

	return true;

}

// //doesn't work
// function isSubset(arr, sub) {
// 	let arrSet = new Set(arr);
// 	console.log('arr: ', arr, ', sub: ', sub);
// 	sub.forEach(elem => {
// 		if(!arrSet.has(elem)) {
// 			console.log('elem: ')
// 			return false;
// 		}
// 	})
// 	return true;
// }


function isSubsetDupsPossible(arr, sub) {
	let arrMap = {};
	let subMap = {};

	arr.forEach(elem => {
		arrMap[elem] = (arrMap[elem] || 0) + 1;
	})

	sub.forEach(elem => {
		subMap[elem] = (subMap[elem] || 0) + 1;
	})

	for(let elem in subMap) {
		if(!arrMap[elem]) return false;
		//duplicate case
		if((subMap[elem] > 1) && (arrMap[elem]) && (subMap[elem] !== arrMap[elem])) {
			return false;
		}
	}

	return true;
}

module.exports = { isSubset, isSubsetDupsPossible };
