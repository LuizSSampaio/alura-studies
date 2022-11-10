import React from "react";
import styled from "styled-components";

const Button = (props: any) => {
    const Button = styled.button`

        background-color: ${props.primary ? "#295be6" : "#e4e4e4"};
        color: ${props.primary ? "#f0f0f0" : "#000"};

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
