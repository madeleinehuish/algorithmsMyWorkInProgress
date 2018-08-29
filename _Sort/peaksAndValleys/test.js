const { peaksAndValleysSorted, peaksAndValleysUnsorted } = require('./index');

test('peaksAndValleysSorted is a function', () => {
	expect(typeof peaksAndValleysSorted).toEqual('function');
})

const testArr1 = [8, 4, 6, 5, 2, 10, -2, 17, 3];

test('peaksAndValleysSorted correctly sorts function into alternating peaks and valleys', () => {
	let result = peaksAndValleysSorted(testArr1);
	// console.log('result: ', result);
	for(let i=0; i < result.length; i +=2) {
		if(i===result.length-1) {
			expect(result[i]).toBeGreaterThan(result[i-1]);
		} else {
			expect(result[i]).toBeGreaterThan(result[i+1]);
		}
	}
})

test('peaksAndValleysSorted correctly sorts function into alternating peaks and valleys', () => {
	let result = peaksAndValleysUnsorted(testArr1);
	// console.log('result: ', result);
	for(let i=0; i < result.length; i +=2) {
		if(i===result.length-1) {
			expect(result[i]).toBeLessThan(result[i-1]);
		} else {
			expect(result[i]).toBeLessThan(result[i+1]);
		}
	}
})
