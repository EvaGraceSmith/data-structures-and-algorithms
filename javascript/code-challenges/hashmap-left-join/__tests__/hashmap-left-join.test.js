const leftJoin = require('../hashmap-left-join');

// Example test case
describe('leftJoin', () => {
  test('performs LEFT JOIN operation on two hashmaps', () => {
    // Input hashmaps
    let synonyms = {
      "happy": "joyful",
      "sad": "unhappy",
      "hot": "sweltering"
    };

    let antonyms = {
      "happy": "sad",
      "cold": "hot"
    };

    // Expected output
    let expectedResult = [
      ["happy", "joyful", "sad"],
      ["sad", "unhappy", null],
      ["hot", "sweltering", null]
    ];

    // Perform LEFT JOIN operation
    let result = leftJoin(synonyms, antonyms);

    // Check if the result matches the expected output
    expect(result).toEqual(expectedResult);
  });
});
