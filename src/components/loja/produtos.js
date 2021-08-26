import { useEffect, useState } from "react"
import Router from 'next/router'

import {Produto, ProdutosStyled } from "../../styles/comps"
import Bebidas from "./bebidas"

export default function Produtos(props){

    function adicionarProdutoCarrinho(event){
        var id = event.target.parentElement.parentElement.id
        if(id == ""){
            id = event.target.parentElement.id
        }

        const produto = id.split('_-')

        Router.push("/loja/produto/" + produto[0])
    }

    return(
        <ProdutosStyled>
            {props.empresa.produtos.filter(produto => produto.categoria != "Bebidas").map((produto) => {
                return(
                    <Produto key={produto.nome} onClick={adicionarProdutoCarrinho} id={produto.nome + "_-" + produto.preço + "_-" + produto.imageUrl}>
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

            <Bebidas title="Bebidas" empresa={props.empresa}/>
        </ProdutosStyled>
    )
}