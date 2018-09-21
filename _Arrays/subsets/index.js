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

function isSubset(arr, sub) {
	let arrMap = {};
	// let subMap = {};

	arr.forEach(elem => {
		arrMap[elem] = (arrMap[elem] || 0) + 1;
	})

	for(let elem of sub) {
		if(!arrMap[elem]) return false;
	}

	return true;

}

//this also works
// function isSubset(arr, sub) {
// 	let arrSet = new Set();
//
// 	for(let char of arr) {
// 		arrSet.add(char);
// 	}
//
// 	for(let elem of sub) {
// 		if(!arrSet.has(elem)) return false;
// 	}
//
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


//Using Set() in ES6 (from mozilla docs)

function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function union(setA, setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

//Examples
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
difference(setA, setC); // => Set [1, 2]
