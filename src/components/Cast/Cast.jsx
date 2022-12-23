import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/service/API';
import { CastList, CastItem } from './Cast.styles';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(({ data }) => {
      const cast = data.cast.map(({ id, name, character, profile_path }) => ({
        id,
        name,
        character,
        profile_path,
      }));
      setCast(cast);
    });
  }, [movieId]);

  return !cast.length ? (
    <p>Have no information</p>
  ) : (
    <CastList>
      {cast.map(({ id, name, character, profile_path }) => {
        const photo = !profile_path
          ? 'https://cdn.pixabay.com/photo/2016/03/31/17/54/cartoon-1293990_960_720.png'
          : `https://image.tmdb.org/t/p/w500/${profile_path}`;
        return (
          <CastItem key={id}>
            <img src={photo} alt={name} width="200" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
