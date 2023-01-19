import PropTypes from 'prop-types';
import { MovieListUl, MovieListLink } from './MovieList.styled';

export const MovieList = ({ movieList }) => {
  return (
    <MovieListUl>
      {movieList.map(({ id, original_title }) => (
        <li key={id}>
          <MovieListLink to={`/movies/${id}`}>
            {original_title}
          </MovieListLink>
        </li>
      ))}
    </MovieListUl>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
