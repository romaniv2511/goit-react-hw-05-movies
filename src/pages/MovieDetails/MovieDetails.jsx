import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchFilmById } from '../../components/service/API';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import {
  GoBackButton,
  PrimaryInfoBox,
  ExtraInfoBox,
  ExtraInfoList,
  ExtraInfoLink,
} from './MovieDetails.styles';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);

    fetchFilmById(movieId)
      .then(movieDetails => {
        setMovieDetails(movieDetails);
      })
      .catch(error => {
        setIsError(true);
        console.log(error.message);
      });
  }, [movieId]);

  const location = useLocation();

  console.log(location.state);
  if (isError) {
    return <ErrorMessage />;
  }
  if (movieDetails) {
    const { title, userScore, overview, genres, posterUrl } = movieDetails;
    return (
      <>
        <GoBackButton to={location.state?.from ?? '/'}>
          &#129104; Go back
        </GoBackButton>
        <PrimaryInfoBox>
          <img alt="poster" src={posterUrl} height="300" />
          <div>
            <h1>{title}</h1>
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
              <ExtraInfoLink to="cast" state={{ from: location.state.from }}>
                Cast
              </ExtraInfoLink>
            </li>
            <li>
              <ExtraInfoLink to="reviews" state={{ from: location.state.from }}>
                Reviews
              </ExtraInfoLink>
            </li>
          </ExtraInfoList>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </ExtraInfoBox>
      </>
    );
  }
};

export default MovieDetails;
