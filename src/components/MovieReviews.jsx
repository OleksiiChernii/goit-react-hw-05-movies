import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'tmdbAPI';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState({ hasResults: false });

  useEffect(() => {
    getMovieReviews(movieId).then(setReview);
  }, [movieId]);

  return (
    <>
      {review.hasResults ? (
        <ul>
          {review.results.map(({ author, content, created_at }) => (
            <li key={created_at}>
              <h3>
                Author:
                {author}
              </h3>
              <div>{content}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie...</div>
      )}
    </>
  );
};
