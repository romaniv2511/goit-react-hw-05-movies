import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmsByName } from 'components/service/API';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const Movies = () => {
  const [films, setFilms] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const updateQuery = value => setSearchParams({ query: value.trim() });

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsError(false);
    // setIsLoading(true);
    setFilms([]);

    fetchFilmsByName(query)
      .then(data => setFilms(data))
      .catch(error => {
        setIsError(true);
        console.log(error.message);
      });
    // .finally(setIsLoading(false));
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={updateQuery} />
      {/* {isLoading && <Loader />} */}
      {isError && <ErrorMessage />}
      {films.length > 0 && <MoviesList films={films} />}
    </>
  );
};

export default Movies;
