import { useContext } from 'react'
import { parseCookies } from 'nookies'

import { DashboardStyled } from '../../styles/dashboard'
import Navbar from '../../components/dashboard/navbar'
import { AuthContext } from '../../contexts/AuthContext'

export default function Produtos(props){
    const {empresa} = useContext(AuthContext)

    return(
        <DashboardStyled>
            <Navbar nome={empresa ? empresa.nome : ""} avatar={empresa ? empresa.urls.avatar : ""} selecionado="produtos"/>
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

    return {
        props: {}
    }
}