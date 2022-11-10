import React from "react";
import Item from "../item";

const List = () => {
    const task = [
        {
            title: "React1",
            time: "02:00:00",
        },
        {
            title: "React2",
            time: "02:30:00",
        },
        {
            title: "React3",
            time: "03:00:00",
        },
    ];
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {task.map((item) => (
                    <Item
                        key={item.title}
                        title={item.title}
                        time={item.time}
                    />
                ))}
            </ul>
        </aside>
    );
};

export default List;
