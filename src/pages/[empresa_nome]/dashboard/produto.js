import { useContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { AuthContext } from '../../../contexts/AuthContext'

import Navbar from '../../../components/dashboard/navbar'
import { DashboardStyled, OptionStyled, StyledProduto } from "../../../styles/dashboard"

export default function produto() {
    const router = useRouter()
    const {empresa} = useContext(AuthContext)

    const [produto, setProduto] = useState({nome: '', descrição: '', preço: '', imageUrl: '/carregando.webp', categoria: '', variações: {}})

    useEffect(() => {
        const {produto} = router.query

        if(produto && empresa) {
            var produtoE = empresa.produtos.find(p => p.nome == produto)

            setProduto(produtoE)
        }

    }, [empresa])

    return(
        <DashboardStyled>
            <Navbar nome={empresa?.nome} avatar={empresa?.urls.avatar} selecionado="perfil"/>

            <OptionStyled>
                <div>
                    <h1>Editar Produto</h1>
                    <button>Salvar</button>
                </div>

                <StyledProduto>
                    <div>
                        <img src={produto.imageUrl} alt={produto.nome}/>
                        <button onClick={searchImageAvatar}>Enviar</button>
                    </div>


                    <input type="text" placeholder="Nome do Produto" defaultValue={produto.nome}/>
                    <input type="text" placeholder="Descrição" defaultValue={produto.descrição}/>
                    <input type="text" placeholder="Preço" defaultValue={produto.preço}/>
                    <input type="text" placeholder="Categoria" defaultValue={produto.categoria}/>
                </StyledProduto>
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