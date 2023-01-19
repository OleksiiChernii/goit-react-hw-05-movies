import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'tmdbAPI';
import { MovieDetailsButton } from './MovieDetails.styled';
import MoviesDetailsPage from './MovieDetailsPage';
import {MovieAdditionalInfoPage} from './MovieAdditionalInfoPage'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <MovieDetailsButton onClick={() => navigate(-1)}>Go Back</MovieDetailsButton>
      <MoviesDetailsPage movie={movie} />
      <MovieAdditionalInfoPage />
      <Outlet />
    </>
  );
};

export default MovieDetails;
