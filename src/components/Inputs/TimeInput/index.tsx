import React from "react";
import { Input } from "../StyledInputs";

interface TimeInputProps {
    value: string,
    name: string,
    id: string,
    step: string,
    min: string,
    max: string,
    onChange: (value: string) => void,
    required: boolean,
}

const TimeInput = (props: TimeInputProps) => {
    const changeValue = (event: { target: { value: string; }; }) => {
        props.onChange(event.target.value);
    };

    return (
        <Input
            value={props.value}
            onChange={changeValue}
            type="time"
            step={props.step}
            name={props.name}
            id={props.id}
            key={props.id + props.name}
            min={props.min}
            max={props.max}
            required={props.required}
        />
    );
};

export default TimeInput;