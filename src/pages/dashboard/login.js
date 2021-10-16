import { useState, useContext, useEffect } from "react";
import { parseCookies } from 'nookies'

import {AuthContext} from "../../contexts/AuthContext";

import { LoginStyled , LoginInput, LogarButton} from "../../styles/dashboard"

export default function Login(){
    const {signIn} = useContext(AuthContext)

    const [Usuário, setUsuário] = useState('')
    const [Senha, setSenha] = useState('')
    const [Notificação, setNotificação] = useState('')

    function submitForm(event){
        event.preventDefault();

        signIn(Usuário, Senha).then(async (boolean)=> {
            if(!boolean)
               setNotificação("Usuário ou senha incorreto(s) !")
       })
    }

    return(
        <LoginStyled>
            <form onSubmit={submitForm}>
                <img src="/Logo-Completa-Branco.svg" alt="Logo SoftMenus"/>
                <span>{Notificação}</span>
                <LoginInput type="text" placeholder="Usuário (CPF / CNPJ)" onChange={event => setUsuário(event.target.value)}/>
                <LoginInput type="password" placeholder="Senha" onChange={event => setSenha(event.target.value)}/>
                <LogarButton type="submit">Logar</LogarButton>
            </form>

        </LoginStyled>
    )
}

export const getServerSideProps = async (ctx) => {
    const {'nextauth.token': token} = parseCookies(ctx)
    if(token){
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            }
        }
    }


    return{
        props: {}
    }
}