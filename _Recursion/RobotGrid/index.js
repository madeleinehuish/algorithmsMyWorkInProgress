/* We have a robot that starts in the upper right hand corner of a grid (0, 0) and can move right and down. Some cells though are blocked (0, which is falsy) and can't be traversed. Come up with a path to get the robot to the bottom right. */

// We can work backwards and use recursion to go from the end to the start
// You can use memoization if you want to avoid duplicate work

// modern es6 way of writing this with Class and also memoization

//after looking through CTCI i'm thinking maybe a straightup function with extra parameters for path and also failpoints


function findPath(maze, row, col, path=[]) {
  if(!maze[row][col]) { //if the number at current row/col is 0 then return false
    return false
  };

  let validPath = false;
  let lastRow = maze[0].length - 1;
  let lastCol = maze.length - 1;

  let mazeEnd = lastRow === row && lastCol === col;
  // console.log('lastRow: ', lastRow);
  // console.log('lastCol: ', lastCol);
  // console.log('maze[row][col]: ' , maze[row][col]);
  // let mazeEnd = maze[0].length - 1 === row && maze.length - 1 === col;


  if (mazeEnd || findPath(maze, row, col + 1, path) || findPath(maze, row + 1, col, path)) {
    validPath = true;
    path.push(row + "," + col);
  }
  // console.log('path: ', path);
  return validPath;
}



module.exports = { findPath }





// function findPathAllDirections(maze, row, col, path=[], failed={}) {
//   if(!maze[row][col]) {
//     return false
//   };
//
//   if(failed[(row + "," + col)]) {
//     // console.log('found a fail');
//     return false;
//   }
//
//   let validPath = false;
//   let lastRow = maze[0].length - 1;
//   let lastCol = maze.length - 1;
//
//   let mazeEnd = lastRow === row && lastCol === col;
//   // console.log('lastRow: ', lastRow);
//   // console.log('lastCol: ', lastCol);
//   // console.log('maze[row][col]: ' , maze[row][col]);
//   // let mazeEnd = maze[0].length - 1 === row && maze.length - 1 === col;
//
//
//   if (mazeEnd || findPathAllDirections(maze, row, col + 1, path, failed) || findPathAllDirections(maze, row + 1, col, path, failed)
//          || findPathAllDirections(maze, row, col - 1, path, failed) || findPathAllDirections(maze, row - 1, col, path, failed)) {
//     validPath = true;
//     path.push(row + "," + col);
//   }
//   console.log('path rev: ', path.reverse());
//   return validPath;
// }









// found the base code from https://github.com/jmcilhargey/cracking-the-coding-interview/blob/master/chpt8-robot-in-a-grid.js
// I modified above for es6
// function FindPath() {
//   this.path = [];
// }
//
// FindPath.prototype.moveTheRobot = function(maze, row, col) {
//
//   if (!maze[row][col]) {
//     return false;
//   }
//
//   var validPath = false;
//   var mazeEnd = maze[0].length - 1 === row && maze.length - 1 === col;
// i added these logs...
// console.log('maze[0].length - 1: ',maze[0].length - 1);
// console.log('row: ', row);
// console.log('maze.length - 1: ', maze.length - 1);
// console.log('column: ', col);
// console.log('mazeEnd: ', mazeEnd)
//
//   if (mazeEnd || this.moveTheRobot(maze, row, col + 1) || this.moveTheRobot(maze, row + 1, col)) {
//
//     validPath = true;
//     this.path.push(row + "," + col);
//   }
//   return validPath;
// };


//this was my attempt at a class in es6 syntax. it works but difficult to memoize
// class FindPath {
//   constructor() {
//     this.path = [];
//   }
//
//   moveTheRobot(maze, row, col) {
//     if(!maze[row][col]) {
//       return false
//     };
//
//     let validPath = false;
//     let mazeEnd = maze[0].length - 1 === row && maze.length - 1 === col;
//
//
//     if (mazeEnd || this.moveTheRobot(maze, row, col + 1) || this.moveTheRobot(maze, row + 1, col)) {
//       validPath = true;
//       this.path.push(row + "," + col);
//     }
//
//     return validPath;
//   }
//
// }

// //redo this according to CTCI and see if can rewrite it after the java and then compare how many iterations it takes
// function findPathB(maze, row, col, path=[], visited={}) {
//   if(visited[(row + "," + col)]) return false;
//   visited[(row + "," + col)] = true;
//
//   if(!maze[row][col]) {
//     return false
//   };
//   // console.log('failed: ', failed);
//   // console.log('maze[row][col]: ', maze[row][col]);
//
//   let validPath = false;
//   let mazeEnd = maze[0].length - 1 === row && maze.length - 1 === col;
//
//
//   if (mazeEnd || findPathB(maze, row, col + 1, path, visited) || findPathB(maze, row + 1, col, path, visited)) {
//     validPath = true;
//     path.push(row + "," + col);
//   }
//
//   return validPath;
// }
