import { FilmsList, FilmLink } from './MoviesList.styles';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <FilmsList>
      {films.map(({ id, title }) => (
        <li key={id}>
          <FilmLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </FilmLink>
        </li>
      ))}
    </FilmsList>
  );
};
