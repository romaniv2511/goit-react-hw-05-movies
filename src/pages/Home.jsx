import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from '../components/service/API';
import { MoviesList } from '../components/MoviesList/MoviesList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');

    fetchTrendingFilms()
      .then(data => setFilms(data.data.results))
      .catch(error => {
        setError('Oops, something wrong');
        console.log(error.message);
      });
  }, []);

  return error ? <p>{error}</p> : <MoviesList films={films} />;
};

export default Home;
