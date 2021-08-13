import styled, { ThemeConsumer } from "styled-components";

export const ProdutoStyled = styled.main``

export const WallPaperProduct = styled.header`
    background: ${props => props.backgroundImage ? 'url(' + props.backgroundImage + ')' : props.theme.colors.primary};
    height: 35vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    svg {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text3};
        border-radius: 900%;
        margin-top: 10px;
        margin-left: 10px;
        height: 30px;
        width: 30px;
    }
`

export const Titulo = styled.div`
    padding: 10px;
    color: ${props => props.theme.colors.text};

    h1 {
        font-size: 24px;
    }

    p {
        font-size: 14px;
    }
`

export const VaricoesStyled = styled.section`
    position: relative;

    #title {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 40px;
        align-items: center;

        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text2};
        padding: 10px;
        
    }

    #title::before{
        content: "OBRIGATÓRIO";
        position: absolute;
        right: 10px;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text3};
        padding: 3px 5px;
        border-radius: 5px;
    }
`

export const Varicao = styled.div`
    border-top: 1px solid rgb(0, 0, 0, 0.1);
    padding: 10px;
    position: relative;

    p {
        font-size: 13px;
    }

    input {
        position: absolute;
        right: 10px;
        top: 20px;
        height: 20px;
        width: 20px;
    }
`

export const Bar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
    background-color: ${props => props.theme.colors.primary};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;

    #quantidade button{
        background: none;
        border: none;
        color: ${props => props.theme.colors.text2};
        font-size: 15px;
    }

    #quantidade span {
        color: ${props => props.theme.colors.text2};
        margin: 0 15px;
    }

    #total {
        color: ${props => props.theme.colors.text2};
    }

    button {
        color: ${props => props.theme.colors.text2};
        background: none;
        border: none;
    }
`