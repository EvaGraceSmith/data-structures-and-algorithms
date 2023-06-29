'use strict';
function repeatedWord(string) {
  const words = string.toLowerCase().match(/\b\w+\b/g);
  const wordCount = {};

  for (let word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  const repeatedWords = [];
  for (let word in wordCount) {
    console.log(word, wordCount[word]);
    if (wordCount[word] > 1) {
      repeatedWords.push({ word, count: wordCount[word] });
    }
  }
console.log(repeatedWords);
  return repeatedWords;
}

module.exports = repeatedWord;
