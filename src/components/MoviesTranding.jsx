import { useState, useEffect } from 'react';
import { getTranding } from 'tmdbAPI';
import { MovieList } from './MovieList';

const MoviesTranding = () => {
  const [tranding, setTranding] = useState([]);

  useEffect(() => {
    getTranding().then(setTranding);
  }, []);

  return (
    <>
      <h2>Tranding today</h2>
      <MovieList movieList={tranding}/>
    </>
  );
};

export default MoviesTranding;
