const { objectFlattenerModified, isValInObject } = require('./index.js');

let testObject = {
	firstObj: {
		test1: 'five',
		test2: 'six',
		test3: {
			test4: {
				canYouFindMe: "ha ha I'm here!!"
			},
			test5: 'twenty'
		},
		test4: 'thirty'
	}
}

//correctly found nested value for given key
test('nested function exists', () => {
  expect(typeof isValInObject).toEqual('function');
});

test('nested correctly finds value', () => {
  expect(isValInObject(testObject, "ha ha I'm here!!")).toBeTruthy();
});

test('nested successfully does not find a value not present', () => {
  expect(isValInObject(testObject, "ha ha I'm not here!!")).toBeFalsy();
});
