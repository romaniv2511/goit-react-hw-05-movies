import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const GoBackButton = styled(Link)`
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 20px;
  border: 2px solid rgb(85, 26, 139);
  padding: 4px 16px;
  border-radius: 4px;
  color: rgb(85, 26, 139);
  background-color: #ffffff;

  text-decoration: none;
`;

export const PrimaryInfoBox = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 20px;
`;
export const ExtraInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 0 20px;
`;
export const ExtraInfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  list-style: none;
`;

export const ExtraInfoLink = styled(NavLink)`
  display: block;
  padding: 4px 16px;
  border-radius: 4px;
  color: #ffffff;
  background-color: rgb(85, 26, 139);
  text-decoration: none;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgba(85, 26, 139, 0.7);
  }
  &.active {
    border: 2px solid rgb(85, 26, 139);
    color: rgb(85, 26, 139);
    background-color: #ffffff;
  }
`;
