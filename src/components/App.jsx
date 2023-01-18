import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { MovieList } from './MovieList';
import { getTranding } from 'tmdbAPI';
import { MovieDetails } from './MovieDetails';
import { MovieCast } from './MovieCast';
import { MovieReviews } from './MovieReviews';
import { MoviesSearch } from './MoviesSearch';

export const App = () => {
  const [tranding ,setTranding] = useState([]);
  
  useEffect(() => {
    getTranding().then(setTranding)
  }, []);

  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<MovieList movieList={tranding}/>}/>
        <Route path='movies' element={<MoviesSearch/>}/>
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<MovieCast/>}/>
          <Route path='reviews' element={<MovieReviews/>}/>
        </Route>
        <Route path='*' element={<div>Not found page</div>} />
      </Route>
    </Routes>
  );
};
