import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 12px 0;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: red;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: grey;
  }
`;
export const Main = styled.main`
  padding-top: 20px;
`;
