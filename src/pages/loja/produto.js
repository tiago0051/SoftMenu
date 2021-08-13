import React from "react"
import FeatherIcons from "feather-icons-react"

import { ProdutoStyled, WallPaperProduct, Titulo, Bar } from "../../styles/produto"

import Adicionais from '../../components/loja/produto/adicionais'
import Bebidas from '../../components/loja/bebidas'

import background from '../../assets/loja/pizza.jpeg'

export default function Produto(){
    return(
        <ProdutoStyled>
            <WallPaperProduct backgroundImage={background.src}>
                <FeatherIcons icon="chevron-left"/>
            </WallPaperProduct>

            <Titulo>
                <h1>Pizza Calabresa</h1>
                <p>Queijo prato, calabresa, azeitona e cebola</p>
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