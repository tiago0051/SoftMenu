import Link from 'next/link'
import Router from 'next/router'
import { destroyCookie } from 'nookies'

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
                <img src={props.avatar == "" ? "https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp" : props.avatar} alt={props.nome}/>
                <h1>{props.nome == "" ? "Carregando" : props.nome}</h1>
            </div>

            <ul>
                <LiNavbar isSelected={props.selecionado == "perfil"}><Link href="/dashboard/perfil">Perfil</Link></LiNavbar>
                <LiNavbar isSelected={props.selecionado == "produtos"}><Link href="/dashboard/produtos">Produtos</Link></LiNavbar>
            </ul>

            <a onClick={logout} id="logout">Sair</a>
        </NavbarStyled>
    )
}