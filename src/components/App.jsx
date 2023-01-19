import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from '../pages/SharedLayout';
import { MovieCast } from './MovieCast';
import { MovieReviews } from './MovieReviews';

const MovieSearchPage = lazy(() => import('./MovieSearchPage'));
const MoviesTranding = lazy(() => import('./MoviesTranding'));
const MovieDetails = lazy(() => import('./../pages/MovieDetails'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MoviesTranding/>} />
        <Route path="movies" element={<MovieSearchPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<Navigate to='/'/>} />
      </Route>
    </Routes>
  );
};
