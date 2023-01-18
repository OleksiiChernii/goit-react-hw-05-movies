import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../tmdbAPI';
import { useState, useEffect, Suspense } from 'react';
import {
  MovieDetailsWrapper,
  MovieDetailsContainer,
  MovieDetailsImageWrapper,
} from './MovieDetails.styled';
import { BackButton } from '../components/BackButton';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const { poster, title, overview, vote_average, genres } = movie;
  return (
    <>
      <BackButton to={backLinkRef}>Go Back</BackButton>
      <MovieDetailsWrapper>
        <MovieDetailsImageWrapper src={poster} alt={title} />
        <MovieDetailsContainer>
          <h2>{title}</h2>
          <div>User score: {vote_average}</div>
          <div>
            <b>Overview</b>
          </div>
          <div>{overview}</div>
          <div>
            <b>Genres</b>
          </div>
          <div>{genres}</div>
        </MovieDetailsContainer>
      </MovieDetailsWrapper>
      <hr />
      <div>Additional information</div>
      <ul>
        <li>
          <NavLink to={'cast'}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
