import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'tmdbAPI';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState({hasResults: false});

  useEffect(() => {
    getMovieReviews(movieId).then(setReview);
  }, [movieId]);

  return (
    <ul>
      {review.hasResults ? review.results.map(({ author, content, created_at }) => (
        <li key={created_at}>
          <div><b>Author: </b>{author}</div>
          <div>{content}</div>
        </li>
      )) : <div>We don't have any revies for this movie...</div>}
    </ul>
  );
};
