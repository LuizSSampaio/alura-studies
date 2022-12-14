import React from "react";
import { Digit } from "./StyledWatch";

interface WatchProps {
    time: string,
}

const Watch = (props: WatchProps) => {
    return (
        <div>
            <Digit>{props.time[0]}</Digit>
            <Digit>{props.time[1]}</Digit>
            <Digit>{props.time[2]}</Digit>
            <Digit>{props.time[3]}</Digit>
            <Digit>{props.time[4]}</Digit>
            <Digit>{props.time[5]}</Digit>
            <Digit>{props.time[6]}</Digit>
            <Digit>{props.time[7]}</Digit>
        </div>
    );
};

export default Watch;