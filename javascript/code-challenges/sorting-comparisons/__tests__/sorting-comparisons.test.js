const { sortByYear, sortByTitle } = require('../sorting-comparisons');

// Sample data
const movies = [
  { title: "The Dark Knight", year: 2008, genres: ["Action", "Drama", "Crime"] },
  { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
  { title: "Fight Club", year: 1999, genres: ["Drama"] },
  { title: "Anchorman: The Legend of Ron Burgundy", year: 2004, genres: ["Comedy"] }
];

test('Sort movies by year', () => {
  const sortedMovies = sortByYear(movies);
  expect(sortedMovies).toEqual([
    { title: "The Dark Knight", year: 2008, genres: ["Action", "Drama", "Crime"] },
    { title: "Anchorman: The Legend of Ron Burgundy", year: 2004, genres: ["Comedy"] },
    { title: "Fight Club", year: 1999, genres: ["Drama"] },
    { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] }
  ]);
});

test('Sort movies by title', () => {
  const sortedMovies = sortByTitle(movies);
  expect(sortedMovies).toEqual([
    { title: "Anchorman: The Legend of Ron Burgundy", year: 2004, genres: ["Comedy"] },
    { title: "The Dark Knight", year: 2008, genres: ["Action", "Drama", "Crime"] },
    { title: "Fight Club", year: 1999, genres: ["Drama"] },
    { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] }
  ]);
});








