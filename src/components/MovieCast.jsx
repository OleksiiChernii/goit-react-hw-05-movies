import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'tmdbAPI';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, src }) => (
        <li key={id}>
          <img src={src} alt={name} width='100'/>
          <div>{name}</div>
        </li>
      ))}
    </ul>
  );
};
