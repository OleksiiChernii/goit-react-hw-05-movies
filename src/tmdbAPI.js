const API_KEY = 'a75e60a5c22ba1274bb02e7198f44598';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export const getTranding = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const data = await defaultFetch(url);
  return data.results.map(({ id, original_title }) => ({ id, original_title }));;
};

export const searchMovie = async (name, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=${page}&include_adult=false`;
  const data = await defaultFetch(url);
  return data.results.map(({ id, original_title }) => ({ id, original_title }));
};

export const getMovieDetails = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const data = await defaultFetch(url);
  const { id, title, poster_path, overview, genres, vote_average } = data;
  return {
    id,
    title,
    poster: IMG_PATH + poster_path,
    overview,
    genres: genres.map(({ name }) => name).join(', '),
    vote_average,
  };
};

export const getMovieCredits = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const data = await defaultFetch(url);
  return data.cast
    .filter(({ profile_path }) => profile_path)
    .map(({ id, name, profile_path }) => ({
      id,
      name,
      src: IMG_PATH + profile_path,
    }));
};

export const getMovieReviews = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const data = await defaultFetch(url);
  return {
    hasResults: data.total_results !== 0,
    results: data.results,
  };
};

const defaultFetch = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('bad request');
  }
  return await response.json();
};
