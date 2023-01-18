import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovie } from 'tmdbAPI';
import { MovieList } from './MovieList';

export const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movie_search');
  const handleSubmit = e => {
    e.preventDefault();
    const [input] = e.target;
    setSearchParams({ movie_search: input.value });
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    searchMovie(movieName).then(setMovies);
  }, [movieName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" />
        <button type="button">Search</button>
      </form>
      <MovieList movieList={movies} />
    </>
  );
};
