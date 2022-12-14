import styled from "styled-components";

export const Input = styled.input`
    padding: 16px;

    border-radius: 8px;

    transition: transform .3s;

    &:hover {
        transform: scale(1.025);
    }

    &:focus {
        transform: scale(1.05);
    }
`;