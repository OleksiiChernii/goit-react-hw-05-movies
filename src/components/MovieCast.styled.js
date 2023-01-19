import styled from 'styled-components';

export const MovieCastUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const MovieCastLi = styled.li`
  position: relative;
`;

export const MovieCastImg = styled.img`
  width: 200px;
  height: auto;
`;

export const MovieCastDiv = styled.div`
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 100%;
  height: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`;
