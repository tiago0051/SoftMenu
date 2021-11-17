import styled from "styled-components";

export const LoadingStyle = styled.div`
    position: absolute;
    display: ${props => (props.loading ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    bottom: 20px;
    right: 20px;
    height: 50px;
    width: 50px;
    z-index: 9999;
    background-color: white;
    border-radius: 50%;
    
    img {
        border-radius: 50%;
        height: 45px;
        width: 45px;
    }
`

export const LoginStyled = styled.section`
    background-color: ${props => props.theme.colors?.primary};
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
    color: ${props => props.theme.colors?.text2};
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
    background-color: ${props => props.theme.colors?.primary};
    box-shadow: 0px 1px 10px 5px rgb(0, 0, 0, 0.2);
    color: ${props => props.theme.colors?.text2};
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
    background-color: ${props => props.theme.colors?.primary};
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const NavbarStyled = styled.nav`
    background-color: ${props => props.theme.colors?.tertiary};
    width: 15vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 0 10px 1px rgb(0, 0, 0, 0.2);
    padding: 20px 0;
    color: ${props => props.theme.colors?.text2};
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
        color: ${props => props.theme.colors?.text2};
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
        background: ${props => props.theme.colors?.tertiary};

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
    background-color: ${props => props.theme.colors?.tertiary};
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
        color: ${props => props.theme.colors?.text2};
        font-weight: 400;
    }

    > div:first-child button {
        background-color: ${props => props.theme.colors?.tertiary};
        border: 0;
        color: ${props => props.theme.colors?.text2};
        height: 60px;
        width: 180px;
        font-size: 25px;
        border-radius: 10px;
        text-transform: uppercase;
        box-shadow: 0px 1px 10px 5px rgb(0, 0, 0, 0.2);
        cursor: pointer;

        :hover{
            filter: brightness(0.9);
        }
    }
`

export const ProdutosStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    color: ${props => props.theme.colors?.text2};

    * {
        font-size: 20px;
    }

    > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        position: relative;
        background-color: ${props => props.theme.colors?.tertiary};
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
        cursor: pointer;

        :hover{
            filter: brightness(0.8);
        }
    }

    #tertiary-column > div:last-child > button > svg{
        height: 40px;
        width: 40px;
        color: ${props => props.theme.colors?.tertiary};
    }
`

export const PerfilStyled = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;

    > span {
        font-size: 25px;
        color: ${props => props.theme.colors?.text2};
        margin-bottom: 20px;
    }

    > div {
        margin: 20px;
    }

    > div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .imagem {
        border-radius: 10px;
        border: 5px dashed ${props => props.theme.colors?.text2};
        padding: 5px;
        margin: 0 20px 20px;
        position: relative;
    }

    .imagem > img {
        border-radius: 10px;
        transition: filter 0.1s linear;
    }

    .imagem > button {
        display: none;
        position: absolute;
        height: calc(100% - 15px);
        width: calc(100% - 10px);
        background: none;
        border: 0;
        top: 5px;
        left: 5px;
        border-radius: 10px;
        color: ${props => props.theme.colors?.text2};
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.4);
        font-weight: 700;
        font-size: 25px;
    }

    .imagem:hover > button {
        display: block;
    }

    .imagem:hover > img {
        filter: blur(3px);
    }

    #informações {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #informações > input {
        margin-bottom: 20px;
        background: none;
        border: 0;
        border-bottom: 3px solid rgb(250,250,250, 0.4);
        color: ${props => props.theme.colors?.text2};
        font-size: 20px;
    }

    #informações > input:focus {
        border-bottom: 3px solid rgb(250,250,250, 0.8);
    }

    #informações > input::placeholder {
        color: rgb(250,250,250, 0.4);
    }

    #informações > button {
        background-color: ${props => props.theme.colors?.tertiary};

        background-color: ${props => props.theme.colors?.tertiary};
        border: 0;
        color: ${props => props.theme.colors?.text2};
        height: 60px;
        width: 180px;
        font-size: 25px;
        border-radius: 10px;
        text-transform: uppercase;
        box-shadow: 0px 1px 10px 5px rgb(0, 0, 0, 0.2);
        cursor: pointer;
        width: 100%;

        :hover{
            filter: brightness(0.9);
        }
    }
`