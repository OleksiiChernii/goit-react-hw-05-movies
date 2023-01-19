import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'tmdbAPI';
import MoviesDetailsPage from './MovieDetailsPage';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <MoviesDetailsPage movie={movie} />
      <hr />
      <div>Additional information</div>
      <ul>
        <li>
          <NavLink to={'cast'} replace>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={'reviews'} replace>
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
