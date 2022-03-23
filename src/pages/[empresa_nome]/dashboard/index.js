import { useContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import Head from 'next/head'
import FeatherIcon from 'feather-icons-react'
import Router from 'next/router'

import { DashboardStyled, OptionStyled, ProdutosStyled } from '../../../styles/dashboard'
import Navbar from '../../../components/dashboard/navbar'
import { AuthContext } from '../../../contexts/AuthContext'
import axios from 'axios'

export default function Produtos(props){
    const {empresa} = useContext(AuthContext)

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        if(empresa){
            axios.post("/api/produtos", {empresa_nome: props.empresa_nome}).then((response) => {
                if(response.status == 200){
                    setProdutos(response.data.produtos)
                }
            })
        }
    }, [empresa])

    return(
        <DashboardStyled>
            <Head>
                <title>{empresa ? empresa.nome : "Carregando"} - Produtos</title>
            </Head>
            <Navbar nome={empresa?.nome} avatar={empresa?.avatar} selecionado="produtos"/>

            <OptionStyled>
                <div>
                    <h1>Lista de Produtos</h1>
                    <button onClick={() => Router.push("/dashboard/produto")}>Adicionar</button>
                </div>

                <ProdutosStyled>
                    {
                        produtos && produtos.map(produto => (
                            <div key={produto._id}>
                                <div id="first-column">
                                    <img src={produto.imagem} alt=""/>
                                </div>
        
                                <div id="second-column">
                                    <h2>{produto.nome}</h2>
                                    
                                    <p>{produto.descricao}</p>
                                </div>
        
                                <div id="tertiary-column">
                                    <div>
                                        <h2>
                                            {produto.valor.toLocaleString('pt-BR', {
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

    const empresa_nome = ctx.query.empresa_nome

    if(!token){
        return {
            redirect: {
                destination: `/${empresa_nome}/dashboard/login`,
                permanent: false,
            }
        }
    }

    return {
        props: {empresa_nome}
    }
}