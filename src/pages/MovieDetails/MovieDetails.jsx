import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchFilmById } from '../../services/API';
import {
  GoBackButton,
  PrimaryInfoBox,
  ExtraInfoBox,
  ExtraInfoList,
  ExtraInfoLink,
} from './MovieDetails.styles';
import { Loader } from 'components/Loader/Loader';
import { noticeError } from 'services/notification';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const currentLocation = useLocation().state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);

    fetchFilmById(movieId)
      .then(movieDetails => {
        setMovieDetails(movieDetails);
      })
      .catch(error => {
        noticeError('Oops, something wrong!');
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) return <Loader />;

  if (movieDetails) {
    const { title, userScore, overview, genres, posterUrl } = movieDetails;
    return (
      <>
        <GoBackButton to={currentLocation}>&#129104; Go back</GoBackButton>
        <PrimaryInfoBox>
          <img alt="poster" src={posterUrl} width="200" height="300" />
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
              <ExtraInfoLink to="cast" state={{ from: currentLocation }}>
                Cast
              </ExtraInfoLink>
            </li>
            <li>
              <ExtraInfoLink to="reviews" state={{ from: currentLocation }}>
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
