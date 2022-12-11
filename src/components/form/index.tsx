import React from "react";
import styled from "styled-components";
import Button from "../button";

const Form = () => {
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

    const Input = styled.input`
        padding: 16px;

        border-radius: 8px;
    `;

    return (
        <Formulary>
            <InputContainer>
                <Label htmlFor="task">Adicione um novo estudo:</Label>
                <Input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="O que você quer estudar"
                    required
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="time">Tempo:</Label>
                <Input
                    type="time"
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