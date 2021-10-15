import styled from "styled-components";

export const LoginStyled = styled.section`
    background-color: ${props => props.theme.colors.primary};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;

    form {
        width: 500px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`

export const UsuárioInput = styled.input`
    width: 60%;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 7px;
    border: 0;
    margin-top: 50px;

    ::placeholder{
        text-align: center;
    }
`

export const SenhaInput = styled.input`
    width: 60%;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 7px;
    border: 0;
    margin-top: 30px;

    ::placeholder{
        text-align: center;
    }
`

export const LogarButton = styled.button`
    width: 60%;
    margin-top: 50px;
    font-size: 30px;
    padding: 10px 20px;
    border-radius: 7px;
    border: 0;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 1px 10px 5px rgb(0, 0, 0, 0.2);
    color: ${props => props.theme.colors.text2};
    cursor: pointer;
`