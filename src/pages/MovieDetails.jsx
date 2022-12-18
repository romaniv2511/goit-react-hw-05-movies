import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchFilmById } from '../components/service/API';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [posterPath, setPosterPath] = useState('');
  const [filmName, setFilmName] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');

  const posterUrl = !posterPath
    ? 'https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg'
    : `https://image.tmdb.org/t/p/w500/${posterPath}`;

  useEffect(() => {
    fetchFilmById(movieId).then(({ data }) => {
      const { poster_path, title, vote_average, overview, genres } = data;

      setPosterPath(poster_path);
      setFilmName(title);
      setUserScore((vote_average * 10).toFixed(2));
      setOverview(overview);
      setGenres(genres.map(({ name }) => name).join(', '));
    });
  }, [movieId]);

  return (
    <main>
      <div>
        <img alt="poster" src={posterUrl} width="300" />
        <h1>{filmName}</h1>

        <p>
          <b>User score:</b> {userScore} %
        </p>

        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
