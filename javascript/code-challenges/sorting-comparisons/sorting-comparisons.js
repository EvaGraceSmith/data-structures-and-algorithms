'use strict';

// Sorting movies by most recent year first
function sortByYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

// Sorting movies alphabetically by title, ignoring leading "A"s, "An"s, or "The"s
function sortByTitle(movies) {
  const ignoreWords = ["A", "An", "The"];

  const getTitleWithoutLeadingWords = (title) => {
    const words = title.split(" ");
    if (ignoreWords.includes(words[0])) {
      return words.slice(1).join(" ");
    } else {
      return title;
    }
  };

  return movies.sort((a, b) => {
    const titleA = getTitleWithoutLeadingWords(a.title);
    const titleB = getTitleWithoutLeadingWords(b.title);
    return titleA.localeCompare(titleB);
  });
}

// Sample data
const movies = [
  { title: "The Dark Knight", year: 2008, genres: ["Action", "Drama", "Crime"] },
  { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
  { title: "Fight Club", year: 1999, genres: ["Drama"] },
  { title: "Anchorman: The Legend of Ron Burgundy", year: 2004, genres: ["Comedy"] }
];

// Sorting movies by year and title
console.log(sortByYear(movies));
console.log(sortByTitle(movies));


module.exports = { sortByYear, sortByTitle };
