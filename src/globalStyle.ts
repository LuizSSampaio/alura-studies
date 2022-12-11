import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    }

    body {
        background-color: #0F0C29;
    }
`;

export default GlobalStyle;