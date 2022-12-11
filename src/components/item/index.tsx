import React from "react";
import styled from "styled-components";

interface ItemProps {
    title: string;
    time: string;
}

const Item = (props: ItemProps) => {
    const ListItem = styled.li`
        padding: 16px;
        margin: 12px 0 12px 0;

        background-color: #4e45cc;
        color: #f0f0f0;

        border-radius: 8px;

        list-style: none;

        transition: transform .3s;

        &:hover {
            transform: scale(1.05);
        }
    `;

    const Title = styled.h3`
        padding-bottom: 12px;
    `;

    return (
        <ListItem>
            <Title>{props.title}</Title>
            <span>{props.time}</span>
        </ListItem>
    );
};

export default Item;