import styled from "styled-components";

export const CarrinhoStyled = styled.main`

`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    margin: 20px;

    svg {
        background-color: ${props => props.theme.colors.primary};
        height: 40px;
        width: 40px;
        border-radius: 900%;
        color: ${props => props.theme.colors.text2};
        margin-right: 20px;
    }

    h1 {
        font-size: 25px;
        font-weight: 400;
    }

    p {
        font-size: 15px;
        font-weight: 300;
        font-style: italic;
    }
`

export const Produtos = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px;

    #title {
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            height: 30px;
            width: 30px;
            margin-right: 20px;
        }

        h2 {
            font-size: 20px;
        }
    }
`

export const Produto = styled.div`
    border-top: 1px solid rgb(0, 0, 0, 0.1);
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #informacoes {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    img {
        height: 100px;
        border-radius: 10px;
    }

    span {
        font-size: 20px;
    }
`

export const Finalizar = styled.section`
    background-color: ${props => props.theme.colors.primary};
    padding: 30px 10px;

    input {
        width: 100%;
        padding: 5px 10px;
        background-color: ${props => props.theme.colors.background};
        border: none;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    input::placeholder{
        color: ${props => props.theme.colors.text3};
        opacity: 0.6;
    }

    #pesquisarEndereco {
        position: relative;
    }

    #pesquisarEndereco input {
        padding-right: 20px;
    }

    #pesquisarEndereco svg {
        position: absolute;
        right: 10px;
        top: 3px;
    }

    #button {
        color: ${props => props.theme.colors.text2};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #button span {
        font-size: 20px;
    }

    #button button {
        border-radius: 5px;
        background: none;
        border: none;
        color: ${props => props.theme.colors.text2};
    }
`