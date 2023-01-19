import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'tmdbAPI';
import { MovieCastUl, MovieCastLi, MovieCastImg, MovieCastDiv } from './MovieCast.styled';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <MovieCastUl>
      {cast.map(({ id, name, src }) => (
        <MovieCastLi key={id}>
          <MovieCastImg src={src} alt={name}/>
          <MovieCastDiv>{name}</MovieCastDiv>
        </MovieCastLi>
      ))}
    </MovieCastUl>
  );
};
