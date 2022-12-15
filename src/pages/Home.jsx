import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from '../components/service/API';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchTrendingFilms().then(data => setFilms(data.data.results));
  }, []);

  return (
    <main>
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </main>
  );
};
