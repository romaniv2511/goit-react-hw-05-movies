import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmsByName } from 'services/API';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { noticeError } from 'services/notification';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const updateQuery = value => setSearchParams({ query: value.trim() });

  useEffect(() => {
    if (!query) {
      return;
    }
    setFilms([]);
    setIsLoading(true);

    fetchFilmsByName(query)
      .then(data => {
        if (!data.length) {
          noticeError(`${query} is not found!`);
        }
        setFilms(data);
      })
      .catch(error => {
        console.log(error);
        noticeError('Oops, something wrong!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={updateQuery} />
      {isLoading && <Loader />}
      {films.length > 0 && <MoviesList films={films} />}
    </>
  );
};

export default Movies;
