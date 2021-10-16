import { useContext, useEffect } from 'react'
import { parseCookies, destroyCookie } from 'nookies'
import Link from 'next/link'
import Router from 'next/router'

import { DashboardStyled } from '../../styles/dashboard'
import { AuthContext } from '../../contexts/AuthContext'

export default function Index(ctx){
    const {user} = useContext(AuthContext)

    function logout(){
        destroyCookie(null, 'nextauth.token')
        Router.push("/dashboard/login")
    }

    return(
        <DashboardStyled>
            <nav>
                <div>
                    <img src="https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/rocks/perfil/logo.jpg" alt=""/>
                    <h1>Rock´s</h1>
                </div>

                <ul>
                    <li><Link href="/dashboard/perfil">Perfil</Link></li>
                    <li><Link href="/dashboard/produtos">Produtos</Link></li>
                </ul>

                <a onClick={logout}>Sair</a>
            </nav>
        </DashboardStyled>
    )
}

export const getServerSideProps = async (ctx) => {
    const {'nextauth.token': token} = parseCookies(ctx)
    if(!token){
        return {
            redirect: {
                destination: '/dashboard/login',
                permanent: false,
            }
        }
    }


    return{
        props: {}
    }
}