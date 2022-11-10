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

    return (
        <Formulary>
            <InputContainer>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="O que você quer estudar"
                    required
                />
            </InputContainer>

            <InputContainer>
                <label htmlFor="time">Tempo</label>
                <input
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