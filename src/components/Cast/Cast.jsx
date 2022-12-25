import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { noticeError } from 'services/notification';
import { fetchCast } from 'services/API';
import { CastList, CastItem } from './Cast.styles';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('pending');

    fetchCast(movieId)
      .then(cast => {
        if (!cast.length) {
          setFetchStatus('error');
          return;
        }
        setCast(cast);
        setFetchStatus('success');
      })
      .catch(error => {
        console.log(error);
        noticeError('Oops, something wrong!');
      });
  }, [movieId]);

  if (fetchStatus === 'pending') return <Loader />;

  if (fetchStatus === 'error') return <p>Have no information</p>;

  if (fetchStatus === 'success')
    return (
      <CastList>
        {cast.map(({ id, name, character, profileUrl }) => {
          return (
            <CastItem key={id}>
              <img src={profileUrl} alt={name} width="200" />
              <p>{name}</p>
              <p>Character: {character}</p>
            </CastItem>
          );
        })}
      </CastList>
    );
};

export default Cast;
