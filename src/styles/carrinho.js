import styled, { ThemeConsumer } from "styled-components";

export const CarrinhoStyled = styled.main``

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
    color: ${props => props.theme.colors.text3};

    h1 {
        font-size: 24px;
    }

    p {
        font-size: 14px;
    }
`

export const AdicionaisStyled = styled.section`
    position: relative;
    #title {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 40px;
        align-items: center;

        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text2};
        
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