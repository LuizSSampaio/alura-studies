import React from "react";
import styled from "styled-components";

interface ButtonProps {
    primary?: boolean,
    trash?: boolean,
    fullWidth?: boolean,
    onClick?: () => void,
    children: React.ReactNode,
}

const Button = (props: ButtonProps) => {
    const Button = styled.button`

        background-color: ${props.primary ? "#4e45cc" : (props.trash ? "rgba(0, 0, 0, 0)" : "#e4e4e4")};
        color: ${props.primary ? "#f0f0f0" : (props.trash ? "#ff0000" : "#000")};

        font-size: 1em;
        font-weight: 700;

        width: ${props.fullWidth ? "100%" : "auto"};

        border: ${props.trash ? ".15rem solid #ff0000" : "none"};
        border-radius: 10px;

        padding: 12px;

        cursor: pointer;

        transition: transform .3s;

        &:hover {
            transform: scale(1.05);
            
            background-color: ${props.primary ? "#4e45cc" : (props.trash ? "#ff0000" : "#e4e4e4")};
            color: ${props.primary ? "#f0f0f0" : (props.trash ? "#f0f0f0" : "#000")};
        }
    `;

    return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default Button;
