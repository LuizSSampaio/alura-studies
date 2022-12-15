import React from "react";
import { Input } from "../StyledInputs";

interface TextInputProps {
    value: string,
    name: string,
    id: string,
    placeholder: string,
    onChange: (value: string) => void,
    required: boolean,
}

const TextInput = (props: TextInputProps) => {
    const changeValue = (event: { target: { value: string } }) => {
        props.onChange(event.target.value);
    };

    return (
        <Input
            value={props.value}
            onChange={changeValue}
            type="text"
            name={props.name}
            id={props.id}
            key={props.id + props.name}
            placeholder={props.placeholder}
            required={props.required}
        />
    );
};

export default TextInput;
