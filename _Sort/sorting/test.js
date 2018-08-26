const S = require('./index');
const bubbleSort = S.bubbleSort;
const selectionSort = S.selectionSort;
const mergeSort = S.mergeSort;
const merge = S.merge;
const quickSort = S.quickSort;
const findSmallestIndex = S.findSmallestIndex;


let testArr1 = [100, -40, 500, -124, 0, 21, 7];
let testArr2 = [7, 5, 3, 1, 2];


let solution1 = [-124, -40, 0, 7, 21, 100, 500];
let solution2 = [1, 2, 3, 5, 7];

function getArray1() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getArray2() {
  return [7, 5, 3, 1, 2];
}

function getSortedArray1() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

function getSortedArray2() {
  return [1, 2, 3, 5, 7];
}


describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArray1())).toEqual(getSortedArray1());
    expect(bubbleSort(getArray2())).toEqual(getSortedArray2());
  });
});

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArray1())).toEqual(getSortedArray1());
    expect(selectionSort(getArray2())).toEqual(getSortedArray2());
  });
});

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1,2,8,10,12]);
  });

  test('sorts an array', () => {
    // console.log('initial array: [7, 5, 3, 1, 2]'); //uncomment this and the comments in index.js to see mergeSort order
    expect(mergeSort(getArray1())).toEqual(getSortedArray1());
    expect(mergeSort(getArray2())).toEqual(getSortedArray2());
  });
});

describe('Quick sort', () => {
  test('sorts an array', () => {
    let testCase = [34, 67, 23, 12, 2, 1, 45, 87];
    let solution = [1, 2, 12, 23, 34, 45, 67, 87];
    expect(quickSort(testCase)).toEqual(solution);
  })
});
