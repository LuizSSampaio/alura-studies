import React from "react";
import KeyGenerator from "../../logic/KeyGenerator";
import styled from "styled-components";
import Item from "../item";

interface Items {
    title: string;
    time: string;
}

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
                        key={KeyGenerator(item.title)}
                        title={item.title}
                        time={item.time}
                    />
                ))}
            </Ul>
        </aside>
    );
};

export default List;
