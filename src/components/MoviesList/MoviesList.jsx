import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { FilmsList, FilmLink } from './MoviesList.styles';

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

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
