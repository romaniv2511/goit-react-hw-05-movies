// https://api.themoviedb.org/3/movie/550?api_key=234e7b4c27db682739301b8b46dc0452

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const AUTH_KEY = '234e7b4c27db682739301b8b46dc0452';

export const fetchTrendingFilms = async () => {
  const response = await axios.get(`/3/trending/movie/day?api_key=${AUTH_KEY}`);
  return response;
};

export const fetchFilmsByName = async name => {
  const response = await axios.get(
    `/3/search/movie?api_key=${AUTH_KEY}&query=${name}`
  );
  return response;
};
export const fetchFilmById = async movieId => {
  const response = await axios.get(`/3/movie/${movieId}?api_key=${AUTH_KEY}`);
  return response;
};
