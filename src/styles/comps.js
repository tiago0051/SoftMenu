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
        color: ${props => props.theme.colors.text3};
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
        color: ${props => props.theme.colors.text3};
    }
`

export const CategoriasStyled = styled.section`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    overflow-x: scroll;
    flex-shrink: 0;
`

export const Categoria = styled.div`
    height: 130px;
    width: 110px;
    text-align: center;
    margin: 0 5px;
    flex-shrink: 0;

    div {
        height: 110px;
        border-radius: 200%;
        margin-bottom: 10px;
    }
`