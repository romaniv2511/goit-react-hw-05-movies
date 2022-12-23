import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmsByName } from 'components/service/API';

import { SearchBar } from '../components/SearchBar/SearchBar';
import { MoviesList } from '../components/MoviesList/MoviesList';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const updateQuery = value => setSearchParams({ query: value.trim() });
  useEffect(() => {
    if (!query) {
      return;
    }

    fetchFilmsByName(query).then(data => setFilms(data.data.results));
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={updateQuery} />
      <MoviesList films={films} />
    </>
  );
};

export default Movies;
