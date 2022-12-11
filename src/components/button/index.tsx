import React from "react";
import styled from "styled-components";

interface ButtonProps {
    primary?: boolean;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const Button = styled.button`

        background-color: ${props.primary ? "#4e45cc" : "#e4e4e4"};
        color: ${props.primary ? "#f0f0f0" : "#000"};

        font-size: 1em;
        font-weight: 700;

        border: none;
        border-radius: 10px;

        padding: 12px;

        cursor: pointer;

        transition: transform .3s;

        &:hover {
            transform: scale(1.05);
        }
    `;

    return <Button>{props.children}</Button>;
};

export default Button;
