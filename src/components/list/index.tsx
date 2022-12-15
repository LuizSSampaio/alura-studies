import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import { Items } from "../../GlobalInterfaces";

interface ListProps {
    tasks: Array<Items>;
}

const List = (props: ListProps) => {
    const Ul = styled.ul`
        /* display: flex;
        flex-direction: column;
        flex-wrap: wrap; */
    `;

    return (
        <aside>
            <h2>Estudos do dia</h2>
            <Ul>
                {props.tasks.map((item) => (
                    <Item
                        key={uuidv4()}
                        title={item.title}
                        time={item.time}
                    />
                ))}
            </Ul>
        </aside>
    );
};

export default List;
