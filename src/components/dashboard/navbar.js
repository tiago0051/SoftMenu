import Link from 'next/link'
import Router from 'next/router'
import { destroyCookie } from 'nookies'
import FeatherIcons from 'feather-icons-react'

import { NavbarStyled, LiNavbar } from "../../styles/dashboard"

export default function Navbar(props){

    function logout(){

        destroyCookie(undefined, 'nextauth.token', {
            path: '/',
        })

        Router.push("/dashboard/login")
    }

    return(
        <NavbarStyled>
            <div>
                <img src={!!props.avatar ? props.avatar : "/carregando.webp"} alt={props.nome}/>
                <h1>{!!props.nome ? props.nome : "Carregando"}</h1>
            </div>

            <ul>
                <LiNavbar isSelected={props.selecionado == "produtos"}><Link href="/dashboard/">Produtos</Link></LiNavbar>
                <LiNavbar isSelected={props.selecionado == "perfil"}><Link href="/dashboard/perfil">Perfil</Link></LiNavbar>
            </ul>

            <a onClick={logout} id="logout">Sair<FeatherIcons icon="log-out" size="25px"/></a>
        </NavbarStyled>
    )
}