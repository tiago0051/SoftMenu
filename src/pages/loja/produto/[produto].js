import React, {useState, useEffect} from "react"
import FeatherIcons from "feather-icons-react"
import { useRouter } from "next/router"
import axios from "axios"

import { ProdutoStyled, WallPaperProduct, Titulo, Bar, Varicao, VaricoesStyled } from "../../../styles/produto"

export default function Produto(props){
    const router = useRouter()

    const [Produto, setProduto] = useState(props.produto)
    const [ValorTotal, setValorTotal] = useState(props.produto.preço)
    const [Quantidade, setQuantidade] = useState(1)

    const [Variações, SetVariações] = useState(props.produto.variações)
    const [ShowVariações, setShowVariações] = useState(false)

    useEffect(() => {
        setShowVariações(Variações[0] != undefined)
    }, [Variações])

    useEffect(() => {
        setValorTotal(props.produto.preço * Quantidade)
    }, [Quantidade])

    const [VariaçãoSelecionada, setVariaçãoSelecionada] = useState({Nome: ''})

    function setVariação(event){
        if(event.target.checked){
            const elements = event.target.parentElement.parentElement.children

            for(var i = 1; i < elements.length; i++)
                if(elements[i].children[2] != event.target)
                    elements[i].children[2].checked = false

            const element = event.target.parentElement

            var descrição = element.children[1].textContent

            setVariaçãoSelecionada({Nome: element.children[0].textContent, Descrição: descrição})
        }else{
            setVariaçãoSelecionada({Nome: '', Descrição: '', Valor: 0})
        }
    }

    function adicionarProdutoCarrinho(event){
        if(!(ShowVariações && VariaçãoSelecionada.Nome == '')){
            var carrinho = JSON.parse(window.localStorage.getItem("carrinho"))

            if(!carrinho) carrinho = []
    
            for(var i = 0; i < Quantidade; i++){
                console.log(i)
                carrinho.push({nome: Produto.nome, preço: Produto.preço, Variações: VariaçãoSelecionada})
            }
    
            window.localStorage.setItem("carrinho", JSON.stringify(carrinho))
            router.back()
        }
    }

    return(
        <ProdutoStyled>
            <WallPaperProduct backgroundImage={Produto.imageUrl}>
                <div onClick={() => router.back()}><FeatherIcons icon="chevron-left"/></div>
            </WallPaperProduct>

            <Titulo>
                <h1>{Produto.nome}</h1>
                <p>{Produto.descrição}</p>
            </Titulo>

            <VaricoesStyled>
                {
                    ShowVariações ? (
                        <div id="title">
                            <h2>Variações do Produto</h2>
                        </div>
                    ) : (<> </>)
                }
                {
                    Variações.map(adicional => (
                        <Varicao key={adicional.nome}>
                            <h3>{adicional.nome}</h3>
                            <p>{adicional.descrição}</p>
                            <input type="checkbox" onChange={setVariação}/>
                        </Varicao>
                    ))
                }
            </VaricoesStyled>

            <br/>
            <br/>
            <br/>
            <br/>

            <Bar Disabled={ShowVariações && VariaçãoSelecionada.Nome == ''}>
                <div id="quantidade">
                    <button onClick={() => {Quantidade > 1 ? setQuantidade(Quantidade-1) : setQuantidade(1)}}><FeatherIcons icon="minus"/></button>
                    <span>{Quantidade}</span>
                    <button onClick={() => setQuantidade(Quantidade+ 1)}><FeatherIcons icon="plus"/></button>
                </div>

                <div id="total">
                    <span>Total {ValorTotal
                        .toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                        })}
                    </span>
                </div>

                <button onClick={adicionarProdutoCarrinho}>Adicionar</button>
            </Bar>
        </ProdutoStyled>
    )
}

export const getStaticProps = async (ctx) => {
    var response = await axios.post(process.env.LINK_API +'/produto', {produto: ctx.params.produto})
  
    const produto = response.data
  
    return {
      props: {
        produto: produto
      }
    }
}

export const getStaticPaths = async () => {

    var response = await axios.post(process.env.LINK_API +'/produto')
  
    const produtos = response.data

    const paths = produtos.map(produto => ({
        params: {produto: produto.nome}
    }))

    return {paths, fallback: false}
}