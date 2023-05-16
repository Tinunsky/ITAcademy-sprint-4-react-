const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(element => element.director);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, targetDirector) {
 return array.filter (element => element.director === targetDirector)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
   const directorMovies = getMoviesFromDirector(array, director)
   let scoreSum = directorMovies.reduce(
    (currentAverage, currentMovie) => currentAverage + currentMovie.score, 0  );
   const average = scoreSum / directorMovies.length;
  return Number(average.toFixed(2));
}
  
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const getAllTitles = array.map(element => element.title);
  const sortedTitles = getAllTitles.sort();
return sortedTitles.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
const sortedMovies = array.slice();
return sortedMovies.sort((a, b) => {
  if (a.year !== b.year) {
    return a.year - b.year;
  } else {
    return a.title.localeCompare(b.title);
  }
});
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
const moviesByGenre = array.filter(movie => movie.genre.includes(category)
&& movie.score > 0);
const totalScoreByCategory = 
moviesByGenre.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);

return Number((totalScoreByCategory / moviesByGenre.length).toFixed(2));
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
  getAllDirectors,
  getMoviesFromDirector,
  moviesAverageOfDirector,
  orderAlphabetically,
  orderByYear,
  moviesAverageByCategory,
  hoursToMinutes,
  bestFilmOfYear,
  };
}
