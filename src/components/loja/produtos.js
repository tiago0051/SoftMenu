import { useEffect, useState } from "react"
import {Produto, ProdutosStyled } from "../../styles/comps"

export default function Produtos(props){

    useEffect(() => {
        console.log("a")
    }, [])

    function adicionarProdutoCarrinho(event){
        var id = event.target.parentElement.parentElement.id
        if(id == ""){
            id = event.target.parentElement.id
        }

        const produto = id.split('-')

        produto.map((inf) => {
            console.log(inf)
        })
    }

    return(
        <ProdutosStyled>
            {props.empresa.produtos.map((produto) => {
                return(
                    <Produto key={produto.nome} onClick={adicionarProdutoCarrinho} id={produto.nome + "-" + produto.preço}>
                        <div id="informacoes">
                            <h2>{produto.nome}</h2>
                            <p>{produto.descrição}</p>
                            <span>
                                {produto.preço.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                })}
                            </span>
                        </div>
        
                        <div id="image">
                            <img src={produto.imageUrl} alt={produto.nome}/>
                        </div>
                    </Produto>
                )
            })}
        </ProdutosStyled>
    )
}