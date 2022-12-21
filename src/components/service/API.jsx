import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const AUTH_KEY = '234e7b4c27db682739301b8b46dc0452';

export const fetchTrendingFilms = async () =>
  await axios.get(`/3/trending/movie/day?api_key=${AUTH_KEY}`);

export const fetchFilmsByName = async name =>
  await axios.get(`/3/search/movie?api_key=${AUTH_KEY}&query=${name}`);

export const fetchFilmById = async movieId =>
  await axios.get(`/3/movie/${movieId}?api_key=${AUTH_KEY}`);

export const fetchReviews = async movieId =>
  await axios.get(`/3/movie/${movieId}/reviews?api_key=${AUTH_KEY}`);

export const fetchCast = async movieId =>
  await axios.get(`/3/movie/${movieId}/credits?api_key=${AUTH_KEY}`);
