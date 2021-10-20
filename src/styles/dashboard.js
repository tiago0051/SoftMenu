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

export const LoginInput = styled.input`
    background: none;
    width: 60%;
    font-size: 20px;
    padding: 10px 20px;
    border: 0;
    border-bottom: 3px solid rgb(250,250,250, 0.4);
    transition: 0.2s border linear;
    color: ${props => props.theme.colors.text2};
    margin-top: 50px;

    ::placeholder{
        color: rgb(250,250,250, 0.4);
    }

    :focus{
        border-bottom: 3px solid rgb(250,250,250);
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
    transition: 0.1s filter linear;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
        margin-left: 15px;
    }

    :hover{
        filter: brightness(0.95);
    }
`

export const DashboardStyled = styled.section`
    background-color: ${props => props.theme.colors.primary};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`

export const NavbarStyled = styled.nav`
    background-color: ${props => props.theme.colors.tertiary};
    width: 15vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 0 10px 1px rgb(0, 0, 0, 0.2);
    padding: 20px 0;
    color: ${props => props.theme.colors.text2};
    position: relative;

    div {
        width: 60%;
        height: 200px;
        text-align: center;
    }

    div > img {
        width: 100%;
        border-radius: 15px;
    }

    div > h1 {
        font-size: 20px;
        margin-top: 10px;
    }

    li > a {
        text-decoration: none;
        color: ${props => props.theme.colors.text2};
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        margin-top: 80px;
        width: 100%;
    }

    ul > li {
        width: 100%;
        text-align: center;
    }

    ul > li > a {
        font-size: 20px;
    }

    #logout {
        cursor: pointer;
        position: absolute;
        bottom: 0;
        background: ${props => props.theme.colors.tertiary};

        width: 100%;

        transition: 0.1s filter linear;
        text-align: center;
        padding: 20px;
        font-size: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 15px;
        }

        :hover{
            filter: brightness(0.9);
        }
    }
`

export const LiNavbar = styled.li`
    padding: 10px 0;
    filter: ${props => props.isSelected ? "brightness(0.9)" : "brightness(1)"};
    background-color: ${props => props.theme.colors.tertiary};
    transition: 0.1s filter linear;

    :hover{
        filter: brightness(0.9);
    }
`

export const OptionStyled = styled.main`
    width: 75vw;
    height: 100vh;
    position: relative;

    h1 {
        width: 100%;
        text-align: center;
        padding: 20px;
        font-size: 25px;
        color: ${props => props.theme.colors.text2};
        text-transform: uppercase;
    }
`

export const ProdutosStyled = styled.section`

`

export const PerfilStyled = styled.section`

`