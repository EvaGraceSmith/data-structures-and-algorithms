const repeatedWord = require('../hashmap-repeated-word');

// Test case: Multiple words repeated multiple times
test('Find repeated words with counts', () => {
  const input = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...";
  const expectedOutput = [
    { word: "it", count: 4 },
    { word: "was", count: 4 },
    { word: "the", count: 4 },
    { word: "of", count: 4 },
    { word: "times", count: 2 },
    { word: "age", count: 2 },
  ];

  const output = repeatedWord(input);

  expect(output).toEqual(expectedOutput);
});
