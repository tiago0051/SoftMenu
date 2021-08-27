import styled from "styled-components";

export const Title = styled.h1`
    font-size: 23px;
    font-weight: 700;
`

export const PerfilStyled = styled.header`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    #wallpaper {
        height: 20vh;
        width: 100vw;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-end;
        justify-content: center;

        background: ${props => props.backgroundImage ? 'url('+ props.backgroundImage  +')': props.theme.colors.primary};
        background-size: cover;
        background-position: 10px;

        margin-bottom: 40px;
    }

    #wallpaper > #avatar > img {
        display: block;
        width: 130px;
        height: 130px;

        margin-bottom: -30px;
        flex-shrink: 0;
        border-radius: 10px;
        overflow: hidden;
    }

    #empresa {
        width: 100%;
        text-align: center;
    }

    #empresa p {
        font-weight: 300;
        font-style: italic;
    }

    #status {
        border:2px solid ${props => props.aberto ? "green" : "red"};
        color: ${props => props.aberto ? "green" : "red"};
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
    }

    #informacoes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
        color: ${props => props.theme.colors.text};
        font-weight: 700;
    }

    #informacoes #informacoe {
        display: flex;
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
    }

    #informacoes p {
        display: flex;
        justify-items: center;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }

    #informacoes span {
        font-size: 10px;
    }

    #informacoes p svg {
        height: 14px;
        color: ${props => props.theme.colors.primary}
    }

    #informacoes #informacoe span a {
        font-size: 10px;
        color: ${props => props.theme.colors.text};
    }
`

export const CategoriasStyled = styled.section`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-x: scroll;
    flex-shrink: 0;
    padding: 5px;
    background-color: ${props => props.theme.colors.background2};

    ::-webkit-scrollbar {
        height: 2px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
`

export const Categoria = styled.a`
    height: 22%;
    width: 22%;
    text-align: center;
    flex-shrink: 0;
    position: relative;

    h2 {
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-weight: 400;
    }
`

export const ProdutosStyled = styled.section`
`

export const Produto = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 10px 10px;
    border-top: 1px solid rgb(0, 0, 0, 0.1);

    #informacoes {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100px;
        color: ${props => props.theme.colors.text};
    }

    #informacoes p {
        font-size: 13px;
    }

    #informacoes span {
        font-size: 18px;
        font-weight: 700;
    }

    #image, #image *{
        height: 90px;
        width: 125px;
        align-self: center;
        justify-self: center;
    }

    img {
        object-fit: cover;
        border-radius: 10px;
    }
`

export const BebidasStyled = styled.section`

    h2 {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text2};
        padding: 10px;
    }

`

export const Bebida = styled.div`
    border-top: 1px solid rgb(0, 0, 0, 0.3);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #informacoes {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #produto {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #produto img {
        width: 80px;
        border: 1px solid rgb(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    #produto > div {
        background-color: ${props => props.theme.colors.primary};
        height: 30px;
        padding: 5px 10px;
        margin-left: 20px;
        color: ${props => props.theme.colors.text2};
        border-radius: 5px;
    }

    #produto > div > button {
        background: none;
        border: none;
        color: ${props => props.theme.colors.text2};
        margin: 0 5px;
    }

    #produto > div > span {
        margin: 0 10px;
    }
`