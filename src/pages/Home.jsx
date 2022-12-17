import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from '../components/service/API';
import { MoviesList } from '../components/MoviesList/MoviesList';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchTrendingFilms().then(data => setFilms(data.data.results));
  }, []);

  return <MoviesList films={films} />;
};
