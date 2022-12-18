import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/service/API';

export const Cast = () => {
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
      console.log(cast);
      setCast(cast);
    });
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => {
        const photo = !profile_path
          ? 'https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg'
          : `https://image.tmdb.org/t/p/w500/${profile_path}`;
        return (
          <li key={id}>
            <img src={photo} alt={name} width="200" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
