import styled from "styled-components";

export const Title = styled.h1`
    font-size: 26px;
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

    p {
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
    height: 150px;
    width: 130px;
    text-align: center;
    margin: 0 5px;
    flex-shrink: 0;

    div {
        height: 130px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
`