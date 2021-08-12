import styled from "styled-components";

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 900;
`

export const PerfilStyled = styled.header`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;

    #wallpaper {
        height: 20vh;
        width: 100vw;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-end;

        background: ${props => props.backgroundImage ? 'url('+ props.backgroundImage  +')': props.theme.colors.primary};
        background-size: contain;

        margin-bottom: 70px;
    }

    #wallpaper > div {
        display: block;
        width: 130px;
        height: 130px;

        margin-bottom: -65px;
        flex-shrink: 0;
    }

    #informacoes {
        text-align: center;
    }
`

export const CategoriasStyled = styled.section`
`