import Link from 'next/link'
import Router from 'next/router'
import { destroyCookie } from 'nookies'

import { NavbarStyled } from "../../styles/dashboard"

export default function Navbar(){

    function logout(){
        destroyCookie(null, 'nextauth.token')
        Router.push("/dashboard/login")
    }

    return(
        <NavbarStyled>
            <div>
                <img src="https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/rocks/perfil/logo.jpg" alt=""/>
                <h1>Rock´s</h1>
            </div>

            <ul>
                <li><Link href="/dashboard/perfil">Perfil</Link></li>
                <li><Link href="/dashboard/produtos">Produtos</Link></li>
            </ul>

            <a onClick={logout} id="logout">Sair</a>
        </NavbarStyled>
    )
}