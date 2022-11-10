import React from "react";
import styled from "styled-components";
import Form from "./components/form";
import List from "./components/list";

const App = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;

        height: 100vh;
    `;

    return (
        <Container>
            <Form />
            <List />
        </Container>
    );
};

export default App;
