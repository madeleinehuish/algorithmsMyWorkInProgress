// i reworked the basic ideas from solution from https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
// original code from that site in Class format is below commented out


// my solution
function mean(arr) {
  let rawMean = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0)/arr.length;

  return parseFloat(rawMean.toFixed(2));
}

function median(arr) {
  let sorted = arr.sort();
  //start with even length case
  if(sorted.length%2 === 0) {
      return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  }
  //odd case
  return sorted[Math.floor(sorted.length / 2)]
}

function mode(arr) {
  let table = {};
  let modes = [];
  let max = 0;

  for(let elem of arr) {
    table[elem] = (table[elem] || 0) + 1;
  }
  for(let elem in table) {
    let value = parseFloat(elem);
    let count = table[elem];
    if(count > max) {
      modes = [value];
      max = count;
    } else if (count === max) modes.push(value);
  }

  if(modes.length === Object.keys(table).length) modes = [];

  return modes;

}

module.exports = { mean, median, mode };

// class Stats {
//     constructor(array) {
//         this.array = array;
//     }
//
//     static round(value, round = 2) {
//         return Math.round(value * Math.pow(10, round)) / Math.pow(10, round);
//     }
//
//     mean() {
//         return this.array.reduce((sum, value) => sum + value, 0) / this.array.length;
//     }
//
//     median() {
//         const arraySorted = this.array.sort();
//         return arraySorted.length % 2 === 0
//             //if array is even length have to take average of two middle values
//             ? (arraySorted[arraySorted.length / 2 - 1] +
//                     arraySorted[arraySorted.length / 2]) /
//                     2
//             : arraySorted[Math.floor(arraySorted.length / 2)];
//     }
//
//     mode() {
//         const table = {};
//         this.array.forEach(value => (table[value] = table[value] + 1 || 1));
//
//         let modes = [];
//         let max = 0;
//         for (const key in table) {
//             const value = parseFloat(key);
//             const count = table[key];
//             if (count > max) {
//                 modes = [value];
//                 max = count;
//             } else if (count === max) modes.push(value);
//         }
//
//         if (modes.length === Object.keys(table).length) modes = [];
//
//         return modes;
//     }
// }
//
// module.exports = Stats;
