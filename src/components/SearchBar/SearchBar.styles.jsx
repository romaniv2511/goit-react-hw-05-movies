import styled from 'styled-components';

export const Input = styled.input`
  margin-left: 8px;
  border: 1px solid rgb(85, 26, 139);
  border-radius: 4px;
  padding: 4px 8px;
  width: 240px;
`;
export const Button = styled.button`
  margin-left: 4px;
  padding: 4px 16px;
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  background-color: rgb(85, 26, 139);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgba(85, 26, 139, 0.7);
  }
`;
