const { lowestCostNode, dijkstra } = require('./index');

const problem = {
  start: {A: 5, B: 2},
  A: {C: 4, D: 2},
  B: {A: 8, D: 7},
  C: {D: 6, finish: 3},
  D: {finish: 1},
  finish: {}
};

const solution = { distance: 8, path: [ 'start', 'A', 'D', 'finish' ] }

test('dijkstra is a function', () => {
  expect(typeof dijkstra).toEqual('function');
});

test('dijkstra returns shortest path', () => {
  expect(dijkstra(problem)).toEqual(solution);
})
