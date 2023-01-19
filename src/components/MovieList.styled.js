import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieListUl = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MovieListLink = styled(Link)`
  display: inline-block;
  padding: 5px;
  border-radius: 3px;
  &:hover,
  &:focus {
    color: lightgrey;
    background-color: rgb(10, 10, 10);
  }
`;
