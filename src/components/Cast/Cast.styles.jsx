import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 20px;
  list-style: none;
`;

export const CastItem = styled.li`
  width: calc((100% - 100px) / 6);
`;
