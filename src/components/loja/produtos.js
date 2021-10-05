import { useEffect, useState } from "react"
import Router from 'next/router'
import Link from "next/link"

import {Produto, ProdutosStyled } from "../../styles/comps"
import Bebidas from "./bebidas"

export default function Produtos(props){

    const [Categorias, SetCategorias] = useState([])

    useEffect(() => {
        props.empresa.produtos.map(produto => {
            var categorias = Categorias

            categorias.indexOf(produto.categoria) === -1 && produto.categoria != "Bebidas" ? categorias.push(produto.categoria) : undefined
            SetCategorias([...categorias])
        })
    }, [])

    return(
        <ProdutosStyled>
            {
                Categorias.map(categoria => (
                    <div id={"cat-" + categoria} key={categoria}>
                        {
                            props.empresa.produtos.filter(produto => produto.categoria == categoria).map((produto) => {
                                return(
                                    <Link key={produto.nome} href={"/loja/produto/" + produto.nome}><Produto id={produto.nome + "_-" + produto.preço + "_-" + produto.imageUrl}>
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
                                    </Produto></Link>
                                )
                            })
                        }
                    </div>
                ))
            }

            <Bebidas title="Bebidas" empresa={props.empresa}/>
        </ProdutosStyled>
    )
}