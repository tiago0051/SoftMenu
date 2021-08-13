import styled from "styled-components";

export const Title = styled.h1`
    font-size: 23px;
    font-weight: 900;
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

        margin-bottom: 70px;
    }

    #wallpaper > #avatar {
        display: block;
        width: 130px;
        height: 130px;

        margin-bottom: -65px;
        flex-shrink: 0;
        margin-right: 20px;
        border-radius: 10px;
        overflow: hidden;
    }

    #empresa {
        margin-bottom: -60px;
        margin-left: 20px;
    }

    #empresa p {
        font-weight: 300;
        font-style: italic;
    }

    #status {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: ${props => props.aberto ? "green" : "red"};
        color: ${props => props.theme.colors.text2};
        padding: 5px 10px;
        border-radius: 20px;
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
    margin-top: 20px;
`

export const Categoria = styled.div`
    height: 22%;
    width: 22%;
    text-align: center;
    flex-shrink: 0;
    position: relative;
    margin: 0 5px;
    margin-bottom: 10%;

    div {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 200%;
    }

    img {
        object-fit: cover;
    }

    h2 {
        font-size: 11px;
        width: 100%;
        color: ${props => props.theme.colors.text};
        font-weight: 700;
        position: absolute;
        bottom: -20px;
    }
`

export const InputPesquisar = styled.div`
    position: relative;
    width: calc(100% - 14px);
    margin: 0 7px;

    input{
        width: 100%;
        background: none;
        border: 2px solid ${props => props.theme.colors.text};
        border-radius: 5px;
        padding: 3px 20px 3px 5px;
        font-size: 18px;
    }

    input:focus{
        border: 2px solid ${props => props.theme.colors.primary};
    }

    input::placeholder{
        color: ${props => props.theme.colors.text};
        opacity: 0.4;
    }

    svg {
        position: absolute;
        right: 5px;
        top: 4px;
        height: 20px;
        color: ${props => props.theme.colors.text};
    }
`

export const ProdutosStyled = styled.section`
    padding: 10px;
`

export const Produto = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0 ;
    border-top: 1px solid rgb(0, 0, 0, 0.2);

    #informacoes {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100px;
        color: ${props => props.theme.colors.text};
    }

    #informacoes p {
        font-size: 13px;
        margin-top: 5px;
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