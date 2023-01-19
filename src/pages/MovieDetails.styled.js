import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
    display: flex;
    gap: 20px;
    border-bottom: 1px solid black;
    padding: 20px 0;
`;

export const MovieDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const MovieDetailsImageWrapper = styled.img`
    width: 240px;
    height: auto;
`;

export const MovieDetailsButton = styled.button`
    border: none;
    background-color: rgb(220, 40, 30);
    border-radius: 5px;
    padding: 5px 10px;
    color: white;

    &:hover, &:focus{
        background-color: rgb(230, 100, 80);
    }
`;