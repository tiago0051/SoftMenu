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
    border-bottom: 3px solid ${props => props.theme.colors.text2};
    color: ${props => props.theme.colors.text2};
    margin-top: 50px;

    ::placeholder{
        color: rgb(250,250,250, 0.3);
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

    :hover{
        filter: brightness(0.95);
    }
`

export const DashboardStyled = styled.section`
    background-color: ${props => props.theme.colors.primary};
    height: 100vh;
    width: 100vw;
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

    div {
        width: 60%;
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
        bottom: 20px;
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