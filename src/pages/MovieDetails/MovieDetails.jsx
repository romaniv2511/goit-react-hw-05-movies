import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchFilmById } from '../../components/service/API';
import {
  PrimaryInfoBox,
  ExtraInfoBox,
  ExtraInfoList,
  ExtraInfoLink,
} from './MovieDetails.styles';

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
    <>
      <PrimaryInfoBox>
        <img alt="poster" src={posterUrl} height="300" />
        <div>
          <h1>{filmName}</h1>

          <p>
            <b>User score:</b> {userScore} %
          </p>

          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </PrimaryInfoBox>
      <ExtraInfoBox>
        <h3>Additional information</h3>
        <ExtraInfoList>
          <li>
            <ExtraInfoLink to="cast">Cast</ExtraInfoLink>
          </li>
          <li>
            <ExtraInfoLink to="reviews">Reviews</ExtraInfoLink>
          </li>
        </ExtraInfoList>
        <Outlet />
      </ExtraInfoBox>
    </>
  );
};
