import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
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
