import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

const globalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    html {
        background: ${(props) => props.theme.cream};
        color: ${(props) => props.theme.graphite};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    body {
        min-width: 320px;
        overflow-x: hidden;
        background:
            radial-gradient(circle at top left, rgba(200, 138, 45, 0.13), transparent 34rem),
            ${(props) => props.theme.cream};
    }

    button, a {
        cursor: pointer;
    }

    button, input, textarea, select {
        font: inherit;
    }

    img {
        max-width: 100%;
        display: block;
    }

    :focus-visible {
        outline: 3px solid ${(props) => props.theme.amber};
        outline-offset: 3px;
    }
`;

export default globalStyles;
