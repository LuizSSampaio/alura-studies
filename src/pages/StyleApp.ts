import styled from "styled-components";

export const Grid = styled.div`
    color: white;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;

    height: 100vh;

    @media screen and (max-width: 520px) {
        flex-direction: column;
    }
`;

export const Col = styled.div`
    padding: 9%;
`;