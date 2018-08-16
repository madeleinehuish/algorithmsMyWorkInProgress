const S = require('./index');
const bubbleSort = S.bubbleSort;
const selectionSort = S.selectionSort;
const mergeSort = S.mergeSort;
const merge = S.merge;
const quickSort = S.quickSort;

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1,2,8,10,12]);
  });

  test('sorts an array', () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Quick sort', () => {
  test('sorts an array', () => {
    let testCase = [34, 67, 23, 12, 2, 1, 45, 87];
    let solution = [1, 2, 12, 23, 34, 45, 67, 87];
    expect(quickSort(testCase)).toEqual(solution);
  })
});
