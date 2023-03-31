import React, { useState } from 'react';

function ListFilm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [poster, setPoster] = useState(null);

  const searchMovies = async () => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=6e662efd=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.Search);
  };

  const getMovieDetails = async () => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=6e662efd=lord&page1+props.search`;
    const response = await fetch(url);
    const data = await response.json();
    setSelectedMovie(data);

    // Get the poster for the selected movie
    const posterUrl = data.Poster;
    if (posterUrl !== 'N/A') {
      setPoster(posterUrl);
    } else {
      setPoster(null);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div>
      {results.map((movie) => (
        <div key={movie.imdbID}>
          <h2 onClick={() => getMovieDetails(movie.imdbID)}>{movie.Title}</h2>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
      ))}
      {poster && (
        <div>
          <img src={poster} alt="Selected movie poster" />
        </div>
      )}
    </div>
  );
}

export default ListFilm;



