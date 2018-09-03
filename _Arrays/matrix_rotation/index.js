//rotate a 2d matrix 90 degrees to right as per cracking the coding interview 1.7

//these are O(n) solutions

//clockwise rotation
function matrixRotate(grid) {
  let newGrid = [];
  let rowLength = Math.sqrt(grid.length);

  for (let i = 0; i < grid.length; i++) {

    //convert to col/row
    let row = Math.floor(i / rowLength);
    let col = i % rowLength;

    //find new col/row
    let newrow = col;
    let newcol = rowLength - row - 1;

    //convert back to index
    let newPosition = (rowLength * newrow) + newcol;
    newGrid[newPosition] = grid[i];

  }

  return newGrid;

}

//counterclockwiseRotation
function matrixRotateCounterClock(grid) {
  let newGrid = [];
  let rowLength = Math.sqrt(grid.length);

  for (let i = 0; i < grid.length; i++) {

    //convert to col/row
    let row = Math.floor(i / rowLength);
    let col = i % rowLength;

    //find new col/row (these lines are the only ones reversed from previous function)
    let newrow = rowLength - col - 1;
    let newcol = row;

    //convert back to index
    let newPosition = (rowLength * newrow) + newcol;
    newGrid[newPosition] = grid[i];

  }

  return newGrid;

}

module.exports =  { matrixRotate, matrixRotateCounterClock };

// // //console version (useful to see what's going on)
// function matrixRotate(grid) {
// 	let newGrid = [];
// 	let rowLength = Math.sqrt(grid.length);
// 	// newGrid.length = grid.length //this line from the original doesn't seem necessary
//
// 	for (let i = 0; i < grid.length; i++) {
// 			console.log('i: ', i);
// 			//convert to col/row
// 			let row = Math.floor(i / rowLength);
// 			console.log('row = Math.floor(i / rowLength): ', row);
// 	    let col = i % rowLength;
// 			console.log('col = i % rowLength: ', col);
//
// 			//find new col/row
// 			let newrow = col;
// 			console.log('newrow = col: ', newrow);
// 	    let newcol = rowLength - row - 1;
// 			console.log('newcol = rowLength - row - 1: ', newcol);
//
//
// 	    //convert back to index
// 	    let newPosition = newrow * rowLength + newcol;
// 			console.log('newPosition = newrow * rowLength + newcol: ', newPosition);
// 	    newGrid[newPosition] = grid[i];
// 			console.log('newGrid[newPosition]: ', newGrid[newPosition]);
// 			console.log('***********************************************');
// 	}
//
// 	return newGrid;
//
// }



// //my solution was based on this one... from stack overflow: https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript
//y is row and x is col

// function matrixRotate(grid) {
// 	let newGrid = [];
// 	let rowLength = Math.sqrt(grid.length);
// 	newGrid.length = grid.length
//
// 	for (let i = 0; i < grid.length; i++) {
// 	    //convert to x/y
// 	    let x = i % rowLength;
// 			console.log('x = i % rowLength: ', x);
// 	    let y = Math.floor(i / rowLength);
// 			console.log('y = Math.floor(i / rowLength): ', y);
//
// 	    //find new x/y
// 	    let newX = rowLength - y - 1;
// 			console.log('newX = rowLength - y - 1: ', newX);
// 	    let newY = x;
// 			console.log('newY = x: ', newY);
//
// 	    //convert back to index
// 	    let newPosition = newY * rowLength + newX;
// 			console.log('newPosition = newY * rowLength + newX: ', newPosition);
// 	    newGrid[newPosition] = grid[i];
// 			console.log('newGrid[newPosition]: ', newGrid[newPosition]);
// 			console.log('***********************************************');
// 	}
//
// 	return newGrid;
//
// }

// //these 2 were based on https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript
// //this version rotates the original array
// function rotateClockwise(a) {
//   let n=a.length;
//   for (let i=0; i<n/2; i++) {
//     for (let j=i; j<n-i-1; j++) {
//       let tmp=a[i][j];
//       a[i][j]=a[n-j-1][i];
//       a[n-j-1][i]=a[n-i-1][n-j-1];
//       a[n-i-1][n-j-1]=a[j][n-i-1];
//       a[j][n-i-1]=tmp;
//     }
//   }
//   return a;
// }
//
// //this version rotates the original array
// function rotateCounterClockwise(a){
//   let n=a.length;
//   for (let i=0; i<n/2; i++) {
//     for (let j=i; j<n-i-1; j++) {
//       let tmp=a[i][j];
//       a[i][j]=a[j][n-i-1];
//       a[j][n-i-1]=a[n-i-1][n-j-1];
//       a[n-i-1][n-j-1]=a[n-j-1][i];
//       a[n-j-1][i]=tmp;
//     }
//   }
//   return a;
// }



// // a crazy version from stack overflow that handles multiple cases including MxN
// //see http://jsfiddle.net/MrPolywhirl/NH42z/
// //and also https://stackoverflow.com/questions/42519/how-do-you-rotate-a-two-dimensional-array
// Number.prototype.mod = function (n) {
//     return ((this % n) + n) % n;
// }
//
// var trace = function (message) {
//     id = 'trace';
//     t = $('#' + id);
//     if (t.length < 1) t = $('<div>', {
//         'id': id
//     }).appendTo($('body'));
//     t.append($('<p>', {
//         'html': message
//     }));
// };
//
// var trace2 = function (label, message) {
//     trace('<strong>' + label + ':</strong><br /><br />' + message);
// };
//
// var pad = function (val, amt, ch) {
//     ch = typeof ch !== 'undefined' ? ch : ' ';
//     var str = val
//     var max = Math.abs(amt);
//     while (str.length < max) {
//         if (amt < 0) {
//             str += ch;
//         } else {
//             str = ch + str;
//         }
//     }
//     return str;
// };
//
// var printMatrix = function (matrix) {
//     var str = '';
//     for (var r = 0; r < matrix.length; r++) {
//         for (var c = 0; c < matrix[r].length; c++) {
//             var cell = matrix[r][c];
//             if (cell != 'undefined') {
//                 str += pad(cell, 2);
//             } else {
//                 str += '?';
//             }
//             if (c < matrix[r].length - 1) {
//                 str += ' |';
//             }
//         }
//         if (r < matrix.length - 1) {
//             str += '\n';
//             for (var i = 0; i < matrix[r].length; i++) {
//                 str += '---'
//                 if (i < matrix[r].length - 1) {
//                     str += '+';
//                 }
//             }
//             str += '\n';
//         }
//     }
//     return str;
// };
//
// var arrayFilled = function (width, height, value) {
//     for (var a = []; a.length < height;) {
//         for (var r = []; r.length < width;) {
//             r.push(value);
//         }
//         a.push(r);
//     }
//     return a;
// };
//
// var rotateMatrix = function (matrix, direction) {
//     direction = direction.mod(360) || 0;
//
//     var deepCopy = function (obj) {
//         if (Object.prototype.toString.call(obj) === '[object Array]') {
//             var out = [],
//                 i = 0,
//                 len = obj.length;
//             for (; i < len; i++) {
//                 out[i] = arguments.callee(obj[i]);
//             }
//             return out;
//         }
//         if (typeof obj === 'object') {
//             var out = {}, i;
//             for (i in obj) {
//                 out[i] = arguments.callee(obj[i]);
//             }
//             return out;
//         }
//         return obj;
//     }
//
//     var ret = deepCopy(matrix);
//
//     // Does not work with non-square matricies.
//     var transpose1 = function (m) {
//         for (var i = 0; i < m.length; i++) {
//             for (var j = i; j < m[0].length; j++) {
//                 var x = m[i][j];
//                 m[i][j] = m[j][i];
//                 m[j][i] = x;
//             }
//         }
//         return m;
//     };
//
//     // Too slow, builds new array THEN fills in the values.
//     var transpose2 = function (m) {
//         var result = arrayFilled(m.length, m[0].length, 0);
//         for (var i = 0; i < m.length; i++) {
//             for (var j = 0; j < m[0].length; j++) {
//                 result[j][i] = m[i][j];
//             }
//         }
//         return result;
//     };
//
//     // Efficiently builds and fills values at the same time.
//     var transpose3 = function (m) {
//         var result = new Array(m[0].length);
//         for (var i = 0; i < m[0].length; i++) {
//             result[i] = new Array(m.length - 1);
//             for (var j = m.length - 1; j > -1; j--) {
//                 result[i][j] = m[j][i];
//             }
//         }
//         return result;
//     };
//
//     var transpose = function (m) {
//         if (m.length === m[0].length) {
//             return transpose(m);
//         } else {
//             return transpose3(m);
//         }
//     };
//
//     var reverseRows = function (m) {
//         //for (var i = 0, k = m.length - 1; i < k; ++i, --k) {
//         //    var x = m[i];
//         //    m[i] = m[k];
//         //    m[k] = x;
//         //}
//         //return m;
//         return m.reverse();
//     };
//
//     var reverseCols = function (m) {
//         for (var i = 0; i < m.length; i++) {
//             //for (var j = 0, k = m[i].length - 1; j < k; ++j, --k) {
//             //    var x = m[i][j];
//             //    m[i][j] = m[i][k];
//             //    m[i][k] = x;
//             //}
//             m[i].reverse();
//         }
//         return m;
//     };
//
//     var rotate90Left = function (m) {
//         m = transpose(m);
//         m = reverseRows(m);
//         return m;
//     };
//
//     var rotate90Right = function (m) {
//         m = reverseRows(m);
//         m = transpose(m);
//         return m;
//     };
//
//     var rotate180 = function (m) {
//         m = reverseCols(m);
//         m = reverseRows(m);
//         return m;
//     };
//
//     if (direction == 90 || direction == -270) {
//         return rotate90Left(ret);
//     } else if (direction == -90 || direction == 270) {
//         return rotate90Right(ret);
//     } else if (Math.abs(direction) == 180) {
//         return rotate180(ret);
//     }
//
//     return matrix;
// };
//
// var tile = [
//     ['A', 'B', 'C'],
//     ['D', 'E', 'F'],
//     ['G', 'H', 'I'],
//     ['J', 'K', 'L']
// ];
//
// trace2('Rotate +180', printMatrix(rotateMatrix(tile, 180)));
// trace2('Rotate +90', printMatrix(rotateMatrix(tile, 90)));
// trace2('Orginal', printMatrix(tile));
// trace2('Rotate -90', printMatrix(rotateMatrix(tile, -90)));
// trace2('Rotate -180', printMatrix(rotateMatrix(tile, -180)));
