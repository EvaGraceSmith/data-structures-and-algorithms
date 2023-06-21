'use strict';

const mergeSort = require('../sorting-merge');

describe('Merge Sort Test', () => {
  it('should sort the input array in ascending order', () => {
    // Test case 1
    let input = [8, 4, 23, 42, 16, 15];
    let expected = [4, 8, 15, 16, 23, 42];
    mergeSort(input);
    expect(input).toEqual(expected);

    // Test case 2
    input = [20, 18, 12, 8, 5, -2];
    expected = [-2, 5, 8, 12, 18, 20];
    mergeSort(input);
    expect(input).toEqual(expected);

    // Test case 3
    input = [5, 12, 7, 5, 5, 7];
    expected = [5, 5, 5, 7, 7, 12];
    mergeSort(input);
    expect(input).toEqual(expected);

    // Test case 4
    input = [2, 3, 5, 7, 13, 11];
    expected = [2, 3, 5, 7, 11, 13];
    mergeSort(input);
    expect(input).toEqual(expected);
  });

  it('should return the input array if it is already sorted', () => {
    const input = [1, 2, 3, 4, 5];
    mergeSort(input);
    expect(input).toEqual(input);
  });

  it('should return an empty array if the input array is empty', () => {
    const input = [];
    mergeSort(input);
    expect(input).toEqual([]);
  });
});

