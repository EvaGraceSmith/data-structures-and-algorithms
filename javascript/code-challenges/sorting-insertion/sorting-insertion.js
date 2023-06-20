'use strict';

function insertionSort(input) {
  for (let i = 1; i < input.length; i++) {
    let value = input[i];
    let j = i - 1;

    while (j >= 0 && input[j] > value) {
      input[j + 1] = input[j];
      j--;
    }

    input[j + 1] = value;
  }

  return input;
}

module.exports = insertionSort;
