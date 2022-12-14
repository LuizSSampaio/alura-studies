import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import TextInput from "../Inputs/TextInput";
import TimeInput from "../Inputs/TimeInput";

interface FormProps {
    addTask: (
        title: string,
        time: string,
    ) => void,
}

const Form = (props: FormProps) => {
    const Formulary = styled.form`
        display: flex;
        flex-direction: column;
    `;

    const InputContainer = styled.div`
        display: flex;
        flex-direction: column;

        margin-bottom: 16px;
    `;

    const Label = styled.label`
        font-size: 1.3em;
        font-weight: 700;

        padding-bottom: 8px;
    `;

    const submit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.addTask({
            title,
            time,
        });
        setTitle("");
        setTime("00:00:00");
    };

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("00:00:00");

    return (
        <Formulary onSubmit={submit}>
            <InputContainer>
                <Label htmlFor="task">Adicione um novo estudo:</Label>
                <TextInput
                    value={title}
                    onChange={value => setTitle(value)}
                    name="task"
                    id="task"
                    placeholder="O que você quer estudar"
                    required
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="time">Tempo:</Label>
                <TimeInput
                    value={time}
                    onChange={value => setTime(value)}
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </InputContainer>

            <Button primary>Enviar formulário</Button>
        </Formulary>
    );
};

export default Form;