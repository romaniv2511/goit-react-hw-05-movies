import { FilmsList, FilmLink } from './MoviesList.styles';

export const MoviesList = ({ films }) => (
  <FilmsList>
    {films.map(({ id, title }) => (
      <li key={id}>
        <FilmLink to={`/movies/${id}`}>{title}</FilmLink>
      </li>
    ))}
  </FilmsList>
);
