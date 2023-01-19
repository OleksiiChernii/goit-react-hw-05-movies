import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieAdditionalInfoPageWrapper = styled.section`
  padding: 20px 0;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MovieAdditionalInfoPageUl = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MovieAdditionalInfoPageLink = styled(NavLink)`
  display: inline-block;
  padding: 5px;
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: lightblue;
    color: rgb(30, 30, 30);
  }
  &.active{
    background-color: lightgrey;
    color: rgb(30, 40, 30);
  }
`;
