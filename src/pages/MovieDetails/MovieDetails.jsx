import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchFilmById } from '../../components/service/API';
import {
  GoBackButton,
  PrimaryInfoBox,
  ExtraInfoBox,
  ExtraInfoList,
  ExtraInfoLink,
} from './MovieDetails.styles';

const MovieDetails = ({ state }) => {
  const { movieId } = useParams();
  const [posterPath, setPosterPath] = useState('');
  const [filmName, setFilmName] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');

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

  const posterUrl = !posterPath
    ? 'https://cdn.pixabay.com/photo/2016/03/31/17/54/cartoon-1293990_960_720.png'
    : `https://image.tmdb.org/t/p/w500/${posterPath}`;

  const location = useLocation();

  return (
    <>
      <GoBackButton to={location.state?.from ?? '/'}>
        &#129104; Go back
      </GoBackButton>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ExtraInfoBox>
    </>
  );
};

export default MovieDetails;
