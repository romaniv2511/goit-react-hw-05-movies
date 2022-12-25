import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const AUTH_KEY = '234e7b4c27db682739301b8b46dc0452';

export const fetchTrendingFilms = async () => {
  const { data } = await axios.get(`/3/trending/movie/day?api_key=${AUTH_KEY}`);
  const films = data.results.map(item => ({
    id: item.id,
    title: item.title,
  }));

  return films;
};

export const fetchFilmsByName = async name => {
  const { data } = await axios.get(
    `/3/search/movie?api_key=${AUTH_KEY}&query=${name}`
  );
  const films = data.results.map(item => ({
    id: item.id,
    title: item.title,
  }));

  return films;
};

export const fetchFilmById = async movieId => {
  const { data } = await axios.get(`/3/movie/${movieId}?api_key=${AUTH_KEY}`);
  const { poster_path, title, vote_average, overview, genres } = data;
  const movieDetails = {
    title,
    userScore: (vote_average * 10).toFixed(2),
    overview,
    genres: genres.map(({ name }) => name).join(', '),
    posterUrl: !poster_path
      ? 'https://cdn.pixabay.com/photo/2016/03/31/17/54/cartoon-1293990_960_720.png'
      : `https://image.tmdb.org/t/p/w500/${poster_path}`,
  };

  return movieDetails;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(
    `/3/movie/${movieId}/reviews?api_key=${AUTH_KEY}`
  );
  const reviews = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
  return reviews;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `/3/movie/${movieId}/credits?api_key=${AUTH_KEY}`
  );
  const cast = data.cast.map(({ id, name, character, profile_path }) => ({
    id,
    name,
    character,
    profileUrl: !profile_path
      ? 'https://cdn.pixabay.com/photo/2016/03/31/17/54/cartoon-1293990_960_720.png'
      : `https://image.tmdb.org/t/p/w500/${profile_path}`,
  }));
  return cast;
};
