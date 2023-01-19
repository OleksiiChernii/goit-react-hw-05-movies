import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'tmdbAPI';
import { MovieReviewsWrapper, MovieReviewsUl, MovieReviewsLi } from './MovieReviews.styled';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState({ hasResults: false });

  useEffect(() => {
    getMovieReviews(movieId).then(setReview);
  }, [movieId]);

  return (
    <MovieReviewsWrapper>
      {review.hasResults ? (
        <MovieReviewsUl>
          {review.results.map(({ id, author, content, created_date }) => (
            <MovieReviewsLi key={id}>
              <h3>
                Author:{' "'}
                {author}
                {' "posted at '}
                {created_date.toLocaleDateString()}
              </h3>
              <div>{content}</div>
            </MovieReviewsLi>
          ))}
        </MovieReviewsUl>
      ) : (
        <div>We don't have any reviews for this movie...</div>
      )}
    </MovieReviewsWrapper>
  );
};
