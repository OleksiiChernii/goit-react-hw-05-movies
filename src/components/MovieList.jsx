import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {movieList.map(({ id, original_title }) => (
        <li key={id}>
          <Link
            to={
              location.pathname === '/'
                ? `movies/${id}`
                : location.pathname + `/${id}`
            }
            state={{ from: location }}
          >
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
