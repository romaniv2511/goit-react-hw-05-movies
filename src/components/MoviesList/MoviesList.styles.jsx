import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmsList = styled.ul`
  display: grid;
  grid-gap: 4px;
  margin-top: 20px;
`;

export const FilmLink = styled(Link)`
  color: #000;
  font-weight: 500;
  text-decoration: none;
  &:hover,
  &:focus {
    color: rgba(85, 26, 139, 0.7);
  }
  &:visited {
    color: rgb(85, 26, 139);
  }
`;
