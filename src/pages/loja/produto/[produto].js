import React, {useState} from "react"
import FeatherIcons from "feather-icons-react"
import { useRouter } from "next/router"
import axios from "axios"

import { ProdutoStyled, WallPaperProduct, Titulo, Bar } from "../../../styles/produto"

import Adicionais from '../../../components/loja/produto/adicionais'

export default function Produto(props){
    const router = useRouter()

    const {produto:nomeProduto} = router.query

    //const [Produto, setProduto] = useState(props.produto)

    function adicionarProdutoCarrinho(event){
        var carrinho = JSON.parse(window.localStorage.getItem("carrinho"))

        if(!carrinho) carrinho = []

        carrinho.push({nome: produto[0], preço: produto[1]})

        window.localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }

    /*return(
        <ProdutoStyled>
            <WallPaperProduct backgroundImage={Produto.imageUrl}>
                <div onClick={() => router.back()}><FeatherIcons icon="chevron-left"/></div>
            </WallPaperProduct>

            <Titulo>
                <h1>{Produto.nome}</h1>
                <p>{Produto.descrição}</p>
            </Titulo>

            <Adicionais adicionais={Produto.adicionais}/>

            <br/>
            <br/>
            <br/>
            <br/>

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
    )*/
    return <></>
}

/*export const getStaticProps = async (ctx) => {
    var response = await axios.post(process.env.LINK_API +'/produto', {produto: ctx.params.produto})
  
    const produto = response.data
  
    return {
      props: {
        produto: produto
      }
    }
}*/

/*export const getStaticPaths = async () => {

    var response = await axios.post(process.env.LINK_API +'/produto')
  
    const produtos = response.data

    const paths = produtos.map(produto => ({
        params: {produto: produto.nome}
    }))

    return {paths, fallback: false}
}*/