import { fetchFilmsByName } from 'components/service/API';
import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MoviesList } from '../components/MoviesList/MoviesList';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const updateSearchValue = value => setSearchValue(value.trim());
  useEffect(() => {
    if (!searchValue) {
      return;
    }

    fetchFilmsByName(searchValue).then(data => setFilms(data.data.results));
  }, [searchValue]);

  return (
    <>
      <SearchBar onSubmit={updateSearchValue} />
      <MoviesList films={films} />
    </>
  );
};
