import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from 'services/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { noticeError } from 'services/notification';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchTrendingFilms()
      .then(data => setFilms(data))
      .catch(error => {
        noticeError('Oops, something wrong!');
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {films.length > 0 && <MoviesList films={films} />}
    </>
  );
};

export default Home;
