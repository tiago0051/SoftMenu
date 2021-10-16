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
    width: 60%;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 7px;
    border: 0;
    margin-top: 50px;

    ::placeholder{
        text-align: center;
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
    transition: 0.1s box-shadow linear;

    :hover{
        box-shadow: 0px 1px 20px 10px rgb(0, 0, 0, 0.2);
    }
`

export const DashboardStyled = styled.section`
    background-color: ${props => props.theme.colors.primary};
    height: 100vh;
    width: 100vw;
`

export const NavbarStyled = styled.nav`
    width: 15vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 0 10px 1px rgb(0, 0, 0, 0.3);
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
    }

    ul > li {
        margin: 15px;
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