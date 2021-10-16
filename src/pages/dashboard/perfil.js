import { useContext } from 'react'
import { parseCookies } from 'nookies'

import { DashboardStyled } from '../../styles/dashboard'
import Navbar from '../../components/dashboard/navbar'
import { AuthContext } from '../../contexts/AuthContext'

export default function Perfil(){
    const {user} = useContext(AuthContext)

    return(
        <DashboardStyled>
            <Navbar/>
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