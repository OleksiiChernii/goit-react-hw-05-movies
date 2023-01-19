import PropTypes from 'prop-types';
import {
  MovieDetailsWrapper,
  MovieDetailsContainer,
  MovieDetailsImageWrapper,
} from './MovieDetails.styled';

const MoviesDetailsPage = ({ movie }) => {
  const { poster, title, overview, vote_average, genres, year } = movie;
  return (
    <MovieDetailsWrapper>
      <MovieDetailsImageWrapper src={poster} alt={title} />
      <MovieDetailsContainer>
        <h2>
          {title} ({year})
        </h2>
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
  );
};

MoviesDetailsPage.propTypes = {
  moive: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
};
export default MoviesDetailsPage;
