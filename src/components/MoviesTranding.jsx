import { useState, useEffect } from 'react';
import { getTranding } from 'tmdbAPI';
import { MovieList } from './MovieList';

export const MoviesTranding = () => {
  const [tranding, setTranding] = useState([]);

  useEffect(() => {
    getTranding().then(setTranding);
  }, []);

  return <MovieList movieList={tranding} />;
};
