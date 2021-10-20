import { useContext } from 'react'
import { parseCookies } from 'nookies'

import { DashboardStyled, OptionStyled, ProdutosStyled } from '../../styles/dashboard'
import Navbar from '../../components/dashboard/navbar'
import { AuthContext } from '../../contexts/AuthContext'

export default function Produtos(props){
    const {empresa} = useContext(AuthContext)

    return(
        <DashboardStyled>
            <Navbar nome={empresa?.nome} avatar={empresa?.urls.avatar} selecionado="produtos"/>

            <OptionStyled>
                <h1>Produtos</h1>

                <ProdutosStyled>

                </ProdutosStyled>
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