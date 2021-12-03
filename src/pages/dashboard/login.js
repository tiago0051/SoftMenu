import { useState, useContext, useEffect } from "react";
import { parseCookies } from 'nookies'
import FeatherIcons from 'feather-icons-react'

import {AuthContext} from "../../contexts/AuthContext";

import { LoginStyled , LoginInput, LogarButton, LoadingStyle} from "../../styles/dashboard"

export default function Login(){
    const {signIn} = useContext(AuthContext)

    const [Usuário, setUsuário] = useState('')
    const [Senha, setSenha] = useState('')
    const [Notificação, setNotificação] = useState('')
    const [Loading, setLoading] = useState(false)

    function submitForm(event){
        event.preventDefault();

        setLoading(true)
        signIn(Usuário, Senha).then(async (boolean)=> {
            if(!boolean)
               setNotificação("Usuário ou senha incorreto(s) !")
            else
                setNotificação("")

            setLoading(false)
       })
    }

    return(
        <LoginStyled>
            <form onSubmit={submitForm}>
                <img src="/Logo-Completa-Branco.svg" alt="Logo SoftMenus"/>
                <span>{Notificação}</span>
                <LoginInput type="text" placeholder="CPF / CNPJ" onChange={event => setUsuário(event.target.value)}/>
                <LoginInput type="password" placeholder="Senha" onChange={event => setSenha(event.target.value)}/>
                <LogarButton type="submit" disabled={Loading}>Logar<FeatherIcons icon="log-in" size="30px"/></LogarButton>
            </form>

            <LoadingStyle loading={Loading ? true : false}>
                <img src="/carregando.webp" alt="Carregando"/>
            </LoadingStyle>
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