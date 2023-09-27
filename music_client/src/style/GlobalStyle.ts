import { createGlobalStyle } from "styled-components"; 

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0 auto;
        width 95%;
        max-width: 2190px;
        font-size: 20zpx;
        font-family: 'Hind', sans-serif;
    }
`;

export default GlobalStyle;