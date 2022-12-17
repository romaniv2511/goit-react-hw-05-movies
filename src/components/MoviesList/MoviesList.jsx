import { Link } from 'react-router-dom';

export const MoviesList = ({ films }) => (
  <ul>
    {films.map(({ id, title }) => (
      <li key={id}>
        <Link to="">{title}</Link>
      </li>
    ))}
  </ul>
);
