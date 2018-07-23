const mySet = new Set([1, 2, 3, 4, 5]);

const doesItHave5 = mySet.has(5);
const setSize = mySet.size;

console.log(doesItHave5);
console.log(setSize);

const myMap = new Map([[4,3], [3,2], [2,1], [1,0]]);
let keys = myMap.keys();
console.log(keys);

myMap.forEach(key =>{
	if(myMap.keys(key)){
		console.log('Has ', key);
	}
	// if(myMap.values(key)){
	// 	console.log('Has ', key);
	// }
})
