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
        letter-spacing: 0;
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
            linear-gradient(180deg, ${(props) => props.theme.cream} 0%, ${(props) => props.theme.creamDeep} 100%),
            ${(props) => props.theme.cream};
    }

    button, a {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
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

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
        }
    }
`;

export default globalStyles;
