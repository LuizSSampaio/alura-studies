import styled from "styled-components";

export const ListItem = styled.li`
    padding: 16px;
    margin: 12px 0 12px 0;
    display: flex;
    flex-direction: column;

    background-color: #4e45cc;
    color: #f0f0f0;

    border-radius: 8px;

    list-style: none;
    text-align: center;

    transition: transform .3s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Title = styled.h3`
    padding-bottom: 12px;
`;

export const ButtonContainer = styled.div`
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;

    height: 100%;

    @media screen and (max-width: 520px) {
        flex-direction: column;
    }
`;

export const Col = styled.div`
    padding: 1%;
`;