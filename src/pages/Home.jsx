import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from 'components/service/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    fetchTrendingFilms()
      .then(data => setFilms(data))
      .catch(error => {
        setIsError(true);
        console.log(error.message);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isError ? <ErrorMessage /> : <MoviesList films={films} />}
    </>
  );
};

export default Home;
