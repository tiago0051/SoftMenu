import { useContext } from 'react'
import { parseCookies } from 'nookies'

import { AuthContext } from '../../contexts/AuthContext'

import Navbar from '../../components/dashboard/navbar'
import { DashboardStyled, OptionStyled, StyledProduto } from "../../styles/dashboard"

export default function produto() {
    const {empresa} = useContext(AuthContext)

    return(
        <DashboardStyled>
            <Navbar nome={empresa?.nome} avatar={empresa?.urls.avatar} selecionado="perfil"/>

            <OptionStyled>
                <div>
                    <h1>Editar Produto</h1>
                    <button>Salvar</button>
                </div>
            </OptionStyled>
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