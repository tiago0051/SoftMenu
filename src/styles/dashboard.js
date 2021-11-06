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
    width: 100%;
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
    position: fixed;
    z-index: 999;

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
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-left: calc(15vw + 20px);

    > div:first-child {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    > div:first-child h1 {
        width: 100%;
        text-align: left;
        font-size: 40px;
        color: ${props => props.theme.colors.text2};
        font-weight: 400;
    }

    > div:first-child button {
        background-color: ${props => props.theme.colors.tertiary};
        border: 0;
        color: ${props => props.theme.colors.text2};
        height: 60px;
        width: 180px;
        font-size: 25px;
        border-radius: 10px;
        cursor: pointer;
        text-transform: uppercase;
        box-shadow: 0px 1px 10px 5px rgb(0, 0, 0, 0.2);
    }
`

export const ProdutosStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    color: ${props => props.theme.colors.text2};

    * {
        font-size: 25px;
    }

    > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        position: relative;
        background-color: ${props => props.theme.colors.tertiary};
        padding: 20px;
        border-radius: 20px;
    }

    #first-column > img {
        border-radius: 20px;
        width: 150px;
    }

    #second-column {
        margin-left: 20px;
        margin-right: 190px;
    }

    #tertiary-column {
        position: absolute;
        right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 40px);
        align-items: flex-end;
    }

    #tertiary-column > div:first-child{
        display: flex;
        flex-direction: row;
    }

    #tertiary-column > div:first-child > h2{
        margin-left: 30px;
    }

    #tertiary-column > div:last-child {
        display: flex;
        flex-direction: row;
    }

    #tertiary-column > div:last-child > button{
        height: 50px;
        width: 50px;
        border: 0;
        border-radius: 5px;
        margin: 0 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #tertiary-column > div:last-child > button > svg{
        height: 40px;
        width: 40px;
        color: ${props => props.theme.colors.tertiary};
    }
`

export const PerfilStyled = styled.section`

`