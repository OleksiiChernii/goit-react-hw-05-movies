import { MovieDetails } from 'pages/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../pages/SharedLayout';
import { MovieCast } from './MovieCast';
import { MovieReviews } from './MovieReviews';
import { MoviesSearch } from './MoviesSearch';
import { MoviesTranding } from './MoviesTranding';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MoviesTranding/>} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<div>Not found page</div>} />
      </Route>
    </Routes>
  );
};
