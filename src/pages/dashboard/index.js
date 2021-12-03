import { useContext } from 'react'
import { parseCookies } from 'nookies'
import FeatherIcon from 'feather-icons-react'
import Router from 'next/router'

import { DashboardStyled, OptionStyled, ProdutosStyled } from '../../styles/dashboard'
import Navbar from '../../components/dashboard/navbar'
import { AuthContext } from '../../contexts/AuthContext'

export default function Produtos(props){
    const {empresa} = useContext(AuthContext)

    return(
        <DashboardStyled>
            <Navbar nome={empresa?.nome} avatar={empresa?.urls.avatar} selecionado="produtos"/>

            <OptionStyled>
                <div>
                    <h1>Lista de Produtos</h1>
                    <button onClick={() => Router.push("/dashboard/produto")}>Adicionar</button>
                </div>

                <ProdutosStyled>
                    {
                        empresa?.produtos.map(produto => (
                            <div key={produto._id}>
                                <div id="first-column">
                                    <img src={produto.imageUrl} alt=""/>
                                </div>
        
                                <div id="second-column">
                                    <h2>{produto.nome}</h2>
                                    
                                    <p>{produto.descrição}</p>
                                </div>
        
                                <div id="tertiary-column">
                                    <div>
                                        <h2>
                                            {produto.preço.toLocaleString('pt-BR', {
                                                            style: 'currency',
                                                            currency: 'BRL',
                                            })}
                                        </h2>
                                    </div>
                                    <div>
                                        <button><FeatherIcon icon="trash-2"/></button>
                                        <button><FeatherIcon icon="pause"/></button>
                                        <button><FeatherIcon icon="edit-2"/></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
   
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