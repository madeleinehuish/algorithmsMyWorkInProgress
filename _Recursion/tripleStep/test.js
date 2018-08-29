const { countWaysBruteForce, countWaysMemoized } = require('./index');

test('countWaysBruteForce function is defined', () => {
  expect(typeof countWaysBruteForce).toEqual('function');
});

test('countWaysMemoized function is defined', () => {
  expect(typeof countWaysMemoized).toEqual('function');
});


test('countWaysBruteForce calculates correct value', () => {
	expect(countWaysBruteForce(4)).toEqual(7);
	expect(countWaysBruteForce(5)).toEqual(13);
	expect(countWaysBruteForce(6)).toEqual(24);
});

test('countWaysMemoized calculates correct value', () => {
	expect(countWaysMemoized(4)).toEqual(7);
	expect(countWaysMemoized(5)).toEqual(13);
	expect(countWaysMemoized(6)).toEqual(24);
});
