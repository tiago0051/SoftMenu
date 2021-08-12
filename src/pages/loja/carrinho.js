import React from "react"
import FeatherIcons from "feather-icons-react"

import { CarrinhoStyled, WallPaperProduct, Titulo } from "../../styles/carrinho"

import Adicionais from '../../components/loja/carrinho/adicionais'

import background from '../../assets/loja/pizza.jpeg'

export default function Carrinho(){
    return(
        <CarrinhoStyled>
            <WallPaperProduct backgroundImage={background.src}>
                <FeatherIcons icon="chevron-left"/>
            </WallPaperProduct>

            <Titulo>
                <h1>Pizza Calabresa</h1>
                <p>Queijo prato, calabresa, azeitona e cebola</p>
            </Titulo>

            <Adicionais>
                
            </Adicionais>
        </CarrinhoStyled>
    )
}