const  { findPath, findPathB } = require('./index');

const matrix = [
                [1, 1, 0, 1, 1, 1],
                [1, 0, 0, 1, 1, 1],
                [1, 1, 0, 0, 1, 1],
                [1, 1, 1, 1, 0, 0],
                [1, 0, 1, 1, 0, 1],
                [0, 1, 0, 1, 1, 0],
                [0, 1, 0, 0, 1, 1]
              ];

const matrix2 = [
                  [1, 1, 0, 1, 1, 1],
                  [1, 0, 0, 1, 1, 1],
                  [0, 0, 0, 0, 0, 1],
                  [1, 1, 1, 1, 0, 0],
                  [1, 0, 1, 1, 0, 1],
                  [0, 1, 0, 1, 1, 1]
                ];

const matrix3 = [
                  [1, 1, 1, 1, 1, 1],
                  [1, 0, 0, 1, 0, 1],
                  [1, 0, 0, 1, 0, 1],
                  [1, 1, 0, 1, 0, 1],
                  [1, 0, 0, 1, 0, 1],
                  [1, 1, 0, 1, 0, 1]
                ];

const matrix4 = [
                  [1, 1, 1, 1, 1, 1, 1],
                  [0, 0, 1, 0, 0, 0, 1],
                  [0, 0, 1, 0, 0, 0, 0],
                  [1, 1, 1, 0, 1, 1, 1],
                  [1, 0, 0, 0, 1, 0, 0],
                  [1, 1, 1, 1, 1, 0, 1]
                ];


test('find path function successfully finds a way through a valid maze', () => {
  expect(findPath(matrix, 0, 0)).toEqual(true);
});

test('find path function successfully throws false for an invalid maze', () => {
  expect(findPath(matrix2, 0, 0)).toEqual(false);
});

test('find path function successfully finds a way through a valid maze', () => {
  expect(findPath(matrix3, 0, 0)).toEqual(true);
});

// test('find path function successfully finds a way through a valid maze', () => {
//   expect(findPathAllDirections(matrix4, 0, 0)).toEqual(true);
// });

// test('find path (more complex version) function successfully finds a way through a valid maze', () => {
//   expect(findPathB(matrix, 0, 0)).toEqual(true);
// });

// test('memoized version works to successfully find a way through a valid maze', () => {
//   expect(memoize(findPath(matrix, 0, 0))).toEqual(true);
// })


// test('FindPath is a class', () => {
//   expect(typeof FindPath.prototype.constructor).toEqual('function');
// });
//
// describe('FindPath', () => {
//   test('successfully finds a way through a valid maze', () => {
//     const newPath = new FindPath();
//     const matrix = [
//                     [1, 1, 0, 1, 1, 1],
//                     [1, 0, 0, 1, 1, 1],
//                     [1, 1, 0, 0, 1, 1],
//                     [1, 1, 1, 1, 0, 0],
//                     [1, 0, 1, 1, 0, 1],
//                     [0, 1, 0, 1, 1, 1]
//                   ];
//
//     expect(newPath.moveTheRobot(matrix, 0, 0)).toEqual(true);
//   });
//
//   test('memoize version successfully finds a way through a valid maze', () => {
//     const newPath2 = new FindPath();
//
//     const matrix = [
//                     [1, 1, 0, 1, 1, 1],
//                     [1, 0, 0, 1, 1, 1],
//                     [1, 1, 0, 0, 1, 1],
//                     [1, 1, 1, 1, 0, 0],
//                     [1, 0, 1, 1, 0, 1],
//                     [0, 1, 0, 1, 1, 1]
//                   ];
//
//     expect(memoize(newPath2.moveTheRobot(matrix, 0, 0))).toEqual(true);
//   });
//
// });
