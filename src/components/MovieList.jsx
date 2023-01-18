import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  const location = useLocation();
  return (
    <ul>
      {movieList.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
