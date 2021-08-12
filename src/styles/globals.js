import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
        font-size: 16px;
    }

    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text}
    }

    input {
        outline: 0;
    }

    label {
        font-weight: 100;
        font-size: 15px;
        font-style: italic;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    textarea {
        resize: none;
        outline: none;
        background-color: ${props => props.theme.colors.tertiary};
        border: ${props => props.theme.colors.tertiary} solid 2px;
        padding: 5px;
        border-radius: 10px;
        color: ${props => props.theme.colors.text}
    }

    textarea:focus{
        border: ${props => props.theme.colors.secondary} solid 2px;
    }

    button {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.text};
        padding: 10px;
        border: 0;
        border-radius: 5px;
        width: 100%;
        box-shadow: 0 5px 5px 1px rgb(0, 0, 0, 0.4);
        margin-bottom: 9px;
        cursor: pointer;
    }
`;