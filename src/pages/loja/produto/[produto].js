import React, {useEffect, useState} from "react"
import FeatherIcons from "feather-icons-react"
import { useRouter } from "next/router"
import axios from "axios"

import { ProdutoStyled, WallPaperProduct, Titulo, Bar } from "../../../styles/produto"

import Adicionais from '../../../components/loja/produto/adicionais'
import Bebidas from '../../../components/loja/bebidas'

import background from '../../../assets/loja/pizza.jpeg'

export default function Produto(props){
    const router = useRouter()

    const [Produto, setProduto] = useState({})

    useEffect(() => {
        const {produto:nomeProduto} = router.query

        setProduto(props.empresa.produtos.find(produto => produto.nome == nomeProduto))
    }, [])

    function adicionarProdutoCarrinho(event){
        var carrinho = JSON.parse(window.localStorage.getItem("carrinho"))

        if(!carrinho) carrinho = []

        carrinho.push({nome: produto[0], preço: produto[1]})

        window.localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }

    return(
        <ProdutoStyled>
            <WallPaperProduct backgroundImage={Produto.imageUrl}>
                <FeatherIcons icon="chevron-left"/>
            </WallPaperProduct>

            <Titulo>
                <h1>{Produto.nome}</h1>
                <p>{Produto.descrição}</p>
            </Titulo>

            <Adicionais/>

            <Bebidas title="Adicionar bebida"/>

            <Bar>
                <div id="quantidade">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>

                <div id="total">
                    <span>Total R$ 45,50</span>
                </div>

                <button>Adicionar</button>
            </Bar>
        </ProdutoStyled>
    )
}

export const getStaticProps = async (ctx) => {
    var response = await axios.post(process.env.LINK_API +'/empresa', {user: "mafia-burguer"})
  
    const empresa = response.data
  
    return {
      props: {
        empresa: empresa
      }
    }
}

export const getStaticPaths = async () => {

    var response = await axios.post(process.env.LINK_API +'/empresa', {user: "mafia-burguer"})
  
    const empresa = response.data

    const paths = empresa.produtos.map(produto => ({
        params: {produto: produto.nome}
    }))

    return {paths, fallback: false}
}